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
        name: 'GitHub',
        href: 'https://github.com/kd241286zjv/yuriy-labs',
      },
      {
        type: 'linkedin',
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/yuriy-zharskiy-699a211a7/',
      },
      {
        type: 'email',
        name: 'Email',
        href: 'mailto:kd241286zjv@gmail.com',
      },
    ],
  },
  summary: `Senior Fullstack / Frontend Engineer with 8+ years of experience building scalable enterprise web applications using Vue.js, React, TypeScript and NestJS.

  Designed frontend architectures from scratch, modernized legacy applications, mentored engineers and led frontend teams across enterprise projects. Focused on building maintainable software, reusable UI systems and efficient engineering workflows.`,
  skills: [
    skillRegistry.vue3,
    skillRegistry.react,
    skillRegistry.typescript,
    skillRegistry.nuxt,
    skillRegistry.tailwind,
    skillRegistry.storybook,

    skillRegistry.nestjs,
    skillRegistry.nodejs,
    skillRegistry.restApi,

    skillRegistry.vitest,
    skillRegistry.playwright,

    skillRegistry.git,
    skillRegistry.pnpm,
    skillRegistry.docker,
  ],
  languages: [
    {
      name: 'English',
      level: 'C1',
    },
    {
      name: 'Spanish',
      level: 'B1',
    },
    {
      name: 'Russian',
      level: 'Native',
    },
  ],
};
