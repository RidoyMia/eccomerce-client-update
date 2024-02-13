"use client"
import React from 'react';
import { TbLayoutNavbar } from "react-icons/tb";
import logo from "../../../../images/Group 36.png"
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
import css from "./Header.css"
import { CiShoppingCart } from "react-icons/ci";
function Header(props) {
  
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
              <Link className='mx-5 text-[20px] text-white font-semibold' href="/home">login</Link>
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
    <ul className="menu p-4 w-64 min-h-full bg-green-600 text-base-content py-4">
    <div className='pb-4 flex justify-center items-center align-middle'>
          <Image src={logo} height={120} width={120} ></Image>
        </div>
      {/* Sidebar content here */}
      
      <Link className='mx-5 text-[20px] text-white ' href="/home">Home</Link> <br />
              <Link className='mx-5 text-[20px] text-white ' href="/home">Shop</Link><br />
              <Link className='mx-5 text-[20px] text-white ' href="/home">wishlist</Link><br />
              <Link className='mx-5 text-[20px] text-white ' href="/home">login</Link><br />
    </ul>
  </div>
</div>
        </div>
      </div>

    </div>
  );
}

export default Header;