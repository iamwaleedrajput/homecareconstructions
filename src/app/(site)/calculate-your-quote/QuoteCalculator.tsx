"use client";

import { useMemo, useState } from "react";
import type { KitchenPackage, QuoteContent } from "@/lib/site";
import { formatPrice, whatsappHref } from "@/lib/format";

export default function QuoteCalculator({
  content,
  packages,
  currency,
  priceUnit,
  whatsappNumber,
}: {
  content: QuoteContent;
  packages: KitchenPackage[];
  currency: string;
  priceUnit: string;
  whatsappNumber: string;
}) {
  const initial =
    packages.find((option) => option.name === content.defaultPackage)?.name ??
    packages.find((option) => option.featured)?.name ??
    packages[0]?.name ??
    "";
  const [selectedPackage, setSelectedPackage] = useState(initial);
  const [cabinetArea, setCabinetArea] = useState("");

  const chosenPackage =
    packages.find((option) => option.name === selectedPackage) ?? packages[0];
  const area = Number(cabinetArea);
  const estimate = useMemo(
    () =>
      chosenPackage && Number.isFinite(area) && area > 0
        ? area * chosenPackage.pricePerSqFt
        : 0,
    [area, chosenPackage],
  );
  const quoteMessage = [
    content.whatsappIntro,
    `${content.messagePackageLabel}: ${chosenPackage?.name ?? ""}`,
    `${content.messageAreaLabel}: ${cabinetArea || content.messageAreaMissing} ${content.areaUnit}`,
    `${content.messageTotalLabel}: ${currency} ${formatPrice(estimate)}`,
    content.messageClosing,
  ].join("\n");

  if (!chosenPackage) return null;

  return (
    <div className="quote-calculator-layout">
      <section className="quote-calculator-form" aria-labelledby="quote-form-title">
        <div className="quote-calculator-section-heading">
          <span className="section-eyebrow">{content.stepOneEyebrow}</span>
          <h2 id="quote-form-title">{content.stepOneTitle}</h2>
          <p>{content.stepOneBody}</p>
        </div>

        <fieldset className="quote-package-options">
          <legend className="visually-hidden">Kitchen package</legend>
          {packages.map((option) => (
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
                <small>{option.calculatorDescription}</small>
              </span>
              <span className="quote-option-price">
                <strong>{formatPrice(option.pricePerSqFt)}</strong>
                <small>
                  {currency} {priceUnit}
                </small>
              </span>
              {option.featured ? (
                <span className="quote-option-badge">{content.popularBadge}</span>
              ) : null}
            </label>
          ))}
        </fieldset>

        <div className="quote-area-field">
          <label htmlFor="cabinet-area">
            <span className="section-eyebrow">{content.stepTwoEyebrow}</span>
            <strong>{content.stepTwoLabel}</strong>
          </label>
          <div className="quote-area-input-wrap">
            <input
              id="cabinet-area"
              name="cabinet-area"
              type="number"
              min="1"
              step="0.5"
              inputMode="decimal"
              placeholder={content.areaPlaceholder}
              value={cabinetArea}
              onChange={(event) => setCabinetArea(event.target.value)}
            />
            <span>{content.areaUnit}</span>
          </div>
          <p>{content.stepTwoHelp}</p>
        </div>
      </section>

      <aside className="quote-estimate-card" aria-live="polite">
        <span className="section-eyebrow light">{content.estimateEyebrow}</span>
        <h2>{content.estimateTitle}</h2>
        <div className="quote-estimate-details">
          <div>
            <span>{content.labelPackage}</span>
            <strong>{chosenPackage.name}</strong>
          </div>
          <div>
            <span>{content.labelRate}</span>
            <strong>
              {currency} {formatPrice(chosenPackage.pricePerSqFt)} <small>{priceUnit}</small>
            </strong>
          </div>
          <div>
            <span>{content.labelArea}</span>
            <strong>
              {cabinetArea && area > 0 ? `${formatPrice(area)} ${content.areaUnit}` : "—"}
            </strong>
          </div>
        </div>
        <div className="quote-estimate-total">
          <span>{content.labelTotal}</span>
          <strong>
            {currency} {formatPrice(estimate)}
          </strong>
        </div>
        <a
          className="quote-estimate-cta"
          href={whatsappHref(whatsappNumber, quoteMessage)}
          target="_blank"
          rel="noreferrer"
        >
          {content.ctaLabel} <span aria-hidden="true">↗</span>
        </a>
        <p className="quote-estimate-disclaimer">{content.disclaimer}</p>
      </aside>
    </div>
  );
}
