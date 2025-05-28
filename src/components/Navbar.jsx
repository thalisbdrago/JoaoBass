'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/Logo.png';
import banner from '../assets/IMG_1308.JPG'; // Substitua por nova imagem se desejar

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Banner */}
      <div className="absolute inset-0">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        {/* Gradiente para dar contraste ao texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />
      </div>

      {/* Navbar Fixa com blur */}
      <header className="fixed inset-x-0 top-0 z-50 bg-black/30 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />

        {/* Menu Desktop */}
        <nav className="hidden lg:flex space-x-8">
          <a href="#sobre" className="text-white hover:text-purple-400 transition">
            Sobre
          </a>
          <a href="#galeria" className="text-white hover:text-purple-400 transition">
            Galeria
          </a>
          <a href="#contato" className="text-white hover:text-purple-400 transition">
            Contato
          </a>
        </nav>

        {/* Botão Mobile */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>

        {/* Mobile Menu Drawer */}
        <Dialog open={mobileOpen} onClose={() => setMobileOpen(false)} className="lg:hidden">
          <div className="fixed inset-0 bg-black/50" />
          <Dialog.Panel className="fixed top-0 right-0 w-3/4 h-full bg-neutral-900 p-6">
            <div className="flex items-center justify-between mb-8">
              <img src={Logo} alt="Logo" className="h-8 w-auto" />
              <button onClick={() => setMobileOpen(false)} className="text-gray-300">
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              <a href="#sobre" onClick={() => setMobileOpen(false)} className="text-white text-lg">
                Sobre
              </a>
              <a href="#galeria" onClick={() => setMobileOpen(false)} className="text-white text-lg">
                Galeria
              </a>
              <a href="#contato" onClick={() => setMobileOpen(false)} className="text-white text-lg">
                Contato
              </a>
            </nav>
          </Dialog.Panel>
        </Dialog>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
          João Martins
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200">
          Baixista • Produtor Musical • Criador do <span className="font-semibold text-purple-400">GrooveDoZero</span>
        </p>
        <a
          href="#contato"
          className="mt-8 inline-block bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full font-medium transition"
        >
          Entrar em Contato
        </a>
      </div>
    </div>
  );
}
