"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const frames = [
  { id: "1", name: "Klasik Siyah", category: "Erkek", image: "/frames/placeholder.svg" },
  { id: "2", name: "Modern Metal", category: "Erkek", image: "/frames/placeholder.svg" },
  { id: "3", name: "Şık Oval", category: "Kadın", image: "/frames/placeholder.svg" },
  { id: "4", name: "Kedi Gözü", category: "Kadın", image: "/frames/placeholder.svg" },
  { id: "5", name: "Renkli Çocuk", category: "Çocuk", image: "/frames/placeholder.svg" },
  { id: "6", name: "Pilot Güneş", category: "Güneş Gözlüğü", image: "/frames/placeholder.svg" },
];

const categories = ["Tümü", "Erkek", "Kadın", "Çocuk", "Güneş Gözlüğü"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function FrameGallery() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const filteredFrames = selectedCategory === "Tümü"
    ? frames
    : frames.filter((frame) => frame.category === selectedCategory);

  return (
    <section id="frames" className="py-16 md:py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Çerçeve Koleksiyonumuz
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Kaliteli markaların şık çerçeveleri
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-sm hover:bg-stone-200 transition-colors"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </motion.div>

        {/* Gallery */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredFrames.map((frame) => (
            <motion.div key={frame.id} variants={itemVariants}>
              <Card className="group overflow-hidden border-stone-200 h-full">
                <div className="aspect-square bg-stone-100 relative">
                  <Image
                    src={frame.image}
                    alt={`${frame.name} çerçeve`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-stone-500 mb-1">{frame.category}</p>
                  <h3 className="text-base font-semibold text-stone-900">
                    {frame.name}
                  </h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredFrames.length === 0 && (
          <motion.p
            className="text-center text-stone-500 mt-8 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Bu kategoride çerçeve bulunmamaktadır.
          </motion.p>
        )}

        <motion.p
          className="text-center text-stone-500 mt-8 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          Daha fazla model için mağazamızı ziyaret edin
        </motion.p>
      </div>
    </section>
  );
}
