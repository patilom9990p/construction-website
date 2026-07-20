"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  PencilRuler,
  Hammer,
  KeyRound,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Planning",
    description:
      "Understanding requirements, budgeting and scheduling.",
  },
  {
    icon: PencilRuler,
    title: "Design",
    description:
      "Architectural planning with modern engineering standards.",
  },
  {
    icon: Hammer,
    title: "Construction",
    description:
      "Professional execution using skilled engineers and quality materials.",
  },
  {
    icon: KeyRound,
    title: "Handover",
    description:
      "Final inspection and successful project delivery.",
  },
];

export default function ConstructionProcess() {
  return (
    <section
  id="process"
  className="py-28 bg-gray-100"
>

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="uppercase tracking-[5px] text-orange-600 font-semibold">
            How We Work
          </p>

          <h2 className="text-5xl font-black mt-4">
            Construction Process
          </h2>

        </div>

        <div className="grid lg:grid-cols-4 gap-8 mt-20">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div

                key={index}

                initial={{ opacity: 0, y: 40 }}

                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true }}

                transition={{ delay: index * 0.15 }}

                whileHover={{ y: -10 }}

                className="bg-white rounded-3xl p-8 shadow-xl text-center"

              >

                <div className="w-20 h-20 rounded-full bg-orange-100 mx-auto flex items-center justify-center">

                  <Icon size={38} className="text-orange-600" />

                </div>

                <h3 className="text-2xl font-bold mt-8">

                  {step.title}

                </h3>

                <p className="text-gray-600 mt-5 leading-8">

                  {step.description}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}