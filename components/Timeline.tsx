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
    title: "100+ Projects Completed",
    description:
      "Reached the milestone of delivering over 100 successful residential and commercial projects.",
  },
  {
    year: "2026",
    title: "Trusted Construction Partner",
    description:
      "Today we continue building residential, commercial and industrial excellence with modern engineering.",
  },
];

export default function Timeline() {
  return (
    <section id="story" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-orange-600 font-semibold text-sm">
            OUR JOURNEY
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black text-gray-900">
            Building Trust
            <br />
            Since 2008
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Our journey is built on innovation, quality workmanship,
            and long-term relationships with our clients.
          </p>

        </div>

        {/* Timeline */}

        <div className="space-y-12">

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 items-start"
            >

              {/* Icon */}

              <div className="w-20 h-20 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-xl shrink-0">

                <CalendarDays size={34} />

              </div>

              {/* Card */}

              <div className="flex-1 bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

                <span className="text-orange-600 font-bold text-2xl">
                  {item.year}
                </span>

                <h3 className="text-3xl font-bold text-gray-900 mt-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-5 leading-8 text-lg">
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