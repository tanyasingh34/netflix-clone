"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

interface Movie {
  id: number;
  title: string;
  imageUrl: string;
}

export default function TrendingRow() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const trendingMovies: Movie[] = [
    {
      id: 1,
      title: "The Electric State",
      imageUrl: "https://ext.same-assets.com/3460634428/902179494.webp"
    },
    {
      id: 2,
      title: "Counterattack",
      imageUrl: "https://ext.same-assets.com/3181896571/3565132217.webp"
    },
    {
      id: 3,
      title: "American Murder: Gabby Petito",
      imageUrl: "https://ext.same-assets.com/590763568/2222740576.webp"
    },
    {
      id: 4,
      title: "Beauty in Black",
      imageUrl: "https://ext.same-assets.com/1746487497/1638390458.webp"
    },
    {
      id: 5,
      title: "Cobra Kai",
      imageUrl: "https://ext.same-assets.com/2607715127/2264357251.webp"
    },
    {
      id: 6,
      title: "Squid Game",
      imageUrl: "https://ext.same-assets.com/3710886463/369097521.webp"
    },
    {
      id: 7,
      title: "Back in Action",
      imageUrl: "https://ext.same-assets.com/1740635304/3879380622.webp"
    },
    {
      id: 8,
      title: "Zero Day",
      imageUrl: "https://ext.same-assets.com/1931562373/1941356161.webp"
    },
    {
      id: 9,
      title: "Adolescence",
      imageUrl: "https://ext.same-assets.com/187166085/3228216320.webp"
    },
    {
      id: 10,
      title: "Running Point",
      imageUrl: "https://ext.same-assets.com/3887350526/1832436254.webp"
    }
  ];

  const handleClick = (direction: "left" | "right") => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="h-40 space-y-0.5 md:space-y-2 md:pb-12 bg-black">
      <h2 className="w-full text-xl md:text-2xl font-semibold text-white pl-4 md:pl-12">
        Trending Now
      </h2>

      <div className="group relative md:ml-2">
        <ChevronLeft
          className={`absolute z-10 left-2 top-0 bottom-0 m-auto h-8 w-8 cursor-pointer bg-black/50 hover:bg-black/70 rounded-full text-white opacity-0 transition group-hover:opacity-100 ${!isMoved && 'hidden'}`}
          onClick={() => handleClick("left")}
        />

        <div
          ref={rowRef}
          className="flex items-center space-x-2 overflow-x-scroll scrollbar-hide md:pl-10 py-4 md:space-x-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {trendingMovies.map((movie) => (
            <div
              key={movie.id}
              className="relative cursor-pointer h-28 min-w-[180px] md:h-36 md:min-w-[260px] rounded-sm overflow-hidden transition-transform duration-200 ease-out hover:scale-105"
            >
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-2 pt-6 pb-2">
                <p className="text-white font-semibold truncate">{movie.title}</p>
              </div>
            </div>
          ))}
        </div>

        <ChevronRight
          className="absolute z-10 right-2 top-0 bottom-0 m-auto h-8 w-8 cursor-pointer bg-black/50 hover:bg-black/70 rounded-full text-white opacity-0 transition group-hover:opacity-100"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
