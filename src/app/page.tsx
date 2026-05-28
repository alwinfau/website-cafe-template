import { About } from "@/components/cafe/about";
import { Footer } from "@/components/cafe/footer";
import { Hero } from "@/components/cafe/hero";
import { Menu } from "@/components/cafe/menu";
import { Navbar } from "@/components/cafe/navbar";
import { Testimonials } from "@/components/cafe/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
