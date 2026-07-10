import Section from "../Section";
import KineticText from "../KineticText";
import Sticker from "../Sticker";
import TopoLines from "../TopoLines";
import { Blob, Sparkle } from "../Doodles";
import PackIcon from "../PackIcon";
import { catalog } from "@/data/portfolio";

export default function CatalogSection() {
  return (
    <Section
      theme={{ bg: "#4100F5", fg: "#ffffff", acc: "#FAE62D", accFg: "#121212" }}
    >
      <TopoLines className="bottom-0 left-0 text-[#F774C4]" />
      <Blob data-drift className="absolute -right-20 top-[16%] hidden h-64 w-64 text-[#CFF56A]/25 lg:block" />
      <div aria-hidden className="halftone pointer-events-none absolute left-0 top-[8%] h-48 w-40 text-white/20" />
      <Sparkle data-float className="absolute bottom-[12%] left-[4%] hidden h-9 w-9 text-[#FAE62D] md:block" />
      <PackIcon data-float icon="music-library" className="absolute right-[12%] top-[6%] hidden h-14 w-14 rotate-6 text-[#CFF56A] md:block" />
      <PackIcon data-float icon="tape-drive" className="absolute left-[2%] top-[40%] hidden h-12 w-12 -rotate-6 text-[#F774C4] lg:block" />
      {/* transparency overlay blocks */}
      <span aria-hidden className="pointer-events-none absolute bottom-[6%] right-[24%] h-36 w-36 rounded-full bg-[#F774C4]/50 mix-blend-screen" />
      <span aria-hidden className="pointer-events-none absolute bottom-[10%] right-[16%] h-28 w-28 rounded-full bg-[#FAE62D]/50 mix-blend-screen" />
      <span
        aria-hidden
        className="font-display pointer-events-none absolute -right-10 -bottom-16 select-none text-[16rem] leading-none text-white/10"
      >
        EP
      </span>
      <span
        data-float
        className="pointer-events-none absolute right-[5%] top-[10%] hidden h-14 w-14 rotate-12 border-[3px] border-black bg-[#CFF56A] md:block"
      />

      <Sticker rotate={-2}>{catalog.kicker}</Sticker>
      <KineticText
        text={catalog.headline}
        className="mt-5 rotate-1 text-[clamp(2.5rem,7vw,5rem)] uppercase"
      />

      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {catalog.projects.map((p, i) => {
          const card = (
            <>
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-display text-3xl text-[#4100F5]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="bg-[var(--acc)] px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-[var(--acc-fg)]">
                  {p.genre}
                </span>
              </div>
              <p className="mt-2 font-display text-xl uppercase leading-tight">
                {p.name}
              </p>
              <p className="mt-2 flex-1 text-sm font-semibold opacity-80">
                {p.description}
              </p>
              <p className="mt-3 text-[11px] font-black uppercase tracking-wide opacity-60">
                {p.stack.join(" · ")}
              </p>
            </>
          );
          const cls =
            "flex flex-col border-[3px] border-black bg-white p-5 text-[#121212] shadow-[6px_6px_0_#000]";
          return (
            <li key={p.name} data-animate style={{ rotate: i % 2 ? "0.8deg" : "-0.8deg" }}>
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cls} h-full transition-[transform,box-shadow] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#000]`}
                >
                  {card}
                </a>
              ) : (
                <div className={`${cls} h-full`}>{card}</div>
              )}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
