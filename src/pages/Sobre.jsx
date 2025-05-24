'use client'
import React from 'react';
import image1 from "../assets/IMG_7083.JPG"
import image2 from "../assets/IMG_2857.JPG"
import image3 from "../assets/IMG_2858.JPG"
import image4 from "../assets/IMG_5217.JPG"
import image5 from "../assets/IMG_2858.JPG"
import image6 from "../assets/IMG_5566.JPG"

import { MessageCircle } from "lucide-react";
import Conquistas from '../components/Conquistas';



const Sobre = () => {
  return (
    <div className="min-h-screen text-white bg-neutral-800 font-montserrat">
      {/* Seção 1 - Sobre */}
      <div className="w-full bg-neutral-800 grid md:grid-cols-2 p-6 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-4xl text-center font-bold mb-2 font-osvaldo">Sobre João Martins</h1>
          <h2 className="text-sm text-center mb-6 font-osvaldo">(Baixista e Produtor Musical)</h2>
          <p className="mb-4 text-lg md:text-1xl">
            Com mais de 10 anos de experiência no cenário musical, João Martins atua como baixista e produtor, tendo colaborado com artistas renomados como 2 Metro e Salomão do Reggae. Sua técnica refinada e criatividade musical são essenciais para dar vida a novos projetos, sempre buscando inovar e explorar novos horizontes sonoros.
          </p>
          <p className="mb-4 text-lg md:text-1xl">
            Além de seu trabalho como músico, João também é criador do Groovedozero, um método de ensino inovador que tem transformado a vida de muitos baixistas, tanto no Brasil quanto no exterior. Seu método é reconhecido por sua abordagem prática e acessível, permitindo que músicos desenvolvam uma base sólida e um groove único no baixo, independentemente do nível de experiência.
          </p>
          <p className="mb-4 text-lg md:text-1xl">
            Com um estilo único e uma abordagem focada na musicalidade e técnica, João Martins continua a trilhar seu caminho na música, sempre em busca de novos desafios e possibilidades sonoras.
          </p>
        </div>
        <div className="w-full h-124 rounded-2x1 overflow-hidden shadow-lg">
            <img
                src={image2}
                alt="João Martins sentado com baixo"
                className="object-cover w-full h-full"
            />
        </div>
      </div>

      {/* Seção 2 - Trajetória Profissional */}
      <div className="w-full bg-neutral-900 grid md:grid-cols-2 gap-10 p-6">
    {/* Coluna de imagens */}
    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
        <div className="row-span-2 col-span-1 rounded-1xl overflow-hidden">
        <img src={image6} alt="João tocando baixo" className="w-full h-full object-cover aspect-[3/4]" />
        </div>
        <div className="rounded-2xl overflow-hidden">
        <img src={image3} alt="Show com 2Metro" className="w-full h-full object-cover aspect-video" />
        </div>
        <div className="rounded-2xl overflow-hidden">
        <img src={image1} alt="De costas com jaqueta" className="w-full h-full object-cover aspect-video" />
        </div>
    </div>

    {/* Coluna de texto */}
        <div className="relative flex flex-col justify-start">
            <h2 className="text-4xl md:text-4xl font-bold mb-4 font-osvaldo">Minha Trajetória Profissional</h2>
            <p className="mb-4 text-2xl md:text-2xl">Meus trabalhos atuais incluem:</p>
            <ul className="list-disc list-inside text-base md:text-base mb-4">
                <li>Salomão do Reggae</li>
                <li>2Metro</li>
            </ul>
            <p className="md:text-base text-base">
                E participei de trabalhos com inúmeros outros artistas do cenário musical. Cada projeto contribuiu para meu crescimento musical, desenvolvimento de novas habilidades e ampliação da experiência como baixista e produtor.
            </p>

            {/* Asterisco posicionado no canto inferior direito */}
            <span className="absolute bottom-0 right-0 text-9xl text-gray-400">*</span>
        </div>
    </div>
    <Conquistas />

{/* Seção 3 - Contato */}
{/* Seção 3 - Contato */}
<div className="relative w-full h-screen">
  {/* Imagem de fundo ocupando toda a section */}
  <img
    src={image5}
    alt="Show ao vivo com João Martins"
    className="absolute top-0 left-0 w-full h-full object-cover"
  />

  {/* Sobreposição escura leve */}
  <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

  {/* Conteúdo com links no lugar do formulário */}
  <div className="relative z-10 flex items-center justify-center h-full px-6">
    <div className="bg-white/90 text-black p-10 md:p-12 rounded-lg shadow-xl max-w-md w-full text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Entre em Contato</h2>
      <p className="mb-4 text-lg">Me siga ou envie uma mensagem:</p>

      <div className="flex flex-col gap-4">
        <a
          href="https://www.instagram.com/joaomartinsbass" // Substitua pela URL real
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white py-3 rounded hover:bg-gray-800 transition"
        >
          Instagram @joaomartinsbass
        </a>

        <a
          href="https://www.instagram.com/groovedozero" // Outro exemplo
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white py-3 rounded hover:bg-gray-800 transition"
        >
          Instagram @groovedozero
        </a>
      </div>
    </div>
  </div>
</div>



      

      {/* Ícone no rodapé */}
      <footer className="bg-neutral-800 text-white py-8">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-gray-400 text-sm">© 2025 Joao Martins Bass. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>

    </div>

  );
};

export default Sobre;
