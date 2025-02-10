import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Form, Input, Button } from "@heroui/react";
import { NavItems } from "../../constants";

const Footer = () => {
  return (
    <footer className="px-4 py-8 bg-grey/50 flex flex-col items-center justify-between w-full lg:p-8 2xl:mx-auto 2xl:max-w-5xl border-b border-gray-300">
      <div className="flex flex-col gap-10 lg:flex-row items-start justify-between w-full">
        <div className="w-36 h-24 flex items-center justify-center">
          <img
            src={logo}
            alt="logo"
            width={120}
            height={75}
            className="object-contain w-full h-full"
          />
        </div>
        <nav className="flex flex-col gap-y-4">
          {NavItems.map((item, index) => (
            <Link key={index} to={item.url}>
              <p className="text-sm text-slate-700">{item.title}</p>
            </Link>
          ))}
        </nav>

        <div className="text-black flex flex-col gap-3 max-w-sm">
          <p className="font-bold uppercase">Subscribe to our Newsletter</p>
          <p className="text-sm text-slate-700">
            The latest updates, articles, and resources are sent to your inbox
            weekly.
          </p>
          <Form className="flex items-center w-full relative">
            <Input
              name="email"
              placeholder="Enter your email"
              type="email"
              className="font-medium"
            />
            <Button color="primary" className="absolute right-0  text-white uppercase font-medium">
              Subscribe
              <FaArrowRight className="ml-2" />
            </Button>
          </Form>
        </div>
      </div>
      <div className="flex flex-col border-t border-slate-400 mt-10 w-full">
        <p className="pt-2 text-center  font-medium text-sm text-slate-700">
          © 2024-SL Highway. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;