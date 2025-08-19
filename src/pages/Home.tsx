import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Zap, ChevronLeft, ChevronRight, Battery, Users, Leaf, DollarSign, Heart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Scene3D from '@/components/3D/Scene3D';
import FloatingMotorcycle from '@/components/3D/FloatingMotorcycle';
import heroImage from '@/assets/hero-image.jpg';
import communityImage from '@/assets/community.jpg';
import batterySwapImage from '@/assets/battery-swap.jpg';
import treeProgramImage from '@/assets/tree-program.jpg';

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = [
    {
      title: "Meet Our Riders",
      subtitle: "Real People, Real Impact",
      description: "Every day, brave riders like James, Sarah, and Emmanuel navigate Rwanda's roads, connecting communities and building their dreams. They're not just drivers - they're entrepreneurs, fathers, mothers, and hope-builders.",
      image: communityImage,
      stats: { value: "2,500+", label: "Active Riders" }
    },
    {
      title: "Clean Energy in Action",
      subtitle: "Zero Emissions, Maximum Impact",
      description: "Our battery-swapping stations keep riders moving while protecting the air we breathe. In just 3 minutes, a depleted battery becomes a fully charged opportunity to earn, serve, and thrive.",
      image: batterySwapImage,
      stats: { value: "95%", label: "Uptime Guarantee" }
    },
    {
      title: "Growing Together",
      subtitle: "One Tree, One Future",
      description: "Every motorcycle we lease plants seeds of change - literally. Our riders become environmental champions, planting trees that will shade their children and clean the air for generations to come.",
      image: treeProgramImage,
      stats: { value: "50K+", label: "Trees Planted" }
    },
    {
      title: "Building Dreams",
      subtitle: "From Survival to Success",
      description: "Through flexible payments and comprehensive training, we transform lives. Riders learn not just to drive, but to run businesses, manage finances, and become pillars of their communities.",
      image: heroImage,
      stats: { value: "$400+", label: "Monthly Earnings" }
    }
  ];

  const nextStep = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentStep((prev) => (prev + 1) % steps.length);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const prevStep = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextStep();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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

      {/* Interactive Story Stepper */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/10 relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide uppercase">Our Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Stories That <span className="hero-text">Matter</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Behind every motorcycle is a human story of resilience, hope, and transformation
            </p>
          </div>

          {/* Main Content with Image and Text */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Image Side */}
            <div className="relative">
              <div className={`transition-all duration-500 transform ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={steps[currentStep].image} 
                    alt={steps[currentStep].title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  {/* Floating Stat */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4">
                    <div className="text-2xl font-bold text-primary">{steps[currentStep].stats.value}</div>
                    <div className="text-sm text-muted-foreground">{steps[currentStep].stats.label}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className={`transition-all duration-500 transform ${isAnimating ? 'translate-x-8 opacity-0' : 'translate-x-0 opacity-100'}`}>
              <div className="space-y-6">
                <div>
                  <span className="text-accent font-medium">{steps[currentStep].subtitle}</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                    {steps[currentStep].title}
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {steps[currentStep].description}
                </p>
                <div className="flex gap-4 pt-4">
                  <Button variant="outline" size="sm" onClick={prevStep} className="p-3">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={nextStep} className="p-3">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Step Indicator */}
          <div className="flex justify-center items-center gap-4">
            <div className="flex gap-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentStep(index);
                      setTimeout(() => setIsAnimating(false), 300);
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStep 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
            <div className="text-sm text-muted-foreground ml-4">
              {String(currentStep + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
            </div>
          </div>
        </div>
      </section>

      {/* Animated Features Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-accent tracking-wide uppercase">Why Choose Zubba</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transforming Lives Through <span className="hero-text">Innovation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Animated Feature Cards */}
            <div className="text-center p-8 card-hover bg-card rounded-2xl group">
              <div className="relative mx-auto w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-primary/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Battery className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <h3 className="font-semibold text-foreground mb-2">Reliable Uptime</h3>
              <p className="text-muted-foreground text-sm">Battery swaps in under 3 minutes keep you earning</p>
            </div>

            <div className="text-center p-8 card-hover bg-card rounded-2xl group">
              <div className="relative mx-auto w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-accent/10 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-accent/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="text-3xl font-bold text-accent mb-2">2,500+</div>
              <h3 className="font-semibold text-foreground mb-2">Active Riders</h3>
              <p className="text-muted-foreground text-sm">Growing community of empowered entrepreneurs</p>
            </div>

            <div className="text-center p-8 card-hover bg-card rounded-2xl group">
              <div className="relative mx-auto w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-secondary/30 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-secondary/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-secondary-foreground group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="text-3xl font-bold text-secondary-foreground mb-2">0</div>
              <h3 className="font-semibold text-foreground mb-2">Emissions</h3>
              <p className="text-muted-foreground text-sm">100% electric, protecting our shared environment</p>
            </div>
          </div>

          {/* Humanized Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">$7-15</div>
              <p className="text-sm text-muted-foreground">Daily earnings help feed families</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">50K+</div>
              <p className="text-sm text-muted-foreground">Trees planted with our riders</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-foreground mb-1">45%</div>
              <p className="text-sm text-muted-foreground">Refugee riders building new lives</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">3 min</div>
              <p className="text-sm text-muted-foreground">Average battery swap time</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;