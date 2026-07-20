"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  "20+ Years of Construction Experience",
  "500+ Successfully Completed Projects",
  "Certified Engineers & Skilled Workforce",
  "Modern Technology & Premium Materials",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/about.jpg"
            alt="About Skyline Construction"
            fill
            className="object-cover"
          />

          <div className="absolute bottom-8 left-8 bg-orange-600 text-white rounded-2xl px-8 py-6 shadow-xl">
            <h3 className="text-5xl font-black">20+</h3>
            <p className="mt-2 tracking-wide">Years Experience</p>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[6px] text-orange-600 font-semibold">
            About Us
          </p>

          <h2 className="text-5xl font-bold mt-5 leading-tight text-gray-900">
            Building Strong Foundations for Future Generations
          </h2>

          <p className="text-gray-600 leading-8 mt-8">
            Skyline Constructions is one of the trusted names in residential,
            commercial and industrial construction. Our mission is to deliver
            projects that combine engineering excellence, modern technology and
            long-lasting quality.
          </p>

          <div className="mt-10 space-y-5">
            {points.map((item) => (
              <div key={item} className="flex items-center gap-4">
                <CheckCircle2
                  size={26}
                  className="text-orange-600 flex-shrink-0"
                />
                <span className="text-lg text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="text-center bg-gray-100 rounded-2xl py-8">
              <h3 className="text-4xl font-black text-orange-600">500+</h3>
              <p className="mt-2 text-gray-600">Projects</p>
            </div>

            <div className="text-center bg-gray-100 rounded-2xl py-8">
              <h3 className="text-4xl font-black text-orange-600">350+</h3>
              <p className="mt-2 text-gray-600">Clients</p>
            </div>

            <div className="text-center bg-gray-100 rounded-2xl py-8">
              <h3 className="text-4xl font-black text-orange-600">120+</h3>
              <p className="mt-2 text-gray-600">Engineers</p>
            </div>
          </div>

          <button className="mt-12 bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-xl font-semibold transition hover:scale-105">
            Learn More
          </button>
        </motion.div>

      </div>
    </section>
  );
}