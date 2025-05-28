import { motion } from 'framer-motion';
import image2 from '../assets/IMG_2857.JPG';

// Variants de animação
const slideIn = (direction) => ({
  hidden: { opacity: 0, x: direction === 'left' ? -50 : 50 },
  visible: { opacity: 1, x: 0 }
});

const AboutMe = () => {
  const stats = [
    { title: '10+ Anos', desc: 'de experiência real' },
    { title: 'Método Único', desc: 'GrooveDoZero comprovado' },
    { title: 'Turnês', desc: 'Brasil & Exterior' },
    { title: 'Parcerias', desc: 'Marcas e artistas top' }
  ];

  return (
    <section id="sobre" className="relative bg-neutral-900 py-24 px-6 md:px-20 overflow-hidden">
      {/* Fundos abstratos escuros */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-72 h-72 bg-neutral-800 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-16 right-1/3 w-64 h-64 bg-neutral-700 rounded-full mix-blend-overlay filter blur-2xl opacity-15 animate-spin-slow" />
        <div className="absolute top-1/3 -right-16 w-48 h-48 bg-neutral-800 rounded-full mix-blend-overlay filter blur-2xl opacity-10 animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Conteúdo */}
        <motion.div
          className="space-y-6"
          variants={slideIn('left')}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white">
            Sobre mim
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            Com mais de uma década de estrada, levo meu baixo e produção a palcos e estúdios pelo Brasil e exterior. Já toquei com 2Metro e Salomão do Reggae e ensino meu método GrooveDoZero para baixistas de todos os níveis.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            Meu foco é unir técnica e musicalidade, criando grooves inesquecíveis e inspiradores. Aqui você vai conhecer minha trajetória, conquistas e como podemos fazer música juntos.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((box, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-3xl bg-neutral-800 shadow-lg transform hover:-translate-y-1 hover:shadow-xl transition"
                variants={slideIn('left')}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-2">{box.title}</h3>
                <p className="text-gray-400">{box.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Imagem em destaque com ênfase extra */}
        <motion.div
          className="flex justify-center"
          variants={slideIn('right')}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full max-w-sm pb-[125%] rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-shadow duration-500 border-4 border-neutral-700">
            <img
              src={image2}
              alt="João tocando baixo"
              className="absolute inset-0 w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-500"
            />
            {/* Glow suave por trás da imagem */}
            <div className="absolute inset-0 rounded-3xl" style={{ boxShadow: '0 0 60px rgba(255,255,255,0.2)' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
