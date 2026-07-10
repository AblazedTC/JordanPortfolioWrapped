import Section from "../Section";
import KineticText from "../KineticText";
import Sticker from "../Sticker";
import TopSongs from "../TopSongs";
import { Sparkle, Flower, Arches } from "../Doodles";
import PackIcon from "../PackIcon";
import { topSongs } from "@/data/portfolio";

export default function TopSongsSection() {
  return (
    <Section
      theme={{ bg: "#F0EDE4", fg: "#121212", acc: "#4100F5", accFg: "#ffffff" }}
    >
      <Arches className="absolute inset-x-0 bottom-0 text-[#F774C4]/60" />
      <div aria-hidden className="halftone pointer-events-none absolute left-0 top-[30%] h-56 w-36 text-[#4100F5]/25" />
      <div aria-hidden className="halftone-lg pointer-events-none absolute bottom-[6%] right-[6%] h-40 w-44 text-[#F774C4]/40" />
      {/* giant number, mesh gradient revealed through the letterforms (masking) */}
      <span
        aria-hidden
        className="text-clip-mesh font-display pointer-events-none absolute -right-10 -top-16 select-none text-[16rem] leading-none"
      >
        10
      </span>
      <Sparkle data-float className="absolute bottom-[12%] right-[4%] hidden h-10 w-10 text-[#4100F5] md:block" />
      <Flower data-spin data-drift className="absolute left-[2%] top-[12%] hidden h-14 w-14 text-[#F774C4] lg:block" />
      <PackIcon data-float icon="playlist" className="absolute right-[18%] top-[8%] hidden h-12 w-12 rotate-6 text-[#FF6437] lg:block" />
      <PackIcon data-float icon="quarter-rest" className="absolute bottom-[24%] left-[3%] hidden h-12 w-12 text-[#121212] lg:block" />

      <Sticker rotate={-2}>{topSongs.kicker}</Sticker>
      <KineticText
        text={topSongs.headline}
        className="mt-5 -rotate-1 text-[clamp(2.5rem,7vw,5rem)] uppercase"
      />
      <p data-animate className="mt-4 max-w-md text-base font-bold opacity-80">
        {topSongs.blurb}
      </p>

      <TopSongs />
    </Section>
  );
}
