"use client"
import { authContext } from '@/app/components/AuthProvider/AuthProvider';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import Loader from '@/app/components/Loader/Loader';
import { useSignInUserMutation } from '@/app/components/redux/Api/UserApi';
import { Router } from 'next/router';
function page(props) {
    const router = useRouter();
    const [signInUser, { isLoading, error }] = useSignInUserMutation();

    const { createUser, profileUpdate, loading, googleLogin } = useContext(authContext);
    const [PageLoading, setPageLoading] = useState(false)
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const onSubmit = async (data) => {
        const password = data?.password;
        const confirm = data?.confirm;
        if (password !== confirm) {
            return toast.error('password does not match')
        }
        setPageLoading(true)
        const image = data.image[0]
        const formData = new FormData()

        formData.append('image', image);

        const keyis = `bd0f22832703db189e737da27b90a211`
        const url = `https://api.imgbb.com/1/upload?key=${keyis}`
        axios.post(url, formData).then(res => {
            if (res?.data?.data?.url) {
                const name = data?.name;
                const email = data?.email;
                const image = res?.data?.data?.url;


                const img = res?.data?.data?.url;
                console.log(name,email,password,confirm,image)
                createUser(email, password).then(res => {
                 
                    if (res) {
                      
                        profileUpdate(name, image).then(res => {
                            const userInfo = { name,email : email.toLowerCase() , image, role: 'user' };

                            signInUser(userInfo).then(res => {
                               
                                router.push('/home')
                              
                                
                            });

                            setPageLoading(false)
                        }).catch(e => {

                        })
                    }
                }).catch(e => {
                    if (e) {
                        toast.error('something went wrong')
                        setPageLoading(false)
                    }
                })
            }
        })

    }
    const googleHandler = () => {
        return googleLogin().then(res => {
            console.log(res?.user)
            setPageLoading(true)
            const name = res?.user?.displayName;
            const email = res?.user?.email;
            const image = res?.user?.photoURL;
            const userInfo = { name, email:email.toLowerCase(), image, role: 'user' }
            signInUser(userInfo).then(res => {

            
                router.push(`/home`)
            });
            setPageLoading(false)

        }).catch(e => {
            console.log(e.message)
        })
    }
    if (PageLoading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <Toaster />
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
                        <input type='file' placeholder='' className='mb-6 py-10 border  outline-none px-5 w-full' {...register("image")} />

                        <div>
                            <button type='submit' className='bg-green-600 w-full font-semibold hover:bg-green-800 my-4 px-10 py-1 rounded-md text-white'>Register</button>
                        </div>
                    </form>
                    <div className='flex justify-center align-middle items-center gap-7'>
                        <h1 className='text-center py-4 '><Link className=' underline text-blue-600' href="/login">Login</Link></h1> <h1>Or</h1>
                        <h1 className='text-center py-4 '><Link className=' underline text-blue-600' href="/seller">Become Seller</Link></h1>
                    </div>
                    <div className="flex flex-col w-full border-opacity-50">

                        <div className="divider">OR</div>
                        <button onClick={googleHandler} className='flex mt-5 justify-center bg-yellow-400 py-1 gap-2 rounded-md align-middle items-center'><FcGoogle className='font-5xl'></FcGoogle>Google</button>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default page;