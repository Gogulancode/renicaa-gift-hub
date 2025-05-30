
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Brands from '@/components/Brands';
import Products from '@/components/Products';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Brands />
        <Products />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
