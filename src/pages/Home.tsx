import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Scene3D from '@/components/3D/Scene3D';
import FloatingMotorcycle from '@/components/3D/FloatingMotorcycle';
import heroImage from '@/assets/hero-image.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60"></div>
        </div>
        
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <Scene3D cameraPosition={[3, 2, 5]} autoRotate={true}>
            <FloatingMotorcycle />
          </Scene3D>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium text-accent tracking-wide uppercase">
                Welcome to Zubba Energy
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Powering<br />
              <span className="hero-text">Mobility.</span><br />
              <span className="text-accent">Empowering Lives.</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-white/90 mb-8 max-w-3xl leading-relaxed font-light">
              Affordable, sustainable electric motorcycles for vulnerable communities in Rwanda.
            </p>
            
            <p className="text-lg text-white/80 mb-12 max-w-2xl leading-relaxed">
              Revolutionizing last-mile transportation through clean, accessible e-mobility solutions that empower riders to earn sustainable income.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button asChild variant="hero" size="xl" className="group text-lg">
                <Link to="/about">
                  Discover Our Story
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary text-lg">
                <Link to="/model">
                  <Play className="mr-3 h-6 w-6" />
                  Our Model
                </Link>
              </Button>
              
              <Button asChild variant="secondary" size="xl" className="text-lg">
                <Link to="/trees">
                  Tree Program
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 card-hover bg-card rounded-2xl">
              <div className="text-4xl font-bold text-primary mb-2">$7-15</div>
              <p className="text-muted-foreground">Daily earnings for riders</p>
            </div>
            <div className="text-center p-8 card-hover bg-card rounded-2xl">
              <div className="text-4xl font-bold text-accent mb-2">1M+</div>
              <p className="text-muted-foreground">Trees to plant by 2035</p>
            </div>
            <div className="text-center p-8 card-hover bg-card rounded-2xl">
              <div className="text-4xl font-bold text-secondary-foreground mb-2">100%</div>
              <p className="text-muted-foreground">Electric, zero emissions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;