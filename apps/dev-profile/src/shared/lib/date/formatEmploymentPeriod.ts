import type { EmploymentPeriod } from '@/profile/experience';

const formatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  year: 'numeric',
});

export function formatEmploymentPeriod(period: EmploymentPeriod): string {
  const from = formatter.format(new Date(`${period.from}-01`));

  const to = period.to ? formatter.format(new Date(`${period.to}-01`)) : 'Present';

  return `${from} — ${to}`;
}
