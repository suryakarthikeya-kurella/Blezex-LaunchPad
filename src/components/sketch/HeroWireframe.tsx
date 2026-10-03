import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";
import SketchPath from "@/components/motion/SketchPath";
import FloatCard from "@/components/motion/FloatCard";
import Annotation from "./Annotation";
import ServiceIcon from "./ServiceIcon";

// All coordinates on a 640x512 grid (8px steps); floating cards use % of the same box.
const BROWSER: [string, number][] = [
  [
    "M46 56h452a14 14 0 0 1 14 14v308a14 14 0 0 1-14 14H46a14 14 0 0 1-14-14V70a14 14 0 0 1 14-14z",
    0.1,
  ],
  ["M32 92h480", 0.3],
  [
    "M52 74a3 3 0 1 0 6 0a3 3 0 1 0-6 0 M66 74a3 3 0 1 0 6 0a3 3 0 1 0-6 0 M80 74a3 3 0 1 0 6 0a3 3 0 1 0-6 0",
    0.35,
  ],
  ["M208 68h128a6 6 0 0 1 0 12H208a6 6 0 0 1 0-12z", 0.4],
  ["M56 120h40 M304 120h24 M344 120h24 M384 120h24", 0.5],
  ["M436 112h40a8 8 0 0 1 0 16h-40a8 8 0 0 1 0-16z", 0.55],
  ["M56 160h200 M56 184h152", 0.65],
  ["M56 212h168", 0.75],
  ["M64 232h64a12 12 0 0 1 0 24H64a12 12 0 0 1 0-24z", 0.8],
  ["M296 152h184v104H296z M296 232l40-36 32 24 32-28 80 64", 0.7],
  ["M56 280h128v88H56z M200 280h128v88H200z M344 280h136v88H344z", 0.9],
  [
    "M72 344h64 M216 344h64 M360 344h64 M72 296h16v16H72z M216 296h16v16h-16z M360 296h16v16h-16z",
    1.2,
  ],
];

const PHONE: [string, number][] = [
  [
    "M462 224h92a16 16 0 0 1 16 16v232a16 16 0 0 1-16 16h-92a16 16 0 0 1-16-16V240a16 16 0 0 1 16-16z",
    1.0,
  ],
  ["M492 240h32 M488 472h40", 1.2],
  ["M464 264h88v56h-88z M464 344h64 M464 368h48 M464 400h88v48h-88z", 1.3],
];

const FLOW = "M512 152c32 0 40 32 32 64 M578 352c40-40 48-176 16-236";

const BARS = [10, 16, 12, 22, 28];

const HeroWireframe = () => {
  const reduce = useReducedMotion();
  const maskId = `hw-flow-${useId().replace(/:/g, "")}`;
  return (
    <div className="relative aspect-[5/4] w-[min(100%,58vh)] max-w-[540px] [container-type:inline-size]">
      <svg
        viewBox="0 0 640 512"
        className="absolute inset-0 h-full w-full text-foreground"
        aria-hidden
      >
        {BROWSER.map(([d, delay]) => (
          <SketchPath key={d} d={d} delay={delay} />
        ))}
      </svg>

      <svg
        viewBox="0 0 640 512"
        className="absolute inset-0 h-full w-full text-foreground"
        aria-hidden
      >
        <motion.path
          d={PHONE[0][0]}
          fill="white"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 1.0 }}
        />
        {PHONE.map(([d, delay]) => (
          <SketchPath key={d} d={d} delay={delay} />
        ))}
        {/* SketchPath's pathLength animation owns stroke-dasharray, so it draws a mask that reveals the static dashed path. */}
        <mask
          id={maskId}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="640"
          height="512"
        >
          <g className="text-white">
            <SketchPath d={FLOW} delay={1.6} duration={1.2} strokeWidth={6} />
          </g>
        </mask>
        <path
          d={FLOW}
          mask={`url(#${maskId})`}
          className="text-primary"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="6 8"
        />
        <g className="text-primary">
          <SketchPath d="M586 124l8-12 8 12" delay={2.7} duration={0.3} />
        </g>
      </svg>

      <FloatCard depth={14} className="absolute left-[55%] top-[2%] w-[40%]">
        <div aria-hidden className="sketch-card flex items-center gap-[3cqw] rounded-[14px] p-[2.5cqw]">
          <ServiceIcon
            name="ai"
            className="h-[8cqw] w-[8cqw] shrink-0 text-primary"
          />
          <div className="min-w-0 flex-1">
            <p className="whitespace-nowrap font-display text-[clamp(8px,2.4cqw,15px)] font-bold leading-tight">
              AI Automation
            </p>
            <div className="mt-[1.5cqw] h-[1cqw] min-h-[3px] rounded-full bg-hairline">
              <div className="h-full w-[72%] rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </FloatCard>

      <FloatCard
        depth={24}
        delay={1.2}
        className="absolute left-[-4%] top-[53%] w-[24%]"
      >
        <div aria-hidden className="sketch-card rounded-[14px] p-[2.5cqw]">
          <p className="text-[clamp(7px,1.8cqw,11px)] font-medium uppercase tracking-wider text-muted-foreground">
            Growth
          </p>
          <svg viewBox="0 0 64 32" className="mt-[1cqw] w-full" aria-hidden>
            {BARS.map((h, i) => (
              <rect
                key={i}
                x={2 + i * 13}
                y={32 - h}
                width="8"
                height={h}
                rx="2"
                className={i === 4 ? "fill-primary" : "fill-foreground"}
              />
            ))}
          </svg>
        </div>
      </FloatCard>

      <FloatCard
        depth={34}
        delay={2.4}
        className="absolute left-[38%] top-[82%]"
      >
        <div aria-hidden className="flex items-center gap-[1.5cqw] whitespace-nowrap rounded-full bg-primary px-[3cqw] py-[1.5cqw] font-display text-[clamp(9px,2.4cqw,15px)] font-bold text-white shadow-[3px_3px_0_#111]">
          Launch <span>✓</span>
        </div>
      </FloatCard>

      <Annotation
        text="your idea"
        arrow="down-right"
        className="absolute -left-[4%] -top-[6%] hidden md:inline-flex"
      />
      <Annotation
        text="shipped!"
        arrow="left"
        className="absolute -right-[6%] bottom-[2%] hidden md:inline-flex"
      />
    </div>
  );
};
export default HeroWireframe;
