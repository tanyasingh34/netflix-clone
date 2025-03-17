"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-colors duration-300 ${
        isScrolled ? "bg-background" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-12 py-3">
        <div className="flex items-center gap-6">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="112"
              height="30"
              viewBox="0 0 1024 276.742"
              className="text-primary w-20 md:w-28"
            >
              <path
                d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 74.59 30.27-74.59h47.295z"
                fill="currentColor"
              />
            </svg>
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-sm font-medium text-white hover:text-gray-300">
              Home
            </Link>
            <Link href="/tv-shows" className="text-sm font-medium text-gray-300 hover:text-white">
              TV Shows
            </Link>
            <Link href="/movies" className="text-sm font-medium text-gray-300 hover:text-white">
              Movies
            </Link>
            <Link href="/new-popular" className="text-sm font-medium text-gray-300 hover:text-white">
              New & Popular
            </Link>
            <Link href="/my-list" className="text-sm font-medium text-gray-300 hover:text-white">
              My List
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-primary text-white px-4 py-1 text-sm rounded-sm hidden md:block">
            Sign In
          </button>
          <div className="flex items-center gap-1 text-white">
            <span className="text-sm hidden md:inline">English</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  );
}
