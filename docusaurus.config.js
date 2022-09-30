const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion

module.exports = {
  plugins: ["@chatwoot/docusaurus-plugin"],
  themeConfig: {
    chatwoot: {
      websiteToken: "QN9DEVscSMXmiV3nKZb8t6iK",
      baseURL: "https://app.chatwoot.com",  // optional
      enableInDevelopment: false,  // optional
    }
  }
};

/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Community Library',
  tagline: 'Stackies are cool',
  url: 'https://community-library.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cnu1812', // Usually your GitHub org/user name.
  projectName: 'Community Library', // Usually your repo name.
  
  presets: [
    [
      '@docusaurus/preset-classic',
      
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/cnu1812/community-library',
          
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/cnu1812/community-library',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (

      {
      navbar: {
        title: 'Community Library',
        logo: {
          alt: 'My Site Logo',
          src: 'img/undraw_logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          
          {
            to: '/docs/quests-help/intro-quests',
            label: 'Quests Help',
            position: 'left',

          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/cnu1812/Community-Library',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: '/docs/community-learn/intro',
            label: 'Community Learn',
            position: 'left',
          },
        ],
      },
      announcementBar: {
        content:
          '⭐️ If you like Community-Library, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/cnu1812/community-library">GitHub</a>, and follow us on <a target="_blank" href="https://twitter.com/cnu1812"> Twitter</a>! ⭐️',
        backgroundColor: 'white',
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
              {
                label: 'Sessions',
                to: '/docs/community-learn/intro',
              },
              {
                label: 'PowerStackies Guide',
                to: '/docs/PowerStackies',
              },
              {
                label: 'Leaderboard',
                to: '/docs/PowerStackies',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'StackUp platform ',
                href: 'https://app.stackup.dev/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/cnu1812',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/stackupofficial/',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/wVtcAT9kqU',
              }
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
                href: 'https://github.com/cnu1812/community-library',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/StackUpHQ',
              },
              {
                label: 'Privacy Policy',
                to: '/src/pages/privacyPolicy',
              },
              {
                label: 'Terms of Use',
                to: '/src/pages/Terms-of-services',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Community.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      
      gtag: {
          trackingID: 'G-70XSTSEBJP',
          ananymizeIP:true,
        },
    }),
});
