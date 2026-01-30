import React from 'react';
import { motion } from 'framer-motion';
import { PRICING_ITEMS } from '../constants/data';

const PriceSection: React.FC = () => {
  return (
    <section id="price" className="py-24 md:py-32 bg-primary-bg scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        
        <motion.h2
          className="text-4xl md:text-6xl font-light font-sans text-center lg:text-left mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          SERVICES
        </motion.h2>

        <div className="space-y-0">
          {PRICING_ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              className="group border-t border-text-primary/10 py-12 px-4 hover:bg-text-primary/5 hover:border-text-primary/40 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 items-baseline">
                <div className="md:col-span-2">
                  <h3 className="text-xl md:text-2xl font-serif italic text-text-primary group-hover:text-accent-wine transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="md:col-span-3">
                  <p className="text-sm text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors">
                    {item.description}
                  </p>
                </div>
                <div className="md:col-span-1 text-right">
                  <span className="text-lg font-light tracking-wide text-text-primary">
                    {item.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Bottom border for the last item */}
          <div className="border-t border-text-primary/10"></div>
        </div>

      </div>
    </section>
  );
};

export default PriceSection;