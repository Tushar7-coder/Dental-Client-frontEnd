import React from "react";
import AppointmentImage from "../assets/appointmnet-bg.jpg"
const Appointment =()=>{
	return (
		<section className="appointment ">
			<div style={{backgroundImage : 'url("https://hospiltalmanagement.netlify.app/img/appointmnet-bg.jpg")'}} className="h-[30rem] bg-cover bg-center bg-no-repeat mb-20 ">
			<p className="pt-20 sm:pt-16 md:pt-24 text-lg sm:text-2xl md:text-3xl w-3/4 sm:w-2/3 md:w-1/3 lg:w-1/4 pl-4 sm:pl-6 md:pl-16 lg:pl-24 text-white">
          	Request your appointment and start your smile makeover
        	</p>
			<button className=" bg-pink-600 text-white rounded-md px-3 py-2 sm:px-6 sm:py-4  ml-4 md:ml-24 mt-16 hover:bg-white hover:text-black"><a href="#">Request Appointment</a></button>
			</div>
		</section>
	)
}
export default Appointment;

