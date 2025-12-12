import HeroSection from "@/components/sections/HeroSection";
import WhySection from "@/components/sections/WhySection";
import MotivesSection from "@/components/sections/MotivesSection";
import ChallengesSection from "@/components/sections/ChallengesSection";
import FrameworkSection from "@/components/sections/FrameworkSection";
import VideoSection from "@/components/sections/VideoSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <WhySection />
      <MotivesSection />
      <ChallengesSection />
      <FrameworkSection />
      <VideoSection />
      <Footer />
    </main>
  );
};

export default Index;
