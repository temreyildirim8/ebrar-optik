"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Glasses } from "lucide-react";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+905458199862";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}?text=Merhaba%2C%20Ebrar%20Optik%27ten%20bilgi%20almak%20istiyorum`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-b from-stone-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo/Brand */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-8"
            variants={itemVariants}
          >
            <Glasses className="w-10 h-10 md:w-12 md:h-12 text-stone-800" strokeWidth={1.5} />
            <span className="text-2xl md:text-3xl font-bold text-stone-900 tracking-tight">
              Ebrar Optik
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight"
            variants={itemVariants}
          >
            Görüşünüz Bizim İçin Değerli
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-stone-600 mb-10 leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Kırıkkale&apos;de güvenilir optik hizmeti. Profesyonel göz muayenesi,
            şık çerçeveler ve kaliteli lensler için bizi ziyaret edin.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white text-lg px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp üzerinden bize ulaşın"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp&apos;tan Ulaşın</span>
              </a>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-stone-500 text-base"
            variants={itemVariants}
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Uzman Optometrist
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Geniş Çerçeve Koleksiyonu
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Hızlı Servis
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
