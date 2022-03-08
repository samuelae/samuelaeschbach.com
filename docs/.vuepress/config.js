module.exports = {
    // site config
    lang: 'en-US',
    title: 'Samuel Aeschbach',
    description: 'personal website of Samuel Aeschbach',
    head: [['link', { rel: 'icon', href: '/images/samuel-icon.png' }]],
  
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: '/images/samuel-icon.png',
      logoDark: '/images/samuel-icon-dark.png',
      navbar: [
        {
          text: 'Projects',
          link: '/projects.md',
        },
        {
          text: 'Works',
          link: '/works.md',
        },
        {
          text: 'Contact',
          link: '/contact.md',
        }
      ]
    },
  }
