import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'GoSAAD',
  tagline: 'Panduan penggunaan GoSAAD',
  favicon: 'img/gosaad-icon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.gosaad.id',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gosaad',
  projectName: 'gosaad-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        hashed: 'filename',
        highlightSearchTermsOnTargetPage: true,
        searchBarPosition: 'right',
        searchResultLimits: 8,
        searchResultContextMaxLength: 72,
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'GoSAAD',
      logo: {
        alt: 'GoSAAD',
        src: 'img/gosaad-logo.svg',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'panduanSidebar',
          position: 'left',
          label: 'Panduan',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Panduan',
          items: [
            {label: 'Mengenal GoSAAD', to: '/docs/intro'},
            {label: 'Panduan Administrator', to: '/docs/administrator/login'},
            {label: 'Panduan Peserta', to: '/docs/peserta/login'},
          ],
        },
        {
          title: 'Komunitas',
          items: [
            {
              label: 'Diskusi di Telegram',
              href: 'https://t.me/gosaad02',
              className: 'telegramFooterLink',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} GoSAAD. Panduan penggunaan.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
