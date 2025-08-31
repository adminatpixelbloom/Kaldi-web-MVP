// app/api/google-maps/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.GOOGLE_MAPS_ACCESS_TOKEN;
  const placeId = process.env.KALDI_PLACE_ID;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${token}`;

  const res = await fetch(url);
  const data = await res.json();

  return NextResponse.json(data);
}
