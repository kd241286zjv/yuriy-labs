import { companyRegistry } from '@/shared/company';
import { skillRegistry } from '@/shared/skill/constants';

import type { Experience } from './types';

export const experiences: Experience[] = [
  {
    id: 'zebrains',
    company: companyRegistry.zebrains,
    role: 'Lead Frontend Engineer',
    period: {
      from: '2023-11',
      to: '2025-05',
    },
    summary:
      'Led frontend development of enterprise applications, defined architecture and mentored engineers.',
    achievements: [
      {
        id: 'architecture',
        text: 'Designed and evolved the frontend architecture using Feature-Sliced Design.',
      },
      {
        id: 'leadership',
        text: 'Led the frontend team and participated in technical interviews.',
      },
      {
        id: 'design-system',
        text: 'Developed reusable UI components and internal tooling.',
      },
    ],
    skills: [
      skillRegistry.vue3,
      skillRegistry.typescript,
      skillRegistry.pinia,
      skillRegistry.vite,
      skillRegistry.tailwind,
      skillRegistry.primevue,
      skillRegistry.zod,
      skillRegistry.storybook,
      skillRegistry.fsd,
      skillRegistry.git,
    ],
  },
  {
    id: 'grid-dynamics',
    company: companyRegistry.gridDynamics,
    role: 'Senior Frontend Engineer',
    period: {
      from: '2021-03',
      to: '2023-10',
    },
    summary: 'Developed enterprise web applications for international clients.',
    achievements: [
      {
        id: 'migration',
        text: 'Migrated projects to Vue 3 and modern frontend tooling.',
      },
      {
        id: 'performance',
        text: 'Improved application performance and maintainability.',
      },
    ],
    skills: [
      skillRegistry.vue3,
      skillRegistry.react,
      skillRegistry.typescript,
      skillRegistry.nodejs,
      skillRegistry.nestjs,
      skillRegistry.restApi,
      skillRegistry.storybook,
      skillRegistry.vitest,
    ],
  },
];
