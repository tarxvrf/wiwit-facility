"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";

function Product() {
  type productss = {
    id: number;
    gbr: string;
    jud: string;
    fuls: string;
  };
  const [idd, setid] = useState<productss[]>([]);

  const product = [
    {
      id: 2,
      gbr: "cleaner.png",
      title: "Penyediaan Tenaga Kebersihan",
      jud: "Kebersihan tempat kerja harus selalu terjaga dan merupakan salah satu aspek yang harus diperhatikan oleh perusahaan.Kebersihan kantor dapat menciptakan kenyamanan kerja dan akan berpengaruh pada produktifikas kerja ",
    },
    {
      id: 3,
      gbr: "telemarketing.png",
      title: "Penyediaan Tenaga Kerja Pabrik, Operator",
      jud: "Tim kami menyediakan tenaga kerja yang handal dan terlatih, dapat membantu Mitra lebih focus pada bisnis utamanyaa dan memungkinkan akan menjadi  lebih produktif dan mengalami  peningkatan ",
    },
  ];

  return (
    <section
      id="product"
      className="flex jus sm:px-20 px-3 mx-auto pt-20 sm:pt-32 lg:pt-28 bg-gray-50"
    >
      <div className=" flex gap-3 pb-5">
        {product.map((items, index) => (
          <div key={index} className="card w-72 bg-base-100 shadow-sm px-3">
            <figure>
              <Image
                width={1000}
                height={1000}
                src={`/images/${items.gbr}`}
                alt="Tentang GB Parking"
                className="rounded-2xl shadow-2xl object-cover "
              />
            </figure>
            <h2 className="badge badge-secondary card-title text-xs mt-2">
              {" "}
              {items.title}{" "}
            </h2>
            <div className="card-body text-justify p-2">
              <h2>{items.jud}</h2>
            </div>

            <div>
              <div className="btn m-2 w-1/2 bg-orange-600 rounded-3xl text-white">
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
