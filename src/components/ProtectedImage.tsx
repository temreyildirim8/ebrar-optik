"use client";

import { useState } from "react";
import Image from "next/image";
import { useImageProtection } from "@/hooks/useImageProtection";
import { Watermark } from "./Watermark";

interface ProtectedImageProps {
  src: string;
  alt: string;
  watermark?: boolean;
  watermarkText?: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  width?: number;
  height?: number;
}

export function ProtectedImage({
  src,
  alt,
  watermark = true,
  watermarkText = "Ebrar Optik",
  className = "",
  fill = false,
  priority = false,
  width,
  height,
}: ProtectedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const protectionRef = useImageProtection({
    enabled: true,
    blockContextMenu: true,
    blockDrag: true,
  });

  return (
    <div
      ref={protectionRef}
      className={`relative h-full w-full overflow-hidden bg-stone-200 dark:bg-stone-800 ${className}`}
      draggable={false}
    >
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={`object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          draggable={false}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          onLoad={() => setIsLoaded(true)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={`object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          draggable={false}
          onLoad={() => setIsLoaded(true)}
        />
      )}
      {watermark && (
        <div
          className={`transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Watermark text={watermarkText} />
        </div>
      )}
    </div>
  );
}
