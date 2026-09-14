import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
  amount?: number;
  staggerDelay?: number;
  offset?: number;
}

function StaticWrapper({ children, className = "" }: RevealProps) {
  return <div className={className}>{children}</div>;
}

export const ScrollReveal = StaticWrapper;
export const StaggerContainer = StaticWrapper;
export const StaggerItem = StaticWrapper;
export const FadeIn = StaticWrapper;
export const ScaleIn = StaticWrapper;
export const HeroReveal = StaticWrapper;
export const Parallax = StaticWrapper;
