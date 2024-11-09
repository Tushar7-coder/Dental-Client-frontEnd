import React from "react";
import svg1 from "../assets/1.svg"
import svg2 from '../assets/2.svg'
import svg3 from "../assets/3.svg"
import svg4 from "../assets/4.svg"
import svg5 from "../assets/5.svg"
import svg6 from "../assets/6.svg"

let Service =()=>{
	return (
		<section className="service bg-blue-700 p-6">
			<h2 className="text-4xl text-white text-center pt-20 sm:pt-32">Our Services</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  pt-16 px-8 sm:px-10 md:px-10 gap-4 cursor-pointer mb-16">
				<div className="border-8 border-blue-900 shadow-xl w-full hover:bg-blue-500 ">
					<img src={svg1} alt="" className="px-4 pt-4"/>
					<h3 className="px-4 pt-6 text-2xl text-white">Complete Dentistry</h3>
					<p className="text-white text-sm px-4 pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem alias laudantium beatae unde? Eum, id animi.</p>
					<button className="mx-4 mt-6 px-4 py-2 border-white bg-transparent border-2 text-white mb-6 rounded-sm hover:bg-pink-600 duration-200">Read more</button>
				</div>
				<div className="border-8 border-blue-900 shadow-xl w-full hover:bg-blue-600 ">
					<img src={svg3} alt="" className="px-4 pt-4"/>
					<h3 className="px-4 pt-6 text-2xl text-white">Dental Selants</h3>
					<p className="text-white text-sm px-4 pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dignissimos non maiores?</p>
					<button className="mx-4 mt-6 px-4 py-2 border-white bg-transparent border-2 text-white mb-6 rounded-sm hover:bg-pink-600 duration-200">Read more</button>
				</div>
				<div className="border-8 border-blue-900 shadow-xl w-full hover:bg-blue-600 ">
					<img src={svg3} alt="" className="px-4 pt-4"/>
					<h3 className="px-4 pt-6 text-2xl text-white">Dental Dictionary</h3>
					<p className="text-white text-sm px-4 pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem alias laudantium beatae unde? Eum, id animi.</p>
					<button className="mx-4 mt-6 px-4 py-2 border-white bg-transparent border-2 text-white mb-6 rounded-sm hover:bg-pink-600 duration-200">Read more</button>
				</div>
				<div className="border-8 border-blue-900 shadow-xl w-full hover:bg-blue-600 ">
					<img src={svg4} alt="" className="px-4 pt-4"/>
					<h3 className="px-4 pt-6 text-2xl text-white">Dental Implants</h3>
					<p className="text-white text-sm px-4 pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem alias laudantium beatae unde? Eum, id animi.</p>
					<button className="mx-4 mt-6 px-4 py-2 border-white bg-transparent border-2 text-white mb-6 rounded-sm hover:bg-pink-600 duration-200">Read more</button>
				</div>
				<div className="border-8 border-blue-900 shadow-xl w-full hover:bg-blue-600 ">
					<img src={svg5} alt="" className="px-4 pt-4"/>
					<h3 className="px-4 pt-6 text-2xl text-white">Oral Surgery</h3>
					<p className="text-white text-sm px-4 pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem alias laudantium beatae unde? Eum, id animi.</p>
					<button className="mx-4 mt-6 px-4 py-2 border-white bg-transparent border-2 text-white mb-6 rounded-sm hover:bg-pink-600 duration-200">Read more</button>
				</div>
				<div className="border-8 border-blue-900 shadow-xl w-full hover:bg-blue-600 ">
					<img src={svg6} alt="" className="px-4 pt-4"/>
					<h3 className="px-4 pt-6 text-2xl text-white">General Dentistry</h3>
					<p className="text-white text-sm px-4 pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem alias laudantium beatae unde? Eum, id animi.</p>
					<button className="mx-4 mt-6 px-4 py-2 border-white bg-transparent border-2 text-white mb-6 rounded-sm hover:bg-pink-600 duration-200">Read more</button>
				</div>
			</div>
		</section>
	)
}
export default Service;