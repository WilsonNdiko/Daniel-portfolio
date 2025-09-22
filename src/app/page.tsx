"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col gap-12 py-16">
      {/* Top: Hero main */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Engineering Robust Web Solutions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I’m Daniel, a software engineer specializing in modern web
            applications. I help businesses and teams turn ideas into reliable,
            scalable products.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Let’s Work Together
            </Link>
          </div>
        </motion.div>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
            <Image
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Daniel headshot"
            fill
            className="object-cover"
          />
          </div>
        </motion.div>
      </div>

      {/* Bottom: Quick stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
      >
        <div>
          <p className="text-3xl font-bold text-blue-600">5+</p>
          <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">20+</p>
          <p className="text-gray-600 dark:text-gray-300">Projects Delivered</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">Fullstack</p>
          <p className="text-gray-600 dark:text-gray-300">Specialization</p>
        </div>
      </motion.div>
    </section>
  );
}
// This is the Hero component for the portfolio homepage, featuring an introduction, image, and quick stats.