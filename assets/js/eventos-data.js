/* ==========================================
   eventos-data.js — IPASG
   Banco de Dados dos Eventos & Oficinas
   1 evento do IPASG (futuro — seção oculta)
   + 12 eventos anteriores importados do site antigo
     (cabanadmorro.wixsite.com/website2), sem página de detalhe
     (campo `link` ausente = listagem sem clique)
========================================== */

const MES_NOME = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const MES_ABREV = [
  'JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'
];

const EVENTOS_DATA = [
  {
    id: 4,
    img: 'assets/images/projetos/semear-01.jpg',
    galeria: ['assets/images/projetos/semear-01.jpg'],
    dia: 21,
    mes: 10,
    mesAbrev: 'NOV',
    ano: 2026,
    horarioInicio: '09:00',
    horarioFim: '17:00',
    titulo: 'Lançamento Semear',
    categoria: 'Permacultura',
    local: 'Farmacinha Violeta — Mampituba/RS',
    endereco: 'Estrada Municipal, 885 — Mampituba/RS',
    resumo: 'Lançamento oficial do projeto Semear — Tecendo Saberes Populares, com as guardiãs da Farmacinha Violeta.',
    descricao: 'Venha conhecer o projeto Semear — Tecendo Saberes Populares em sua primeira vivência aberta. O encontro celebra os 30 anos da Farmacinha Violeta com oficinas de sementes crioulas e plantas medicinais da Mata Atlântica, troca de saberes entre gerações e a construção coletiva das frentes do projeto com a comunidade de Mampituba.',
    vagas: 40,
    valor: 'Gratuito',
    link: 'evento-detalhe.html?id=4',
  },

  /* ----------------------------------------------------------
     EVENTOS ANTERIORES — importados do site antigo
     (sem `link` → renderiza sem âncora e sem botão Detalhes)
  ---------------------------------------------------------- */
  {
    id: 5,
    img: 'assets/images/eventos/vivencia-04.jpg',
    dia: 3,
    mes: 1,
    ano: 2024,
    horarioInicio: '09:00',
    horarioFim: '17:00',
    titulo: '4ª Vivência Permacultural',
    categoria: 'Permacultura',
    local: 'Mampituba / Rio da Invernada',
    resumo:
      'Dança Circular com Elaine Regina, introdução à Permacultura com Leandro Nunes, bioconstrução (manutenção e reboco de parede de adobe) e roda de conversa.',
  },
  {
    id: 6,
    img: 'assets/images/eventos/abelhas-indigenas.jpg',
    dia: 2,
    mes: 11,
    ano: 2023,
    horarioInicio: '14:00',
    horarioFim: '18:00',
    titulo: 'Oficina de Abelhas indígenas (sem ferrão)',
    categoria: 'Agroecologia',
    local: 'Azenha — Porto Alegre/RS',
    resumo: 'Introdução à criação de abelhas indígenas sem ferrão.',
  },
  {
    id: 7,
    img: 'assets/images/eventos/vivencia-03.jpg',
    dia: 11,
    mes: 10,
    ano: 2023,
    horarioInicio: '14:00',
    horarioFim: '18:00',
    titulo: '3ª Vivência Permacultural',
    categoria: 'Permacultura',
    local: 'Parque 35 — Guaíba/RS',
    resumo:
      'Dança Circular com Elaine Regina, introdução à Permacultura com Leandro Nunes e bioconstrução (manutenção/reboco de parede de adobe).',
  },
  {
    id: 8,
    img: 'assets/images/eventos/danca-circular.jpg',
    dia: 29,
    mes: 4,
    ano: 2023,
    horarioInicio: '15:00',
    horarioFim: '16:30',
    titulo: 'Dança Circular',
    categoria: 'Artes Integradas',
    local: 'Paraíso — Sapucaia do Sul/RS',
    resumo:
      'Roda de dança realizada na AOCART (Sapucaia do Sul) pela focalizadora Elaine Regina.',
  },
  {
    id: 9,
    img: 'assets/images/eventos/autocuidado.jpg',
    dia: 7,
    mes: 4,
    ano: 2023,
    horarioInicio: '15:00',
    horarioFim: '18:00',
    titulo: 'Autocuidado',
    categoria: 'Artes Integradas',
    local: 'Stan — Torres/RS',
    resumo:
      'Encontro com dança circular, dança dos florais, fitoenergética e vivências terapêuticas.',
  },
  {
    id: 10,
    img: 'assets/images/eventos/dancando-os-florais.jpg',
    dia: 18,
    mes: 3,
    ano: 2023,
    horarioInicio: '09:30',
    horarioFim: '10:30',
    titulo: 'Dançando os Florais',
    categoria: 'Artes Integradas',
    local: 'Sans Souci',
    resumo: 'Dança Circular com a focalizadora Elaine Regina.',
  },
  {
    id: 11,
    img: 'assets/images/eventos/vivencia-02.jpg',
    dia: 19,
    mes: 1,
    ano: 2023,
    horarioInicio: '09:00',
    horarioFim: '18:00',
    titulo: '2ª Vivência em Permacultura',
    categoria: 'Permacultura',
    local: 'Mampituba/RS',
    resumo:
      'Dança Circular, manejo de bananal orgânico com o produtor Edivaldo Ramos, meliponicultura e bioconstrução.',
  },
  {
    id: 12,
    img: 'assets/images/eventos/vivencias-permacultura.png',
    dia: 26,
    mes: 10,
    ano: 2022,
    horarioInicio: '13:00',
    horarioFim: '19:00',
    titulo: 'Vivências em Permacultura',
    categoria: 'Permacultura',
    local: 'Local a ser definido',
    resumo:
      'Dança Circular, bioconstrução e roda de conversa sobre as pétalas da Permacultura.',
  },
  {
    id: 13,
    img: 'assets/images/eventos/oficina-fermentando.png',
    dia: 24,
    mes: 8,
    ano: 2022,
    horarioInicio: '14:00',
    horarioFim: '18:00',
    titulo: 'Oficina "Fermentando"',
    categoria: 'Agroecologia',
    local: 'Parque 35 — Guaíba/RS',
    resumo:
      'Primeiro módulo sobre Kombucha: produção, saborização, manutenção, adaptação da cultura (scoby) e vinagre. Em parceria com o Dharma Coletivo (Guaíba/RS).',
  },
  {
    id: 14,
    img: 'assets/images/eventos/cervejeiro-caseiro.jpg',
    dia: 2,
    mes: 6,
    ano: 2022,
    horarioInicio: '13:00',
    horarioFim: '21:00',
    titulo: 'Oficina Cervejeiro Caseiro',
    categoria: 'Agroecologia',
    local: 'Azenha — Porto Alegre/RS',
    valor: 'R$ 100,00 – R$ 130,00',
    resumo:
      'Treinamento 100% prático: brassagem, resfriamento, fermentação, maturação, priming e envase. 08 vagas.',
  },
  {
    id: 15,
    img: 'assets/images/eventos/dancas-circulares-2020.jpg',
    dia: 15,
    mes: 1,
    ano: 2020,
    horarioInicio: '17:00',
    horarioFim: '18:30',
    titulo: 'Danças Circulares',
    categoria: 'Artes Integradas',
    local: 'Espaço Cultural TEN CATEN — Torres/RS',
    valor: 'R$ 20,00 – R$ 30,00',
    resumo:
      'Coreografias em roda para ampliar a capacidade de expressão e harmonia e trabalhar a tolerância.',
  },
  {
    id: 16,
    img: 'assets/images/eventos/abelhas-nativas-2019.jpg',
    dia: 14,
    mes: 11,
    ano: 2019,
    horarioInicio: '13:00',
    horarioFim: '14:00',
    titulo: 'Oficina de Abelhas Nativas',
    categoria: 'Agroecologia',
    local: 'Galpão Crioulo do Gaúcho Amigo — Porto Alegre/RS',
    resumo:
      'Criação de abelhas sem ferrão (meliponicultura): espécies nativas do RS, enxameagem, divisão, inspeção e alimentação.',
  }
];
