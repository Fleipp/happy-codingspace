/**
 * Landing Page Configuration
 * Centralized content for the "Adeus Papada" landing page.
 */

export const CHECKOUT_URL = "https://checkout.wiven.com.br/checkout/cmslxqby50dhq01odysgk3pfn?offer=B241Y0Y";

export const CONFIG = {
  productName: "Método Adeus Papada em 21 Dias",
  colors: {
    primary: "#FFF9F6",
    secondary: "#F8ECE8",
    accent: "#D99B92",
    accentDark: "#B86662",
    gold: "#C9A46A",
    textPrimary: "#332A28",
    textSecondary: "#6F625E",
  },
  hero: {
    badge: "ROTINA GUIADA • 21 DIAS",
    headline: "Método: Adeus Papada em 21 Dias",
    subheadline: "Uma rotina simples e guiada para transformar alguns minutos do seu dia em um momento dedicado ao cuidado com o rosto, pescoço e contorno facial.",
    benefits: [
      "Pratique em casa",
      "Rotina simples de acompanhar",
      "Apenas alguns minutos por dia"
    ],
    cta: "QUERO COMEÇAR MEUS 21 DIAS",
    footer: "100% digital • Acesso pelo celular"
  },
  problem: {
    title: "Você já tentou esconder essa região nas fotos?",
    intro: "Talvez você já tenha procurado o melhor ângulo para uma foto, levantado um pouco o rosto diante do espelho ou simplesmente desejado dedicar mais atenção ao contorno facial.",
    cards: [
      { emoji: "📸", text: "Evita determinados ângulos nas fotos" },
      { emoji: "🪞", text: "Gostaria de valorizar mais o contorno facial" },
      { emoji: "⏰", text: "Quer uma rotina simples que caiba no dia a dia" },
      { emoji: "🏠", text: "Prefere começar com práticas de autocuidado em casa" }
    ],
    footer: "Foi pensando em transformar essa intenção em uma rotina organizada que nasceu o Método Adeus Papada em 21 Dias.",
    cta: "CONHECER O MÉTODO"
  },
  method: {
    badge: "O MÉTODO",
    title: "21 dias para criar uma nova rotina de autocuidado",
    description: "O Método Adeus Papada em 21 Dias reúne exercícios faciais, técnicas de automassagem e práticas de autocuidado em um cronograma simples de acompanhar.",
    steps: [
      {
        number: "01",
        title: "Exercícios Faciais",
        text: "Sequências de movimentos apresentadas de maneira simples para você acompanhar no seu ritmo."
      },
      {
        number: "02",
        title: "Automassagem",
        text: "Técnicas para incorporar massagens faciais e cuidados com rosto e pescoço à sua rotina."
      },
      {
        number: "03",
        title: "Plano de 21 Dias",
        text: "Um cronograma organizado para ajudar você a manter consistência durante todo o desafio."
      }
    ]
  },
  howItWorks: {
    title: "Simples de começar. Fácil de acompanhar.",
    steps: [
      { label: "PASSO 1", title: "APRENDA", text: "Conheça as técnicas e exercícios apresentados dentro do método." },
      { label: "PASSO 2", title: "PRATIQUE", text: "Separe alguns minutos do seu dia e acompanhe a rotina indicada." },
      { label: "PASSO 3", title: "ACOMPANHE", text: "Registre sua experiência durante os 21 dias e acompanhe sua própria evolução." }
    ],
    disclaimer: "Cada pessoa é única. Experiências e resultados podem variar."
  },
  included: {
    title: "Tudo organizado para acompanhar seus 21 dias",
    items: [
      "Programa completo de 21 dias",
      "Guia passo a passo",
      "Sequências de exercícios faciais",
      "Técnicas de automassagem",
      "Calendário de acompanhamento",
      "Orientações para manter consistência",
      "Conteúdo acessível pelo celular, tablet ou computador"
    ],
    cta: "EU QUERO COMEÇAR"
  },
  routine: {
    title: "Alguns minutos dedicados a você",
    cards: [
      { title: "Preparação", text: "Escolha um momento tranquilo do seu dia." },
      { title: "Prática", text: "Acompanhe os movimentos e técnicas apresentados." },
      { title: "Consistência", text: "Siga seu cronograma durante os 21 dias." }
    ]
  },
  forWho: {
    title: "Este método foi criado para quem…",
    items: [
      "Deseja criar uma rotina de autocuidado facial",
      "Quer aprender exercícios simples para rosto e pescoço",
      "Procura um cronograma organizado para acompanhar",
      "Prefere praticar em casa",
      "Quer reservar alguns minutos do dia para cuidar de si",
      "Busca conhecer práticas não invasivas de autocuidado estético"
    ],
    footer: "Você não precisa começar sabendo tudo. O objetivo do método é mostrar uma sequência organizada para acompanhar."
  },
  testimonials: [
    { name: "[Nome da cliente]", location: "[Cidade / Estado]", text: "[INSERIR DEPOIMENTO REAL DA CLIENTE]", stars: 5 },
    { name: "[Nome da cliente]", location: "[Cidade / Estado]", text: "[INSERIR DEPOIMENTO REAL DA CLIENTE]", stars: 5 },
    { name: "[Nome da cliente]", location: "[Cidade / Estado]", text: "[INSERIR DEPOIMENTO REAL DA CLIENTE]", stars: 5 }
  ],
  offers: [
    {
      id: "basic",
      title: "Desafio 21 Dias",
      subtitle: "Acesso completo ao cronograma e exercícios.",
      items: [
        "Programa de 21 dias",
        "Guia passo a passo",
        "Exercícios faciais",
        "Técnicas de automassagem"
      ],
      price: {
        original: "R$ 47",
        current: "10",
        installments: "À vista"
      },
      cta: "QUERO O ACESSO BÁSICO",
      checkoutUrl: "https://checkout.wiven.com.br/checkout/cmslxqby50dhq01odysgk3pfn?offer=B241Y0Y"
    },
    {
      id: "premium",
      title: "Método Completo + Bônus",
      subtitle: "A experiência completa com materiais extras.",
      items: [
        "Tudo do plano básico",
        "Calendário de acompanhamento",
        "Materiais complementares",
        "Acesso vitalício"
      ],
      price: {
        original: "R$ 97",
        current: "27",
        installments: "À vista"
      },
      cta: "QUERO O MÉTODO COMPLETO",
      checkoutUrl: "#",
      featured: true
    }
  ],
  offerSection: {
    title: "Escolha a melhor oferta para você",
    subtitle: "Comece hoje o seu desafio de 21 dias no seu próprio ritmo.",
    footer: "Compra segura • Acesso digital"
  },
  warranty: {
    days: "[X DIAS]",
    title: "Experimente com tranquilidade",
    text: "Você terá [X DIAS] para conhecer o conteúdo. Caso esteja dentro das condições da política de garantia, poderá solicitar o reembolso conforme os termos apresentados no momento da compra."
  },
  faq: [
    { q: "Preciso de algum equipamento?", a: "[Placeholder: Informação a ser preenchida]" },
    { q: "Quanto tempo preciso dedicar por dia?", a: "[Placeholder: Informação a ser preenchida]" },
    { q: "Posso fazer em casa?", a: "Sim, o método foi criado para ser praticado totalmente em casa." },
    { q: "Como vou receber o método?", a: "Após a confirmação do pagamento, você receberá os dados de acesso no seu e-mail." },
    { q: "Por quanto tempo terei acesso?", a: "[Placeholder: Informação a ser preenchida]" },
    { q: "Quando posso começar?", a: "Imediatamente após receber seu acesso." },
    { q: "O método substitui procedimentos estéticos?", a: "Não. O conteúdo possui caráter educativo e de autocuidado e não substitui avaliação ou orientação de profissionais habilitados." },
    { q: "Como funciona a garantia?", a: "Você terá um prazo de garantia para conhecer o conteúdo conforme descrito na oferta." }
  ],
  footer: {
    disclaimer: "Este produto apresenta conteúdo educativo relacionado a exercícios faciais e práticas de autocuidado. Não substitui avaliação, diagnóstico ou orientação de profissionais de saúde. Experiências e resultados individuais podem variar.",
    copyright: "© 2026 Método Adeus Papada em 21 Dias. Todos os direitos reservados."
  }
};
