import Section from "../Section";
import KineticText from "../KineticText";
import Sticker from "../Sticker";
import StickerLink from "../StickerLink";
import Waveform from "../Waveform";
import { Rings, Blob, Sparkle } from "../Doodles";
import PackIcon from "../PackIcon";
import { mostPlayed } from "@/data/portfolio";
import { Github, BookOpen, Play, SkipBack, SkipForward, Heart, ArrowUpRight } from "lucide-react";

export default function MostPlayedSection() {
  return (
    <Section
      theme={{ bg: "#121212", fg: "#ffffff", acc: "#F774C4", accFg: "#121212" }}
    >
      {/* layered collage backdrop */}
      <div aria-hidden className="halftone pointer-events-none absolute -right-10 top-0 h-72 w-72 text-[#F774C4]/40" />
      <Rings data-drift className="absolute -left-16 bottom-8 text-[#4100F5] opacity-60" />
      <Blob data-drift className="absolute right-[6%] bottom-[8%] hidden text-[#CFF56A]/25 lg:block" />
      <Sparkle data-float className="absolute left-[38%] top-[10%] hidden h-8 w-8 text-[#FAE62D] md:block" />
      <PackIcon data-float icon="headphones" className="absolute right-[20%] top-[16%] hidden h-14 w-14 text-[#CFF56A] md:block" />
      <PackIcon data-float icon="audio-wave" className="absolute bottom-[16%] left-[4%] hidden h-12 w-12 text-[#F774C4] lg:block" />
      <PackIcon data-spin icon="music-record" className="absolute bottom-[8%] right-[30%] hidden h-16 w-16 text-[#509BF5] lg:block" />
      <span
        aria-hidden
        className="font-display pointer-events-none absolute -left-6 -top-10 select-none text-[14rem] leading-none text-white/5"
      >
        #1
      </span>

      <Sticker rotate={2}>{mostPlayed.kicker}</Sticker>
      <KineticText
        text={mostPlayed.name}
        className="chroma mt-5 -rotate-1 text-[clamp(3rem,10vw,8rem)] uppercase text-[var(--acc)]"
      />

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        {/* music-player card - links to the repo */}
        <a
          href={mostPlayed.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-animate
          className="block min-w-0 border-[3px] border-[var(--acc)] bg-[#1c1c1c] p-5 shadow-[8px_8px_0_var(--acc)] transition-[transform,box-shadow] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0_var(--acc)] sm:p-7"
        >
          <div className="flex gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- local static art */}
            <img
              src={mostPlayed.image}
              alt="Jordan playing piano"
              className="h-32 w-32 shrink-0 border-[3px] border-white/20 object-cover sm:h-40 sm:w-40"
            />
            <div className="flex h-32 min-w-0 flex-1 items-end border-[3px] border-white/20 bg-black p-3 sm:h-40">
              <Waveform bars={24} className="h-full w-full text-[var(--acc)]" />
            </div>
          </div>

          <p className="mt-5 text-2xl font-black uppercase">{mostPlayed.name}</p>
          <p className="text-sm font-bold opacity-70">{mostPlayed.artist}</p>
          <p className="mt-1 text-xs font-bold italic text-[var(--acc)]">
            {mostPlayed.imageNote}
          </p>

          <div className="mt-5">
            <div className="h-2 w-full bg-white/20">
              <div className="js-bar h-full w-[73%] bg-[var(--acc)]" />
            </div>
            <div className="mt-1.5 flex justify-between text-xs font-bold tabular-nums opacity-70">
              <span>2:47</span>
              <span>on repeat all year</span>
              <span>3:52</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-6">
            <SkipBack size={22} className="opacity-70" />
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--acc)] text-[var(--acc-fg)]">
              <Play size={20} fill="currentColor" />
            </span>
            <SkipForward size={22} className="opacity-70" />
            <Heart size={20} className="text-[var(--acc)]" fill="currentColor" />
          </div>

          <p className="mt-4 flex items-center justify-center gap-1 text-[11px] font-black uppercase tracking-widest text-[var(--acc)]">
            View the repo on GitHub <ArrowUpRight size={14} strokeWidth={3} />
          </p>
        </a>

        <div className="min-w-0">
          <p data-animate className="text-base leading-relaxed opacity-90">
            {mostPlayed.description}
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-3">
            {mostPlayed.stats.map((s) => (
              <div
                key={s.label}
                data-animate
                className="border-[3px] border-white/25 p-3"
              >
                <dt className="text-[10px] font-black uppercase tracking-widest opacity-60">
                  {s.label}
                </dt>
                <dd className="mt-1 text-sm font-black uppercase">{s.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-7 flex flex-wrap gap-4">
            <StickerLink href={mostPlayed.githubUrl}>
              <Github size={16} /> Check it out on GitHub <ArrowUpRight size={16} strokeWidth={3} />
            </StickerLink>
            {mostPlayed.caseStudyUrl && (
              <StickerLink
                href={mostPlayed.caseStudyUrl}
                className="bg-[#CFF56A]"
              >
                <BookOpen size={16} /> Case study
              </StickerLink>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
