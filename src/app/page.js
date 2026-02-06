import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Curriculum from "@/components/Curriculum";
import Activities from "@/components/Activities";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <AboutSection/>
      <Highlights />
      <Curriculum />
      <Activities />
      <Testimonials />
      <Footer />
    </main>
  );
}
