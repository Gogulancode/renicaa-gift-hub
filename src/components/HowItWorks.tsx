
import { Card, CardContent } from '@/components/ui/card';
import { Search, Heart, Send, BarChart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse & Select",
      description: "Choose from our curated collection of premium gifts or create custom gift packages tailored to your recipients.",
      step: "01"
    },
    {
      icon: Heart,
      title: "Personalize",
      description: "Add your company branding, personalized messages, and customize the gifting experience to match your brand.",
      step: "02"
    },
    {
      icon: Send,
      title: "Send & Delight",
      description: "Send gifts individually or in bulk. Recipients receive beautiful packages with your personalized touch.",
      step: "03"
    },
    {
      icon: BarChart,
      title: "Track & Measure",
      description: "Monitor delivery status, recipient engagement, and measure the impact of your gifting campaigns.",
      step: "04"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How <span className="text-renicaa-green">Renicaa</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes corporate gifting simple, efficient, and impactful. 
            From selection to delivery, we handle everything.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-renicaa-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-renicaa-gold rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-renicaa-green">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-renicaa-green/30 transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-renicaa-green/50 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-renicaa-green/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Experience the Difference
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              See why leading companies choose Renicaa for their corporate gifting needs. 
              Start your journey today with a personalized demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-renicaa-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-renicaa-green-dark transition-colors">
                Schedule a Demo
              </button>
              <button className="border-2 border-renicaa-green text-renicaa-green px-8 py-3 rounded-lg font-semibold hover:bg-renicaa-green hover:text-white transition-colors">
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
