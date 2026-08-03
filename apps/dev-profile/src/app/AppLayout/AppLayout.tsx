import type { PropsWithChildren, ReactNode } from 'react';

interface AppLayoutProps extends PropsWithChildren {
  navigation: ReactNode;
}

export function AppLayout({ navigation, children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto grid max-w-7xl grid-cols-[260px_1fr] gap-12 px-10 py-10">
        <aside className="sticky top-10 h-fit">{navigation}</aside>

        <main className="max-w-3xl">{children}</main>
      </div>
    </div>
  );
}
