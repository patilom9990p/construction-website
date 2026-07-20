"use client";

import Image from "next/image";
import { X, MapPin, Calendar, Building2, Ruler } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  image: string;
  location: string;
  year: string;
  type: string;
  area: string;
  description: string;
};

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full overflow-hidden"
          >
            {/* Close */}

            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-orange-600 hover:text-white transition"
            >
              <X size={22} />
            </button>

            <div className="grid lg:grid-cols-2">

              {/* Image */}

              <div className="relative h-[350px] lg:h-[650px]">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

              </div>

              {/* Content */}

              <div className="p-10 flex flex-col">

                <span className="uppercase tracking-[4px] text-orange-600 font-semibold">
                  Featured Project
                </span>

                <h2 className="text-4xl font-black mt-4">
                  {project.title}
                </h2>

                <div className="grid grid-cols-2 gap-6 mt-10">

                  <div className="flex gap-3">

                    <MapPin className="text-orange-600" />

                    <div>

                      <p className="text-gray-500 text-sm">
                        Location
                      </p>

                      <p className="font-semibold">
                        {project.location}
                      </p>

                    </div>

                  </div>

                  <div className="flex gap-3">

                    <Calendar className="text-orange-600" />

                    <div>

                      <p className="text-gray-500 text-sm">
                        Completed
                      </p>

                      <p className="font-semibold">
                        {project.year}
                      </p>

                    </div>

                  </div>

                  <div className="flex gap-3">

                    <Building2 className="text-orange-600" />

                    <div>

                      <p className="text-gray-500 text-sm">
                        Project Type
                      </p>

                      <p className="font-semibold">
                        {project.type}
                      </p>

                    </div>

                  </div>

                  <div className="flex gap-3">

                    <Ruler className="text-orange-600" />

                    <div>

                      <p className="text-gray-500 text-sm">
                        Area
                      </p>

                      <p className="font-semibold">
                        {project.area}
                      </p>

                    </div>

                  </div>

                </div>

                <div className="mt-10">

                  <h3 className="text-2xl font-bold mb-4">
                    Project Overview
                  </h3>

                  <p className="text-gray-600 leading-8">
                    {project.description}
                  </p>

                </div>

                <div className="mt-auto pt-10 flex gap-5">

                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-7 py-4 rounded-xl font-semibold transition">
                    Contact Us
                  </button>

                  <button
                    onClick={onClose}
                    className="border border-gray-300 px-7 py-4 rounded-xl hover:bg-gray-100 transition"
                  >
                    Close
                  </button>

                </div>

              </div>

            </div>

          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}