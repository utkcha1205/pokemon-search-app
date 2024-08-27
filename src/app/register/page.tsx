"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useSession} from 'next-auth/react'

function page() {
    const  [error, setError] = useState('')
    const router = useRouter()
    // const {data:session, status:sessionStatus} = useSession()
    
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

    try{
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + password
            },
            body: JSON.stringify({email, password}),
        });
        if(response.status === 400){
            setError("The email is already registered")
        }
        if(response.status ===200 ||    response.status ===201){
            setError("")
            router.push('/login')}
        }
    catch (error:any) {
        setError(error.message);
        setTimeout(() => setError(''), 5000);
    }
   }


    return (
       
        <div className='flex  flex-col items-center justify-between p-24'>
            <div className='bg-[#212121] p-8 rounded shadow-md w-96'>
                <h1 className='text-4xl text-center font-semibold mb-8 text-white'>
                    Register  
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
                    <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'>Register</button>
                    <p className='text-red-600 text-[16px] mb-4'>{error || ''}</p>
                </form>
                <div className='text-center text-white mt-4'>
                    - OR -
                </div>  
                <Link
                className='block text-center text-blue-500 hover:underline mt-2'
                href="/login">
                Login with existing account
                </Link>
            </div>
        </div>
    );
}

export default page;