"use client";

import { motion } from "framer-motion";
import {
  Building2,
  HardHat,
  Hammer,
  Paintbrush,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Residential Construction",
    description:
      "Premium homes and villas built with modern architecture and high-quality materials.",
  },
  {
    icon: HardHat,
    title: "Commercial Projects",
    description:
      "Office buildings, shopping malls and commercial complexes delivered on time.",
  },
  {
    icon: Hammer,
    title: "Industrial Construction",
    description:
      "Factories, warehouses and industrial infrastructure with advanced engineering.",
  },
  {
    icon: Paintbrush,
    title: "Interior Renovation",
    description:
      "Luxury interiors, remodeling and complete renovation services.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="text-orange-600 uppercase tracking-[5px] font-semibold text-center">
            Our Services
          </p>

          <h2 className="text-5xl font-bold text-center mt-4">
            Complete Construction Solutions
          </h2>

          <p className="text-center text-gray-600 mt-6 max-w-3xl mx-auto">
            We provide world-class residential, commercial and industrial
            construction services with modern engineering and premium quality.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div

                key={index}

                initial={{ opacity: 0, y: 40 }}

                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true }}

                transition={{ delay: index * 0.2 }}

                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}

                className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition"

              >

                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">

                  <Icon
                    size={34}
                    className="text-orange-600"
                  />

                </div>

                <h3 className="text-2xl font-bold mt-8">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-5 leading-8">
                  {service.description}
                </p>

                <button className="mt-8 text-orange-600 font-semibold hover:translate-x-2 transition">
                  Learn More →
                </button>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}