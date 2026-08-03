import type { SectionId } from '@/shared/navigation';

export function getActiveSection(
  sections: Map<SectionId, IntersectionObserverEntry>,
): SectionId | undefined {
  const entries = [...sections.entries()];

  if (!entries.length) {
    return;
  }

  const visible = entries.filter(([, entry]) => {
    return entry.boundingClientRect.top >= 0;
  });

  if (visible.length) {
    visible.sort((a, b) => {
      return a[1].boundingClientRect.top - b[1].boundingClientRect.top;
    });

    return visible[0][0];
  }

  entries.sort((a, b) => {
    return b[1].boundingClientRect.top - a[1].boundingClientRect.top;
  });

  return entries[0][0];
}
