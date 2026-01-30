import React from 'react';
import { motion } from 'framer-motion';
import { DESIGNER_INFO } from '../constants/data';

const DesignerSection: React.FC = () => {
  return (
    <section id="designer" className="py-24 md:py-32 bg-primary-bg overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Left Text (Order 2 on mobile, 1 on desktop) */}
          <div className="order-2 md:order-1 flex flex-col items-end text-right md:items-start md:text-left">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs md:text-sm tracking-widest uppercase text-text-secondary mb-4 block">
                {DESIGNER_INFO.role}
              </span>
            </motion.div>
            
            <motion.h2
              className="text-5xl md:text-8xl font-serif tracking-tight text-text-primary mb-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {DESIGNER_INFO.name}
            </motion.h2>
            
            <motion.p
              className="font-sans font-light text-lg md:text-2xl text-text-secondary leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {DESIGNER_INFO.bio}
            </motion.p>
          </div>

          {/* Right Image (Order 1 on mobile, 2 on desktop) */}
          <motion.div
            className="order-1 md:order-2 relative aspect-[4/5] overflow-hidden"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
          >
            <img 
              src="https://picsum.photos/800/1000?random=1" 
              alt={DESIGNER_INFO.name}
              className="w-full h-full object-cover grayscale hover:grayscale-0 opacity-90 hover:opacity-100 transition-all duration-500"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DesignerSection;