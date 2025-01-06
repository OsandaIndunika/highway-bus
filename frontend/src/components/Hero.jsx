import React from "react";
import heroImage from "../assets/hero-img.png";
import vector from "../assets/vector.png";

const Hero = () => {
  return (
    <main className="px-6 lg:px-10 lg:py-16 py-8 2xl:mx-auto 2xl:max-w-5xl w-full h-full">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-20">
        <div className="flex-1 flex flex-col gap-y-6">
          <div className="flex items-center gap-x-1">
            <hr className="h-1 w-10 bg-black" />
            <h2 className="text-sm font-medium">Your Journey Starts Here</h2>
          </div>
          <h1 className="capitalize text-5xl leading-[58px] lg:text-6xl font-semibold">
            Reserve your seat with <span className="text-primary">ease</span>{" "}
            and travel <span className="text-primary">hassle-free.</span>{" "}
          </h1>
        </div>
        <div className="flex-1 flex items-center justify-center h-full">
          <img
            src={heroImage}
            alt="HeroImage"
            width={414}
            height={412}
            className=""
          />
          <img
            src={vector}
            alt="vector"
            width={454}
            height={412}
            className="absolute z-[-20]"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
