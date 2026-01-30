import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { STYLE_GALLERY, STYLE_CATEGORIES, StyleItem } from '../constants/data';

const StyleSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(4);

  // Filter styles
  const filteredItems = useMemo(() => {
  return activeCategory === 'All' 
    ? STYLE_GALLERY 
    : STYLE_GALLERY.filter(item => item.category === activeCategory);
}, [activeCategory]);

  // Slice based on visible count
  const displayedItems = useMemo(() => {
  return filteredItems.slice(0, visibleCount);
}, [filteredItems, visibleCount]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(16); // Reset view count on filter change
  };

  const toggleViewMore = () => {
  if (visibleCount >= filteredItems.length) {
    setVisibleCount(4);
    // 스크롤을 섹션 상단으로
    const element = document.getElementById('lookbook');
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  } else {
    setVisibleCount(prev => prev + 4);
  }
};

  return (
    <section id="lookbook" className="py-24 md:py-32 bg-secondary-bg scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Title */}
        <motion.h2 
          className="text-4xl md:text-6xl font-light font-sans text-text-primary mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          COLLECTIONS
        </motion.h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 border-b border-text-primary/10 pb-4 mb-16">
          {STYLE_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`relative pb-2 text-sm md:text-base tracking-wider uppercase transition-colors duration-300 ${
                activeCategory === category ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary/70'
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-[-1px] left-0 right-0 h-px bg-text-primary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 lg:grid-cols-4 gap-1 md:gap-2"
        >
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item) => (
              <StyleCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <div className="mt-24 flex justify-center">
          <motion.button
            onClick={toggleViewMore}
            className="group relative px-12 py-3 border border-text-primary flex items-center gap-4 hover:bg-text-primary transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-text-primary group-hover:text-white transition-colors duration-300">
              {(visibleCount >= filteredItems.length) ? 'SHOW LESS' : 'VIEW MORE LOOKS'}
            </span>
            <ChevronDown 
              size={16} 
              className={`text-text-primary group-hover:text-white transition-all duration-300 ${
                (visibleCount >= filteredItems.length) ? 'rotate-180' : ''
              }`}
            />
          </motion.button>
        </div>

      </div>
    </section>
  );
};

const StyleCard: React.FC<{ item: StyleItem }> = ({ item }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative aspect-[3/4] bg-section-bg overflow-hidden cursor-pointer group"
    >
      {/* 이미지 */}
      <img
        src={item.imageUrl}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
      />
      
      {/* 오버레이 - 기본 어둡게, 호버 시 밝게 */}
      <div className="absolute inset-0 bg-text-primary/70 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-out" />

      {/* 하단 텍스트 - hover 시에만 보임 */}
<div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
  <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
    <h3 className="text-white font-bold text-xl md:text-2xl tracking-widest uppercase mb-2 drop-shadow-lg">
      {item.title}
    </h3>
    <span className="inline-block text-xs text-white/90 border border-white/60 px-2 py-1 uppercase tracking-wider drop-shadow-md">
      {item.category}
    </span>
  </div>
</div>
    </motion.div>
  );
};
export default StyleSection;