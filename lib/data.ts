export const navAboutItems = [
  {
    title: "Nossa história",
    href: "/nossa-historia",
    description: "Fundada em 2001, com o intuito de prestar serviços de análises e tratamento de água com o mais alto nível de comprometimento e qualidade."
  },
  {
    title: "Legislação",
    href: "/legislacao",
    description: "Conheça as normas e legislações vigentes para análises."
  }
];

export const navServicesItems: { title: string; href: string; description: string }[] = [
  {
    title: "Análise de Água",
    href: "/servicos/analise-de-agua",
    description: "Potabilidade, recreação, águas superficiais e subterrâneas, conforme as legislações vigentes.",
  },
  {
    title: "Análise de Alimentos",
    href: "/servicos/analise-de-alimentos",
    description: "Análises microbiológicas e físico-químicas para garantir a segurança e qualidade dos seus produtos.",
  },
  {
    title: "Análise de Solo",
    href: "/servicos/analise-de-solo",
    description: "Avaliação da composição do solo para fins agrícolas, ambientais e de construção.",
  },
  {
    title: "Efluentes",
    href: "/servicos/efluentes",
    description: "Monitoramento de efluentes industriais e domésticos para conformidade com as normas ambientais.",
  },
  {
    title: "Higienização de Reservatórios",
    href: "/servicos/limpeza-de-reservatorios",
    description: "Serviços de limpeza e desinfecção para garantir a qualidade da água armazenada.",
  },
  {
    title: "Cosméticos",
    href: "/servicos/cosmeticos",
    description: "Análises para garantir a segurança e conformidade de produtos cosméticos.",
  },
  {
    title: "Amostragem",
    href: "/servicos/amostragem",
    description: "Coleta técnica de amostras seguindo procedimentos rigorosos para garantir a representatividade.",
  },
  {
    title: "Outros Serviços",
    href: "/servicos/outros-servicos",
    description: "Consultoria, laudos técnicos e soluções personalizadas para suas necessidades.",
  },
];

export const services = [
    {
        id: 1,
        icon: "Droplet", // Usaremos string para poder mapear para o componente Lucide depois
        title: "Análise de Água",
        img: "/services/analise-agua.webp",
        slug: "/servicos/analise-de-agua",
    },
    {
        id: 2,
        icon: "Apple",
        title: "Análise de Alimentos",
        img: "/services/analise-alimentos.webp",
        slug: "/servicos/analise-de-alimentos",
    },
    {
        id: 3,
        icon: "Sprout",
        title: "Análise de Solo",
        img: "/analise-solo.png",
        slug: "/servicos/analise-de-solo",
    },
    {
        id: 4,
        icon: "Waves",
        title: "Efluentes",
        img: "/services/efluentes.webp",
        slug: "/servicos/efluentes",
    },
    {
        id: 5,
        icon: "Sparkles",
        title: "Higienização de Reservatórios",
        img: "/services/limpeza-higienizacao.webp",
        slug: "/servicos/limpeza-de-reservatorios",
    },
    {
        id: 6,
        icon: "Brush",
        title: "Cosméticos",
        img: "/services/cosmeticos.webp",
        slug: "/servicos/cosmeticos",
    },
    {
        id: 7,
        icon: "TestTubes",
        title: "Amostragem",
        img: "/services/amostragem.webp",
        slug: "/servicos/amostragem",
    },
    {
        id: 8,
        icon: "Microscope",
        title: "Outros Serviços",
        img: "services/outros-servicos.webp",
        slug: "/servicos/outros-servicos",
    },
];

export const structureSlides = [
    {
        id: 1,
        image: "/blog/alto-investimento.webp",
        alt: "Laboratório da Suprema Analítica com espectrômetro de emissão atômica."
    },
    {
        id: 2,
        image: "/blog/analise-rad.webp",
        alt: "Técnica de laboratório preparando amostras em bancada com vidrarias."
    },
    {
        id: 3,
        image: "/blog/marco-hist.webp",
        alt: "Área de trabalho do laboratório com equipamentos de análise modernos."
    },
    {
        id: 4,
        image: "/blog/marco-hist2.webp",
        alt: "Equipamento cromatógrafo a gás de alta performance em uso."
    },
    {
        id: 5,
        image: "/blog/marco-hist3.webp",
        alt: "Vista geral do laboratório limpo e organizado da Suprema Analítica."
    },
    {
        id: 6,
        image: "/blog/marco-hist4.webp",
        alt: "Detalhe de um equipamento de análise com frascos de amostra."
    }
];