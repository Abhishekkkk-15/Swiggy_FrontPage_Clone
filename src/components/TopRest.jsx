import React, { useEffect, useState } from 'react';
import Card from './Card'
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

export default function TopRest() {
  const [category,setCategory] = useState([]);
  const [slide, setSlide] = useState(0);
  const [data, setData] = useState([]);
  const [count,setCount] = useState(1)

  const fetchTopRest = async () => {
    const response = await fetch('restaurantChains.json');
    const ddata = await response.json()
    setData(ddata);
  }

  const nextSlide = () => {
    if (count == 4) return false;
    setSlide(slide + 2);
    setCount(count+1);
  }

  const prevSlide = () => {
    if (count == 1) return false;
    setSlide(slide - 2)
    setCount(count-1)
  }

  useEffect(
    () => {
      fetchTopRest();
    }, []
  )



  return (

    <div>
      <div className='max-w-[1200px] mx-auto overflow-hidden '>
        <div className='flex items-center justify-between'>
          <div className='text-[30px] text-bold mb-6'>What's on your Mind?</div>
          <div className="flex">
            <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer' onClick={()=> prevSlide()}><HiOutlineArrowSmLeft /></div>
            <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer' onClick={()=> nextSlide()}><HiOutlineArrowSmRight /></div>
          </div>
        </div>
        <div className='flex gap-3 overflow-hidden  duration-600 w-full' >
          {data.map((data, index) => {
            return <Card {...data} key={index} slide={slide} />
          })}
        </div>
        <hr className='my-4 border-[1px]' />
      </div>
    </div>

  )
}
