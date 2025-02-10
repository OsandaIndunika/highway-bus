import React from 'react';
import { Link } from 'react-router-dom';
import TopLayout from '../layout/TopLayout';
import RootLayout from '../layout/RootLayout';
import Warning from '../components/Warning';
import BusSeat from './BusSeat';

const Detail = () => {
  // show the warning message
  const message = (
    <>
      One individual can only book 10 seats. If you want to book more than 10 seats,
      please <Link to={"/about"} className="text-yellow-700 font-medium">contact our support team</Link>
    </>
  );

  return (
    <div className='w-full space-y-12 pb-16'>
      <TopLayout title={"Bus Seat Details"} />
      
      <RootLayout className="space-y-12 w-full pb-16">
        {/* Seat Selection and selection action details */}
        <div className='w-full space-y-8'>
          {/* Warning Message */}
          <Warning message={message} />
          {/* Seat Layout */}
          <BusSeat/>
        </div>

        {/* Bus Details */}
        <div className='w-full flex items-center justify-center flex-col gap-8 text-center'>
          {/* Bus details content */}
        </div>
      </RootLayout>
    </div>
  );
}

export default Detail;