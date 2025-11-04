import React from "react";

import Image from "next/image";
import {
  Briefcase,
  Users,
  Shield,
  Headphones,
  BrushCleaning,
} from "lucide-react";

function About() {
  const services = [
    {
      icon: <Briefcase size={40} className="text-blue-600 mb-4" />,
      title: "Penyediaan Tenaga Kerja Pabrik, Operator",
      desc: "Menyediakan tenaga kerja profesional sesuai kebutuhan perusahaan Anda dengan sistem yang fleksibel dan efisien.",
    },
    {
      icon: <Shield size={40} className="text-blue-600 mb-4" />,
      title: "Penyediaan Tenaga Pengamanan",
      desc: "Dukungan penuh terhadap kebutuhan keamanan perusahaan Anda melalui tenaga pengamanan terlatih.",
    },
    {
      icon: <BrushCleaning size={40} className="text-blue-600 mb-4" />,
      title: "Penyediaan Tenaga Kebersihan (cleaning service)",
      desc: "Layanan petugas cleaning service berpengalaman, menjaga lingkungan kerja tetap aman dan bersih.",
    },
  ];
  return (
    <section id="services" className="pt-20 sm:pt-32 lg:pt-28  bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Layanan <span className="text-orange-600">Kami</span>
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          <span className="text-orange-600 font-bold">GB Facility</span>{" "}
          memberikan Multi-Layanan menjadikan layanan Fasilitas Terpadu dalam
          berbagai layanan bisnis dan industry, yang meliputi antara lain :
        </p>

        {/* Grid Layanan */}
        <div className="grid max-w-6xl mx-auto gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow hover:shadow-lg transition p-8 flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 text-md sm:text-lg lg:text-xl font-medium text-gray-700">
          <h2>
            Kehadiran{" "}
            <span className="text-orange-600 font-semibold">GB Facility </span>
            untuk memberikan nilai tambah, memelihara dan mengoptimalkan tempat
            milik mitra/pelanggan dan berkontribusi pada harapan mitra/pengguna
            jasa kami, agar perusahaan mitra/pengguna jasama kami dapat lebih
            focus dalam pengembangan bisnisnya.
          </h2>
        </div>
      </div>
    </section>
  );
}

export default About;
