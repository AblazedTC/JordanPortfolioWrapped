import { cn } from "@/lib/utils";

/**
 * Wrapped-style flat SVG doodles. Animation hooks (read by StoryScroller):
 *   data-float — slow bob/drift loop
 *   data-spin  — infinite rotation
 *   .js-draw   — DrawSVG line-draw on section entry
 * All are aria-hidden decoration.
 */

type P = React.SVGProps<SVGSVGElement>;

export function Sparkle({ className, ...rest }: P) {
  return (
    <svg {...rest} viewBox="0 0 64 64" className={cn("pointer-events-none h-12 w-12", className)} aria-hidden>
      <path
        d="M32 2 L38 26 L62 32 L38 38 L32 62 L26 38 L2 32 L26 26 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Flower({ className, ...rest }: P) {
  return (
    <svg {...rest} viewBox="0 0 64 64" className={cn("pointer-events-none h-14 w-14", className)} aria-hidden>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
        <ellipse
          key={r}
          cx="32"
          cy="14"
          rx="8"
          ry="13"
          fill="currentColor"
          transform={`rotate(${r} 32 32)`}
        />
      ))}
      <circle cx="32" cy="32" r="7" fill="#121212" />
    </svg>
  );
}

export function Squiggle({ className, ...rest }: P) {
  return (
    <svg {...rest} viewBox="0 0 200 40" className={cn("pointer-events-none h-8 w-40", className)} aria-hidden>
      <path
        className="js-draw"
        d="M4 20 Q 20 2, 36 20 T 68 20 T 100 20 T 132 20 T 164 20 T 196 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Spring({ className, ...rest }: P) {
  return (
    <svg {...rest} viewBox="0 0 60 120" className={cn("pointer-events-none h-20 w-10", className)} aria-hidden>
      <path
        className="js-draw"
        d="M10 8 C 55 8, 55 32, 10 32 C 55 32, 55 56, 10 56 C 55 56, 55 80, 10 80 C 55 80, 55 104, 10 104"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

// vinyl motif adapted from make-a-wrapped's favicon, flattened to Wrapped style
export function Vinyl({ className, ...rest }: P) {
  return (
    <svg {...rest} viewBox="0 0 64 64" className={cn("pointer-events-none h-16 w-16", className)} aria-hidden>
      <circle cx="32" cy="32" r="30" fill="#121212" />
      <g stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5">
        <circle cx="32" cy="32" r="24" />
        <circle cx="32" cy="32" r="19" />
        <circle cx="32" cy="32" r="14" />
      </g>
      <circle cx="32" cy="32" r="9" fill="currentColor" />
      <circle cx="32" cy="32" r="2.5" fill="#121212" />
    </svg>
  );
}

export function Burst({ className, ...rest }: P) {
  return (
    <svg {...rest} viewBox="0 0 64 64" className={cn("pointer-events-none h-14 w-14", className)} aria-hidden>
      {Array.from({ length: 12 }, (_, i) => (
        <line
          key={i}
          x1="32"
          y1="32"
          x2="32"
          y2="6"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          transform={`rotate(${i * 30} 32 32)`}
        />
      ))}
      <circle cx="32" cy="32" r="10" fill="#121212" />
    </svg>
  );
}

export function Arrow({ className, ...rest }: P) {
  return (
    <svg {...rest} viewBox="0 0 80 80" className={cn("pointer-events-none h-14 w-14", className)} aria-hidden>
      <path
        className="js-draw"
        d="M10 70 C 10 30, 40 12, 68 14 M50 8 L 70 14 L 62 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// organic blob that morphs between two forms (MorphSVG loop via .js-blob)
export function Blob({ className, ...rest }: P) {
  return (
    <svg {...rest} viewBox="-100 -100 200 200" className={cn("pointer-events-none h-40 w-40", className)} aria-hidden>
      <path
        className="js-blob"
        fill="currentColor"
        d="M55,-60C68,-45,73,-23,71,-3C69,17,60,34,47,48C34,62,17,73,-2,75C-21,77,-42,70,-55,56C-68,42,-73,21,-72,1C-71,-19,-64,-38,-51,-53C-38,-68,-19,-79,2,-81C23,-83,42,-75,55,-60Z"
        data-morph="M48,-52C61,-38,69,-19,68,-1C67,17,57,34,44,49C31,64,15,77,-4,81C-23,85,-46,80,-58,66C-70,52,-71,29,-70,8C-69,-13,-66,-32,-55,-46C-44,-60,-22,-69,-1,-68C20,-67,35,-66,48,-52Z"
      />
    </svg>
  );
}

// row of Wrapped-style arches
export function Arches({ className, ...rest }: P) {
  return (
    <svg {...rest} viewBox="0 0 300 60" preserveAspectRatio="none" className={cn("pointer-events-none h-14 w-full", className)} aria-hidden>
      {[0, 60, 120, 180, 240].map((x) => (
        <path key={x} d={`M${x} 60 L${x} 30 A30 30 0 0 1 ${x + 60} 30 L${x + 60} 60 Z`} fill="currentColor" />
      ))}
    </svg>
  );
}

// concentric rings that pulse in a seamless loop (.js-rings)
export function Rings({ className, ...rest }: P) {
  return (
    <svg {...rest} viewBox="0 0 200 200" className={cn("js-rings pointer-events-none h-48 w-48", className)} aria-hidden>
      {[90, 68, 46, 24].map((r) => (
        <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="currentColor" strokeWidth="8" style={{ transformOrigin: "center" }} />
      ))}
    </svg>
  );
}

// chunky 5-point star (distinct from the 4-point Sparkle)
export function Star({ className, ...rest }: P) {
  return (
    <svg {...rest} viewBox="0 0 64 64" className={cn("pointer-events-none h-12 w-12", className)} aria-hidden>
      <path
        d="M32 3 L40 23 L61 23 L44 36 L51 57 L32 44 L13 57 L20 36 L3 23 L24 23 Z"
        fill="currentColor"
        stroke="#121212"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// lightning bolt
export function Bolt({ className, ...rest }: P) {
  return (
    <svg {...rest} viewBox="0 0 64 64" className={cn("pointer-events-none h-14 w-10", className)} aria-hidden>
      <path
        d="M36 2 L12 36 L28 36 L24 62 L52 24 L34 24 Z"
        fill="currentColor"
        stroke="#121212"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// hand-drawn zigzag stroke (line-draws on entry)
export function Zigzag({ className, ...rest }: P) {
  return (
    <svg {...rest} viewBox="0 0 200 40" className={cn("pointer-events-none h-8 w-40", className)} aria-hidden>
      <path
        className="js-draw"
        d="M4 8 L28 32 L52 8 L76 32 L100 8 L124 32 L148 8 L172 32 L196 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// checkerboard swatch
export function Checker({ className, ...rest }: P) {
  const cells = [0, 1, 2, 3];
  return (
    <svg {...rest} viewBox="0 0 64 64" className={cn("pointer-events-none h-14 w-14", className)} aria-hidden>
      {cells.map((r) =>
        cells.map((c) =>
          (r + c) % 2 === 0 ? (
            <rect key={`${r}-${c}`} x={c * 16} y={r * 16} width="16" height="16" fill="currentColor" />
          ) : null,
        ),
      )}
    </svg>
  );
}

// loose spiral (line-draws on entry)
export function Spiral({ className, ...rest }: P) {
  return (
    <svg {...rest} viewBox="0 0 80 80" className={cn("pointer-events-none h-16 w-16", className)} aria-hidden>
      <path
        className="js-draw"
        d="M40 40 C40 34 48 34 48 42 C48 52 33 52 33 39 C33 24 53 24 55 43 C57 62 28 64 25 39 C22 12 58 10 62 42"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

// stacked capsule pills
export function Pill({ className, ...rest }: P) {
  return (
    <svg {...rest} viewBox="0 0 72 48" className={cn("pointer-events-none h-10 w-16", className)} aria-hidden>
      <rect x="4" y="6" width="64" height="16" rx="8" fill="currentColor" />
      <rect x="4" y="26" width="42" height="16" rx="8" fill="none" stroke="currentColor" strokeWidth="5" />
    </svg>
  );
}

// downward triangle / pennant
export function Triangle({ className, ...rest }: P) {
  return (
    <svg {...rest} viewBox="0 0 64 64" className={cn("pointer-events-none h-12 w-12", className)} aria-hidden>
      <path
        d="M6 8 L58 8 L32 58 Z"
        fill="currentColor"
        stroke="#121212"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
