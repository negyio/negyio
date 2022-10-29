// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Negy',
  tagline: 'Next Generation Anonymous Internet.',
  url: 'https://negy.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'negyio', // Usually your GitHub org/user name.
  projectName: 'negyio', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-SSB7PBZS62',
        anonymizeIP: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/twitter_og.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Negy',
      logo: {
        alt: 'Negy Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documents',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          to: '/community',
          label: 'Community',
          position: 'right',
        },
        {
          to: '/contact',
          label: 'Contact',
          position: 'right',
        },
        {
          href: 'https://github.com/negyio/negy',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contents',
          items: [
            {
              label: 'Documents',
              to: '/docs/intro',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'Community',
              to: '/community',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/negyio',
            },
            {
              label: 'Contact',
              to: '/contact',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/negyio/negy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a target="_blank" href="https://negy.io">Negy</a>`,
    },
  },
};

module.exports = config;
