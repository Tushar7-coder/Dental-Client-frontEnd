import React from "react";
import logo from "../assets/logo.jpeg";
let NavBar = () => {
	
  return (
    <header className="bg-white shadow-lg">
    <div className="container mx-auto flex justify-between items-center p-4">
      
      <div className="flex items-center">
        <img src={logo} alt="Clinic Logo" className="h-8 w-auto" />
      </div>

      
      <button id="menu-toggle" className="lg:hidden text-gray-700 p-2 ">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      
      <nav className="hidden lg:flex space-x-6">
        <a href="#home" className="text-gray-800 hover:text-blue-600">Home</a>
        <a href="#about" className="text-gray-800 hover:text-blue-600">About</a>
        <a href="#services" className="text-gray-800 hover:text-blue-600">Services</a>
        <a href="#team" className="text-gray-800 hover:text-blue-600">Team</a>
        <a href="#gallery" className="text-gray-800 hover:text-blue-600">Gallery</a>
        <a href="#testimonial" className="text-gray-800 hover:text-blue-600">Testimonial</a>
        <a href="#blog" className="text-gray-800 hover:text-blue-600">Blog</a>
        <a href="#contact" className="text-gray-800 hover:text-blue-600">Contact</a>
      </nav>
    </div>

    
    
  </header>
  );
};
export default NavBar;
