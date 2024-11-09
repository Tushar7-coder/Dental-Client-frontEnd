import React from "react";
import ClientImage from "../assets/client1.png";
const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="py-12 px-6 ">
        <h2 className="text-center pt-12 text-3xl mb-8">Testimonials</h2>
        <div className="max-w-[80rem] lg:max-w-[90rem] mx-auto bg-white rounded-md shadow-lg p-6 mb-10">
          <div className="flex flex-col md:flex-row items-center w-full">
            <div className="w-32 h-60 md:w-40 md:h-80  lg:w-52 lg:h-96 mb-4 md:mb-0">
              <img
                src={ClientImage}
                alt="Aliceano Colby"
                className="w-full  rounded-full object-cover border-2"
              />
              <h3 class="text-xl sm:text-xl md:text-3xl font-semibold text-gray-800 mt-6">
                Aliceano Colby
              </h3>
              <p class="text-gray-700 mt-6 text-md ">CEO of Prime IT</p>
            </div>

            <div class="md:ml-6 text-center md:text-left " >
				<p className="text-3xl"> Awesome Work</p>
              <p className="mt-4 text-gray-600">
                "They really took individual cases to heart. Their team worked
                together in an impressive way to make sure my needs were met. I
                walked out pain-free."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
