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

export default Brands;
