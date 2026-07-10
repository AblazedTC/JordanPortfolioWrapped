import Section from "../Section";
import StickerLink from "../StickerLink";
import { Burst, Sparkle, Flower, Rings, Blob } from "../Doodles";
import PackIcon from "../PackIcon";
import TopoLines from "../TopoLines";
import { personal, finalRecap } from "@/data/portfolio";
import { Github, Linkedin, FileText, Mail } from "lucide-react";

const BURST = [
  { c: "#CFF56A", cls: "left-[8%] top-[12%] h-10 w-10 rounded-full" },
  { c: "#F774C4", cls: "right-[10%] top-[18%] h-14 w-14" },
  { c: "#FF6437", cls: "left-[18%] bottom-[22%] h-8 w-16 rounded-full" },
  { c: "#FAE62D", cls: "right-[18%] bottom-[15%] h-12 w-12 rounded-full" },
  { c: "#4100F5", cls: "left-[45%] top-[8%] h-6 w-6" },
  { c: "#509BF5", cls: "right-[35%] bottom-[30%] h-7 w-7 rounded-full" },
];

export default function FinalSection() {
  return (
    <Section
      theme={{ bg: "#121212", fg: "#ffffff", acc: "#CFF56A", accFg: "#121212" }}
      className="text-center"
    >
      {/* recap burst confetti */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <TopoLines className="bottom-16 left-0 text-[#CFF56A]" />
        {BURST.map((b, i) => (
          <span
            key={i}
            data-burst
            data-float
            className={`absolute ${b.cls}`}
            style={{ background: b.c }}
          />
        ))}
        <Burst data-burst data-spin className="absolute left-[30%] top-[15%] hidden text-[#CFF56A] md:block" />
        <Flower data-burst data-spin className="absolute right-[25%] top-[10%] hidden text-[#FF6437] md:block" />
        <Sparkle data-burst data-float className="absolute left-[10%] bottom-[40%] hidden text-[#FAE62D] md:block" />
        <Rings data-drift className="absolute -right-16 top-[24%] text-[#F774C4] opacity-50" />
        <Blob data-drift className="absolute -left-20 top-[8%] hidden h-64 w-64 text-[#4100F5]/40 lg:block" />
        <PackIcon data-burst data-float icon="guitar" className="absolute left-[22%] bottom-[34%] hidden h-12 w-12 -rotate-12 text-[#509BF5] md:block" />
        <PackIcon data-burst data-float icon="headphones" className="absolute right-[14%] bottom-[42%] hidden h-12 w-12 rotate-6 text-[#FAE62D] md:block" />
        <PackIcon data-burst data-spin icon="musical-note" className="absolute left-[40%] bottom-[18%] hidden h-10 w-10 text-[#F774C4] md:block" />
      </div>

      <div className="relative" style={{ perspective: "800px" }}>
        {/* poster type receding into space */}
        <div style={{ transform: "rotateX(12deg)" }}>
          <h2
            data-animate
            className="font-display text-bands text-[clamp(2.8rem,9vw,7rem)] uppercase leading-[0.95]"
          >
            {finalRecap.headline}
          </h2>
        </div>
        <p data-animate className="mx-auto mt-6 max-w-md text-xl font-bold">
          {finalRecap.message}
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5"
        >
          <StickerLink href={personal.links.resume} className="bg-[#F774C4]">
            <FileText size={16} /> Resume
          </StickerLink>
          <StickerLink href={personal.links.github} className="bg-[#FAE62D]">
            <Github size={16} /> GitHub
          </StickerLink>
          <StickerLink href={personal.links.linkedin} className="bg-[#509BF5]">
            <Linkedin size={16} /> LinkedIn
          </StickerLink>
          <StickerLink href={personal.links.email} className="bg-[#FF6437]">
            <Mail size={16} /> Email
          </StickerLink>
        </div>
      </div>

      {/* marquee ticker */}
      <div className="absolute inset-x-0 bottom-0 overflow-hidden border-t-[3px] border-[var(--acc)] py-3">
        <div className="js-ticker flex w-max whitespace-nowrap font-display text-lg uppercase tracking-wider text-[var(--acc)]">
          <span>{finalRecap.ticker.repeat(4)}</span>
          <span>{finalRecap.ticker.repeat(4)}</span>
        </div>
      </div>
    </Section>
  );
}
