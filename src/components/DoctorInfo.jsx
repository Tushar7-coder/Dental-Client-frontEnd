import React from "react";
import DoctorCard from "./DoctorCard/CardDoctor";
import doctor1 from "../assets/Doctor1.jpg"
import doctor2 from "../assets/Doctor2.jpg"
import doctor3 from "../assets/Doctor3.jpg"


const DoctorInfo =()=>{
	return (
		<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 ml-2 mr-2 md:gap-3 gap-0">
			<div>
			<DoctorCard src={doctor1} heading="Dental Insurance with Benifits" date ="By Admin - February 18, 2018" paragraph="Lorem ipsum dolor sit amet consec, itaque." buttonlink ="https://www.google.com/"/>
			</div>
			<div>
			<DoctorCard src={doctor2} heading="Dental Insurance with Benifits" date ="By Admin - February 18, 2018" paragraph="Lorem ipsum dolor sit amet consec, itaque." buttonlink ="https://www.google.com/"/>
			</div>
			<div>
			<DoctorCard src={doctor1} heading="Dental Insurance with Benifits" date ="By Admin - February 18, 2018" paragraph="Lorem ipsum dolor sit amet consec, itaque." buttonlink ="https://www.google.com/"/>
			</div>
		</div>
	)
}
export default DoctorInfo;