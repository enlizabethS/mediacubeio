import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatisticsSection from "@/components/StatisticsSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import ReviewsSection from "@/components/ReviewsSection";
import ServiceCarousel from "@/components/ServiceCarousel";
import AppSection from "@/components/AppSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <StatisticsSection />
      <FeaturesSection />
      <ServiceCarousel />
      <AppSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}
