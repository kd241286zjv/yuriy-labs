import { useEffect, useState } from 'react';
import type { SectionId } from '@/shared/navigation';

const ACTIVATION_LINE = window.innerHeight * 0.2;

function getActiveSection(): SectionId {
  const sections = [...document.querySelectorAll<HTMLElement>('section[id]')].map((section) => ({
    id: section.id as SectionId,
    top: section.getBoundingClientRect().top,
  }));

  const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1;

  if (isBottom) {
    return sections.at(-1)!.id;
  }

  const passedSections = sections.filter((section) => section.top <= ACTIVATION_LINE);

  if (passedSections.length) {
    return passedSections.at(-1)!.id;
  }

  return sections[0].id;
}

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>('overview');

  useEffect(() => {
    function handleScroll() {
      setActiveSection(getActiveSection());
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeSection;
}
