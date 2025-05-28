'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import Conquistas from '../components/Conquistas';
import HeroSection from '../components/HeroSection';
import image1 from '../assets/IMG_7083.JPG';
import image2 from '../assets/IMG_2857.JPG';
import image3 from '../assets/IMG_2858.JPG';
import image6 from '../assets/IMG_5566.JPG';
import Galeria from '../components/Galeria';
import AboutMe from '../components/AboutMe';


const slideIn = (direction = 'left') => ({
  hidden: { opacity: 0, x: direction === 'left' ? -50 : 50 },
  visible: { opacity: 1, x: 0 },
});

const fadeInUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };

export default function Sobre() {
  return (
    <div className="min-h-screen bg-neutral-800 text-white font-montserrat">
      {/* Hero Section */}
      <HeroSection />
      {/* Sobre */}
      <AboutMe/>

      {/* Galeria Animada */}
        <Galeria />

      {/* Conquistas com Fade */}
      <motion.div
        className="px-6 md:px-20 py-16 bg-neutral-900"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Conquistas />
      </motion.div>

      {/* Contato */}
      <section id="contato" className="py-16 px-6 md:px-20 bg-neutral-800">
        <motion.div
          className="max-w-md mx-auto text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">Vamos conversar?</h2>
          <p className="mb-6 text-lg">
            Me siga ou envie uma mensagem nas redes sociais.
          </p>
          <div className="flex justify-center gap-4">
            <motion.a
              href="https://www.instagram.com/joaomartinsbass"
              target="_blank"
              rel="noreferrer"
              className="flex items-center bg-neutral-700 hover:bg-neutral-600 text-white py-3 px-5 rounded-lg transition"
              whileHover={{ scale: 1.1 }}
            >
              <Instagram className="mr-2 h-5 w-5" />@joaomartinsbass
            </motion.a>
            <motion.a
              href="https://www.instagram.com/groovedozero"
              target="_blank"
              rel="noreferrer"
              className="flex items-center bg-neutral-700 hover:bg-neutral-600 text-white py-3 px-5 rounded-lg transition"
              whileHover={{ scale: 1.1 }}
            >
              <Instagram className="mr-2 h-5 w-5" />@groovedozero
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        className="bg-neutral-900 text-gray-400 text-sm text-center py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        © 2025 João Martins Bass. Todos os direitos reservados.
      </motion.footer>
    </div>
  );
}
