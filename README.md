# Ebrar Optik - Showroom Web Sitesi

Ebrar Optik showroom web sitesi. Modern, hızlı ve kullanıcı dostu bir optik mağaza web sitesi.

## Teknoloji Stacki

- **Framework:** [Next.js](https://nextjs.org) 16+ (App Router)
- **Dil:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Stil:** [Tailwind CSS](https://tailwindcss.com) 4+
- **Bileşenler:** [shadcn/ui](https://ui.shadcn.com) (Radix UI + Nova preset)
- **Paket Yöneticisi:** [pnpm](https://pnpm.io)

## Kurulum

Gereksinimler:
- Node.js 20+
- pnpm

Projeyi klonlayın ve bağımlılıkları yükleyin:

```bash
cd web
pnpm install
```

## Geliştirme

Geliştirme sunucusunu başlatın:

```bash
pnpm dev
```

[http://localhost:3000](http://localhost:3000) adresinden uygulamayı görüntüleyin.

## Build

Statik site oluşturma:

```bash
pnpm build
```

Build çıktısı `dist/` dizinine oluşturulur.

## Ortam Değişkenleri

`.env.example` dosyasını `.env.local` olarak kopyalayın ve gerekli değerleri doldurun:

```bash
cp .env.example .env.local
```

| Değişken | Açıklama |
|----------|----------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp iletişim numarası |
| `NEXT_PUBLIC_SITE_URL` | Site URL'i |
| `NEXT_PUBLIC_SITE_NAME` | Site adı |

## Proje Yapısı

```
web/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── globals.css   # Global stiller + Tailwind
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Ana sayfa
│   ├── components/
│   │   └── ui/           # shadcn/ui bileşenleri
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── badge.tsx
│   └── lib/
│       └── utils.ts      # Yardımcı fonksiyonlar (cn, vb.)
├── public/               # Statik dosyalar
├── dist/                 # Build çıktısı
├── next.config.ts        # Next.js yapılandırması
├── components.json       # shadcn/ui yapılandırması
└── tsconfig.json         # TypeScript yapılandırması
```

## Mevcut Bileşenler

- `Button` - Buton bileşeni
- `Card` - Kart bileşeni
- `Input` - Form input bileşeni
- `Badge` - Etiket/rozet bileşeni

Yeni bileşen eklemek için:

```bash
pnpm dlx shadcn@latest add [bileşen-adı]
```

## Dağıtım (Deployment)

Bu proje statik site olarak yapılandırılmıştır (`output: 'export'`). Vercel, Netlify veya benzeri platformlara kolayca dağıtılabilir.

### Vercel ile Dağıtım

```bash
pnpm dlx vercel --prod
```

## Lisans

Tüm hakları saklıdır © Ebrar Optik
