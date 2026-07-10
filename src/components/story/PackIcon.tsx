import { cn } from "@/lib/utils";

/**
 * Recolorable icon from public/cards/svgpack via CSS masking — the icon's
 * alpha becomes a stencil and currentColor shows through (masking/clipping +
 * duotone treatment in one).  icon="headphones" -> icons8-headphones-50.svg
 */
export default function PackIcon({
  icon,
  className,
  ...rest
}: { icon: string; className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  const url = `url(/cards/svgpack/icons8-${icon}-50.svg)`;
  return (
    <div
      {...rest}
      aria-hidden
      className={cn("pointer-events-none h-10 w-10 bg-current", className)}
      style={{
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

/** Seamless marquee strip of pack icons (pair with .js-ticker loop). */
export function IconMarquee({
  icons,
  className,
}: {
  icons: string[];
  className?: string;
}) {
  const row = [...icons, ...icons];
  return (
    <div className={cn("overflow-hidden", className)} aria-hidden>
      <div className="js-ticker flex w-max items-center gap-10 py-3">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-10">
            {row.map((icon, i) => (
              <PackIcon key={i} icon={icon} className="h-8 w-8 shrink-0" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
