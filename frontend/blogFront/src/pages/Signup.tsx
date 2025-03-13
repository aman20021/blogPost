"use client"


// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import axios from 'axios'


// export default function Signup() {
//     return (
//         <SignupForm />
//     )

// }

// function SignupForm() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Handle form submission logic here
//     console.log("Form submitted:", formData)
//   }

//   return (
//     <div className="flex min-h-screen flex-col md:flex-row">
//       <div className="flex-1 flex items-center justify-center p-6 md:p-10">
//         <div className="w-full max-w-md space-y-8">
//           <div className="space-y-2">
//             <h1 className="text-3xl font-bold">Create an account</h1>
//             <p className="text-muted-foreground">
//               Already have an account?{" "}
//               {/* <Link href="#" className="text-primary hover:underline">
//                 Login
//               </Link> */}
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-2">
//               <label htmlFor="username" className="block font-medium">
//                 Username
//               </label>
//               <Input
//                 id="username"
//                 name="username"
//                 type="text"
//                 placeholder="Enter your username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="email" className="block font-medium">
//                 Email
//               </label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="m@example.com"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="password" className="block font-medium">
//                 Password
//               </label>
//               <Input
//                 id="password"
//                 name="password"
//                 type="password"
//                 placeholder=""
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <Button type="submit" className="w-full bg-black text-white hover:bg-black/90" onClick={async () => {
//                     const response = await axios.post("https://my-app.amansharma1924.workers.dev/api/v1/signup", {
//                         username: formData.username,
//                         email: formData.email,
//                         password: formData.password
//                     });
//                     console.log(response)
//                     localStorage.setItem("token", response.data.token)
//                     navigate("/dashboard")
//                   }}>
//               Sign Up
//             </Button>
//           </form>
//         </div>
//       </div>

//       <div className="flex-1 bg-gray-50 p-6 md:p-10 flex items-center justify-center">
//         <div className="max-w-md space-y-4">
//           <blockquote className="text-2xl font-medium">
//             "The customer service I received was exceptional. The support team went above and beyond to address my
//             concerns."
//           </blockquote>
//           <div>
//             <p className="font-semibold">Jules Winnfield</p>
//             <p className="text-muted-foreground">CEO, Acme Inc</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import { Auth } from "../selfMadeComponents/Auth"
import { Quote } from "../selfMadeComponents/Quote"

export const Signup = () => {
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Auth type="signup" />
            </div>
            <div className="hidden lg:block">
                <Quote />
            </div>
        </div>
    </div>
}
