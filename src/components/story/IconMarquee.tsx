"use client";

import { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PackIcon from "./PackIcon";
import { cn } from "@/lib/utils";

const SPEED = 55; // px per second — constant regardless of screen width

/**
 * Seamless, infinitely-scrolling icon strip that always fills the screen.
 * The base list is repeated until one segment is wider than the container, then
 * two identical segments scroll and wrap — so wide monitors never show a gap.
 */
export default function IconMarquee({
  icons,
  className,
}: {
  icons: string[];
  className?: string;
}) {
  const container = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [reps, setReps] = useState(2);

  // grow reps until a single segment (half the track) covers the container
  const fit = () => {
    if (!container.current || !track.current) return;
    const cw = container.current.offsetWidth;
    const perCopy = track.current.scrollWidth / (2 * reps);
    if (!perCopy) return;
    const need = Math.ceil(cw / perCopy) + 1;
    if (need > reps) setReps(need);
  };

  useLayoutEffect(fit, [reps, icons]);

  useLayoutEffect(() => {
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reps]);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (!track.current) return;
      const dist = track.current.scrollWidth / 2; // one segment
      gsap.to(track.current, {
        x: -dist,
        duration: dist / SPEED,
        ease: "none",
        repeat: -1,
      });
    },
    { dependencies: [reps], scope: container },
  );

  const segment = Array.from({ length: reps }, () => icons).flat();

  return (
    <div ref={container} className={cn("overflow-hidden", className)} aria-hidden>
      <div ref={track} className="flex w-max items-center">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center py-3">
            {segment.map((icon, i) => (
              <PackIcon key={i} icon={icon} className="mr-10 h-8 w-8 shrink-0" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
