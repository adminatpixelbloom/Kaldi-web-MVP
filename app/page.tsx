import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/sections/hero";
import Ratings from "./components/sections/ratings";
import Feature from "./components/sections/feature";
import InstagramGallery from "./components/sections/insstagramGallery";
import Hours from "./components/sections/hours";
import Contact from "./components/sections/contact";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="flex flex-col items-center">
        <Hero />
        <section className="w-full max-w-5xl px-4 py-12">
          <h2 className="text-2xl mb-4">Hodnocení</h2>
          <InstagramGallery />
          <Ratings />
        </section>
        <Feature />
        <Hours />
        <Contact />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
