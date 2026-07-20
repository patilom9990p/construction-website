"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "20+",
    title: "Years Experience",
  },
  {
    number: "500+",
    title: "Projects Completed",
  },
  {
    number: "350+",
    title: "Happy Clients",
  },
  {
    number: "120+",
    title: "Expert Engineers",
  },
];

export default function Stats() {
  return (
    <section className="bg-orange-600 py-24 text-white">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          {stats.map((item, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 50 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{
                delay: index * 0.2,
              }}

              whileHover={{
                scale: 1.05,
              }}

              className="bg-white/10 backdrop-blur-md rounded-3xl py-12"

            >

              <h2 className="text-6xl font-black">

                {item.number}

              </h2>

              <p className="uppercase tracking-[4px] mt-4 text-lg">

                {item.title}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}