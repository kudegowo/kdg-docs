import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'KudEgOwo',
  tagline: 'Family–School–Tutor Collaboration Platform',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://emergined.github.io',
  baseUrl: '/kdg-docs/',

  organizationName: 'emergined',
  projectName: 'kdg-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'KudEgOwo',
      logo: {
        alt: 'KudEgOwo Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Product Guide',
        },
        {
          to: '/docs/features/available-now',
          label: 'Features',
          position: 'left',
        },
        {
          to: '/docs/faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          to: '/docs/contact',
          label: 'Contact',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'For You',
          items: [
            {label: 'Parents & Guardians', to: '/docs/for-parents'},
            {label: 'Schools', to: '/docs/for-schools'},
            {label: 'Tutors', to: '/docs/for-tutors'},
          ],
        },
        {
          title: 'Product Areas',
          items: [
            {label: 'School Payments', to: '/docs/product-areas/school-payments'},
            {label: 'SafeSchool', to: '/docs/product-areas/safe-school'},
            {label: 'Education', to: '/docs/product-areas/education'},
            {label: 'Financial Literacy', to: '/docs/product-areas/financial-literacy'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'How Payments Work', to: '/docs/how-it-works/payments'},
            {label: 'Security', to: '/docs/how-it-works/security'},
            {label: 'FAQ', to: '/docs/faq'},
            {label: 'Contact Us', to: '/docs/contact'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} KudEgOwo. A product by Emergined.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
