import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign, verify } from "hono/jwt";
import { createPostInput, updatePostInput } from "@crday07/medium-blog-common";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    }
}>();

blogRouter.use('/*', async (c, next) => {
	const jwt = c.req.header('Authorization');
	if (!jwt) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
	const token = jwt.split(' ')[1];
    try{
	const payload = await verify(token, c.env.JWT_SECRET);
	if (!payload) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
	c.set('userId', payload.id);
	await next()
    }
    catch(e){
        c.status(403);
        return c.json({ error: "unauthorized" });
    }
})



blogRouter.post('/', async (c) => {
	const userId = c.get('userId');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

    await prisma.$connect();

	try {
        const body = await c.req.json();

        if (!body.title || !body.content ) {
        return c.json({ error: "Title, content, and authorId are required" }, 400);
        }

        const { success } = createPostInput.safeParse(body);
        if (!success) {
            c.status(400);
            return c.json({ error: "invalid input" });
        }


        const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: userId, // Ensure userId is provided in request
        },
        });

        return c.json({ id: post.id });

  } catch (e) {
    console.error("Error creating post:", e);
    return c.json({ error: "Error creating post" }, 500);
  }

})


blogRouter.put('/', async (c) => {
	const userId = c.get('userId');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

    await prisma.$connect();
	const body = await c.req.json();
    const { success } = updatePostInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}



	prisma.post.update({
		where: {
			id: body.id,
			authorId: userId
		},
		data: {
			title: body.title,
			content: body.content
		}
	});

	return c.text('updated post');
});

blogRouter.get('/bulk', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	await prisma.$connect();

	// Fetch posts along with the author details
	const posts = await prisma.post.findMany({
		include: {
			author: {
				select: {
					email: true, // Assuming the user's name field is "name"
				},
			},
		},
	});
    console.log(posts);


	const formattedPosts = posts.map(post => ({
		id: post.id,
		title: post.title,
		content: post.content,
		published: post.published,
		authorId: post.author.email
	}));

	console.log(formattedPosts);

	return c.json(formattedPosts);

})


blogRouter.get('/:id', async (c) => {
	const id = c.req.param('id');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	await prisma.$connect();

	const post = await prisma.post.findUnique({
		where: {
			id
		}
	});

	return c.json(post);
})




