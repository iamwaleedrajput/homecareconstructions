import { Container } from "@mui/material";
import React from "react";

export default function Hero() {
  return (
    <div className="hero-section">
      {/* <div className="glass-card"></div> */}
      {/* <div className="hero-section-img"></div> */}
      <Container>
        <h1>
          Designing Spaces
          <br />
        </h1>
        <h2>building dreams</h2>
      </Container>
    </div>
  );
}

// .static-hero:before {
//     position: absolute;
//     right: 0;
//     top: 0;
//     width: 960px;
//     height: 100%;
//     content: "";
//     background: #efeee8;
//     border-top-left-radius: 50%;
//     border-bottom-left-radius: 50%;
//     z-index: -1;
// }
