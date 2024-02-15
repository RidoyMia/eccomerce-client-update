import Link from 'next/link';
import React from 'react';
import { FcGoogle } from "react-icons/fc";
function page(props) {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3'>
                <div></div>
                <div className=' shadow-lg p-5 lg:p-10 md:p-7 '>
                    <h1 className='text-center text-3xl font-semibold pt-3 pb-8'>Login</h1>
                    <form>
                        <input type='email' placeholder='Enter your email' className='mb-6 py-2  outline-none px-5 w-full'></input>
                        <input type='password' placeholder='Enter your password' className='mb-6 py-2  outline-none px-5 w-full'></input>
                        <div>
                            <button type='submit' className='bg-green-600 w-full font-semibold hover:bg-green-800 my-4 px-10 py-1 rounded-md text-white'>Login</button>
                        </div>
                    </form>
                    <h1 className='text-center py-4 '>Dont have account? <Link className=' underline text-blue-600' href="/signup">Signup</Link></h1>
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