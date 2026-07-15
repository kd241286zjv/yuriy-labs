import type { NavigationItem as NavigationItemModel } from './navigation-items';

interface NavigationItemProps {
  item: NavigationItemModel;
  active?: boolean;
}

function getNavigationItemClass(active: boolean | undefined): string {
  if (active) {
    return `
      block
      rounded-lg
      px-3
      py-2
      font-medium
      text-slate-900
    `;
  }

  return `
    block
    rounded-lg
    px-3
    py-2
    text-slate-500
    transition-colors
    hover:text-slate-900
  `;
}

export function NavigationItem({ item, active }: NavigationItemProps) {
  return (
    <li className="relative">
      <>
        {active && (
          <span
            className="
              absolute
              left-0
              top-1/2
              h-5
              w-0.5
              -translate-y-1/2
              rounded-full
              bg-slate-900
            "
          />
        )}
      </>
      <a href={`#${item.id}`} className={getNavigationItemClass(active)}>
        {item.label}
      </a>
    </li>
  );
}
