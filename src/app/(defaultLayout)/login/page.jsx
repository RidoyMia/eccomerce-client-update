"use client"
import { authContext } from '@/app/components/AuthProvider/AuthProvider';
import Loader from '@/app/components/Loader/Loader';
import { useLoginUserMutation } from '@/app/components/redux/Api/UserApi';


import Link from 'next/link';
import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
function page(props) {
    const { createUser, profileUpdate, loading ,googleLogin,loginUser,LogOut} = useContext(authContext);
    const [pageLoading,setPageLoading] = useState(false);
    const [LoginUser,{isError,isLoading}] = useLoginUserMutation();
   
    const loginHandler =(e)=>{
        e.preventDefault();
        setPageLoading(true)
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        loginUser(email,password).then(res=>{
          const newEmail = email.toLowerCase()
         if(res){
            LoginUser(newEmail).then(res =>{
                console.log(res?.data,'login data to server')
                localStorage.setItem('accesstoken',JSON.stringify(res?.data?.accesstoken ))
              }).catch(e=>{
                toast.error('something went wrong')
              })
         }
         pageLoading(false)
        }).catch(e=>{
            setPageLoading(false)
            toast.error('something went wrong')
        })
    }
    const googleLoginUser = ()=>{
        googleLogin().then(res =>{
            const email = res?.user?.email.toLowerCase();
            console.log(email,'res',res)
            LoginUser(email).then(res =>{
                if(res?.error){
                    LogOut().then(res =>{
                        toast.error('Please signUp first')
                    }).catch(e=>{
                        
                    })
                }
               console.log(res?.error,'google login')
            }).catch(e=>{
                toast.error('Please SignUp first')
            })
            
        }).catch(e=>{
            toast.error('Something went wrong')
        })
    }
    if(pageLoading){
        return <Loader></Loader>
    }

    return (
        <div>
            <Toaster></Toaster>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3'>
                <div></div>
                <div className=' shadow-lg p-5 lg:p-10 md:p-7 '>
                    <h1 className='text-center text-3xl font-semibold pt-3 pb-8'>Login</h1>
                    <form onSubmit={loginHandler}>
                        <input type='email' name='email' placeholder='Enter your email' className='mb-6 py-2  outline-none px-5 w-full'></input>
                        <input type='password' name='password' placeholder='Enter your password' className='mb-6 py-2  outline-none px-5 w-full'></input>
                        <div>
                            <button type='submit' className='bg-green-600 w-full font-semibold hover:bg-green-800 my-4 px-10 py-1 rounded-md text-white'>Login</button>
                        </div>
                    </form>
                    <h1 className='text-center py-4 '>Dont have account? <Link className=' underline text-blue-600' href="/signup">Signup</Link></h1>
                    <div className="flex flex-col w-full border-opacity-50">
                        
                        <div className="divider">OR</div>
                        <button onClick={googleLoginUser} className='flex mt-5 justify-center bg-yellow-400 py-1 gap-2 rounded-md align-middle items-center'><FcGoogle className='font-5xl'></FcGoogle>Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;