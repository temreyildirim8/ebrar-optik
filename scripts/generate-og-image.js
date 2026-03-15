const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateOGImage() {
  const width = 1200;
  const height = 630;

  // Load hero image as background
  const heroBuffer = fs.readFileSync(
    path.join(__dirname, '../public/assets/hero_interior_wide_1773521896687.webp')
  );

  // Load and process hero image - resize and crop to 1200x630
  const background = await sharp(heroBuffer)
    .resize(width, height, { fit: 'cover', position: 'center' })
    .toBuffer();

  // Create a dark gradient overlay
  const gradientOverlay = await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0.4 }
    }
  })
    .png()
    .toBuffer();

  // Create text overlay as SVG
  const textSvg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#f0f0f0;stop-opacity:1" />
        </linearGradient>
      </defs>

      <!-- Main title -->
      <text x="60" y="280" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="url(#textGradient)">
        Ebrar Optik
      </text>

      <!-- Subtitle -->
      <text x="60" y="340" font-family="Arial, sans-serif" font-size="36" fill="#ffffff" opacity="0.95">
        Kırıkkale'nin Güvenilir Optik Mağazası
      </text>

      <!-- Description -->
      <text x="60" y="400" font-family="Arial, sans-serif" font-size="24" fill="#ffffff" opacity="0.85">
        Profesyonel göz sağlığı hizmetleri ve geniş çerçeve koleksiyonu
      </text>

      <!-- Contact info -->
      <text x="60" y="540" font-family="Arial, sans-serif" font-size="20" fill="#ffffff" opacity="0.7">
        📍 Yahşihan, Kırıkkale  •  📞 0535 891 42 42
      </text>
    </svg>
  `;

  const textBuffer = Buffer.from(textSvg);

  // Composite all layers
  const ogImage = await sharp(background)
    .composite([
      { input: gradientOverlay, blend: 'over' },
      { input: textBuffer, blend: 'over' }
    ])
    .jpeg({ quality: 90 })
    .toBuffer();

  // Save the final image
  const outputPath = path.join(__dirname, '../public/og-image.jpg');
  fs.writeFileSync(outputPath, ogImage);

  console.log(`✅ OpenGraph image generated: ${outputPath}`);
  console.log(`   Dimensions: ${width}x${height}px`);
}

generateOGImage().catch(err => {
  console.error('Error generating OG image:', err);
  process.exit(1);
});
