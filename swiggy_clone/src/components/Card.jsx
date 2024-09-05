import React from 'react';
import { FcRating } from "react-icons/fc";

export default function Card(props) {
  return (
    <div className='w-[273px] shrink-0 rounded-[15px] grow duration-300' style={{
      transform: `translateX(-${props.slide * 100}%)`
    }}>
      <div className='group h-[182px] rounded-[15px] overflow-hidden relative cursor-pointer'>
        <img className="group-hover:scale-110 duration-200  object-cover w-full h-full" src={`${props.image}`} alt="" />
        <div className='image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[22px] font-bold text-white tracking-tighter '>
            {props.offer}
        </div>
      </div>
      <div className='mt-3 text-xl font-bold'>
        {props.title}
      </div>
      <div>
      <FcRating className=' inline '/> {props.rating}
      <span className='ml-3'>{props.minTime} - {props.maxTime}min</span>
      </div>
      <div>
        {props.name}
        <br />
        {props.place}
      </div>
    </div>
  )
}
