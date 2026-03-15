"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollAnimations";
import { motion, AnimatePresence } from "framer-motion";

interface Frame {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

export function FrameGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Tümü" },
    { id: "womens", label: "Kadın" },
    { id: "mens", label: "Erkek" },
    { id: "children", label: "Çocuk" },
    { id: "sunglasses", label: "Güneş Gözlüğü" },
  ];

  const frames: Frame[] = [
    {
      id: 1,
      name: "Klasik Yuvarlak",
      category: "womens",
      image: "/glasses/klasik-yuvarlak.webp",
      description: "Zarif ve klasik yuvarlak çerçeve",
    },
    {
      id: 2,
      name: "Modern Kare",
      category: "mens",
      image: "/glasses/modern-kare.webp",
      description: "Şık ve modern kare çerçeve",
    },
    {
      id: 3,
      name: "Aviator Güneş",
      category: "sunglasses",
      image: "/glasses/aviator-gunes.webp",
      description: "Klasik aviator tarzı güneş gözlüğü",
    },
    {
      id: 4,
      name: "Polarize Güneş",
      category: "sunglasses",
      image: "/glasses/polarize-gunes.webp",
      description: "Polarize camlı güneş gözlüğü",
    },
    {
      id: 5,
      name: "Kedi Gözü",
      category: "womens",
      image: "/glasses/kedi-gozu.webp",
      description: "Vintage kedi gözü modeli",
    },
    {
      id: 6,
      name: "Sportif",
      category: "mens",
      image: "/glasses/sportif.webp",
      description: "Aktif yaşam için sportif tasarım",
    },
    {
      id: 7,
      name: "Mini Çocuk",
      category: "children",
      image: "/glasses/mini-cocuk.webp",
      description: "Küçük yaşlar için mini çerçeve",
    },
    {
      id: 8,
      name: "Renkli Çocuk",
      category: "children",
      image: "/glasses/renkli-cocuk.webp",
      description: "Eğlenceli renkli çocuk çerçevesi",
    },
  ];

  const filteredFrames =
    activeCategory === "all"
      ? frames
      : frames.filter((frame) => frame.category === activeCategory);

  return (
    <section
      id="cerceveler"
      className="w-full bg-white py-20 dark:bg-stone-900"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <ScrollReveal className="mb-8 text-center" direction="up" distance={30}>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-4xl md:text-5xl">
            Çerçeve Koleksiyonu
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-stone-600 dark:text-stone-300">
            Her yüz şekline ve tarza uygun geniş çerçeve seçeneklerimiz
          </p>
        </ScrollReveal>

        {/* Category Tabs */}
        {/* Disabled for now */}
        {/* <ScrollReveal
          className="mb-8 flex flex-wrap justify-center gap-2"
          delay={0.1}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-white text-stone-600 hover:bg-stone-100 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </ScrollReveal> */}

        {/* Frames Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {filteredFrames.map((frame, index) => (
              <motion.div
                key={frame.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.9,
                  delay: (index % 4) * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <Card className="group h-full overflow-hidden border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-stone-800 dark:bg-stone-950">
                  <div className="aspect-square relative w-full overflow-hidden bg-stone-100 dark:bg-stone-800">
                    <Image
                      src={frame.image}
                      alt={frame.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-50">
                      {frame.name}
                    </h3>
                    <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                      {frame.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Store Visit CTA */}
        <ScrollReveal className="mt-12 text-center" delay={0.2}>
          <p className="text-base text-stone-600 dark:text-stone-400">
            Daha fazla seçenek için mağazamızı ziyaret edin
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
