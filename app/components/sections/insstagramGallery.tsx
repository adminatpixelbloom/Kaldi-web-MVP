"use client";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
  media_type: string;
}

export default function InstagramGallery() {
  const { data, error } = useSWR("/api/instagram", fetcher);

  if (error) return <p>Chyba načítání feedu</p>;
  if (!data) return <p>Načítám...</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {data.data.map((post: InstagramPost) => (
        <a key={post.id} href={post.permalink} target="_blank">
          <Image
            src={post.media_url}
            alt={post.caption || "Instagram photo"}
            className="w-full h-auto object-cover rounded-xl"
            width={500}
            height={500}
          />
        </a>
      ))}
    </div>
  );
}
