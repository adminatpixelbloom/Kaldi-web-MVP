"use client";
import React from "react";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url, { next: { revalidate: 3 } }).then((res) => res.json());

interface GoogleMapsReview {
  profile_photo_url: string;
  author_name: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

interface GoogleMapsResult {
  result: { reviews: GoogleMapsReview[] };
}

function Ratings() {
  const { data, error } = useSWR<GoogleMapsResult>("/api/google-maps", fetcher);
  if (error) return <p>Chyba při načítání textu. Chyba: {error}</p>;
  if (!data) return <p>Žádná data nejsou k dispozici</p>;

  const reviews = data?.result?.reviews || [];

  return (
    <>
      <div className="flex flex-wrap items-center gap-4 my-12">
        {reviews.map((r: GoogleMapsReview, i: number) => (
          <article
            key={i}
            className="mx-auto max-w-64 gap-6 p-4 bg-amber-100 dark:bg-amber-700 rounded shadow"
          >
            <div className="min-w-16 max-w-16">
              <Image
                src={r.profile_photo_url}
                width={90}
                height={90}
                alt={r.author_name}
                className="rounded "
              />
            </div>
            <div className="flex flex-col justify-start items-baseline min-w-32">
              <strong>{r.author_name}</strong>
              <span className="text-sm text-yellow-600">{r.rating}★</span>
              <div className="text-xs text-gray-500">
                {r.relative_time_description}
              </div>
            </div>
            <p className="mt-2 text-gray-800">{r.text}</p>
          </article>
        ))}
      </div>
    </>
  );
}

export default Ratings;
