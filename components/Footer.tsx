import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-bg py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <p className="text-xs font-medium uppercase tracking-widest text-text-secondary">
            © 2024 Stylist Studio. All Rights Reserved.
          </p>
        </div>

        <div className="flex items-center space-x-6">
          {[Instagram, Twitter, Facebook].map((Icon, i) => (
            <a 
              key={i} 
              href="#" 
              className="text-text-secondary hover:text-text-primary transition-colors duration-300 transform hover:scale-110"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;