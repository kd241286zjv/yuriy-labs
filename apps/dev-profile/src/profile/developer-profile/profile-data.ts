import type { DeveloperProfile } from './types';
import { skillRegistry } from '@/shared/skill/constants';

export const profileData: DeveloperProfile = {
  personal: {
    fullName: 'Yuriy Zharskiy',
    role: 'Senior Fullstack / Frontend Engineer',
    location: 'A Coruña, Spain',
    contacts: [
      {
        type: 'github',
        href: 'https://github.com/kd241286zjv/yuriy-labs',
      },
      {
        type: 'linkedin',
        href: 'https://www.linkedin.com/in/yuriy-zharskiy-699a211a7/',
      },
      {
        type: 'email',
        href: 'mailto:kd241286zjv@gmail.com',
      },
    ],
  },
  summary:
    'Senior Fullstack / Frontend Engineer with 8+ years of experience building enterprise applications using Vue.js, React, TypeScript and NestJS. Passionate about architecture, developer experience and modern frontend tooling.',
  skills: Object.values(skillRegistry),
  languages: [
    {
      name: 'Russian',
      level: 'Native',
    },
    {
      name: 'English',
      level: 'C1',
    },
    {
      name: 'Spanish',
      level: 'B1',
    },
  ],
};
