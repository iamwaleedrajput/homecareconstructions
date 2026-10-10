"use client";

import { useState, type FormEvent } from "react";

type FieldName = "name" | "email" | "phone" | "projectType" | "message";

const PROJECT_TYPE_LABELS: Record<string, string> = {
  interior: "Interior Design",
  renovation: "Renovation & Remodeling",
  construction: "New Construction",
  furniture: "Custom Furniture",
  consultation: "Design Consultation",
  other: "Other",
};

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [statusMessage, setStatusMessage] = useState("");
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});

  function readForm(form: HTMLFormElement) {
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const projectType = String(data.get("projectType") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const nextErrors: Partial<Record<FieldName, string>> = {};

    if (name.length < 2) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email.";
    }
    if (!projectType) nextErrors.projectType = "Please select a project type.";
    if (message.length < 10) {
      nextErrors.message = "Tell us a little more (at least 10 characters).";
    }

    return {
      errors: nextErrors,
      payload: {
        name,
        email,
        phone,
        projectTypeLabel: PROJECT_TYPE_LABELS[projectType] ?? projectType,
        message,
      },
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const { errors: nextErrors } = readForm(form);

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("idle");
      setStatusMessage("");
      return;
    }

    const honey = form.querySelector<HTMLInputElement>(
      'input[name="botcheck"]',
    );
    if (honey?.checked) {
      form.reset();
      setErrors({});
      setStatus("sent");
      setStatusMessage("Thanks — we’ll be in touch shortly.");
      return;
    }

    setStatus("sending");
    setStatusMessage("");

    try {
      // await sendContactMail(payload);
      form.reset();
      setErrors({});
      setStatus("sent");
      setStatusMessage("Thanks — we’ll be in touch shortly.");
    } catch (err) {
      setStatus("error");
      setStatusMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  const submitting = status === "sending";

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-number">CONTACT</div>

      <form className="contact-form" noValidate onSubmit={handleSubmit}>
        <input
          type="checkbox"
          name="botcheck"
          className="contact-honeypot"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className={`form-field${errors.name ? " is-invalid" : ""}`}>
          <label htmlFor="contact-name">01 — YOUR NAME</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Your full name"
            autoComplete="name"
            disabled={submitting}
          />
          {errors.name ? (
            <span className="field-error">{errors.name}</span>
          ) : null}
        </div>

        <div className={`form-field${errors.email ? " is-invalid" : ""}`}>
          <label htmlFor="contact-email">02 — EMAIL ADDRESS</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
            disabled={submitting}
          />
          {errors.email ? (
            <span className="field-error">{errors.email}</span>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="contact-phone">03 — PHONE</label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            placeholder="+92 300 0000000"
            autoComplete="tel"
            disabled={submitting}
          />
        </div>

        <div className={`form-field${errors.projectType ? " is-invalid" : ""}`}>
          <label htmlFor="contact-project-type">04 — PROJECT TYPE</label>
          <select
            id="contact-project-type"
            name="projectType"
            defaultValue=""
            disabled={submitting}
          >
            <option value="" disabled>
              Select a project type
            </option>
            <option value="interior">Interior Design</option>
            <option value="renovation">Renovation & Remodeling</option>
            <option value="construction">New Construction</option>
            <option value="furniture">Custom Furniture</option>
            <option value="consultation">Design Consultation</option>
            <option value="other">Other</option>
          </select>
          {errors.projectType ? (
            <span className="field-error">{errors.projectType}</span>
          ) : null}
        </div>

        <div className={`form-field${errors.message ? " is-invalid" : ""}`}>
          <label htmlFor="contact-message">05 — TELL US MORE</label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            placeholder="Tell us about your space, timeline, or budget..."
            disabled={submitting}
          />
          {errors.message ? (
            <span className="field-error">{errors.message}</span>
          ) : null}
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

        <button type="submit" className="contact-submit" disabled={submitting}>
          <span>{submitting ? "SENDING…" : "START A CONVERSATION"}</span>
          <span className="submit-arrow">↗</span>
        </button>
      </form>
    </div>
  );
}
