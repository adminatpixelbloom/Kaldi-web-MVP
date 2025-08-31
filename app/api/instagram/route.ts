// app/api/instagram/route.ts
import { NextResponse } from "next/server"

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type&limit=24&access_token=${token}`

  const res = await fetch(url)
  const data = await res.json()

  return NextResponse.json(data)
}
