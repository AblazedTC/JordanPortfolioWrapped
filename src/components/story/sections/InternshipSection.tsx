import Section from "../Section";
import KineticText from "../KineticText";
import Sticker from "../Sticker";
import { Flower, Spring, Arches, Blob } from "../Doodles";
import { internships } from "@/data/portfolio";

export default function InternshipSection() {
  return (
    <Section
      theme={{ bg: "#F774C4", fg: "#121212", acc: "#4100F5", accFg: "#ffffff" }}
    >
      {/* arches skyline along the bottom */}
      <Arches className="absolute inset-x-0 bottom-0 text-[#4100F5]/80" />
      <div aria-hidden className="stripes pointer-events-none absolute -left-6 top-[18%] h-44 w-24 text-[#FAE62D]/70" />
      <Blob data-drift className="absolute -right-14 top-[30%] hidden text-[#FF6437]/40 lg:block" />
      <span
        aria-hidden
        className="font-display pointer-events-none absolute -right-6 -top-12 select-none text-[13rem] leading-none text-black/10"
      >
        CV
      </span>
      <Flower data-spin data-drift className="absolute right-[16%] top-[10%] hidden h-16 w-16 text-[#FAE62D] md:block" />
      <Spring data-float className="absolute bottom-[14%] left-[2%] hidden text-[#4100F5] lg:block" />
      {/* overlapping color blocks, multiplied where they cross */}
      <span aria-hidden className="pointer-events-none absolute left-[24%] top-[6%] h-24 w-40 bg-[#509BF5]/70 mix-blend-multiply" style={{ rotate: "-6deg" }} />
      <span aria-hidden className="pointer-events-none absolute left-[32%] top-[10%] h-24 w-40 bg-[#FAE62D]/70 mix-blend-multiply" style={{ rotate: "4deg" }} />

      <Sticker rotate={2}>{internships.kicker}</Sticker>
      <KineticText
        text={internships.headline}
        className="mt-5 rotate-1 text-[clamp(2.5rem,7vw,5rem)] uppercase"
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {internships.gigs.map((gig, i) => (
          <div
            key={gig.role}
            data-animate
            className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_#000]"
            style={{ rotate: i % 2 ? "1deg" : "-1deg" }}
          >
            <p className="font-display text-3xl uppercase">{gig.company}</p>
            <p className="mt-1 text-sm font-black uppercase tracking-wide text-[var(--acc)]">
              {gig.role}
            </p>
            <p className="mt-0.5 text-xs font-bold uppercase tracking-wide opacity-50">
              {gig.period}
            </p>
            <ul className="mt-4 space-y-2.5">
              {gig.points.map((p) => (
                <li key={p} className="flex gap-2 text-sm font-semibold">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-[var(--acc)]" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div data-animate className="mt-10 border-[3px] border-black bg-black p-6 text-white">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#CFF56A]">
          Real-world lessons learned
        </p>
        <ul className="mt-3 space-y-1.5">
          {internships.lessons.map((l, i) => (
            <li key={l} className="text-sm font-bold sm:text-base">
              {String(i + 1).padStart(2, "0")}. {l}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
