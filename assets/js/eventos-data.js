/* ==========================================
   eventos-data.js
   Fonte única de dados dos eventos.
   Usada por eventos.js (listagem/calendário) e
   evento-detalhe.js (página de detalhe).

   mes: índice 0-11 (0 = Janeiro), igual ao JS Date,
   pra facilitar montar o calendário.
========================================== */

const MES_NOME = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const MES_ABREV = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];

const EVENTOS_DATA = [
  {
    id: 1,
    img: 'assets/images/banner/m-one.png',
    galeria: [
      'assets/images/banner/m-one.png',
      'assets/images/banner/m-two.png',
      'assets/images/banner/m-three.png',
    ],
    dia: 3,
    mes: 1, // Fevereiro
    ano: 2027,
    horarioInicio: '08:00',
    horarioFim: '17:00',
    titulo: '4ª Vivência Permacultural',
    categoria: 'Permacultura',
    local: 'Mampituba / Rio da Invernada',
    endereco: 'Estrada Rio da Invernada, s/n – Mampituba/RS',
    resumo:
      'Um dia inteiro de práticas de permacultura, com mutirão de plantio e rodas de conversa sobre agrofloresta.',
    descricao: `A 4ª Vivência Permacultural reúne a comunidade para um dia de troca de saberes e mão na massa. Vamos percorrer o sistema agroflorestal implantado pelo IPASG, participar de um mutirão de plantio de mudas nativas e encerrar com uma roda de conversa sobre manejo do solo.

A atividade é aberta para todas as idades e não é necessário ter experiência prévia. Recomendamos roupas confortáveis, protetor solar, água e disposição para colocar a mão na terra.

O almoço será compartilhado (traga um prato para dividir) e as vagas são limitadas para garantir uma vivência de qualidade para todos os participantes.`,
    vagas: 40,
    valor: 'Gratuito',
    link: 'evento-detalhe.html?id=1',
  },
  {
    id: 2,
    img: 'assets/images/banner/m-two.png',
    galeria: ['assets/images/banner/m-two.png', 'assets/images/banner/m-four.png'],
    dia: 2,
    mes: 11, // Dezembro
    ano: 2026,
    horarioInicio: '14:00',
    horarioFim: '18:00',
    titulo: 'Oficina de Abelhas Indígenas',
    categoria: 'Meliponicultura',
    local: 'Porto Alegre',
    endereco: 'Espaço Cultural Ilha, Porto Alegre/RS',
    resumo:
      'Introdução à criação de abelhas nativas sem ferrão, com manejo prático de caixas racionais.',
    descricao: `Esta oficina apresenta os fundamentos da meliponicultura: espécies nativas mais comuns na região, importância ecológica das abelhas sem ferrão e como montar seu próprio meliponário em casa ou na escola.

Contaremos com um meliponário demonstrativo montado no local, onde os participantes poderão observar de perto a estrutura de uma colônia e participar de uma transferência de caixa guiada por um de nossos educadores.

Materiais e equipamentos de proteção serão fornecidos pelo IPASG.`,
    vagas: 25,
    valor: 'R$ 40,00',
    link: 'evento-detalhe.html?id=2',
  },
  {
    id: 3,
    img: 'assets/images/banner/m-three.png',
    galeria: ['assets/images/banner/m-three.png'],
    dia: 11,
    mes: 10, // Novembro
    ano: 2026,
    horarioInicio: '09:00',
    horarioFim: '16:00',
    titulo: '3ª Vivência Permacultural',
    categoria: 'Permacultura',
    local: 'Guaíba',
    endereco: 'Sítio Recanto Verde, Guaíba/RS',
    resumo: 'Edição da vivência permacultural realizada em parceria com produtores locais.',
    descricao: `Nesta edição, a Vivência Permacultural acontece em parceria com uma propriedade familiar em Guaíba, que já aplica técnicas de manejo regenerativo há mais de 5 anos.

Além das atividades práticas de campo, teremos uma apresentação sobre certificação participativa e comercialização direta de produtos agroecológicos.`,
    vagas: 35,
    valor: 'Gratuito',
    link: 'evento-detalhe.html?id=3',
  },
  {
    id: 4,
    img: 'assets/images/banner/m-four.png',
    galeria: ['assets/images/banner/m-four.png', 'assets/images/banner/m-one.png'],
    dia: 29,
    mes: 4, // Maio
    ano: 2027,
    horarioInicio: '19:00',
    horarioFim: '22:00',
    titulo: 'Dança Circular',
    categoria: 'Artes Integradas',
    local: 'Paraíso',
    endereco: 'Salão Comunitário de Paraíso, Torres/RS',
    resumo: 'Noite de danças circulares sagradas, celebrando a conexão comunitária.',
    descricao: `As Danças Circulares são uma prática de origem ancestral que reúne pessoas em roda, ao som de músicas de diferentes tradições do mundo, promovendo acolhimento, presença e conexão com o grupo.

Não é necessário ter experiência com dança — a facilitação guia todos os passos. É uma atividade contemplativa, indicada para todas as idades.`,
    vagas: 60,
    valor: 'Contribuição consciente',
    link: 'evento-detalhe.html?id=4',
  },
  {
    id: 5,
    img: 'assets/images/banner/m-five.png',
    galeria: ['assets/images/banner/m-five.png'],
    dia: 7,
    mes: 4, // Maio
    ano: 2027,
    horarioInicio: '13:30',
    horarioFim: '17:00',
    titulo: 'Autocuidado e Florais',
    categoria: 'Educação',
    local: 'Torres',
    endereco: 'Casa de Cultura de Torres/RS',
    resumo: 'Encontro sobre autocuidado, terapias integrativas e florais de Bach.',
    descricao: `Um espaço para desacelerar e cuidar de si. O encontro combina uma introdução teórica sobre florais de Bach com uma vivência prática guiada de respiração e autocuidado.

Ideal para quem está começando a explorar terapias integrativas ou busca ferramentas simples para o dia a dia.`,
    vagas: 30,
    valor: 'R$ 30,00',
    link: 'evento-detalhe.html?id=5',
  },
  {
    id: 6,
    img: 'assets/images/banner/m-one.png',
    galeria: ['assets/images/banner/m-one.png', 'assets/images/banner/m-three.png'],
    dia: 18,
    mes: 3, // Abril
    ano: 2027,
    horarioInicio: '10:00',
    horarioFim: '15:00',
    titulo: 'Dançando os Florais',
    categoria: 'Artes Integradas',
    local: 'Sans Souci',
    endereco: 'Espaço Sans Souci, Torres/RS',
    resumo: 'Fusão entre dança expressiva e terapia floral, em uma vivência sensorial.',
    descricao: `Um encontro experimental que une movimento corporal e florais para explorar emoções e memórias através do corpo. Facilitado por educadoras parceiras do IPASG com formação em dança-terapia.

Recomendamos roupas confortáveis para os momentos de movimento livre.`,
    vagas: 20,
    valor: 'R$ 50,00',
    link: 'evento-detalhe.html?id=6',
  },
  {
    id: 7,
    img: 'assets/images/banner/m-two.png',
    galeria: ['assets/images/banner/m-two.png'],
    dia: 19,
    mes: 1, // Fevereiro
    ano: 2027,
    horarioInicio: '08:30',
    horarioFim: '17:30',
    titulo: '2ª Vivência em Permacultura',
    categoria: 'Permacultura',
    local: 'Mampituba',
    endereco: 'Sede do IPASG, Estrada Municipal, 885 – Mampituba/RS',
    resumo: 'Segunda edição da vivência, com foco em captação e manejo de água.',
    descricao: `Nesta edição da Vivência em Permacultura, o foco principal será o manejo de água: swales, bacias de infiltração e sistemas de captação de água de chuva.

A atividade acontece na própria sede do IPASG, onde os participantes poderão ver os sistemas já implantados funcionando na prática.`,
    vagas: 40,
    valor: 'Gratuito',
    link: 'evento-detalhe.html?id=7',
  },
  {
    id: 8,
    img: 'assets/images/banner/m-three.png',
    galeria: ['assets/images/banner/m-three.png'],
    dia: 26,
    mes: 10, // Novembro
    ano: 2026,
    horarioInicio: '09:00',
    horarioFim: '16:00',
    titulo: 'Vivências em Permacultura',
    categoria: 'Permacultura',
    local: 'Local a definir',
    endereco: 'A confirmar',
    resumo: 'Nova edição do programa de vivências itinerantes do IPASG.',
    descricao: `O local exato desta edição ainda está sendo definido em parceria com comunidades da região. Fique de olho nas nossas redes sociais para a confirmação.

O programa segue a mesma estrutura das edições anteriores: manhã de práticas de campo e tarde de rodas de conversa.`,
    vagas: 40,
    valor: 'Gratuito',
    link: 'evento-detalhe.html?id=8',
  },
  {
    id: 9,
    img: 'assets/images/banner/m-four.png',
    galeria: ['assets/images/banner/m-four.png'],
    dia: 24,
    mes: 8, // Setembro
    ano: 2026,
    horarioInicio: '14:00',
    horarioFim: '18:00',
    titulo: 'Oficina "Fermentando"',
    categoria: 'Educação',
    local: 'Parque 35',
    endereco: 'Parque 35, Torres/RS',
    resumo: 'Oficina prática de fermentados: kombucha, kefir e vegetais lactofermentados.',
    descricao: `Aprenda na prática a preparar seus próprios fermentados em casa, com foco em segurança alimentar, benefícios para a saúde intestinal e baixo custo.

Cada participante leva para casa uma cultura viva (SCOBY ou grãos de kefir) para começar sua produção.`,
    vagas: 25,
    valor: 'R$ 45,00',
    link: 'evento-detalhe.html?id=9',
  },
  {
    id: 10,
    img: 'assets/images/banner/m-five.png',
    galeria: ['assets/images/banner/m-five.png'],
    dia: 2,
    mes: 6, // Julho
    ano: 2026,
    horarioInicio: '15:00',
    horarioFim: '19:00',
    titulo: 'Oficina Cervejeiro Caseiro',
    categoria: 'Educação',
    local: 'Azenha',
    endereco: 'Espaço Azenha, Porto Alegre/RS',
    resumo: 'Introdução à produção artesanal de cerveja com ingredientes agroecológicos.',
    descricao: `Uma oficina descontraída sobre os fundamentos da fabricação caseira de cerveja, com um olhar para o uso de ingredientes locais e de produção agroecológica.

Ao final, todos participam da degustação de lotes produzidos em oficinas anteriores.`,
    vagas: 20,
    valor: 'R$ 60,00',
    link: 'evento-detalhe.html?id=10',
  },
  {
    id: 11,
    img: 'assets/images/banner/m-one.png',
    galeria: ['assets/images/banner/m-one.png'],
    dia: 15,
    mes: 1, // Fevereiro
    ano: 2027,
    horarioInicio: '19:00',
    horarioFim: '21:30',
    titulo: 'Danças Circulares',
    categoria: 'Artes Integradas',
    local: 'Espaço Cultural TEN CATEN',
    endereco: 'Espaço Cultural TEN CATEN, Torres/RS',
    resumo: 'Encontro mensal de danças circulares sagradas, aberto à comunidade.',
    descricao: `Edição mensal do encontro de Danças Circulares do IPASG, aberto a toda a comunidade. Traga uma saia ou roupa confortável para dançar, se preferir.

Não é necessário inscrição prévia — basta chegar com 15 minutos de antecedência.`,
    vagas: 60,
    valor: 'Contribuição consciente',
    link: 'evento-detalhe.html?id=11',
  },
  {
    id: 12,
    img: 'assets/images/banner/m-two.png',
    galeria: ['assets/images/banner/m-two.png'],
    dia: 14,
    mes: 11, // Dezembro
    ano: 2026,
    horarioInicio: '13:00',
    horarioFim: '17:00',
    titulo: 'Oficina Abelhas Nativas',
    categoria: 'Meliponicultura',
    local: 'Galpão Crioulo',
    endereco: 'Galpão Crioulo, Mampituba/RS',
    resumo: 'Segunda turma da oficina de meliponicultura, com foco em iscas-isca e divisão de colônias.',
    descricao: `Turma voltada para quem já tem noções básicas de meliponicultura e quer aprender técnicas de divisão de colônias e instalação de caixas-isca para captura de enxames.

Vagas limitadas por conta do formato prático em pequenos grupos.`,
    vagas: 18,
    valor: 'R$ 40,00',
    link: 'evento-detalhe.html?id=12',
  },
];
