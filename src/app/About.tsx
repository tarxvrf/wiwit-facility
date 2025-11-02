import React from "react";
import Image from "next/image";
import { FaComputer } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineManageAccounts } from "react-icons/md";

function About() {
  return (
    <div>
      {" "}
      {/* About Section */}
      <section id="about" className="py-20 sm:py-32 lg:pt-28">
        <div className="grid sm:px-20 px-5 py-2 border ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tentang <span className="text-amber-500">GB Facility</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-2 sm:mx-auto ">
            <div className="relative pb-2 mx-auto">
              <Image
                width={500}
                height={500}
                src="/images/gbbaner.jpg"
                alt="Tentang GB Parking"
                className="rounded-2xl shadow-2xl object-cover sm:w-96 w-64 sm:right-0"
              />
            </div>
            <div className="text-gray-600 mb-6  sm:text-2xl text-justify ">
              <span className="font-bold">GB Facility</span> adalah perusahaan
              Alih Daya telah beroperasi sejak tahun 2005 dibawah naungan PT
              Gerbang Berkah Solusi Indonesia hingga saat ini telah mengelola
              ribuan karyawan di seluruh kota besar di Indonesia GB Faclity
              memberikan layanan terpadu dan terintegrasi kepada perusahaan yang
              memerlukan layanan pengelolaan gedung/kantor dan berbagai macam
              bentuk layanan lainnya.
            </div>
          </div>

          <div className="grid lg:grid-cols-2 items-center lg:gap-10">
            <div className="text-gray-600 mb-6 text-justify">
              <span className="font-bold">GB Facility</span> memberikan
              Multi-Layanan menjadikan layanan Fasilitas Terpadu dalam berbagai
              layanan bisnis dan industry, yang melupitu antara lain :
              <ul>
                <li>1. Layanan Penyediaan Tenaga Pengamanan</li>
                <li>
                  2. Layanan Penyediaan Tenaga Kerja Pabrik, Operator, dll
                </li>
                <li>
                  3. Layanan Penyediaan Tenaga Kebersihan (cleaning service) dan
                  Office Boy
                </li>
              </ul>
              <p className="text-gray-600 mb-6 text-justify">
                Kehadiran GB Facility untuk memberikan nilai tambah, memelihara
                dan mengoptimalkan tempat milik mitra/pelanggan dan
                berkontribusi pada harapan mitra/pengguna jasa kami, agar
                perusahaan mitra/pengguna jasama kami dapat lebih focus dalam
                pengembangan bisnisnya.
              </p>
              <div className="card max-w-6xl bg-base-100 shadow-sm text-gray-600 mb-6 text-justify">
                <div className="card-body">
                  <span className="badge badge-sm badge-warning font-semibold p-1">
                    PENGELOLAAN TENAGA KERJA OUTSOURCING
                  </span>
                  <div className="flex justify-between">
                    <h2 className="text-lg font-bold">
                      Tenaga Kerja Outsourcing
                    </h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2 ">
                    <div>
                      <Image
                        width={500}
                        height={500}
                        src="/images/gbbaner.jpg"
                        alt="Tentang GB Parking"
                        className="rounded-2xl shadow-2xl object-cover sm:w-64 w-32 sm:right-0"
                      />
                    </div>
                    <div>
                      <h2>
                        <span className="font-bold">
                          Tenaga Kerja Outsourcing
                        </span>{" "}
                        adalah tenaga kerja dari pihak ketiga untuk
                        menyelesaikan suatu pekerjaan pada perusahaan pengguna
                        jasa.{" "}
                      </h2>
                      <h2>
                        <span className="font-bold">
                          Perusahaan outsourcing
                        </span>{" "}
                        merupakan perusahaan yang menyediakan jasa dan
                        menyalurkan tenaga kerja dengan keahlian tertentu ke
                        perusahaan yang membutuhkan.
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card max-w-6xl bg-base-100 shadow-sm text-gray-600 mb-6 text-justify">
                <div className="card-body">
                  <span className="badge badge-sm badge-warning font-semibold p-1">
                    DASAR HUKUM UTAMA
                  </span>
                  <div className="flex justify-between">
                    <h2 className="text-lg font-bold">
                      Tenaga Kerja Outsourcing
                    </h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2 ">
                    <div>
                      <Image
                        width={500}
                        height={500}
                        src="/images/gbbaner.jpg"
                        alt="Tentang GB Parking"
                        className="rounded-2xl shadow-2xl object-cover sm:w-64 w-32 sm:right-0"
                      />
                    </div>
                    <div>
                      <h2>
                        <span className="font-bold">
                          Undang-Undang No. 13 Th. 2003 tentang
                          Ketenagakerjaan(UU Ketenagakerjaan) :
                        </span>
                        Sebelum UU Cipta Kerja, outsourcing diatur dalam Pasal
                        64 dan 66, yang mengizinkan penyerahan pekerjaan melalui
                        perjanjian pemborongan atau penyediaan jasa
                        pekerja/buruh
                      </h2>
                      <h2>
                        <span className="font-bold">
                          Undang-Undang No. 6 Th. 2023 tentang Penetapan Perpu
                          Cipta Kerja Menjadi Undang-Undang :
                        </span>{" "}
                        UU ini mengubah dan memperbarui ketentuan mengenai
                        outsourcing dalam UU Ketenagakerjaan, mengizinkan
                        penyerahan sebagian pekerjaan kepada pihak lain dengan
                        perjanjian tertulis.
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src={"/images/gbbaner.jpg"}
                className="relative w-96 bg-cover"
                width={500}
                height={500}
                alt={""}
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
