"use client";

import { useEffect, useState } from "react";
import { Music2 } from "lucide-react";
import Waveform from "./Waveform";

type Track = {
  active: boolean;
  isPlaying?: boolean;
  title?: string;
  artist?: string;
  album?: string;
  image?: string;
  url?: string;
};

/** Polls /api/now-playing every 30s. Renders a Wrapped share-card style player. */
export default function NowPlayingCard() {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    let alive = true;
    const load = () =>
      fetch("/api/now-playing")
        .then((r) => r.json())
        .then((d) => alive && setTrack(d))
        .catch(() => alive && setTrack({ active: false }));
    load();
    const id = setInterval(load, 30_000);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);

  const live = track?.active;

  return (
    <div
      data-animate
      className="mx-auto w-full max-w-sm border-[3px] border-black bg-[#121212] p-5 text-white shadow-[10px_10px_0_#000]"
      style={{ rotate: "-1.5deg" }}
    >
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#CFF56A]">
          {live ? (track?.isPlaying ? "Now playing" : "Last played") : "Off air"}
        </p>
        {live && track?.isPlaying && (
          <Waveform bars={5} className="h-4 w-8 text-[#CFF56A]" />
        )}
      </div>

      <div className="mt-4 flex items-center gap-4">
        {live && track?.image ? (
          // eslint-disable-next-line @next/next/no-img-element -- dynamic Spotify CDN art
          <img
            src={track.image}
            alt={track.album ?? ""}
            className="h-20 w-20 shrink-0 border-[3px] border-white/20 object-cover"
          />
        ) : (
          <div className="flex h-20 w-20 shrink-0 items-center justify-center border-[3px] border-white/20 bg-white/5">
            <Music2 size={28} className="opacity-50" />
          </div>
        )}
        <div className="min-w-0">
          {live ? (
            <>
              <p className="truncate text-lg font-black leading-tight">
                {track?.url ? (
                  <a href={track.url} target="_blank" rel="noreferrer" className="hover:underline">
                    {track?.title}
                  </a>
                ) : (
                  track?.title
                )}
              </p>
              <p className="truncate text-sm font-bold opacity-70">{track?.artist}</p>
            </>
          ) : (
            <>
              <p className="text-lg font-black leading-tight">Nothing on</p>
              <p className="text-sm font-bold opacity-70">
                probably debugging in silence
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
