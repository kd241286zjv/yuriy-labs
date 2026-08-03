import type { PersonalInfo } from '@/profile';

interface PrintHeaderProps {
  personal: PersonalInfo;
}

export function PrintHeader({ personal }: PrintHeaderProps) {
  return (
    <header>
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-slate-950">{personal.fullName}</h1>

        <p className="text-base text-slate-600">{personal.role}</p>
      </div>

      <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
        <span>{personal.location}</span>

        {personal.contacts.map((contact) => (
          <span key={contact.type} className="flex items-center gap-2">
            <span aria-hidden="true">·</span>

            <a href={contact.href}>{contact.type}</a>
          </span>
        ))}
      </div>
    </header>
  );
}
