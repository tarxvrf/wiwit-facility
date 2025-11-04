import React from "react";
import Image from "next/image";

function Sistem() {
  return (
    <div>
      {" "}
      {/* About Section */}
      <section
        id="sistem"
        className="grid sm:px-20 px-3 gap-10 sm:gap-20 sm:py-24 lg:pt-28"
      >
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold pb-10">
            PENGELOLAAN <span className="font-bold text-orange-600">TENAGA KERJA</span> OUTSOURCING
          </h2>
          <div className="grid sm:grid-cols-2 gap-12  items-center container mx-auto px-6 md:px-12  md:flex-row  lg:gap-20 ">
            <div className="flex justify-end">    
            <Image
              height={1000}
              width={1000}
              src="/images/outsourcing.JPG"
              alt="Outsourcing"
              className="w-96 rounded-2xl object-cover"
            />
            </div>
            <div className=" ">
              <p className="text-lg">
                 <span className="text-lg font-bold">Tenaga Kerja Outsourcing adalah</span> tenaga kerja dari pihak ketiga
                untuk menyelesaikan suatu pekerjaan pada perusahaan pengguna
                jasa. Perusahaan outsourcing merupakan perusahaan yang
                menyediakan jasa dan menyalurkan tenaga kerja dengan keahlian
                tertentu ke perusahaan yang membutuhkan.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <h2 className="text-center mb-2 text-3xl font-bold pb-10">DASAR <span className="text-orange-600 font-bold">HUKUM</span> UTAMA</h2>
          <div className="grid lg:grid-cols-2 gap-12  items-center ontainer mx-auto px-6 md:px-12  md:flex-row  lg:gap-20 ">
            <div className=" ">
              
              <p className="text-lg">
               <span className="text-lg font-bold"> Undang-Undang No. 13 Th. 2003 tentang Ketenagakerjaan (UU
                Ketenagakerjaan) : </span>Sebelum UU Cipta Kerja, outsourcing diatur
                dalam Pasal 64 dan 66, yang mengizinkan penyerahan pekerjaan
                melalui perjanjian pemborongan atau penyediaan jasa
                pekerja/buruh
              </p><br />
              <p className="text-lg">
                <span className="text-lg font-bold">Undang-Undang No. 6 Th. 2023 tentang Penetapan Perpu Cipta Kerja
                Menjadi Undang-Undang :</span> UU ini mengubah dan memperbarui
                ketentuan mengenai outsourcing dalam UU Ketenagakerjaan,
                mengizinkan penyerahan sebagian pekerjaan kepada pihak lain
                dengan perjanjian tertulis.
              </p><br />
              <p className="text-lg">
                 <span className="text-lg font-bold">Peraturan Pemerintah Nomor 35 Tahun 2021 tentang Perjanjian
                Kerja Waktu Tertentu, Alih Daya, Waktu Kerja dan Waktu
                Istirahat, dan Pemutusan Hubungan Kerja :</span> PP ini merupakan
                aturan turunan dari UU Cipta Kerja yang lebih rinci mengatur
                tentang alih daya, termasuk ketentuan mengenai izin usaha dan
                perlindungan pekerja.
              </p>
            </div>

            <Image
              height={1000}
              width={1000}
              src="/images/uu.png"
              alt="Outsourcing"
              className="w-96 rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sistem;
