import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            <span className="hero-text">Zubba Energy</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              to="/story"
              className="text-foreground hover:text-primary transition-colors"
            >
              Our Story
            </Link>
            <Link 
              to="/model"
              className="text-foreground hover:text-primary transition-colors"
            >
              Our Model
            </Link>
            <Link 
              to="/trees"
              className="text-foreground hover:text-primary transition-colors"
            >
              Tree Program
            </Link>
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
            <Link 
              to="/"
              onClick={closeMenu}
              className="block text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about"
              onClick={closeMenu}
              className="block text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              to="/story"
              onClick={closeMenu}
              className="block text-foreground hover:text-primary transition-colors"
            >
              Our Story
            </Link>
            <Link 
              to="/model"
              onClick={closeMenu}
              className="block text-foreground hover:text-primary transition-colors"
            >
              Our Model
            </Link>
            <Link 
              to="/trees"
              onClick={closeMenu}
              className="block text-foreground hover:text-primary transition-colors"
            >
              Tree Program
            </Link>
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