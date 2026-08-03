import type { Language } from './developer-profile/types';
import { Badge } from '@/shared/ui/Badge';

interface LanguagesProps {
  languages: Language[];
}

export function Languages({ languages }: LanguagesProps) {
  return (
    <ul className="space-y-3">
      {languages.map((language) => (
        <li
          key={language.name}
          className="grid grid-cols-[80px_max-content] items-center gap-x-4 gap-y-3 justify-items-start"
        >
          <span className="font-medium">{language.name}:</span>

          <Badge>{language.level}</Badge>
        </li>
      ))}
    </ul>
  );
}
