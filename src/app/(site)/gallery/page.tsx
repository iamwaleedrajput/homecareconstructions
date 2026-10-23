import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Container, ImageList, ImageListItem } from "@mui/material";
import img from "../@assets/images/bg/1.jpg";
import img2 from "../@assets/images/misc/1.jpg";
import img3 from "../@assets/images/misc/2.jpg";
import img4 from "../@assets/images/misc/3.jpg";
import type { StaticImageData } from "next/image";
import Lines from "../components/Lines";
import { getGalleryPage, getGlobal, pageMetadata } from "@/lib/site";

const fallbacks: StaticImageData[] = [img, img2, img3, img4];

function imageSrc(image: string | StaticImageData) {
  return typeof image === "string" ? image : image.src;
}

export async function generateMetadata() {
  const gallery = await getGalleryPage();
  return pageMetadata(gallery.seo);
}

export default async function page() {
  const [gallery, global] = await Promise.all([getGalleryPage(), getGlobal()]);

  return (
    <div>
      <Breadcrumb
        title={gallery.breadcrumbTitle}
        subtitle={gallery.breadcrumbSubtitle}
        label={global.siteName}
        imageUrl={gallery.heroImageUrl}
      />
      <div className="py-5">
        <Container>
          <div className="gallery-header">
            <div className="gallery-header-copy">
              <span className="gallery-eyebrow">{gallery.eyebrow}</span>
              <Lines text={gallery.title} highlight={gallery.titleHighlight} />
            </div>

            <div className="gallery-header-aside">
              <p>{gallery.intro}</p>
              <ul className="gallery-header-meta">
                {gallery.meta.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.subtitle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ImageList variant="woven" cols={5} gap={8}>
            {gallery.items.map((item, index) => {
              const source = imageSrc(item.imageUrl || fallbacks[index % fallbacks.length]);
              return (
                <ImageListItem key={`${item.title}-${index}`}>
                  <img src={source} alt={item.alt || item.title} loading="lazy" />
                </ImageListItem>
              );
            })}
          </ImageList>
        </Container>
      </div>
    </div>
  );
}
