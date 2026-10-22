"use client";

import { useState, type FormEvent } from "react";
import type { ContactContent } from "@/lib/site";
import { whatsappHref } from "@/lib/format";

export default function ContactForm({
  content,
  whatsappNumber,
}: {
  content: ContactContent;
  whatsappNumber: string;
}) {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [errors, setErrors] = useState<
    Partial<Record<"name" | "email" | "projectType" | "message", string>>
  >({});

  function readForm(form: HTMLFormElement) {
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const projectType = String(data.get("projectType") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const nextErrors: Partial<Record<"name" | "email" | "projectType" | "message", string>> =
      {};

    if (name.length < 2) nextErrors.name = content.nameError;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = content.emailError;
    }
    if (!projectType) nextErrors.projectType = content.projectError;
    if (message.length < 10) nextErrors.message = content.messageError;

    const projectTypeLabel =
      content.projectTypes.find((type) => type.value === projectType)?.label ?? projectType;

    return {
      errors: nextErrors,
      payload: { name, email, phone, projectTypeLabel, message },
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const { errors: nextErrors, payload } = readForm(form);

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("idle");
      setStatusMessage("");
      return;
    }

    const honey = form.querySelector<HTMLInputElement>('input[name="botcheck"]');
    if (honey?.checked) {
      form.reset();
      setErrors({});
      setStatus("sent");
      setStatusMessage(content.honeypotMessage);
      return;
    }

    setStatusMessage("");

    try {
      const whatsappMessage = [
        content.whatsappIntro,
        "",
        `Name: ${payload.name}`,
        `Mobile: ${payload.phone || "Not provided"}`,
        `Email: ${payload.email}`,
        `Project type: ${payload.projectTypeLabel}`,
        `Project details: ${payload.message}`,
      ].join("\n");

      window.open(whatsappHref(whatsappNumber, whatsappMessage), "_blank", "noopener,noreferrer");
      setStatus("sent");
      setStatusMessage(content.successMessage);
    } catch (err) {
      setStatus("error");
      setStatusMessage(err instanceof Error ? err.message : content.errorMessage);
    }
  }

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-number">{content.formEyebrow}</div>

      <form className="contact-form" noValidate onSubmit={handleSubmit}>
        <input
          type="checkbox"
          name="botcheck"
          className="contact-honeypot"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className={`form-field${errors.name ? " is-invalid" : ""}`}>
          <label htmlFor="contact-name">{content.nameLabel}</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder={content.namePlaceholder}
            autoComplete="name"
          />
          {errors.name ? <span className="field-error">{errors.name}</span> : null}
        </div>

        <div className={`form-field${errors.email ? " is-invalid" : ""}`}>
          <label htmlFor="contact-email">{content.emailLabel}</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder={content.emailPlaceholder}
            autoComplete="email"
          />
          {errors.email ? <span className="field-error">{errors.email}</span> : null}
        </div>

        <div className="form-field">
          <label htmlFor="contact-phone">{content.phoneLabel}</label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            placeholder={content.phonePlaceholder}
            autoComplete="tel"
          />
        </div>

        <div className={`form-field${errors.projectType ? " is-invalid" : ""}`}>
          <label htmlFor="contact-project-type">{content.projectLabel}</label>
          <select id="contact-project-type" name="projectType" defaultValue="">
            <option value="" disabled>
              {content.projectPlaceholder}
            </option>
            {content.projectTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {errors.projectType ? (
            <span className="field-error">{errors.projectType}</span>
          ) : null}
        </div>

        <div className={`form-field${errors.message ? " is-invalid" : ""}`}>
          <label htmlFor="contact-message">{content.messageLabel}</label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            placeholder={content.messagePlaceholder}
          />
          {errors.message ? <span className="field-error">{errors.message}</span> : null}
        </div>

        {statusMessage ? (
          <p
            className={`contact-form-status is-${status === "sent" ? "success" : "error"}`}
            role="status"
            aria-live="polite"
          >
            {statusMessage}
          </p>
        ) : null}

        <button type="submit" className="contact-submit">
          <span>{content.submitLabel}</span>
          <span className="submit-arrow">↗</span>
        </button>
      </form>
    </div>
  );
}
