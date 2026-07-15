import type { PropsWithChildren } from 'react';

export function Badge({ children }: PropsWithChildren) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        bg-slate-500/10
        px-2
        py-0.5
        text-xs
        font-medium
        text-slate-600
        transition-colors
      "
    >
      {children}
    </span>
  );
}
