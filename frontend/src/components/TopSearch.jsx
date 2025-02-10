import React from 'react'
import TopSearchCard from './TopSearchCard'

const TopSearch = () => {
  return (
    <div className='w-full flex items-center justify-center text-center '>
        <h1 className='text-3xl text-neutral-800 font-bold '>
            Top Search <span className='text-primary'>Routes</span>
        </h1>
        {/* Top Search tickets routes card */}
        <div className='w-full grid grid-cols-3 gap-5'>
          <TopSearchCard routeFrome={"Matara"} routeTo={"Colombo"} timeDuration={"3 Hours"} price={"1800"}/>
          <TopSearchCard routeFrome={"Galle"} routeTo={"Colombo"} timeDuration={"3 Hours"} price={"1800"}/>
          <TopSearchCard routeFrome={"Kandy"} routeTo={"Colombo"} timeDuration={"3 Hours"} price={"1800"}/>
          <TopSearchCard routeFrome={"Matara"} routeTo={"Kandy"} timeDuration={"3 Hours"} price={"1800"}/>
          <TopSearchCard routeFrome={"Negambo"} routeTo={"Colombo"} timeDuration={"3 Hours"} price={"1800"}/>
        </div>
    </div>
    
  )
}

export default TopSearch
