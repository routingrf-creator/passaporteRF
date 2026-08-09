import { cn } from "@/lib/utils";

type PortfolioPageShellProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "cream" | "olive" | "split-cover";
  fullHeight?: boolean;
  flush?: boolean;
  /** Tighter vertical spacing for gallery sections */
  compact?: boolean;
};

export function PortfolioPageShell({
  children,
  className,
  id,
  variant = "cream",
  fullHeight = true,
  flush = false,
  compact = false,
}: PortfolioPageShellProps) {
  const useFullHeight = fullHeight && !compact;

  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        useFullHeight && "min-h-svh",
        variant === "cream" && "bg-[#EBE8E1]",
        variant === "olive" && "bg-[#6D6D52]",
        variant === "split-cover" && "bg-[#EBE8E1]",
        className
      )}
    >
      {flush ? (
        children
      ) : (
        <div
          className={cn(
            "mx-auto flex w-full max-w-[1440px] flex-col justify-center px-6 sm:px-10 md:px-14",
            compact ? "py-6 sm:py-8 md:py-10" : "py-10 md:py-14",
            useFullHeight && "min-h-svh"
          )}
        >
          {children}
        </div>
      )}
    </section>
  );
}

export function PortfolioLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[10px] font-medium tracking-[0.32em] text-[#8A7B58] uppercase sm:text-[11px]",
        className
      )}
    >
      {children}
    </p>
  );
}

export function PortfolioSerifHeading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "font-[family-name:var(--font-portfolio-serif)] font-normal tracking-[0.06em] text-[#8A7B58]",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function PortfolioScriptLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-[family-name:var(--font-portfolio-serif)] text-[clamp(2rem,4vw,3rem)] italic text-[#8A7B58]",
        className
      )}
    >
      {children}
    </span>
  );
}

export function PortfolioDivider({ className }: { className?: string }) {
  return <div className={cn("h-px bg-[#8A7B58]/35", className)} />;
}
