"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-zinc-900">

      <div className="max-w-7xl mx-auto px-8">

        <motion.div

          initial={{ opacity: 0, scale: .95 }}

          whileInView={{ opacity: 1, scale: 1 }}

          viewport={{ once: true }}

          className="bg-orange-600 rounded-[40px] py-20 px-10 text-center text-white shadow-2xl"

        >

          <h2 className="text-5xl font-black">

            Ready To Start Your Dream Project?

          </h2>

          <p className="mt-6 text-xl max-w-3xl mx-auto">

            From planning to completion, we deliver exceptional construction
            solutions tailored to your needs.

          </p>

          <button className="mt-10 bg-white text-orange-600 px-10 py-4 rounded-xl font-bold flex items-center gap-3 mx-auto hover:scale-105 transition">

            Get Free Consultation

            <ArrowRight size={20} />

          </button>

        </motion.div>

      </div>

    </section>
  );
}