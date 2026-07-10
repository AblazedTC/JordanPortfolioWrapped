import { cn } from "@/lib/utils";

/**
 * Topographic flow-field background lines. Each path loops a slow dash-offset
 * drift via the .js-topo convention in StoryScroller. Pure decoration.
 */
export default function TopoLines({ className }: { className?: string }) {
  const paths = [
    "M-20 40 C 150 10, 280 90, 450 55 S 750 20, 1020 70",
    "M-20 90 C 160 60, 300 140, 470 105 S 770 65, 1020 120",
    "M-20 145 C 170 115, 310 195, 480 160 S 780 115, 1020 175",
    "M-20 200 C 180 170, 320 250, 490 215 S 790 170, 1020 230",
    "M-20 255 C 190 225, 330 300, 500 268 S 800 225, 1020 285",
  ];
  return (
    <svg
      viewBox="0 0 1000 320"
      preserveAspectRatio="none"
      className={cn("pointer-events-none absolute h-64 w-full opacity-20", className)}
      aria-hidden
    >
      {paths.map((d) => (
        <path
          key={d}
          className="js-topo"
          d={d}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="14 10"
        />
      ))}
    </svg>
  );
}
