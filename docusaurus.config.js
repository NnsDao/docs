// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NnsDAO Docs',
  tagline: 'You can be a boss, you just work for yourself, Contribute(DAOs) to earn. ',
  url: 'https://docs.nnsdao.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nnsdao', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/NnsDao/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/NnsDao/docs/edit/master/website/blog/',
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
      navbar: {
        title: 'NnsDAO',
        logo: {
          alt: 'nnsdao labs',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://angel.co/company/nnsdao-labs',
            label: 'Jobs',
            position: 'right',
          },
          {
            href: 'https://github.com/nnsdao/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
              {
                label: 'Whitepaper',
                href: 'https://github.com/NnsDao/nnsdao-org/blob/main/static/NnsDAO_Boundaryless_Autonomous_Organization.pdf',
              },
            ],
          },
          {
            title: 'Contributing',
            items: [
              {
                label: 'DAOs to earn',
                href: 'https://github.com/NnsDao/nnsdao-org/blob/main/static/NnsDAO_DAOs_To_Earn.pdf',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/nnsdao',
              },
              {
                label: 'Icptree',
                href: 'https://hrrqn-4aaaa-aaaai-aasoq-cai.raw.ic0.app/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nnsdao',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NnsDAO Labs, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
