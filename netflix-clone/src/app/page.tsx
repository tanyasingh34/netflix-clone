import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import ReasonsGrid from "@/components/ReasonsGrid";
import TrendingRow from "@/components/TrendingRow";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  const features = [
    {
      title: "Enjoy on your TV",
      description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      imageUrl: "https://ext.same-assets.com/2544522226/3875639353.webp",
      imageAlt: "Watch on TV",
      reverse: false
    },
    {
      title: "Download your shows to watch offline",
      description: "Save your favorites easily and always have something to watch.",
      imageUrl: "https://ext.same-assets.com/987044034/3928616399.webp",
      imageAlt: "Download shows",
      reverse: true
    },
    {
      title: "Watch everywhere",
      description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      imageUrl: "https://ext.same-assets.com/1012984697/2084621000.webp",
      imageAlt: "Watch everywhere",
      reverse: false
    },
    {
      title: "Create profiles for kids",
      description: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
      imageUrl: "https://ext.same-assets.com/3918938457/1110368811.webp",
      imageAlt: "Kids profiles",
      reverse: true
    }
  ];

  return (
    <main>
      <Header />
      <Hero />

      <div className="bg-black pt-16">
        <div className="flex justify-center items-center mb-4 text-white">
          <div className="bg-[#121212] text-white px-5 py-2 rounded-full flex items-center">
            <span className="mr-2">The Netflix you love for just $7.99.</span>
            <a href="#" className="text-blue-500 underline">Learn More</a>
          </div>
        </div>

        <TrendingRow />
      </div>

      {features.map((feature, index) => (
        <FeatureSection
          key={index}
          title={feature.title}
          description={feature.description}
          imageUrl={feature.imageUrl}
          imageAlt={feature.imageAlt}
          reverse={feature.reverse}
        />
      ))}

      <ReasonsGrid />
      <FaqSection />
      <Footer />
    </main>
  );
}
