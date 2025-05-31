import React from "react";
import SectionHeading from "@/components/SectionHeading";
import SectionButton from "./SectionButton";

const instagramPosts = [
  "https://picsum.photos/id/1011/200/200",
  "https://picsum.photos/id/1012/200/200",
  "https://picsum.photos/id/1015/200/200",
  "https://picsum.photos/id/1016/200/200",
  "https://picsum.photos/id/1021/200/200",
  "https://picsum.photos/id/1025/200/200",
];

const Instagram = () => (
  <section className="py-12 bg-accent">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <SectionHeading>Follow Us on Instagram</SectionHeading>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {instagramPosts.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt={`Instagram post ${idx + 1}`}
            className="rounded-lg shadow hover:scale-105 transition-transform"
          />
        ))}
      </div>
      <SectionButton
        href="https://instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6"
      >
        View More on Instagram
      </SectionButton>
    </div>
  </section>
);

export default Instagram;