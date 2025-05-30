
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/e8835e60-4851-4704-8dd0-4245206eb861.png" 
              alt="Renicaa Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-renicaa-green transition-colors">
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#how-it-works" className="text-gray-700 hover:text-renicaa-green transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-gray-700 hover:text-renicaa-green transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-renicaa-green transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-gray-700 hover:text-renicaa-green transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-renicaa-green text-renicaa-green hover:bg-renicaa-green hover:text-white">
              Sign In
            </Button>
            <Button className="bg-renicaa-green hover:bg-renicaa-green-dark text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-renicaa-green"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#solutions" className="block px-3 py-2 text-gray-700 hover:text-renicaa-green">
                Solutions
              </a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-renicaa-green">
                How It Works
              </a>
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-renicaa-green">
                Features
              </a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-renicaa-green">
                Pricing
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-renicaa-green">
                Contact
              </a>
              <div className="flex flex-col space-y-2 px-3 py-2">
                <Button variant="outline" className="border-renicaa-green text-renicaa-green">
                  Sign In
                </Button>
                <Button className="bg-renicaa-green hover:bg-renicaa-green-dark text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
