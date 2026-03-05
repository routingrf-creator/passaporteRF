import { Eye, Heart, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const metrics = [
  {
    icon: Eye,
    value: "+2.8M",
    label: "visualizacoes mensais",
  },
  {
    icon: Heart,
    value: "95K",
    label: "interacoes mensais",
  },
  {
    icon: Users,
    value: "+1.1M",
    label: "contas alcancadas",
  },
] as const;

interface MetricsStripProps {
  className?: string;
}

export function MetricsStrip({ className }: MetricsStripProps) {
  return (
    <section
      className={cn(
        "bg-linear-to-r from-passport-blue to-passport-dark py-10",
        className
      )}
      aria-label="Metricas de alcance"
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-4 sm:gap-12 md:gap-20">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex flex-col items-center gap-2 text-center text-white"
          >
            <metric.icon className="size-6 text-passport-yellow" />
            <span className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {metric.value}
            </span>
            <span className="text-sm text-white/80">{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
