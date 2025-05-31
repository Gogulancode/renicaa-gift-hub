import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, Mail, Truck, Info, Shield, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Update the product interface with colors
const product = {
  id: 1,
  name: 'Timbuk2 Tuck Laptop Backpack',
  brand: 'Timbuk2',
  price: '$89.00',
  originalPrice: '$99.00',
  sku: 'TB2-84896',
  availability: 'In Stock',
  image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
  ],
  rating: 4.8,
  reviews: 124,
  tag: 'Best Seller',
  description: `The Timbuk2 Tuck Laptop Backpack is a streamlined, roll-top backpack for everyday use. Features a padded laptop compartment, water-resistant fabric, and multiple pockets for organization. Perfect for work, travel, or gifting.`,
  features: [
    'Fits up to 15" laptops',
    'Water-resistant polyester',
    'Roll-top closure with secure buckle',
    'Padded shoulder straps',
    'Side pockets for water bottles',
    'Custom embroidery available',
  ],
  technicalDetails: [
    { label: 'Material', value: 'Polyester' },
    { label: 'Dimensions', value: '18" x 12" x 6"' },
    { label: 'Weight', value: '1.2 lbs' },
    { label: 'Laptop Compartment', value: 'Up to 15"' },
    { label: 'Color Options', value: 'Black, Navy, Grey' },
  ],
  shipping: `Ships within 2-3 business days. Free shipping on orders above $50. Custom embroidery may add 2-4 days to processing time.`,
  colors: [
    { name: 'Eco Black', hex: '#2d2d2d' },
    { name: 'Navy', hex: '#1B2A4A' },
    { name: 'Grey', hex: '#767676' }
  ],
  selectedColor: 'Eco Black', // Default selected color
};

const reviews = [
  {
    user: 'John Doe',
    rating: 5,
    comment: 'Excellent quality and fast delivery. The embroidery looks great!',
    date: '2024-05-01',
  },
  {
    user: 'Jane Smith',
    rating: 4,
    comment: 'Very practical and stylish. Would recommend for corporate gifting.',
    date: '2024-04-20',
  },
];

const tabList = [
  { key: 'features', label: 'Key Features' },
  { key: 'description', label: 'Product Description' },
  { key: 'technical', label: 'Technical Details' },
  { key: 'shipping', label: 'Shipping & Processing' },
];

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [activeTab, setActiveTab] = useState('features');
  const [selectedColor, setSelectedColor] = useState(product.selectedColor);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-10">
        {/* Product Overview Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column - Gallery */}
            <div>
              <Card className="overflow-hidden shadow-lg border-border mb-4">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
              </Card>
              <div className="flex gap-3">
                {product.gallery.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt=""
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 object-cover rounded cursor-pointer hover:ring-2 hover:ring-renicaa-gold transition ${
                      selectedImage === img ? 'ring-2 ring-renicaa-gold' : 'border border-border'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <Badge className="bg-[#ff9800] text-white font-medium px-3">{product.tag}</Badge>
                <span className="text-[#5c6b7a]">{product.brand}</span>
              </div>

              <h1 className="text-3xl font-bold text-[#2d3846] mb-4">{product.name}</h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-[#ff9800] fill-current" />
                  <span className="ml-1 font-semibold">{product.rating}</span>
                </div>
                <span className="text-[#5c6b7a]">({product.reviews} reviews)</span>
              </div>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-bold text-[#2d3846]">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-[#5c6b7a] line-through">{product.originalPrice}</span>
                )}
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#5c6b7a]">SKU: {product.sku}</span>
                <span className="px-2 py-1 bg-[#e8f5e9] text-[#2e7d32] text-sm rounded">
                  {product.availability}
                </span>
              </div>

              {/* Color Options */}
              <div className="mb-6">
                <div className="font-semibold text-[#2d3846] mb-2">CHOOSE COLOR: {selectedColor}</div>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`relative w-10 h-10 rounded-full p-0.5 ${
                        selectedColor === color.name ? 'ring-2 ring-renicaa-gold' : ''
                      }`}
                    >
                      <span
                        className="block w-full h-full rounded-full border-2 border-white"
                        style={{ backgroundColor: color.hex }}
                      />
                      {selectedColor === color.name && (
                        <span className="absolute inset-0 rounded-full border-2 border-renicaa-gold" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <Button 
                  size="lg" 
                  className="w-full bg-renicaa-green hover:bg-renicaa-green-dark text-white font-semibold"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Enquire Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full border-renicaa-green text-renicaa-green hover:bg-renicaa-green hover:text-white"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Wishlist
                </Button>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#f8fafc] p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Truck className="h-6 w-6 text-[#ff9800]" />
                    <div>
                      <p className="font-semibold text-[#2d3846]">Free Shipping</p>
                      <p className="text-sm text-[#5c6b7a]">On all orders above $50</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fafc] p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-[#ff9800]" />
                    <div>
                      <p className="font-semibold text-[#2d3846]">Secure Payments</p>
                      <p className="text-sm text-[#5c6b7a]">100% payment protection</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fafc] p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Info className="h-6 w-6 text-[#ff9800]" />
                    <div>
                      <p className="font-semibold text-[#2d3846]">Need Help?</p>
                      <p className="text-sm text-[#5c6b7a]">Contact our support team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="border-t border-b border-gray-200 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center md:justify-start -mb-px">
              {tabList.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-4 px-8 font-semibold text-base border-b-2 transition-colors ${
                    activeTab === tab.key
                      ? 'border-[#ff9800] text-[#ff9800]'
                      : 'border-transparent text-[#5c6b7a] hover:text-[#2d3846]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-3xl">
            {activeTab === 'features' && (
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#5c6b7a]">
                    <span className="w-2 h-2 bg-[#ff9800] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}
            {activeTab === 'description' && (
              <p className="text-muted-foreground">{product.description}</p>
            )}
            {activeTab === 'technical' && (
              <table className="w-full text-left text-muted-foreground">
                <tbody>
                  {product.technicalDetails.map((row, idx) => (
                    <tr key={idx}>
                      <td className="py-1 pr-4 font-semibold text-foreground">{row.label}</td>
                      <td className="py-1">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {activeTab === 'shipping' && (
              <div className="text-muted-foreground">{product.shipping}</div>
            )}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <User className="h-10 w-10 text-renicaa-green bg-[#e8f5e9] rounded-full p-2" />
                  <div>
                    <div className="font-semibold text-[#2d3846]">{review.user}</div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? 'text-[#ff9800] fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-xs text-[#5c6b7a]">{review.date}</span>
                    </div>
                  </div>
                </div>
                <div className="italic text-[#5c6b7a] text-base leading-relaxed">
                  “{review.comment}”
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Products Section */}
        <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Recommended Products</h2>
          <div className="flex gap-6 overflow-x-auto pb-2">
            {[1, 2, 3, 4].map((id) => (
              <div
                key={id}
                className="min-w-[220px] bg-white border border-gray-100 rounded-xl shadow-sm p-4 flex flex-col"
              >
                <img
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
                  alt="Recommended"
                  className="w-full h-36 object-cover rounded mb-3"
                />
                <div className="font-semibold text-[#2d3846] mb-1">Sample Product {id}</div>
                <div className="text-[#5c6b7a] text-sm mb-2">Brand Name</div>
                <div className="font-bold text-renicaa-green mb-2">$49.00</div>
                <Button size="sm" className="bg-renicaa-green hover:bg-renicaa-green-dark text-white">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;