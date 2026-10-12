import { Container } from "@mui/material";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

const packages = [
  {
    name: "Standard",
    tier: "Essential",
    price: "2,500",
    description:
      "Modern kitchen essentials, carefully made with dependable materials and premium hardware.",
    groups: [
      {
        title: "Cabinet construction",
        items: [
          "16mm Lasani Board cabinet boxes (ZRK Company)",
          "Nova UV Glossy Sheet cabinet shutters",
          "Machine edge banding for a seamless finish",
        ],
      },
      {
        title: "Aluminium cabinets",
        items: ["4 aluminium profile glass cabinets", "Premium profile finish"],
      },
      {
        title: "Hardware",
        items: ["Soft-close cabinet hinges", "Premium quality hardware"],
      },
      {
        title: "5 basic accessories",
        items: [
          "Cutlery tray",
          "Bottle pull-out",
          "Tandem drawer",
          "Waste bin",
          "Under-sink organizer",
        ],
      },
    ],
    note: "Ideal for modern kitchens with excellent quality at an economical price.",
  },
  {
    name: "Premium",
    tier: "Most popular",
    price: "3,000",
    description:
      "An elevated finish with enhanced storage, thoughtful details, and integrated lighting.",
    featured: true,
    groups: [
      {
        title: "Cabinet construction",
        items: [
          "16mm waterproof PVC Sheet cabinet boxes",
          "Al Noor UV Glossy Sheet cabinet shutters",
          "Machine edge banding for a premium finish",
        ],
      },
      {
        title: "Aluminium cabinets",
        items: [
          "8 aluminium profile glass cabinets",
          "Integrated profile LED lighting",
        ],
      },
      {
        title: "Hardware",
        items: ["Premium soft-close cabinet hinges", "High-quality hardware fittings"],
      },
      {
        title: "7 basic accessories",
        items: [
          "Cutlery tray",
          "Bottle pull-out",
          "Tandem drawer",
          "Corner carousel",
          "Under-sink organizer",
          "Waste bin",
          "Spice pull-out",
        ],
      },
    ],
    note: "Perfect for homeowners looking for a premium finish with enhanced storage and lighting.",
  },
  {
    name: "Luxury",
    tier: "Signature finish",
    price: "3,500",
    description:
      "Our most complete specification, with upgraded panels, a pantry tower, and sensor lighting.",
    groups: [
      {
        title: "Cabinet construction",
        items: [
          "18mm waterproof PVC Sheet cabinet boxes",
          "6mm PVC Sheet cabinet back panels",
          "Al Noor UV Glossy Sheet cabinet shutters",
          "Machine edge banding for a flawless finish",
        ],
      },
      {
        title: "Aluminium cabinets",
        items: [
          "8 aluminium profile glass cabinets",
          "1 floor-to-ceiling pantry/tower unit (approx. 4′ × 7′)",
          "Profile LED lighting in all aluminium cabinets",
          "Motion sensor (touchless) lighting system",
        ],
      },
      {
        title: "Hardware",
        items: ["Premium soft-close cabinet hinges", "Heavy-duty premium hardware"],
      },
      {
        title: "9 premium accessories",
        items: [
          "Cutlery tray",
          "Bottle pull-out",
          "Tandem drawer",
          "Magic corner",
          "Under-sink organizer",
          "Waste bin",
          "Spice pull-out",
          "Pantry pull-out",
          "Corner storage system",
        ],
      },
    ],
    note: "A considered, full-featured kitchen for homeowners who want the finest details.",
  },
];

const includedServices = [
  "Professional site measurement",
  "Computerized design & layout",
  "Machine edge banding",
  "Precision fabrication",
  "Professional installation",
  "Final alignment & finishing",
  "Site cleaning after installation",
];

const optionalItems = [
  "Granite / quartz countertop",
  "Kitchen sink & mixer",
  "Hob & hood",
  "Built-in oven",
  "Built-in microwave",
  "Dishwasher",
  "Refrigerator unit",
  "Electrical & plumbing modifications",
  "False ceiling & tile work",
];

const reasons = [
  "Premium quality materials",
  "Modern European designs",
  "Factory precision manufacturing",
  "Experienced installation team",
  "Competitive pricing",
  "Warranty on workmanship",
  "Timely project completion",
];

