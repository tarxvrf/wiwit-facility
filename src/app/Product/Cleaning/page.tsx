import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa6";
function Product() {
  return (
    <div>
      {" "}
      {/* About Section */}
      <section id="about" className="py-20 sm:py-32 lg:py-48 ">
        <div className="max-w-8xl sm:px-5 grid gap-5 px-3">
          <div>
            <h2 className="text-3xl mb-3 md:text-4xl font-bold text-gray-900 ">
              Layanan Cleaning <span className="text-amber-600">Service</span>
            </h2>
            Kami mengerti bahwa setiap organisasi bisnis membutuhkan layanan
            yang kredibel dan bermutu tinggi guna menjamin perlindungan,
            kebersihan, serta pemeliharaan aset mereka tetap maksimal .
          </div>
          <div className="grid sm:grid-cols-2 mx-auto sm:p-10 gap-10 max-w-7xl  ">
            <div className="">
              <Image
                width={500}
                height={500}
                src="/images/satpam1.jpeg"
                alt="Tentang GB Parking"
                className="rounded-2xl shadow-2xl object-cover w-full "
              />
            </div>
            <div className="text-gray-600 mb-6 text-justify ">
              <span className="font-bold">GB Facility </span>
              menghadirkan tenaga profesional yang berpengalaman dalam pelatihan
              yang sangat tinggi dan menawarkan jasa outsourcing cleaning
              service profesional guna menjaga kebersihan serta kenyamanan
              lingkungan kerja. Didukung tenaga terlatih dan metode modern untuk
              hasil maksimal dan higienis
            </div>
          </div>

          <div className="grid items-center lg:gap-10 gap-3">
            <div className="text-gray-600 mb-6 text-justify mx-auto">
              <h2 className="font-semibold">1. Jasa Kebersihan</h2>
              Keadaan kebersihan di ruang kerja atau fasilitas umum menunjukkan
              kualitas layanan bisnis Anda . GB Facility menawarkan solusi
              kebersihan berkualitas tinggi, mulai dari pembersihan harian,
              pembersihan total, hingga pemeliharaan demi menjaga kenyamanan di
              lingkungan kerja .
            </div>
            <div className="">
              <div className="grid sm:grid-cols-3 gap-3 max-w-6xl mx-auto">
                <div>
                  <Image
                    width={500}
                    height={500}
                    src="/images/lapkaca.png"
                    alt="Tentang GB Parking"
                    className="rounded-2xl shadow-2xl bg-cover bg-center w-full"
                  />
                </div>
                <div>
                  <Image
                    width={500}
                    height={500}
                    src="/images/poles.png"
                    alt="Tentang GB Parking"
                    className="rounded-2xl shadow-2xl  bg-cover bg-center w-full"
                  />
                </div>
                <div>
                  <Image
                    width={500}
                    height={500}
                    src="/images/ngepel.png"
                    alt="Tentang GB Parking"
                    className="rounded-2xl shadow-2xl bg-cover bg-center w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 grid mx-auto">
            Kami juga menyediakan layanan pemeliharaan dan perawatan properti,
            mencakup perbaikan kecil, pemeriksaan instalasi listrik dan saluran
            air, hingga pemeliharaan bagian lainnya . Dengan bantuan teknisi
            ahli, kami menjaga fasilitas Anda tetap prima 
          </div>
          <div className="grid gap-3 p-2">
            <div>
            <ul>
              <li>Kebersihan Harian & Umum</li>
              <li>Pemeliharaan Taman</li>
              <li>Pengendalian Hama</li>
              <li>Pemeliharaan Kebersihan Gedung Tinggi</li>
            </ul>
            </div>
            <div>
              <Image
                width={500}
                height={500}
                src="/images/gbcleaning.jpg"
                alt="Tentang GB Parking"
                className="rounded-2xl shadow-2xl bg-cover bg-center w-full"
              />
            </div>
          </div>

          <div className="badge badge-dash badge-success mx-auto h-16 w-32 bg-info text-white">
            Kontak Kami
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
