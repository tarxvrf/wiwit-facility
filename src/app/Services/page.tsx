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
      <section id="about" className="py-20 sm:py-32 lg:py-48">
        <div className="max-w-8xl sm:px-5 grid gap-12 ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan Tenaga <span className="text-amber-600">Pengamanan</span>
          </h2>
          <div>
            Kami memiliki komitmen yang kuat dalam pelayanan dan petugas kemanan
            kami siap ditempatkan di segala sektotr industri
          </div>
          <div className="grid grid-cols-2 mx-auto p-10 gap-10 max-w-7xl border ">
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
              <span className="font-bold">GB Facility</span> Menyiapkan system
              keamana yang efektif dan efisian dalam melindungi asset
              perusahaan, menjaga ketertibam dan keamanan di lingkungan kerja
              Perusahaan kemanan kami, telah tersertifikasi dari Kepolisian
              Republik Indonesia dan secara periodic mengikuuti dan melakukan
              pelatihan-pelatihan agar tetap dapat senantiasa menjaga
              stabuilitas pengamanan dan kualitas kerja
            </div>
          </div>

          <div className="grid sm:grid-cols-2 items-center lg:gap-10 border">
            <div className="text-gray-600 mb-6 text-justify mx-auto">
              <ul>
                <li>1. Pendampingan</li>
                <li>2. Gedung Perkantoran</li>
                <li>3. Pusat Perbelanjaan dan Ritel</li>
                <li>4. Ritel</li>
                <li>5. Lembaga Keuangan</li>
                <li>6. Lembaga Pendidikan</li>
                <li>7. Pabrik</li>
                <li>8. Tempat Wisata dan Tempat Hiburan</li>
              </ul>
            </div>
            <div className="border">
              <div className="grid grid-cols-2">
                <div className="grid grid-rows-2 gap-2 p-2">
                  <div>
                    <Image
                      width={500}
                      height={500}
                      src="/images/satpam1.jpeg"
                      alt="Tentang GB Parking"
                      className="rounded-2xl shadow-2xl object-cover h-32 sm:h-[250px]"
                    />
                  </div>
                  <div>
                    <Image
                      width={500}
                      height={500}
                      src="/images/satpam1.jpeg"
                      alt="Tentang GB Parking"
                      className="rounded-2xl shadow-2xl object-cover h-32 sm:h-[250px] "
                    />
                  </div>
                </div>
                <div className="p-2">
                  <Image
                    width={500}
                    height={500}
                    src="/images/satpam1.jpeg"
                    alt="Tentang GB Parking"
                    className="rounded-2xl shadow-2xl object-cover h-64 sm:h-[500px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 grid sm:grid-cols-3 gap-3 mx-auto">
            <Image
              width={500}
              height={500}
              src="/images/satpam1.jpeg"
              alt="Tentang GB Parking"
              className="rounded-2xl shadow-2xl object-cover "
            />
            <Image
              width={500}
              height={500}
              src="/images/satpam1.jpeg"
              alt="Tentang GB Parking"
              className="rounded-2xl shadow-2xl object-cover "
            />
            <Image
              width={500}
              height={500}
              src="/images/satpam1.jpeg"
              alt="Tentang GB Parking"
              className="rounded-2xl shadow-2xl object-cover"
            />
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-bold text-gray-900">
              PENJAGAAN SECURITY <span className="text-amber-600">GEDUNG</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 px-2 max-w-6xl  border">
              <div className="aspect-video bg-gray-800 flex items-center justify-center rounded-xl relative">
                <div className="w-16 h-16  bg-opacity-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-50 transition">
                  <FaYoutube className="text-5xl" />
                </div>
              </div>

              <div className="grid sm:flex gap-2">
                <div className="aspect-video bg-gray-800 flex items-center justify-center rounded-xl relative">
                  <div className="w-16 h-16  bg-opacity-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-50 transition">
                    <FaYoutube className="text-5xl" />
                  </div>
                </div>
                <div className="aspect-video bg-gray-800 flex items-center justify-center rounded-xl relative">
                  <div className="w-16 h-16  bg-opacity-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-50 transition">
                    <FaYoutube className="text-5xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
         <div className="badge badge-dash badge-success mx-auto h-16 w-32 bg-info text-white" >Success</div>
        </div>
      </section>
    </div>
  );
}

export default Product;
