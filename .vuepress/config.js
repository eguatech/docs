module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/images/logo.png' }]
      ],
    title: "Docs Egua",
    description: "Documentação da Linguagem Egua e suas ferramentas",
    themeConfig: {
        nav: [
            {text: "Home", link: '/'},
            {text: "egua", link: '/egua/'},
            {text: "eguap", link: '/eguap/'},
            {text: "eguac", link: '/eguac/'},
            {text: "eguamat", link: '/eguamat/'}
        ],
        sidebar: "auto",
        logo: "/images/logo.png"
    }
}