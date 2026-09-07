import type { ImageMetadata } from 'astro';

// All project images live under src/assets/projects/<key>.
// Reference them from content/components by their path relative to that folder,
// e.g. images['p1/cad_hero.png'].
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/projects/**/*.{png,jpg,jpeg,webp,avif}',
  { eager: true },
);

export const images: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [
    path.replace('/src/assets/projects/', ''),
    mod.default,
  ]),
);

export function getImage(key: string): ImageMetadata {
  const img = images[key];
  if (!img) {
    throw new Error(
      `Unknown project image "${key}". Available: ${Object.keys(images).join(', ')}`,
    );
  }
  return img;
}
