module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/images/icone.png' }]
    ],
    title: "Documentação | Linguagem Égua",
    description: "Programação simples e moderna em português",
    themeConfig: {
        nav: [
            { text: "Home", link: '/' },
            { text: "Egua", link: '/egua/' },
            { text: "GitHub", link: 'https://github.com/eguatech' }
        ],

        sidebar: {
            '/egua/': [
                '',
                'variaveis',
                'tipos_dados',
                'operadores',
                'fluxo_controle',
                'funcao',
                'classes',
                'funcoes_internas',
                'importar'
            ]
        },
        logo: "/images/logo.png"
    },
    base: "/docs/"
}
