import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Zap, Shield, TrendingUp, CheckCircle } from 'lucide-react';
import batterySwapImage from '@/assets/battery-swap.jpg';

const ModelSection = () => {
  const features = [
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Accessible Financing",
      description: "Flexible weekly payments matched to riders' earnings, removing the biggest barrier to entry."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Durable Design",
      description: "Electric motorcycles built specifically for local conditions and demanding environments."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Full Service Support",
      description: "Comprehensive maintenance, repairs, and spare parts included in your package."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Training & Mentorship",
      description: "Complete skills development in safety, maintenance, customer service, and entrepreneurship."
    }
  ];

  const benefits = [
    "Remove high upfront purchase costs",
    "Small, flexible weekly payments",
    "Aligned with riders' income cycles",
    "Battery swapping eliminates downtime",
    "Reduced operating costs",
    "Financial inclusion focus"
  ];

  return (
    <section id="model" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Model</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We provide last-mile, green mobility services to rural and underserved communities through an affordable lease-to-own payment plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Breaking Down Financial Barriers
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our approach removes the biggest barrier to entry — the high upfront purchase cost — and replaces it with small, flexible weekly payments aligned with riders' income cycles.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button variant="cta" size="lg">
              Learn About Financing
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src={batterySwapImage}
              alt="Battery swapping technology"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">0</div>
              <div className="text-sm opacity-90">Downtime with battery swaps</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover text-center">
              <CardContent className="p-8">
                <div className="text-primary mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Why We Exist
            </h3>
            <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
              In rural and refugee-hosting communities, the lack of affordable, reliable, and clean transport is more than an inconvenience — it's a barrier to opportunity. Without mobility, access to jobs, markets, education, and healthcare remains limited. Our mission is simple: make clean mobility an accessible pathway to economic independence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelSection;