import Section from "../Section";
import KineticText from "../KineticText";
import Sticker from "../Sticker";
import NowPlayingCard from "../NowPlayingCard";
import Waveform from "../Waveform";
import { Rings, Blob, Vinyl } from "../Doodles";
import PackIcon, { IconMarquee } from "../PackIcon";
import WavyText from "../WavyText";
import { listening } from "@/data/portfolio";

export default function ListeningSection() {
  return (
    <Section
      theme={{ bg: "#509BF5", fg: "#121212", acc: "#121212", accFg: "#CFF56A" }}
    >
      {/* layered collage backdrop */}
      <Rings data-drift className="absolute -right-16 -top-10 text-[#121212] opacity-40" />
      <Blob data-drift className="absolute -left-16 bottom-[20%] h-56 w-56 text-[#4100F5]/30" />
      <div aria-hidden className="halftone pointer-events-none absolute bottom-0 left-[30%] h-40 w-72 text-[#121212]/30" />
      <Vinyl data-spin className="absolute bottom-[10%] right-[10%] hidden h-24 w-24 text-[#CFF56A] md:block" />
      {/* scattered music-icon collage */}
      <PackIcon data-float icon="boombox" className="absolute left-[12%] top-[10%] hidden h-14 w-14 -rotate-6 text-[#121212] md:block" />
      <PackIcon data-float icon="phonograph" className="absolute right-[22%] top-[24%] hidden h-12 w-12 rotate-6 text-[#FAE62D] lg:block" />
      <PackIcon data-float icon="treble-clef" className="absolute bottom-[30%] left-[3%] hidden h-12 w-12 text-[#CFF56A] lg:block" />
      <PackIcon data-spin icon="music-record" className="absolute right-[4%] top-[45%] hidden h-14 w-14 text-[#121212] md:block" />
      <span
        aria-hidden
        className="font-display pointer-events-none absolute -left-8 -top-14 select-none text-[15rem] leading-none text-white/20"
      >
        ♪
      </span>
      {/* decorative floaters */}
      <span
        data-float
        className="pointer-events-none absolute right-[8%] top-[12%] hidden h-16 w-16 rounded-full border-[3px] border-black bg-[#FAE62D] md:block"
      />
      <span
        data-float
        className="pointer-events-none absolute bottom-[14%] left-[6%] hidden h-10 w-24 border-[3px] border-black bg-[#F774C4] md:block"
        style={{ rotate: "-8deg" }}
      />

      <Sticker rotate={-3}>{listening.kicker}</Sticker>
      <KineticText
        text={listening.headline}
        className="mt-5 -rotate-1 text-[clamp(2.5rem,7vw,5rem)] uppercase"
      />
      <WavyText
        data-animate
        text="ON REPEAT • ON REPEAT • ON REPEAT"
        className="font-display mt-3 text-lg uppercase tracking-[0.2em] text-[#CFF56A] sm:text-2xl"
      />

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p data-animate className="max-w-md text-lg font-bold leading-relaxed">
            {listening.blurb}
          </p>
          <Waveform bars={28} className="mt-8 h-12 max-w-xs text-black" />
        </div>
        <NowPlayingCard />
      </div>

      <IconMarquee
        icons={["musical-note", "audio-wave", "playlist", "loudspeaker", "microphone", "radio", "eighth-rest", "subwoofer"]}
        className="absolute inset-x-0 bottom-0 border-t-[3px] border-black/30 text-[#121212]"
      />
    </Section>
  );
}
