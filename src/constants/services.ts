export const CORE_SERVICES = [
  "Window cleaning",
  "Gutter cleaning",
  "Fascia cleaning",
  "Residential window cleaning",
  "Commercial window cleaning",
] as const;

export const SERVICES_KEYWORDS = CORE_SERVICES.map((s) => s.toLowerCase()).join(
  ", ",
);
