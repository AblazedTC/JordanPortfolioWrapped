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
