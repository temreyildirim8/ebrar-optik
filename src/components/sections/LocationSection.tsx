"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+905458199862";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const mapVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function LocationSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}?text=Merhaba%2C%20Ebrar%20Optik%27ten%20bilgi%20almak%20istiyorum`;

  return (
    <section id="location" className="py-16 md:py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Bize Ulaşın
          </h2>
          <p className="text-lg text-stone-600">
            Sizi mağazamızda ağırlamaktan mutluluk duyarız
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-stone-700 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-stone-900 mb-1">
                        Adres
                      </h3>
                      <p className="text-base text-stone-600">
                        Kırıkkale Merkez<br />
                        (Tam adres buraya eklenecek)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-stone-700 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-stone-900 mb-1">
                        Çalışma Saatleri
                      </h3>
                      <p className="text-base text-stone-600">
                        Pazartesi - Cumartesi: 09:00 - 19:00<br />
                        Pazar: Kapalı
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-stone-700 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-stone-900 mb-2">
                        İletişim
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        <Button asChild variant="outline" size="sm">
                          <a href={`tel:${WHATSAPP_NUMBER.replace(/\+/g, "")}`}>
                            <Phone className="w-4 h-4 mr-2" />
                            Ara
                          </a>
                        </Button>
                        <Button asChild size="sm" className="bg-[#25D366] hover:bg-[#128C7E]">
                          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                            WhatsApp
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button asChild variant="outline" className="w-full" size="lg">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ebrar+Optik+Kırıkkale"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Yol Tarifi Al
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="h-[400px] lg:h-auto rounded-xl overflow-hidden border border-stone-200 bg-white"
            variants={mapVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.0!2d33.51!3d39.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDUxJzAwLjAiTiAzM8KwMzAnMzYuMCJF!5e0!3m2!1str!2str!4v1600000000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ebrar Optik Konum"
              className="grayscale-[20%]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
