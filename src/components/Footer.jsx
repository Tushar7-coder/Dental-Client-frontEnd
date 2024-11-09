import React from "react";
import { IoIosCall } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import { SiVite } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white px-6 py-12 h-[66rem] sm:h-[60rem] md:h-[30rem]">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Clinic Location</h3>
          <p className="text-sm mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laoreet
            pharetra...
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaHome /> Khordha, Odisha
            </li>
            <li className="flex items-center gap-2">
              <IoIosCall /> +91 8917355202
            </li>
            <li className="flex items-center gap-2">
              <MdEmail /> likutusar@gmail.com
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">More Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Office
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Store
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Guarantee
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Buy Gift Card
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Return Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">More Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Office
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Store
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Guarantee
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Buy Gift Card
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Return Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your Email here"
              className="p-2 rounded border-white border-2 bg-blue-600 text-sm w-2/3 md:w-full"
            />
            <button className=" hover:bg-pink-700 text-white py-2 px-4 rounded w-1/2 border-white border-2">
              Submit Now
            </button>
          </div>
          <p className="mt-6">Stay connected</p>
          <div className="flex mt-4 space-x-4 text-2xl">
            <a href="#" className="hover:text-pink-500">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaGooglePlusG />
            </a>
            <a href="#" className="hover:text-pink-500">
              <SiVite />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
