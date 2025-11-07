"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 px-6">
      {/* Animasi 404 */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[120px] md:text-[160px] font-extrabold text-orange-600 mb-0 leading-none"
      >
       Upsss!!...
      </motion.h1>

      {/* Pesan */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-2xl md:text-3xl font-semibold mt-5"
      >
       Halaman Ini Belum Tersedia
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-gray-600 mt-3 text-center max-w-md"
      >
        Mohon Maaf, Halaman yang kamu cari belum tersedia. 
        Masih Dalam Pengembangan. Silahkan kembali ke Menu Home
      </motion.p>

      {/* Tombol kembali */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-medium rounded-full shadow hover:bg-blue-700 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali Ke Home
        </Link>
      </motion.div>

      {/* Background dekorasi */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30 bottom-10 right-10 animate-pulse"></div>
      </div>
    </div>
  );
}

export default Custom404;