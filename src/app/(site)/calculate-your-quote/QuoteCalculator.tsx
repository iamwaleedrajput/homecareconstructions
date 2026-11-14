"use client";

import { useState } from "react";
import type { KitchenPackage, QuoteContent } from "@/lib/site";
import { formatPrice, whatsappHref } from "@/lib/format";

type KitchenShape = "L" | "U";

// Same rules as kitchen-quote-calculator-updated.html.
const shapes: Record<
  KitchenShape,
  { label: string; walls: string[]; defaults: string[]; heights: { label: string; value: number }[] }
> = {
  L: {
    label: "L-Shape",
    walls: ["Wall A", "Wall B"],
    defaults: ["", ""],
    heights: [
      { label: "Single — 5 ft", value: 5 },
      { label: "Ceiling — 7.5 ft", value: 7.5 },
    ],
  },
  U: {
    label: "U-Shape",
    walls: ["Wall A", "Wall B", "Wall C"],
    defaults: ["", "", ""],
    heights: [
      { label: "Single — 5 ft", value: 5 },
      { label: "Ceiling — 7 ft", value: 7 },
    ],
  },
};

// Each corner shares about 2 ft of cabinet between two walls, so it is counted once.
const cornerAllowance = 2;

function cornerDeduction(shape: KitchenShape, lengths: number[]) {
  if (shape === "L") return Math.min(cornerAllowance, lengths[0], lengths[1]);
  return (
    Math.min(cornerAllowance, lengths[0], lengths[1] / 2) +
    Math.min(cornerAllowance, lengths[2], lengths[1] / 2)
  );
}

const toFeet = (value: string) => Math.max(0, Number(value) || 0);

// Floor plan of each shape, with the walls lettered to match the inputs.
function ShapePlan({ shape }: { shape: KitchenShape }) {
  return (
    <svg viewBox="0 0 80 64" aria-hidden="true" className="quote-shape-plan">
      {shape === "L" ? (
        <>
          <path d="M10 8 H70 V22 H24 V56 H10 Z" />
          <text x="40" y="18">B</text>
          <text x="17" y="40">A</text>
        </>
      ) : (
        <>
          <path d="M10 8 H70 V56 H56 V22 H24 V56 H10 Z" />
          <text x="17" y="40">A</text>
          <text x="40" y="18">B</text>
          <text x="63" y="40">C</text>
        </>
      )}
    </svg>
  );
}

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
  const [shape, setShape] = useState<KitchenShape>("L");
  const [lengths, setLengths] = useState<Record<KitchenShape, string[]>>({
    L: shapes.L.defaults,
    U: shapes.U.defaults,
  });
  const [heights, setHeights] = useState<Record<KitchenShape, number>>({ L: 7.5, U: 7 });

  const chosenPackage =
    packages.find((option) => option.name === selectedPackage) ?? packages[0];
  const walls = shapes[shape].walls;
  const wallFeet = lengths[shape].map(toFeet);
  const height = heights[shape];
  const totalLength = wallFeet.reduce((sum, value) => sum + value, 0);
  const deduction = cornerDeduction(shape, wallFeet);
  const effective = Math.max(0, totalLength - deduction);
  const area = effective * height;
  const rate = chosenPackage?.pricePerSqFt ?? 0;
  const estimate = area * rate;

  const quoteMessage = [
    content.whatsappIntro,
    `${content.messagePackageLabel}: ${chosenPackage?.name ?? ""}`,
    `Layout: ${shapes[shape].label} kitchen`,
    ...wallFeet.map((value, index) => `${walls[index]}: ${formatPrice(value)} ft`),
    `Cabinet height: ${formatPrice(height)} ft`,
    `Effective running length: ${formatPrice(effective)} ft`,
    `${content.messageAreaLabel}: ${formatPrice(area)} sq ft`,
    `${content.messageTotalLabel}: ${currency} ${formatPrice(estimate)}`,
    content.messageClosing,
  ].join("\n");

  function updateLength(index: number, value: string) {
    setLengths((current) => ({
      ...current,
      [shape]: current[shape].map((item, itemIndex) => (itemIndex === index ? value : item)),
    }));
  }

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
          <label htmlFor="wall-0">
            <span className="section-eyebrow">{content.stepTwoEyebrow}</span>
            <strong>{content.stepTwoLabel}</strong>
          </label>
          <fieldset className="quote-shape-options">
            <legend>Kitchen layout</legend>
            {(Object.keys(shapes) as KitchenShape[]).map((key) => (
              <label
                key={key}
                className={`quote-shape-option${shape === key ? " is-selected" : ""}`}
              >
                <input
                  type="radio"
                  name="kitchen-shape"
                  value={key}
                  checked={shape === key}
                  onChange={() => setShape(key)}
                />
                <ShapePlan shape={key} />
                <strong>{shapes[key].label} Kitchen</strong>
                <small>
                  {shapes[key].walls.length} wall lengths and cabinet height
                </small>
              </label>
            ))}
          </fieldset>

          <div className={`quote-wall-grid walls-${walls.length}`}>
            {walls.map((wall, index) => (
              <div className="quote-wall-field" key={`${shape}-${wall}`}>
                <label htmlFor={`wall-${index}`}>{wall} Length (ft)</label>
                <div className="quote-area-input-wrap">
                  <input
                    id={`wall-${index}`}
                    type="number"
                    min="0"
                    step="0.1"
                    inputMode="decimal"
                    value={lengths[shape][index]}
                    onChange={(event) => updateLength(index, event.target.value)}
                  />
                  <span>ft</span>
                </div>
              </div>
            ))}
            <div className="quote-wall-field">
              <label htmlFor="cabinet-height">Cabinet Height</label>
              <div className="quote-area-input-wrap">
                <select
                  id="cabinet-height"
                  value={height}
                  onChange={(event) =>
                    setHeights((current) => ({ ...current, [shape]: Number(event.target.value) }))
                  }
                >
                  {shapes[shape].heights.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <p>
            All lengths are in feet. Corners shared by two walls are counted once (about{" "}
            {cornerAllowance} ft is taken off for each corner).
          </p>
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
            <span>Layout</span>
            <strong>{shapes[shape].label}</strong>
          </div>
          <div>
            <span>Effective running length</span>
            <strong>{formatPrice(effective)} ft</strong>
          </div>
          <div>
            <span>Cabinet height</span>
            <strong>{formatPrice(height)} ft</strong>
          </div>
          <div>
            <span>{content.labelRate}</span>
            <strong>
              {currency} {formatPrice(rate)} <small>{priceUnit}</small>
            </strong>
          </div>
        </div>
        <div className="quote-estimate-total">
          <span>{content.labelTotal}</span>
          <strong>
            {currency} {formatPrice(estimate)}
          </strong>
        </div>
        <p className="quote-estimate-disclaimer">
          {formatPrice(area)} sq ft × {currency} {formatPrice(rate)}
          {deduction > 0 ? ` (after ${formatPrice(deduction)} ft corner adjustment)` : ""}.
        </p>
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
