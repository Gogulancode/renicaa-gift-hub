import React from "react";
import SectionHeading from "./SectionHeading";
import SectionButton from "./SectionButton";

const FestiveGift = () => (
  <section className="py-12 bg-background w-full">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4">
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=700&q=80"
          alt="Corporate Festive Gift"
          className="rounded-lg shadow-lg max-w-full h-auto border-0"
        />
      </div>
      {/* Text Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:pl-16">
        <SectionHeading className="text-center md:text-left">
          Festive Gift <span className="text-renicaa-green">Bundles</span>
        </SectionHeading>
        <p className="text-lg text-muted-foreground mb-8 text-center md:text-left max-w-xl">
          How about ditching the customary gifts for meaningful and refreshing ones
          that your loved ones will use for a long time to come?
          <br />
          <br />
          Choose from our customised Curated Gifting Bundles and earn your loved one’s true
          appreciation.
        </p>
        <SectionButton href="/catalog">EXPLORE</SectionButton>
      </div>
    </div>
  </section>
);

export default FestiveGift;