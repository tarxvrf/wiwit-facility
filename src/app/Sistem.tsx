import React from "react";
import Image from "next/image";

function Sistem() {


  return (

    <div>
      {" "}
      {/* About Section */}
      <section id="sistem" className="grid sm:px-20 px-3 md:grid-cols-2 sm:gap-3 container mx-auto py-20 sm:py-24 lg:pt-28 ">
        <div className="card bg-base-100 w-full shadow-sm">
          <figure>
            <img
              src="/images/outsourcing.JPG"
              alt="Outsourcing" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">PENGELOLAAN TENAGA KERJA OUTSOURCING</h2>
            <p>Tenaga Kerja Outsourcing adalah tenaga kerja dari pihak ketiga untuk menyelesaikan suatu pekerjaan pada perusahaan pengguna jasa.
              Perusahaan outsourcing merupakan perusahaan yang menyediakan jasa dan menyalurkan tenaga kerja dengan keahlian tertentu ke perusahaan yang membutuhkan.
            </p>
          </div>
          
        </div>

        <div className="card bg-base-100 w-full shadow-sm">
          <figure>
            <img
              src="/images/uu.png"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">DASAR HUKUM UTAMA</h2>
            <p>Undang-Undang No. 13 Th. 2003 tentang Ketenagakerjaan (UU Ketenagakerjaan) :
              Sebelum UU Cipta Kerja, outsourcing diatur dalam Pasal 64 dan 66, yang mengizinkan penyerahan pekerjaan melalui perjanjian pemborongan atau penyediaan jasa pekerja/buruh
            </p>
            <p>
              Undang-Undang No. 6 Th. 2023 tentang Penetapan Perpu Cipta Kerja Menjadi Undang-Undang :
              UU ini mengubah dan memperbarui ketentuan mengenai outsourcing dalam UU Ketenagakerjaan, mengizinkan penyerahan sebagian pekerjaan kepada pihak lain dengan perjanjian tertulis.
            </p>
            <p>
              Peraturan Pemerintah Nomor 35 Tahun 2021 tentang Perjanjian Kerja Waktu Tertentu, Alih Daya, Waktu Kerja dan Waktu Istirahat, dan Pemutusan Hubungan Kerja :
              PP ini merupakan aturan turunan dari UU Cipta Kerja yang lebih rinci mengatur tentang alih daya, termasuk ketentuan mengenai izin usaha dan perlindungan pekerja.
            </p>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default Sistem;
