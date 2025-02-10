import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const navigate = useNavigate();
  const isLoggedIn = false;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  return <div>Reservation</div>;
};

export default Reservation;