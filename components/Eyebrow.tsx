import { cn } from "../lib/cn";

type EyebrowProps = {
  glyph?: string;
  children: React.ReactNode;
  className?: string;
};

/** Mono eyebrow label with geometric glyph prefix (◆ ■ ▲ ●) — Stitch signature. */
export default function Eyebrow({ glyph = "◆", children, className }: EyebrowProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 font-label-mono-md text-label-mono-md uppercase tracking-widest",
        className
      )}
    >
      <span aria-hidden>{glyph}</span>
      <span>{children}</span>
    </div>
  );
}
