'use client';

import React from 'react';
import Image from 'next/image';
import Governor from "../../../public/governor.png";

const Main = () => {
  return (
    <>
       {/* Main container with max-width and centering */}
       <div className="relative w-full overflow-hidden bg-opacity-70 bg-cover bg-center  z-0" style={{ backgroundImage: "url('https://arynews.tv/wp-content/uploads/2017/01/governor-news.jpg')" }}>
        {/* Overlay div to add opacity to background image */}
        <div className="absolute inset-0 w-full h-full bg-zinc-50  bg-opacity-80 -z-50"></div>

        {/* Content container with max-width and centered */}
        <div className="w-[100%] h-[100%] lg:flex relative z-20 ">
          {/* Left div */}
          <div className=" mt-[10vh] w-[100%] h-full lg:w-[50%]">
            <h1 className="w-[100%] h-15 text-sky-900 font-extrabold text-center text-4xl md:text-6xl">Governor Sindh</h1>
            <h1 className="mt-1 w-[100%] h-15 text-sky-900 text-center text-2xl md:text-5xl lg:w-[100%]">Kamran Khan Tessori</h1>
            <p className="mt-5 w-[100%] h-15 text-sky-400 text-center font-bold text-2xl lg:text-4xl">
              Certified Cloud Applied Generative AI Engineer (Gen Eng)
            </p>
            <p className="mt-5 w-[100%] h-15 text-sky-900 font-bold text-center text-2xl">Earn up to $5,000 / month</p>
            <p className="mt-5 w-[100%] h-15 text-sky-900 text-center font-extrabold text-2xl lg:w-[100%]">
              Now admissions are open in Hyderabad
            </p>

            <section className="md:flex mt-5 m-5 gap-10">
              <button className="w-[100%] h-[10vh] bg-sky-900 text-white text-lg rounded md:ml-5 md:mt-5 lg:w-[100%] transition transform hover:translate-y-1">APPLY NOW</button>
              <p className="text-sky-900 w-[100%] py-5 text-center">
                <span className=" w-[100%] h-[10vh] space-x-3  text-sky-900 font-extrabold text-2xl">562,143</span>
                <br /> Accepted Applications
              </p>
            </section>
          </div>

          {/* Right div */}
          <div className="w-[100%] lg:h-full lg:w-[55%]">
            <Image
              src={Governor}
              alt="Governor Pic"
              width={500}
              height={500}
              className="w-[100%] lg:ml-40 lg:h-auto lg-70 object-cover mt-10"
            />
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Main;


