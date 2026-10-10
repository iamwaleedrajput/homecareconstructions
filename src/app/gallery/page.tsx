import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Container, ImageList, ImageListItem } from "@mui/material";
import img from "../@assets/images/bg/1.jpg";
import img2 from "../@assets/images/misc/1.jpg";
import img3 from "../@assets/images/misc/2.jpg";
import img4 from "../@assets/images/misc/3.jpg";
export default function page() {
  const itemData = [
    {
      img: img,
      title: "Bed",
    },
    {
      img: img2,
      title: "Kitchen",
    },
    {
      img: img3,
      title: "Sink",
    },
    {
      img: img4,
      title: "Books",
    },
    {
      img: img,
      title: "Bed",
    },
    {
      img: img2,
      title: "Kitchen",
    },
    {
      img: img3,
      title: "Sink",
    },
    {
      img: img4,
      title: "Books",
    },
    {
      img: img,
      title: "Bed",
    },
    {
      img: img2,
      title: "Kitchen",
    },
    {
      img: img3,
      title: "Sink",
    },
    {
      img: img4,
      title: "Books",
    },
  ];
  return (
    <div>
      <Breadcrumb
        title="Gallery"
        subtitle="A look at spaces we’ve designed, built, and refined."
      />
      <div className="py-5">
        <Container>
          <div className="gallery-header">
            <div className="gallery-header-copy">
              <span className="gallery-eyebrow">OUR WORK</span>
              <h2>
                Spaces that
                <br />
                <span>speak for themselves</span>
              </h2>
            </div>

            <div className="gallery-header-aside">
              <p>
                From thoughtful interiors to complete renovations, we transform
                ideas into environments that inspire and elevate everyday
                living.
              </p>
              <ul className="gallery-header-meta">
                <li>
                  <strong>Interiors</strong>
                  <span>Living, kitchen, suite</span>
                </li>
                <li>
                  <strong>Build</strong>
                  <span>Renovation to finish</span>
                </li>
                <li>
                  <strong>Detail</strong>
                  <span>Joinery &amp; materials</span>
                </li>
              </ul>
            </div>
          </div>
          <ImageList variant="woven" cols={5} gap={8}>
            {itemData.map((item: any) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img.src}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img.src}?w=161&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </div>
    </div>
  );
}
