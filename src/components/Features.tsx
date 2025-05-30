
import { Card, CardContent } from '@/components/ui/card';
import { Gift, Users, Clock, Award, BarChart, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Gift,
      title: "Curated Gift Collections",
      description: "Access thousands of premium gifts from leading brands, carefully selected for corporate gifting."
    },
    {
      icon: Users,
      title: "Bulk Gift Management",
      description: "Send gifts to hundreds of recipients simultaneously with our streamlined bulk sending tools."
    },
    {
      icon: Clock,
      title: "Automated Scheduling",
      description: "Schedule gifts in advance for birthdays, anniversaries, holidays, and other important dates."
    },
    {
      icon: Award,
      title: "Custom Branding",
      description: "Add your company logo, colors, and personalized messages to create a branded experience."
    },
    {
      icon: BarChart,
      title: "Analytics & Insights",
      description: "Track gift performance, recipient engagement, and ROI with detailed analytics dashboards."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SSO integration, compliance certifications, and data protection."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for
            <span className="text-renicaa-green"> Corporate Gifting</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and features you need to create 
            memorable gifting experiences that strengthen business relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md"
            >
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-renicaa-green/10 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-renicaa-green" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-renicaa-green rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Corporate Gifting?
            </h3>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join thousands of companies who trust Renicaa for their corporate gifting needs.
            </p>
            <button className="bg-renicaa-gold text-renicaa-green px-8 py-3 rounded-lg font-semibold hover:bg-renicaa-gold/90 transition-colors">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
