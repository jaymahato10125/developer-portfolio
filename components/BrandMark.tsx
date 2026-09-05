import { Hexagon } from "lucide-react";
import { cn } from "../lib/cn";

type BrandMarkProps = {
  compact?: boolean;
  className?: string;
  iconClassName?: string;
};

/** Company lockup — obsidian tile + wordmark. Reused in nav, footer, hero. */
export default function BrandMark({ compact = false, className, iconClassName }: BrandMarkProps) {
  return (
    <a
      href="#hero"
      className={cn("group flex items-center gap-3", className)}
      aria-label="Obsidian Tech Solution — home"
    >
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-xl bg-carbon text-cream shadow-sm transition-colors group-hover:bg-primary group-hover:text-on-primary dark:bg-dark-ink dark:text-dark-base dark:group-hover:bg-primary dark:group-hover:text-on-primary",
          iconClassName
        )}
        aria-hidden
      >
        <Hexagon size={20} strokeWidth={2.2} />
      </span>
      <span className="flex items-baseline gap-2">
        <span className="font-headline-md text-headline-md uppercase leading-none tracking-tight text-on-surface transition-colors group-hover:text-primary dark:text-dark-ink dark:group-hover:text-accent-bright">
          Obsidian
        </span>
        {!compact && (
          <span className="hidden font-label-mono-sm text-label-mono-sm uppercase tracking-wider text-on-surface-variant dark:text-dark-muted sm:inline-block">
            / Tech Solution
          </span>
        )}
      </span>
    </a>
  );
}
