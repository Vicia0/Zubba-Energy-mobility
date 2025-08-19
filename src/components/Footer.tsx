import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground via-foreground/95 to-primary/20 text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-accent rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-accent rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-3xl p-8 mb-16 border border-accent/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-accent tracking-wide uppercase">Stay Connected</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-background mb-4">
                Join the <span className="text-accent">Green Revolution</span>
              </h3>
              <p className="text-background/80 mb-6">
                Get updates on our riders' journeys, environmental impact, and how we're transforming mobility across Rwanda.
              </p>
            </div>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-background/10 border border-background/20 text-background placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="px-6 py-3 bg-accent text-foreground rounded-xl hover:bg-accent/90 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold text-accent">Zubba Energy</span>
            </div>
            <p className="text-background/80 mb-6 max-w-md leading-relaxed">
              Empowering communities through clean mobility. Every ride creates jobs, plants trees, and builds a sustainable future for Rwanda.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <MapPin className="h-4 w-4 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-background/80">KN 4 Ave, Kigali, Rwanda</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-4 w-4 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-background/80">hello@zubbaenergy.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-4 w-4 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-background/80">+250 788 000 000</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <button 
                  key={index}
                  className="w-10 h-10 bg-background/10 hover:bg-accent rounded-xl flex items-center justify-center transition-all hover:scale-110 group"
                >
                  <Icon className="w-5 h-5 text-background/80 group-hover:text-foreground" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6 text-background text-lg">About</h3>
            <ul className="space-y-3">
              {[
                { label: 'Our Story', to: '/story' },
                { label: 'Our Model', to: '/model' },
                { label: 'Tree Program', to: '/trees' },
                { label: 'Impact Report', to: '/about' },
                { label: 'Careers', to: '/about' }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.to}
                    className="text-background/80 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-6 text-background text-lg">Services</h3>
            <ul className="space-y-3">
              {[
                'Motorcycle Leasing',
                'Battery Swapping',
                'Rider Training',
                'Maintenance Support',
                'Financial Literacy'
              ].map((item, index) => (
                <li key={index}>
                  <span className="text-background/80 hover:text-accent transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* For Riders */}
          <div>
            <h3 className="font-semibold mb-6 text-background text-lg">For Riders</h3>
            <ul className="space-y-3">
              {[
                'Join as Rider',
                'Payment Plans',
                'Training Program',
                'Support Center',
                'Rider Community'
              ].map((item, index) => (
                <li key={index}>
                  <span className="text-background/80 hover:text-accent transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Partners */}
          <div>
            <h3 className="font-semibold mb-6 text-background text-lg">Partners</h3>
            <ul className="space-y-3">
              {[
                'Become Partner',
                'Investor Relations',
                'Government',
                'NGO Partnerships',
                'Corporate Social Responsibility'
              ].map((item, index) => (
                <li key={index}>
                  <span className="text-background/80 hover:text-accent transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-center md:text-left">
              © 2024 Zubba Energy. All rights reserved. Building a sustainable future, one ride at a time.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-background/60 hover:text-accent transition-colors">Privacy Policy</button>
              <button className="text-background/60 hover:text-accent transition-colors">Terms of Service</button>
              <button className="text-background/60 hover:text-accent transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;