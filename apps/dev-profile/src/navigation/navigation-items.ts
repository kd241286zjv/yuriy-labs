import type { SectionId } from '@/shared/navigation';

export interface NavigationItem {
  id: SectionId;
  label: string;
}

export const navigationItems: NavigationItem[] = [
  {
    id: 'overview',
    label: 'Overview',
  },
  {
    id: 'experience',
    label: 'Experience',
  },
  {
    id: 'skills',
    label: 'Skills',
  },
  {
    id: 'languages',
    label: 'Languages',
  },
];
