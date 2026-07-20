"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  HardHat,
  Clock3,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description:
      "We use only high-quality construction materials for durability and safety.",
  },
  {
    icon: HardHat,
    title: "Expert Engineers",
    description:
      "Experienced architects and engineers manage every project professionally.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "Projects are completed within committed timelines without compromising quality.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Company",
    description:
      "Hundreds of satisfied clients trust our construction expertise and workmanship.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="py-28 bg-zinc-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[5px] text-orange-500 font-semibold text-center">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold text-center mt-4">
            Building Excellence Every Day
          </h2>

          <p className="text-center text-gray-400 mt-6 max-w-3xl mx-auto">
            Our dedication to quality, innovation and customer satisfaction
            makes us a trusted construction partner.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="bg-zinc-800 rounded-3xl p-8 hover:bg-orange-600 transition duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon size={34} />
                </div>

                <h3 className="text-2xl font-bold mt-8">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-5 leading-8">
                  {item.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}