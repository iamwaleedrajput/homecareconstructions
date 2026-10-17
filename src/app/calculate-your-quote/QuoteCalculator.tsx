"use client";

import { useMemo, useState } from "react";

const pricingOptions = [
  {
    name: "Standard",
    description: "Modern essentials and dependable materials.",
    price: 2500,
  },
  {
    name: "Premium",
    description: "Enhanced storage, premium hardware, and lighting.",
    price: 3000,
    featured: true,
  },
  {
    name: "Luxury",
    description: "Upgraded panels, pantry tower, and sensor lighting.",
    price: 3500,
  },
];

const formatPrice = (amount: number) =>
  new Intl.NumberFormat("en-PK", {
    maximumFractionDigits: 2,
  }).format(amount);

export default function QuoteCalculator() {
  const [selectedPackage, setSelectedPackage] = useState("Premium");
  const [cabinetArea, setCabinetArea] = useState("");

  const chosenPackage =
    pricingOptions.find((option) => option.name === selectedPackage) ??
    pricingOptions[1];
  const area = Number(cabinetArea);
  const estimate = useMemo(
    () => (Number.isFinite(area) && area > 0 ? area * chosenPackage.price : 0),
    [area, chosenPackage.price],
  );
  const quoteMessage = encodeURIComponent(
    [
      "Hi, I used the online kitchen quote calculator.",
      `Package: ${chosenPackage.name}`,
      `Cabinet area: ${cabinetArea || "not entered"} sq. ft.`,
      `Estimated package total: PKR ${formatPrice(estimate)}`,
      "Please help me confirm the final quotation.",
    ].join("\n"),
  );

  return (
    <div className="quote-calculator-layout">
      <section className="quote-calculator-form" aria-labelledby="quote-form-title">
        <div className="quote-calculator-section-heading">
          <span className="section-eyebrow">01 / CHOOSE YOUR PACKAGE</span>
          <h2 id="quote-form-title">Start with the right fit.</h2>
          <p>Select a finish, then enter the measured cabinet area in square feet.</p>
        </div>

        <fieldset className="quote-package-options">
          <legend className="visually-hidden">Kitchen package</legend>
          {pricingOptions.map((option) => (
            <label
              className={`quote-package-option${selectedPackage === option.name ? " is-selected" : ""}${option.featured ? " is-featured" : ""}`}
              key={option.name}
            >
              <input
                type="radio"
                name="kitchen-package"
                value={option.name}
                checked={selectedPackage === option.name}
                onChange={() => setSelectedPackage(option.name)}
              />
              <span className="quote-option-check" aria-hidden="true" />
              <span className="quote-option-copy">
                <strong>{option.name}</strong>
                <small>{option.description}</small>
              </span>
              <span className="quote-option-price">
                <strong>{formatPrice(option.price)}</strong>
                <small>PKR / sq. ft.</small>
              </span>
              {option.featured ? <span className="quote-option-badge">POPULAR</span> : null}
            </label>
          ))}
        </fieldset>

        <div className="quote-area-field">
          <label htmlFor="cabinet-area">
            <span className="section-eyebrow">02 / ENTER CABINET AREA</span>
            <strong>Your measured cabinet area</strong>
          </label>
          <div className="quote-area-input-wrap">
            <input
              id="cabinet-area"
              name="cabinet-area"
              type="number"
              min="1"
              step="0.5"
              inputMode="decimal"
              placeholder="e.g. 120"
              value={cabinetArea}
              onChange={(event) => setCabinetArea(event.target.value)}
            />
            <span>sq. ft.</span>
          </div>
          <p>Enter the total area of the cabinets you want us to build.</p>
        </div>
      </section>

      <aside className="quote-estimate-card" aria-live="polite">
        <span className="section-eyebrow light">YOUR INSTANT ESTIMATE</span>
        <h2>Made for your space.</h2>
        <div className="quote-estimate-details">
          <div>
            <span>Package</span>
            <strong>{chosenPackage.name}</strong>
          </div>
          <div>
            <span>Rate</span>
            <strong>PKR {formatPrice(chosenPackage.price)} <small>/ sq. ft.</small></strong>
          </div>
          <div>
            <span>Cabinet area</span>
            <strong>{cabinetArea && area > 0 ? `${formatPrice(area)} sq. ft.` : "—"}</strong>
          </div>
        </div>
        <div className="quote-estimate-total">
          <span>Estimated package total</span>
          <strong>PKR {formatPrice(estimate)}</strong>
        </div>
        <a
          className="quote-estimate-cta"
          href={`https://wa.me/923181552274?text=${quoteMessage}`}
          target="_blank"
          rel="noreferrer"
        >
          Confirm your estimate <span aria-hidden="true">↗</span>
        </a>
        <p className="quote-estimate-disclaimer">
          This is an initial estimate based on package rate × cabinet area. Final
          pricing may vary after site measurement; optional appliances and
          countertop work are quoted separately.
        </p>
      </aside>
    </div>
  );
}
