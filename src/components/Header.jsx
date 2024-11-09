import React from "react";
import logo from "../assets/logo.jpeg";

const Header = () => {
  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="bg-white flex h-[5rem] justify-between items-center p-10 shadow-md ">
      <div className="">
        <img src={logo} alt="Logo" className="w-20" />
      </div>
      <div className="flex gap-8">
        <a href="#" className="text-blue-600">
          Home
        </a>
        <a href="#" className="text-blue-600">
          About
        </a>
        <a href="#" className="text-blue-600">
          Service
        </a>
        <a href="#" className="text-blue-600">
          Team
        </a>
        <a href="#" className="text-blue-600">
          Gallery
        </a>
        <a href="#" className="text-blue-600">
          Testimonial
        </a>
        <a href="#" className="text-blue-600">
          Blog
        </a>
        <a href="#" className="text-blue-600">
          Contact
        </a>
      </div>
    </div>
    </nav>
  );
};

export default Header;
