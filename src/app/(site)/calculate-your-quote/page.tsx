import { Container } from "@mui/material";
import Breadcrumb from "../components/Breadcrumb";
import QuoteCalculator from "./QuoteCalculator";
import Lines from "../components/Lines";
import { getGlobal, getPricingPage, getQuotePage, pageMetadata } from "@/lib/site";

export async function generateMetadata() {
  const quote = await getQuotePage();
  return pageMetadata(quote.seo);
}

export default async function CalculateYourQuotePage() {
  const [quote, pricing, global] = await Promise.all([
    getQuotePage(),
    getPricingPage(),
    getGlobal(),
  ]);

  return (
    <div className="quote-calculator-page">
      <Breadcrumb
        title={quote.breadcrumbTitle}
        subtitle={quote.breadcrumbSubtitle}
        label={global.siteName}
        imageUrl={quote.heroImageUrl}
      />
      <main>
        <section className="quote-calculator-section">
          <Container>
            <div className="quote-calculator-intro">
              <span className="section-eyebrow">{quote.eyebrow}</span>
              <Lines text={quote.title} highlight={quote.titleHighlight} />
              <p>{quote.intro}</p>
            </div>
            <QuoteCalculator
              content={quote}
              packages={pricing.packages}
              currency={pricing.currency}
              priceUnit={pricing.priceUnit}
              whatsappNumber={global.whatsappNumber}
            />
          </Container>
        </section>
      </main>
    </div>
  );
}
