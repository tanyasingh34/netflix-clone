"use client";

interface FeatureSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function FeatureSection({
  title,
  description,
  imageUrl,
  imageAlt,
  reverse = false,
}: FeatureSectionProps) {
  return (
    <div className="w-full py-16 border-t-8 border-[#333] bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">{title}</h2>
            <p className="text-lg md:text-xl text-white">{description}</p>
          </div>

          <div className="flex-1 relative">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-auto rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
