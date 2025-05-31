import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Brands from '@/components/Brands';
import Products from '@/components/Products';
import Footer from '@/components/Footer';
import Instagram from '@/components/Instagram';
import FestiveGift from '@/components/FestiveGift';
import OurPicks from '@/components/OurPicks';
import DownloadCatalogue from '@/components/DownloadCatalogue';
import HowItWorks from '@/components/HowItWorks';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Brands />
        <HowItWorks />
        <FestiveGift />
        <OurPicks />
        <DownloadCatalogue />
        <Testimonials />
        <Instagram />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
