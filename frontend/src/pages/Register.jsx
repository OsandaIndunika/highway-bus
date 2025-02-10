import React from "react";
import newBus from "../assets/newBus.jpg";
import AuthForm from "../components/AuthForm";

const Register = () => {
  return (
    <div className="h-screen md:h-full">
      <div className="flex h-full">
        <div className="md:flex-1 max-h-[580px]">
          <img
            src={newBus}
            alt="newBus"
            className="object-cover w-full h-full hidden md:flex"
          />
        </div>
        <div className="md:flex-1 w-full">
          <AuthForm
            type="register"
            message="Already have an account"
            step="login"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;