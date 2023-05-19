module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/images/logo_egua.svg' }]
    ],
    title: "Documentação | Linguagem Égua",
    description: "Programação simples e moderna em português",
    themeConfig: {
        nav: [
            { text: "Home", link: '/' },
            { text: "Égua", link: '/egua/' },
            { text: "Lógica", link: '/logica/' },
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
                'funcoes_integradas',
                'bibliotecas',
                'classes'
            ],
            '/logica/': [
                ''
            ]
        },
        logo: "/images/logo.png"
    },
    base: "/docs/"
}
