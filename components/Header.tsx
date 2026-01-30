import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants/data';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [isVisible, setIsVisible] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    // 스크롤 50 넘으면 배경색 변경
    setIsScrolled(currentScrollY > 50);
    
    // 스크롤 방향 감지
if (currentScrollY < lastScrollY || currentScrollY < 150) {
  // 위로 스크롤 or 최상단 근처 → 헤더 보이기
  setIsVisible(true);
} else if (currentScrollY > lastScrollY && currentScrollY > 50) {
  // 아래로 스크롤 → 헤더 숨기기
  setIsVisible(false);
}
    
    setLastScrollY(currentScrollY);
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [lastScrollY]);
// 스크롤 멈추면 1초 후 헤더 표시
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const showHeaderOnIdle = () => {
      timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    };

    window.addEventListener('scroll', () => {
      clearTimeout(timer);
      showHeaderOnIdle();
    });

    showHeaderOnIdle();

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', showHeaderOnIdle);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isScrolled ? 'bg-card-bg/95 backdrop-blur-md py-5 shadow-sm' : 'bg-primary-bg/80 backdrop-blur-md py-5'
  }`}
  initial={{ y: -100 }}
  animate={{ y: isVisible ? 0 : -100 }}
  transition={{
  duration: isVisible ? 0.08 : 0.15,
  ease: isVisible ? [0.34, 1.56, 0.64, 1] : [0.22, 1, 0.36, 1]
}}
>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="font-serif font-bold text-2xl md:text-3xl tracking-tight text-text-primary z-50 relative">
            STYLIST STUDIO
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link, index) => (
              <div key={link.label} className="flex items-center">
                {index > 0 && <div className="h-4 w-px bg-text-primary/10 mr-8" />}
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-xs font-medium tracking-[0.2em] text-text-secondary hover:text-accent-wine transition-colors duration-300 uppercase"
                >
                  {link.label}
                </a>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50 text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-primary-bg flex items-center justify-center"
          >
            <nav className="flex flex-col items-center space-y-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  className="text-3xl font-serif font-medium text-text-primary hover:text-accent-wine transition-colors duration-300 uppercase tracking-widest"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;