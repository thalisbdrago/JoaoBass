import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import image1 from '../assets/IMG_7083.JPG';
import image2 from '../assets/IMG_2857.JPG';
import image3 from '../assets/IMG_2858.JPG';
// Variants de animação
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const GallerySection = () => {
  const images = [image1, image3, image2];

  return (
    <section className="py-20 bg-neutral-900 px-6 md:px-20">
      <motion.h3
        className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Galeria
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            className="group relative"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            whileHover={{ y: -5, scale: 1.03 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-neutral-800">
              <div className="relative">
                <img
                  src={src}
                  alt={`Galeria ${idx + 1}`}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
                  <span className="flex items-center p-4 text-white text-lg font-semibold">
                    <Eye className="w-6 h-6 mr-2" />
                    Visual {idx + 1}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
