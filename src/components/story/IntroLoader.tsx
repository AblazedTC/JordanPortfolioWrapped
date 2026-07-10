"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const LINES = ["JORDAN", "WRAPPED"];

/**
 * Startup intro — text only. Words start hidden (inline visibility) so there
 * is never a flash of static text; GSAP reveals them with fromTo, holds,
 * scatters the characters, and lifts the overlay away.
 */
export default function IntroLoader() {
  const overlay = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          const { reduced } = ctx.conditions as { reduced: boolean };
          document.documentElement.style.overflow = "hidden";

          const tl = gsap.timeline({
            onComplete: () => {
              document.documentElement.style.overflow = "";
              setDone(true);
            },
          });
          if (reduced) tl.timeScale(100);

          overlay.current
            ?.querySelectorAll<HTMLElement>(".js-line")
            .forEach((line, i) => {
              tl.fromTo(
                line.querySelectorAll(".js-lword"),
                { yPercent: i % 2 === 0 ? -110 : 110, visibility: "visible" },
                { yPercent: 0, duration: 0.9, ease: "power3.inOut" },
                i * 0.18
              );
            });

          tl.to(
            ".js-lchar",
            {
              yPercent: () => gsap.utils.random(-180, 180),
              rotation: () => gsap.utils.random(-40, 40),
              autoAlpha: 0,
              duration: 0.55,
              ease: "power2.in",
              stagger: { each: 0.02, from: "random" },
            },
            "+=0.8"
          );

          tl.to(overlay.current, {
            yPercent: -100,
            duration: 0.7,
            ease: "power4.inOut",
          }, "-=0.2");
        }
      );
    },
    { scope: overlay }
  );

  if (done) return null;

  return (
    <div
      ref={overlay}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#4100F5] px-6"
      aria-hidden
    >
      {LINES.map((line, i) => (
        <div
          key={line}
          className={`js-line overflow-hidden font-display uppercase leading-[0.95] tracking-tight ${
            i === 1 ? "text-[#CFF56A]" : "text-white"
          } text-[clamp(3.2rem,13vw,9rem)]`}
        >
          <span
            className="js-lword inline-block"
            style={{ visibility: "hidden" }}
          >
            {line.split("").map((ch, c) => (
              <span key={c} className="js-lchar inline-block">
                {ch}
              </span>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}
