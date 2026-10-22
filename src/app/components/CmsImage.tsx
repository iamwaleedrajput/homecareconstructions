import Image, { type StaticImageData } from "next/image";

type CmsImageProps = {
  src: string | StaticImageData | null | undefined;
  fallback: StaticImageData;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  width?: number;
  height?: number;
};

export default function CmsImage({
  src,
  fallback,
  alt,
  fill,
  className,
  sizes,
  priority,
  width = 1200,
  height = 900,
}: CmsImageProps) {
  const image = src || fallback;

  if (typeof image === "string") {
    return (
      <Image
        src={image}
        alt={alt}
        fill={fill}
        className={className}
        sizes={sizes}
        priority={priority}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
      />
    );
  }

  return (
    <Image
      src={image}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  );
}
