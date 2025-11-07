"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-32 lg:py-48 ">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Hubungi Kami
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Kami senang mendengar dari Anda. Silakan hubungi kami melalui
            formulir berikut atau informasi kontak di bawah.
          </p>
        </motion.div>

        {/* Konten utama */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-md space-y-5"
          >
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Nama Lengkap
              </label>
              <input
                type="text"
                placeholder="Masukkan nama Anda"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Alamat Email
              </label>
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Pesan
              </label>
              <textarea
                placeholder="Tuliskan pesan Anda..."
                rows={5}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Kirim Pesan
            </button>
          </motion.form>

          {/* Informasi Kontak */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              Informasi Kontak
            </h3>
            <p className="text-gray-600">
              Anda juga dapat menghubungi kami langsung melalui kontak di bawah
              ini atau kunjungi kantor kami.
            </p>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Alamat Kantor</p>
                <p className="text-gray-600">
                  Green Park Office View RD 05, Jl. Daan Mogot Raya KM 14,
                  Cengkareng, Jakarta Barat
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Telepon</p>
                <p className="text-gray-600">+62 813 1436 7878</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Email</p>
                <p className="text-gray-600">nfo@gbparking.com</p>
              </div>
            </div>

            <div className="pt-6">
              <iframe
                className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8245666448775!2d106.7162787749898!3d-6.1542452938328625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f900034810cb%3A0xc4cd56f463190483!2sGerbang%20Berkah%20Solusi%20Indonesia!5e0!3m2!1sen!2sid!4v1755175371755!5m2!1sen!2sid"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
