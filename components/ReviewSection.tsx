import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { REVIEWS } from '../constants/data';

const ReviewSection: React.FC = () => {
  return (
    <section id="review" className="py-24 md:py-32 bg-secondary-bg scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={index}
              className="flex flex-col h-full justify-between p-8 hover:bg-section-bg transition-colors duration-500 rounded-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-8">
                <Quote size={32} className="text-text-primary/20 mb-6" strokeWidth={1} />
                <p className="text-xl md:text-2xl font-serif italic text-text-primary leading-relaxed">
                  "{review.text}"
                </p>
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-bold uppercase tracking-wide text-text-primary">
                  {review.author}
                </h4>
                <span className="text-xs text-text-secondary block mt-1">
                  {review.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;