import Section from "../Section";
import KineticText from "../KineticText";
import Sticker from "../Sticker";
import { Vinyl, Sparkle, Spring, Arches, Blob } from "../Doodles";
import { topTech } from "@/data/portfolio";

export default function TopTechSection() {
  return (
    <Section
      theme={{ bg: "#CFF56A", fg: "#121212", acc: "#4100F5", accFg: "#ffffff" }}
    >
      <Arches className="absolute inset-x-0 top-0 rotate-180 text-[#F774C4]/70" />
      <div aria-hidden className="stripes pointer-events-none absolute -right-8 bottom-[14%] h-52 w-28 text-[#4100F5]/50" />
      <Blob data-drift className="absolute -left-20 top-[35%] hidden h-64 w-64 text-[#FF6437]/25 lg:block" />
      <span
        aria-hidden
        className="font-display pointer-events-none absolute -right-4 top-16 select-none text-[13rem] leading-none text-black/10"
      >
        #1
      </span>
      <Vinyl data-spin data-drift className="absolute -right-4 top-[14%] hidden h-24 w-24 text-[#4100F5] md:block" />
      <Sparkle data-float className="absolute left-[2%] top-[20%] hidden h-9 w-9 text-[#FF6437] lg:block" />
      <Spring data-drift className="absolute bottom-[10%] right-[6%] hidden text-[#F774C4] lg:block" />

      <Sticker rotate={-2}>{topTech.kicker}</Sticker>
      <KineticText
        text={topTech.headline}
        className="mt-5 -rotate-1 text-[clamp(2.5rem,7vw,5rem)] uppercase"
      />

      <ol className="mt-10 sm:mt-14">
        {topTech.items.map((tech, i) => (
          <li
            key={tech.name}
            data-animate
            className="group flex items-baseline gap-4 border-b-[3px] border-black py-3 sm:gap-8 sm:py-4"
          >
            <span className="font-display text-outline w-14 shrink-0 text-4xl leading-none sm:w-24 sm:text-6xl">
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xl font-black uppercase sm:text-3xl">
                {tech.name}
              </p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-60 sm:text-sm">
                {tech.detail}
              </p>
            </div>
            <span className="shrink-0 text-sm font-black tabular-nums sm:text-lg">
              <span className="js-count" data-value={tech.plays}>
                0
              </span>{" "}
              plays
            </span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
