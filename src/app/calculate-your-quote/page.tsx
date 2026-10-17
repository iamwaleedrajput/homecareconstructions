import { Container } from "@mui/material";
import Breadcrumb from "../components/Breadcrumb";
import QuoteCalculator from "./QuoteCalculator";

export const metadata = {
  title: "Calculate Your Kitchen Quote | Home Care Constructions",
  description:
    "Choose a kitchen package and enter your cabinet area to get an instant estimated price.",
};

export default function CalculateYourQuotePage() {
  return (
    <div className="quote-calculator-page">
      <Breadcrumb
        title="Calculate Your Quote"
        subtitle="Choose your kitchen package and get a quick estimate for your space."
      />
      <main>
        <section className="quote-calculator-section">
          <Container>
            <div className="quote-calculator-intro">
              <span className="section-eyebrow">YOUR KITCHEN, YOUR BUDGET</span>
              <h2>
                A clearer idea
                <br />
                <span>starts right here.</span>
              </h2>
              <p>
                Get an instant estimate using our per-square-foot package rates.
                Select an option and enter your cabinet area to see the total.
              </p>
            </div>
            <QuoteCalculator />
          </Container>
        </section>
      </main>
    </div>
  );
}
