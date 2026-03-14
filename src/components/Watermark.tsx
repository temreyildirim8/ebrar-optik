interface WatermarkProps {
  text?: string;
  position?: "bottom-right" | "bottom-left" | "center";
  opacity?: number;
  className?: string;
}

export function Watermark({
  text = "Ebrar Optik",
  position = "bottom-right",
  opacity = 0.15,
  className = "",
}: WatermarkProps) {
  const positionClasses = {
    "bottom-right": "bottom-3 right-3",
    "bottom-left": "bottom-3 left-3",
    center: "inset-0 flex items-center justify-center",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <span className="text-xs font-medium text-stone-500 dark:text-stone-400 whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}
