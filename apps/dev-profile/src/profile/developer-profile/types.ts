import type { Skill } from '@/shared/skill';

export interface PersonalInfo {
  fullName: string;
  role: string;
  location: string;
  avatar?: string;
  contacts: Contact[];
}

export type ContactType = 'email' | 'github' | 'linkedin';

export interface Contact {
  type: ContactType;
  href: string;
  name: string;
}

export interface Language {
  name: string;
  level: 'Native' | 'C2' | 'C1' | 'B2' | 'B1' | 'A2' | 'A1';
}

export interface DeveloperProfile {
  personal: PersonalInfo;
  summary: string;
  skills: Skill[];
  languages: Language[];
}
