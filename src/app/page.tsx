"use client"
import React from "react";
import Hero from "./Hero";
import About from "./About";

import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'
import Contact from "./Contact";

import WA from "./WA";
import Lokasi from "@/Lokasi";

import About2 from "./About2";
import Sistem from "./Sistem";
import Product from "./Product";



export default function ParkingCompanyProfile() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi dalam ms
      once: true,     // animasi hanya muncul sekali
    })
  }, [])

  return (
    <div className="">
   
      <Hero />
      <About2/> 
      <About/>       
      <Product/> 
       <Sistem/>       
       <Lokasi/>    
      <Contact />
      <WA />



    </div>
  );
}
