"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  {
    src: "/assets/hero_lifestyle_wide_hr_1773526720963.webp",
    alt: "Gözlük kullanan müşteri — Ebrar Optik Kırıkkale",
  },
  {
    src: "/assets/hero_interior_wide_1773521896687.webp",
    alt: "Ebrar Optik Kırıkkale mağaza içi",
  },
  {
    src: "/assets/hero_product_wide_1773521883588.webp",
    alt: "Gözlük çerçevesi yakın çekim — Ebrar Optik Kırıkkale",
  },
];

export function AnimatedHeroBackground() {
  const [index, setIndex] = useState(0);
  const [rotating, setRotating] = useState(false);

  useEffect(() => {
    // xl altında tek kadın görseli sabit kalır; carousel 1280px ve üstünde döner.
    const desktop = window.matchMedia("(min-width: 1280px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    // LCP yalnızca ilk kullanıcı etkileşimine kadar ölçülür. Rotasyonu ve
    // sonraki slaytların indirilmesini o ana kadar geciktiriyoruz; aksi halde
    // her yeni slayt LCP'yi ileri itiyordu (ölçüm: 3,2 s).
    let timer: ReturnType<typeof setInterval> | undefined;
    let armed = false;
    const events = ["scroll", "pointerdown", "keydown"] as const;

    const arm = () => {
      if (armed) return;
      armed = true;
      setRotating(true);
      timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 3000); // Her 3 saniyede bir değiştir
    };

    const stop = () => {
      clearInterval(timer);
      armed = false;
      events.forEach((event) => window.removeEventListener(event, arm));
    };

    const update = () => {
      stop();
      setIndex(0);
      setRotating(false);
      if (reducedMotion.matches || !desktop.matches) return;
      events.forEach((event) =>
        window.addEventListener(event, arm, { once: true, passive: true })
      );
    };

    update();
    desktop.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);

    return () => {
      stop();
      desktop.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  // Slaytlar üst üste duruyor ve opaklıkla geçiş yapıyor. Önceki
  // AnimatePresence kurulumunda key başa dönünce rotasyon donuyor, çıkış
  // animasyonları tamamlanmadığı için elementler DOM'da birikiyordu.
  const visible = rotating ? images : images.slice(0, 1);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-white/20 md:bg-stone-900">
      {visible.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={i === 0}
          fetchPriority={i === 0 ? "high" : "auto"}
          className="object-cover object-center transition-[opacity,transform] duration-1000 ease-in-out"
          sizes="100vw"
          quality={90}
          style={{
            filter: "saturate(0.8) brightness(0.95)",
            opacity: i === index ? 1 : 0,
            // Yavaşça uzaklaşma (zoom-out) efekti
            transform: i === index ? "scale(1)" : "scale(1.05)",
            transitionDuration: i === index ? "1000ms, 3000ms" : "1000ms",
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/85 via-stone-900/70 to-stone-900/60 dark:from-stone-950/95 dark:via-stone-950/80 dark:to-stone-950/70 md:bg-gradient-to-r md:from-stone-900/90 md:via-stone-900/50 md:to-stone-900/10 md:dark:from-stone-950/95 md:dark:via-stone-950/70 md:dark:to-stone-950/20" />
    </div>
  );
}
