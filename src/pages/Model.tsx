import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Battery, Wrench, GraduationCap, CreditCard, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Scene3D from '@/components/3D/Scene3D';
import batterySwapImage from '@/assets/battery-swap.jpg';
import heroImage from '@/assets/hero-image.jpg';

const ModelFeature = ({ icon: Icon, title, description, details }: {
  icon: any;
  title: string;
  description: string;
  details: string[];
}) => (
  <Card className="card-hover border-border/50">
    <CardContent className="p-8">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
            <Icon className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
          <ul className="space-y-2">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm text-muted-foreground">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Model = () => {
  const modelFeatures = [
    {
      icon: CreditCard,
      title: 'Accessible Financing',
      description: 'Flexible weekly payments aligned with riders\' income cycles, removing the biggest barrier to entry.',
      details: [
        'Small weekly payments instead of large upfront costs',
        'Payments matched to earning cycles',
        'Lease-to-own pathway to motorcycle ownership',
        'No traditional credit requirements'
      ]
    },
    {
      icon: Zap,
      title: 'Durable Electric Design',
      description: 'Electric motorcycles engineered for local conditions and maximum reliability.',
      details: [
        'Built for Rwanda\'s diverse terrain',
        'Weather-resistant components',
        'Local maintenance capabilities',
        'Extended battery life optimization'
      ]
    },
    {
      icon: Battery,
      title: 'Battery Swapping',
      description: 'Eliminates downtime and reduces operating costs through instant battery exchanges.',
      details: [
        'Zero charging downtime',
        'Strategic swap station locations',
        'Always-ready backup batteries',
        'Lower operational costs than fuel'
      ]
    },
    {
      icon: Wrench,
      title: 'Full-Service Support',
      description: 'Complete maintenance, repairs, and spare parts included in the service package.',
      details: [
        'Regular maintenance included',
        'Local repair network',
        'Genuine spare parts supply',
        'Technical support hotline'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Skills Development',
      description: 'Comprehensive training programs building entrepreneurial and technical capabilities.',
      details: [
        'Safe riding techniques',
        'Basic motorcycle maintenance',
        'Customer service excellence',
        'Financial literacy and business skills'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* <div className="absolute inset-0 z-0 opacity-30">
          <Scene3D cameraPosition={[6, 4, 8]} autoRotate={true}>
            <group>
              <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[2, 2, 0.2]} />
                <meshStandardMaterial color="#2d4a2b" />
              </mesh>
              {Array.from({ length: 6 }).map((_, i) => (
                <mesh 
                  key={i} 
                  position={[
                    Math.cos((i / 6) * Math.PI * 2) * 1.5,
                    -0.5,
                    Math.sin((i / 6) * Math.PI * 2) * 1.5
                  ]}
                >
                  <boxGeometry args={[0.3, 0.8, 0.2]} />
                  <meshStandardMaterial color="#4a8c2a" />
                </mesh>
              ))}
              <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.3, 0.3, 2]} />
                <meshStandardMaterial color="#1a1a1a" />
              </mesh>
            </group>
          </Scene3D>
        </div> */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Our <span className="hero-text">Model</span>
            </h1>
            
            <p className="text-2xl text-muted-foreground mb-8 leading-relaxed">
              Last-mile, green mobility services through an affordable lease-to-own payment plan designed for vulnerable communities.
            </p>
            
            <div className="bg-card/80 backdrop-blur-md rounded-3xl p-8 mb-12 border border-border/50">
              <h2 className="text-3xl font-bold mb-6 text-primary">Integrated Approach</h2>
              <p className="text-lg leading-relaxed text-foreground">
                By combining clean technology with financial inclusion, we create both environmental and economic impact. 
                Our model removes the biggest barrier to entry — high upfront costs — and replaces it with small, 
                flexible payments aligned with riders' income cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Battery Swap Feature */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8">Revolutionary Battery Swapping</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our battery swapping technology eliminates charging downtime and reduces operating costs, 
                keeping riders on the road and earning.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-lg">Instant battery exchange in under 2 minutes</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    <Battery className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-lg">Strategic locations across Rwanda</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-lg">Lower cost than traditional fuel</span>
                </div>
              </div>
            </div>
            
            <div 
              className="rounded-3xl overflow-hidden h-96 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${batterySwapImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">How Our Model Works</h2>
          
          <div className="space-y-8">
            {modelFeatures.map((feature, index) => (
              <ModelFeature key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8">Creating Lasting Impact</h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            By combining clean energy with financial inclusion, we enable youth and vulnerable groups 
            to move from survival to self-reliance while driving the shift to a zero-emissions future.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4">Environmental Impact</h3>
              <p className="opacity-90">Zero emissions transportation reducing carbon footprint across Rwanda</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4">Economic Impact</h3>
              <p className="opacity-90">Sustainable income opportunities for thousands of young entrepreneurs</p>
            </div>
          </div>
          
          <Button asChild variant="secondary" size="xl">
            <Link to="/trees">
              Discover Our Tree Program
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Model;