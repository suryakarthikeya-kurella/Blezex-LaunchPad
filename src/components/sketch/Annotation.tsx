import SketchPath from "@/components/motion/SketchPath";

const ARROWS = {
  "down-left": { d: "M58 4 C 40 6, 20 14, 8 40 M8 40 L6 28 M8 40 L19 34", box: "0 0 64 48" },
  "down-right": { d: "M6 4 C 24 6, 44 14, 56 40 M56 40 L58 28 M56 40 L45 34", box: "0 0 64 48" },
  left: { d: "M60 24 C 44 8, 24 8, 6 24 M6 24 L18 16 M6 24 L18 30", box: "0 0 64 48" },
  right: { d: "M4 24 C 20 8, 40 8, 58 24 M58 24 L46 16 M58 24 L46 30", box: "0 0 64 48" },
} as const;

type Props = { text: string; arrow?: keyof typeof ARROWS; className?: string };

const Annotation = ({ text, arrow = "down-left", className = "" }: Props) => (
  <div aria-hidden className={`pointer-events-none inline-flex flex-col items-start gap-1 -rotate-3 ${className}`}>
    <span className="annotation">{text}</span>
    <svg viewBox={ARROWS[arrow].box} className="h-10 w-14 text-primary">
      <SketchPath d={ARROWS[arrow].d} duration={0.9} />
    </svg>
  </div>
);
export default Annotation;
