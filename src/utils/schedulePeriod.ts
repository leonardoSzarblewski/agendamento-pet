export type PeriodKey = "manha" | "tarde" | "noite";

export function getPeriodFromTime(time: string): PeriodKey | null {
  // pegando a hora de um horário no formato "HH:MM" e transformando essa hora em número.
  const hour = Number(time.split(":")[0]);

  if (hour <= 12) return "manha";
  if (hour <= 18) return "tarde";
  if (hour <= 22) return "noite";

  return null;
}
