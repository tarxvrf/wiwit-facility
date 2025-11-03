import React from "react";
import Hero from "./Hero";
import About from "./About";

import Service from "./Service/page";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import WA from "./WA";
import Lokasi from "@/Lokasi";

import About2 from "./About2";
import Sistem from "./Sistem";
import Product from "./Product";


export default function ParkingCompanyProfile() {



  return (
    <div className="">
   
      <Hero />
      <About2/> 
      <About/>       
      <Product/> 
       <Sistem/>         
      <Contact />
      <WA />



    </div>
  );
}
