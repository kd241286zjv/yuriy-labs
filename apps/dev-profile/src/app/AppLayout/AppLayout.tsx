import type { PropsWithChildren, ReactNode } from 'react';

import './AppLayout.css';

interface AppLayoutProps extends PropsWithChildren {
  navigation: ReactNode;
}

export function AppLayout({ navigation, children }: AppLayoutProps) {
  return (
    <div className="layout">
      <aside className="sidebar">{navigation}</aside>

      <main className="content">{children}</main>
    </div>
  );
}
