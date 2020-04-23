module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/images/logo.png' }]
      ],
    title: "Docs Egua Tech",
    description: "Documentação dos módulos, ferramentas e linguagem do Egua Tech",
    themeConfig: {
        nav: [
            {text: "Home", link: '/'},
            {text: "egua", link: '/egua/'},
            {text: "eguap", link: '/eguap/'},
            {text: "eguac", link: '/eguac/'},
            {text: "eguamat", link: '/eguamat/'},
            {text: "github", link: 'https://github.com/eguatech'}
        ],
        sidebar: "auto",
        logo: "/images/logo.png"
    },
    base: "/docs/"
}