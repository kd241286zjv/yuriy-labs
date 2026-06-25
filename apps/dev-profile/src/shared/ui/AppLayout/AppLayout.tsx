import type { PropsWithChildren } from 'react';

import { Sidebar } from './Sidebar';
import { Content } from './Content';

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Sidebar />

      <Content>{children}</Content>
    </>
  );
}
