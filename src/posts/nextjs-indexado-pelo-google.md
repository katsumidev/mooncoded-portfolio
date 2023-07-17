---
tags: "development, frontend, next.js"
title: "Meu site em Next.js não está sendo indexado pelo Google!! Aqui está o que você pode fazer"
subtitle: "Você hospedou seu projeto em next.js mas ele não está aparecendo nos resultados de busca do Google? aqui está o motivo a e algumas possiveis soluções:"
image: "https://nextjs.org/static/blog/next-13-4/twitter-card.png"
description: "Se o seu projeto em next.js não está sendo indexado pelo buscador do Google, esse artigo é pra você!"
date: "November 1, 2022"
readTime: "5"
---


Nesta última semana, enquanto eu hospedava este site de portfólio em que você está lendo este artigo eu me deparei com um problema que me deu uma leve dor cabeça, pois sou completamente inexperiente na questão de marketing e tráfego de sites na web.

**O site não estava aparecendo nos resultados do buscador do Google**

Eu precisava resolver esse problema o mais rápido possível! Ainda bem que devido a conhecimentos prévios em redes de computadores eu já pude ter uma boa ideia do que se tratava o problema... um **sitemap**. Mas vamos começar do ínicio.

------------------------------------------

## Como o Google encontra meu site na rede?

Quando você faz uma pesquisa no Google, os responsaveis por encontrar e indexar cada página que você vê são bots/robôs chamados de *Web Crawlers*, eles buscam por links em toda a internet que levem a páginas válidas, dessa forma, lêem o conteúdo, categorizam e indexam cada uma das delas no buscador. E é assim que o Google normalmente encontra sua página! 

Muitas vezes quando você hospeda um site na internet o próprio serviço de hospedagem faz o trabalho de colocar sua página na indexação do google, tornando mais fácil que ela seja encontrada pelos Crawlers, entretanto, no meu caso quando hospedei meu site next.js na Vercel isso não aconteceu.

### O Google não sabe que eu existo

Devido a diversos problemas em todo o processo de funcionamento dos Crawlers, algumas vezes, eles podem simplesmente não encontrar meu site na internet, ou seja, o Google nunca vai indexar a minha página se ela nunca nem mesmo for encontrada pelos Crawlers.

Para esses casos em especifico, a própria equipe do Google desenvolveu uma ferramenta online chamada de [Google Search Console tool.](https://search.google.com/search-console) que nos ajuda a solucionar esse problema informando ao Google de forma manual a URL onde nosso projeto está hospedado e todos as suas rotas e subrotas. Para isso vamos precisar de um arquivo muito especial chamado de *sitemap.xml*.

------------------------------------------

## O que é um sitemap?

Como o próprio nome diz, um sitemap é uma espécie de mapa que irá ajudar os Crawlers a encontrar as rotas e páginas de um site. É uma lista com todas as URLs de um dominio.

Para criar um sitemap para o nosso proejeto em NextJS vamos utilizar uma biblioteca chamada [next-sitemap](https://github.com/iamvishnusankar/next-sitemap), portanto, basta adiciona-la no seu projeto utlizando seu gerenciador de pacotes javascript preferido, no meu caso, vou utilizar o yarn.

```
yarn add next-sitemap
```

Com a depedência instalada, para iniciar a construção do nosso sitemap, precisamos criar um arquivo de configuração no diretório raiz do nosso projeto, esse arquivo deve ser nomeado como: __next-sitemap.config.js__, dentro do arquivo escreva as seguintes linhas de código

``` js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://seusite.com',
  generateRobotsTxt: true, // (o arquivo robots.txt é opcional)
  // ...outras opções
}
```

Note que a biblioteca irá carregar as variaveis ambientes vindas do arquivo `.env` automaticamente!
Este é o arquivo de configuração básico da dependência, para outras opções e configurações mais avançadas, peço que veja o projeto deles no github 👉️ [next-sitemap](https://github.com/iamvishnusankar/next-sitemap)


Com o arquivo de configuração pronto, devemos agora informar ao nosso processador de build para que ele crie o nosso arquivo de sitemap durante a build do nosso projeto. Para isso adicione as seguintes linhas no seu `package.json`

``` json
{
  "build": "next build",
  "postbuild": "next-sitemap"
}
```

Após tudo feito, quando você executar a produção do projeto, seu sitemap será gerado na url `https://seusite.com/sitemap.xml` ou `sitemap-0.xml`, agora vamos para a próxima etapa.

------------------------------------------

## Informando o sitemap para o Google

Agora com o nosso sitemap gerado, vamos informar o Google sobre ele e assim ajudar os Crawlers a nos encontrar na imensidão da internet! Para isso, como dito anteriormente, vamos utilizar a ferramenta [Google Search Console tool.](https://search.google.com/search-console).

Abrindo o site pela primeira vez, registre seu dominio nos servidores do Google informando sua URL para a ferramenta.

![Informando URL][1]

Após obter acesso ao painel de configurações da aplicação, navegue até a funcionalidade de sitemaps utilizando o menu de navegação a esquerda. Agora nesta página, tudo que você precisa fazer é informar a URL do seu sitemap e o Google faz todo o resto!

![Adicionando Sitemap][2]

O seu sitemap pode demorar até alguns dias para ser analisado e reconhecido pelo Google, então seja paciente! Mas após sua confirmação, o seu projeto irá começar a ser indexado pelo buscador!!

[1]: https://i.imgur.com/UtC3aP6.png
[2]: https://i.imgur.com/HTO3mHl.png
