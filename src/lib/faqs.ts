import { business } from "./business";
import type { FaqItem } from "./schema";

export const faqs: FaqItem[] = [
  {
    question: "Kırıkkale'de göz muayenesi yapıyor musunuz?",
    answer:
      "Ebrar Optik bir optik mağazasıdır; reçetenize uygun gözlük, cam montajı ve lens hizmeti sunarız. Göz muayenesi için göz doktoruna yönlendiririz. Mevcut reçetenizle mağazamıza gelebilirsiniz.",
  },
  {
    question: "Numaralı güneş gözlüğü yaptırabilir miyim?",
    answer:
      "Evet. Beğendiğiniz çerçeveye reçetenize uygun numaralı güneş gözlüğü camı monte ediyoruz. Detay için mağazamıza uğrayın veya WhatsApp'tan yazın.",
  },
  {
    question: "Hangi lens çeşitlerini satıyorsunuz?",
    answer:
      "Günlük, haftalık, aylık ve renkli kontakt lens seçenekleri sunuyoruz. Uygun tip, reçetenize ve kullanım alışkanlığınıza göre belirlenir.",
  },
  {
    question: "Çalışma saatleriniz nedir?",
    answer: `Pazartesi–Cumartesi ${business.openingHours.opens}–${business.openingHours.closes} arasındayız. Pazar günü kapalıyız.`,
  },
  {
    question: "Randevu almam gerekir mi?",
    answer:
      "Çoğu işlem için önceden randevu zorunlu değildir; yine de yoğun saatlerde telefon veya WhatsApp ile haber vermeniz süreci hızlandırır.",
  },
  {
    question: "Çocuk gözlüğü seçiminde nelere dikkat ediyorsunuz?",
    answer:
      "Çocuğun yüz ölçüsüne uygun hafif çerçeve, sağlam menteşe ve reçeteye doğru cam seçimi önceliğimizdir. Aileyle birlikte deneme yaparak konforlu bir çözüm buluyoruz.",
  },
  {
    question: "Mağazanız nerede?",
    answer: `${business.addressDisplay}. Harita ve yol tarifi için sitemizdeki İletişim bölümünü kullanabilirsiniz.`,
  },
];
