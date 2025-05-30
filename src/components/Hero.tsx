
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-renicaa-green via-renicaa-green-light to-renicaa-green-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Corporate Gifting
              <span className="block text-renicaa-gold">Reimagined</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Transform your corporate relationships with personalized gift experiences. 
              Our platform makes it effortless to send meaningful gifts that strengthen 
              business connections and celebrate achievements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-renicaa-gold text-renicaa-green hover:bg-renicaa-gold/90 font-semibold"
              >
                Start Gifting Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-renicaa-green"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-renicaa-gold">50K+</div>
                <div className="text-sm text-gray-200">Happy Recipients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-renicaa-gold">98%</div>
                <div className="text-sm text-gray-200">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-renicaa-gold">24/7</div>
                <div className="text-sm text-gray-200">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Graphic */}
          <div className="relative animate-slide-in-left">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-renicaa-gold rounded-full flex items-center justify-center">
                    <span className="text-renicaa-green font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Choose Your Gifts</h3>
                    <p className="text-sm text-gray-200">Curated selection of premium items</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-renicaa-gold rounded-full flex items-center justify-center">
                    <span className="text-renicaa-green font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Personalize Experience</h3>
                    <p className="text-sm text-gray-200">Add custom messages and branding</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-renicaa-gold rounded-full flex items-center justify-center">
                    <span className="text-renicaa-green font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Send & Track</h3>
                    <p className="text-sm text-gray-200">Monitor delivery and engagement</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-renicaa-gold/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
