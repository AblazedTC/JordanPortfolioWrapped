import { cn } from "@/lib/utils";

export type SectionTheme = {
  bg: string;
  fg: string;
  acc: string;
  accFg: string;
};

// Full-screen snap section. Flat, loud, color-blocked — no gradients, no glass.
export default function Section({
  theme,
  children,
  className,
}: {
  theme: SectionTheme;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      data-section
      className="relative flex min-h-dvh snap-start flex-col justify-center overflow-hidden px-5 py-20 sm:px-10 md:px-16"
      style={
        {
          background: theme.bg,
          color: theme.fg,
          "--fg": theme.fg,
          "--acc": theme.acc,
          "--acc-fg": theme.accFg,
        } as React.CSSProperties
      }
    >
      <div className={cn("mx-auto w-full max-w-5xl", className)}>{children}</div>
    </section>
  );
}
