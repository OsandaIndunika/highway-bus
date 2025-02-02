import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import App from "./App.jsx";
import About from "./pages/Aboutus.jsx";
import LostandFound from "./pages/LostandFound.jsx";
import Busease from "./pages/Busease.jsx";
import FAQ from "./pages/FAQ.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Reservation from "./pages/Reservation.jsx";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NextUIProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/busease" element={<Busease />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/lost-n-found" element={<LostandFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer/>
    </NextUIProvider>
  </BrowserRouter>
);
