export interface Area {
  id: string;
  name: string;
  slug: string;
  description: string;
  zipCodes: string[];
}

export const areas: Area[] = [
  {
    id: 'daytona-beach',
    name: 'Daytona Beach',
    slug: 'daytona-beach',
    description: 'Providing fast well pump repair and water system service to homeowners and businesses throughout Daytona Beach.',
    zipCodes: ['32114', '32117', '32118', '32119', '32124']
  },
  {
    id: 'new-smyrna-beach',
    name: 'New Smyrna Beach',
    slug: 'new-smyrna-beach',
    description: 'Expert well and irrigation pump services for the New Smyrna Beach community, from the beachside to the mainland.',
    zipCodes: ['32168', '32169', '32170']
  },
  {
    id: 'port-orange',
    name: 'Port Orange',
    slug: 'port-orange',
    description: 'Reliable well troubleshooting and pump replacement services for families and properties in Port Orange.',
    zipCodes: ['32127', '32128', '32129']
  },
  {
    id: 'deland',
    name: 'Deland',
    slug: 'deland',
    description: 'Serving the historic Deland area with professional well system inspections and emergency pump repairs.',
    zipCodes: ['32720', '32721', '32723', '32724']
  },
  {
    id: 'deltona',
    name: 'Deltona',
    slug: 'deltona',
    description: 'Fast, local well pump service for the growing community of Deltona. We understand your local water needs.',
    zipCodes: ['32725', '32738', '32739']
  },
  {
    id: 'orange-city',
    name: 'Orange City',
    slug: 'orange-city',
    description: 'Dependable well and pump solutions for Orange City residents, specializing in pressure tank and switch service.',
    zipCodes: ['32763', '32774']
  },
  {
    id: 'edgewater',
    name: 'Edgewater',
    slug: 'edgewater',
    description: 'Professional well point and shallow well services for the Edgewater area and surrounding rural properties.',
    zipCodes: ['32132', '32141']
  },
  {
    id: 'ormond-beach',
    name: 'Ormond Beach',
    slug: 'ormond-beach',
    description: 'High-quality well pump replacement and irrigation support for Ormond Beach homes and businesses.',
    zipCodes: ['32174', '32175', '32176']
  },
  {
    id: 'debary',
    name: 'DeBary',
    slug: 'debary',
    description: 'Expert well system troubleshooting and repair services for the DeBary community.',
    zipCodes: ['32713', '32753']
  }
];
