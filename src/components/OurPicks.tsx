import React, { useRef } from "react";
import SectionHeading from "./SectionHeading";
import SectionButton from "./SectionButton";

const picks = [
	{
		name: "Tote Bag",
		img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Organizer",
		img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Backpack",
		img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Cosmetic Case",
		img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
	},
];

const OurPicks = () => {
	const listRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		if (listRef.current) {
			const scrollAmount = 240; // width of card + gap
			listRef.current.scrollBy({
				left: direction === "left" ? -scrollAmount : scrollAmount,
				behavior: "smooth",
			});
		}
	};

	return (
		<section className="py-16 bg-background w-full">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start px-4">
				{/* Left: Heading & Button */}
				<div className="w-full md:w-1/3 mb-8 md:mb-0 md:pr-12 flex flex-col items-start justify-center">
					<SectionHeading>
						Our{" "}
						<span className="text-renicaa-green">Picks</span>
					</SectionHeading>
					<p className="text-xl text-muted-foreground mb-8">
						Discover our handpicked selection of gifts that are sure to delight
						and inspire. Each item is thoughtfully curated to make every occasion
						memorable.
					</p>
					<SectionButton href="/catalog">EXPLORE NOW</SectionButton>
				</div>
				{/* Right: Horizontal Product List with Arrows */}
				<div className="w-full md:w-2/3 relative flex items-center">
					{/* Left Arrow */}
					<button
						onClick={() => scroll("left")}
						className="absolute left-0 z-10 bg-background rounded-full shadow p-2 hover:bg-accent transition hidden md:block"
						style={{ top: "40%" }}
						aria-label="Scroll left"
					>
						<svg width="32" height="32" fill="none" viewBox="0 0 24 24">
							<path
								d="M15 18l-6-6 6-6"
								stroke="#333"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
					{/* Product List */}
					<div
						ref={listRef}
						className="flex gap-8 overflow-x-auto scrollbar-hide pl-10 pr-10"
						style={{ scrollBehavior: "smooth" }}
					>
						{picks.map((item) => (
							<div
								key={item.name}
								className="min-w-[220px] flex-shrink-0 flex flex-col items-center"
							>
								<div className="flex items-center justify-center w-[220px] h-[320px] mb-4">
									<img
										src={item.img}
										alt={item.name}
										className="object-cover w-[180px] h-[260px] border-0"
									/>
								</div>
								<div className="text-lg font-medium text-center">
									{item.name}
								</div>
							</div>
						))}
					</div>
					{/* Right Arrow */}
					<button
						onClick={() => scroll("right")}
						className="absolute right-0 z-10 bg-background rounded-full shadow p-2 hover:bg-accent transition hidden md:block"
						style={{ top: "40%" }}
						aria-label="Scroll right"
					>
						<svg width="32" height="32" fill="none" viewBox="0 0 24 24">
							<path
								d="M9 6l6 6-6 6"
								stroke="#333"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>
			</div>
			{/* Hide scrollbar utility */}
			<style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
		</section>
	);
};

export default OurPicks;