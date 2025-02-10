import React, { useState } from "react";
import { Input, Textarea } from "@heroui/react";
import { Link } from "react-router-dom";

const AuthForm = ({ message, type, step }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
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
    if (!data.email || !data.password) {
      alert("Please enter Credentials");
    } else {
      alert(JSON.stringify(data));
    }
  };

  return (
    <>
      <div className="w-full flex flex-col h-full items-center justify-center">
        <h2 className="font-bold text-xl capitalize">{type} to your account</h2>
        <p className="text-sm text-gray-400">
          {message}?{" "}
          <span>
            <Link to={`/${step}`}>{step}</Link>
          </span>
        </p>
        <div className="max-w-xs w-full flex items-center justify-center  mt-10">
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="outline-primary-50 border-primary"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Enter password"
              />
            </div>

            <button
              type="submit"
              className="capitalize mt-4 px-4 py-2 bg-primary-500 text-white rounded-md w-full"
            >
              {type}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthForm;