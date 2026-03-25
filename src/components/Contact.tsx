"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative z-20 w-full bg-[#101010] py-32 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8"
        >
          Let&apos;s connect.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-sm font-medium tracking-widest text-neutral-500 uppercase mb-6"
        >
          Based in Munich &bull; Open to opportunities
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-neutral-400 max-w-2xl mb-12 leading-relaxed"
        >
          Whether you&apos;re looking for a Customer Success expert to scale your processes, or just want to chat about CRM and AI automation, I&apos;m just an email away.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a 
            href="mailto:manalig.218@gmail.com"
            className="px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-neutral-200 transition-colors shadow-xl"
          >
            Email Me
          </a>
          <a 
            href="https://www.linkedin.com/in/manali-goswami/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-transparent border border-white/30 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 hover:border-white transition-all shadow-xl"
          >
            LinkedIn
          </a>
          <a
            href="/ManaliGoswami_CV.pdf"
            download
            className="px-10 py-5 bg-transparent border border-white/30 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 hover:border-white transition-all shadow-xl"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
