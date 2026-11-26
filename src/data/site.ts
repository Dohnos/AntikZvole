// Centrální údaje webu – měňte jen zde.
export const SITE = {
  name: 'Antik Zvole',
  url: 'https://www.antikzvole.cz',
  phone: '+420603540576',
  phoneDisplay: '603 540 576',
  email: 'Antikzvole@seznam.cz',
  operator: {
    name: 'Petr Dohnálek',
    ico: '64962873',
    street: 'Zvole 39',
    zip: '789 01',
    city: 'Zvole',
  },
  region: ['Zvole', 'Zábřeh', 'Šumperk', 'Mohelnice', 'Olomouc', 'Prostějov', 'Přerov', 'Brno', 'Zlín', 'Kroměříž', 'Uherské Hradiště'],
  copyrightYear: 2026,
} as const;

// Formulář: EmailJS (odeslání e-mailu) + Cloudinary (nahrání fotek).
// Jde o veřejné klíče určené pro frontend – nejsou to tajemství.
export const FORM_CONFIG = {
  emailjsPublicKey: 'OwmvA6xONh2s5ESbm',
  emailjsServiceId: 'service_vgfs2x1',
  emailjsTemplateId: 'template_96ldb6d',
  cloudinaryCloudName: 'drrzl7evt',
  cloudinaryUploadPreset: 'AntikZvole',
} as const;

export const SERVICES = [
  'Výkup starožitností',
  'Výkup retro nábytku a designu',
  'Výkup retro elektroniky a drobností',
  'Výkup starých knih',
  'Vyklízení pozůstalosti',
  'Jiné / dotaz',
] as const;
