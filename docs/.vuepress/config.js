module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/images/icone.png' }]
    ],
    title: "Documentação | Linguagem Egua",
    description: "Programação simples e moderna em português",
    themeConfig: {
        nav: [
            { text: "Home", link: '/' },
            { text: "Egua", link: '/egua/' },
            { text: "EguaMAT", link: '/eguamat/' },
            { text: "Módulos", link: '/modulos/' },
            { text: "GitHub", link: 'https://github.com/eguatech' }
        ],

        sidebar: {
            '/egua/': [
                '',
                'uso',
                'tipos_dados',
                'variaveis',
                'operadores',
                'fluxo_controle',
                'funcao',
                'classes',
                'funcoes_internas',
                'importar'
            ],

            '/modulos/': [
                '',
                'eguap',
                'eguac'
            ],

            '/eguamat/': [
                '',
                'funcao1_2',
                'estatistica',
                'matrizes',
                'trigonometria',
                'cinematica',
                'controle'
            ],

            '/introducao/':[
                '',
                'IDEgua',
                'modulos',
                'contribuindo'
            ]

        },
        logo: "/images/logo.png"
    },
    base: "/docs/"
}
