/* ==========================================
   eventos-data.js
   Fonte única de dados de eventos.
   Usado por eventos.js (listagem) e evento-detalhe.js (página interna).
   Para adicionar um evento novo, basta copiar um objeto e editar os campos.
========================================== */

const EVENTOS_DATA = [
  {
    slug: 'vivencia-permacultural-4',
    img: 'assets/images/banner/m-one.png',
    dia: '03',
    mes: 'Fev',
    mesCompleto: 'fevereiro',
    ano: '2026',
    horario: '08h às 17h',
    titulo: '4ª Vivência Permacultural',
    categoria: 'Permacultura',
    local: 'Mampituba / Rio da Invernada',
    endereco: 'Rio da Invernada, Mampituba/RS',
    preco: 'A partir de R$ 80',
    vagas: '25 vagas',
    linkInscricao: 'https://wa.me/5551992429974',
    descricaoCurta: 'Uma jornada imersiva de um dia inteiro pelas práticas da permacultura, com atividades de campo, plantio e troca de saberes.',
    descricaoCompleta: `
      <p>A 4ª Vivência Permacultural do IPASG é uma jornada imersiva de um dia inteiro dedicada à prática e ao aprendizado coletivo dos princípios da permacultura. O evento acontece na bela região do Rio da Invernada, em Mampituba/RS, em um espaço cercado por natureza preservada.</p>
      <p>Durante a vivência, os participantes terão contato direto com técnicas de design regenerativo, manejo do solo, sistemas agroflorestais e captação de água — tudo isso através de atividades práticas guiadas pela equipe do IPASG.</p>
      <h3>O que está incluído</h3>
      <ul>
        <li><i class="fa-solid fa-check"></i> Atividades práticas de campo</li>
        <li><i class="fa-solid fa-check"></i> Almoço comunitário (alimentação vegetariana)</li>
        <li><i class="fa-solid fa-check"></i> Material de apoio</li>
        <li><i class="fa-solid fa-check"></i> Certificado de participação</li>
      </ul>
      <h3>Para quem é</h3>
      <p>Aberto a qualquer pessoa interessada em permacultura, sem necessidade de experiência prévia. Recomendado trazer roupas confortáveis, protetor solar e disposição para colocar a mão na terra.</p>
    `,
  },
  {
    slug: 'oficina-abelhas-indigenas',
    img: 'assets/images/banner/m-two.png',
    dia: '02',
    mes: 'Dez',
    mesCompleto: 'dezembro',
    ano: '2025',
    horario: '09h às 12h',
    titulo: 'Oficina de Abelhas Indígenas',
    categoria: 'Meliponicultura',
    local: 'Porto Alegre',
    endereco: 'Porto Alegre/RS',
    preco: 'R$ 50',
    vagas: '15 vagas',
    linkInscricao: 'https://wa.me/5551992429974',
    descricaoCurta: 'Aprenda sobre o manejo de abelhas nativas sem ferrão e a importância da meliponicultura para a polinização.',
    descricaoCompleta: `
      <p>Esta oficina prática apresenta os fundamentos da meliponicultura — a criação de abelhas nativas sem ferrão — e sua importância vital para a polinização de cultivos e a conservação da biodiversidade.</p>
      <p>Os participantes aprenderão sobre as espécies de abelhas nativas do Rio Grande do Sul, técnicas básicas de manejo de caixas racionais e como iniciar um meliponário em casa ou em propriedades rurais.</p>
      <h3>O que você vai aprender</h3>
      <ul>
        <li><i class="fa-solid fa-check"></i> Identificação de espécies nativas</li>
        <li><i class="fa-solid fa-check"></i> Manejo de caixas racionais</li>
        <li><i class="fa-solid fa-check"></i> Multiplicação de colônias</li>
        <li><i class="fa-solid fa-check"></i> Colheita responsável de mel</li>
      </ul>
    `,
  },
  {
    slug: 'vivencia-permacultural-3',
    img: 'assets/images/banner/m-three.png',
    dia: '11',
    mes: 'Nov',
    mesCompleto: 'novembro',
    ano: '2025',
    horario: '08h às 17h',
    titulo: '3ª Vivência Permacultural',
    categoria: 'Permacultura',
    local: 'Guaíba',
    endereco: 'Guaíba/RS',
    preco: 'A partir de R$ 80',
    vagas: 'Esgotado',
    linkInscricao: 'https://wa.me/5551992429974',
    descricaoCurta: 'Vivência prática de permacultura realizada em Guaíba, com foco em design regenerativo de espaços urbanos e periurbanos.',
    descricaoCompleta: `
      <p>A 3ª Vivência Permacultural levou os princípios da permacultura para o contexto urbano e periurbano de Guaíba, demonstrando como aplicar técnicas regenerativas mesmo em espaços menores.</p>
      <p>Participantes exploraram hortas em camalhões, compostagem doméstica e captação de água da chuva — soluções acessíveis para qualquer quintal.</p>
    `,
  },
  {
    slug: 'danca-circular-maio',
    img: 'assets/images/banner/m-four.png',
    dia: '29',
    mes: 'Mai',
    mesCompleto: 'maio',
    ano: '2026',
    horario: '19h às 21h30',
    titulo: 'Dança Circular',
    categoria: 'Artes Integradas',
    local: 'Paraíso',
    endereco: 'Paraíso/RS',
    preco: 'Contribuição livre',
    vagas: 'Vagas abertas',
    linkInscricao: 'https://wa.me/5551992429974',
    descricaoCurta: 'Encontro de danças circulares sagradas, resgatando saberes ancestrais através do movimento e da música.',
    descricaoCompleta: `
      <p>As Danças Circulares são uma prática ancestral que une corpo, música e comunidade em um movimento simples e acolhedor. Não é necessário ter experiência prévia — todas as danças são ensinadas durante o encontro.</p>
      <p>O evento é facilitado por Elaine Regina dos Santos, membro fundadora do IPASG e facilitadora certificada de danças circulares sagradas.</p>
      <h3>Como funciona</h3>
      <ul>
        <li><i class="fa-solid fa-check"></i> Roda aberta a todas as idades</li>
        <li><i class="fa-solid fa-check"></i> Não é necessário par ou experiência</li>
        <li><i class="fa-solid fa-check"></i> Traga roupas confortáveis</li>
      </ul>
    `,
  },
  {
    slug: 'autocuidado-torres',
    img: 'assets/images/banner/m-five.png',
    dia: '07',
    mes: 'Mai',
    mesCompleto: 'maio',
    ano: '2026',
    horario: '14h às 17h',
    titulo: 'Autocuidado',
    categoria: 'Bem-estar',
    local: 'Torres',
    endereco: 'Torres/RS',
    preco: 'R$ 40',
    vagas: '20 vagas',
    linkInscricao: 'https://wa.me/5551992429974',
    descricaoCurta: 'Encontro voltado ao autocuidado e bem-estar, integrando práticas corporais, respiração e conexão com a natureza.',
    descricaoCompleta: `
      <p>Um espaço dedicado ao cuidado de si através de práticas integrativas: respiração consciente, movimento corporal suave e momentos de conexão com a natureza.</p>
      <p>Ideal para quem busca uma pausa do cotidiano e deseja reconectar corpo e mente em um ambiente acolhedor.</p>
    `,
  },
  {
    slug: 'dancando-florais',
    img: 'assets/images/banner/m-one.png',
    dia: '18',
    mes: 'Abr',
    mesCompleto: 'abril',
    ano: '2026',
    horario: '19h às 21h',
    titulo: 'Dançando os Florais',
    categoria: 'Artes Integradas',
    local: 'Sans Souci',
    endereco: 'Sans Souci/RS',
    preco: 'Contribuição livre',
    vagas: 'Vagas abertas',
    linkInscricao: 'https://wa.me/5551992429974',
    descricaoCurta: 'Um encontro que une terapia floral e dança circular para promover equilíbrio emocional e expressão corporal.',
    descricaoCompleta: `
      <p>"Dançando os Florais" combina os princípios da terapia floral com a prática das danças circulares, criando um espaço de autoconhecimento e expressão através do movimento.</p>
    `,
  },
  {
    slug: 'vivencia-permacultural-2',
    img: 'assets/images/banner/m-two.png',
    dia: '19',
    mes: 'Fev',
    mesCompleto: 'fevereiro',
    ano: '2026',
    horario: '08h às 17h',
    titulo: '2ª Vivência em Permacultura',
    categoria: 'Permacultura',
    local: 'Mampituba',
    endereco: 'Mampituba/RS',
    preco: 'A partir de R$ 80',
    vagas: 'Esgotado',
    linkInscricao: 'https://wa.me/5551992429974',
    descricaoCurta: 'Segunda edição da vivência permacultural na sede do IPASG, com foco em sistemas agroflorestais.',
    descricaoCompleta: `
      <p>A 2ª Vivência em Permacultura aconteceu na sede do IPASG em Mampituba, com foco especial em sistemas agroflorestais e design de bacias de captação de água.</p>
    `,
  },
  {
    slug: 'vivencias-permacultura-1',
    img: 'assets/images/banner/m-three.png',
    dia: '26',
    mes: 'Nov',
    mesCompleto: 'novembro',
    ano: '2025',
    horario: '08h às 17h',
    titulo: 'Vivências em Permacultura',
    categoria: 'Permacultura',
    local: 'Local a definir',
    endereco: 'A definir',
    preco: 'A partir de R$ 80',
    vagas: 'Em breve',
    linkInscricao: 'https://wa.me/5551992429974',
    descricaoCurta: 'Primeira edição das vivências permaculturais do IPASG, marco inicial do programa de imersões práticas.',
    descricaoCompleta: `
      <p>O local desta edição ainda está sendo definido. Acompanhe nossas redes sociais para mais informações em breve.</p>
    `,
  },
  {
    slug: 'oficina-fermentando',
    img: 'assets/images/banner/m-four.png',
    dia: '24',
    mes: 'Set',
    mesCompleto: 'setembro',
    ano: '2025',
    horario: '14h às 18h',
    titulo: 'Oficina "Fermentando"',
    categoria: 'Educação',
    local: 'Parque 35',
    endereco: 'Parque 35, RS',
    preco: 'R$ 60',
    vagas: '18 vagas',
    linkInscricao: 'https://wa.me/5551992429974',
    descricaoCurta: 'Oficina prática sobre fermentação de alimentos: kombucha, kefir, picles e outras técnicas ancestrais.',
    descricaoCompleta: `
      <p>Aprenda técnicas ancestrais de fermentação de alimentos, uma prática que une saúde, sustentabilidade e sabor. Os participantes levarão para casa suas próprias culturas iniciais.</p>
      <h3>Você vai aprender a fazer</h3>
      <ul>
        <li><i class="fa-solid fa-check"></i> Kombucha</li>
        <li><i class="fa-solid fa-check"></i> Kefir de água e de leite</li>
        <li><i class="fa-solid fa-check"></i> Picles fermentados</li>
        <li><i class="fa-solid fa-check"></i> Chucrute</li>
      </ul>
    `,
  },
  {
    slug: 'oficina-cervejeiro-caseiro',
    img: 'assets/images/banner/m-five.png',
    dia: '02',
    mes: 'Jul',
    mesCompleto: 'julho',
    ano: '2025',
    horario: '14h às 18h',
    titulo: 'Oficina Cervejeiro Caseiro',
    categoria: 'Educação',
    local: 'Azenha',
    endereco: 'Azenha, Porto Alegre/RS',
    preco: 'R$ 90',
    vagas: 'Esgotado',
    linkInscricao: 'https://wa.me/5551992429974',
    descricaoCurta: 'Introdução à produção artesanal de cerveja caseira, do mosto ao engarrafamento.',
    descricaoCompleta: `
      <p>Uma introdução completa à produção de cerveja artesanal em casa, cobrindo desde a escolha dos ingredientes até o processo de fermentação e engarrafamento.</p>
    `,
  },
  {
    slug: 'dancas-circulares-fevereiro',
    img: 'assets/images/banner/m-one.png',
    dia: '15',
    mes: 'Fev',
    mesCompleto: 'fevereiro',
    ano: '2026',
    horario: '19h às 21h30',
    titulo: 'Danças Circulares',
    categoria: 'Artes Integradas',
    local: 'Espaço Cultural TEN CATEN',
    endereco: 'Espaço Cultural TEN CATEN, RS',
    preco: 'Contribuição livre',
    vagas: 'Vagas abertas',
    linkInscricao: 'https://wa.me/5551992429974',
    descricaoCurta: 'Roda de danças circulares sagradas no Espaço Cultural TEN CATEN.',
    descricaoCompleta: `
      <p>Mais um encontro de danças circulares sagradas, desta vez no acolhedor Espaço Cultural TEN CATEN. Venha celebrar a vida através do movimento coletivo.</p>
    `,
  },
  {
    slug: 'oficina-abelhas-nativas-dezembro',
    img: 'assets/images/banner/m-two.png',
    dia: '14',
    mes: 'Dez',
    mesCompleto: 'dezembro',
    ano: '2025',
    horario: '09h às 12h',
    titulo: 'Oficina Abelhas Nativas',
    categoria: 'Meliponicultura',
    local: 'Galpão Crioulo',
    endereco: 'Galpão Crioulo, RS',
    preco: 'R$ 50',
    vagas: '15 vagas',
    linkInscricao: 'https://wa.me/5551992429974',
    descricaoCurta: 'Oficina sobre manejo e importância das abelhas nativas sem ferrão, realizada no Galpão Crioulo.',
    descricaoCompleta: `
      <p>Edição da oficina de abelhas nativas realizada no tradicional Galpão Crioulo, com foco no manejo sustentável e na importância ecológica da meliponicultura.</p>
    `,
  },
];
