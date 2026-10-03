const BlueprintGrid = ({ className = "" }: { className?: string }) => (
  <div aria-hidden className={`blueprint pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] ${className}`} />
);
export default BlueprintGrid;
