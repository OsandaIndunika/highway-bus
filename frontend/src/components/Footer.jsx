import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@nextui-org/button";

const section = [
  {
    title: "Quick Links",
    items: ["Home", "BusEase", "Lost & Found", "About Us", "FAQ"],
  },
];

const items = [
  {
    name: "Facebook",
    icon: <FaFacebook size={24} />,
    link: "https://facebook.com/",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={24} />,
    link: "https://instagram.com/",
  },
  {
    name: "Twitter",
    icon: <FaTwitter size={24} />,
    link: "https://x.com/",
  },
];

const Footer = () => {
  return (
    <footer className="px-4 bg-grey items-center justify-between w-full lg:p-8 2xl:mx-auto 2xl:max-w-5xl border-b border-gray-300 ">
      <div className="flex items-center justify-between w-full">
        <div className="text-m text-black">
          {section.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold mb-2">{section.title}</h4>
              <ul className="list-none hover:list-disc">
                {section.items.map((item, index) => (
                  <li key={index} className="mb-2">
                    <Link
                      to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                      className="hover:text-gray-400"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div></div>
        <div className="text-black flex flex-col gap-3 max-w-sm">
          <p className="font-bold uppercase">Subscribe to our Newsletter</p>
          <p className="text-sm text-slate-700">
            The latest updates, articles, and resources are sent to your inbox
            weekly.
          </p>
          <form className="flex items-center w-full relative">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full sm:w-3/4 p-2 rounded-md text-black"
            />
            <Button
              
              className="bg-primary absolute right-24 text-white px-4 py-2 rounded-md flex items-center transition duration-300"
            >
              Subscribe
              <FaArrowRight className="ml-2" />
            </Button>
          </form>
        </div>
      </div>
      <div className="flex flex-col border-t border- px-2 py-2 mx-auto justify-between sm:flex-row text-center">
        <p className="py-2 font-medium text-sm text-black">
          © 2024-SL Highway. All Rights Reserved
        </p>
        <div className="flex justify-between items-center sm:w-[150px] pt-2 text-2xl">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-black hover:text-primary transition duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
