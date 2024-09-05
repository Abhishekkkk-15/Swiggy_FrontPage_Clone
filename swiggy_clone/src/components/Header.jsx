// Icon's are from the react-icons.com
//All Icons imports{
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { MdOutlineLocalOffer } from "react-icons/md";
import { LuHelpingHand } from "react-icons/lu";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
// }
import React, { useState, useEffect } from 'react';

export default function Header() {
  const [toggle, setToggle] = useState(false)



  return (
    <>
      <div className="black-oerlay w-full h-full fixed duration-500 z-50" style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ? "visible" : "hidden"
      }} onClick={() => { setToggle(!toggle) }}>
        <div className="w-[500px] bg-white h-full absolute duration-[600ms]" style={{
          left: toggle ? "0%" : "-100%"
        }} onClick={(e) => e.stopPropagation()}> <span onClick={() => { setToggle(!toggle) }} className="cursor-pointer text-[45px] text-bold m-l-[20px]">X</span> </div>
      </div>
      <header className='p-3 shadow-xl text-[#686b78]   bg-white z-[9999]'>
        <div className=" max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px] " onClick={() => { setToggle(!toggle) }}>
            <img src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Emblem.png" alt="" className='w-full' />
          </div>
          <div className=''>
            <span className='font-bold  border-b-[3px] border-[black]'>Ratanada</span>  Jodhpur ,  Rajasthan,  india <RxCaretDown onClick={() => { setToggle(!toggle) }} fontSize={27} className='font-bold inline  text-[#fc8019] cursor-pointer' />
          </div>
          <nav className="flex list-none gap-5 ml-auto text-[16px] font-semibold">
            <li className="flex hover:text-[#fcB019] items-center gap-2 cursor-pointer"><CiSearch  />Search</li>
            <li className="flex hover:text-[#fcB019] items-center gap-2 cursor-pointer"><MdOutlineLocalOffer  />Offers</li>
            <li className="flex hover:text-[#fcB019] items-center gap-2 cursor-pointer"><LuHelpingHand />Help</li>
            <li className="flex hover:text-[#fcB019] items-center gap-2 cursor-pointer"><MdOutlineAssignmentInd />Sign in</li>
            <li className="flex hover:text-[#fcB019] items-center gap-2 cursor-pointer"><CiShoppingCart />Cart</li>
          </nav> 
          </div>
             </header>
    </>
  )
}
