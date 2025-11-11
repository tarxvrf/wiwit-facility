import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
function Partner() {
  return (
    <div>
      {" "}
      {/* Partners Section */}
      <section id="partners" className="py-24 sm:py-28 lg:py-30">
        <div className="grid mx-auto container lg:flex-col lg:justify-center">
          <div>
            <h2 className="text-center font-bold text-gray-950 text-3xl md:text-4xl mb-10">
              SUMBER DAYA <span className="text-orange-600">MANUSIA </span>
            </h2>
          </div>
          <div className="max-w-6xl rounded-2xl card shadow-2xl shadow-gray-500">
            <Marquee
              speed={50}
              gradient={false}
              pauseOnHover
              className="py-4 px-3 "
            >
              <div className="flex justify-center ">
                <Image
                  width={500}
                  height={500}
                  src="/images/stafpabrik.png"
                  alt="Client 1"
                  className="w-full object-cover border bg-white shadow-md hover:shadow-xl  transform hover:-translate-y-2 transition"
                />
              </div>

             

              <div className="flex justify-center">
                <Image
                  width={500}
                  height={500}
                  src="/images/tigapriafull.png"
                  alt="Client 3"
                  className="w-full object-cover border bg-white  shadow-md hover:shadow-xl transform hover:-translate-y-2 transition"
                />
              </div>

              <div className="flex justify-center">
                <Image
                  width={500}
                  height={500}
                  src="/images/waiter.png"
                  alt="Client 4"
                  className="w-full object-cover border bg-white  shadow-md hover:shadow-xl transform hover:-translate-y-2 transition"
                />
              </div>

              <div className="flex justify-center">
                <Image
                  width={500}
                  height={500}
                  src="/images/tigawanitafull.png"
                  alt="Client 5"
                  className=" w-full object-cover border bg-white  shadow-md hover:shadow-xl transform hover:-translate-y-2 transition"
                />
              </div>

              <div className="flex justify-center">
                <Image
                  width={500}
                  height={500}
                  src="/images/gbfpabrik1.png"
                  alt="Client 6"
                  className="w-full object-cover border bg-white  shadow-md hover:shadow-xl transform hover:-translate-y-2 transition"
                />
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partner;
