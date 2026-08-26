const sharp = require("sharp");
const path = require("path");

const src = path.join(__dirname, "../assets-src/below-footer-raw.jpeg");
const out = (name) => path.join(__dirname, "../public/assets", name);

// Illüstrasyonun gökyüzü #FBFBF7 geliyor; beyaz noktayı 255'e çekince
// footer'ın saf beyazıyla dikişsiz birleşiyor, diğer renkler pratikte değişmiyor.
const whiteBalance = (img) => img.linear([255 / 251, 255 / 251, 255 / 247], [0, 0, 0]);

// Desktop: full panorama. Mobile: centre crop around the shop so it stays legible.
whiteBalance(sharp(src).resize({ width: 1920 }))
  .webp({ quality: 78 })
  .toFile(out("below-footer.webp"));
whiteBalance(
  sharp(src)
    .extract({ left: 582, top: 0, width: 2100, height: 1312 })
    .resize({ width: 900 })
)
  .webp({ quality: 78 })
  .toFile(out("below-footer-mobile.webp"));
