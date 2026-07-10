import { cn } from "@/lib/utils";

// Word-split headline for kinetic reveals: each word slides up from its own
// clipping box ([data-kinetic] > .js-word, animated by StoryScroller).
export default function KineticText({
  text,
  className,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p";
}) {
  return (
    <Tag data-kinetic className={cn("font-display leading-[0.95]", className)}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <span className="js-word inline-block will-change-transform">
            {word}
            {"\u00A0"}
          </span>
        </span>
      ))}
    </Tag>
  );
}
