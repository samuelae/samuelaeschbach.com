const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
    lang: 'en-US',
    title: 'Samuel Aeschbach',
    description: 'Personal website of Samuel Aeschbach.',
    theme: defaultTheme({
        // default theme config
        navbar: [
            {
                text: 'Home',
                link: '/',
            },
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
            },
        ],
        logo: '/images/samuel-icon.png',
        logoDark: '/images/samuel-icon-dark-4.png'
    }),
}