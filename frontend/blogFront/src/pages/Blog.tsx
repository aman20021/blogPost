import { Appbar } from "../selfMadeComponents/Appbar";
import { FullBlog } from "../selfMadeComponents/FullBlog";
import { Spinner } from "../selfMadeComponents/Spinner";
import { useBlog } from "../hooks";
import {useParams} from "react-router-dom";

// atomFamilies/selectorFamilies
export const Blog = () => {
    const { id } = useParams();
    console.log(id)
    const {loading, blog} = useBlog({
        id: id as string
    });
    console.log(blog)
    console.log(loading)
    if (loading) {
        return <div>
            <Appbar />
        
            <div className="h-screen flex flex-col justify-center">
                
                <div className="flex justify-center">
                    <Spinner />
                </div>
            </div>
        </div>
    }
    return <div>
        <FullBlog blog={blog} />
    </div>
}