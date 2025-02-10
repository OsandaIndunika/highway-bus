import React from 'react';
import { motion } from 'framer-motion';
import { FaBus, FaStar } from 'react-icons/fa';
import { TbAirConditioning } from 'react-icons/tb';
import { RiVipFill } from 'react-icons/ri';
import { MdOutlineChair } from 'react-icons/md';
import { Link } from "react-router-dom";

const TicketCard = ({ icon: Icon, busName, routeFrom, routeTo, arrivalTime, departureTime, price, availableSeats }) => {
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
                <p className='text-xs text-neutral-600 font-normal'>{availableSeats} Seats</p>
              </div>
            </div>
          </div>

          <div className='space-y-0.5'>
            <div className='w-full flex items-center justify-between gap-x-2.5'>
              <h1 className='text-2xl text-neutral-600 font-semibold'>{arrivalTime}</h1> 
              <div className='flex-1 border-dashed border border-neutral-300 relative'>
                <p className="absolute w-14 h-14 p-0.5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-50 border-dashed border-neutral-400 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary"/>
                </p>
              </div>
              <h1 className='text-2xl text-neutral-600 font-semibold'>{departureTime}</h1> 
            </div>
            <div className='w-full flex items-center justify-between gap-x-5'>
              <p className='text-base text-neutral-500 font-normal'>
                {routeFrom}
              </p>
              <p className='text-base text-neutral-500 font-normal'>
                {routeTo}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <h1 className="text-xl text-neutral-700 font-semibold">
          Rs.{price} <span className="text-sm text-neutral-500 font-normal">/per seat</span>
        </h1>

        <motion.button
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden px-6 py-2 text-lg font-semibold rounded-xl border-2 border-primary bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transition-all duration-300
                     hover:bg-white hover:text-primary flex items-center gap-2"
        >
          <span className="absolute inset-0 bg-primary opacity-10 transition-opacity duration-300"></span>
          <Link 
            to="/busease/seat" 
            className="relative z-10 px-5 py-2 text-lg font-semibold text-white bg-blue-600 rounded-full 
              transition-all duration-300 ease-in-out hover:bg-blue-200 hover:text-blue-700 hover:pr-6">

                Reserve Seat
          </Link>
          <span className="relative z-10 opacity-0 transition-opacity duration-300 hover:opacity-100">🚀</span>
        </motion.button>
      </div>
    </div>
  )
}

export default TicketCard;