import type { PropsWithChildren } from 'react';

interface PrintSectionProps extends PropsWithChildren {
  title: string;
}

export function PrintSection({ title, children }: PrintSectionProps) {
  return (
    <section>
      <h2
        className="
          border-b
          border-slate-200
          pb-1
          text-base
          font-bold
          text-slate-950
        "
      >
        {title}
      </h2>

      <div className="mt-3">{children}</div>
    </section>
  );
}
