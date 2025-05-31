<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
=======

import { useState } from 'react';
>>>>>>> 944bf0a80c2e8e9c92a562be37cd27e077726548
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
<<<<<<< HEAD
import { Heart, Mail, Star, Search, Filter, X, Info } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const categories = [
	{
		name: 'Totes',
		subcategories: [
			{ name: 'Everyday Totes' },
			{ name: 'Sport Totes' },
			{ name: 'Travel Totes' },
			{ name: 'Beach Totes' },
		],
	},
	{
		name: 'Cross Bodies',
		subcategories: [
			{ name: 'Phone Cross Body bags' },
			{ name: 'Buckle String Strap' },
			{ name: 'Detachable Strip' },
			{
				name: 'Yoga Mat Holders',
				subsub: [
					{ name: 'Drawstring Yoga Bag' },
					{ name: 'Cross-body Yoga Bag' },
				],
			},
		],
	},
	{
		name: 'Back Packs',
		subcategories: [
			{ name: 'Sports Wear' },
			{ name: 'Everyday Wear' },
		],
	},
	{
		name: 'Accessories',
		subcategories: [
			{ name: 'Cosmetic Cases' },
			{ name: 'Mini Cosmetic Cases' },
			{ name: 'Stationary Pouches' },
			{ name: 'Aesthetic Mesh Holder Pouches' },
			{ name: 'Coin Pouches' },
			{ name: 'Mini-jewellary case' },
			{
				name: 'Hats',
				subsub: [
					{ name: 'Ball Caps' },
					{ name: 'Bucket Hats' },
				],
			},
		],
	},
	{
		name: 'Organizers',
		subcategories: [
			{ name: 'Card Cases' },
			{ name: 'Luggage Tags' },
			{ name: 'Passport Holders' },
			{ name: 'Gadget organizer' },
			{ name: 'Aesthetic file folder' },
			{ name: 'Canvas big inserts' },
			{ name: 'Sunglass cases' },
		],
	},
];

