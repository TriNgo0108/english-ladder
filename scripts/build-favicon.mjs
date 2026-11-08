// Regenerates src/app/favicon.ico from src/app/icon.svg: a PNG-embedded ICO, 16–256px.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const svg = fs.readFileSync(path.join(root, "src/app/icon.svg"));
const SIZES = [16, 24, 32, 48, 64, 128, 256];

const images = await Promise.all(
  SIZES.map((size) => sharp(svg, { density: 72 * (size / 32) * 4 }).resize(size, size).png().toBuffer()),
);

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(images.length, 4);

const entries = Buffer.alloc(16 * images.length);
let offset = header.length + entries.length;
images.forEach((png, i) => {
  const size = SIZES[i];
  const at = 16 * i;
  entries.writeUInt8(size === 256 ? 0 : size, at); // width
  entries.writeUInt8(size === 256 ? 0 : size, at + 1); // height
  entries.writeUInt8(0, at + 2); // palette colours
  entries.writeUInt8(0, at + 3); // reserved
  entries.writeUInt16LE(1, at + 4); // planes
  entries.writeUInt16LE(32, at + 6); // bits per pixel
  entries.writeUInt32LE(png.length, at + 8);
  entries.writeUInt32LE(offset, at + 12);
  offset += png.length;
});

fs.writeFileSync(path.join(root, "src/app/favicon.ico"), Buffer.concat([header, entries, ...images]));
console.log(`favicon.ico: ${SIZES.join(", ")}px`);
