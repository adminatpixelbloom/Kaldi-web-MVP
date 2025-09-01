"use client";

import React from "react";
import featureImage from "@/assets/KALDI_web_auf_edited.jpg";
import useFetch from "@/app/hooks/useFetch";
import Image from "next/image";

interface FeatureText {
  h2: string;
  p: string;
}

function Feature() {
  const { data, error, loading } = useFetch("/texts.json");
  if (loading) return <p>Nahrávám...</p>;
  if (error) return <p>Chyba při načítání textu. Chyba: {error}</p>;
  if (!data) return <p>Žádná data nejsou k dispozici</p>;

  return (
    <section className="mx-auto max-w-5xl flex items-center px-16 py-32">
      <div className="bg-[var(--color-primary)] p-6 w-3/2 z-10 dark:bg-amber-950">
        <h2>{(data as FeatureText).h2}</h2>
        <p>{(data as FeatureText).p}</p>
      </div>
      <Image src={featureImage} width={600} height={600} alt="feature image" />
    </section>
  );
}

export default Feature;
