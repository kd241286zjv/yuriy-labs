import { NavigationItem } from './NavigationItem';
import type { NavigationItem as NavigationItemModel } from './navigation-items';

interface NavigationProps {
  items: NavigationItemModel[];
}

export function Navigation({ items }: NavigationProps) {
  return (
    <nav>
      <ul>
        {items.map((item) => (
          <NavigationItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
}
