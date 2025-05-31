<<<<<<< HEAD
=======

>>>>>>> 944bf0a80c2e8e9c92a562be37cd27e077726548
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Gift Catalog', href: '#catalog' },
      { name: 'Enterprise', href: '#enterprise' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
      { name: 'Blog', href: '#blog' },
      { name: 'Contact', href: '#contact' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Status', href: '#status' },
      { name: 'Community', href: '#community' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR', href: '#gdpr' }
    ]
  };

  return (
<<<<<<< HEAD
    <footer className="bg-renicaa-green-dark text-foreground">
=======
    <footer className="bg-renicaa-green-dark text-white">
>>>>>>> 944bf0a80c2e8e9c92a562be37cd27e077726548
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <img 
<<<<<<< HEAD
                src="/renicaa-logo-white.png" 
                alt="Renicaa Logo" 
                className="h-10 w-auto mb-6"
              />
              <p className="text-white/70 leading-relaxed mb-6 max-w-md">
=======
                src="/lovable-uploads/e8835e60-4851-4704-8dd0-4245206eb861.png" 
                alt="Renicaa Logo" 
                className="h-10 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
>>>>>>> 944bf0a80c2e8e9c92a562be37cd27e077726548
                Your story, our canvas. Renicaa transforms corporate gifting with 
                personalized experiences that strengthen business relationships and 
                celebrate achievements.
              </p>
              <div className="space-y-3">
<<<<<<< HEAD
                <div className="flex items-center text-white/70">
                  <Mail className="h-5 w-5 mr-3 text-renicaa-gold" />
                  <span>hello@renicaa.com</span>
                </div>
                <div className="flex items-center text-white/70">
                  <Phone className="h-5 w-5 mr-3 text-renicaa-gold" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-white/70">
=======
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-3 text-renicaa-gold" />
                  <span>hello@renicaa.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-3 text-renicaa-gold" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300">
>>>>>>> 944bf0a80c2e8e9c92a562be37cd27e077726548
                  <MapPin className="h-5 w-5 mr-3 text-renicaa-gold" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-renicaa-gold">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
<<<<<<< HEAD
                      className="text-white/70 hover:text-white transition-colors"
=======
                      className="text-gray-300 hover:text-white transition-colors"
>>>>>>> 944bf0a80c2e8e9c92a562be37cd27e077726548
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-renicaa-gold">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
<<<<<<< HEAD
                      className="text-white/70 hover:text-white transition-colors"
=======
                      className="text-gray-300 hover:text-white transition-colors"
>>>>>>> 944bf0a80c2e8e9c92a562be37cd27e077726548
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-renicaa-gold">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
<<<<<<< HEAD
                      className="text-white/70 hover:text-white transition-colors"
=======
                      className="text-gray-300 hover:text-white transition-colors"
>>>>>>> 944bf0a80c2e8e9c92a562be37cd27e077726548
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-renicaa-gold">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
<<<<<<< HEAD
                      className="text-white/70 hover:text-white transition-colors"
=======
                      className="text-gray-300 hover:text-white transition-colors"
>>>>>>> 944bf0a80c2e8e9c92a562be37cd27e077726548
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-renicaa-green/30 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2 text-renicaa-gold">
                Stay Updated
              </h3>
<<<<<<< HEAD
              <p className="text-white/70">
=======
              <p className="text-gray-300">
>>>>>>> 944bf0a80c2e8e9c92a562be37cd27e077726548
                Get the latest updates on corporate gifting trends and Renicaa news.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
<<<<<<< HEAD
                className="flex-1 md:w-80 px-4 py-3 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-renicaa-gold"
=======
                className="flex-1 md:w-80 px-4 py-3 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-renicaa-gold"
>>>>>>> 944bf0a80c2e8e9c92a562be37cd27e077726548
              />
              <button className="px-6 py-3 bg-renicaa-gold text-renicaa-green font-semibold rounded-r-lg hover:bg-renicaa-gold/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-renicaa-green/30 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
<<<<<<< HEAD
            <div className="text-white/70 text-sm mb-4 md:mb-0">
              © 2024 Renicaa. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-white/70 hover:text-renicaa-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-renicaa-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-renicaa-gold transition-colors">
=======
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Renicaa. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-renicaa-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-renicaa-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-renicaa-gold transition-colors">
>>>>>>> 944bf0a80c2e8e9c92a562be37cd27e077726548
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
