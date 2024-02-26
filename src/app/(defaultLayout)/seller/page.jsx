"use client"
import { authContext } from '@/app/components/AuthProvider/AuthProvider';
import Loader from '@/app/components/Loader/Loader';
import { useSignInUserMutation } from '@/app/components/redux/Api/UserApi';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast';

function page(props) {
    const router = useRouter()
    const {createUser,profileUpdate} = useContext(authContext);
    const [loading,setLoading] = useState(false)
    const [signInUser,{isLoading,isError}] = useSignInUserMutation()
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const onSubmit = (data) => {
        setLoading(true)
        const image = data.image[0]
        const formData = new FormData()
        
        formData.append('image',image);
      
         const keyis =`bd0f22832703db189e737da27b90a211`
         const url = `https://api.imgbb.com/1/upload?key=${keyis}`
         axios.post(url,formData).then(res =>{
            if(res?.data?.data?.url){
                const name = data?.name;
                const email = data?.email;
                const district = data?.district;
                const sub_district = data?.sub_district;
                const password = data?.password;
                const confirm = data?.confirm;
                const phone = data?.phone;
                const village = data?.village;
                const image = res?.data?.data?.url;
                const sellerInfo ={name,email,district,sub_district,phone,village,image,role:'seller'}
                console.log(sellerInfo,'seller to static')
                createUser(email,password).then(res => {
                    if(res){
                        profileUpdate(name, image).then(res => {
                         
                           
                            signInUser(sellerInfo).then(res => {
                               console.log(res?.data,'reesult')
                               
                                localStorage.setItem('userInfo', JSON.stringify(res?.data?.result))
                                const userInfo = JSON.parse(localStorage.getItem('userInfo'));
                                router.push(`/dashboard/${userInfo?.role}`)
                            });

                            setLoading(false)
                        }).catch(e => {

                        })
                    }
                }).catch(e=>{
                    toast.error('Something went wrong try by onother email ')
                })
            }
         })
       
        
    }
    if(loading){
        return <Loader></Loader>
    }
    return (
        <div>
            <Toaster></Toaster>
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
                       <input type='text' placeholder='Enter your district' className='mb-6 py-2  outline-none px-5 w-full' {...register("district")} />
                       <input type='number' placeholder='Enter your phone' className='mb-6 py-2  outline-none px-5 w-full' {...register("phone")} />
                       </div>
                       <div className='flex justify-center items-center align-middle gap-2'>
                       <input type='text' placeholder='Enter your village' className='mb-6 py-2  outline-none px-5 w-full' {...register("village")} />
                       <input type='text' placeholder='Enter your sub-dristict' className='mb-6 py-2  outline-none px-5 w-full' {...register("sub_district")} />
                       </div>
                       <div className='flex justify-center items-center align-middle gap-2'>
                       <input type='password' placeholder='Enter your password' className='mb-6 py-2  outline-none px-5 w-full' {...register("password")} />
                       <input type='password' placeholder='Confirm' className='mb-6 py-2  outline-none px-5 w-full' {...register("confirm")} />
                       </div>
                       <input type='file' placeholder='' className='mb-6 py-10 border  outline-none px-5 w-full' {...register("image")} />
                       
                       <div className='flex justify-center align-middle items-center gap-7'>
                   <h1 className='text-center py-4 '><Link className=' underline text-blue-600' href="/login">Login</Link></h1> 
                   
                   </div>
                       <div>
                            <button type='submit' className='bg-green-600 w-full font-semibold hover:bg-green-800 my-4 px-10 py-1 rounded-md text-white'>Create seller</button>
                        </div>
                    </form>
                  
                   

                    
                </div>
            </div>
        </div>
    );
}

export default page;