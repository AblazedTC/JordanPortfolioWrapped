import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function inactive(reason: string) {
  return NextResponse.json({ active: false, reason });
}

/**
 * Returns what Jordan is playing on Spotify right now (falls back to the most
 * recently played track). Displays *my* account only — visitors never log in.
 * Requires SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN.
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

    const auth = { headers: { Authorization: `Bearer ${access_token}` } };

    const nowRes = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      { ...auth, cache: "no-store" }
    );

    if (nowRes.status === 200) {
      const data = await nowRes.json();
      const t = data.item;
      if (t) {
        return NextResponse.json({
          active: true,
          isPlaying: data.is_playing === true,
          title: t.name,
          artist: t.artists.map((a: { name: string }) => a.name).join(", "),
          album: t.album?.name ?? "",
          image: t.album?.images?.[0]?.url ?? "",
          url: t.external_urls?.spotify ?? "",
        });
      }
    } else if (nowRes.status === 401) {
      return inactive("spotify_now_401");
    }

    const recentRes = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      { ...auth, cache: "no-store" }
    );

    if (recentRes.ok) {
      const t = (await recentRes.json()).items?.[0]?.track;
      if (t) {
        return NextResponse.json({
          active: true,
          isPlaying: false,
          title: t.name,
          artist: t.artists.map((a: { name: string }) => a.name).join(", "),
          album: t.album?.name ?? "",
          image: t.album?.images?.[0]?.url ?? "",
          url: t.external_urls?.spotify ?? "",
        });
      }
    } else if (recentRes.status === 401) {
      return inactive("spotify_recent_401");
    }

    return inactive("no_recent_track");
  } catch {
    return inactive("request_failed");
  }
}