const products = [
	// Totes
	{
		id: 1,
		name: 'Everyday Tote',
		price: '$49',
		image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
		category: 'Totes',
		subcategory: 'Everyday Totes',
		occasion: 'birthday',
		rating: 4.8,
		reviews: 124,
		tag: 'Best Seller',
	},
	{
		id: 2,
		name: 'Sport Tote',
		price: '$39',
		image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
		category: 'Totes',
		subcategory: 'Sport Totes',
		occasion: 'corporate',
		rating: 4.5,
		reviews: 80,
		tag: 'Popular',
	},
	{
		id: 3,
		name: 'Travel Tote',
		price: '$59',
		image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
		category: 'Totes',
		subcategory: 'Travel Totes',
		occasion: 'wedding',
		rating: 4.7,
		reviews: 60,
		tag: 'New',
	},
	{
		id: 4,
		name: 'Beach Tote',
		price: '$29',
		image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
		category: 'Totes',
		subcategory: 'Beach Totes',
		occasion: 'casual',
		rating: 4.6,
		reviews: 45,
		tag: 'Sale',
	},

	// Cross Bodies
	{
		id: 5,
		name: 'Phone Cross Body Bag',
		price: '$35',
		image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
		category: 'Cross Bodies',
		subcategory: 'Phone Cross Body bags',
		occasion: 'birthday',
		rating: 4.3,
		reviews: 30,
		tag: 'Popular',
	},
	{
		id: 6,
		name: 'Buckle String Strap',
		price: '$42',
		image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
		category: 'Cross Bodies',
		subcategory: 'Buckle String Strap',
		occasion: 'anniversary',
		rating: 4.6,
		reviews: 25,
		tag: 'New',
	},
	{
		id: 7,
		name: 'Detachable Strip Bag',
		price: '$48',
		image: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&w=400&q=80',
		category: 'Cross Bodies',
		subcategory: 'Detachable Strip',
		occasion: 'corporate',
		rating: 4.4,
		reviews: 20,
		tag: 'Best Seller',
	},
	{
		id: 8,
		name: 'Yoga Mat Holder Bag',
		price: '$37',
		image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
		category: 'Cross Bodies',
		subcategory: 'Yoga Mat Holders',
		subsub: 'Drawstring Yoga Bag',
		occasion: 'wedding',
		rating: 4.7,
		reviews: 15,
		tag: 'Popular',
	},

	// Back Packs
	{
		id: 9,
		name: 'Sports Wear Backpack',
		price: '$69',
		image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d4c0?auto=format&fit=crop&w=400&q=80',
		category: 'Back Packs',
		subcategory: 'Sports Wear',
		occasion: 'birthday',
		rating: 4.8,
		reviews: 40,
		tag: 'Best Seller',
	},
	{
		id: 10,
		name: 'Everyday Wear Backpack',
		price: '$59',
		image: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&w=400&q=80',
		category: 'Back Packs',
		subcategory: 'Everyday Wear',
		occasion: 'casual',
		rating: 4.6,
		reviews: 35,
		tag: 'Popular',
	},

	// Accessories
	{
		id: 11,
		name: 'Cosmetic Case',
		price: '$19',
		image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
		category: 'Accessories',
		subcategory: 'Cosmetic Cases',
		occasion: 'birthday',
		rating: 4.5,
		reviews: 50,
		tag: 'New',
	},
	{
		id: 12,
		name: 'Mini Cosmetic Case',
		price: '$15',
		image: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&w=400&q=80',
		category: 'Accessories',
		subcategory: 'Mini Cosmetic Cases',
		occasion: 'anniversary',
		rating: 4.3,
		reviews: 30,
		tag: 'Sale',
	},
	{
		id: 13,
		name: 'Stationary Pouch',
		price: '$12',
		image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d4c0?auto=format&fit=crop&w=400&q=80',
		category: 'Accessories',
		subcategory: 'Stationary Pouches',
		occasion: 'corporate',
		rating: 4.6,
		reviews: 25,
		tag: 'Best Seller',
	},
	{
		id: 14,
		name: 'Aesthetic Mesh Holder Pouch',
		price: '$22',
		image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
		category: 'Accessories',
		subcategory: 'Aesthetic Mesh Holder Pouches',
		occasion: 'wedding',
		rating: 4.7,
		reviews: 20,
		tag: 'Popular',
	},
	{
		id: 15,
		name: 'Coin Pouch',
		price: '$8',
		image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
		category: 'Accessories',
		subcategory: 'Coin Pouches',
		occasion: 'casual',
		rating: 4.4,
		reviews: 15,
		tag: 'New',
	},
	{
		id: 16,
		name: 'Mini-jewellary Case',
		price: '$25',
		image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
		category: 'Accessories',
		subcategory: 'Mini-jewellary case',
		occasion: 'birthday',
		rating: 4.8,
		reviews: 10,
		tag: 'Sale',
	},
	{
		id: 17,
		name: 'Ball Cap',
		price: '$27',
		image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
		category: 'Accessories',
		subcategory: 'Hats',
		subsub: 'Ball Caps',
		occasion: 'anniversary',
		rating: 4.6,
		reviews: 5,
		tag: 'Popular',
	},
	{
		id: 18,
		name: 'Bucket Hat',
		price: '$32',
		image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d4c0?auto=format&fit=crop&w=400&q=80',
		category: 'Accessories',
		subcategory: 'Hats',
		subsub: 'Bucket Hats',
		occasion: 'corporate',
		rating: 4.7,
		reviews: 8,
		tag: 'New',
	},

	// Organizers
	{
		id: 19,
		name: 'Card Case',
		price: '$15',
		image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
		category: 'Organizers',
		subcategory: 'Card Cases',
		occasion: 'birthday',
		rating: 4.5,
		reviews: 50,
		tag: 'Best Seller',
	},
	{
		id: 20,
		name: 'Luggage Tag',
		price: '$10',
		image: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&w=400&q=80',
		category: 'Organizers',
		subcategory: 'Luggage Tags',
		occasion: 'anniversary',
		rating: 4.3,
		reviews: 30,
		tag: 'Popular',
	},
	{
		id: 21,
		name: 'Passport Holder',
		price: '$25',
		image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
		category: 'Organizers',
		subcategory: 'Passport Holders',
		occasion: 'corporate',
		rating: 4.6,
		reviews: 25,
		tag: 'New',
	},
	{
		id: 22,
		name: 'Gadget Organizer',
		price: '$35',
		image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
		category: 'Organizers',
		subcategory: 'Gadget organizer',
		occasion: 'wedding',
		rating: 4.7,
		reviews: 20,
		tag: 'Sale',
	},
	{
		id: 23,
		name: 'Aesthetic File Folder',
		price: '$18',
		image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d4c0?auto=format&fit=crop&w=400&q=80',
		category: 'Organizers',
		subcategory: 'Aesthetic file folder',
		occasion: 'casual',
		rating: 4.4,
		reviews: 15,
		tag: 'Best Seller',
	},
	{
		id: 24,
		name: 'Canvas Big Inserts',
		price: '$22',
		image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
		category: 'Organizers',
		subcategory: 'Canvas big inserts',
		occasion: 'birthday',
		rating: 4.8,
		reviews: 10,
		tag: 'Popular',
	},
	{
		id: 25,
		name: 'Sunglass Case',
		price: '$28',
		image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
		category: 'Organizers',
		subcategory: 'Sunglass cases',
		occasion: 'anniversary',
		rating: 4.6,
		reviews: 5,
		tag: 'New',
	},
];

