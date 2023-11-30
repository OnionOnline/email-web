import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Onion Email',
  tagline: 'The Ultimate layer of privacy protection for your online communications.',
  favicon: 'img/favicon.png',

  url: 'https://onion.email',
  baseUrl: '/',

  organizationName: 'OnionOnline',
  projectName: 'email-web',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars'),
          editUrl:
            'https://github.com/OnionOnline/email-web/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/OnionOnline/email-web/',
          feedOptions: {
            type: 'all',
            copyright: `CC0 2023-${new Date().getFullYear()} Onion Email`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/onion-social-card.png',
    colorMode: {
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Onion Email',
      logo: {
        alt: 'Onion Email',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Information',
        },
        {
          label: 'Sending e-mail',
          to: '/docs/howto',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Onion Email',
        src: 'img/logo.svg',
      },
      links: [
        {
          title: 'Informaton',
          items: [
            {
              label: 'Information',
              to: '/docs/intro',
            },
            {
              label: 'How to send e-mail?',
              to: '/docs/howto',
            },
            {
              label: 'Our GPG key',
              to: '/docs/gpg-key',
            },
          ],
        },
        {
          title: 'Reach us',
          items: [
            {
              label: 'Contact',
              href: 'mailto:contact@onion.email?key=https%3A%2F%2Fkeys.openpgp.org%2Fvks%2Fv1%2Fby-fingerprint%2FF670A2D3626AB878A46D7AA8879FF4E05B438A11',
            },
            {
              label: 'Sales',
              href: 'mailto:sales@onion.email?key=https%3A%2F%2Fkeys.openpgp.org%2Fvks%2Fv1%2Fby-fingerprint%2FF670A2D3626AB878A46D7AA8879FF4E05B438A11',
            },
            {
              label: 'Abuse report',
              href: 'mailto:abuse@onion.email?key=https%3A%2F%2Fkeys.openpgp.org%2Fvks%2Fv1%2Fby-fingerprint%2FF670A2D3626AB878A46D7AA8879FF4E05B438A11',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/OnionOnline',
            },
          ],
        },
      ],
      copyright: `CC0 2023-${new Date().getFullYear()} Onion Email`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
