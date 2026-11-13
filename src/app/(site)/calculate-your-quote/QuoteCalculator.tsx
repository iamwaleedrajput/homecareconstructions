"use client";

import { useMemo, useState } from "react";
import type { KitchenPackage, QuoteContent } from "@/lib/site";
import { formatPrice, whatsappHref } from "@/lib/format";

type KitchenShape = "L" | "U";
type SizeKey = "length" | "width" | "height";
type Run = Record<SizeKey, string>;

const sizeKeys: SizeKey[] = ["length", "width", "height"];
const emptyRun: Run = { length: "", width: "", height: "" };

const shapes: Record<KitchenShape, { label: string; walls: string[] }> = {
  L: { label: "L-shape", walls: ["Wall A", "Wall B"] },
  U: { label: "U-shape", walls: ["Wall A", "Wall B", "Wall C"] },
};

const sizeHelp: Record<SizeKey, string> = {
  length: "Horizontal, along the wall",
  width: "Horizontal top, wall to front edge",
  height: "Vertical, floor to top",
};

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

// One cabinet drawn in 3D, showing which way each size is measured.
function SizeGuide() {
  return (
    <svg viewBox="0 0 260 182" role="img" aria-label="Length is horizontal, height is vertical, width is the horizontal top depth" className="quote-size-guide">
      <path className="box" d="M40 60 H190 V150 H40 Z" />
      <path className="box top" d="M40 60 L80 30 H230 L190 60 Z" />
      <path className="box side" d="M190 60 L230 30 V120 L190 150 Z" />
      <g className="measure">
        <path d="M40 160 H190" />
        <path d="M40 155 V165 M190 155 V165" />
        <text x="115" y="178">Length (horizontal)</text>
        <path d="M20 60 V150" />
        <path d="M15 60 H25 M15 150 H25" />
        <text x="14" y="105" transform="rotate(-90 14 105)">Height (vertical)</text>
        <path d="M80 22 L40 52" />
        <text x="96" y="22">Width (horizontal top)</text>
      </g>
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
  const [runs, setRuns] = useState<Run[]>(() => shapes.U.walls.map(() => ({ ...emptyRun })));

  const chosenPackage =
    packages.find((option) => option.name === selectedPackage) ?? packages[0];
  const walls = shapes[shape].walls;
  const activeRuns = runs.slice(0, walls.length);
  const runSizes = activeRuns.map((run) =>
    sizeKeys.map((key) => Number(run[key])),
  );
  const hasAllSides = runSizes.every((sizes) =>
    sizes.every((size) => Number.isFinite(size) && size > 0),
  );
  const area = hasAllSides
    ? runSizes.reduce((total, [length, width, height]) => total + length * width * height, 0)
    : 0;
  const cabinetArea = hasAllSides
    ? `${shapes[shape].label} — ${activeRuns
        .map((run, index) => `${walls[index]}: ${run.length} × ${run.width} × ${run.height} ft`)
        .join("; ")} = ${formatPrice(area)}`
    : "";

  function updateRun(index: number, key: SizeKey, value: string) {
    setRuns((current) =>
      current.map((run, runIndex) => (runIndex === index ? { ...run, [key]: value } : run)),
    );
  }
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
          <fieldset className="quote-shape-options">
            <legend>Kitchen shape</legend>
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
                <strong>{shapes[key].label}</strong>
                <small>{shapes[key].walls.length} walls of cabinets</small>
              </label>
            ))}
          </fieldset>

          <div className="quote-size-help">
            <SizeGuide />
            <ul>
              <li><strong>Length</strong> — {sizeHelp.length}</li>
              <li><strong>Height</strong> — {sizeHelp.height}</li>
              <li><strong>Width</strong> — {sizeHelp.width}</li>
            </ul>
          </div>

          {walls.map((wall, index) => (
            <div className="quote-wall-run" key={wall}>
              <strong className="quote-wall-title">{wall}</strong>
              <div className="quote-dimension-grid">
                {sizeKeys.map((key) => {
                  const label = `${key[0].toUpperCase()}${key.slice(1)}`;
                  return (
                    <div className="quote-area-input-wrap" key={key}>
                      <input
                        id={index === 0 && key === "length" ? "cabinet-area" : `cabinet-${index}-${key}`}
                        name={`cabinet-${index}-${key}`}
                        type="number"
                        min="0.1"
                        step="0.1"
                        inputMode="decimal"
                        aria-label={`${wall} ${label} in feet (${sizeHelp[key].toLowerCase()})`}
                        placeholder={label}
                        value={activeRuns[index]?.[key] ?? ""}
                        onChange={(event) => updateRun(index, key, event.target.value)}
                      />
                      <span>ft</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          <p>
            Measure each wall of cabinets in feet. We add up Length × Width × Height for every
            wall to get your estimate.
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
            <span>{content.labelRate}</span>
            <strong>
              {currency} {formatPrice(chosenPackage.pricePerSqFt)} <small>{priceUnit}</small>
            </strong>
          </div>
          <div>
            <span>{shapes[shape].label} size (L × W × H)</span>
            <strong>
              {hasAllSides ? `${formatPrice(area)} ${content.areaUnit}` : "—"}
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
