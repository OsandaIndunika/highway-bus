import React from 'react'
import { motion } from 'framer-motion'

const Ticket = ({ icon: Icon, busName, routeFrom, routeTo, arrivalTime, price, availableSeats }) => {
  return (
    <div className='w-full space-y-12 pb-16'>
        {/* Top Layout */}
        <div className='space-y-5 w-full bg-blue-400 flex py-4 items-center justify-center flex-col sticky top-0 z-30'>
            <motion.h1
                initial={{ opacity: 0, y: -800 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -800 }}
                transition={{ duration: 1.35, ease: 'easeInOut' }}
                className='text-3xl text-neutral-700 font-semibold'
            >
                Reserve your ticket
            </motion.h1>
        </div>
        <div className='w-full bg-blue-400 shadow-lg rounded-lg p-5'>
            <div className='flex items-center gap-5'>
                {Icon && <Icon className='w-10 h-10 text-primary' />}
                <div>
                    <h2 className='text-xl font-bold'>{busName}</h2>
                    <p className='text-sm text-gray-500'>{routeFrom} - {routeTo}</p>
                </div>
            </div>
            <div className='mt-5'>
                <p className='text-sm text-gray-500'>Arrival Time: {arrivalTime}</p>
                <p className='text-sm text-gray-500'>Price: ${price}</p>
                <p className='text-sm text-gray-500'>Available Seats: {availableSeats}</p>
            </div>
        </div>
    </div>
  )
}

export default Ticket