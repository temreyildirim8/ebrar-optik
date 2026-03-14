"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

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
      image: "/frames/womens-1.jpg",
      description: "Zarif ve klasik yuvarlak çerçeve",
    },
    {
      id: 2,
      name: "Modern Kare",
      category: "mens",
      image: "/frames/mens-1.jpg",
      description: "Şık ve modern kare çerçeve",
    },
    {
      id: 3,
      name: "Renkli Çocuk",
      category: "children",
      image: "/frames/children-1.jpg",
      description: "Eğlenceli renkli çocuk çerçevesi",
    },
    {
      id: 4,
      name: "Aviator Güneş",
      category: "sunglasses",
      image: "/frames/sunglasses-1.jpg",
      description: "Klasik aviator tarzı güneş gözlüğü",
    },
    {
      id: 5,
      name: "Kedi Gözü",
      category: "womens",
      image: "/frames/womens-2.jpg",
      description: "Vintage kedi gözü modeli",
    },
    {
      id: 6,
      name: "Sportif",
      category: "mens",
      image: "/frames/mens-2.jpg",
      description: "Aktif yaşam için sportif tasarım",
    },
    {
      id: 7,
      name: "Mini Çocuk",
      category: "children",
      image: "/frames/children-2.jpg",
      description: "Küçük yaşlar için mini çerçeve",
    },
    {
      id: 8,
      name: "Polarize Güneş",
      category: "sunglasses",
      image: "/frames/sunglasses-2.jpg",
      description: "Polarize camlı güneş gözlüğü",
    },
  ];

  const filteredFrames =
    activeCategory === "all"
      ? frames
      : frames.filter((frame) => frame.category === activeCategory);

  return (
    <section id="cerceveler" className="w-full bg-stone-50 py-20 dark:bg-stone-900">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-4xl md:text-5xl">
            Çerçeve Koleksiyonu
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-stone-600 dark:text-stone-300">
            Her yüz şekline ve tarza uygun geniş çerçeve seçeneklerimiz
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
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
        </div>

        {/* Frames Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredFrames.map((frame) => (
            <Card
              key={frame.id}
              className="group overflow-hidden border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-stone-800 dark:bg-stone-950"
            >
              <div className="aspect-square w-full overflow-hidden bg-stone-100 dark:bg-stone-800">
                <div className="flex h-full w-full items-center justify-center text-stone-400">
                  <svg
                    className="h-24 w-24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
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
          ))}
        </div>

        {/* Store Visit CTA */}
        <div className="mt-12 text-center">
          <p className="text-base text-stone-600 dark:text-stone-400">
            Daha fazla seçenek için mağazamızı ziyaret edin
          </p>
        </div>
      </div>
    </section>
  );
}
