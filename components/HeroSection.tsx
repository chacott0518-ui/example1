import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STYLE_GALLERY } from '../constants/data';

const HeroSection: React.FC = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 4000);
const timer2 = setTimeout(() => setStage(2), 5000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const cols = Array.from({ length: 10 });

  return (
    <section className="relative w-full h-screen overflow-hidden bg-primary-bg pt-0">
      {/* 이미지들 - 항상 보임 */}
      <div className="absolute inset-0 flex">
        {cols.map((_, i) => (
          <motion.div
            key={i}
            className="relative w-[10vw] h-full overflow-hidden"
            initial={{ y: i % 2 === 0 ? '-100%' : '100%' }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-accent-wine/10 z-10 pointer-events-none" />
            <img
              src={STYLE_GALLERY[i]?.imageUrl || 'https://picsum.photos/800/1000?random=1'}
              alt={`Hero ${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      {/* 아주 약한 오버레이 */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ 
    background: `
  radial-gradient(ellipse at center, transparent 25%, rgba(0, 0, 0, 0.55) 75%),
  linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, transparent 45%, transparent 55%, rgba(0, 0, 0, 0.75) 100%)
`
  }}
        initial={{ opacity: 0 }}
        animate={{ opacity: stage >= 1 ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      />

        {/* 텍스트 */}
        {stage >= 2 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <div className="flex flex-col items-center justify-center space-y-6 text-center select-none">
              <motion.h1
  className="text-5xl md:text-7xl lg:text-9xl tracking-tight font-serif font-bold"
  style={{
    color: '#FFF5E1',
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
    filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4))'
  }}
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
>
  BLOOMING YOUR
</motion.h1>

              <motion.h1
  className="text-5xl md:text-7xl lg:text-9xl tracking-tight font-serif font-bold"
  style={{
    color: '#FFF5E1',
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
    filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4))'
  }}
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }}
>
  <span className="font-sans font-light italic">TRUE COLOR</span>
</motion.h1>

              <motion.div
  className="mt-8 max-w-2xl"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.8 }}
>
  <p 
  className="text-base md:text-lg lg:text-xl leading-loose text-center font-medium"
  style={{
    color: '#FFF0F5',
    textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
    filter: 'drop-shadow(0 1px 4px rgba(0, 0, 0, 0.4))'
  }}
>
                  당신만의 고유한 아름다움을 발견하는 여정,
                </p>
                <p 
  className="text-base md:text-lg lg:text-xl leading-loose mt-2 text-center font-medium"
  style={{
    color: '#FFF0F5',
    textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
    filter: 'drop-shadow(0 1px 4px rgba(0, 0, 0, 0.4))'
  }}
>
                  전문가의 손길로 완성되는 완벽한 스타일링을 경험하세요.
                </p>
              </motion.div>
            </div>
          </div>
        )
        }
    </section >
  );
};

export default HeroSection;