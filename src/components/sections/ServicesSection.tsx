"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Glasses, Sun, CircleDot, RefreshCw } from "lucide-react";

const services = [
  {
    id: "eye-exam",
    title: "Göz Muayenesi",
    description: "Uzman optometristlerimizle kapsamlı göz sağlığı kontrolü ve reçete düzenleme.",
    icon: Eye,
  },
  {
    id: "prescription",
    title: "Reçeteli Gözlük",
    description: "Reçetenize uygun şık ve konforlu gözlük çerçeveleri ve lensleri.",
    icon: Glasses,
  },
  {
    id: "sunglasses",
    title: "Güneş Gözlüğü",
    description: "UV korumalı, marka güneş gözlükleri ve reçeteli seçenekler.",
    icon: Sun,
  },
  {
    id: "contact-lenses",
    title: "Kontakt Lens",
    description: "Günlük, aylık ve yıllık lens seçenekleri ve lens bakım ürünleri.",
    icon: CircleDot,
  },
  {
    id: "lens-replacement",
    title: "Lens Değişimi",
    description: "Mevcut çerçevenize yeni lens takma hizmeti ve reçete güncelleme.",
    icon: RefreshCw,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto">
            Göz sağlığınız için profesyonel çözümler
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="group border-stone-200 hover:border-stone-400 transition-colors h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-stone-100 group-hover:bg-stone-200 transition-colors">
                        <Icon className="w-6 h-6 text-stone-700" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-stone-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-base text-stone-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
