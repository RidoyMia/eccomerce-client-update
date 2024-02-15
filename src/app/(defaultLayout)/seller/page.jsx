"use client"
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form"

function page(props) {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const onSubmit = (data) => {
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
                const img = res?.data?.data?.url;
                console.log(name,email,district,sub_district,password,confirm,phone,village,img)
            }
         })
       
        
    }
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