export default function KitchenPackagesPage() {
  return (
    <div className="kitchen-packages-page">
      <Breadcrumb
        title="Pricing"
        subtitle="Thoughtful design, precision-made cabinetry, and a package for every home."
      />

      <main>
        <section className="kitchen-packages-intro">
          <Container>
            <div className="kitchen-packages-intro-copy">
              <span className="section-eyebrow">MADE FOR YOUR HOME</span>
              <h2>
                The right kitchen,
                <br />
                <span>beautifully made.</span>
              </h2>
              <p>
                Explore three modular kitchen packages to suit different
                budgets and requirements. Every kitchen is manufactured with
                precision machinery, premium hardware, and professional
                installation.
              </p>
            </div>
            <div className="kitchen-packages-unit-note">
              <span>Clear, per-square-foot pricing</span>
              <span>PKR / sq. ft.</span>
            </div>
          </Container>
        </section>

        <section className="kitchen-package-list" aria-label="Kitchen packages">
          <Container>
            <div className="kitchen-package-grid">
              {packages.map((kitchenPackage, index) => (
                <article
                  className={`kitchen-package-card${kitchenPackage.featured ? " is-featured" : ""}`}
                  key={kitchenPackage.name}
                >
                  <div className="kitchen-package-topline">
                    <span className="kitchen-package-number">0{index + 1}</span>
                    <span className="kitchen-package-tier">{kitchenPackage.tier}</span>
                  </div>
                  <h3>{kitchenPackage.name}</h3>
                  <p className="kitchen-package-description">
                    {kitchenPackage.description}
                  </p>
                  <div className="kitchen-package-price">
                    <span className="kitchen-package-currency">PKR</span>
                    <strong>{kitchenPackage.price}</strong>
                    <span className="kitchen-package-unit">/ sq. ft.</span>
                  </div>

                  <div className="kitchen-package-details">
                    {kitchenPackage.groups.map((group) => (
                      <div className="kitchen-package-group" key={group.title}>
                        <h4>{group.title}</h4>
                        <ul>
                          {group.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <p className="kitchen-package-note">{kitchenPackage.note}</p>
                  <a
                    className="kitchen-package-cta"
                    href={`https://wa.me/923181552274?text=${encodeURIComponent(
                      [
                        `Hi, I’d like a quote for the ${kitchenPackage.name} Kitchen Package.`,
                        `Price: PKR ${kitchenPackage.price} per sq. ft.`,
                        "Package details:",
                        ...kitchenPackage.groups.map(
                          (group) =>
                            `${group.title}: ${group.items.join(", ")}`,
                        ),
                      ].join("\n"),
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Discuss this package <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
            <p className="kitchen-pricing-note">
              Package pricing is per square foot. Final requirements and project
              details can be discussed during your consultation.
            </p>
          </Container>
        </section>

        <section className="kitchen-included-section">
          <Container>
            <div className="kitchen-included-layout">
              <div className="kitchen-included-heading">
                <span className="section-eyebrow light">EVERY PACKAGE</span>
                <h2>
                  From first measure
                  <br />
                  <span>to final fitting.</span>
                </h2>
                <p>
                  A clear process and careful workmanship are part of every
                  Home Care kitchen package.
                </p>
              </div>
              <ul className="kitchen-included-list">
                {includedServices.map((service, index) => (
                  <li key={service}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        <section className="kitchen-extras-section">
          <Container>
            <div className="kitchen-extras-grid">
              <div className="kitchen-extras-copy">
                <span className="section-eyebrow">TAILOR THE DETAILS</span>
                <h2>
                  Optional items,
                  <br />
                  <span>quoted separately.</span>
                </h2>
                <p>
                  Add appliances, surfaces, and finishing work to suit your
                  layout. These items can be included in your project quotation.
                </p>
                <Link href="/contact-us" className="kitchen-extras-link">
                  Plan your kitchen <span aria-hidden="true">↗</span>
                </Link>
              </div>
              <ul className="kitchen-extras-list">
                {optionalItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        <section className="kitchen-why-section">
          <Container>
            <div className="kitchen-why-heading">
              <span className="section-eyebrow">THE HOME CARE DIFFERENCE</span>
              <h2>
                Better kitchens start
                <br />
                <span>with better care.</span>
              </h2>
            </div>
            <ul className="kitchen-reasons-list">
              {reasons.map((reason, index) => (
                <li key={reason}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {reason}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </main>
    </div>
  );
}
