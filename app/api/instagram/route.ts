// app/api/instagram/route.ts
import { NextResponse } from "next/server";

// Types for Instagram API response
type InstagramPost = {
  id: string;
  caption?: string;
  media_url: string;
  permalink: string;
  media_type: string;
};

type InstagramApiResponse = {
  data: InstagramPost[];
  [key: string]: unknown;
};

// Simple in-memory cache shared across invocations (per server instance/runtime)
let cachedData: InstagramApiResponse | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = Number(process.env.INSTAGRAM_CACHE_TTL || 60 * 5); // seconds, default 5 minutes

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "Missing INSTAGRAM_ACCESS_TOKEN" },
      { status: 500 }
    );
  }

  const now = Date.now();
  // return cached response if still fresh
  if (cachedData && now - cacheTimestamp < CACHE_TTL * 1000) {
    return NextResponse.json(cachedData, {
      headers: { "Cache-Control": `public, s-maxage=${CACHE_TTL}` },
    });
  }

  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type&limit=24&access_token=${token}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      // If Instagram returns an error and we have a cached response, return the stale cache
      const errorBody = await res.text();
      if (cachedData) {
        return NextResponse.json(cachedData, {
          headers: { "Cache-Control": `public, s-maxage=${CACHE_TTL}` },
        });
      }
      return NextResponse.json({ error: errorBody }, { status: res.status });
    }

    const data = await res.json();
    // update cache
    cachedData = data;
    cacheTimestamp = Date.now();

    return NextResponse.json(data, {
      headers: { "Cache-Control": `public, s-maxage=${CACHE_TTL}` },
    });
  } catch (err) {
    // network or unexpected error: return cached data if available
    if (cachedData) {
      return NextResponse.json(cachedData, {
        headers: { "Cache-Control": `public, s-maxage=${CACHE_TTL}` },
      });
    }
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
