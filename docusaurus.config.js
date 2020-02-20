module.exports = {
  title: 'Showcase App',
  tagline: 'One stop showcase for all our apps',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  // favicon: 'img/favicon.ico',
  favicon: 'img/WM-Fav-57x57.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      // hideOnScroll: true,
      title: '',
      logo: {
        alt: 'WaveMaker',
        // src: 'img/logo.svg',
        src: 'img/WM_blue.png',
        srcDark: 'img/WM_white.png',
      },
      links: [
        // {to: 'docs/doc1', label: 'Docs', position: 'left'},
        // {to: 'blog', label: 'Blog', position: 'left'},
        {href: '', label: 'Platform', position: 'right'},
        {href: '', label: 'Solutions', position: 'right'},
        {href: '', label: 'Customer Success', position: 'right'},
        {href: '', label: 'Company', position: 'right'},
        {href: '', label: 'Resources', position: 'right'},
        {href: 'https://www.wavemaker.com/talk-to-expert/', label: 'Talk to an expert', position: 'right', class:'button button--outline button--secondary margin-right--xs'},
        {href: 'https://www.wavemakeronline.com/login/login', position: 'right', class:'navbar__item navbar__link wm-login'},
        // {to: 'salesvision', label: 'SalesVision', position: 'right'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
