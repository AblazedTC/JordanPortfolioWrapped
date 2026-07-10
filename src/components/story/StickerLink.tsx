import { cn } from "@/lib/utils";

// Sticker-style CTA link: flat, thick border, hard shadow, presses on hover.
export default function StickerLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      data-sticker
      className={cn(
        "inline-flex items-center gap-2 border-[3px] border-black bg-[var(--acc)] px-6 py-3 text-sm font-black uppercase tracking-wide text-[var(--acc-fg)] shadow-[6px_6px_0_#000] transition-[transform,box-shadow] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#000] focus-visible:outline focus-visible:outline-4 focus-visible:outline-current",
        className
      )}
    >
      {children}
    </a>
  );
}
