import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  const NavLink = ({ to, children, className = "", onClick }: { 
    to: string; 
    children: React.ReactNode; 
    className?: string;
    onClick?: () => void;
  }) => (
    <Link 
      to={to}
      onClick={onClick}
      className={`${className} relative group`}
    >
      {children}
      {isActive(to) && (
        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent animate-pulse"></div>
      )}
      {isActive(to) && (
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50"></div>
      )}
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            <span className="hero-text">Zubba Energy</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </NavLink>
            <NavLink 
              to="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </NavLink>
            <NavLink 
              to="/story"
              className="text-foreground hover:text-primary transition-colors"
            >
              Our Story
            </NavLink>
            <NavLink 
              to="/model"
              className="text-foreground hover:text-primary transition-colors"
            >
              Our Model
            </NavLink>
            <NavLink 
              to="/trees"
              className="text-foreground hover:text-primary transition-colors"
            >
              Tree Program
            </NavLink>
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
            <NavLink 
              to="/"
              onClick={closeMenu}
              className="block text-foreground hover:text-primary transition-colors"
            >
              Home
            </NavLink>
            <NavLink 
              to="/about"
              onClick={closeMenu}
              className="block text-foreground hover:text-primary transition-colors"
            >
              About
            </NavLink>
            <NavLink 
              to="/story"
              onClick={closeMenu}
              className="block text-foreground hover:text-primary transition-colors"
            >
              Our Story
            </NavLink>
            <NavLink 
              to="/model"
              onClick={closeMenu}
              className="block text-foreground hover:text-primary transition-colors"
            >
              Our Model
            </NavLink>
            <NavLink 
              to="/trees"
              onClick={closeMenu}
              className="block text-foreground hover:text-primary transition-colors"
            >
              Tree Program
            </NavLink>
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