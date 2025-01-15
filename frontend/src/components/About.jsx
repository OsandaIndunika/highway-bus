import React from "react";
import bus2 from "../assets/bus2.png";

const About = () => {
  return (
    <main className="bg-grey/50 bg-opacity-[30] lg:min-h-[80vh] flex items-center justify-center sm:py-12 px-4 py-16 lg:px-10">
      <div className="flex flex-col-reverse lg:flex-row-reverse gap-10">
        <div className="flex-1 flex flex-col gap-y-6">
          <div className="flex items-center gap-x-1">
            <hr className="h-1 w-10 bg-black" />
            <h2 className="text-sm font-medium">
              Reservation Made Revolutionary
            </h2>
          </div>
          <h1 className="uppercase text-4xl leading-[48px] lg:leading-[78px] lg:text-5xl font-semibold">
            EXPLORE ROUTES <span className="text-primary">BOOK</span> TICKETS
            TRAVEL <span className="text-primary">HASSLE-FREE.</span>{" "}
          </h1>
        </div>
        <div className="lg:flex-1 flex items-center justify-center">
          <img
            src={bus2}
            alt="HeroImage"
            width={414}
            height={412}
            className="lg:w-[50vw] lg:h-[50vh] object-contain"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
