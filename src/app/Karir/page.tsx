"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Jakarta, Indonesia",
    type: "Full Time",
    description:
      "Bertanggung jawab untuk mengembangkan antarmuka pengguna yang responsif dan interaktif menggunakan React/Next.js.",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    location: "Yogyakarta, Indonesia",
    type: "Remote",
    description:
      "Merancang pengalaman pengguna yang intuitif dan tampilan visual yang menarik untuk produk digital perusahaan.",
  },
  {
    id: 3,
    title: "Digital Marketing Specialist",
    location: "Bandung, Indonesia",
    type: "Full Time",
    description:
      "Mengelola strategi pemasaran digital dan kampanye media sosial untuk meningkatkan brand awareness dan konversi.",
  },
];

export default function CareerSection() {
  return (
    <section id="career" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Karier di Perusahaan Kami
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Bergabunglah dengan tim kami dan jadilah bagian dari perusahaan yang
            tumbuh pesat dan inovatif.
          </p>
        </motion.div>

        {/* List Lowongan */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  {job.title}
                </h3>
                <Briefcase className="text-blue-600 w-6 h-6" />
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {job.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>{job.type}</span>
                </div>
              </div>

              <a
                href="#"
                className="inline-block px-5 py-2 rounded-xl bg-orange-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Lamar Sekarang
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 bg-blue-600 text-white rounded-2xl py-12 px-6 text-center shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Tidak menemukan posisi yang sesuai?
          </h3>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Kami selalu mencari talenta hebat untuk bergabung dengan tim kami.
            Kirimkan CV Anda dan kami akan menghubungi jika ada kesempatan yang
            sesuai.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow hover:bg-gray-100 transition"
          >
            Kirim CV Anda
          </a>
        </motion.div>
      </div>
    </section>
  );
}
