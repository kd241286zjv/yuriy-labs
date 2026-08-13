export interface Company {
  id: CompanyId;
  name: string;
  website: string;
  location: string;
  logo?: string;
  description?: string;
}

export const companyRegistry = {
  zebrains: {
    id: 'zebrains',
    name: 'Zebrains',
    website: 'https://zebrains.com',
    location: 'Remote',
  },

  gridDynamics: {
    id: 'gridDynamics',
    name: 'Grid Dynamics',
    website: 'https://www.griddynamics.com',
    location: 'Remote',
  },

  dataart: {
    id: 'dataart',
    name: 'DataArt',
    website: 'https://www.dataart.com',
    location: 'Remote',
  },

  epam: {
    id: 'epam',
    name: 'EPAM Systems',
    website: 'https://www.epam.com',
    location: 'Remote',
  },
} as const;

export type CompanyId = keyof typeof companyRegistry;
