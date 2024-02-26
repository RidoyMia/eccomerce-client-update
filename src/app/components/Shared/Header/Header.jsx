"use client"
import React, { useContext, useEffect, useState } from 'react';
import { TbLayoutNavbar } from "react-icons/tb";
import logo from "../../../../images/Group 36.png"
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
import css from "./Header.css"
import { CiShoppingCart } from "react-icons/ci";
import { authContext } from '../../AuthProvider/AuthProvider';
import { useRouter } from 'next/navigation';
import { useGetSingleUserQuery } from '../../redux/Api/UserApi';

function Header(props) {
const router = useRouter()
  const {user,LogOut} = useContext(authContext);
  
  const {data,isLoading,isError} = useGetSingleUserQuery(user?.email)




  const logout = ()=>{
    
    LogOut().then(res =>{
            localStorage.removeItem('userInfo')
            Router.pust('/ami')
     }).catch(e=>{
      
     })
  }
  return (
    <div className='bg-green-600 py-3'>
     
      <div className='flex justify-between items-center align-middle px-2'>
        <div>
          <Image src={logo} height={190} width={220} className='w-[180px] lg:w-[220px] md:w-[180px]'></Image>
        </div>
        <div>
          <form>
            <div className='mx-3 flex align-middle items-center'>
              <input type='text' placeholder='search here' className='lg:w-[300px] xl:w-[400px] md:w-[220px] w-[180px] h-[30px] lg:h-[40px] md:h-[40px] lg:px-10 md:px-6  px-2 outline-none rounded-lg'></input>
              <button className='px-3 lg:px-10 md:px-5 rounded-lg -ml-10 text-white   font-bold bg-yellow-300 md:h-[40px] h-[30px] lg:h-[40px]'><CiSearch></CiSearch></button>
            </div>
          </form>
        </div>
        <div>
          <div className="navbar-center hidden  lg:flex">
            <ul className="menu menu-horizontal px-1">
              <Link className='mx-5 text-[20px] text-white font-semibold' href="/home">Home</Link>
              <Link className='mx-5 text-[20px] text-white font-semibold' href="/home">Shop</Link>
              <Link className='mx-5 text-[20px] text-white font-semibold' href="/home"><h1 className='font-semibold'><CiShoppingCart></CiShoppingCart></h1></Link>
              {
                 data?.result[0]?.role? <Link className='mx-5 text-[20px] text-white font-semibold' href={`/${data?.result[0]?.role}`}>Dashboard</Link> : <Link className='mx-5 text-[20px] text-white font-semibold' href="/login">login</Link>
              }
              {
                 data?.result[0]?.role? <div className="dropdown dropdown-end">
                 <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                   <div className="w-10 rounded-full">
                     <img alt="Tailwind CSS Navbar component" src={data?.result[0]?.image} />
                   </div>
                 </div>
                 <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                   <li>
                     <a className="justify-between">
                       Profile
                       <span className="badge">New</span>
                     </a>
                   </li>
                   <li><a>Settings</a></li>
                   <li onClick={logout}><a>Logout</a></li>
                 </ul>
               </div>:''
              }
            </ul>
          </div>
          <div className="drawer block lg:hidden bg-green-600  xl:hidden drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button "><h1 className='text-xl font-semibold '><TbLayoutNavbar className='text-semibold text-white  text-[40px]'></TbLayoutNavbar></h1></label>
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-green-600 text-base-content py-4">
    <div className='pb-4 flex justify-center items-center align-middle'>
          <Image src={logo} height={120} width={120} ></Image>
        </div>
      {/* Sidebar content here */}
      
      <Link className='mx-5 text-[20px] text-white ' href="/home">Home</Link> <br />
              <Link className='mx-5 text-[20px] text-white ' href="/home">Shop</Link><br />
              <Link className='mx-5 text-[20px] text-white ' href="/home">wishlist</Link><br />
              {
                 data?.result[0]?.role? <Link className='mx-5 text-[20px] text-white font-semibold' href={`/${data?.result[0]?.role}`}>Dashboard</Link> : <Link className='mx-5 text-[20px] text-white font-semibold' href="/login">login</Link>
              }
              {
                 data?.result[0]?.role? <div className="dropdown dropdown-end">
                 <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                   <div className="w-10 rounded-full">
                     <img alt="Tailwind CSS Navbar component" src={data?.result[0]?.image} />
                   </div>
                 </div>
                 <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                   <li>
                     <a className="justify-between">
                       Profile
                       <span className="badge">New</span>
                     </a>
                   </li>
                   <li><a>Settings</a></li>
                   <li><button onClick={logout}>LogOut</button></li>
                   {
                 data?.result[0]?.role? <Link className=' ml-3 mt-1 text-[14px] text-black ' href={`/${data?.result[0]?.role}`}>Dashboard</Link> : <Link className='mx-5 text-[20px] text-white font-semibold' href="/login">login</Link>
              }
                 </ul>
               </div>:''
              }
    </ul>
  </div>
</div>
        </div>
      </div>

    </div>
  );
}

export default Header;