/* ==========================================
   eventos-data.js — IPASG
   Banco de Dados dos Eventos & Oficinas
   3 eventos realizados (histórico) + 1 próximo
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
    id: 1,
    img: 'assets/images/eventos/bioconstrucao-tijolos.png',
    galeria: ['assets/images/eventos/bioconstrucao-tijolos.png'],
    dia: 14,
    mes: 5,
    mesAbrev: 'JUN',
    ano: 2026,
    horarioInicio: '09:00',
    horarioFim: '17:00',
    titulo: 'Mutirão de Bioconstrução',
    categoria: 'Permacultura',
    local: 'Sede IPASG — Mampituba/RS',
    endereco: 'Estrada Municipal, 885 — Mampituba/RS',
    resumo: 'Prática de edificação com terra crua, cob e bambu para a comunidade.',
    descricao: 'Venha aprender na prática a construir com técnicas sustentáveis de terra crua e bambu. O mutirão incluiu oficina sobre massa de cob, taipa de mão e rebocos naturais.',
    vagas: 30,
    valor: 'Gratuito',
    link: 'evento-detalhe.html?id=1',
  },
  {
    id: 2,
    img: 'assets/images/eventos/meliponicultura-oficina.png',
    galeria: ['assets/images/eventos/meliponicultura-oficina.png'],
    dia: 9,
    mes: 7,
    mesAbrev: 'AGO',
    ano: 2026,
    horarioInicio: '14:00',
    horarioFim: '18:00',
    titulo: 'Oficina de Meliponicultura Básica',
    categoria: 'Agroecologia',
    local: 'Escola Municipal — Torres/RS',
    endereco: 'Rua Principal, 120 — Torres/RS',
    resumo: 'Manejo racional e multiplicação de abelhas nativas sem ferrão.',
    descricao: 'Curso prático para iniciantes no manejo de abelhas nativas brasileiras (Jataí, Mandaçaia e Bugia). Os participantes confeccionaram caixas racionais e instalaram ninhos-isca.',
    vagas: 25,
    valor: 'Gratuito',
    link: 'evento-detalhe.html?id=2',
  },
  {
    id: 3,
    img: 'assets/images/eventos/rodadas-dancas-circulares.jpg',
    galeria: ['assets/images/eventos/rodadas-dancas-circulares.jpg'],
    dia: 26,
    mes: 8,
    mesAbrev: 'SET',
    ano: 2026,
    horarioInicio: '18:30',
    horarioFim: '21:00',
    titulo: 'Roda de Danças Circulares',
    categoria: 'Artes Integradas',
    local: 'Espaço Cultural — Torres/RS',
    endereco: 'Centro Cultural — Torres/RS',
    resumo: 'Dança comunitária tradicional para celebração da saúde e integração.',
    descricao: 'Prática aberta a todas as idades de danças folclóricas de diversos povos, promovendo harmonia, presença e fortalecimento comunitário.',
    vagas: 50,
    valor: 'Contribuição Consciente',
    link: 'evento-detalhe.html?id=3',
  },
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
  }
];
