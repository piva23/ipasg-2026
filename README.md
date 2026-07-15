# IPASG — site institucional

Este repositório contém o site institucional do IPASG, construído como um conjunto de páginas estáticas em HTML, CSS e JavaScript.

## Estado atual do app

- Site publicado em estrutura estática, sem backend e sem build.
- Navegação principal, rodapé, loader e botão de voltar ao topo já estão integrados nas páginas.
- O tema está fixado em `light`; o botão de troca foi ocultado para evitar ativação automática do dark theme.
- Há páginas principais de conteúdo, páginas legais e páginas individuais de membros da equipe.
- Os dados dinâmicos do site ficam centralizados em `assets/js/`, principalmente em:
  - `assets/js/membros.js`
  - `assets/js/projetos.js`
  - `assets/js/eventos-data.js`
  - `assets/js/noticias.js`
  - `assets/js/materiais.js`
- O conteúdo dos membros também está organizado em `assets/members/nome-do-membro/`.
- O site já usa fontes, ícones e estilos compartilhados para manter padrão visual entre as páginas.
- Parte do conteúdo ainda pode conter ajustes de texto, contraste e dados reais antes da publicação final.

## Estrutura principal

```
ipasg/
├── index.html
├── sobre.html
├── membros.html
├── assessoria.html
├── projetos.html
├── eventos.html
├── noticias.html
├── materiais.html
├── apoie.html
├── termos.html
├── privacidade.html
├── cookies.html
├── lgpd.html
├── sitemap.xml
├── robots.txt
├── team-*.html
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── members/
└── projetos/
```

## Como o conteúdo é organizado

### Membros

As páginas de membro seguem uma estrutura padrão, com:

- banner com nome e função
- tags de atuação
- biografia
- atuação no instituto
- áreas de contribuição
- CTA para conhecer a equipe

Os dados base de cada membro ficam em `assets/js/membros.js`, e os arquivos completos estão em `assets/members/nome-do-membro/`.

### Projetos

Os projetos são listados a partir de `assets/js/projetos.js` e podem abrir páginas individuais em `projetos/`.

### Eventos

Os eventos usam `assets/js/eventos-data.js` como fonte principal e alimentam a listagem e a página de detalhe.

### Notícias e materiais

As seções de notícias e materiais também seguem abordagem centralizada em JavaScript, o que facilita atualização de conteúdo sem mexer em toda a estrutura HTML.

## O que já foi padronizado

- `colors.css` e `theme.css` foram adicionados ao fluxo visual.
- Loader de página está presente.
- Botão de voltar ao topo está presente.
- Cabeçalho e rodapé estão replicados nas páginas principais.
- As páginas de membros já seguem um modelo consistente.

## Próximos ajustes confirmados

- Melhorar o contraste entre os blocos das páginas.
- Revisar o fundo branco muito claro em partes do layout.
- Melhorar a navegação mobile. Incluir o voltar para cima na versão mobile.
- Atualizar o site com dados completamente reais.
- Confirmar cor do Footer #146b54 ou #0f1724 (Atual)

## Antes de publicar

- Revisar todos os textos finais.
- Trocar quaisquer dados de exemplo por informações reais.
- Conferir imagens e links externos.
- Validar a experiência mobile em todas as páginas.

## Dependências externas

- Google Fonts — tipografia
- Font Awesome — ícones

O projeto segue sem framework e sem pipeline de build. Basta abrir as páginas HTML no navegador.
