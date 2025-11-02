"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const routers = useRouter();
  const pathname = usePathname();
  const navlink = [
    { paths: "/", pagename: "Home" },
    { paths: "/Service", pagename: "Service" },
    { paths: "/Artikel", pagename: "Artikel & Berita" },
    { paths: "/Hubungi", pagename: "Hubungi Kami" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // kalau scroll > 50px, ubah bg
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" ">
      {/* Header */}
      <header
        className={`fixed  top-0 left-0 w-full z-50 ${
          isScrolled
            ? "bg-gray-100 shadow-xl rounded-b-lg ease-in-out duration-1000 "
            : "duration-1000 ease-in-out bg-transparent"
        }`}
      >
        <div className=" mx-auto flex items-center gap-2 justify-between px-5 sm:px-20 text-xs sm:text-xl py-4">
          <div >
            <Image
              width={500}
              height={500}
              src={"/images/bgicon.png"}
              className="sm:w-32 w-8"
              alt={""}
            ></Image>
          </div>
          <div>
            <ul className="flex gap-2">
              {navlink.map((item, index) => {
                const isactive = pathname === item.paths;
                return (
                  <li key={index}>
                    <Link
                      href={item.paths}
                      className={`transition-colors hover:text-blue-600 ${
                        isactive
                          ? "text-blue-600 font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      {item.pagename}
                    </Link>
                  </li>
                );
              })}
              <li>
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    className={`${
                      pathname.startsWith("/Product")
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    Product
                  </div>
                  <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li>
                      <Link href={"/Product"}>Jasa Tenaga Pengamanan</Link>
                    </li>
                    <li>
                      <Link href={"/Product/Cleaning"}>Cleaning dan Gardening</Link>
                    </li>
                     <li>
                      <Link href={"/Product/A"}>Labour Supply</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <label htmlFor="close">
            <GiHamburgerMenu className=" text-2xl mt-1 sm:hidden" />{" "}
          </label>
        </div>

        <div className="drawer">
          <input id="close" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side">
            <ul className="menu bg-gradient-to-r from-amber-500 via-white to-amber-500  bg-[length:400%_400%] animate-gradient relative z-10  min-h-full w-full p-4">
              {/* Sidebar content here */}
              <label htmlFor="close" className="drawer-overlay"></label>
              <label htmlFor="close">
                <IoCloseCircle className="text-4xl" />
              </label>
              <Link
                href="#about"
                onClick={() => {
                  document.getElementById("close")?.click();
                }}
                className="text-xl font-bold"
              >
                About
              </Link>
              <Link
                href="#service"
                onClick={() => {
                  document.getElementById("close")?.click();
                }}
                className="text-xl font-bold"
              >
                Service
              </Link>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
