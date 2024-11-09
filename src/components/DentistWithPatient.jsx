import React from "react";
import PatientDoctor1 from "../assets/Patient_1.jpg"
import PatientDoctor2 from "../assets/patient_2.jpg"
import PatientDoctor3 from "../assets/patient_3.jpg"
import PatientDoctor4 from "../assets/patient_4.jpg"
import PatientDoctor5 from "../assets/patient_5.jpg"

let DentistPatientImage = ()=>{
	return (
		<div className="bg-blue-600 py-8 text-white">
			<div className="mx-auto px-4 sm:px-4 md:px-8 py-6 ">
				<h1 className="text-3xl text-center font-bold mb-8">Our Gallery</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					<div className="col-span-1">
						<img src={PatientDoctor1} alt="" className="w-full bg-cover  rounded-xl" />
					</div>
					<div className="col-span-1">
					<img src={PatientDoctor2} alt="" className="w-full bg-cover  rounded-xl" />
					</div>
					<div className="col-span-1">
					<img src={PatientDoctor3} alt="" className="w-full bg-cover  rounded-xl" />
					</div>
					<div className="col-span-1">
					<img src={PatientDoctor4} alt="" className="w-full bg-cover  rounded-xl" />
					</div>
					<div className="col-span-1 sm:col-span-2 ">
						<img src={PatientDoctor5} alt="" className="w-full bg-cover rounded-lg " />
					</div>
				</div>
			</div>
		</div>
	)
}
export default DentistPatientImage

