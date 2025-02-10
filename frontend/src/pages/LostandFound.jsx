import React from "react";
import bus2 from "../assets/bus2.png";
import { Button } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa";

// function LostandFound({ theme }) {
//   const backgroundImage = '/bus.jpg';

const LostandFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center relative">
      <div className="w-full h-full flex flex-col justify-start items-center py-16 lg:py-24 px-10 sm:p-10">
        <div className="flex flex-col gap-10 md:gap-16 lg:gap-20">
          <div className="max-w-lg w-full flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <img
              src={bus2}
              alt="HeroImage"
              width={154}
              height={154}
              className="object-contain"
            />
            <div>
              <h2 className="uppercase font-bold text-orange-500">lost items</h2>
              <p className="text-sm text-justify">
                We are a dynamic team of five enthusiastic first-year university
                students working together on an innovative web development
                project.
              </p>
              <Button className="rounded-lg font-medium bg-transparent p-0 -ml-3">
                View
                <FaArrowRight />
              </Button>
            </div>
          </div>
          <div className="max-w-lg w-full flex flex-col lg:flex-row-reverse lg:items-center justify-between gap-8">
            <img
              src={bus2}
              alt="HeroImage"
              width={154}
              height={154}
              className="object-contain"
            />
            <div>
              <h2 className="uppercase font-bold text-green-500">
                found items
              </h2>
              <p className="text-sm text-justify">
                We are a dynamic team of five enthusiastic first-year university
                students working together on an innovative web development
                project.
              </p>
              <Button className="rounded-lg font-medium bg-transparent p-0 -ml-3">
                View
                <FaArrowRight />
              </Button>
            </div>
          </div>
          <div className="max-w-lg w-full flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <img
              src={bus2}
              alt="HeroImage"
              width={154}
              height={154}
              className="object-contain"
            />
            <div>
            <h2 className="uppercase font-bold text-red-500">
              You lost something?
            </h2>
            <p className="text-sm text-justify">
              We are a dynamic team of five enthusiastic first-year university
              students working together on an innovative web development
              project.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfo6Ha-x_a71xIae0tTxsvrcPfUl_RIfhPOzIzfTb4f-jqBVg/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg font-medium bg-transparent p-0 -ml-1"
            >
              <Button className="rounded-lg font-medium bg-transparent p-0 -ml-3">
                Submit
                <FaArrowRight />
              </Button>
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LostandFound;
