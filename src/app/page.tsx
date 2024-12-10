import Features from "@/components/landing-page/features";
import Footer from "@/components/landing-page/footer";
import Hero from "@/components/landing-page/hero";
import Navbar from "@/components/landing-page/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-primary-50">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
