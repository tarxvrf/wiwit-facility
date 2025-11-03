"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

function Hero() {

  const phone = "6281234567890";
  const message = encodeURIComponent(
    "Halo GB Parking, saya ingin bertanya tentang layanan."
  );
  const href = `https://wa.me/${phone}?text=${message}`;



  return (
    <section className="hero bg-[url('/images/gbherobg.jpg')] min-h-screen flex items-center justify-center ">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Kiri: Teks */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
           <div> <Image width={500} height={500}  className="sm:w-36 w-20 pb-3" src={"/images/bgicon.png"} alt={""}/></div> <span className="text-orange-600">Solusi</span> Bisnis Anda
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
        <div className="flex-1 flex justify-center">
          <Image
            width={500}
            height={500}            
            src="/images/gbjob.png"
            alt="Smart Parking"
            className="w-full max-w-6xl"
          />
        </div>
      </div>

    </section>
  );
}

export default Hero;
