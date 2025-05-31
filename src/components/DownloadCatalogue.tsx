import React from "react";
import SectionButton from "./SectionButton";
import SectionHeading from "./SectionHeading";

const DownloadCatalogue = () => (
  <section className="py-16 bg-background w-full">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4">
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
          alt="Gift Catalogue Preview"
          className="max-w-full h-auto"
        />
      </div>
      {/* Text Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:pl-16">
        <SectionHeading className="text-center md:text-left">
          <span className="text-renicaa-green font-bold">Crafted in India</span>, Inspired Globally
        </SectionHeading>
        <p className="text-xl text-muted-foreground mb-8 text-center md:text-left max-w-xl">
          Discover our curated catalogue of premium corporate gifts—thoughtfully designed, expertly crafted in India, and perfect for making a lasting impression on every occasion. Download now to explore exclusive bundles, new arrivals, and bestsellers for your team and clients.
        </p>
        <SectionButton href="/catalogue.pdf" target="_blank" rel="noopener noreferrer">
          DOWNLOAD CATALOGUE
        </SectionButton>
      </div>
    </div>
  </section>
);

export default DownloadCatalogue;