import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import LocationSection from './components/sections/LocationSection';
import HostSection from './components/sections/HostSection';
import HighlightsSection from './components/sections/HighlightsSection';
import ScheduleSection from './components/sections/ScheduleSection';
import GallerySection from './components/sections/GallerySection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import PricingSection from './components/sections/PricingSection';
import FAQSection from './components/sections/FAQSection';
import ContactCTASection from './components/sections/ContactCTASection';

function App() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy">
      <Navbar />
      <main>
        <HeroSection />
        <LocationSection />
        <HostSection />
        <HighlightsSection />
        {/* <ScheduleSection /> */}
        <GallerySection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <ContactCTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
