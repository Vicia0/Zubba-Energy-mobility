import { Card, CardContent } from '@/components/ui/card';
import { Battery, Users, Wrench, GraduationCap } from 'lucide-react';
import communityImage from '@/assets/community.jpg';

const AboutSection = () => {
  const features = [
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Asset Access",
      description: "Electric motorcycles designed for durability and local conditions."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Battery Swapping",
      description: "Eliminating downtime and reducing operating costs."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Full-Service Support",
      description: "Maintenance, repairs, and spare parts included."
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Skills Development",
      description: "Training in riding, maintenance, customer service, and entrepreneurship."
    }
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-primary">Zubba Energy</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Zubba Energy is an e-mobility venture providing connected electric motorcycle taxis (Boda Bodas) to riders in Rwanda through a lease-to-own model. We believe clean energy should be for everyone, not just the privileged.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We focus on the most vulnerable — including refugee communities and people in rural, hard-to-reach areas — breaking financial and geographical barriers to sustainable transport. We manage the entire rider experience ensuring reliability, uptime, and maximum earning potential.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="card-hover border-border/50">
                  <CardContent className="p-6">
                    <div className="text-primary mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={communityImage}
              alt="Community empowerment through sustainable transportation"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">$7-15</div>
              <div className="text-sm opacity-90">Daily earnings for riders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;