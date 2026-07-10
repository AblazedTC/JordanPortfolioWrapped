import { cn } from "@/lib/utils";

/**
 * Text warped into a standing wave — chars are pre-offset along a sine curve
 * and the .js-wavechar loop keeps them bobbing (kinetic typography / envelope
 * distortion). Server-rendered spans, SSR-safe.
 */
export default function WavyText({
  text,
  className,
  amp = 10,
}: {
  text: string;
  className?: string;
  amp?: number;
}) {
  return (
    <span className={cn("inline-block whitespace-pre", className)}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className="js-wavechar inline-block"
          style={{
            transform: `translateY(${Math.round(Math.sin(i * 0.55) * amp)}px)`,
          }}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}
