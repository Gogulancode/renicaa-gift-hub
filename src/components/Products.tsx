
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Star } from 'lucide-react';

const Products = () => {
  const occasionGifts = [
    {
      id: 1,
      name: "Executive Gift Set",
      price: "$149",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
      category: "Occasion Gifts",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Premium Wellness Kit",
      price: "$89",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      category: "Occasion Gifts",
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: "Tech Accessories Bundle",
      price: "$199",
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=300&fit=crop",
      category: "Occasion Gifts",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: "Gourmet Food Hamper",
      price: "$129",
      image: "https://images.unsplash.com/photo-1543257580-7269da773bf5?w=400&h=300&fit=crop",
      category: "Occasion Gifts",
      rating: 4.8,
      reviews: 203
    }
  ];

  const holidayGifts = [
    {
      id: 5,
      name: "Holiday Celebration Box",
      price: "$179",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      category: "Holiday Gifts",
      rating: 4.9,
      reviews: 167
    },
    {
      id: 6,
      name: "Winter Warmth Package",
      price: "$99",
      image: "https://images.unsplash.com/photo-1513734394971-95c8f20b5d24?w=400&h=300&fit=crop",
      category: "Holiday Gifts",
      rating: 4.6,
      reviews: 98
    },
    {
      id: 7,
      name: "Festive Treats Collection",
      price: "$159",
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=300&fit=crop",
      category: "Holiday Gifts",
      rating: 4.8,
      reviews: 142
    },
    {
      id: 8,
      name: "New Year Success Kit",
      price: "$219",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      category: "Holiday Gifts",
      rating: 4.9,
      reviews: 78
    }
  ];

  const ProductCard = ({ product }: { product: any }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden">
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
        <div className="absolute top-2 left-2">
          <span className="bg-renicaa-green text-white px-2 py-1 rounded-full text-xs font-medium">
            {product.category}
          </span>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-renicaa-gold fill-current" />
            <span className="text-sm text-gray-600 ml-1">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-renicaa-green">{product.price}</span>
          <Button size="sm" className="bg-renicaa-green hover:bg-renicaa-green-dark">
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Occasion Gifts */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-renicaa-green">Occasion</span> Gifts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perfect gifts for every business milestone, achievement, and special moment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {occasionGifts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button className="bg-renicaa-green hover:bg-renicaa-green-dark text-white px-8 py-3">
              View All Occasion Gifts
            </Button>
          </div>
        </div>

        {/* Holiday Gifts */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-renicaa-green">Holiday</span> Gifts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrate seasons and holidays with thoughtfully curated gift collections
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {holidayGifts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button className="bg-renicaa-green hover:bg-renicaa-green-dark text-white px-8 py-3">
              View All Holiday Gifts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
