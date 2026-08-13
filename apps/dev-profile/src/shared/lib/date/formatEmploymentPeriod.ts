import type { EmploymentPeriod } from '@/profile/experience';

const formatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
});

function formatYearMonth(value: string): string {
  return formatter.format(new Date(`${value}-01`));
}

export function formatEmploymentPeriod(period: EmploymentPeriod): string {
  const from = formatYearMonth(period.from);
  const to = period.to ? formatYearMonth(period.to) : 'Present';

  return `${from} – ${to}`;
}
