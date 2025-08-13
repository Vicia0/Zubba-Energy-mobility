import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-accent">Zubba Energy</span>
            </div>
            <p className="text-background/80 mb-6 max-w-md leading-relaxed">
              Powering mobility and empowering lives through sustainable electric transportation solutions for vulnerable communities in Rwanda.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-background/80">Kigali, Rwanda</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-background/80">info@zubbaenergy.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-background/80">+250 XXX XXX XXX</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-background">Services</h3>
            <ul className="space-y-2 text-background/80">
              <li>Electric Motorcycle Leasing</li>
              <li>Battery Swapping</li>
              <li>Rider Training</li>
              <li>Tree Planting Program</li>
              <li>Community Partnerships</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-background">Company</h3>
            <ul className="space-y-2 text-background/80">
              <li>About Us</li>
              <li>Our Story</li>
              <li>Our Model</li>
              <li>Impact</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Zubba Energy. All rights reserved. Building a sustainable future together.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;