import React from 'react';
import TicketCard from './TicketCard';
import { FaBus } from 'react-icons/fa';
import { GrRefresh } from "react-icons/gr";


const SearchResult = ({ buses }) => {
  return (
    <div className='w-full col-span-3 space-y-10 pt-11'>
      
      <div className='space-y-6'>
        <TicketCard icon={FaBus} busName={"Janaka Express"} routeFrom={"Matara"} routeTo={"Colombo"} arrivalTime={"9.00 A.M"} departureTime={"12.00 A.M"} price={"1500"} availableSeats={"22"}/>
        <TicketCard icon={FaBus} busName={"MWS Express"} routeFrom={"Galle"} routeTo={"Colombo"} arrivalTime={"9.00 A.M"} departureTime={"12.00 A.M"} price={"1500"} availableSeats={"22"}/>
        <TicketCard icon={FaBus} busName={"MWS Express"} routeFrom={"Matara"} routeTo={"Colombo"} arrivalTime={"9.00 A.M"} departureTime={"12.00 A.M"} price={"1500"} availableSeats={"22"}/>
        <TicketCard icon={FaBus} busName={"Janaka Express"} routeFrom={"Matara"} routeTo={"Colombo"} arrivalTime={"9.00 A.M"} departureTime={"12.00 A.M"} price={"1500"} availableSeats={"22"}/>
        <TicketCard icon={FaBus} busName={"MWS Express"} routeFrom={"Matara"} routeTo={"Colombo"} arrivalTime={"9.00 A.M"} departureTime={"12.00 A.M"} price={"1500"} availableSeats={"22"}/>
        <TicketCard icon={FaBus} busName={"Janaka Express"} routeFrom={"Matara"} routeTo={"Colombo"} arrivalTime={"9.00 A.M"} departureTime={"12.00 A.M"} price={"1500"} availableSeats={"22"}/>
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="w-fit px-8 py-3 bg-primary hover:bg-transparent border-2 border-primary hover:border-primary rounded-xl text-base font-normal flex items-center gap-2">
          <GrRefresh />
          Load More
        </button>
      </div>

    </div>
  );
};

export default SearchResult;