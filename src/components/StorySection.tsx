import { Card, CardContent } from '@/components/ui/card';
import { Heart, Briefcase, TrendingUp } from 'lucide-react';

const StorySection = () => {
  const highlights = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Lifeline for Communities",
      description: "Boda Bodas connect families, transport goods, and serve as vital community infrastructure across East Africa."
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Path to Independence",
      description: "For many, riding isn't just a job — it's a pathway to independence and dignity for both educated and low-literate youth."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Breaking Barriers",
      description: "High upfront costs keep talented riders locked out. We're changing that with accessible financing solutions."
    }
  ];

  return (
    <section id="story" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Story</span>
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-left">
            <p>
              Unlike in many developed countries where motorcycles are used mainly for leisure or occasional transport, in Rwanda — and across much of East Africa — Boda Bodas are a lifeline. They connect communities, transport goods, and serve as a major source of income for thousands of young people.
            </p>
            
            <p>
              For many, riding is not just a job — it's a path to independence and dignity. On average, riders earn between <strong className="text-primary">$7 and $15 per day</strong>, providing a steady livelihood for both educated and low-literate youth. Yet, the high upfront cost of motorcycles keeps many talented riders locked out of this opportunity.
            </p>
            
            <p className="text-xl font-semibold text-foreground">
              Zubba Energy was created to change that — giving riders the chance to own their motorcycles, earn sustainable income, and be part of Rwanda's green energy transition.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className="card-hover text-center">
              <CardContent className="p-8">
                <div className="text-primary mb-6 flex justify-center">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Vision & Mission
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Vision</h4>
                  <p className="text-muted-foreground">
                    To provide affordable, sustainable, and zero-emissions last-mile transportation in East African cities and rural communities.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Mission</h4>
                  <p className="text-muted-foreground">
                    To make clean mobility an accessible pathway to economic independence — removing financial barriers, reducing fuel costs, and equipping riders with entrepreneurial skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/50 rounded-xl p-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground mb-4">Young people we aim to empower</div>
                <div className="text-2xl font-bold text-accent mb-2">Zero</div>
                <div className="text-sm text-muted-foreground">Emissions future</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;