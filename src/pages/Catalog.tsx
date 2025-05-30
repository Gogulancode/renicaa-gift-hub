
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Star, Search, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Tech Accessories', 'Wellness', 'Gourmet', 'Executive', 'Apparel', 'Home & Office'];

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$299",
      originalPrice: "$399",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      category: "Tech Accessories",
      rating: 4.8,
      reviews: 124,
      tag: "Best Seller"
    },
    {
      id: 2,
      name: "Executive Leather Portfolio",
      price: "$189",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
      category: "Executive",
      rating: 4.9,
      reviews: 89,
      tag: "Premium"
    },
    {
      id: 3,
      name: "Wellness Spa Kit",
      price: "$149",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      category: "Wellness",
      rating: 4.7,
      reviews: 156,
      tag: "Popular"
    },
    {
      id: 4,
      name: "Gourmet Coffee Collection",
      price: "$79",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
      category: "Gourmet",
      rating: 4.6,
      reviews: 203
    },
    {
      id: 5,
      name: "Smart Watch Pro",
      price: "$349",
      originalPrice: "$449",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      category: "Tech Accessories",
      rating: 4.9,
      reviews: 167,
      tag: "Sale"
    },
    {
      id: 6,
      name: "Luxury Desk Organizer",
      price: "$129",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      category: "Home & Office",
      rating: 4.5,
      reviews: 98
    },
    {
      id: 7,
      name: "Premium Polo Shirt Set",
      price: "$159",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
      category: "Apparel",
      rating: 4.7,
      reviews: 142
    },
    {
      id: 8,
      name: "Artisan Chocolate Box",
      price: "$99",
      image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400&h=300&fit=crop",
      category: "Gourmet",
      rating: 4.8,
      reviews: 78,
      tag: "New"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-renicaa-green to-renicaa-green-dark text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Gift <span className="text-renicaa-gold">Catalog</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
                Discover our curated collection of premium corporate gifts
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for gifts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full bg-white/10 border-white/20 text-white placeholder-gray-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-renicaa-green hover:bg-renicaa-green-dark" 
                    : "border-renicaa-green text-renicaa-green hover:bg-renicaa-green hover:text-white"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Results Count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
              <Button variant="outline" className="border-renicaa-green text-renicaa-green">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="outline" className="bg-white/90 backdrop-blur-sm">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    {product.tag && (
                      <div className="absolute top-2 left-2">
                        <Badge className={`${
                          product.tag === 'Sale' ? 'bg-red-500' :
                          product.tag === 'New' ? 'bg-blue-500' :
                          product.tag === 'Best Seller' ? 'bg-orange-500' :
                          'bg-renicaa-green'
                        } text-white`}>
                          {product.tag}
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-renicaa-gold fill-current" />
                        <span className="text-sm text-gray-600 ml-1">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-renicaa-green">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                        )}
                      </div>
                      <Button size="sm" className="bg-renicaa-green hover:bg-renicaa-green-dark">
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button className="bg-renicaa-green hover:bg-renicaa-green-dark text-white px-8 py-3">
                Load More Products
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
