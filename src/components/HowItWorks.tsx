
import { Card, CardContent } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Choose Your Gifts",
      description: "Curated selection of premium items"
    },
    {
      number: "2", 
      title: "Personalize Experience",
      description: "Add custom messages and branding"
    },
    {
      number: "3",
      title: "Send & Track", 
      description: "Monitor delivery and engagement"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-renicaa-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-renicaa-gold rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-renicaa-green">{step.number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xl text-gray-200">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Experience the Difference
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              See why leading companies choose Renicaa for their corporate gifting needs. 
              Start your journey today with a personalized demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-renicaa-gold text-renicaa-green px-8 py-3 rounded-lg font-semibold hover:bg-renicaa-gold/90 transition-colors">
                Schedule a Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-renicaa-green transition-colors">
                View Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
