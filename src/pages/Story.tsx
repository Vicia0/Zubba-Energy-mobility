import { Button } from '@/components/ui/button';
import { ArrowRight, DollarSign, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Scene3D from '@/components/3D/Scene3D';
import heroImage from '@/assets/community.jpg';

const StoryTimeline = () => {
  const timelineItems = [
    {
      step: '01',
      year: 'The Challenge',
      title: 'High Barriers to Entry',
      description: 'High upfront motorcycle costs keep talented riders locked out of the Boda Boda opportunity, despite earning potential of $7-15 per day.',
      icon: DollarSign,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10'
    },
    {
      step: '02',
      year: 'The Reality',
      title: 'Essential Transportation',
      description: 'Boda Bodas are not just transport - they are lifelines connecting communities, transporting goods, and providing livelihoods for thousands.',
      icon: MapPin,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10'
    },
    {
      step: '03',
      year: 'Our Solution',
      title: 'Lease-to-Own Model',
      description: 'Zubba Energy removes barriers through flexible financing, skills training, and sustainable electric technology.',
      icon: Users,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    }
  ];

  return (
    <div className="relative">
      {/* Connecting Line */}
      <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-red-500 via-yellow-500 to-primary hidden md:block"></div>
      
      <div className="space-y-16">
        {timelineItems.map((item, index) => (
          <div key={index} className="relative flex gap-8 items-start group">
            {/* Step Circle */}
            <div className="flex-shrink-0 relative z-10">
              <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center border-4 border-background transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              {/* Step Number */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-card border-2 border-border rounded-full flex items-center justify-center text-sm font-bold text-foreground">
                {item.step}
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 group-hover:translate-x-2 transition-transform duration-300">
              <div className="bg-card/80 backdrop-blur-md rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                <h3 className={`text-sm font-bold mb-2 ${item.color} uppercase tracking-wide`}>{item.year}</h3>
                <h4 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed text-lg">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Progress Indicator */}
      <div className="mt-12 flex justify-center">
        <div className="flex gap-3">
          {timelineItems.map((item, index) => (
            <div key={index} className={`w-3 h-3 rounded-full ${item.bgColor} border-2 border-background`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Story = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60"></div>
          </div>
        </div>
        {/* <div className="absolute inset-0 z-0 opacity-20">
          <Scene3D cameraPosition={[5, 3, 8]} autoRotate={true}>
            <group position={[0, 0, 0]}>
              <mesh>
                <boxGeometry args={[1.5, 0.3, 0.2]} />
                <meshStandardMaterial color="#2d4a2b" />
              </mesh>
              <mesh position={[0.8, -0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.25, 0.25, 0.15]} />
                <meshStandardMaterial color="#1a1a1a" />
              </mesh>
              <mesh position={[-0.8, -0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.25, 0.25, 0.15]} />
                <meshStandardMaterial color="#1a1a1a" />
              </mesh>
            </group>
            
            <group position={[3, 1, -2]} rotation={[0, Math.PI / 4, 0]}>
              <mesh>
                <boxGeometry args={[1.5, 0.3, 0.2]} />
                <meshStandardMaterial color="#4a8c2a" />
              </mesh>
            </group>
            
            <group position={[-3, -1, 1]} rotation={[0, -Math.PI / 3, 0]}>
              <mesh>
                <boxGeometry args={[1.5, 0.3, 0.2]} />
                <meshStandardMaterial color="#6aa84f" />
              </mesh>
            </group>
          </Scene3D>
        </div> */}
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Our <span className="hero-text">Story</span>
            </h1>
            
            <p className="text-2xl text-muted-foreground mb-8 leading-relaxed">
              In Rwanda and across East Africa, Boda Bodas aren't just motorcycles — they're lifelines, connecting communities and creating livelihoods.
            </p>
            
            <div className="bg-card/80 backdrop-blur-md rounded-3xl p-8 mb-12 border border-border/50">
              <h2 className="text-3xl font-bold mb-6 text-primary">The Reality</h2>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Unlike in developed countries where motorcycles are leisure vehicles, in Rwanda they are essential infrastructure. 
                They transport people, goods, and dreams. They provide dignified work earning $7-15 daily for thousands of young people.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                Yet high upfront costs and lack of credit access keep many talented riders excluded from this opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16">The Journey to Change</h2>
            <StoryTimeline />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">Creating Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-card rounded-3xl card-hover">
              <div className="text-5xl font-bold text-primary mb-4">$7-15</div>
              <div className="text-xl font-semibold mb-2">Daily Earnings</div>
              <p className="text-muted-foreground">Average income for Boda Boda riders</p>
            </div>
            
            <div className="text-center p-8 bg-card rounded-3xl card-hover">
              <div className="text-5xl font-bold text-accent mb-4">1000s</div>
              <div className="text-xl font-semibold mb-2">Youth Empowered</div>
              <p className="text-muted-foreground">Young people earning through transportation</p>
            </div>
            
            <div className="text-center p-8 bg-card rounded-3xl card-hover">
              <div className="text-5xl font-bold text-secondary-foreground mb-4">100%</div>
              <div className="text-xl font-semibold mb-2">Barrier Removal</div>
              <p className="text-muted-foreground">Eliminating upfront costs through our model</p>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Zubba Energy was created to change this story</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We give riders the chance to own their motorcycles, earn sustainable income, 
              and be part of Rwanda's green energy transition — turning barriers into bridges.
            </p>
            
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/model">
                Discover Our Model
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;