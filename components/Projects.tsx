"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "Skyline Business Tower",
    image: "/images/project2.jpg",
    location: "Kolhapur, Maharashtra",
    year: "2025",
    type: "Commercial",
    area: "25,000 sq.ft",
    description:
      "A premium commercial office tower built with sustainable materials, earthquake-resistant engineering and modern architectural design.",
  },

  {
    title: "Green Valley Villas",
    image: "/images/project1.jpg",
    location: "Pune, Maharashtra",
    year: "2024",
    type: "Residential",
    area: "18,000 sq.ft",
    description:
      "Luxury villa project offering spacious homes with modern amenities, energy-efficient systems and beautiful landscape planning.",
  },

  {
    title: "Industrial Manufacturing Plant",
    image: "/images/project3.jpg",
    location: "Mumbai, Maharashtra",
    year: "2023",
    type: "Industrial",
    area: "40,000 sq.ft",
    description:
      "High-performance industrial facility developed with advanced safety standards, structural durability and optimized production layout.",
  },

  {
    title: "City Hospital Complex",
    image: "/images/project4.jpg",
    location: "Bengaluru, Karnataka",
    year: "2026",
    type: "Healthcare",
    area: "30,000 sq.ft",
    description:
      "Modern healthcare infrastructure equipped with world-class construction quality, emergency accessibility and future expansion capabilities.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
const [category, setCategory] = useState("All");
const filteredProjects =
  category === "All"
    ? projects
    : projects.filter(
        (project) => project.type === category
      );
  return (
    <>
      <section
        id="projects"
        className="bg-white py-28"
      ><div className="flex flex-wrap justify-center gap-4 mt-12 mb-16">

  {[
    "All",
    "Residential",
    "Commercial",
    "Industrial",
    "Healthcare",
  ].map((item) => (

    <button
      key={item}
      onClick={() => setCategory(item)}
      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300
      ${
        category === item
          ? "bg-orange-600 text-white shadow-lg"
          : "bg-gray-100 hover:bg-orange-100"
      }`}
    >
      {item}
    </button>

  ))}

</div>
        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center">

            <p className="uppercase tracking-[6px] text-orange-600 font-semibold">
              Our Portfolio
            </p>

            <h2 className="text-5xl font-black mt-4">
              Featured Projects
            </h2>

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-8">
              Discover some of our landmark construction projects
              completed with quality craftsmanship and innovative
              engineering solutions.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

            {filteredProjects.map((project, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >

                <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-7 text-white">

                    <span className="text-orange-400 font-semibold uppercase tracking-[3px]">
                      {project.type}
                    </span>

                    <h3 className="text-2xl font-bold mt-2">
                      {project.title}
                    </h3>

                    <button className="mt-6 flex items-center gap-2 text-orange-300 font-semibold group-hover:gap-4 transition-all">

                      View Details

                      <ArrowUpRight size={20} />

                    </button>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}