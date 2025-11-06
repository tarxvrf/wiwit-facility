"use client";

import React from "react";
import Image from "next/image";

function Hero() {

  return (
    <section className="bg-[url('/images/gbherobg.jpg')] bg-cover bg-center bg-no-repea bg-no-repeat min-h-screen flex items-center justify-center ">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Kiri: Teks */}
        <div data-aos="fade-up" data-aos-delay="0" className="flex-2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            <div> <Image width={500} height={500} className="sm:w-36 w-20 pb-3" src={"/images/bgicon.png"} alt={""} /></div> <span className="text-orange-600">Solusi</span> Bisnis Anda
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Fokuslah pada apa yang membuat bisnismu unggul — serahkan sisanya pada Tim profesional <span className="text-orange-600 font-bold">GB Facility.</span>
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-700 transition">
              Mulai Sekarang
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-2xl hover:bg-blue-50 transition">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>

        {/* Kanan: Gambar */}
        <div data-aos="fade-up" data-aos-delay="500" className="flex-1 flex justify-center w-full relative ">
          <div className="flex flex-col relative sm:translate-y-64 w-full max-w-md md:max-w-none md:w-full">
                
               <Image
                width={1000}
                height={1000}
                src="/images/tigarembg.png"
                alt="Smart Parking"
                className="sm:block hidden w-[410px] object-cover relative sm:-translate-y-28"
              />  
             
              
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;
