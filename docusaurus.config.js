module.exports = {
  title: 'WaveMaker Showcase',
  tagline: 'One stop showcase for all our apps',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/showcase/',
  favicon: 'img/WM-Fav-57x57.png',
  organizationName: 'WaveMaker',
  projectName: 'showcase-apps',
  themeConfig: {
    // sidebarCollapsible: false,
    disableDarkMode: true,
    navbar: {
      // hideOnScroll: false,
      title: '',
      logo: {
        alt: 'WaveMaker',
        srcDark: 'img/WM_blue.png',
        src: 'img/WM_white.png',
      },
      links: [],
    },
    footer: {
    logo: {
      alt: 'WaveMaker',
      src: 'img/WM_blue.png',
      href: 'https://www.wavemaker.com',
    },
      copyright: `Copyright © ${new Date().getFullYear()} WaveMaker, Inc. Built with Docusaurus.`,
      
    },
    
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
