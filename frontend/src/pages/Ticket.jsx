import React from 'react'
import TopLayout from '../layout/TopLayout'
import RootLayout from '../layout/RootLayout'
import { motion } from 'framer-motion'
import Search from '../components/Search'
import { FaBus, FaStar } from 'react-icons/fa'
import { TbAirConditioning } from 'react-icons/tb'
import { RiVipFill } from 'react-icons/ri'

const Ticket = () => {
  return (
    <div className='w-full rounded-xl p-5 border-2 border-neutral-300 space-y-4'>
    <div className='space-y-5 w-full border-b border-neutral-300/60 pb-4'>
        <div className='space-y-0'>
            <div className='w-full flex items-center justify-between'>
                <div className='flex items-center gap-x-2'>
                    <FaBus className='h-5 w-5 text-primary '/>
                    <p className='text-lg text-neutral-700 font-semibold'>
                        {busName}
                    </p>
                </div>
                <div className='flex items-center gap-x-4'>
                    <div className='flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5'>
                        <TbAirConditioning className='w-4 h-4 text-primary'/>
                        <p className='text-xs text-neutral-600 font-normal'>AC</p>
                    </div>
                    <div className='flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5'>
                        <FaStar className='w-4 h-4 text-yellow-600'/>
                        <p className='text-xs text-yellow-600 font-normal pt-0.5'>4.3</p>
                    </div>
                    <div className='flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5'>
                        <RiVipFill className='w-4 h-4 text-primary'/>
                        <p className='text-xs text-neutral-600 font-normal'>Sofa</p>
                    </div>
                    <div className='flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5'>
                        <MdOutlineChair className='w-4 h-4 text-primary rotate-90'/>
                        <p className='text-xs text-neutral-600 font-normal'>35 Seats</p>
                    </div>
                </div>
            </div>

            <div className='space-y-0.5'>
               <div className='w-full flex items-center justify-between gap-x-2.5'>
                <h1 className='text-2xl text-neutral-600 font-semibold'>{arrivalTime}</h1> 
                <div className='flex-1 border-dashed border border-neutral-300 relative'></div>
                <h1 className='text-2xl text-neutral-600 font-semibold'>{departTime}</h1> 
               </div>
               <div className='w-full flex items-center justify-between'></div>
            </div>
            <div className='w-full flex items-center justify-between gap-x-3'>
                <h1 className='text-xl text-neutral-600 font-semibold'>{routeFrome}</h1>
                <div className='flex-1 border-dashed border border-neutral-400 relative'>
                    <p className='absolute w-fit px-3 h-6 top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 bg-neutral-50 rounded-full flex items-center justify-center text-sm text-neutral-500 font-normal border-dashed border border-neutral-400'>{timeDuration}</p>
                </div>
                <h1 className='text-xl text-neutral-600 font-semibold'>{routeTo}</h1>
            </div>
        </div>
        
    </div>
    <div className='w-full flex items-center justify-between'>
        <h1 className='text-xl text-neutral-700 font-semibold'>Rs.{price}</h1>
        <button className='w-fit px-5 py-1.5 h-full bg-primary hover:bg-transparent border-2 hover:border-primary rounded-xl text-base font-normal text-neutral-50 flex items-center'>Reserve Seat</button>
    </div>
  
</div>
  )
}

export default Ticket
