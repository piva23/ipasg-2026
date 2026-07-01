/* ==========================================
   noticias-data.js
   Fonte única de dados das notícias/blog.
   Usado por noticias.js (listagem) e noticia-detalhe.js (página interna).

   Para adicionar uma notícia nova:
   1. Copie um objeto do array abaixo
   2. Troque o slug (identificador único na URL), título, data, etc.
   3. Escreva o conteúdo em descricaoCompleta usando HTML simples (<p>, <h3>, <ul>)
========================================== */

const NOTICIAS_DATA = [
  {
    id: 1,
    slug: 'novo-projeto-recuperacao-florestal',
    title: 'IPASG aprova novo projeto de recuperação florestal',
    date: '10 de outubro de 2023',
    dateShort: '10 Out, 2023',
    category: 'Permacultura',
    author: 'Equipe IPASG',
    img: 'assets/images/banner/m-two.png',
    resumo: 'O IPASG acaba de ter aprovado um novo projeto focado na recuperação de áreas de mata ciliar na região da Serra Gaúcha, com previsão de plantio de mais de 500 mudas nativas.',
    descricaoCompleta: `
      <p>O IPASG acaba de ter aprovado um novo projeto focado na recuperação de áreas de mata ciliar na região da Serra Gaúcha. A iniciativa, desenvolvida em parceria com produtores rurais locais, prevê o plantio de mais de 500 mudas de espécies nativas ao longo de 3 quilômetros de margens de rios.</p>
      <p>O projeto integra práticas de permacultura e sistemas agroflorestais (SAFs), garantindo não apenas a restauração ambiental, mas também a geração de renda para as famílias envolvidas. A previsão é que as primeiras mudas sejam plantadas durante o mutirão de março de 2024.</p>
      <h3>O que o projeto inclui</h3>
      <ul>
        <li><i class="fa-solid fa-check"></i> Levantamento das áreas degradadas e mapeamento participativo</li>
        <li><i class="fa-solid fa-check"></i> Produção de mudas em viveiro comunitário</li>
        <li><i class="fa-solid fa-check"></i> Plantio em mutirão com participação das famílias</li>
        <li><i class="fa-solid fa-check"></i> Acompanhamento técnico por dois anos</li>
        <li><i class="fa-solid fa-check"></i> Capacitação em manejo ecológico do solo</li>
      </ul>
      <h3>Impacto esperado</h3>
      <p>A recuperação das matas ciliares tem impacto direto na qualidade da água dos rios, na biodiversidade local e na redução da erosão do solo. Estima-se que a área beneficiada sequestre cerca de 80 toneladas de CO₂ nos próximos 10 anos.</p>
      <p>O projeto conta com financiamento parcial do Fundo Estadual de Meio Ambiente e está aberto para novas parcerias e apoios.</p>
    `,
    tags: ['Permacultura', 'Reflorestamento', 'Agrofloresta'],
  },
  {
    id: 2,
    slug: 'alunos-rede-publica-sede-ecologica',
    title: 'Alunos da rede pública visitam a sede ecológica',
    date: '28 de setembro de 2023',
    dateShort: '28 Set, 2023',
    category: 'Educação',
    author: 'Elaine Regina dos Santos',
    img: 'assets/images/banner/m-three.png',
    resumo: 'Mais de 60 estudantes de duas escolas municipais visitaram a sede do IPASG em Mampituba, participando de atividades práticas de permacultura, compostagem e meliponicultura.',
    descricaoCompleta: `
      <p>Mais de 60 estudantes de duas escolas municipais da região visitaram a sede do IPASG em Mampituba, participando de atividades práticas que conectaram conteúdos curriculares com a experiência direta com a natureza.</p>
      <p>A visita, organizada em parceria com as secretarias municipais de educação de Mampituba e Torres, teve duração de um dia inteiro e incluiu estações práticas de permacultura, compostagem, meliponicultura e bioconstrução.</p>
      <h3>Atividades realizadas</h3>
      <ul>
        <li><i class="fa-solid fa-check"></i> Tour guiado pelo sistema agroflorestal da sede</li>
        <li><i class="fa-solid fa-check"></i> Prática de compostagem e vermicompostagem</li>
        <li><i class="fa-solid fa-check"></i> Observação do meliponário e identificação das abelhas</li>
        <li><i class="fa-solid fa-check"></i> Plantio de mudas nativas</li>
        <li><i class="fa-solid fa-check"></i> Roda de conversa sobre meio ambiente e sustentabilidade</li>
      </ul>
      <p>A coordenadora pedagógica de uma das escolas participantes destacou a importância de conectar o aprendizado com experiências concretas. A próxima visita está prevista para o primeiro trimestre de 2024, com turmas do ensino médio.</p>
    `,
    tags: ['Educação Ambiental', 'Escolas', 'Crianças'],
  },
  {
    id: 3,
    slug: 'curso-saneamento-ecologico',
    title: 'Como foi o nosso último curso de Saneamento Ecológico',
    date: '15 de agosto de 2023',
    dateShort: '15 Ago, 2023',
    category: 'Saneamento',
    author: 'Leandro N. dos Santos',
    img: 'assets/images/banner/m-one.png',
    resumo: 'O curso prático de Saneamento Ecológico reuniu 18 participantes de cinco municípios do RS, com foco na instalação de Tanques de Evapotranspiração e Fossas de Minhocas.',
    descricaoCompleta: `
      <p>O último curso de Saneamento Ecológico do IPASG reuniu 18 participantes de cinco municípios do Rio Grande do Sul, entre técnicos agrícolas, agricultores familiares e educadores interessados em tecnologias alternativas de tratamento de efluentes.</p>
      <p>Ao longo de dois dias, os participantes aprenderam na prática a dimensionar, construir e instalar Tanques de Evapotranspiração (TEvap) e Fossas de Minhocas (Vermifiltros) — tecnologias de baixo custo e alta eficiência para o tratamento de esgoto doméstico sem depender de rede de saneamento convencional.</p>
      <h3>Conteúdo do curso</h3>
      <ul>
        <li><i class="fa-solid fa-check"></i> Fundamentos do saneamento ecológico e legislação vigente</li>
        <li><i class="fa-solid fa-check"></i> Dimensionamento e escolha do sistema adequado</li>
        <li><i class="fa-solid fa-check"></i> Construção prática de um TEvap completo</li>
        <li><i class="fa-solid fa-check"></i> Montagem de vermifiltro com minhocas californianas</li>
        <li><i class="fa-solid fa-check"></i> Manutenção e monitoramento dos sistemas</li>
      </ul>
      <h3>Próximas turmas</h3>
      <p>O curso de Saneamento Ecológico é oferecido duas vezes ao ano. Para informações sobre a próxima turma, entre em contato pelo WhatsApp ou acompanhe a nossa agenda de eventos.</p>
    `,
    tags: ['Saneamento', 'TEvap', 'Vermifiltro', 'Curso'],
  },
  {
    id: 4,
    slug: 'oficina-meliponicultura-produtores',
    title: 'Oficina de Meliponicultura reúne dezenas de produtores locais',
    date: '02 de julho de 2023',
    dateShort: '02 Jul, 2023',
    category: 'Eventos',
    author: 'Equipe IPASG',
    img: 'assets/images/difference/thumb-lg-two.png',
    resumo: 'A oficina de meliponicultura organizada pelo IPASG reuniu agricultores e entusiastas das abelhas nativas, com demonstrações práticas de manejo e multiplicação de colônias.',
    descricaoCompleta: `
      <p>A oficina de Meliponicultura organizada pelo IPASG reuniu mais de 30 participantes — entre agricultores familiares, apicultores e entusiastas das abelhas nativas sem ferrão — para um dia completo de aprendizado prático sobre o manejo e a conservação das meliponíneas.</p>
      <p>O evento contou com a presença de meliponicultores experientes da região, que compartilharam técnicas de manejo, multiplicação de colônias e colheita responsável de mel e própolis.</p>
      <h3>Destaques da oficina</h3>
      <ul>
        <li><i class="fa-solid fa-check"></i> Identificação de 12 espécies de abelhas nativas do RS</li>
        <li><i class="fa-solid fa-check"></i> Demonstração de abertura e inspeção de caixas racionais</li>
        <li><i class="fa-solid fa-check"></i> Técnica de divisão e multiplicação de colônias</li>
        <li><i class="fa-solid fa-check"></i> Colheita de mel sem prejudicar a colônia</li>
        <li><i class="fa-solid fa-check"></i> Construção de caixa racional INPA</li>
      </ul>
      <p>Ao final do evento, foram doadas mudas de espécies florais e medicinais que atraem e alimentam as abelhas nativas, formando um kit de "jardim meliponícola" para cada participante levar para casa.</p>
    `,
    tags: ['Meliponicultura', 'Abelhas Nativas', 'Oficina'],
  },
  {
    id: 5,
    slug: 'danca-circular-encontro-comunidade',
    title: 'Dança Circular fortalece vínculos na comunidade de Sans Souci',
    date: '20 de junho de 2023',
    dateShort: '20 Jun, 2023',
    category: 'Artes',
    author: 'Elaine Regina dos Santos',
    img: 'assets/images/banner/m-four.png',
    resumo: 'O encontro de Danças Circulares Sagradas em Sans Souci reuniu mais de 40 pessoas de diferentes gerações em uma celebração do movimento, da música e da conexão humana.',
    descricaoCompleta: `
      <p>O encontro de Danças Circulares Sagradas realizado em Sans Souci reuniu mais de 40 pessoas — de crianças a idosos — em uma tarde de movimento, música e conexão comunitária. O evento, facilitado por Elaine Regina dos Santos, trouxe danças de diferentes culturas e tradições do mundo.</p>
      <p>As Danças Circulares Sagradas são uma prática terapêutica e artística que utiliza o movimento coletivo em roda como forma de promover bem-estar, fortalecer vínculos comunitários e resgatar saberes culturais ancestrais.</p>
      <h3>Sobre a prática</h3>
      <p>Diferente de outras formas de dança, as circulares não exigem experiência prévia nem aptidão física especial. Cada dança é ensinada passo a passo durante o encontro, tornando a prática acessível a qualquer pessoa independentemente da idade ou condição física.</p>
      <ul>
        <li><i class="fa-solid fa-check"></i> Mais de 20 danças de diferentes países e culturas</li>
        <li><i class="fa-solid fa-check"></i> Participação de crianças, adultos e idosos</li>
        <li><i class="fa-solid fa-check"></i> Encerramento com roda de compartilhamento</li>
      </ul>
      <p>Os encontros de Danças Circulares acontecem mensalmente em diferentes municípios. Acompanhe a nossa agenda para saber a próxima data perto de você.</p>
    `,
    tags: ['Danças Circulares', 'Arte', 'Comunidade'],
  },
];
