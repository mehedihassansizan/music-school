import { CardHoverEffectDemo } from "@/components/FeaturedContent";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/TestomonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUS";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <CardHoverEffectDemo />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
    </main>
  );
}
