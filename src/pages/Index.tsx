import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import StorySection from '@/components/StorySection';
import ModelSection from '@/components/ModelSection';
import TreeProgramSection from '@/components/TreeProgramSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <StorySection />
      <ModelSection />
      <TreeProgramSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
