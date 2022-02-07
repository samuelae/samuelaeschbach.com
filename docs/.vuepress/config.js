module.exports = {
    // site config
    lang: 'en-US',
    title: 'Samuel Aeschbach',
    description: 'personal website of Samuel Aeschbach',
  
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: '/images/samuel-icon.png',
      logoDark: '/images/samuel-icon-dark.png',
      navbar: [
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
