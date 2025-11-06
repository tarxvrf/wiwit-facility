
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
function Product() {
  return (
    <div>
      {" "}
      {/* About Section */}
      <section id="about" className="py-10 sm:py-20 lg:py-20 px-3">
        <div className="flex justify-center">
          <Image
            width={2000}
            height={2000}
            src="/images/homesatpam.jpg"
            alt="Tentang GB Parking"
            className="rounded-2xl shadow-2xl object-cover w-full"
          />
        </div>
        <div className="max-w-8xl sm:px-5 grid gap-12  pt-10 ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Layanan Tenaga <span className="text-amber-600">Pengamanan</span>
          </h2>

          <div className="grid sm:grid-cols-2 mx-auto sm:p-10 px-3 gap-10 max-w-7xl items-center">
            <div className="flex-1 ">
              <Image
                width={1000}
                height={1000}
                src="/images/homesatpam.jpg"
                alt="Tentang GB Parking"
                className="rounded-2xl shadow-2xl object-cover w-full"
              />
            </div>
            <div className="flex flex-col gap-3 text-gray-600 text-center text-lg">
              <div className="flex justify-center">
                <Image
                  src={"/images/tagname.png"}
                  width={200}
                  height={200}
                  alt={""}
                  className="w-64"
                />
              </div>
              <div className="leading-relaxed ">
                Menyiapkan system keamanan yang efektif dan efisian dalam
                melindungi asset perusahaan, menjaga ketertibam dan keamanan di
                lingkungan kerja Perusahaan kemanan kami, telah tersertifikasi
                dari Kepolisian Republik Indonesia dan secara periodic
                mengikuuti dan melakukan pelatihan-pelatihan agar tetap dapat
                senantiasa menjaga stabuilitas pengamanan dan kualitas kerja
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 items-center  text-gray-600  lg:gap-10">
            <div className=" flex-1 justify-end text-lg mb-6 text-justify mx-auto">

              <ul>
                <li className="flex gap-3"><FaCheckCircle className="text-green-500 rounded-full" /><span>1. Pendampingan</span></li>
                <li className="flex gap-3"><FaCheckCircle className="text-green-500 rounded-full" /><span>2. Gedung Perkantoran</span></li>
                <li className="flex gap-3"><FaCheckCircle className="text-green-500 rounded-full" /><span>3. Pusat Perbelanjaan dan Ritel</span></li>
                <li className="flex gap-3"><FaCheckCircle className="text-green-500 rounded-full" /><span>4. Ritel</span></li>
                <li className="flex gap-3"><FaCheckCircle className="text-green-500 rounded-full" /><span>5. Lembaga Keuangan</span></li>
                <li className="flex gap-3"><FaCheckCircle className="text-green-500 rounded-full" /><span>6. Lembaga Pendidikan</span></li>
                <li className="flex gap-3"><FaCheckCircle className="text-green-500 rounded-full" /><span>7. Pabrik</span></li>
                <li className="flex gap-3"><FaCheckCircle className="text-green-500 rounded-full" /><span>8. Tempat Wisata dan Tempat Hiburan</span></li>
              </ul>

            </div>
            <div className="">
              <div className="grid grid-cols-2">
                <div className="grid grid-rows-2 gap-2 p-2">
                  <div>
                    <Image
                      width={500}
                      height={500}
                      src="/images/guardai.png"
                      alt="Tentang GB Parking"
                      className="rounded-2xl shadow-2xl object-cover h-32 sm:h-[250px]"
                    />
                  </div>
                  <div>
                    <Image
                      width={500}
                      height={500}
                      src="/images/briefsatpam.jpeg"
                      alt="Tentang GB Parking"
                      className="rounded-2xl shadow-2xl object-cover h-32 sm:h-[250px] "
                    />
                  </div>
                </div>
                <div className="p-2">
                  <Image
                    width={500}
                    height={500}
                    src="/images/satpamai.png"
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
              src="/images/satpamproyek.jpeg"
              alt="Tentang GB Parking"
              className="rounded-2xl shadow-2xl object-cover w-96 "
            />
            <Image
              width={500}
              height={500}
              src="/images/guardai.png"
              alt="Tentang GB Parking"
              className="rounded-2xl shadow-2xl object-cover w-96 "
            />
            <Image
              width={500}
              height={500}
              src="/images/satpam1.png"
              alt="Tentang GB Parking"
              className="rounded-2xl shadow-2xl object-cover w-96"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <div className="">
              <h2 className="px-3 text-center text-lg md:text-xl font-bold text-gray-900">
                PENJAGAAN SECURITY{" "}
                <span className="text-orange-600">GEDUNG</span>
              </h2>
              <div className="grid lg:grid-cols-2 mx-auto gap-3">
                <div className="aspect-video bg-gray-800 flex items-center justify-center rounded-xl relative">
                  <div className="bg-opacity-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-50 transition">
                    <FaYoutube className="text-5xl" />
                  </div>
                </div>
                <div className="aspect-video bg-gray-800 flex items-center justify-center rounded-xl relative">
                  <div className="bg-opacity-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-50 transition">
                    <FaYoutube className="text-5xl" />
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <h2 className="px-3 text-lg md:text-xl font-bold text-center text-gray-900">
                KESELAMATAN <span className="text-orange-600">K3</span>
              </h2>
              <div className="grid lg:grid-cols-2 gap-3">
                <div className="aspect-video bg-gray-800 flex items-center justify-center rounded-xl relative">
                  <div className="bg-opacity-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-50 transition">
                    <FaYoutube className="text-5xl" />
                  </div>
                </div>
                <div className="aspect-video bg-gray-800 flex items-center justify-center rounded-xl relative">
                  <div className="bg-opacity-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-50 transition">
                    <FaYoutube className="text-5xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
