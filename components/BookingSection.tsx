import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BookingSection: React.FC = () => {
  return (
    <section id="booking" className="py-24 md:py-32 bg-primary-bg text-center scroll-mt-20">
      <div className="container mx-auto px-6">
        
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight text-text-primary leading-none">
            READY FOR
          </h2>
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-serif font-light italic text-text-secondary leading-none mt-2 md:mt-4">
            CHANGE?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <a
            href="mailto:contact@styliststudio.com"
            className="group inline-flex items-center gap-4 px-12 py-6 border border-text-primary bg-transparent hover:bg-text-primary text-text-primary hover:text-white transition-all duration-300"
          >
            <span className="text-sm font-medium tracking-[0.2em] uppercase">
              BOOK APPOINTMENT
            </span>
            <ArrowRight 
              size={16} 
              className="transform group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default BookingSection;