import { Container, Grid } from "@mui/material";
import React from "react";

const testimonials = [
  {
    quote:
      "They understood exactly what we wanted and delivered a space that feels like us — beautiful and practical.",
    name: "Ayesha Khan",
    role: "Homeowner, Islamabad",
  },
  {
    quote:
      "From the first meeting to the final handover, communication was clear and the craftsmanship was outstanding.",
    name: "Omar Farooq",
    role: "Villa renovation, Rawalpindi",
  },
  {
    quote:
      "A true end-to-end partner. Design decisions were thoughtful and the build quality exceeded our expectations.",
    name: "Sara Malik",
    role: "Apartment remodel, Lahore",
  },
];

export default function TestimonialsSection() {
  return (
    <div className="testimonials-section">
      <Container>
        <div className="section-intro centered">
          <span className="section-eyebrow">CLIENT STORIES</span>
          <h2>
            Trusted by families
            <br />
            <span>who care about craft</span>
          </h2>
        </div>
        <Grid container spacing={4}>
          {testimonials.map((item) => (
            <Grid size={{ xs: 12, md: 4 }} key={item.name}>
              <blockquote className="testimonial-card">
                <p>&ldquo;{item.quote}&rdquo;</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </footer>
              </blockquote>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
