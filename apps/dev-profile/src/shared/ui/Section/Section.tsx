import type { PropsWithChildren } from 'react';
import type { SectionId } from '@/shared/navigation';

interface SectionProps extends PropsWithChildren {
  id: SectionId;
  title: string;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="space-y-6 scroll-mt-24">
      <header className="border-b border-slate-200 pb-3">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h2>
      </header>

      {children}
    </section>
  );
}
