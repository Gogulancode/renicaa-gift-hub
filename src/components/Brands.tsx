<<<<<<< HEAD
import React from "react";

const brands = [
    {
        name: "Fancode",
        logo: "https://images.fancode.com/skillup-uploads/fc-web-logo/fc_logo_white_bg.svg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvZmMtd2ViLWxvZ28vZmNfbG9nb193aGl0ZV9iZy5zdmciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOiJ0cmFuc3BhcmVudCIsIndpZHRoIjoxMzAsImhlaWdodCI6NDB9LCJ3ZWJwIjp7InF1YWxpdHkiOjYwLCJsb3NzbGVzcyI6ZmFsc2V9fSwib3V0cHV0Rm9ybWF0Ijoid2VicCJ9",
    },
    {
        name: "Beauty Garage",
        logo: "https://www.beautygarage.com/cdn/shop/files/logo-beauty-garage-professional.svg?v=1736847494&width=500",
    },
    { name: "Microlabs", logo: "https://www.microlabsltd.com/assets/custom/new_logo.jpg" },
    { name: "Google", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg" },
    { name: "Spotify", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/spotify.svg" },
    { name: "TED", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ted.svg" },
    { name: "CocaCola", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cocacola.svg" },
    { name: "Netflix", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/netflix.svg" },
    { name: "Adidas", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adidas.svg" },
];

const Brands = () => (
    <section className="py-12 bg-accent w-full">
        <div className="max-w-7xl mx-auto px-0">
            <h2 className="text-4xl font-extrabold text-center mb-4">
                Trusted By Over{" "}
                <span className="text-renicaa-green">100+</span> Brands
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-10">
                Join the growing list of leading brands who trust us for their corporate
                gifting and partnership needs.
            </p>
        </div>
        <div className="w-full overflow-x-auto">
            <div className="flex flex-nowrap justify-center items-center gap-12 min-w-max py-4 transition-colors duration-300 hover:bg-accent">
                {brands.map((brand) => (
                    <img
                        key={brand.name}
                        src={brand.logo}
                        alt={brand.name}
                        className="h-10 object-contain"
                        style={{ maxWidth: 90 }}
                    />
                ))}
            </div>
        </div>
    </section>
);
=======

const Brands = () => {
  const brands = [
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=200&h=100&fit=crop" },
    { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=100&fit=crop" },
    { name: "Apple", logo: "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=200&h=100&fit=crop" },
    { name: "Amazon", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&h=100&fit=crop" },
    { name: "Netflix", logo: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=200&h=100&fit=crop" },
    { name: "Tesla", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-renicaa-green">Leading Brands</span>
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of companies who trust Renicaa for their corporate gifting needs
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
>>>>>>> 944bf0a80c2e8e9c92a562be37cd27e077726548

export default Brands;
