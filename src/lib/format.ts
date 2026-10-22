export function whatsappHref(number: string, text?: string) {
  const digits = number.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-PK", {
    maximumFractionDigits: 2,
  }).format(amount);
}

export function applyTemplate(
  template: string,
  values: Record<string, string>,
) {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    template,
  );
}
