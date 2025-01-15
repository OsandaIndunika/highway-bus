import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  SelectItem,
  Checkbox,
  Button,
} from "@nextui-org/react";

const ContactForm = () => {
  const [data, setData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  // const handleInputChange = (e)=>{
  //   const {...setData, [name]:value} = e.target;
  // }
  return (
    <div className="px-4 py-20 sm:p-6 lg:py-10 h-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold uppercase leading-9 text-lg">
          Contact Section
        </h1>
        <Form className="max-w-sm w-full justify-center items-center gap-y-10 z-[-10]">
          <div className="flex flex-col gap-6 w-full">
            <Input
              label="Name"
              labelPlacement="outside"
              name="name"
              placeholder="Enter your name"
              className="font-medium"
            />

            <Input
              label="Email"
              labelPlacement="outside"
              name="email"
              placeholder="Enter your email"
              type="email"
              className="font-medium"
            />
            <Input
              label="Contact"
              labelPlacement="outside"
              name="email"
              placeholder="Enter your contact number"
              type="text"
              className="font-medium"
            />
            <Input
              label="Message"
              labelPlacement="outside"
              name="email"
              placeholder="Enter your Mesage"
              type="email"
              className="font-medium"
            />
          </div>
          <Button color="primary" className="rounded-lg font-semibold">
            SUBMIT
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
