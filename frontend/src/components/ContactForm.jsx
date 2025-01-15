import React, { useState } from "react";
import { Form, Input, Textarea, Button } from "@nextui-org/react";

const ContactForm = () => {
  const [data, setData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <div className="px-4 py-20 sm:p-6 lg:py-10 h-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold uppercase leading-9 text-lg">
          Contact Section
        </h1>
        <Form
          onSubmit={handleSubmit}
          className="w-full max-w-xs flex flex-col gap-4 z-[-20]"
          validationBehavior="native"
        >
          <Input
            isRequired
            errorMessage="Please enter your name"
            label="Name"
            labelPlacement="outside"
            name="name"
            placeholder="Enter your name"
            type="text"
            onChange={handleInputChange}
          />
          <Input
            isRequired
            errorMessage="Please enter your contact number"
            label="Contact"
            labelPlacement="outside"
            name="contact"
            placeholder="Enter your contact number"
            type="text"
            onChange={handleInputChange}
          />
          <Input
            isRequired
            errorMessage="Please enter a valid email"
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder="Enter your email"
            type="email"
            onChange={handleInputChange}
          />
          <Textarea
            isRequired
            errorMessage="Please enter a your message"
            className="max-w-xs"
            label="Message"
            name="message"
            labelPlacement="outside"
            placeholder="Enter your message"
            onChange={handleInputChange}
          />

          <Button color="primary" type="submit" className="w-full">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
