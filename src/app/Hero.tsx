"use client";

import React from "react";
import Image from "next/image";

function Hero() {

  return (
    <section className="pt-28 bg-[url('/images/gbherobg.jpg')] h-[500px] sm:h-[800px] not-only-of-type:bg-cover bg-center bg-no-repeat flex items-center justify-center ">
      <div className="">
        <div className="container mx-auto px-6 flex flex-col md:grid md:grid-cols-2 items-center justify-between gap-10">
          {/* Kiri: Teks */}
          <div data-aos="fade-up" data-aos-delay="0" className="flex-1 text-center md:text-left ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl pt-10 font-bold text-gray-900 mb-4 leading-tight lg:mb-8">
              <span className="text-orange-600 lg:text-8xl">Solusi</span> Bisnis Anda
            </h1>
            <p className="text-xl sm:text-3xl md:text-4xl text-gray-600 mb-6">
              Fokuslah pada apa yang membuat bisnismu unggul serahkan sisanya pada Tim profesional <span className="text-orange-600 font-bold">
              GB Facility.</span>
            </p>
            <div className="flex justify-center md:justify-start pt-10 sm:pt-20 gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-700 transition">
                Mulai Sekarang
              </button>
              <button className="border border-blue-600 text-blue-600 px-6  rounded-2xl hover:bg-blue-50 transition">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>

          {/* Kanan: Gambar */}
          <div data-aos="fade-up" data-aos-delay="500" className="flex-1 flex justify-center w-full relative ">
            <div className="flex-col relative w-full max-w-md md:max-w-none md:w-full">

              <Image
                width={1000}
                height={1000}
                src="/images/beranda.jpg"
                alt="Smart Parking"
                className="sm:block hidden w-full object-cover  "
              />


            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;
