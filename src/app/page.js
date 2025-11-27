import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Curriculum from "@/components/Curriculum";
import Facilities from "@/components/Facilities";
import Activities from "@/components/Activities";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Highlights />
      <Curriculum />
      <Facilities />
      <Activities />
      <Achievements />
      <Testimonials />
      <Footer />
    </main>
  );
}
