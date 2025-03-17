"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(https://ext.same-assets.com/1362479311/3741106983.jpeg)`
        }}
      />

      <div className="absolute inset-0 netflix-gradient z-20" />

      <div className="relative z-30 text-white max-w-5xl mx-auto px-4 h-full flex flex-col items-center justify-center text-center gap-5">
        <h1 className="text-4xl md:text-5xl font-bold">Unlimited movies, TV shows, and more</h1>
        <h2 className="text-xl md:text-2xl">Starts at $7.99. Cancel anytime.</h2>

        <div className="mt-5 w-full max-w-lg">
          <p className="text-lg mb-4">Ready to watch? Enter your email to create or restart your membership.</p>

          <div className="flex flex-col md:flex-row gap-2">
            <input
              type="email"
              className="netflix-input flex-grow"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="netflix-button flex items-center justify-center">
              Get Started
              <ChevronRight className="h-5 w-5 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
