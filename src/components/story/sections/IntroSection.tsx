import Section from "../Section";
import KineticText from "../KineticText";
import Sticker from "../Sticker";
import Waveform from "../Waveform";
import TopoLines from "../TopoLines";
import { IconMarquee } from "../PackIcon";
import { Sparkle, Flower, Squiggle, Arrow } from "../Doodles";
import { personal } from "@/data/portfolio";

export default function IntroSection() {
  return (
    <Section
      theme={{ bg: "#4100F5", fg: "#ffffff", acc: "#CFF56A", accFg: "#121212" }}
    >
      {/* animated topographic flow lines */}
      <TopoLines className="left-0 top-0 text-[#CFF56A]" />
      {/* cropped giant letterform bleeding off the edge */}
      <span
        aria-hidden
        className="font-display pointer-events-none absolute -bottom-24 -right-8 select-none text-[20rem] leading-none text-white/10"
      >
        26
      </span>

      <div className="relative">
        {/* chaos layer */}
        <Sparkle data-float className="absolute -top-14 left-[55%] text-[#FAE62D]" />
        <Flower data-spin className="absolute right-[22%] top-[38%] hidden h-20 w-20 text-[#F774C4] lg:block" />
        <Sparkle data-float className="absolute bottom-[30%] right-[8%] hidden h-8 w-8 text-[#FF6437] md:block" />

        {/* warped text on a circular path, spinning */}
        <svg
          viewBox="0 0 200 200"
          className="pointer-events-none absolute -top-10 right-0 hidden h-36 w-36 md:block"
          aria-hidden
        >
          <defs>
            <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
          </defs>
          <g data-spin style={{ transformOrigin: "center" }}>
            <text className="fill-[#CFF56A] font-display text-[19px] uppercase tracking-[0.32em]">
              <textPath href="#badge-circle">
                Jordan Wrapped · 2026 · on repeat ·
              </textPath>
            </text>
          </g>
        </svg>

        {/* polaroid profile pic */}
        <div
          data-sticker
          className="absolute right-[2%] top-[24%] hidden rotate-3 border-[3px] border-black bg-white p-2 pb-6 shadow-[8px_8px_0_#000] md:block lg:right-[6%]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- local static art */}
          <img
            src="/pfp/profilepic.JPG"
            alt="Jordan Jerkins"
            className="h-40 w-36 object-cover lg:h-52 lg:w-44"
          />
          <p className="mt-2 text-center font-display text-xs uppercase tracking-widest text-black">
            the artist
          </p>
        </div>

        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Sticker rotate={-4}>{personal.year} recap</Sticker>
          <Sticker rotate={3} className="bg-[#F774C4]">
            {personal.role}
          </Sticker>
        </div>

        <KineticText
          as="h1"
          text="JORDAN"
          className="squash-wide text-[clamp(3.5rem,14vw,11rem)] uppercase tracking-tight"
        />
        {/* layered echo type, pushed off-grid to the right */}
        <div className="relative ml-[6vw] md:ml-[10vw]">
          <span
            aria-hidden
            className="font-display text-outline-thick pointer-events-none absolute left-3 top-3 select-none text-[clamp(3.5rem,14vw,11rem)] uppercase leading-none tracking-tight text-[#F774C4]"
          >
            JERKINS
          </span>
          <KineticText
            as="h1"
            text="JERKINS"
            className="relative text-[clamp(3.5rem,14vw,11rem)] uppercase tracking-tight text-[var(--acc)]"
          />
        </div>
        {/* transparency overlays that mix into the type */}
        <span aria-hidden className="pointer-events-none absolute left-[30%] top-[30%] h-44 w-44 rounded-full bg-[#FF6437]/70 mix-blend-screen" />
        <span aria-hidden className="pointer-events-none absolute left-[48%] top-[42%] h-32 w-32 rounded-full bg-[#509BF5]/70 mix-blend-screen" />

        <Squiggle className="mt-2 text-[#F774C4]" />

        <p data-animate className="mt-6 max-w-md text-lg font-bold sm:text-xl">
          {personal.tagline}
        </p>
        <p data-animate className="mt-3 max-w-md text-sm opacity-80">
          {personal.subheading}
        </p>

        <Waveform bars={32} className="mt-10 h-14 max-w-sm text-[var(--acc)]" />

        <div data-animate className="mt-12 flex items-center gap-3">
          {/* arrow curls down into the scroll hint */}
          <Arrow className="h-10 w-10 -scale-x-100 rotate-[160deg] text-[#FAE62D]" />
          <p className="animate-bounce text-sm font-black uppercase tracking-[0.25em]">
            ↓ scroll the story
          </p>
        </div>
      </div>

      {/* music icon marquee along the bottom edge */}
      <IconMarquee
        icons={["headphones", "boombox", "phonograph", "guitar", "piano", "musical-note", "radio", "drum-set", "microphone", "audio-wave"]}
        className="absolute inset-x-0 bottom-0 border-t-[3px] border-[#CFF56A]/40 text-[#CFF56A]"
      />
    </Section>
  );
}
