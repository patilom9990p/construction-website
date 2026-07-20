"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

const timeline = [
  {
    year: "2008",
    title: "Company Founded",
    description:
      "Started as a small construction company with a vision to build quality infrastructure.",
  },
  {
    year: "2012",
    title: "First Commercial Project",
    description:
      "Successfully completed our first large commercial building project.",
  },
  {
    year: "2018",
    title: "100+ Projects",
    description:
      "Reached the milestone of delivering over 100 successful projects.",
  },
  {
    year: "2026",
    title: "Trusted Construction Partner",
    description:
      "Today we continue building residential, commercial and industrial excellence.",
  },
];

export default function Timeline() {
  return (
    <section id="story" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[5px] text-orange-600 font-semibold">
            Our Journey
          </p>

          <h2 className="text-5xl font-black mt-4">
            Building Trust Since 2008
          </h2>
        </div>

        <div className="space-y-12">

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-8 items-start"
            >

              <div className="w-20 h-20 rounded-full bg-orange-600 text-white flex items-center justify-center">

                <CalendarDays size={32} />

              </div>

              <div className="flex-1 bg-gray-50 rounded-3xl p-8 shadow-lg">

                <span className="text-orange-600 font-bold text-xl">

                  {item.year}

                </span>

                <h3 className="text-3xl font-bold mt-3">

                  {item.title}

                </h3>

                <p className="text-gray-600 mt-4 leading-8">

                  {item.description}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}