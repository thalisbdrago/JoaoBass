import React from "react";
import foneskz from "../assets/foneskz.svg";
import aslan from "../assets/aslan.png";
import dmark from "../assets/dmark.avif";
import audio from "../assets/audio.png";
import code from "../assets/code.png";

const Conquistas = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen text-white bg-[#1c1c1c] font-sans">
      {/* Coluna esquerda */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-0">
        <div className="w-full md:w-3/4 flex flex-col gap-5">
          <h1 className="text-3xl md:text-4xl m-0">Conquistas e Reconhecimentos</h1>
          <p>
            1+ Milhão de Visualizações nas minhas redes sociais (YouTube, Instagram).
            Endorse de Marcas Reconhecidas:
          </p>
          <ul className="pl-5 list-disc">
            <li>D'mark</li>
            <li>Aslan Guitars</li>
            <li>Soundvoice</li>
            <li>Fones KZ</li>
            <li>Code</li>
          </ul>
          <p>
            Essas parcerias não apenas validam meu trabalho, mas também me permitem
            trazer o melhor em termos de qualidade e inovação para o meu público e alunos.
          </p>
        </div>
      </div>

      {/* Coluna direita com logos */}
      <div className="w-full md:w-1/2 relative flex justify-center items-center py-10 md:py-0">
        {/* Modo desktop com position absolute */}
        <div className="hidden md:block w-full h-full relative">
          <div className="absolute top-[25%] left-[10%]">
            <img src={foneskz} alt="Fones KZ" className="w-[150px] filter brightness-0 invert hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="absolute top-[30%] left-[40%]">
            <img src={aslan} alt="Aslan Guitars" className="w-[150px] filter brightness-0 invert hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="absolute top-[65%] left-[15%]">
            <img src={dmark} alt="D'Mark" className="w-[150px] filter brightness-0 invert hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="absolute top-[20%] right-[10%]">
            <img src={audio} alt="Soundvoice" className="w-[150px] filter brightness-0 invert hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="absolute top-[70%] right-[25%]">
            <img src={code} alt="Code" className="w-[150px] filter brightness-0 invert hover:scale-105 transition-transform duration-300" />
          </div>
        </div>

        {/* Modo mobile com grid responsiva */}
        <div className="md:hidden grid grid-cols-2 gap-6">
          <img src={foneskz} alt="Fones KZ" className="w-28 mx-auto filter brightness-0 invert" />
          <img src={aslan} alt="Aslan Guitars" className="w-28 mx-auto filter brightness-0 invert" />
          <img src={dmark} alt="D'Mark" className="w-28 mx-auto filter brightness-0 invert" />
          <img src={audio} alt="Soundvoice" className="w-28 mx-auto filter brightness-0 invert" />
          <img src={code} alt="Code" className="w-28 mx-auto filter brightness-0 invert col-span-2" />
        </div>
      </div>
    </div>
  );
};

export default Conquistas;
