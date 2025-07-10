import React, { useEffect, useState } from 'react';
import Card from './Card'

export default function OnlineDel() {

    const [data, setData] = useState([]);

  const fetchTopRest = async () =>{
    const response = await fetch('restaurantChains.json');
    const ddata = await response.json()
    setData(ddata);
    // console.log(ddata)
  }

  useEffect(
    ()=>{
      fetchTopRest();
    },[]
  )

  return (
    <div>
    <div className='max-w-[1200px] mx-auto overflow-hidden '>
      <div className='flex items-center justify-between'>
        <div className='text-[30px] text-bold mb-5'>Restaurant with Online delivery in Jodhpur</div> 
      </div>
      <div className="grid grid-cols-4 gap-3">
        {data.map((data,index)=>{
            return <Card {...data} key={index} />
        })}
      </div>
    </div>
    </div>
  )
}
