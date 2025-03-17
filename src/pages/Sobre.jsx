'use client'
import React from 'react';
import image1 from "../assets/IMG_5566.JPG"
import image2 from "../assets/IMG_1299.JPG"
import image3 from "../assets/IMG_1301.JPG"
import image5 from "../assets/IMG_1316.JPG"
import image4 from "../assets/IMG_1327.JPG"

const Sobre = () => {
  return (
    <div>
        <div className="bg-gray-50 text-black py-8">
            <div className="max-w-7xl mx-auto px-6">
                {/* Seção "Sobre" com foto e texto */}
                <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Foto de João */}
                <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                    <img 
                    src={image1} 
                    alt="João Martins"
                    className="w-120 h-auto rounded-lg shadow-lg" // Ajustando a largura e altura da imagem
                    />
                </div>

                {/* Texto sobre João */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl font-extrabold text-gray-900 font-global">Sobre João Martins</h2> {/* Aplicando a fonte Global */}
                    <p className="mt-4 text-lg text-gray-900 font-global">
                    Com mais de 10 anos de experiência no cenário musical, eu sou João Martins, um baixista e produtor musical apaixonado pela arte de criar e transformar músicas. Minha trajetória me levou a colaborar com grandes nomes da música gospel, como Felipe Vilela, Claudio Claro, Sarah Oliveira, e atualmente estou em turnê com 2Metro e Salomão do Reggae. Além disso, sou criador do Método GrooveDoZero, uma mentoria exclusiva para baixistas iniciantes e avançados, onde ensino e ajudo meus alunos a se inserirem de verdade no mercado musical.
                    </p>
                    <p className="mt-4 text-lg text-gray-900 font-global">
                    Com mais de 1 milhão de visualizações no YouTube e Instagram com meus vídeos, minha missão é compartilhar meu conhecimento e experiência com a próxima geração de músicos.
                    </p>
                </div>
                </div>
            </div>
        </div>

    <div className='bg-gray-50 text-black py-12'>
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/1">
                <h2 className="text-4xl font-extrabold text-gray-900 font-global">Minha Trajetória Profissional</h2>
                <p className='mt-4 text-lg text-gray-900 font-global'>
                    Artistas e Projetos
                    Ao longo da minha carreira, tive a honra de trabalhar com artistas de renome, tanto em estúdios quanto ao vivo. Alguns dos meus trabalhos incluem:
                    <ul className="list-disc pl-6">
                        <li>Felipe Vilela</li>
                        <li>Cláudio Claro</li>
                        <li>Sarah Oliveira</li>
                        <li>Salomão do Reggae (Atualmente)</li>
                        <li>2Metro (Atualmente)</li>
                    </ul>
                    Cada experiência me proporcionou novos desafios, crescimento musical e oportunidades para expandir minhas habilidades como baixista e produtor.
                </p>
                <h2 className="text-4xl font-extrabold text-gray-900 font-global mt-10">Conquistas e Reconhecimentos</h2>
                <p className='mt-4 text-lg text-gray-900 ' >
                1+ Milhão de Visualizações nas minhas redes sociais (YouTube, Instagram).Endorse de Marcas Reconhecidas:
                    <ul className="list-disc pl-6">
                        <li>D'mark</li>
                        <li>Aslan Guitars</li>
                        <li>Soundvoice</li>
                        <li>Fones KZ</li>
                    </ul>
                    <p className='mt-4 text-lg text-gray-900 font-global'>Essas parcerias não apenas validam meu trabalho, mas também me permitem trazer o melhor em termos de qualidade e inovação para o meu público e alunos.
                    </p>
                </p>
            </div>
            <div className="lg:w-2/2 mt-6 lg:mt-0 grid grid-cols-2 gap-4">
                {/* Imagens da galeria */}
                <img 
                    src={image1} 
                    alt="João Martins"
                    className="w-full h-auto rounded-lg shadow-lg" 
                />
                <img 
                    src={image2} 
                    alt="João Martins"
                    className="w-full h-auto rounded-lg shadow-lg" 
                />
                <img 
                    src={image3} 
                    alt="João Martins"
                    className="w-full h-auto rounded-lg shadow-lg" 
                />
                <img 
                    src={image5} 
                    alt="João Martins"
                    className="w-full h-auto rounded-lg shadow-lg" 
                />
            </div>
        </div>
    </div>
    </div>

  );
};

export default Sobre;
