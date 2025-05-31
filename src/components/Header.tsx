<<<<<<< HEAD
import { useState, useRef, useEffect, Fragment } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, ShoppingBag, User, ChevronDown } from 'lucide-react';
import { Menu as HeadlessMenu, Transition } from '@headlessui/react';
import { useNavigate, Link } from 'react-router-dom';

const solutionsMenu = [
    {
        category: 'Employee recognition',
        items: [
            { icon: '🎉', title: 'Birthdays', desc: 'For your employees' },
            { icon: '🏅', title: 'Work Anniversaries', desc: 'For your employees' },
            { icon: '🎁', title: 'Spot Bonuses', desc: 'Gift any occasion' },
            { icon: '🏆', title: 'Employee Recognition', desc: 'Appreciation Matters' },
            { icon: '🎈', title: 'Welcome Kits', desc: 'Perfect Welcome Kit' },
        ],
    },
    {
        category: 'Sales & Marketing',
        items: [
            { icon: '🌍', title: 'Global Gifting', desc: 'Increase reach' },
            { icon: '👍', title: 'Closing Gifts', desc: 'Increase conversion' },
            { icon: '🤝', title: 'Client Gifting', desc: 'Relationships matter' },
        ],
    },
    {
        category: 'Research',
        items: [
            { icon: '🧑‍🔬', title: 'User Research', desc: 'Reward feedback' },
            { icon: '💡', title: 'UX Research', desc: 'Promote participation' },
            { icon: '🌐', title: 'Market Research', desc: 'Enrich your data' },
        ],
    },
    {
        category: 'Partners',
        items: [
            { icon: '🛩️', title: 'Gifted X Tinggly', desc: 'Beyond the Desk' },
            { icon: '📝', title: 'Gifted X BestSelf.Co', desc: 'Clear Your Mind' },
        ],
    },
];

