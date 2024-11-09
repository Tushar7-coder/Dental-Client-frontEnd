import React from "react";
import aboutImg from "../assets/about-banner1.png"
import aboutImg2 from "../assets/about-img2.png"
let About =()=>{
	return (
		<section className="mx-auto mt-20 p-6 flex flex-col md:flex-row md:items-center ">
			<div className="w-full md:w-1/2 flex justify-center relative">
				<img src={aboutImg} alt="" className="w-full md:max-w-md  "/>
				<img src={aboutImg2} alt="" className="w-1/3 sm:w-1/3 md:w-1/4 absolute bottom-0 left-1/4 animate-bounce"/>
			</div>
			<div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-4">
				<h2 className="text-3xl md:text-5xl font-bold text-gray-800 ">Welcome to a family</h2>
				<p className="text-gray-700 mt-4 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima enim iste rem, magni possimus nemo!</p>
				<div className="grid grid-cols-2 mt-4 md:mt-4 gap-2">
					<div className="bg-white shadow-md  p-12 rounded-lg">
						<h3 className="text-3xl font-semibold text-blue-600 text-center">500+</h3>
						<p className="text-gray-600 text-center">Happy Patients</p>
					</div>
					<div className="bg-white shadow-md  p-12 rounded-lg">
						<h3 className="text-3xl font-semibold text-blue-600 text-center">88+</h3>
						<p className="text-gray-600 text-center">Qualified Doctors</p>
					</div>
					<div className="bg-white shadow-md  p-12 rounded-lg">
						<h3 className="text-3xl font-semibold text-blue-600 text-center">25+</h3>
						<p className="text-gray-600 text-center">Years Experience</p>
					</div>
					<div className="bg-white shadow-md  p-12 rounded-lg">
						<h3 className="text-3xl font-semibold text-blue-600 text-center">55+</h3>
						<p className="text-gray-600 text-center">Dental Awards</p>
					</div>
				</div>
			</div>
		</section>
	);
}
export default About;