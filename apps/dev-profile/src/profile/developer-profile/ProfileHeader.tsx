import type { PersonalInfo } from './types';
import { MapPin } from 'lucide-react';
import { Contacts } from '../Contacts';

interface HeroProps {
  personal: PersonalInfo;
}

export function ProfileHeader({ personal }: HeroProps) {
  return (
    <header className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold tracking-tight">{personal.fullName}</h1>

      <p className="text-xl text-slate-600">{personal.role}</p>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <MapPin className="size-4 text-slate-500" />
          <span className="text-slate-500">{personal.location}</span>
        </div>
        <Contacts contacts={personal.contacts} />
      </div>
    </header>
  );
}
