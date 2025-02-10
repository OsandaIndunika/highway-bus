import React, { useState } from "react";
import { Input, Textarea } from "@heroui/react";
export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.message) {
      alert("Cannot submit form");
    } else {
      alert(JSON.stringify(data));
      setData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="py-10 md:py-12 lg:py-16">
      <div className="flex flex-col pb-10 items-center justify-center text-center">
        <h3 className="font-bold text-2xl uppercase leading-relaxed">
          Contact Section
        </h3>
        <p>We&apos;d love to hear from you</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="max-w-xs w-full flex items-center justify-center">
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="flex flex-col gap-y-2">
              <Input
                type="text"
                name="name"
                label="Name"
                labelPlacement="outside"
                value={data.name}
                onChange={handleChange}
                placeholder="Your full name"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Your email address"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="message">Message</label>
              <Textarea
                name="message"
                value={data.message}
                onChange={handleChange}
                placeholder="Your message"
                className="max-w-lg w-full"
              />
            </div>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-md w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}