import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export const CONTACTS = {
  github: {
    label: 'GitHub',
    icon: FaGithub,
  },

  linkedin: {
    label: 'LinkedIn',
    icon: FaLinkedin,
  },

  email: {
    label: 'Email',
    icon: Mail,
  },
} as const;
