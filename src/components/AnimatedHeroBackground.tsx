"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  {
    src: "/assets/ebrar-dis-cephe-ana.webp",
    alt: "Kırıkkale'deki Ebrar Optik mağazasının dış cephesi",
  },
  {
    src: "/assets/ebrar-magaza-ici.webp",
    alt: "Ebrar Optik mağazasının iç mekânı",
  },
  {
    src: "/assets/ebrar-gunes-gozlugu-rafi.webp",
    alt: "Ebrar Optik mağazasındaki güneş gözlükleri",
  },
];

export function AnimatedHeroBackground() {
  const [index, setIndex] = useState(0);
  const [rotating, setRotating] = useState(false);

  useEffect(() => {
    // Küçük ekranlarda ilk mağaza fotoğrafı sabit kalır.
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
        <picture key={image.src}>
          {i === 0 && <source media="(max-width: 767px)" srcSet="/assets/ebrar-gunes-gozlugu-mobil.webp" />}
          <Image
            src={image.src}
            alt={i === 0 ? "Ebrar Optik mağazası" : image.alt}
            fill
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            className={`object-cover transition-[opacity,transform] duration-1000 ease-in-out ${i === 0 ? "object-top max-md:object-center" : "object-center"}`}
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
        </picture>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/85 via-stone-900/70 to-stone-900/60 dark:from-stone-950/95 dark:via-stone-950/80 dark:to-stone-950/70 md:bg-gradient-to-r md:from-stone-900/90 md:via-stone-900/50 md:to-stone-900/10 md:dark:from-stone-950/95 md:dark:via-stone-950/70 md:dark:to-stone-950/20" />
    </div>
  );
}
