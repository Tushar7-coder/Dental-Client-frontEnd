import { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Section2 from "./components/Section-2";
import About from "./components/About";
import Service from "./components/Services";
import DoctorSection from "./components/DoctorSection";
import DentistPatientImage from "./components/DentistWithPatient";
import Testimonials from "./components/Testimonials";
import Appointment from "./components/Appointment";
import DoctorInfo from "./components/DoctorInfo";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Section2 />
      <About />
      <Service />
      <DoctorSection/>
      <DentistPatientImage/>
      <Testimonials/>
      <Appointment/>
      <DoctorInfo/>
      <Footer/>
    </>
  );
}

export default App;
