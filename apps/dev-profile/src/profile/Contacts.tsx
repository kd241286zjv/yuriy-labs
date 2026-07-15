import type { Contact } from './profile/types';
import { CONTACTS } from './profile/constants';

interface ContactsProps {
  contacts: Contact[];
}

export function Contacts({ contacts }: ContactsProps) {
  return (
    <ul className="flex flex-wrap gap-4 text-sm text-slate-600">
      {contacts.map((contact) => {
        const { icon: Icon, label } = CONTACTS[contact.type];

        return (
          <li key={contact.type}>
            <a
              href={contact.href}
              aria-label={label}
              title={label}
              target={contact.type !== 'email' ? '_blank' : undefined}
              rel={contact.type !== 'email' ? 'noreferrer' : undefined}
              className="
              text-slate-500
              transition-colors
              hover:text-slate-900
            "
            >
              <Icon className="size-5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
