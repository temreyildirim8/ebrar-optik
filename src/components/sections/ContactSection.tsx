"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+905458199862";

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

export default function ContactSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}?text=Merhaba%2C%20Ebrar%20Optik%27ten%20bilgi%20almak%20istiyorum`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            İletişim
          </h2>
          <p className="text-lg text-stone-600">
            Size yardımcı olmaktan mutluluk duyarız
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* WhatsApp */}
          <motion.div variants={itemVariants}>
            <Card className="border-stone-200 h-full">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">
                  WhatsApp
                </h3>
                <p className="text-sm text-stone-600 mb-4">
                  Hızlı iletişim için WhatsApp
                </p>
                <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E]">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Mesaj Gönder
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Phone */}
          <motion.div variants={itemVariants}>
            <Card className="border-stone-200 h-full">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-stone-100 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-stone-700" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">
                  Telefon
                </h3>
                <p className="text-sm text-stone-600 mb-4">
                  {WHATSAPP_NUMBER}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href={`tel:${WHATSAPP_NUMBER.replace(/\+/g, "")}`}>
                    Ara
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants}>
            <Card className="border-stone-200 h-full">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-stone-100 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-stone-700" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">
                  E-posta
                </h3>
                <p className="text-sm text-stone-600 mb-4">
                  info@ebraroptik.com.tr
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="mailto:info@ebraroptik.com.tr">
                    E-posta Gönder
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Address */}
          <motion.div variants={itemVariants}>
            <Card className="border-stone-200 h-full">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-stone-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-stone-700" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">
                  Adres
                </h3>
                <p className="text-sm text-stone-600 mb-4">
                  Kırıkkale Merkez
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Ebrar+Optik+Kırıkkale"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Haritada Gör
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
