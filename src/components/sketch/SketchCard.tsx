import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const Tick = ({ pos }: { pos: string }) => (
  <span aria-hidden className={`absolute h-2.5 w-2.5 border-foreground ${pos}`} />
);

const SketchCard = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={cn("sketch-card group relative p-5 md:p-6", className)}>
    <Tick pos="-left-px -top-px border-l-2 border-t-2 rounded-tl-[20px]" />
    <Tick pos="-right-px -top-px border-r-2 border-t-2 rounded-tr-[20px]" />
    <Tick pos="-bottom-px -left-px border-b-2 border-l-2 rounded-bl-[20px]" />
    <Tick pos="-bottom-px -right-px border-b-2 border-r-2 rounded-br-[20px]" />
    {children}
  </div>
);
export default SketchCard;
