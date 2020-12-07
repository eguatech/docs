# Guia de contribuição da Documentação

Olá! Estamos muito felizes que você quer contribuir com nosso projeto. Antes de contribuir, por favor tenha certeza de seguir todas as recomendações.

## Introdução

O desenvolvimento da documentação, assim como a sua utilização, possui uma estrutura que facilita a contribuição, visto que usamos o VuePress para gerar site estatico usando arquivos .md, por tanto essa facilidade só é garantida a partir de algumas práticas e regras que devem ser seguidas. Para facilitar a análise de pull requests e garantir a integridade da documentação e funcionalidade da mesma em cada commit, prezamos pela entrega continua, onde garantimos que o usuário possa entender o funcionamento e estrturua de nossa documentação e módulos.

## Montando ambiente

### Requisitos de sistema

- Windows 10 com WSL ou Linux Ubuntu ou Linux mint >= 18.04
    - [Guia de instalação do WSL no Windows 10](https://docs.microsoft.com/pt-br/windows/wsl/install-win10)

- Node.js versão LTS >= 10+ [link instalação]
    - [Guia de instalação do Node.js no WSL ou Linux](https://github.com/nodesource/distributions/blob/master/README.md#deb)

- NPM >= 6
    > Vale lembrar que ainda não efetuamos testes para garantir o funcionamento no NPM 7.

- VuePress
```
npm install -g vuepress
```
   
## Como contribuir

### Contribuindo com a documentação
Basta você fazer um Push do nosso [repositorio da documentação](https://github.com/eguatech/docs) e fazer as mudanças necessárias seguindo o vídeo tutorial abaixo:

[![](https://img.youtube.com/vi/ZewlvNv6tAk/0.jpg)](https://youtu.be/ZewlvNv6tAk "")

Vídeo tutorial em inglês para aprender o básico de VuePress:

[![](https://img.youtube.com/vi/5Kqyhu_eIcw/hqdefault.jpg)](https://youtu.be/5Kqyhu_eIcw "")

Outras recomendações:

| Artigos | Vídeos |
|---|---|
| [Conheça o Vuepress](https://vuejs-brasil.com.br/conheca-o-vuepress/) | [Vuepress rápido e simples](https://youtu.be/Blwpr3nVQbk) |
| [Como fazer um README.md BONITÃO](https://medium.com/@raullesteves/github-como-fazer-um-readme-md-bonit%C3%A3o-c85c8f154f8) | [Personalizando o README.md com markdown](https://www.youtube.com/watch?v=T70t3mDiwvg&ab_channel=ProfessorJos%C3%A9deAssis) |
| [Mastering Markdown (Inglês)](https://guides.github.com/features/mastering-markdown/) | [Create An Amazing Profile ReadMe (Inglês)](https://www.youtube.com/watch?v=ECuqb5Tv9qI&ab_channel=codeSTACKr) |

### Rodar localmente e realizar teste
Durante e após o seu desenvolvimento, recomendamos sempre executar os testes necessários. 

Para rodar o VuePress localmente em sua maquína:
```sh
# NPM
vuepress dev docs
```

Após o desenvolvimento ser concluído, é necessário ter a build do projeto, que é feita com o comando: 
```sh
npm run docs:build
```

Por fim, seu PR deve ser efetuado na branch `desenvolvimento` e solicitamos que você descreva com detalhes as modificações feitas na documentação.

## Resumo

De maneira bem resumida eis o que precisa ser feito:

- [ ] Montar o ambiente.

- [ ] Efetuar as suas alterações.

- [ ] Executar os testes locais.

- [ ] Executar a build do projeto.

- [ ] Fazer o Pull Request para a branch `desenvolvimento`

## Agradecimentos

Desde já agradecemos de coração pela sua contribuição ao projeto. xD