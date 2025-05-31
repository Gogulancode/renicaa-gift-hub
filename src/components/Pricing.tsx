import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams and occasional gifting",
      features: [
        "Up to 50 gifts per month",
        "Basic gift catalog access",
        "Email support",
        "Standard packaging",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing companies with regular gifting needs",
      features: [
        "Up to 200 gifts per month",
        "Full catalog access",
        "Priority support",
        "Custom branding",
        "Advanced analytics",
        "Bulk sending tools",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex requirements",
      features: [
        "Unlimited gifts",
        "Custom gift curation",
        "Dedicated account manager",
        "White-label solution",
        "Custom integrations",
        "SSO & advanced security",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent <span className="text-renicaa-green">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your gifting needs. All plans include our core features 
            and world-class support. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-renicaa-green shadow-lg scale-105' 
                  : 'border-border hover:border-renicaa-green/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-renicaa-green text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold text-renicaa-green">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-renicaa-green mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular
                      ? 'bg-renicaa-green hover:bg-renicaa-green-dark text-white'
                      : 'bg-background border-2 border-renicaa-green text-renicaa-green hover:bg-renicaa-green hover:text-white'
                  }`}
                  size="lg"
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-accent rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              All Plans Include
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-renicaa-green mb-2">24/7</div>
                <div className="text-muted-foreground">Customer Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-renicaa-green mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-renicaa-green mb-2">30-Day</div>
                <div className="text-muted-foreground">Money-Back Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
