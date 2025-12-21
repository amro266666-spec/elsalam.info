import { HeroSection } from './components/HeroSection';
import { PainPointsSection } from './components/PainPointsSection';
import { SolutionsSection } from './components/SolutionsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { IndustriesSection } from './components/IndustriesSection';
import { ProcessSection } from './components/ProcessSection';
import { LeadFormSection } from './components/LeadFormSection';

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Cairo, sans-serif' }} dir="rtl" lang="ar">
      <HeroSection />
      <PainPointsSection />
      <SolutionsSection />
      <WhyChooseUsSection />
      <IndustriesSection />
      <ProcessSection />
      <LeadFormSection />
      
      {/* Footer */}
      <footer className="bg-[#0B1C2D] text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/70">
            جميع الحقوق محفوظة © {new Date().getFullYear()} | حلول صناعية متكاملة
          </p>
        </div>
      </footer>
    </div>
  );
}
