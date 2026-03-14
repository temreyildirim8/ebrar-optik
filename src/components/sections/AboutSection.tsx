"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Hakkımızda
          </h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto">
            Kırıkkale&apos;de yıllardır göz sağlığınız için çalışıyoruz
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <Card className="border-stone-200 h-full">
              <CardContent className="p-6 text-center">
                <Clock className="w-10 h-10 mx-auto mb-4 text-stone-700" />
                <h3 className="text-xl font-semibold text-stone-900 mb-2">
                  Yılların Tecrübesi
                </h3>
                <p className="text-base text-stone-600 leading-relaxed">
                  Kırıkkale&apos;de yıllardır hizmet veren optik mağazamız,
                  deneyimli kadrosuyla müşterilerine en iyi hizmeti sunmaktadır.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="border-stone-200 h-full">
              <CardContent className="p-6 text-center">
                <Users className="w-10 h-10 mx-auto mb-4 text-stone-700" />
                <h3 className="text-xl font-semibold text-stone-900 mb-2">
                  Müşteri Memnuniyeti
                </h3>
                <p className="text-base text-stone-600 leading-relaxed">
                  Samimi ve güler yüzlü hizmet anlayışımızla,
                  her müşterimizin göz sağlığına özen gösteriyoruz.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="border-stone-200 h-full">
              <CardContent className="p-6 text-center">
                <Award className="w-10 h-10 mx-auto mb-4 text-stone-700" />
                <h3 className="text-xl font-semibold text-stone-900 mb-2">
                  Uzman Kadro
                </h3>
                <p className="text-base text-stone-600 leading-relaxed">
                  Profesyonel optometristlerimiz ile detaylı göz muayenesi
                  ve doğru lens seçimi konusunda yanınızdayız.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-stone-50 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 text-center">
            Misyonumuz
          </h3>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed text-center max-w-3xl mx-auto">
            Ebrar Optik olarak amacımız, her yaştan müşterimize kaliteli gözlük ve lens çözümleri
            sunmak. Modern ekipmanlarımız ve güncel teknolojimizle, göz sağlığınızı en iyi
            şekilde korumanıza yardımcı oluyoruz. Siz değerli müşterilerimize komşu
            dükkanı samimiyetinde profesyonel hizmet sunmaktan gurur duyuyoruz.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
