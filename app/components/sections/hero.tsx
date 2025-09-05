import Image from "next/image";
import React from "react";
import heroImage from "@/assets/12440637_770727436392217_2854183369251629361_o.jpg";
import logo from "@/assets/Logo-Kaldi-negative.svg";

function Hero() {
  return (
    <section id="hero-section" className="relative">
      <Image
        src={heroImage}
        width={2048}
        height={2048}
        alt="Čokoládový dort"
        className="relative min-h-96 max-h-screen object-cover"
      />
      <div
        id="logo-and-text"
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <Image src={logo} width={150} height={150} alt="logo" />
        <h1 className="w-auto md:w-1/2 text-center text-white text-shadow-lg">
          Prostě dobrá kavárna
        </h1>
      </div>
      <div className="absolute h-screen w-screen bg-black opacity-20"></div>
      <div className=""></div>
    </section>
  );
}

export default Hero;
