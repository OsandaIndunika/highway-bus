import React from "react";
import bus2 from "../assets/bus2.png";

const About = () => {
  return (
    <main className="bg-grey bg-opacity-[34] h-[80vh]  px-4 lg:px-10">
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center w-full gap-16 h-full">
        <div className="flex-1 flex flex-col gap-y-6">
          <div className="flex items-center gap-x-1">
            <hr className="h-1 w-10 bg-black" />
            <h2 className="text-sm font-medium">
              Reservation Made Revolutionary
            </h2>
          </div>
          <h1 className="uppercase text-5xl leading-[78px] lg:text-6xl font-semibold">
            EXPLORE ROUTES <span className="text-primary">BOOK</span> TICKETS
            TRAVEL <span className="text-primary">HASSLE-FREE.</span>{" "}
          </h1>
        </div>
        <div className="flex-1 flex items-center justify-center h-full">
          <img
            src={bus2}
            alt="HeroImage"
            width={414}
            height={412}
            className=""
          />
        </div>
      </div>
    </main>
  );
};

export default About;
