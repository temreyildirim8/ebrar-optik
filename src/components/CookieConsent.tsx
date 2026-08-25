"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import Script from "next/script";

const STORAGE_KEY = "ebrar-cerez-onayi";

/** Metin veya çerez türleri değişirse artır; kayıtlı rıza geçersiz sayılır. */
const CONSENT_VERSION = 1;

type Decision = "kabul" | "ret";

/** "bilinmiyor" yalnızca sunucu render'ında; o anda hiçbir şey çizilmez. */
type Snapshot = Decision | "yok" | "bilinmiyor";

type StoredConsent = {
  durum: Decision;
  tarih: string;
  surum: number;
};

let listeners: (() => void)[] = [];
let cache: Snapshot | undefined;

function subscribe(onChange: () => void) {
  listeners.push(onChange);
  return () => {
    listeners = listeners.filter((listener) => listener !== onChange);
  };
}

function notify() {
  cache = undefined;
  listeners.forEach((listener) => listener());
}

function getSnapshot(): Snapshot {
  // useSyncExternalStore aynı render'da birden çok kez çağırabiliyor;
  // dönen değerin sabit kalması için sonucu saklıyoruz.
  if (cache !== undefined) return cache;

  let sonuc: Snapshot = "yok";
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as StoredConsent;
      if (
        parsed.surum === CONSENT_VERSION &&
        (parsed.durum === "kabul" || parsed.durum === "ret")
      ) {
        sonuc = parsed.durum;
      }
    }
  } catch {
    // Depolama kapalı veya kayıt bozuk: karar verilmemiş sayılır.
  }

  cache = sonuc;
  return sonuc;
}

function getServerSnapshot(): Snapshot {
  return "bilinmiyor";
}

function kaydet(durum: Decision) {
  const kayit: StoredConsent = {
    durum,
    // İspat yükü için karar anını da saklıyoruz.
    tarih: new Date().toISOString(),
    surum: CONSENT_VERSION,
  };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(kayit));
  } catch {
    // Depolama kapalıysa karar bu oturumla sınırlı kalır.
  }
  notify();
}

/** Footer'daki "Çerez Tercihleri" düğmesi bunu çağırıp banner'ı geri getirir. */
export function cerezTercihleriniSifirla() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // yoksay
  }
  notify();
}

export function CookieConsent({ gaId }: { gaId: string }) {
  const durum = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return (
    <>
      {/* Analytics yalnızca açık rıza sonrası yükleniyor. */}
      {durum === "kabul" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
          </Script>
        </>
      )}

      {durum === "yok" && (
        <div
          role="dialog"
          aria-labelledby="cerez-basligi"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200 bg-white/95 px-6 py-5 backdrop-blur dark:border-stone-800 dark:bg-stone-950/95"
        >
          <div className="container mx-auto flex max-w-4xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2
                id="cerez-basligi"
                className="text-sm font-semibold text-stone-900 dark:text-stone-50"
              >
                Çerez tercihiniz
              </h2>
              <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                Siteyi nasıl kullandığınızı anlamak için isteğe bağlı analiz
                çerezleri kullanmak istiyoruz. Reddederseniz hiçbir analiz
                çerezi yüklenmez ve site aynı şekilde çalışır. Ayrıntılar için{" "}
                <Link
                  href="/kvkk"
                  className="font-medium text-brand underline hover:text-brand-mid"
                >
                  KVKK aydınlatma metni
                </Link>
                .
              </p>
            </div>

            <div className="flex shrink-0 gap-3">
              {/* İki seçenek de eşit görünürlükte; öne çıkarılmış "kabul" yok. */}
              <button
                type="button"
                onClick={() => kaydet("ret")}
                className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-lg border border-stone-300 px-5 py-3 text-sm font-medium text-stone-800 transition-colors hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring focus-visible:ring-offset-2 dark:border-stone-700 dark:text-stone-100 dark:hover:bg-stone-900 md:flex-none"
              >
                Reddet
              </button>
              <button
                type="button"
                onClick={() => kaydet("kabul")}
                className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-lg border border-stone-300 px-5 py-3 text-sm font-medium text-stone-800 transition-colors hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring focus-visible:ring-offset-2 dark:border-stone-700 dark:text-stone-100 dark:hover:bg-stone-900 md:flex-none"
              >
                Kabul Et
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
