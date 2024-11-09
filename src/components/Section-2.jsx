import React from "react";
import Image2 from "../assets/Image-2.jpeg"
import Image3 from "../assets/Image-3.jpeg"
import Image4 from "../assets/Image-4.jpeg"
let Section2 =()=>{
	return(
		<section className="section-1">
			<div className="section-1 flex flex-col md:flex-row justify-center items-center mt-16 mb-16 gap-8 sm:px-6">
				<div className="h-72 w-64 sm:w-96 md:w-96 lg:w-96 xl:w-96 flex flex-col justify-center gap-4 sm:gap-3 shadow-2xl ">
					<img src={Image2} alt="Image not found" className="w-24 mx-auto " />
					<h1 className="text-center font-bold text-2xl">Easy Appointment</h1>
					<p className="text-center font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio.</p>
				</div>
				<div className="h-72 w-64 sm:w-96 md:w-96 lg:w-96 xl:w-96 flex flex-col justify-center gap-3 shadow-2xl">
					<img src={Image3} alt="Image not found" className="w-24 mx-auto " />
					<h1 className="text-center font-bold text-2xl">Emergency</h1>
					<p className="text-center font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio.</p>
				</div>
				<div className="h-72 w-64 sm:w-96 md:w-96 lg:w-96 xl:w-96 flex flex-col justify-center gap-3 shadow-2xl">
					<img src={Image4} alt="Image not found" className="w-24 mx-auto " />
					<h1 className="text-center font-bold text-2xl">24/7 Services</h1>
					<p className="text-center font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio.</p>
				</div>
				
				
			</div>
		</section>
	)
}

export default Section2