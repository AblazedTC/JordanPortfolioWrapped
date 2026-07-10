import { cn } from "@/lib/utils";

// Sticker-style chip: flat color, thick border, hard offset shadow, tilted.
export default function Sticker({
  children,
  rotate = -3,
  className,
}: {
  children: React.ReactNode;
  rotate?: number;
  className?: string;
}) {
  return (
    <span
      data-sticker
      className={cn(
        "inline-block border-[3px] border-black bg-[var(--acc)] px-4 py-1.5 text-sm font-black uppercase tracking-wide text-[var(--acc-fg)] shadow-[5px_5px_0_#000]",
        className
      )}
      style={{ rotate: `${rotate}deg` }}
    >
      {children}
    </span>
  );
}
