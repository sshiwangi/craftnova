import CommunityCTA from "@/components/landing-page/cta";
import Features from "@/components/landing-page/features";
import Footer from "@/components/landing-page/footer";
import Hero from "@/components/landing-page/hero";
import Navbar from "@/components/landing-page/navbar";
import HowItWorks from "@/components/landing-page/working";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-primary-50">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks/>
      <CommunityCTA />
      <Footer />
    </div>
  );
}
