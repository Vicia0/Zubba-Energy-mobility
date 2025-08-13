import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Drive Change?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Join us in creating a sustainable, inclusive future where clean mobility empowers communities and protects our planet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 hover:bg-white hover:text-primary">
              <ArrowRight className="mr-2 h-5 w-5" />
              Become a Rider
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 hover:bg-white hover:text-primary">
              Partner With Us
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 hover:bg-white hover:text-primary">
              Join Tree Program
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">$7-15</div>
              <div className="text-sm opacity-80">Daily earning potential</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1M+</div>
              <div className="text-sm opacity-80">Trees to plant by 2035</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">0</div>
              <div className="text-sm opacity-80">Emissions future</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;