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
    title: "Residential Towers",
    image: "/images/project3.jpg",
    location: "Mumbai, Maharashtra",
    year: "2023",
    type: "Industrial",
    area: "40,000 sq.ft",
    description:
      "A residential tower is a multi-story building primarily designed for people to live in",
  },
  {
    title: "FARM HOUSE",
    image: "/images/project4.jpg",
    location: "Bengaluru, Karnataka",
    year: "2026",
    type: "Healthcare",
    area: "30,000 sq.ft",
    description:
      "A farmhouse is a residential building located on agricultural land, traditionally serving as the primary dwelling for farmers and their families, and now often used as a peaceful retreat or vacation home.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[0] | null>(null);

  const [category, setCategory] = useState("All");

  const filteredProjects =
    category === "All"
      ? projects
      : projects.filter((project) => project.type === category);

  return (
    <>
      <section id="projects" className="bg-white py-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Filter Buttons */}

          <div className="flex flex-wrap justify-center gap-4 mb-16">

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
                    : "bg-gray-100 text-gray-800 hover:bg-orange-100"
                }`}
              >
                {item}
              </button>

            ))}

          </div>

          {/* Heading */}

          <div className="text-center">

            <p className="uppercase tracking-[6px] text-orange-600 font-semibold text-sm">
              OUR PORTFOLIO
            </p>

            <h2 className="mt-4 text-4xl md:text-6xl font-black text-gray-900">
              Featured Projects
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
              Discover some of our landmark construction projects completed
              with quality craftsmanship and innovative engineering solutions.
            </p>

          </div>

          {/* Cards */}

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

            {filteredProjects.map((project, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >

                <div className="relative h-[420px] overflow-hidden rounded-3xl shadow-xl">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-7 text-white">

                    <span className="uppercase tracking-[3px] font-semibold text-orange-400">
                      {project.type}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      {project.title}
                    </h3>

                    <button className="mt-6 flex items-center gap-2 font-semibold text-orange-300 transition-all group-hover:gap-4">

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