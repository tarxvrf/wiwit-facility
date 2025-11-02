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
    <section className="hero bg-[url('/images/gbhero.jpg')] min-h-screen flex items-center justify-center pt-20 sm:pt-32 ">
      
      
    </section>
  );
}

export default Hero;
