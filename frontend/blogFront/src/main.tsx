import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {VITE_CLERK_PUBLISHABLE_KEY} from './config.ts'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')!).render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <App />
    </ClerkProvider>

)
