import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Zap, Shield, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Scene3D from '@/components/3D/Scene3D';
import FloatingMotorcycle from '@/components/3D/FloatingMotorcycle';
import communityImage from '@/assets/community.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We focus on vulnerable communities and refugees, ensuring clean energy access for everyone, not just the privileged.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge electric technology designed for local conditions and sustainable impact.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We control every aspect of the experience - design, maintenance, battery swaps, and support.'
    },
    {
      icon: Users,
      title: 'Empowerment',
      description: 'Creating pathways to economic independence through skills training and entrepreneurship.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
      {/* Hero Section with 3D */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Scene3D cameraPosition={[4, 3, 6]} autoRotate={true}>
            <FloatingMotorcycle />
            <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[20, 20]} />
              <meshStandardMaterial color="#e8f5e8" transparent opacity={0.3} />
            </mesh>
          </Scene3D>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              About <span className="hero-text">Zubba Energy</span>
            </h1>
            
            <p className="text-2xl text-muted-foreground mb-8 leading-relaxed">
              We're an e-mobility venture transforming transportation in Rwanda through connected electric motorcycles and inclusive financing.
            </p>
            
            <div className="bg-card/80 backdrop-blur-md rounded-3xl p-8 mb-12 border border-border/50">
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
              <p className="text-lg leading-relaxed text-foreground">
                We believe clean energy should be for everyone, not just the privileged. By focusing on vulnerable communities, 
                including refugees and rural populations, we're breaking down financial and geographical barriers to sustainable transport. 
                We control every aspect of the rider experience to ensure reliability and maximum earning potential.
              </p>
            </div>
            
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/story">
                Read Our Story
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold mb-8">Our Vision</h2>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              To provide affordable, sustainable, and zero-emissions last-mile transportation 
              in East African cities and rural communities — enabling mobility for all, while protecting our planet.
            </p>
          </div>
          
          <div 
            className="rounded-3xl overflow-hidden h-96 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${communityImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-4xl font-bold mb-4">Enabling Mobility for All</h3>
                <p className="text-xl opacity-90">Zero emissions. Maximum impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-8 bg-card rounded-3xl card-hover border border-border/50"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8">Ready to Transform Mobility?</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Join us in creating sustainable transportation solutions that empower communities across Rwanda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild variant="secondary" size="xl">
              <Link to="/model">
                Learn About Our Model
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-white/30 text-white hover:bg-white hover:text-primary">
              <Link to="/trees">
                Explore Tree Program
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;