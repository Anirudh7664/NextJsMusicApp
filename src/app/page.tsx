import Image from "next/image";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ImageSection from "./components/ImageSection";
import ColourChangeScroll from "./components/ColourChangeScroll";
import MovingCards from "./components/MovingCards";
import UpComingWebinars from "./components/UpComingWebinars";
import WavyBackgrounds from "./components/WavyBackgrounds";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <ImageSection/>
      <ColourChangeScroll/>
      <MovingCards/>
      <UpComingWebinars/>
      <WavyBackgrounds/>
      <Footer/>
    </main>

  );
}
