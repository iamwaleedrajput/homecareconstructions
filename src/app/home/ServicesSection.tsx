import { Container, Grid } from "@mui/material";
import React from "react";

export default function ServicesSection() {
  return (
    <div className="service-section">
      <Container>
        <Grid container spacing={3}>
          <Grid size={{ md: 7 }}>
            <div className="content">
              <h1>Our Services</h1>
              <p>
                We transform spaces through thoughtful design, smart planning,
                and quality craftsmanship—bringing your vision to life from
                concept to completion.
              </p>
              <ul>
                <li>Interior Design</li>
                <li>Space Planning </li>
                <li>3D Visualization </li>
                <li>Custom Furniture</li>
                <li>Renovation & Remodeling</li>
                <li>Construction & Execution</li>
              </ul>
            </div>
          </Grid>
          <Grid size={{ md: 5 }}>
            <div className="img-section"></div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
