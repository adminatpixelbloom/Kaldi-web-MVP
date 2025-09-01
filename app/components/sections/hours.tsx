"use client";

import React from "react";
import hoursImage from "@/assets/150614_006_edited.png";
import useFetch from "@/app/hooks/useFetch";
import Image from "next/image";

function Hours() {
  const { data, error, loading } = useFetch("/texts.json");
  if (loading) return <p>Nahrávám...</p>;
  if (error) return <p>Chyba při načítání textu. Chyba: {error}</p>;
  if (!data) return <p>Žádná data nejsou k dispozici</p>;

  return (
    <section className="mx-auto max-w-5xl flex items-center px-16 py-32">
      <Image src={hoursImage} width={600} height={600} alt="Hours image" />
      <div className="bg-[var(--color-primary)] p-6 w-3/2 z-10 dark:bg-amber-950">
        <h2>Otevírací doba</h2>
        <p>
          <strong>Pondělí - Pátek:</strong> 8:00 - 21:30
        </p>
        <p>
          <strong>Sobota:</strong> 10:00 - 17:00
        </p>
        <p>
          <strong>Neděle:</strong> Zavřeno
        </p>
      </div>
    </section>
  );
}

export default Hours;
