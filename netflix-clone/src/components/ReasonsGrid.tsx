"use client";

import { Tablet, DownloadCloud, Tv, User2 } from "lucide-react";

interface ReasonCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ReasonCard({ title, description, icon }: ReasonCardProps) {
  return (
    <div className="bg-[#121212] rounded-sm p-6 hover:bg-[#1a1a1a] transition-colors">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-white font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}

export default function ReasonsGrid() {
  const reasons = [
    {
      title: "Enjoy on your TV",
      description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      icon: <Tv className="h-8 w-8" />
    },
    {
      title: "Download your shows to watch offline",
      description: "Save your favorites easily and always have something to watch.",
      icon: <DownloadCloud className="h-8 w-8" />
    },
    {
      title: "Watch everywhere",
      description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      icon: <Tablet className="h-8 w-8" />
    },
    {
      title: "Create profiles for kids",
      description: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
      icon: <User2 className="h-8 w-8" />
    }
  ];

  return (
    <div className="w-full py-12 border-t-8 border-[#333] bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          More Reasons to Join
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={index}
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
