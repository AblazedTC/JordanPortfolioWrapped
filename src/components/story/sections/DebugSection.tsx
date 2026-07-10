import Section from "../Section";
import KineticText from "../KineticText";
import Sticker from "../Sticker";
import { Burst, Squiggle, Vinyl, Rings, Blob } from "../Doodles";
import { debugStats } from "@/data/portfolio";

export default function DebugSection() {
  const rotations = [-2, 1.5, -1, 2];
  return (
    <Section
      theme={{ bg: "#FAE62D", fg: "#121212", acc: "#4100F5", accFg: "#ffffff" }}
      className="text-center"
    >
      <Rings data-drift className="absolute -left-20 top-[20%] text-[#FF6437] opacity-50" />
      <Blob data-drift className="absolute -right-16 top-[10%] hidden h-56 w-56 text-[#F774C4]/40 lg:block" />
      <div aria-hidden className="halftone pointer-events-none absolute bottom-[8%] left-[8%] h-40 w-56 text-[#4100F5]/30" />
      {/* cropped giant letterform */}
      <span
        aria-hidden
        className="font-display pointer-events-none absolute -bottom-20 -left-10 select-none text-[18rem] leading-none text-black/10"
      >
        847
      </span>
      <Burst data-spin data-drift className="absolute left-[6%] top-[14%] hidden h-16 w-16 text-[#4100F5] md:block" />
      <Vinyl data-spin className="absolute bottom-[12%] right-[5%] hidden h-20 w-20 text-[#F774C4] lg:block" />
      <Squiggle data-drift className="absolute right-[10%] top-[22%] hidden rotate-12 text-[#FF6437] lg:block" />

      <Sticker rotate={-3}>{debugStats.kicker}</Sticker>
      <KineticText
        text={debugStats.headline}
        className="mt-5 rotate-1 text-[clamp(2.5rem,7vw,5rem)] uppercase"
      />

      {/* stretched giant stat with hollow echo layers behind it */}
      <div data-animate className="relative mt-6">
        <span
          aria-hidden
          className="font-display text-outline-thick pointer-events-none absolute left-1/2 top-2 w-full translate-x-[calc(-50%+8px)] select-none text-[clamp(6rem,22vw,16rem)] leading-none tracking-tight text-[#FF6437]"
        >
          {debugStats.bigNumber}
        </span>
        <p className="stretch-tall font-display relative text-[clamp(6rem,22vw,16rem)] leading-none tracking-tight">
          <span className="js-count" data-value={debugStats.bigNumber}>
            0
          </span>
        </p>
      </div>
      <p data-animate className="text-lg font-black uppercase tracking-[0.2em]">
        {debugStats.bigLabel}
      </p>

      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
        {debugStats.stats.map((s, i) => (
          <div
            key={s.label}
            data-sticker
            className="border-[3px] border-black bg-white p-4 shadow-[5px_5px_0_#000]"
            style={{ rotate: `${rotations[i % rotations.length]}deg` }}
          >
            <p className="font-display text-3xl tabular-nums">
              <span className="js-count" data-value={s.value}>
                0
              </span>
              {s.suffix}
            </p>
            <p className="mt-1 text-[11px] font-bold uppercase leading-tight tracking-wide opacity-70">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <p data-animate className="mt-10 text-xs font-bold uppercase tracking-widest opacity-60">
        {debugStats.footnote}
      </p>
    </Section>
  );
}
