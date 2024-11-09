import DoctorCard  from "./Cards/CardDentist";
import team1 from "../assets/team1.png"
import team2 from "../assets/team2.png"
import team3 from "../assets/team3.png"

const DoctorSection =()=>{
	return(
		<>
		<h1 className="text-center pt-20 text-3xl pb-12">Our Dentists</h1>
		<div className="flex flex-col md:flex-row justify-center items-center mt-16 mb-16 gap-8 sm:px-6">
        	<DoctorCard src={team1} name="Doctor-1" specialist="Oral Surgeon" className="h-[400px] w-[400px]" src2="https://x.com/Tusharkantabih2" src3="https://www.google.com/"/>
        	<DoctorCard src={team2} name="Doctor-2" specialist="Oral Surgeon" src2="https://x.com/jensimmons" src3="https://www.google.com/"/>
        	<DoctorCard src={team3} name="Doctor-3 " specialist="Oral Surgeon" src2="https://x.com/Tusharkantabih2" src3="https://www.google.com/"/>
      	</div>
		</>
	)
}
export default DoctorSection;