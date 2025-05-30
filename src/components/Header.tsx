
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';

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
            <a href="#solutions" className="text-gray-700 hover:text-renicaa-green transition-colors font-medium">
              Solutions
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-renicaa-green transition-colors font-medium">
              How It Works
            </a>
            <a href="#features" className="text-gray-700 hover:text-renicaa-green transition-colors font-medium">
              Features
            </a>
            <a href="/catalog" className="text-gray-700 hover:text-renicaa-green transition-colors font-medium">
              Shop Products
            </a>
            <a href="#contact" className="text-gray-700 hover:text-renicaa-green transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-renicaa-green">
              <ShoppingBag className="h-6 w-6" />
            </button>
            <button className="text-gray-700 hover:text-renicaa-green">
              <User className="h-6 w-6" />
            </button>
            <button className="text-gray-700 hover:text-renicaa-green">
              <Search className="h-6 w-6" />
            </button>
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
              <a href="#solutions" className="block px-3 py-2 text-gray-700 hover:text-renicaa-green font-medium">
                Solutions
              </a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-renicaa-green font-medium">
                How It Works
              </a>
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-renicaa-green font-medium">
                Features
              </a>
              <a href="/catalog" className="block px-3 py-2 text-gray-700 hover:text-renicaa-green font-medium">
                Shop Products
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-renicaa-green font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
