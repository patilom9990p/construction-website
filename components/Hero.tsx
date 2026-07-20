"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >
      {/* Background Image */}

      <Image
        src="/images/hero34.jpg"
        alt="Construction Site"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/45"></div>

      {/* Left Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent"></div>

      {/* Content */}

      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto px-8 w-full">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >

            {/* Small Heading */}

            <div className="flex items-center gap-5 mb-8">

              <div className="w-16 h-[3px] bg-orange-600"></div>

              <p className="uppercase tracking-[6px] text-white/90 font-semibold text-sm">
                BUILDING EXCELLENCE SINCE 2008
              </p>

            </div>

            {/* Main Heading */}

            <h1 className="text-white font-black leading-none">

              <span className="block text-6xl md:text-8xl">
                Building
              </span>

              <span className="block text-6xl md:text-8xl text-orange-600 mt-2">
                Stronger
              </span>

              <span className="block text-6xl md:text-8xl text-orange-600">
                Foundations
              </span>

              <span className="block text-6xl md:text-8xl mt-2">
                For Tomorrow
              </span>

            </h1>

            {/* Description */}

            <p className="mt-10 text-gray-300 text-lg md:text-xl leading-9 max-w-2xl">
              We create residential, commercial and industrial
              projects with exceptional quality, innovative engineering
              and trusted workmanship that stands the test of time.
            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <button
                onClick={() => scrollToSection("contact")}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Get Free Quote
                <ArrowRight size={20} />
              </button>

              <button
                onClick={() => scrollToSection("projects")}
                className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition duration-300 hover:shadow-2xl"
              >
                <Play size={18} />
                View Projects
              </button>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      {/* Scroll Indicator */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          delay: 1.5,
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white"
      >

        <span className="text-sm uppercase tracking-[5px] mb-3">
          Scroll
        </span>

        <div className="w-7 h-12 rounded-full border-2 border-white flex justify-center">

          <motion.div
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="w-1.5 h-3 rounded-full bg-orange-500 mt-2"
          />

        </div>

      </motion.div>

    </section>
  );
}