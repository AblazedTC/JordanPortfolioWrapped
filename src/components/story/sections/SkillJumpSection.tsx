import Section from "../Section";
import KineticText from "../KineticText";
import Sticker from "../Sticker";
import { Arrow, Sparkle, Blob, Rings } from "../Doodles";
import { skillJump } from "@/data/portfolio";

export default function SkillJumpSection() {
  return (
    <Section
      theme={{ bg: "#FF6437", fg: "#121212", acc: "#121212", accFg: "#FF6437" }}
    >
      <Blob data-drift className="absolute -right-24 bottom-[6%] hidden h-72 w-72 text-[#FAE62D]/40 lg:block" />
      <Rings data-drift className="absolute -left-16 top-[8%] text-[#F774C4] opacity-50" />
      <div aria-hidden className="stripes pointer-events-none absolute bottom-0 right-[26%] h-28 w-48 text-[#121212]/25" />
      {/* gradient-mesh arch, exclusion-blended for shifting color */}
      <span aria-hidden className="mesh-dark blend-exclusion clip-blob pointer-events-none absolute -left-20 bottom-[8%] hidden h-72 w-72 opacity-50 lg:block" />
      {/* arrow curls toward the skill bars */}
      <Arrow data-float className="absolute right-[8%] top-[38%] hidden h-20 w-20 -scale-x-100 rotate-[130deg] text-[#121212] md:block" />
      <Sparkle data-float className="absolute bottom-[14%] left-[3%] hidden h-10 w-10 text-[#FAE62D] lg:block" />
      {/* cropped giant letterform */}
      <span
        aria-hidden
        className="font-display text-outline pointer-events-none absolute -left-8 -top-14 select-none text-[15rem] leading-none text-black/40"
      >
        UP
      </span>

      <Sticker rotate={-3}>{skillJump.kicker}</Sticker>
      <KineticText
        text={skillJump.headline}
        className="squash-wide mt-5 text-[clamp(2.5rem,7vw,5rem)] uppercase"
      />

      <div className="mt-10 space-y-8 sm:mt-14">
        {skillJump.skills.map((s) => (
          <div key={s.name} data-animate>
            <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
              <span className="text-lg font-black uppercase sm:text-2xl">
                {s.name}
              </span>
              <span className="font-display text-lg tabular-nums sm:text-2xl">
                {s.before} →{" "}
                <span className="js-count" data-value={s.after}>
                  0
                </span>
              </span>
            </div>
            <div className="relative h-6 w-full border-[3px] border-black sm:h-8">
              {/* "before" ghost bar */}
              <div
                className="absolute inset-y-0 left-0 bg-black/25"
                style={{ width: `${s.before}%` }}
              />
              <div
                className="js-bar absolute inset-y-0 left-0 bg-black"
                style={{ width: `${s.after}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <p data-animate className="mt-10 text-sm font-bold uppercase tracking-widest opacity-70">
        {skillJump.footnote}
      </p>
    </Section>
  );
}
