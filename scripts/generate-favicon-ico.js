const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Read the SVG file
const svgPath = path.join(__dirname, '..', 'src', 'app', 'favicon.svg');
const icoPath = path.join(__dirname, '..', 'src', 'app', 'favicon.ico');

const svgBuffer = fs.readFileSync(svgPath);

// Convert SVG to PNG at multiple sizes for ICO
const sizes = [16, 32, 48, 64];

async function generateIco() {
  try {
    const pngBuffers = await Promise.all(
      sizes.map(size =>
        sharp(svgBuffer)
          .resize(size, size)
          .png()
          .toBuffer()
      )
    );

    // Create ICO file structure
    // ICO header
    const iconCount = sizes.length;
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // Reserved
    header.writeUInt16LE(1, 2); // Type (1 = ICO)
    header.writeUInt16LE(iconCount, 4); // Count

    // ICO directory entries
    const entrySize = 16;
    const dirSize = entrySize * iconCount;
    const imageDataOffset = 6 + dirSize;

    const directory = Buffer.alloc(dirSize);
    const imageData = [];
    let currentOffset = imageDataOffset;

    sizes.forEach((size, index) => {
      const pngBuffer = pngBuffers[index];
      const entryOffset = index * entrySize;

      // Directory entry
      directory.writeUInt8(size >= 256 ? 0 : size, entryOffset + 0); // Width
      directory.writeUInt8(size >= 256 ? 0 : size, entryOffset + 1); // Height
      directory.writeUInt8(0, entryOffset + 2); // Color palette size (0 for PNG)
      directory.writeUInt8(0, entryOffset + 3); // Reserved
      directory.writeUInt16LE(1, entryOffset + 4); // Color planes
      directory.writeUInt16LE(32, entryOffset + 6); // Bits per pixel
      directory.writeUInt32LE(pngBuffer.length, entryOffset + 8); // Image size
      directory.writeUInt32LE(currentOffset, entryOffset + 12); // Image offset

      imageData.push(pngBuffer);
      currentOffset += pngBuffer.length;
    });

    // Combine all parts
    const icoBuffer = Buffer.concat([header, directory, ...imageData]);

    fs.writeFileSync(icoPath, icoBuffer);
    console.log('✓ favicon.ico generated successfully at', icoPath);
  } catch (error) {
    console.error('Error generating favicon.ico:', error);
    process.exit(1);
  }
}

generateIco();
