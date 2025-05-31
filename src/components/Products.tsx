import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const products = [
    {
        name: 'TOTE BAGS',
        img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=300&q=80',
    },
    {
        name: 'CROSSBODY BAGS',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80',
    },
    {
        name: 'BACKPACKS',
        img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300&q=80',
    },
    {
        name: 'MESSENGER BAGS',
        img: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=300&q=80',
    },
    {
        name: 'WALLETS',
        img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=300&q=80',
    },
    {
        name: 'DUFFLE BAGS',
        img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=300&q=80',
    },
    {
        name: 'POUCHES',
        img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300&q=80',
    },
];

const Products = () => (
    <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center mb-4 text-renicaa-green">
                FESTIVE GIFTS
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-8">
                Explore our exclusive festive gift collection for every celebration.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-8 mb-8">
                {products.map((product) => (
                    <div key={product.name} className="flex flex-col items-center">
                        <img
                            src={product.img}
                            alt={product.name}
                            className="h-32 object-contain mb-4"
                        />
                        <div className="font-bold text-lg text-center">
                            {product.name}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <a
                    href="/catalog"
                    className="px-8 py-3 bg-renicaa-green text-white font-semibold rounded-lg shadow hover:bg-renicaa-green-dark transition"
                >
                    Explore
                </a>
            </div>
        </div>
    </section>
);

export default Products;
