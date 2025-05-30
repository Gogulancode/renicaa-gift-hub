import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-blue-200">CORPORATE GIFTING</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Gifting That
            <br />
            <span className="text-white">Means Business</span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform your corporate relationships with personalized gift experiences that strengthen 
            business connections and celebrate achievements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4 rounded-full text-lg"
            >
              Talk to Sales
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg bg-transparent"
            >
              Start Gifting Today
            </Button>
          </div>
          
          {/* Decorative element - could add a mascot illustration here */}
          <div className="mt-16 relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              {/* Placeholder for mascot illustration */}
              <div className="w-32 h-32 bg-blue-400/20 rounded-full flex items-center justify-center">
                <span className="text-4xl">🎁</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
