import React, { useState } from 'react';

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const seatPrice = 10; // Price per seat

  const seats = [
    '1A', '1B', '1C', '1D',
    '2A', '2B', '2C', '2D',
    '3A', '3B', '3C', '3D',
    '4A', '4B', '4C', '4D',
    '5A', '5B', '5C', '5D',
  ];

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const calculateTotalPrice = () => {
    return selectedSeats.length * seatPrice;
  };

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <h1 className='text-3xl font-bold mb-5'>Select Your Seats</h1>
      <div className='grid grid-cols-4 gap-4'>
        {seats.map((seat) => (
          <div
            key={seat}
            className={`w-16 h-16 flex items-center justify-center border-2 rounded-lg cursor-pointer ${
              selectedSeats.includes(seat) ? 'bg-green-500 text-white' : 'bg-white text-black'
            }`}
            onClick={() => handleSeatClick(seat)}
          >
            {seat}
          </div>
        ))}
      </div>
      <div className='mt-5'>
        <p className='text-xl'>Selected Seats: {selectedSeats.join(', ')}</p>
        <p className='text-xl'>Total Price: ${calculateTotalPrice()}</p>
      </div>
    </div>
  );
};

export default SeatSelection;