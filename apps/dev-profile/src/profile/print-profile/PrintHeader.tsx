import type { PersonalInfo } from '@/profile';
import type { Language } from '@/profile/developer-profile';
import { Fragment } from 'react';

interface PrintHeaderProps {
  personal: PersonalInfo;
  languages: Language[];
}

export function PrintHeader({ personal, languages }: PrintHeaderProps) {
  return (
    <header className="space-y-3">
      <div className="space-y-0.5">
        <h1 className="text-3xl font-bold tracking-tight">{personal.fullName}</h1>
        <p className="text-base font-medium text-slate-700">{personal.role}</p>
      </div>
      <p className="text-sm text-slate-500">📍{personal.location}</p>
      <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
        {personal.contacts.map((contact, index) => (
          <Fragment key={contact.type}>
            {index > 0 && <span aria-hidden="true">·</span>}

            <a href={contact.href} className="underline underline-offset-2 decoration-slate-300">
              {contact.name}
            </a>
          </Fragment>
        ))}
      </div>
      <p className="mt-2 text-sm text-slate-500">
        {languages.map(({ name, level }) => `${name} (${level})`).join(' • ')}
      </p>
    </header>
  );
}
