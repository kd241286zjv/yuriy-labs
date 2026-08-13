import type { Skill } from '@/shared/skill';
import type { Company } from '@/shared/company';

export interface Experience {
  id: string;
  company: Company;
  role: string;
  period: EmploymentPeriod;
  summary: string;
  achievements: Achievement[];
  skills: Skill[];
}

export interface EmploymentPeriod {
  from: string;
  to?: string;
}

export interface Achievement {
  id: string;
  text: string;
}
