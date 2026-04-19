import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Who It\'s For',
      collapsed: false,
      items: ['for-parents', 'for-schools', 'for-tutors'],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'features/available-now',
        'features/coming-soon',
        'features/future',
      ],
    },
    {
      type: 'category',
      label: 'Product Areas',
      collapsed: true,
      items: [
        'product-areas/school-payments',
        'product-areas/safe-school',
        'product-areas/education',
        'product-areas/financial-literacy',
      ],
    },
    {
      type: 'category',
      label: 'How It Works',
      collapsed: true,
      items: [
        'how-it-works/payments',
        'how-it-works/security',
      ],
    },
    'faq',
    'contact',
  ],
};

export default sidebars;
