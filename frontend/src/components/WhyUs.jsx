import React from "react";
import roadSVG from "../assets/road.svg";
import seatSVG from "../assets/seat.svg";
import errorSVG from "../assets/error.svg";
import bookingSVG from "../assets/booking.svg";

const WhyUs = () => {
  return (
    <section className="px-6 lg:px-10 lg:py-24 py-40 flex items-center justify-center w-full">
      <div>
        <h1 className="text-4xl font-bold items-center justify-center text-center">
          Why choose SL highway?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full mt-20">
          <div className="max-w-56 flex flex-col text-center items-center gap-4">
            <img
              src={roadSVG}
              alt="roadSVG"
              width={50}
              height={50}
              className="object-cover"
            />
            <p>Discover available routes with real-time updates</p>
          </div>
          <div className="max-w-56 flex flex-col text-center items-center gap-4">
            <img
              src={seatSVG}
              alt="seatSVG"
              width={50}
              height={50}
              className="object-cover"
            />
            <p>Choose your preferred seat with an interactive seat map</p>
          </div>
          <div className="max-w-56 flex flex-col text-center items-center gap-4">
            <img
              src={errorSVG}
              alt="errorSVG"
              width={50}
              height={50}
              className="object-cover"
            />
            <p>Report or search for lost items with ease</p>
          </div>
          <div className="max-w-56 flex flex-col text-center items-center gap-4">
            <img
              src={bookingSVG}
              alt="bookingSVG"
              width={50}
              height={50}
              className="object-cover"
            />
            <p>Book your tickets quickly and securely</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
