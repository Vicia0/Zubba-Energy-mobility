import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trees, Leaf, Users, Award, Target } from 'lucide-react';
import treeProgramImage from '@/assets/tree-program.jpg';

const TreeProgramSection = () => {
  const impacts = [
    {
      icon: <Trees className="h-8 w-8" />,
      title: "Environmental Restoration",
      description: "Combat deforestation, improve biodiversity, and enhance climate resilience."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Community Livelihoods",
      description: "Fruit and shade trees provide both food and income opportunities."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Carbon Offsetting",
      description: "Each tree helps balance remaining emissions from our operations."
    }
  ];

  const activities = [
    "Restoring Forests – Replanting degraded and deforested land",
    "Promoting Agroforestry Systems – Integrating trees into farms",
    "Empowering Refugee Communities – Creating tree-based income opportunities",
    "Training Green Ambassadors – Equipping riders and farmers with knowledge",
    "Carbon Offset Partnerships – Generating measurable carbon credits"
  ];

  return (
    <section id="trees" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={treeProgramImage}
              alt="Tree planting program with community members"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Tree <span className="text-primary">Program</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Zubba Energy, we believe sustainability isn't just about reducing emissions — it's about actively restoring the world we all share. While our electric motorcycles cut CO₂ emissions from transport, we also recognize the urgent need to reverse environmental damage.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              In rural Rwanda, especially in refugee-hosting areas, degraded land limits farming, biodiversity, and livelihoods. Trees offer a powerful solution — improving soil health, restoring water cycles, and creating long-term income opportunities for communities.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 mb-8">
              <div className="flex items-center space-x-4">
                <Target className="h-12 w-12 text-primary" />
                <div>
                  <div className="text-2xl font-bold text-primary">1 Million Trees</div>
                  <div className="text-sm text-muted-foreground">By 2035, with riders and communities leading</div>
                </div>
              </div>
            </div>

            <Button variant="cta" size="lg">
              Join Our Green Mission
            </Button>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
            Our Approach
          </h3>
          <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            Our Tree Program integrates directly with our e-mobility work. Every motorcycle we put on the road represents less fuel burned, and for every e-bike leased, we commit to planting trees with local riders, farmers, and refugee families.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {impacts.map((impact, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-8">
                  <div className="text-primary mb-6 flex justify-center">
                    {impact.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {impact.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {impact.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
            What We Do
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{activity}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-white/50 rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-foreground">Green Ambassadors</h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Riders who join our program become "Green Ambassadors," planting and maintaining trees along roads, farms, and community spaces. Unlike large-scale plantations, our model is community-owned.
              </p>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">Every Ride</div>
                <div className="text-sm text-muted-foreground">Should restore the planet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreeProgramSection;