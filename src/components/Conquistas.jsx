'use client';

import React from 'react';
import { motion } from 'framer-motion';
import foneskz from '../assets/foneskz.svg';
import aslan from '../assets/aslan.png';
import dmark from '../assets/dmark.avif';
import audio from '../assets/audio.png';
import code from '../assets/code.png';

export default function Conquistas() {
  const achievements = [
    { text: '1+ Milhão de Visualizações nas Redes (YouTube, Instagram)' },
    { text: 'Endorse de Marcas Reconhecidas' },
  ];
  const brands = [
    { src: foneskz, alt: 'Fones KZ' },
    { src: aslan, alt: 'Aslan Guitars' },
    { src: dmark, alt: "D'Mark" },
    { src: audio, alt: 'Soundvoice' },
    { src: code, alt: 'Code' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300 } },
  };

  return (
    <section className="relative w-full bg-neutral-800 text-white font-sans overflow-hidden flex flex-col md:flex-row">
      {/* Texto */}
      <motion.div
        className="md:w-1/2 p-4 md:p-8 flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="text-4xl md:text-5xl font-osvaldo mb-4 md:mb-6" variants={itemVariants}>
          Conquistas & Reconhecimentos
        </motion.h2>
        {achievements.map((ach, i) => (
          <motion.p key={i} className="mb-2 md:mb-4 text-lg leading-relaxed" variants={itemVariants}>
            {ach.text}
          </motion.p>
        ))}
        <motion.ul className="list-disc pl-6 mt-4 space-y-2" variants={itemVariants}>
          {brands.map((b, i) => (
            <li key={i} className="text-lg">{b.alt}</li>
          ))}
        </motion.ul>
        <motion.p className="mt-4 md:mt-6 text-lg leading-relaxed" variants={itemVariants}>
          Essas parcerias validam e elevam meu trabalho, trazendo mais qualidade e inovação para meu público.
        </motion.p>
      </motion.div>

      {/* Logos Animados */}
      <div className="md:w-1/2 relative flex justify-center items-center p-4 md:p-8">
        <motion.div
          className="relative w-64 h-64 md:w-80 md:h-80"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        >
          {brands.map((brand, i) => {
            const angle = (i / brands.length) * Math.PI * 2;
            const radius = 100; // reduzido para compactar o layout
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            return (
              <motion.img
                key={i}
                src={brand.src}
                alt={brand.alt}
                className="absolute w-16 h-16 md:w-20 md:h-20 object-contain filter brightness-0 invert"
                style={{ top: '50%', left: '50%', x, y, translateX: '-50%', translateY: '-50%' }}
                variants={itemVariants}
                whileHover={{ scale: 1.2 }}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
