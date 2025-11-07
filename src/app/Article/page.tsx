"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const articles = [
  {
    id: 1,
    title: "Boost Your Productivity with Modern Tools",
    description:
      "Discover how using the right digital tools can improve your workflow and make your day more efficient.",
    image: "/images/cleaner.png",
    date: "Nov 5, 2025",
    category: "Productivity",
  },
  {
    id: 2,
    title: "Design Trends 2025: What’s New?",
    description:
      "Explore the latest design trends in 2025 that are shaping digital experiences across industries.",
    image: "/images/article2.jpg",
    date: "Nov 7, 2025",
    category: "Design",
  },
  {
    id: 3,
    title: "AI in Web Development",
    description:
      "Artificial Intelligence is revolutionizing how we build and scale web applications. Learn how you can adapt.",
    image: "/images/article3.jpg",
    date: "Nov 3, 2025",
    category: "Technology",
  },
];

export default function ArticleNewsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Latest Articles & News
          </motion.h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Stay updated with the latest insights, tips, and technology news
            from our expert team.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {article.description}
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
