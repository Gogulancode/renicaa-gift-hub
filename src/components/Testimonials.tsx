<<<<<<< HEAD
=======

>>>>>>> 944bf0a80c2e8e9c92a562be37cd27e077726548
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "VP of Human Resources",
      company: "TechCorp Inc.",
      rating: 5,
      content: "Renicaa has transformed our employee recognition program. The personalized gifts and seamless delivery have significantly boosted team morale and engagement.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      position: "Marketing Director",
      company: "Global Solutions Ltd.",
      rating: 5,
      content: "The analytics and tracking features are incredible. We can now measure the ROI of our client appreciation campaigns and the results speak for themselves.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      position: "Chief People Officer",
      company: "Innovation Labs",
      rating: 5,
      content: "What sets Renicaa apart is their attention to detail and quality. Every gift feels thoughtful and premium, which reflects perfectly on our brand.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
<<<<<<< HEAD
    <section className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-renicaa-green">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
=======
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-renicaa-green">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
>>>>>>> 944bf0a80c2e8e9c92a562be37cd27e077726548
            Don't just take our word for it. Here's what industry leaders have to say 
            about their experience with Renicaa's corporate gifting platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
<<<<<<< HEAD
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border shadow-md">
=======
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
>>>>>>> 944bf0a80c2e8e9c92a562be37cd27e077726548
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-renicaa-gold fill-current" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-renicaa-green/20 mb-4" />
                
<<<<<<< HEAD
                <p className="text-muted-foreground leading-relaxed mb-6">
=======
                <p className="text-gray-600 leading-relaxed mb-6">
>>>>>>> 944bf0a80c2e8e9c92a562be37cd27e077726548
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
<<<<<<< HEAD
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
=======
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
>>>>>>> 944bf0a80c2e8e9c92a562be37cd27e077726548
                    <div className="text-sm text-renicaa-green font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
<<<<<<< HEAD
          <div className="inline-flex items-center bg-background rounded-full px-6 py-3 shadow-md">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-renicaa-gold fill-current" />
              <span className="font-semibold text-foreground">4.9/5</span>
              <span className="text-muted-foreground">from 500+ reviews</span>
=======
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-renicaa-gold fill-current" />
              <span className="font-semibold text-gray-900">4.9/5</span>
              <span className="text-gray-600">from 500+ reviews</span>
>>>>>>> 944bf0a80c2e8e9c92a562be37cd27e077726548
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default Testimonials;
=======
export default Testimonials;
>>>>>>> 944bf0a80c2e8e9c92a562be37cd27e077726548
