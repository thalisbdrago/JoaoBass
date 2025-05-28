// Importações necessárias
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
// Importe suas imagens (ajuste os caminhos conforme seu projeto)
import img1 from '../assets/IMG_2857.JPG';
import img2 from '../assets/IMG_2858.JPG';

const images = [img1, img2];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="m-0 p-0 relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 via-black to-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      {/* Background rotativo com transição suave */}
      <AnimatePresence initial={false}>
        <motion.img
          key={images[current]}
          src={images[current]}
          alt="João Martins ao vivo"
          className="absolute inset-0 w-full h-full object-cover filter brightness-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80" />

      {/* Conteúdo em primeiro plano */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg leading-tight"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          João Martins
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-2xl text-gray-300 italic"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Baixista • Produtor Musical • Criador do{' '}
          <span className="font-bold text-white">GrooveDoZero</span>
        </motion.p>

        <motion.a
          href="#contato"
          className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-neutral-800 hover:bg-neutral-700 text-white text-lg font-medium rounded-full shadow-lg transform hover:scale-[1.02] transition-transform duration-300 ease-out"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <span>Quero Entrar em Contato</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>
      </div>
    </motion.section>
  );
};

export default HeroSection;
