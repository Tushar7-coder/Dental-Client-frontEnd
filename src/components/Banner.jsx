import React from "react"
import Image from "../assets/Teeth.png";

let Banner =()=>{
	return (
		<section style={{backgroundImage:'url("https://hospiltalmanagement.netlify.app/img/top-banner-img/Top-banner.jpg")',backgroundSize:"cover"}} className="home w-full text-white py-16 px-4  lg:py-32 h-full" id="home">
			<div className="banner flex flex-col md:flex-row mx-auto justify-center items-center m-12 mt-0">
				<div className="left-container md:w-1/2 order-2 md:order-1 px-2 md:px-16 lg:px-32">
					<h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-1 mt-4 md:mt-2">Better Life Through</h3>
					<h1 className="text-2xl md:text-3xl mt-3 md:mt-2">Better Dentistry</h1>
					<p className="text-md md:text-md mt-7 max-w-md">Join us a fun a friendly dental enviroment. Our Professionals are warking so
					her to see mile on your face that you deserve! We are dedicated about our duties.</p>
					<div className="flex mt-4 md:mt-8 gap-4">
					<button className="bg-pink-600 text-white hover:bg-white hover:text-black py-1 px-2 sm:px-2 sm:py-3  rounded-md ease-in duration-200 font-semibold">
						<a href="#">Appointment</a>
					</button>
					<button className="bg-transparent py-3 px-2 text-white ring-1 ring-white rounded-md hover:bg-pink-600 ease-in duration-200">
						<a href="#">Learn more</a>
					</button>
					</div>
				</div>
				<div className="right-container md:w-1/2 mt-3 md:mt-0 flex justify-center order-1 md:order-2 bg-blue-600 bg-transparent">
					<img src={Image} alt="" className="bg-transparent"/>
				</div>
				
			</div>
		</section>
	)
}

export default Banner