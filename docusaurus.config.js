// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Onion Email',
  tagline: 'The Ultimate layer of privacy protection for your online communications.',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://onion.email',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OnionOnline', // Usually your GitHub org/user name.
  projectName: 'email-web', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/OnionOnline/email-web/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/OnionOnline/email-web/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
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
                href: 'mailto:contact@onion.email?key=https%3A%2F%2Fonion.email%2Fkeys%2FOnionEmail(4ABCA2C2)%E2%80%93Public.asc',
              },
              {
                label: 'Sales',
                href: 'mailto:sales@onion.email?key=https%3A%2F%2Fonion.email%2Fkeys%2FOnionEmail(4ABCA2C2)%E2%80%93Public.asc',
              },
              {
                label: 'Abuse report',
                href: 'mailto:abuse@onion.email?key=https%3A%2F%2Fonion.email%2Fkeys%2FOnionEmail(4ABCA2C2)%E2%80%93Public.asc',
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
        copyright: `CC0 2023-${new Date().getFullYear()} Onion Email.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
