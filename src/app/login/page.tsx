"use client"

import withAuth from '@/components/withAuthHOC/withAuth';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function Login() {
    const [error, setError] = useState('')
    const router = useRouter()
    
    // useLayoutEffect(() => {
    //     if(sessionStatus === 'authenticated'){
    //         router.replace('/')
    //     } 
    // },[sessionStatus,router])

    const isValidEmail = (email:string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    }

   const handleSubmit = async(e:any) =>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if(!isValidEmail(email)){
        setError('Invalid email')
        return
    }
    if(!password || password.length < 8){
        setError('Password must be at least 8 characters long')
        return;
    } 

    const res = await signIn("credentials",{redirect:false, email, password})

    if(res?.error){
        setError("Invalid credentials")
        if(res?.url){
            router.replace("/dashboard")
        }
       
    } else{
        setError("")
    }
   }

  
    return (
       <div className='flex  flex-col items-center justify-between p-24'>
        <div className='bg-[#212121] p-8 rounded shadow-md w-96'>
            <h1 className='text-4xl text-center font-semibold mb-8 text-white'>
                Login  
            </h1>
            <form  onSubmit={handleSubmit} >
                <input
                    type='text'
                    className='w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline'
                    placeholder='Email'
                    required
                />
                <input
                    type='password'
                    className='w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline'
                    placeholder='Password'
                    required
                />
                <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'>Sign In</button>
                <p className='text-red-600 text-[16px] mb-4'>{error || ''}</p>
            </form>
            <button onClick={() => signIn("github")} className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600' >SignIn with Github</button>
            <div className='text-center text-white mt-4'>
                - OR -
            </div>  
            
            <Link
            className='block text-center text-blue-500 hover:underline mt-2'
            href="/register">
            Create a new account
            </Link>
        </div>
    </div>
    );
}

export default withAuth(Login);