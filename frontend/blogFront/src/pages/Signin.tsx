import { Auth } from "../selfMadeComponents/Auth"
import { Quote } from "../selfMadeComponents/Quote"

export const Signin = () => {
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Auth type="signin" />
            </div>
            <div className="hidden lg:block">
                <Quote />
            </div>
        </div>
    </div>
}


// "use client";
// import React from 'react';
// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';


// export const Signin = () => {


//   return (
//     <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
//       <h1 className="text-xl font-bold">My Application</h1>
//       <nav>
//         <SignedOut>
//           <SignInButton afterSignInUrl="/blogs">
//             <button className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700">
//               Sign In
//             </button>
//           </SignInButton>
//         </SignedOut>
//         <SignedIn>
//           <UserButton afterSignOutUrl="/" />
//         </SignedIn>
//       </nav>
//     </header>
//   );

// };
