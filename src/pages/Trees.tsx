import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, TreePine, Users, Leaf, Target, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import Scene3D from '@/components/3D/Scene3D';
import TreeScene from '@/components/3D/TreeScene';
import treeProgramImage from '@/assets/tree-program.jpg';
import heroImage from '@/assets/tree.jpeg';

const TreeProgramFeature = ({ icon: Icon, title, description }: {
  icon: any;
  title: string;
  description: string;
}) => (
  <Card className="card-hover border-border/50 bg-card/80 backdrop-blur-sm">
    <CardContent className="p-8 text-center">
      <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
        <Icon className="w-8 h-8 text-accent" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

const Trees = () => {
  const programFeatures = [
    {
      icon: TreePine,
      title: 'Restoring Forests',
      description: 'Replanting degraded and deforested land to bring back natural ecosystems and biodiversity across Rwanda.'
    },
    {
      icon: Leaf,
      title: 'Agroforestry Systems',
      description: 'Integrating trees into farms to improve soil fertility, protect crops, and diversify farmer income streams.'
    },
    {
      icon: Users,
      title: 'Empowering Communities',
      description: 'Partnering with refugee households to create tree-based income opportunities and strengthen local food systems.'
    },
    {
      icon: Target,
      title: 'Training Green Ambassadors',
      description: 'Equipping riders and farmers with knowledge to plant, care for, and benefit from sustainable tree programs.'
    },
    {
      icon: DollarSign,
      title: 'Carbon Offset Partnerships',
      description: 'Generating measurable carbon credits and reinvesting revenue into local community development projects.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
      {/* Hero Section with 3D Trees */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* <div className="absolute inset-0 z-0">
          <Scene3D cameraPosition={[8, 6, 10]} autoRotate={true}>
            <TreeScene />
          </Scene3D>
        </div> */}

        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-45"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Tree <span className="hero-text">Program</span>
            </h1>
            
            <p className="text-2xl text-muted-foreground mb-8 leading-relaxed">
              Every ride we power should also restore the planet. We're planting 1 million trees by 2035.
            </p>
            
            <div className="bg-card/80 backdrop-blur-md rounded-3xl p-8 mb-12 border border-border/50">
              <h2 className="text-3xl font-bold mb-6 text-primary">Why Trees?</h2>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                At Zubba Energy, sustainability isn't just about reducing emissions — it's about actively restoring 
                the world we all share. While our electric motorcycles cut CO₂ emissions from transport, we also 
                recognize the urgent need to reverse environmental damage caused by deforestation and climate change.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                In rural Rwanda, especially in refugee-hosting areas, degraded land limits farming, biodiversity, 
                and livelihoods. Trees offer a powerful solution — improving soil health, restoring water cycles, 
                and creating long-term income opportunities for communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              className="rounded-3xl overflow-hidden h-96 bg-cover bg-center relative order-2 lg:order-1"
              style={{ backgroundImage: `url(${treeProgramImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Community-Led Restoration</h3>
                <p className="opacity-90">Empowering local communities to lead environmental change</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl font-bold mb-8">Our Approach</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our Tree Program integrates directly with our e-mobility work. Every motorcycle we put on the road 
                represents less fuel burned, and for every e-bike leased, we commit to planting trees with local 
                riders, farmers, and refugee families.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TreePine className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Community-Owned Model</h4>
                    <p className="text-muted-foreground">Unlike large-scale plantations, our model is community-owned with local stewardship.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Green Ambassadors</h4>
                    <p className="text-muted-foreground">Riders become "Green Ambassadors," planting and maintaining trees along roads and community spaces.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Leaf className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Training & Support</h4>
                    <p className="text-muted-foreground">We supply seedlings, offer training in tree care, and work with community-led nurseries.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">What We Do</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {programFeatures.map((feature, index) => (
              <TreeProgramFeature key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">The Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-8 bg-card rounded-3xl card-hover">
              <div className="text-4xl font-bold text-primary mb-4">1M</div>
              <div className="text-xl font-semibold mb-2">Trees by 2035</div>
              <p className="text-muted-foreground text-sm">Our ambitious reforestation goal</p>
            </div>
            
            <div className="text-center p-8 bg-card rounded-3xl card-hover">
              <div className="text-4xl font-bold text-accent mb-4">100+</div>
              <div className="text-xl font-semibold mb-2">Communities</div>
              <p className="text-muted-foreground text-sm">Participating in tree programs</p>
            </div>
            
            <div className="text-center p-8 bg-card rounded-3xl card-hover">
              <div className="text-4xl font-bold text-secondary-foreground mb-4">50%</div>
              <div className="text-xl font-semibold mb-2">Income Increase</div>
              <p className="text-muted-foreground text-sm">From agroforestry systems</p>
            </div>
            
            <div className="text-center p-8 bg-card rounded-3xl card-hover">
              <div className="text-4xl font-bold text-primary mb-4">∞</div>
              <div className="text-xl font-semibold mb-2">Biodiversity</div>
              <p className="text-muted-foreground text-sm">Restored ecosystem health</p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Triple Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-card/60 rounded-2xl">
                <h4 className="text-xl font-bold mb-3 text-primary">Environmental Restoration</h4>
                <p className="text-muted-foreground">Combat deforestation, improve biodiversity, and enhance climate resilience</p>
              </div>
              <div className="p-6 bg-card/60 rounded-2xl">
                <h4 className="text-xl font-bold mb-3 text-accent">Community Livelihoods</h4>
                <p className="text-muted-foreground">Fruit and shade trees provide both food security and income generation</p>
              </div>
              <div className="p-6 bg-card/60 rounded-2xl">
                <h4 className="text-xl font-bold mb-3 text-secondary-foreground">Carbon Offsetting</h4>
                <p className="text-muted-foreground">Each tree helps balance remaining emissions from our operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8">Our Tree Program Vision</h2>
          <p className="text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
            "Every ride we power should also restore the planet. By 2035, our goal is to plant 1 million trees, 
            with riders and refugee communities leading the way."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild variant="secondary" size="xl">
              <Link to="/about">
                Learn About Zubba Energy
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-white/30 text-white hover:bg-white hover:text-primary">
              <Link to="/">
                Back to Home
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trees;