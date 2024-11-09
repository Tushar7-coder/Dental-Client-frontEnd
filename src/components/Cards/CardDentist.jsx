import React from "react";

import { FaInstagram, FaFacebook,FaGooglePlusG,FaTwitterSquare } from "react-icons/fa";
const DoctorCard =({src,name,specialist,src2,src3})=>{

	return(
		<>
			<div className="shadow-xl  flex flex-col w-full justify-center border-2 rounded-lg gap-4 sm:gap-3">
				<div>
					<div className="">
					<img src={src} alt="" className="mx-auto pt-10 "/>
					</div>
				</div>
				<div>
					<h2 className="text-center pt-12">{name}</h2>
					<p className="text-center pt-6 mb-6">{specialist}</p>
					<div>
						<ul className="flex justify-center gap-4 mb-6">
							<li className="hover:bg-pink-400"><a href={src2}><FaFacebook /></a></li>
							<li className="hover:bg-pink-400"><a href={src2}><FaInstagram /></a></li>
							<li className="hover:bg-pink-400"><a href={src3}><FaGooglePlusG /></a></li>
							<li className="hover:bg-pink-400"><a href={src2}><FaTwitterSquare /></a></li>
						</ul>
					</div>
				</div>
			</div>
		</>

	)
}
export default DoctorCard;