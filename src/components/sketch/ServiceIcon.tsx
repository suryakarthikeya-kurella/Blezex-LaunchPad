import { cn } from "@/lib/utils";

export type ServiceIconName = "web" | "saas" | "ai" | "marketing" | "design";

const ICONS: Record<ServiceIconName, string[]> = {
  web: ["M8 14h48v36H8z", "M8 24h48", "M14 19h.01 M20 19h.01", "M16 32h20 M16 39h32"],
  saas: ["M32 8 L56 20 L32 32 L8 20z", "M8 30 L32 42 L56 30", "M8 40 L32 52 L56 40"],
  ai: ["M20 20h24v24H20z", "M28 20v-8 M36 20v-8 M28 44v8 M36 44v8 M20 28h-8 M20 36h-8 M44 28h8 M44 36h8", "M28 28h8v8h-8z"],
  marketing: ["M10 8v46h46", "M16 44 L28 32 L38 38 L54 18", "M44 18h10v10"],
  design: ["M12 52 L16 38 L42 12 L52 22 L26 48z", "M38 16 L48 26", "M12 52 L24 48"],
};

const ServiceIcon = ({ name, className }: { name: ServiceIconName; className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    aria-hidden
    className={cn("h-12 w-12 text-foreground transition-colors group-hover:text-primary", className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <g className="origin-center transition-transform duration-500 group-hover:-translate-y-1">
      {ICONS[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </g>
  </svg>
);
export default ServiceIcon;
