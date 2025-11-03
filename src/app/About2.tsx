import React from "react";
import Image from "next/image";

function About2() {

  
  return (
    <div>
      {" "}
      {/* About Section */}
      <section id="about2" className="pt-20 sm:pt-32 lg:pt-28 bg-gray-50">
       <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center lg:gap-20 gap-12">
        
        {/* Kiri: Gambar */}
        <div className="flex-1 flex justify-center">
          <Image
            width={500}
            height={500}
            src="/images/gbspanduk.jpg"
            alt="Tentang Kami"
            className="rounded-3xl w-full object-cover shadow-2xl shadow-gray-400"
          />
        </div>

        {/* Kanan: Teks */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Tentang <span className="text-amber-600">GB Facilty</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
           <span className="font-bold">GB Facility</span> adalah perusahaan
              Alih Daya telah beroperasi sejak tahun 2005 dibawah naungan PT
              Gerbang Berkah Solusi Indonesia hingga saat ini telah mengelola
              ribuan karyawan di seluruh kota besar di Indonesia GB Faclity
              memberikan layanan terpadu dan terintegrasi kepada perusahaan yang
              memerlukan layanan pengelolaan gedung/kantor dan berbagai macam
              bentuk layanan lainnya.
            </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Kami percaya bahwa setiap perusahaan berhak untuk fokus pada inti bisnisnya — 
            dan biarkan kami menangani sisanya.
          </p>
          <button className="bg-amber-600 text-white px-8 py-3 rounded-2xl shadow hover:bg-blue-700 transition">
            Pelajari Lebih Lanjut
          </button>
        </div>

        
      </div>       
      </section>
    </div>
  );
}

export default About2;
