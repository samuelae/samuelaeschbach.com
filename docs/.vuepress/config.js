const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
    lang: 'en-US',
    title: 'Samuel Aeschbach',
    description: 'Personal website of Samuel Aeschbach.',
    head: [
        ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-9QJ89T4GYS'}],
        ['script', {}, "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}; gtag('js', new Date()); gtag('config', 'G-9QJ89T4GYS');"],
        [['link', { rel: 'icon', href: '/images/samuel-icon.png' }]]
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