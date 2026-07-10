"use client";

import { useEffect, useState } from "react";

type Track = { title: string; artist: string; image: string; url: string };

// Wrapped share-card frames from make-a-wrapped (public/cards/*). Album art is
// positioned into each frame's white window (measured from the 1080x1920 art,
// cropped to the top 1000px).
const FRAMES = ["/cards/yellow.png", "/cards/purple.png", "/cards/pink.png"];

/** Top 3 tracks in framed Wrapped cards + ranked list for 4–10. */
export default function TopSongs() {
  const [tracks, setTracks] = useState<Track[] | null>(null);

  useEffect(() => {
    fetch("/api/top-tracks")
      .then((r) => r.json())
      .then((d) => setTracks(d.active ? d.tracks : []))
      .catch(() => setTracks([]));
  }, []);

  if (!tracks) return null;
  if (tracks.length === 0)
    return (
      <p data-animate className="mt-10 text-lg font-bold opacity-70">
        Top tracks are loading elsewhere… (Spotify not connected yet)
      </p>
    );

  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
      {/* podium: top 3 in Wrapped card frames */}
      <div className="grid grid-cols-3 gap-3 sm:gap-5">
        {tracks.slice(0, 3).map((t, i) => (
          <a
            key={t.title}
            href={t.url}
            target="_blank"
            rel="noreferrer"
            data-animate
            className="group relative"
            style={{ rotate: i === 1 ? "0deg" : i ? "2deg" : "-2deg" }}
          >
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "1080/1000" }}
            >
              <div
                className="absolute inset-0 bg-[length:100%_auto] bg-top"
                style={{ backgroundImage: `url(${FRAMES[i]})` }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element -- Spotify CDN art */}
              <img
                src={t.image}
                alt=""
                className="absolute object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ left: "23.5%", top: "22.5%", width: "53.5%", height: "56.5%" }}
              />
            </div>
            <p className="mt-2 flex items-baseline gap-2">
              <span className="font-display text-2xl">#{i + 1}</span>
              <span className="min-w-0">
                <span className="block truncate text-xs font-black uppercase sm:text-sm">
                  {t.title}
                </span>
                <span className="block truncate text-[10px] font-bold opacity-60 sm:text-xs">
                  {t.artist}
                </span>
              </span>
            </p>
          </a>
        ))}
      </div>

      {/* 4–10 ranked list */}
      <ol className="border-[3px] border-black bg-white p-4 text-[#121212] shadow-[8px_8px_0_#000] sm:p-6">
        {tracks.slice(3).map((t, i) => (
          <li key={t.title} data-animate>
            <a
              href={t.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border-b-2 border-black/10 py-2 last:border-0 hover:bg-black/5"
            >
              <span className="font-display w-7 shrink-0 text-lg">{i + 4}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={t.image} alt="" className="h-9 w-9 shrink-0 object-cover" />
              <span className="min-w-0">
                <span className="block truncate text-sm font-black">{t.title}</span>
                <span className="block truncate text-xs font-bold opacity-60">
                  {t.artist}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
