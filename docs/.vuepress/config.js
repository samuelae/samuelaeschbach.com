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
          text: 'Contact',
          link: '/contact.md',
        }
      ]
    },
  }