const priceRanges = [
	{ label: 'Under $25', value: 'under_25' },
	{ label: '$25 - $50', value: '25_50' },
	{ label: '$50 - $100', value: '50_100' },
	{ label: 'Above $100', value: 'above_100' },
];

const occasions = [
	{ label: 'Birthday', value: 'birthday' },
	{ label: 'Anniversary', value: 'anniversary' },
	{ label: 'Wedding', value: 'wedding' },
	{ label: 'Corporate', value: 'corporate' },
	{ label: 'Casual', value: 'casual' },
];

const Catalog = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('All');
	const [selectedSubcategory, setSelectedSubcategory] = useState('');
	const [selectedSubsub, setSelectedSubsub] = useState('');
	const [selectedPrice, setSelectedPrice] = useState('');
	const [selectedOccasion, setSelectedOccasion] = useState('');
	const [showFilters, setShowFilters] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const category = params.get('category');
		if (category) setSelectedCategory(category);
	}, [location.search]);

	const filteredProducts = products.filter((product) => {
		const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
		const matchesSubcategory = !selectedSubcategory || product.subcategory === selectedSubcategory;
		const matchesSubsub = !selectedSubsub || product.subsub === selectedSubsub;
		const matchesOccasion =
			!selectedOccasion || (product.occasion && product.occasion === selectedOccasion);

		return (
			matchesSearch &&
			matchesCategory &&
			matchesSubcategory &&
			matchesSubsub &&
			matchesOccasion
		);
	});

	// Reset subcategory/subsub when category changes
	useEffect(() => {
		setSelectedSubcategory('');
		setSelectedSubsub('');
	}, [selectedCategory]);

	// Reset subsub when subcategory changes
	useEffect(() => {
		setSelectedSubsub('');
	}, [selectedSubcategory]);

	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main>
				{/* Hero Section */}
				<section className="bg-gradient-to-br from-renicaa-green to-renicaa-green-dark text-white py-16">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center">
							<h1 className="text-4xl md:text-5xl font-bold mb-4">
								Gift <span className="text-renicaa-gold">Catalog</span>
							</h1>
							<p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
								Discover our curated collection of premium corporate gifts
							</p>
							{/* Search Bar */}
							<div className="max-w-2xl mx-auto relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
								<Input
									type="text"
									placeholder="Search for gifts..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="pl-10 pr-4 py-3 w-full bg-white/10 border-white/20 text-white placeholder-white/60"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Filters and Products */}
				<section className="py-12">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						{/* Category Filters */}
						<div className="flex flex-wrap gap-2 mb-4 justify-center">
							<Button
								variant={selectedCategory === 'All' ? 'default' : 'outline'}
								onClick={() => setSelectedCategory('All')}
								className={
									selectedCategory === 'All'
										? 'bg-renicaa-green hover:bg-renicaa-green-dark'
										: 'border-renicaa-green text-renicaa-green hover:bg-renicaa-green hover:text-white'
								}
							>
								All
							</Button>
							{categories.map((cat) => (
								<Button
									key={cat.name}
									variant={selectedCategory === cat.name ? 'default' : 'outline'}
									onClick={() => setSelectedCategory(cat.name)}
									className={
										selectedCategory === cat.name
											? 'bg-renicaa-green hover:bg-renicaa-green-dark'
											: 'border-renicaa-green text-renicaa-green hover:bg-renicaa-green hover:text-white'
									}
								>
									{cat.name}
								</Button>
							))}
						</div>

						{/* Results Count and More Filters Button */}
						<div className="flex justify-between items-center mb-6">
							<p className="text-muted-foreground">
								Showing {filteredProducts.length} of {products.length} products
							</p>
							<Button
								variant="outline"
								className="border-renicaa-green text-renicaa-green"
								onClick={() => setShowFilters(true)}
							>
								<Filter className="h-4 w-4 mr-2" />
								More Filters
							</Button>
						</div>

						{/* Products Grid */}
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
							{filteredProducts.map((product) => (
								<Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-border shadow-md overflow-hidden">
									<Link to={`/product/${product.id}`}>
										<div className="relative">
											<img
												src={product.image}
												alt={product.name}
												className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
											/>
											<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
												<Button size="sm" variant="outline" className="bg-background/90 backdrop-blur-sm">
													<Heart className="h-4 w-4" />
												</Button>
											</div>
											{product.tag && (
												<div className="absolute top-2 left-2">
													<Badge
														className={`${
															product.tag === 'Sale'
																? 'bg-red-500'
																: product.tag === 'New'
																? 'bg-blue-500'
																: product.tag === 'Best Seller'
																? 'bg-orange-500'
																: 'bg-renicaa-green'
														} text-white`}
													>
														{product.tag}
													</Badge>
												</div>
											)}
										</div>
									</Link>
									<CardContent className="p-4">
										<Link to={`/product/${product.id}`}>
											<h3 className="font-semibold text-foreground mb-2 hover:underline">{product.name}</h3>
										</Link>
										<div className="flex items-center mb-2">
											<div className="flex items-center">
												<Star className="h-4 w-4 text-renicaa-gold fill-current" />
												<span className="text-sm text-muted-foreground ml-1">
													{product.rating} ({product.reviews})
												</span>
											</div>
										</div>
										<div className="flex items-center justify-between">
											<div className="flex items-center space-x-2">
												<span className="text-xl font-bold text-renicaa-green">{product.price}</span>
												{product.originalPrice && (
													<span className="text-sm text-muted-foreground line-through">
														{product.originalPrice}
													</span>
												)}
											</div>
											<Link to={`/product/${product.id}`}>
												<Button size="sm" className="bg-renicaa-green hover:bg-renicaa-green-dark">
													<Info className="h-4 w-4 mr-1" />
													View Details
												</Button>
											</Link>
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

			{/* More Filters Modal */}
			{showFilters && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
					<div className="bg-background rounded-lg shadow-lg p-6 w-full max-w-lg relative">
						<button
							className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
							onClick={() => setShowFilters(false)}
						>
							<X className="w-6 h-6" />
						</button>
						<h2 className="text-xl font-bold mb-4 text-foreground">More Filters</h2>

						{/* Subcategory Filter */}
						{selectedCategory !== 'All' && (
							<div className="mb-4">
								<div className="font-semibold mb-2 text-foreground">Subcategory</div>
								<div className="flex flex-wrap gap-2">
									{categories.find((cat) => cat.name === selectedCategory)?.subcategories?.map((sub) =>
										<Button
											key={sub.name}
											variant={selectedSubcategory === sub.name ? 'default' : 'outline'}
											onClick={() => {
												setSelectedSubcategory(sub.name);
												setSelectedSubsub('');
											}}
										>
											{sub.name}
										</Button>
									)}
								</div>
							</div>
						)}

						{/* Sub-subcategory Filter */}
						{selectedSubcategory &&
							categories
								.find((cat) => cat.name === selectedCategory)
								?.subcategories?.find((sub) => sub.name === selectedSubcategory)
								?.subsub && (
								<div className="mb-4">
									<div className="font-semibold mb-2 text-foreground">Sub-subcategory</div>
									<div className="flex flex-wrap gap-2">
										{categories
											.find((cat) => cat.name === selectedCategory)
											?.subcategories?.find((sub) => sub.name === selectedSubcategory)
											?.subsub.map((ss) => (
												<Button
													key={ss.name}
													variant={selectedSubsub === ss.name ? 'default' : 'outline'}
													onClick={() => setSelectedSubsub(ss.name)}
												>
													{ss.name}
												</Button>
											))}
									</div>
								</div>
							)}

						{/* Occasion Filter */}
						<div className="mb-4">
							<div className="font-semibold mb-2 text-foreground">Occasion</div>
							<div className="flex flex-wrap gap-2">
								{occasions.map((occ) => (
									<Button
										key={occ.value}
										variant={selectedOccasion === occ.value ? 'default' : 'outline'}
										onClick={() => setSelectedOccasion(occ.value)}
									>
										{occ.label}
									</Button>
								))}
							</div>
						</div>

						<div className="flex justify-end">
							<Button
								variant="outline"
								className="mr-2"
								onClick={() => {
									setSelectedSubcategory('');
									setSelectedSubsub('');
									setSelectedOccasion('');
								}}
							>
								Clear Filters
							</Button>
							<Button onClick={() => setShowFilters(false)}>Apply</Button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
=======
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
>>>>>>> 944bf0a80c2e8e9c92a562be37cd27e077726548
};

export default Catalog;
