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
  // align client-side SWR deduping with server cache ttl to avoid extra requests
  const dedupe =
    Number(process.env.NEXT_PUBLIC_INSTAGRAM_CACHE_TTL || 300) * 1000; // ms
  const { data, error } = useSWR("/api/instagram", fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: dedupe,
  });

  if (error) return <p>Chyba načítání feedu</p>;
  if (!data) return <p>Načítám...</p>;

  const layout = [
    "col-span-2 row-span-2", // velká fotka
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1", // široká
    "col-span-1 row-span-1",
    "col-span-1 row-span-2", // vysoká
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-2", // další velká
    "col-span-1 row-span-1",
  ];

  // media_type is checked per post below

  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2 px-24">
      {data.data.map((post: InstagramPost, i: number) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          className={`relative overflow-hidden rounded-xl ${
            layout[i % layout.length] // pattern se opakuje
          }`}
        >
          {post.media_type === "IMAGE" && (
            <Image
              src={post.media_url}
              alt={post.caption || "Instagram photo"}
              className="w-full h-auto object-cover rounded-xl break-inside-avoid"
              width={500}
              height={500}
            />
          )}
          {/* iframes were autoplaying all together TODO: make this functioning */}
          {/* {post.media_type === "VIDEO" && (
            <iframe
              allowFullScreen
              src={post.media_url}
              title={post.caption}
              className="w-full h-auto object-cover rounded-xl break-inside-avoid"
              width={500}
              height={300}
            />
          )} */}
        </a>
      ))}
    </div>
  );
}
