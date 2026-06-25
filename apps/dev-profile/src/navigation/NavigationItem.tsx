import type { NavigationItem as NavigationItemModel } from './navigation-items';

interface NavigationItemProps {
  item: NavigationItemModel;
}

export function NavigationItem({ item }: NavigationItemProps) {
  return (
    <li>
      <button type="button">{item.label}</button>
    </li>
  );
}
