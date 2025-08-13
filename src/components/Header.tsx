import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="hero-text">Zubba Energy</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('story')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Our Story
            </button>
            <button 
              onClick={() => scrollToSection('model')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Our Model
            </button>
            <button 
              onClick={() => scrollToSection('trees')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Tree Program
            </button>
            <Button variant="cta" size="sm">
              Join as Rider
            </Button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('story')}
              className="block text-foreground hover:text-primary transition-colors"
            >
              Our Story
            </button>
            <button 
              onClick={() => scrollToSection('model')}
              className="block text-foreground hover:text-primary transition-colors"
            >
              Our Model
            </button>
            <button 
              onClick={() => scrollToSection('trees')}
              className="block text-foreground hover:text-primary transition-colors"
            >
              Tree Program
            </button>
            <Button variant="cta" size="sm" className="mt-4">
              Join as Rider
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;