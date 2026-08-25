"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
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
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    // showModal(): focus tuzağı, arka planın inert olması ve top-layer
    // yerleşimi tarayıcıdan geliyor; ayrıca bir şey yazmaya gerek yok.
    if (durum === "yok" && !dialog.open) {
      dialog.showModal();
      // Varsayılan davranış paragraf içindeki KVKK linkini odaklıyor; ekran
      // okuyucunun önce diyaloğun başlığını duyurması için kendisine alıyoruz.
      dialog.focus();
    }
    if (durum !== "yok" && dialog.open) dialog.close();
  }, [durum]);

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

      <dialog
        ref={dialogRef}
        aria-labelledby="cerez-basligi"
        tabIndex={-1}
        // Cevap vermek zorunlu: ESC ile kapatmayı engelliyoruz.
        onCancel={(event) => event.preventDefault()}
        className="m-auto max-h-[calc(100%-4rem)] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-2xl border border-stone-200 bg-white p-6 text-left shadow-xl backdrop:bg-stone-950/60 dark:border-stone-800 dark:bg-stone-950 sm:p-8"
      >
        <h2
          id="cerez-basligi"
          className="text-lg font-semibold text-stone-900 dark:text-stone-50"
        >
          Çerez tercihiniz
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
          Siteyi nasıl kullandığınızı anlamak için isteğe bağlı analiz çerezleri
          kullanmak istiyoruz. Reddederseniz hiçbir analiz çerezi yüklenmez ve
          site aynı şekilde çalışır. Ayrıntılar için{" "}
          <Link
            href="/kvkk"
            className="font-medium text-brand underline hover:text-brand-mid"
          >
            KVKK aydınlatma metni
          </Link>
          .
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {/* İki seçenek de eşit görünürlükte; öne çıkarılmış "kabul" yok. */}
          <button
            type="button"
            onClick={() => kaydet("ret")}
            className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-lg border border-stone-300 px-5 py-3 text-sm font-medium text-stone-800 transition-colors hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring focus-visible:ring-offset-2 dark:border-stone-700 dark:text-stone-100 dark:hover:bg-stone-900"
          >
            Reddet
          </button>
          <button
            type="button"
            onClick={() => kaydet("kabul")}
            className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-lg border border-stone-300 px-5 py-3 text-sm font-medium text-stone-800 transition-colors hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring focus-visible:ring-offset-2 dark:border-stone-700 dark:text-stone-100 dark:hover:bg-stone-900"
          >
            Kabul Et
          </button>
        </div>
      </dialog>
    </>
  );
}
