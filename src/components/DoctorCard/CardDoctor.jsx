import React from "react";

const DoctorCard = ({ src, heading, date, paragraph, buttonlink }) => {
  return (
    <section className="DoctorInfo w-full max-w-[26rem] sm:max-w-[36rem] lg:max-w-[40rem] mx-auto overflow-hidden">
      <div className="mb-20 shadow-lg rounded-lg overflow-hidden">
        <div className="w-full h-[20rem] sm:h-[24rem] md:h-[26rem]">
          <img
            src={src}
            alt="Doctor"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="bg-blue-600 text-white p-6 sm:p-8 md:p-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">{heading}</h3>
          <p className="pt-4 text-md sm:text-lg">{date}</p>
          <p className="pt-3 text-sm sm:text-base">{paragraph}</p>
          <div className="mt-8">
            <a
              href={buttonlink}
              className="inline-block bg-transparent text-white border-white border-2 rounded-md px-4 py-2 hover:bg-pink-600 transition-all duration-300"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorCard;
