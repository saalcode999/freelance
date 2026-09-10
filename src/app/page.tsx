import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import CaseResults from "@/components/CaseResults";
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PracticeAreas />
        <About />
        <WhyChooseUs />
        <CaseResults />
        <Team />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
