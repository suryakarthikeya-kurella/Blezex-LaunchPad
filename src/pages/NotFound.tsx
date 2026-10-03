import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SketchPath from "@/components/motion/SketchPath";
import Magnetic from "@/components/motion/Magnetic";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-paper px-6">
      <div className="blueprint pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" aria-hidden />
      <div className="relative text-center">
        <p
          aria-hidden
          className="select-none font-display text-[clamp(5.5rem,20vw,12rem)] font-extrabold leading-none text-transparent [-webkit-text-stroke:1.5px_#111]"
        >
          404
        </p>
        <svg viewBox="0 0 120 80" aria-hidden className="mx-auto -mt-2 mb-4 h-16 w-24 text-foreground">
          <SketchPath d="M10 12h100v60H10z" />
          <SketchPath d="M10 26h100" delay={0.3} />
          <SketchPath d="M18 19h.01 M26 19h.01" delay={0.5} />
          <SketchPath d="M44 42 L56 54 M56 42 L44 54" className="text-primary" delay={0.7} />
          <SketchPath d="M70 56 L76 50 L82 56 L88 50" className="text-primary" delay={0.9} />
        </svg>
        <h1 className="mb-6 font-display text-3xl font-extrabold md:text-4xl">
          <span className="sr-only">404: </span>Oops! Page not found
        </h1>
        <Magnetic>
          <a
            href="/"
            className="inline-flex items-center rounded-full bg-foreground px-6 py-3.5 font-display font-semibold text-background transition-colors duration-200 hover:bg-primary"
          >
            Return to Home
          </a>
        </Magnetic>
      </div>
    </main>
  );
};

export default NotFound;
