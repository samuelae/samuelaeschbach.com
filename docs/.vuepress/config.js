const { defaultTheme } = require('@vuepress/theme-default');
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics');

module.exports = {
    lang: 'en-US',
    title: 'Samuel Aeschbach',
    description: 'Personal website of Samuel Aeschbach.',
    plugins: [
        googleAnalyticsPlugin({
          id: 'G-9QJ89T4GYS',
        }),
      ],
    theme: defaultTheme({
        // default theme config
        navbar: [
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'Projects',
                link: '/projects.html',
            },            
            {
                text: 'Works',
                link: '/works.html',
            },
            {
                text: 'Contact',
                link: '/contact.html',
            },
        ],
        logo: '/images/samuel-icon.png',
        logoDark: '/images/samuel-icon-dark-4.png'
    }),
}