const shopCategories = [
    {
        name: 'Totes',
        image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Cross Bodies',
        image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Back Packs',
        image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Accessories',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Organizers',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const [shopOpen, setShopOpen] = useState(false);
    const [dropdownTop, setDropdownTop] = useState(64);
    const headerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const updateDropdownTop = () => {
            if (headerRef.current) {
                const rect = headerRef.current.getBoundingClientRect();
                setDropdownTop(rect.bottom);
            }
        };
        updateDropdownTop();
        window.addEventListener('resize', updateDropdownTop);
        window.addEventListener('scroll', updateDropdownTop);
        return () => {
            window.removeEventListener('resize', updateDropdownTop);
            window.removeEventListener('scroll', updateDropdownTop);
        };
    }, []);

    return (
        <header className="bg-background shadow-sm sticky top-0 z-50" ref={headerRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-16 relative">
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-foreground hover:text-renicaa-green"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                    {/* Logo */}
                    <div className="absolute left-1/2 -translate-x-1/2 z-10 md:static md:translate-x-0 flex items-center flex-shrink-0">
                        <a href="/">
                            <img
                                src="/renicaa-logo.png"
                                alt="Renicaa Logo"
                                className="h-16 w-auto brightness-75 hover:brightness-50 transition-all duration-200"
                                style={{ cursor: 'pointer' }}
                            />
                        </a>
                    </div>
                    {/* Desktop nav */}
                    <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
                        {/* Solutions Mega Menu */}
                        <div
                            className="relative"
                            onMouseEnter={() => setSolutionsOpen(true)}
                            onMouseLeave={() => setSolutionsOpen(false)}
                        >
                            <button className="text-foreground hover:text-renicaa-green transition-colors font-medium flex items-center">
                                Solutions
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                            {solutionsOpen && (
                                <div className="fixed left-0 right-0 top-16 bg-background border-t shadow-lg z-50">
                                    <div className="max-w-7xl mx-auto px-8 py-10 flex gap-12">
                                        {solutionsMenu.map((col) => (
                                            <div key={col.category} className="min-w-[220px]">
                                                <div className="font-bold text-muted-foreground mb-4">
                                                    {col.category}
                                                </div>
                                                <ul>
                                                    {col.items.map((item) => (
                                                        <li
                                                            key={item.title}
                                                            className="mb-4 flex items-start gap-3"
                                                        >
                                                            <span className="text-2xl">{item.icon}</span>
                                                            <div>
                                                                <div className="font-semibold text-foreground">
                                                                    {item.title}
                                                                </div>
                                                                <div className="text-muted-foreground text-sm">
                                                                    {item.desc}
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <a
                            href="#how-it-works"
                            className="text-foreground hover:text-renicaa-green transition-colors font-medium"
                        >
                            How It Works
                        </a>
                        <a
                            href="#features"
                            className="text-foreground hover:text-renicaa-green transition-colors font-medium"
                        >
                            Features
                        </a>
                        {/* Shop Products Dropdown */}
                        <HeadlessMenu as="div" className="relative">
                            <div>
                                <HeadlessMenu.Button className="text-foreground hover:text-renicaa-green transition-colors font-medium flex items-center">
                                    Shop Products
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </HeadlessMenu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <HeadlessMenu.Items
                                    static
                                    className="fixed left-0 right-0 top-16 bg-background border-t shadow-lg z-50"
                                >
                                    {({ close }) => (
                                        <div className="max-w-7xl mx-auto px-8 py-10">
                                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                                                {shopCategories.map((cat) => (
                                                    <button
                                                        key={cat.name}
                                                        className="flex flex-col items-center bg-background rounded-lg transition p-2 border-0 focus:outline-none hover:bg-accent"
                                                        onClick={() => {
                                                            navigate(`/catalog?category=${encodeURIComponent(cat.name)}`);
                                                            close();
                                                        }}
                                                        style={{ minWidth: 160 }}
                                                    >
                                                        <img
                                                            src={cat.image}
                                                            alt={cat.name}
                                                            className="w-24 h-24 object-contain"
                                                            loading="lazy"
                                                        />
                                                        <span className="font-bold text-foreground text-base mt-2 tracking-wide uppercase">
                                                            {cat.name}
                                                        </span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </HeadlessMenu.Items>
                            </Transition>
                        </HeadlessMenu>
                        <Link
                            to="/contact"
                            className="text-foreground hover:text-renicaa-green transition-colors font-medium"
                        >
                            Contact
                        </Link>
                    </div>
                    {/* Desktop Icons */}
                    <div className="hidden md:flex items-center space-x-4 ml-4">
                        <button className="text-foreground hover:text-renicaa-green">
                            <ShoppingBag className="h-6 w-6" />
                        </button>
                        <button className="text-foreground hover:text-renicaa-green">
                            <User className="h-6 w-6" />
                        </button>
                        <button className="text-foreground hover:text-renicaa-green">
                            <Search className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
                            <a
                                href="#solutions"
                                className="block px-3 py-2 text-foreground hover:text-renicaa-green font-medium flex items-center"
                            >
                                Solutions
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </a>
                            <a
                                href="#how-it-works"
                                className="block px-3 py-2 text-foreground hover:text-renicaa-green font-medium"
                            >
                                How It Works
                            </a>
                            <a
                                href="#features"
                                className="block px-3 py-2 text-foreground hover:text-renicaa-green font-medium"
                            >
                                Features
                            </a>
                            <a
                                href="http://localhost:8080/catalog"
                                className="block px-3 py-2 text-foreground hover:text-renicaa-green font-medium"
                            >
                                Shop by Products
                            </a>
                            <a
                                href="#contact"
                                className="block px-3 py-2 text-foreground hover:text-renicaa-green font-medium"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
=======

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, ShoppingBag, User, ChevronDown } from 'lucide-react';

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
            <a href="#solutions" className="text-gray-700 hover:text-renicaa-green transition-colors font-medium flex items-center">
              Solutions
              <ChevronDown className="ml-1 h-4 w-4" />
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
              <a href="#solutions" className="block px-3 py-2 text-gray-700 hover:text-renicaa-green font-medium flex items-center">
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
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
>>>>>>> 944bf0a80c2e8e9c92a562be37cd27e077726548
};

export default Header;
