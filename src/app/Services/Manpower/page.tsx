
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import Karyawan from "@/app/Karyawan";
function Product() {
  return (
    <div>
      {" "}
      {/* About Section */}
      <section id="about" className="py-20 sm:py-20 lg:py-20 px-3">
        <div className="flex justify-center">
          <Image
            width={2000}
            height={2000}
            src="/images/home.jpg"
            alt="Tentang GB Parking"
              className="rounded-2xl shadow-2xl object-cover w-full"
          />
        </div>
        <div className="max-w-8xl sm:px-5 grid gap-5 px-3 mt-20">
          <div className="grid sm:grid-cols-2 mx-auto sm:p-10 gap-10 max-w-7xl items-center">
            <div className="flex justify-center">
              <Image
                width={500}
                height={500}
                src="/images/tigapriafull.png"
                alt="Tentang GB Parking"
                className="rounded-2xl shadow-2xl object-cover w-64 sm:w-96 "
              />
            </div>
            <div className="flex flex-col gap-3 text-gray-600 text-lg mb-6 text-center">
              <div className="flex justify-center">
                <Image
                  src={"/images/tagname.png"}
                  width={200}
                  height={200}
                  alt={""}
                  className="w-60"
                />
              </div>
              <div className="flex text-2xl flex-col gap-3 ">
                <p>
                  Tim kami menyediakan tenaga kerja yang handal dan terlatih,
                  dapat membantu Mitra lebih focus pada bisnis utamanyaa dan
                  memungkinkan akan menjadi lebih produktif dan mengalami
                  peningkatan
                </p>
              </div>
            </div>
          </div>

        </div>
        <Karyawan />
      </section>
    </div>
  );
}

export default Product;
