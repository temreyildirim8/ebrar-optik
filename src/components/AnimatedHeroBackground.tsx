"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/assets/hero_lifestyle_wide_hr_1773526720963.webp", // Ana, Lifestyle
  "/assets/hero_interior_wide_1773521896687.webp", // Mağaza
  "/assets/hero_product_wide_1773521883588.webp", // Yakın Çekim Ürün
];

export function AnimatedHeroBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Her 3 saniyede bir değiştir

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-stone-900">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1, ease: "easeInOut" },
            scale: { duration: 3, ease: "linear" }, // Yavaşça uzaklaşma (zoom-out) efekti
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`Ebrar Optik Konsept ${currentIndex + 1}`}
            fill
            priority={currentIndex === 0} // Sadece ilk resmi hemen yükle
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
        </motion.div>
      </AnimatePresence>

      {/* Yazıların okunabilirliğini artırmak için zarif gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/50 to-stone-900/10 dark:from-stone-950/95 dark:via-stone-950/70 dark:to-stone-950/20" />
    </div>
  );
}
