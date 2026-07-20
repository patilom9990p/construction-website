"use client";

import Image from "next/image";
import {
  X,
  MapPin,
  Calendar,
  Building2,
  Ruler,
} from "lucide-react";
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
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}

            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-orange-600 hover:text-white transition"
            >
              <X size={22} />
            </button>

            <div className="grid lg:grid-cols-2">

              {/* Image */}

              <div className="relative h-72 md:h-96 lg:h-auto min-h-[400px]">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

              </div>

              {/* Content */}

              <div className="p-8 lg:p-10 flex flex-col">

                <span className="uppercase tracking-[5px] text-orange-600 font-semibold text-sm">
                  Featured Project
                </span>

                <h2 className="mt-4 text-3xl md:text-5xl font-black text-gray-900">
                  {project.title}
                </h2>

                {/* Details */}

                <div className="grid grid-cols-2 gap-6 mt-10">

                  <div className="flex gap-3">
                    <MapPin className="text-orange-600 mt-1" />

                    <div>
                      <p className="text-sm text-gray-500">
                        Location
                      </p>

                      <p className="font-semibold text-gray-900">
                        {project.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Calendar className="text-orange-600 mt-1" />

                    <div>
                      <p className="text-sm text-gray-500">
                        Completed
                      </p>

                      <p className="font-semibold text-gray-900">
                        {project.year}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Building2 className="text-orange-600 mt-1" />

                    <div>
                      <p className="text-sm text-gray-500">
                        Project Type
                      </p>

                      <p className="font-semibold text-gray-900">
                        {project.type}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Ruler className="text-orange-600 mt-1" />

                    <div>
                      <p className="text-sm text-gray-500">
                        Area
                      </p>

                      <p className="font-semibold text-gray-900">
                        {project.area}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Overview */}

                <div className="mt-10">

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Project Overview
                  </h3>

                  <p className="text-gray-600 leading-8 text-base">
                    {project.description}
                  </p>

                </div>

                {/* Buttons */}

                <div className="mt-10 flex flex-wrap gap-4">

                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition">
                    Contact Us
                  </button>

                  <button
                    onClick={onClose}
                    className="border border-gray-300 text-gray-800 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition"
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