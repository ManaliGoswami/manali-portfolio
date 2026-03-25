"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "The Caption Studio",
    category: "AI Automation & Productivity",
    description: "Built and deployed an AI-powered caption generator using AI-assisted development tools, reducing content creation time by automating the ideation-to-draft process with brand-consistent tone and style.",
    image: "/Landing page.png"
  }
];

export default function Projects() {
  return (
    <section className="relative z-20 w-full min-h-screen bg-[#101010] py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-start justify-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-7xl font-black mb-16 text-white tracking-tighter"
        >
          Featured Work.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex flex-col rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.06] transition-all duration-500 cursor-pointer shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/50 to-transparent z-10 pointer-events-none" />
              
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25, 1, 0.5, 1)] opacity-80 group-hover:opacity-100"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-20">
                <p className="text-xs md:text-sm font-medium tracking-[0.2em] text-[#a0a0a0] uppercase mb-3">
                  {project.category}
                </p>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed max-w-md">
                  {project.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-neutral-500 to-transparent opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-700 pointer-events-none -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
