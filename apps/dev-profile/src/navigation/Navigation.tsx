import { Button } from '@/shared/ui/Button';
import { NavigationItem } from './NavigationItem';
import type { NavigationItem as NavigationItemModel } from './navigation-items';
import { useActiveSection } from '@/shared/hooks/useActiveSection';

interface NavigationProps {
  items: NavigationItemModel[];
}

export function Navigation({ items }: NavigationProps) {
  const activeSection = useActiveSection();
  return (
    <nav className="space-y-8">
      <header className="space-y-2">
        <h2 className="text-xl font-bold">Developer profile</h2>
        <p className="text-sm text-slate-500">Frontend / Fullstack</p>
      </header>
      <hr className="border-slate-200" />
      <Button variant="primary" onClick={() => window.print()}>
        Download / Print
      </Button>
      <hr className="border-slate-200" />
      <ul className="space-y-1">
        {items.map((item) => (
          <NavigationItem key={item.id} item={item} active={item.id === activeSection} />
        ))}
      </ul>
    </nav>
  );
}
