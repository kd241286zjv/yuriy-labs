import type { Profile } from './types';
import { skillRegistry } from '@/shared/skill/constants';

export const profile: Profile = {
  personal: {
    fullName: 'Yuriy Zharskiy',
    role: 'Senior Fullstack / Frontend Engineer',
    location: 'A Coruña, Spain',
    contacts: [
      {
        type: 'github',
        href: 'https://github.com/...',
      },
      {
        type: 'linkedin',
        href: 'https://linkedin.com/in/...',
      },
      {
        type: 'email',
        href: 'mailto:yuriy@example.com',
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
