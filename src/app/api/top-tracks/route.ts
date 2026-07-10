import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function inactive(reason: string) {
  return NextResponse.json({ active: false, reason });
}

/**
 * Jordan's top 10 Spotify tracks (~last 6 months). Same personal refresh-token
 * flow as /api/now-playing; needs the user-top-read scope on the token.
 */
export async function GET() {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } =
    process.env;

  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
    return inactive("missing_env");
  }

  try {
    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
        ).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: SPOTIFY_REFRESH_TOKEN,
      }),
      cache: "no-store",
    });

    if (!tokenRes.ok) {
      return inactive("token_exchange_failed");
    }

    const { access_token } = await tokenRes.json();
    if (!access_token) {
      return inactive("missing_access_token");
    }

    const res = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=medium_term",
      {
        headers: { Authorization: `Bearer ${access_token}` },
        cache: "no-store",
      }
    );

    if (!res.ok) return inactive(`spotify_${res.status}`);

    const items = (await res.json()).items ?? [];
    return NextResponse.json({
      active: items.length > 0,
      tracks: items.map(
        (t: {
          name: string;
          artists: { name: string }[];
          album: { images: { url: string }[] };
          external_urls: { spotify: string };
        }) => ({
          title: t.name,
          artist: t.artists.map((a) => a.name).join(", "),
          image: t.album?.images?.[1]?.url ?? t.album?.images?.[0]?.url ?? "",
          url: t.external_urls?.spotify ?? "",
        })
      ),
    });
  } catch {
    return inactive("request_failed");
  }
}
