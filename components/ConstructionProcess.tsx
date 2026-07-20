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
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-orange-600 font-semibold text-sm">
            HOW WE WORK
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black text-gray-900">
            Construction Process
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
            We follow a streamlined construction workflow that ensures
            quality, safety, transparency and timely project delivery.
          </p>

        </div>

        {/* Process Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="bg-white rounded-3xl p-8 shadow-xl text-center"
              >

                <div className="w-20 h-20 rounded-full bg-orange-100 mx-auto flex items-center justify-center">

                  <Icon
                    size={36}
                    className="text-orange-600"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">

                  {step.title}

                </h3>

                <p className="mt-5 text-gray-600 leading-8">

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