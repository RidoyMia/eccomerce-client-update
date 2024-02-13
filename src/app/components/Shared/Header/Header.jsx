import React from 'react';
import logo from "../../../../images/Group 36.png"
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
function Header(props) {
  return (
    <div className='bg-base-200'>
     
     <div className='flex justify-between items-center align-middle'>
       <div>
         <Image src={logo} height={160} width={220} className='w-[180px] lg:w-[220px] md:w-[220px]'></Image>
       </div>
       <div>
          <form>
             <div className='mx-3 flex align-middle items-center'>
               <input type='text' placeholder='search here' className='lg:w-[400px] md:w-[400px] w-[200px] h-[30px] lg:h-[40px] md:h-[40px] px-10 outline-none rounded-lg'></input>
               <button className='px-10 rounded-lg -ml-10 text-white   font-bold bg-green-600 h-[40px]'><CiSearch></CiSearch></button>
             </div>
          </form>
       </div>
       <div>
        ami
       </div>
     </div>

    </div>
  );
}

export default Header;