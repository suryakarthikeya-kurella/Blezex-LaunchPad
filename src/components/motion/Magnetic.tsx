import type { ReactNode } from "react";

type Props = { children: ReactNode; strength?: number; className?: string };

// Buttons must not move on hover/tap, so this is now a static layout wrapper.
// Kept (instead of unwrapping ~15 call sites) so spacing/width classes stay intact.
const Magnetic = ({ children, className }: Props) => (
  <div className={className ?? "inline-block"}>{children}</div>
);
export default Magnetic;
