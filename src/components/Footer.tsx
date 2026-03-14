import { Glasses } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Glasses className="w-8 h-8" strokeWidth={1.5} />
              <span className="text-xl font-bold">Ebrar Optik</span>
            </div>
            <p className="text-stone-400 text-sm">
              Kırıkkale&apos;de yıllardır göz sağlığınız için hizmetinizdeyiz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Hizmetler</a></li>
              <li><a href="#frames" className="hover:text-white transition-colors">Çerçeveler</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">İletişim</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li>Kırıkkale Merkez</li>
              <li>Tel: +90 545 819 98 62</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-400 text-sm">
              © {currentYear} Ebrar Optik. Tüm hakları saklıdır.
            </p>
            <p className="text-stone-500 text-xs">
              Kişisel verileriniz KVKK kapsamında korunmaktadır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
