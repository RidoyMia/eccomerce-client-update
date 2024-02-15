"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
function page(props) {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3'>
                <div></div>
                <div className='shadow-lg p-5 lg:p-10 md:p-7'>
                    <h1 className='text-center text-3xl font-semibold pt-3 pb-8'>SignUp</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                       <div className='flex justify-center items-center align-middle gap-2'>
                       <input type='text' placeholder='Enter your name' className='mb-6 py-2  outline-none px-5 w-full' {...register("name")} />
                       <input type='email' placeholder='Enter your email' className='mb-6 py-2  outline-none px-5 w-full' {...register("email")} />
                       </div>
                       <div className='flex justify-center items-center align-middle gap-2'>
                       <input type='password' placeholder='Enter your password' className='mb-6 py-2  outline-none px-5 w-full' {...register("password")} />
                       <input type='password' placeholder='Confirm' className='mb-6 py-2  outline-none px-5 w-full' {...register("confirm")} />
                       </div>
                       <input type='file' placeholder='' className='mb-6 py-10 border  outline-none px-5 w-full' {...register("photo")} />
                       
                       <div>
                            <button type='submit' className='bg-green-600 w-full font-semibold hover:bg-green-800 my-4 px-10 py-1 rounded-md text-white'>Register</button>
                        </div>
                    </form>
                   <div className='flex justify-center align-middle items-center gap-7'>
                   <h1 className='text-center py-4 '><Link className=' underline text-blue-600' href="/login">Login</Link></h1> <h1>Or</h1>
                   <h1 className='text-center py-4 '><Link className=' underline text-blue-600' href="/login">Become Seller</Link></h1>
                   </div>
                    <div className="flex flex-col w-full border-opacity-50">
                        
                        <div className="divider">OR</div>
                        <button className='flex mt-5 justify-center bg-yellow-400 py-1 gap-2 rounded-md align-middle items-center'><FcGoogle className='font-5xl'></FcGoogle>Google</button>
                    </div>

                    
                </div>
            </div>
        </div>
    );
}

export default page;