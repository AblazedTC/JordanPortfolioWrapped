"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MorphSVGPlugin, useGSAP);

/**
 * Scroll-driven Wrapped story. Each [data-section] plays a kinetic entrance
 * timeline when it scrolls into view, built from element conventions:
 *   [data-kinetic] .js-word  — words slide up out of clip boxes
 *   [data-sticker]           — stickers slam in with rotation overshoot
 *   [data-animate]           — generic staggered rise
 *   .js-bar                  — bars grow from 0 (scaleX)
 *   .js-count[data-value]    — numbers count up
 *   .js-eq                   — equalizer bars loop (waveforms)
 *   .js-ticker               — infinite marquee
 *   [data-burst]             — final recap confetti-ish pop
 */
export default function StoryScroller({
  children,
}: {
  children: React.ReactNode;
}) {
  const container = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);

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

          // top scroll progress bar
          gsap.to(progress.current, {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: container.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.3,
            },
          });

          gsap.utils
            .toArray<HTMLElement>("[data-section]")
            .forEach((section) => {
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: section,
                  start: "top 60%",
                  toggleActions: "play none none none",
                },
              });
              if (reduced) tl.timeScale(1000);

              const words = section.querySelectorAll(".js-word");
              if (words.length)
                tl.from(words, {
                  yPercent: 115,
                  duration: 0.7,
                  ease: "power4.out",
                  stagger: 0.06,
                });

              const stickers = section.querySelectorAll("[data-sticker]");
              if (stickers.length)
                tl.from(
                  stickers,
                  {
                    scale: 0,
                    rotation: (i) => (i % 2 ? 25 : -25),
                    duration: 0.55,
                    ease: "back.out(2.2)",
                    stagger: 0.09,
                  },
                  "-=0.4"
                );

              const items = section.querySelectorAll("[data-animate]");
              if (items.length)
                tl.from(
                  items,
                  {
                    autoAlpha: 0,
                    y: 40,
                    duration: 0.55,
                    ease: "power3.out",
                    stagger: 0.09,
                  },
                  "-=0.35"
                );

              const bars = section.querySelectorAll(".js-bar");
              if (bars.length)
                tl.from(
                  bars,
                  {
                    scaleX: 0,
                    transformOrigin: "left",
                    duration: 0.9,
                    ease: "power3.inOut",
                    stagger: 0.08,
                  },
                  "-=0.3"
                );

              section
                .querySelectorAll<HTMLElement>(".js-count")
                .forEach((el) => {
                  const target = Number(el.dataset.value ?? 0);
                  const counter = { v: 0 };
                  tl.to(
                    counter,
                    {
                      v: target,
                      duration: 1.4,
                      ease: "power2.out",
                      onUpdate: () =>
                        (el.textContent = Math.round(
                          counter.v
                        ).toLocaleString()),
                    },
                    "<"
                  );
                });

              const draws = section.querySelectorAll(".js-draw");
              if (draws.length)
                tl.from(
                  draws,
                  {
                    drawSVG: 0,
                    duration: 1.1,
                    ease: "power2.inOut",
                    stagger: 0.15,
                  },
                  "-=0.5"
                );

              const bursts = section.querySelectorAll("[data-burst]");
              if (bursts.length)
                tl.from(
                  bursts,
                  {
                    scale: 0,
                    rotation: () => gsap.utils.random(-180, 180),
                    autoAlpha: 0,
                    duration: 0.7,
                    ease: "back.out(3)",
                    stagger: { each: 0.05, from: "random" },
                  },
                  "-=0.5"
                );
            });

          if (reduced) return;

          // looping ambience — equalizer bars
          gsap.utils.toArray<HTMLElement>(".js-eq").forEach((bar, i) => {
            gsap.to(bar, {
              scaleY: () => gsap.utils.random(0.25, 1),
              duration: () => gsap.utils.random(0.35, 0.8),
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
              repeatRefresh: true,
              delay: i * 0.04,
              transformOrigin: "bottom",
            });
          });

          // infinite marquee ticker
          gsap.utils.toArray<HTMLElement>(".js-ticker").forEach((track) => {
            gsap.to(track, {
              xPercent: -50,
              duration: 18,
              ease: "none",
              repeat: -1,
            });
          });

          // slow sticker float on decorative shapes
          gsap.utils.toArray<HTMLElement>("[data-float]").forEach((el, i) => {
            gsap.to(el, {
              y: i % 2 ? 14 : -14,
              rotation: "+=6",
              duration: gsap.utils.random(2.4, 3.6),
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            });
          });

          // topographic flow lines — endless dash drift
          gsap.utils.toArray<HTMLElement>(".js-topo").forEach((path, i) => {
            gsap.to(path, {
              strokeDashoffset: i % 2 ? -240 : 240,
              duration: gsap.utils.random(10, 18),
              ease: "none",
              repeat: -1,
            });
          });

          // standing-wave type — chars bob in a seamless offset loop
          gsap.utils.toArray<HTMLElement>(".js-wavechar").forEach((ch, i) => {
            gsap.to(ch, {
              y: "+=12",
              duration: 1.1,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
              delay: (i % 12) * 0.09,
            });
          });

          // organic blobs morph between their two forms forever
          gsap.utils.toArray<SVGPathElement>(".js-blob").forEach((blob) => {
            const alt = blob.dataset.morph;
            if (alt)
              gsap.to(blob, {
                morphSVG: alt,
                duration: gsap.utils.random(3.5, 5.5),
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
              });
          });

          // concentric rings pulse outward in a seamless stagger
          gsap.utils.toArray<HTMLElement>(".js-rings").forEach((svg) => {
            gsap.fromTo(
              svg.querySelectorAll("circle"),
              { scale: 0.92, opacity: 0.5 },
              {
                scale: 1.06,
                opacity: 1,
                duration: 1.6,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                stagger: { each: 0.25, from: "center" },
              }
            );
          });

          // infinite spinners (vinyls, flowers, bursts)
          gsap.utils.toArray<HTMLElement>("[data-spin]").forEach((el, i) => {
            gsap.to(el, {
              rotation: i % 2 ? 360 : -360,
              duration: gsap.utils.random(8, 16),
              ease: "none",
              repeat: -1,
            });
          });

          // scroll parallax drift on doodles for depth
          gsap.utils.toArray<HTMLElement>("[data-drift]").forEach((el, i) => {
            gsap.to(el, {
              yPercent: i % 2 ? 60 : -60,
              ease: "none",
              scrollTrigger: {
                trigger: el.closest("[data-section]") ?? el,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            });
          });
        }
      );
    },
    { scope: container }
  );

  // Wrapped-style navigation: swipe left/right (mobile) or ←/→ keys jump
  // between sections; vertical scroll remains the primary spine.
  useEffect(() => {
    const jump = (dir: 1 | -1) => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-section]")
      );
      const mid = window.scrollY + window.innerHeight / 2;
      const current = sections.findIndex(
        (s) => s.offsetTop <= mid && s.offsetTop + s.offsetHeight > mid
      );
      sections[Math.min(sections.length - 1, Math.max(0, current + dir))]
        ?.scrollIntoView({ behavior: "smooth" });
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") jump(1);
      if (e.key === "ArrowLeft") jump(-1);
    };

    let startX = 0;
    let startY = 0;
    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5)
        jump(dx < 0 ? 1 : -1); // swipe left = next, like Wrapped
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div ref={container}>
      {/* film grain over everything + duotone/posterize filters for imagery */}
      <svg className="pointer-events-none fixed inset-0 z-40 h-full w-full opacity-[0.07] mix-blend-overlay" aria-hidden>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
        {/* duotone: shadows -> wrapped purple, highlights -> lime */}
        <filter id="duotone-wrapped">
          <feColorMatrix type="matrix" values="0.3 0.6 0.1 0 0  0.3 0.6 0.1 0 0  0.3 0.6 0.1 0 0  0 0 0 1 0" />
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0.25 0.81" />
            <feFuncG type="table" tableValues="0 0.96" />
            <feFuncB type="table" tableValues="0.96 0.42" />
          </feComponentTransfer>
        </filter>
        {/* posterize: crush image into hard color regions */}
        <filter id="poster-wrapped">
          <feComponentTransfer>
            <feFuncR type="discrete" tableValues="0.1 0.35 0.65 0.95" />
            <feFuncG type="discrete" tableValues="0.1 0.35 0.65 0.95" />
            <feFuncB type="discrete" tableValues="0.1 0.35 0.65 0.95" />
          </feComponentTransfer>
        </filter>
      </svg>
      <div className="fixed inset-x-0 top-0 z-50 h-1.5 bg-black/20">
        <div
          ref={progress}
          className="h-full origin-left scale-x-0 bg-[#CFF56A]"
        />
      </div>
      {children}
    </div>
  );
}
