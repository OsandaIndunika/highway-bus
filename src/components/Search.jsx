import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa'
import { TbArrowsExchange } from 'react-icons/tb'

const Search = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSearch = () => {
    // Implement search logic here
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -800 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -800 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      className='w-full flex flex-col items-center'
    >
      <motion.h1
        initial={{ opacity: 0, y: -800 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -800 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className='text-5xl font-semibold text-neutral-700 mb-5'
      >
        {/* Find Best Bus For You!!! */}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: -800 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -800 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className='w-full bg-white border-2 border-neutral-300 shadow-lg rounded-xl p-5'
      >
        <div className='w-full flex items-center gap-5 justify-between'>
          <div className='w-[60%] flex items-center gap-5 relative'>
            <div className='w-1/2 h-14 border border-neutral-300 bg-white text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg'>
              <input
                type="text"
                placeholder='From...'
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="flex-1 h-full border-none bg-transparent focus:outline-none"
              />
              <div className='w-5 h-5 text-neutral-400'>
                <FaMapMarkerAlt className='w-full h-full'/>
              </div>
            </div>
            <div className='w-1/2 h-14 border border-neutral-300 bg-white text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg'>
              <input
                type="text"
                placeholder='To...'
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="flex-1 h-full border-none bg-transparent focus:outline-none"
              />
              <div className='w-5 h-5 text-neutral-400'>
                <FaMapMarkerAlt className='w-full h-full'/>
              </div>
            </div>

            <button className='absolute w-11 h-11 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center bg-primary'>
              <TbArrowsExchange className='w-6 h-6 text-neutral-50'/>
            </button>
          </div>
          <div className='flex-1 h-14 flex items-center gap-5'>
            <button
              onClick={handleSearch}
              className='w-fit px-5 h-full bg-primary hover:bg-transparent border-2 border-primary hover:border-primary rounded-xl text-base font-medium text-neutral-50 flex items-center justify-center gap-x-2 hover:text-primary ease-in-out duration-300'
            >
              <FaSearch/>
              Search
            </button>
          </div>
        </div>
        {from === '' || to === '' ? (
          <p className="text-black mt-5">No route is selected</p>
        ) : (
          // Render search results here
          <p className="text-black mt-5">Displaying search results...</p>
        )}
      </motion.div>
    </motion.div>
  )
}

export default Search