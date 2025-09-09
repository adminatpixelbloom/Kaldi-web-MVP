import Navbar from "./components/navbar";
import Hero from "./components/sections/hero";
import Ratings from "./components/sections/ratings";
import Feature from "./components/sections/feature";
import InstagramGallery from "./components/sections/instagramGallery";
import Hours from "./components/sections/hours";
import Contact from "./components/sections/contact";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="flex flex-col items-center">
        <Hero />
        <Feature />
        <InstagramGallery />
        <Ratings />
        {/* <section className="relative w-full max-w-5xl px-4 py-12"></section> */}
        <Hours />
        <Contact />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
