"use client";
import React from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";

function Product() {
  const router = useRouter()
  const product = [
    {
      id: 1,
      gbr: "satpamai12.png",
      title: "Penyediaan Tenaga Keamanan",
      jud: "Tim Kami menyediakan Tenaga Keamanan yang terlatih trampil dan berdedikasi kepada perusahaan",
      links: "/Services/Pengamanan"
    },
    {
      id: 2,
      gbr: "cleaner.png",
      title: "Penyediaan Tenaga Kebersihan",
      jud: "Kebersihan tempat kerja harus selalu terjaga dan merupakan salah satu aspek yang harus diperhatikan oleh perusahaan.Kebersihan kantor dapat menciptakan kenyamanan kerja dan akan berpengaruh pada produktifikas kerja ",
      links: "/Services/Cleaning"
    },
    {
      id: 3,
      gbr: "telemarketing.png",
      title: "Penyediaan Tenaga Kerja(Labour Supply)",
      jud: "Tim kami menyediakan tenaga kerja yang handal dan terlatih, dapat membantu Mitra lebih focus pada bisnis utamanyaa dan memungkinkan akan menjadi  lebih produktif dan mengalami  peningkatan ",
    },
  ];

  return (
    <section
      id="product"
      className="grid sm:max-w-8xl sm:flex-col sm:justify-center sm:px-20 px-3 sm:mx-auto pt-20 sm:pt-32 lg:pt-28 bg-gray-50"
    >
      <div className="max-w-5xl" >
        <h2 className="text-center text-3xl font-bold pb-20">
          SUMBER DAYA<span className="font-bold text-orange-600"> MANUSIA</span>
          <p className="text-lg text-gray-600 mt-4 px-5">
            Menciptakan SDM unggul melalui sikap melayani
            Sebagai organisasi yang berbasis sumber daya manusia, sumber daya manusia adalah aset yang sikap melayani. Karyawan kami peduli terhadap lingkungan yang mereka kelola, orang-orang yang beraktivitas di dalamnya, dan lingkungan yang perlu mereka lindungi.
          </p>
        </h2>

      </div>

      <div className="grid mx-auto sm:flex flex-justify-center gap-3 pb-5">
        {product.map((items, index) => (
          <div data-aos="fade-left" data-delay="0" key={index} className="card sm:w-64 bg-base-100 shadow-sm px-3 mb-3">
            <figure>
              <Image
                width={1000}
                height={1000}
                src={`/images/${items.gbr}`}
                alt="Tentang GB Parking"
                className="rounded-2xl shadow-2xl object-cover "
              />
            </figure>
            <h2 className=" text-sm mt-2 bg-blue-200 rounded-xl text-center text-black font-semibold">
              {" "}
              {items.title}{" "}
            </h2>
            <div className="card-body text-left p-2">
              <h2>{items.jud}</h2>
            </div>

            <div>
              <div className="btn m-2 w-1/2 text-sm bg-orange-600 rounded-3xl text-white" onClick={() => router.push(`${items.links}`)}>
                readmore
              </div>
            </div>
          </div>
        ))}

        {/** 
        <div>
          <div className="w-full max-w-3xl aspect-video bg-gray-800 flex items-center justify-center rounded-xl relative">
            <div className="w-16 h-16  bg-opacity-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-50 transition">
              <FaYoutube className="text-5xl" />
            </div>
          </div>
          <div className="w-full max-w-3xl aspect-video bg-gray-800 flex items-center justify-center rounded-xl relative">
            <div className="w-16 h-16  bg-opacity-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-50 transition">
              <FaYoutube className="text-5xl" />
            </div>
          </div>
          <div className="w-full max-w-3xl aspect-video bg-gray-800 flex items-center justify-center rounded-xl relative">
            <div className="w-16 h-16  bg-opacity-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-50 transition">
              <FaYoutube className="text-5xl" />
            </div>
          </div>

        </div>*/}

        {/*
                        <div >
                            <iframe width="500" height="400" src="" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        <div>
                            <iframe width="500" height="400" src="" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        <div>
                            <iframe width="500" height="400" src="" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    */}
      </div>
    </section>
  );
}

export default Product;
