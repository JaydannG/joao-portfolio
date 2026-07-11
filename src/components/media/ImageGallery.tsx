import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type ImageGalleryProps = {
  images: GalleryImage[];
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {images.map((image, index) => (
        <figure key={`${image.src}-${index}`} className="flex flex-col gap-2">
          <div className="relative aspect-3/2 w-full overflow-hidden bg-background-elevated">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          {image.caption && (
            <figcaption className="text-sm text-foreground-muted">{image.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
