# IPASG — Site Completo

## Estrutura de arquivos

```
ipasg/
├── index.html                  ← Página inicial
├── sobre.html                  ← História do instituto
├── membros.html                ← Grade de membros
├── team-elaine.html            ← Detalhe da Elaine (template para os demais)
├── projetos.html               ← Listagem com filtros
├── assessoria.html             ← Serviços e assessoria
├── eventos.html                ← Calendário de eventos
├── evento-detalhe.html         ← Detalhe do evento (lê ?evento=slug da URL)
├── noticias.html               ← Blog / notícias
├── materiais.html              ← Downloads e recursos
├── apoie.html                  ← Página de doação e apoio
├── termos.html                 ← Termos de uso
├── privacidade.html            ← Política de privacidade
├── cookies.html                ← Política de cookies
├── lgpd.html                   ← LGPD
├── sitemap.xml                 ← Mapa do site para SEO
├── robots.txt                  ← Instruções para robôs de busca
│
├── projetos/
│   ├── saneamento.html
│   ├── meliponicultura.html
│   ├── dancas-circulares.html
│   ├── bioconstrucao.html
│   ├── oficinas-culturais.html
│   └── hortas.html
│
├── assets/
│   ├── css/
│   │   ├── base.css            ← Variáveis, reset, botões, utilitários
│   │   ├── header.css          ← Topbar + navegação + mobile
│   │   ├── hero.css            ← Slider da home
│   │   ├── footer.css          ← Rodapé
│   │   ├── components.css      ← Cards, eventos, parceiros (reutilizáveis)
│   │   ├── sobre.css           ← Página história
│   │   ├── membros.css         ← Grid de membros
│   │   ├── membro-detalhe.css  ← Página individual de membro
│   │   ├── projetos.css        ← Grade de projetos + filtros
│   │   ├── projeto-detalhe.css ← Página individual de projeto
│   │   ├── assessoria.css      ← Serviços
│   │   ├── eventos.css         ← Lista e detalhe de eventos
│   │   ├── evento-detalhe.css  ← Página individual de evento
│   │   ├── noticias.css        ← Blog com sidebar
│   │   ├── materiais.css       ← Downloads
│   │   ├── apoie.css           ← Página de apoio/doação
│   │   ├── legal.css           ← Termos, privacidade, cookies, LGPD
│   │   └── projeto-detalhe.css ← Subpáginas de projeto
│   │
│   └── js/
│       ├── menu.js             ← Header inteligente + menu mobile
│       ├── slider.js           ← Slider do hero
│       ├── animations.js       ← Animações de entrada (IntersectionObserver)
│       ├── eventos-data.js     ← ⭐ FONTE DE DADOS DOS EVENTOS
│       ├── eventos.js          ← Renderiza lista de eventos
│       ├── evento-detalhe.js   ← Popula página de detalhe do evento
│       ├── home-events.js      ← Mostra 2 próximos eventos na home
│       ├── membros.js          ← ⭐ FONTE DE DADOS DOS MEMBROS
│       ├── projetos.js         ← ⭐ FONTE DE DADOS DOS PROJETOS
│       ├── noticias.js         ← ⭐ FONTE DE DADOS DAS NOTÍCIAS
│       └── materiais.js        ← ⭐ FONTE DE DADOS DOS MATERIAIS
```

---

## Como gerenciar o conteúdo (sem tocar no HTML)

### Adicionar um novo evento

Abra `assets/js/eventos-data.js` e adicione um objeto ao array `EVENTOS_DATA`:

```js
{
  slug: 'nome-do-evento',           // ← identificador único na URL
  img: 'assets/images/banner/m-one.png',
  dia: '15',
  mes: 'Mar',
  mesCompleto: 'março',
  ano: '2026',
  horario: '09h às 12h',
  titulo: 'Nome do Evento',
  categoria: 'Permacultura',
  local: 'Cidade/RS',
  endereco: 'Endereço completo',
  preco: 'R$ 50',
  vagas: '20 vagas',
  linkInscricao: 'https://wa.me/5551992429974',
  descricaoCurta: 'Uma frase resumo.',
  descricaoCompleta: `<p>Descrição longa em HTML...</p>`,
},
```

O evento aparecerá automaticamente na listagem e na página de detalhe.

---

### Criar página de membro novo

1. Duplique o arquivo `team-elaine.html`
2. Renomeie para `team-[nome].html` (ex: `team-leandro.html`)
3. Edite os textos, foto e links dentro do HTML
4. No arquivo `assets/js/membros.js`, altere o campo `url` do membro correspondente para apontar para o novo arquivo

---

### Adicionar um projeto novo

Abra `assets/js/projetos.js` e adicione ao array `PROJETOS_DATA`:

```js
{
  id: 7,
  category: 'permacultura',        // ou 'arte'
  tag: 'Permacultura',
  title: 'Nome do Projeto',
  desc: 'Descrição curta.',
  img: 'assets/images/banner/m-one.png',
  link: 'projetos/nome-do-projeto.html',
},
```

Depois crie o arquivo `projetos/nome-do-projeto.html` (copie um existente e edite).

---

### Adicionar uma notícia

Abra `assets/js/noticias.js` e adicione ao array `NOTICIAS_DATA`:

```js
{
  id: 5,
  title: 'Título da Notícia',
  date: '15 Janeiro, 2026',
  category: 'Permacultura',
  img: 'assets/images/banner/m-one.png',
  link: 'noticia-detalhe.html',
},
```

---

## Antes de publicar

1. **Substitua o domínio** em `sitemap.xml` (`https://ipasg.org.br`) pelo domínio real
2. **Preencha o CNPJ/dados bancários** em `apoie.html`
3. **Atualize os links do Instagram e Facebook** nos headers/footers (buscar `instagram.com/` e `facebook.com/`)
4. **Adicione as imagens reais** na pasta `assets/images/`
5. **Complete os textos** em `team-elaine.html` (bio, área de formação, ano de início)
6. **Crie as demais páginas** de membros duplicando `team-elaine.html`

---

## Dependências externas (CDN — sem instalação)

- **Google Fonts** — Outfit (tipografia)
- **Font Awesome 6.5** — Ícones
- **Vanilla Tilt 1.7** — Efeito 3D nos cards de membros

Nenhum framework, nenhum build, nenhuma dependência npm. Abra o `index.html` no navegador e funciona.
