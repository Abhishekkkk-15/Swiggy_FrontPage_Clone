import React, { useEffect, useState } from 'react';
import { HiOutlineArrowSmLeft,HiOutlineArrowSmRight } from "react-icons/hi";
// import categoryData from ''

export default function Category() {
    
    const [category,setCategory] = useState([]);
    const [slide,setSlide] = useState(0);
    
    const fetchCategory = async () => {
        const response = await fetch('category.json');
        const data = await response.json()
        setCategory(data);
        // console.log(category[1].path)
    }
 
    const nextSlide = () => {
        if(category.length -8 == slide) return false;
        setSlide(slide +3)
    }

    const prevSlide = () => {
        if(slide == 0) return false;
        setSlide(slide -3)
    }

    useEffect(
        ()=>{
            fetchCategory();
        },[]
    )

  return (
    <div className='max-w-[1200px] mx-auto '>
        <div className='flex items-center justify-between'>
            <div className='text-[30px] text-bold'>What's on your Mind?</div>
            <div className="flex">
                <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer' onClick={prevSlide}><HiOutlineArrowSmLeft /></div>
                <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer' onClick={nextSlide}><HiOutlineArrowSmRight /></div>
            </div>
        </div>
        <div className="flex overflow-hidden">
            {
                category.map(
                    (cat,index)=>{
                          return ( <div key={index} className='shrink-0 w-[150px] duration-500' style={{
                            transform: `translateX(-${slide * 100}%)`
                          }}>
                                <img src={`${cat.image}`}/>
                                {/* <h1>{cat.path}</h1> */}
                            </div>)
                    }
                )
            }
        </div>
        <hr className='my-4 border-[1px]'/>
    </div>
  )
}
