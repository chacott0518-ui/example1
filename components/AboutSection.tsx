import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary-bg overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Left Image */}
          <motion.div
            className="relative aspect-[3/4] overflow-hidden cursor-pointer group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-text-primary/5 z-10 transition-opacity duration-500 group-hover:opacity-0" />
            <img 
              src="https://picsum.photos/800/1066?random=999" 
              alt="About Studio" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </motion.div>

          {/* Right Text */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 md:mb-12 leading-none">
                <span className="font-normal block">REDEFINING</span>
                <span className="italic font-light text-text-secondary block mt-2">IDENTITY</span>
              </h2>
              
              <div className="max-w-md">
                <p className="text-text-secondary font-sans leading-relaxed text-lg text-justify mb-12">
                  We believe style is a language that speaks before you do. 
                  Our studio specializes in crafting visual narratives that align your inner essence 
                  with your outer expression. From editorial shoots to personal wardrobe curation, 
                  every detail is intentionally designed.
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-px bg-text-primary"></div>
                  <span className="text-xs font-medium tracking-widest uppercase text-text-primary">Est. 2024</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;