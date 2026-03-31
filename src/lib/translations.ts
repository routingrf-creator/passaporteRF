import type { Locale } from "@/contexts/language-context";

type DeepStringShape<T> =
  T extends string ? string :
  T extends null ? null :
  T extends number ? number :
  T extends readonly (infer _)[] ? readonly DeepStringShape<T[number]>[] :
  T extends object ? { [K in keyof T]: DeepStringShape<T[K]> } :
  T;

const pt = {
    nav: {
      destinos: "Destinos",
      roteiros: "Roteiros",
      sobre: "Sobre",
      parcerias: "Parcerias",
      contato: "Contato",
      criarRoteiro: "Criar meu roteiro",
    },
    hero: {
      badge: "Roteiros personalizados por PassaporteRF",
      title: "Transforme sonhos em roteiros",
      titleHighlight: "inesquecíveis",
      subtitle:
        "Nós somos Rafa & Fe e ajudamos você a viver viagens únicas, com roteiros 100% personalizados.",
      explorar: "Explorar destinos",
      criar: "Criar meu roteiro",
    },
    howItWorks: {
      title: "Como funciona",
      steps: [
        {
          title: "Preencha o formulário",
          description: "Conte pra gente seu destino, datas e estilo de viagem.",
        },
        {
          title: "Montamos seu roteiro",
          description:
            "Criamos um plano exclusivo com dicas, hotéis e experiências.",
        },
        {
          title: "Ajustamos juntos",
          description: "Você revisa e nós ajustamos para ficar perfeito.",
        },
        {
          title: "Embarque tranquilo",
          description: "Viaje com tudo planejado e aproveite cada momento.",
        },
      ],
    },
    highlights: {
      items: [
        {
          title: "Hotéis premium",
          description:
            "Selecionamos as melhores hospedagens com o melhor custo-benefício.",
        },
        {
          title: "Experiências culturais",
          description:
            "Roteiros que vão além do óbvio, com experiências autênticas.",
        },
        {
          title: "Dicas práticas",
          description: "Tudo que você precisa saber antes e durante a viagem.",
        },
      ],
    },
    socialProof: {
      title: "O que dizem nossos viajantes",
      subtitle: "Experiências reais de quem viajou com a gente",
    },
    trendingDestinations: {
      title: "Destinos em alta",
      subtitle: "Os lugares que estão no radar dos viajantes",
      verTodos: "Ver todos os destinos",
    },
    consultoria: {
      title: "Consultoria de roteiros",
      subtitle:
        "Conte pra gente o destino dos seus sonhos e a gente monta tudo pra você",
      formTitle: "Solicitar roteiro personalizado",
      formEmail: "Envia direto para passaporterf@gmail.com",
      destino: "Destino",
      destinoPlaceholder: "Ex: Paris, Japão...",
      datas: "Datas / Duração",
      datasPlaceholder: "Ex: 10 dias em julho",
      pessoas: "Pessoas",
      estilo: "Estilo de viagem",
      selecione: "Selecione",
      estilos: {
        romantico: "Romântico",
        aventura: "Aventura",
        cultural: "Cultural",
        relaxante: "Relaxante",
        gastronomico: "Gastronômico",
        misto: "Misto",
      },
      observacoes: "Algo mais que a gente precisa saber? (opcional)",
      observacoesPlaceholder:
        "Preferências, alergias, orçamento, ocasião especial...",
      email: "Seu email",
      whatsapp: "WhatsApp",
      submit: "Solicitar meu roteiro",
      toast: "Abrindo seu email para enviar a solicitação!",
    },
    ebooks: {
      title: "Nossos e-books",
      subtitle: "Guias completos pra você planejar sua viagem com confiança",
      baixar: "Baixar e-book",
      dialogDesc: "Informe seu email e enviaremos o e-book gratuitamente.",
      emailLabel: "Seu email",
      newsletter:
        "Quero receber novidades e promoções exclusivas do PassaporteRF por email",
      quero: "Quero meu e-book",
      toast: "Abrindo seu email para solicitar o e-book!",
      items: [
        {
          title: "Guia Europa para Casais",
          description:
            "Os melhores roteiros românticos pela Europa, com dicas de hotéis, restaurantes e experiências para curtir a dois.",
          pages: "48 páginas",
          badge: "Mais baixado",
        },
        {
          title: "Japão sem Perrengue",
          description:
            "Tudo que você precisa saber para planejar sua viagem ao Japão: transporte, comida, cultura e dicas práticas.",
          pages: "36 páginas",
          badge: "Novo",
        },
        {
          title: "Viaje Gastando Pouco",
          description:
            "Como viajar com orçamento limitado sem abrir mão de boas experiências. Dicas reais e testadas por nós.",
          pages: "28 páginas",
          badge: "Gratuito",
        },
      ],
    },
    footer: {
      desc: "Seu guia de viagens para explorar o mundo com roteiros personalizados e dicas de quem é apaixonado por viajar.",
      links: "Links do site",
      redes: "Redes Sociais",
      contato: "Contato",
      direitos: "Todos os direitos reservados.",
      seguirNo: "Siga no",
    },
    metrics: {
      visualizacoes: "Visualizações Mensais",
      interacoes: "Interações Mensais",
      alcancadas: "Contas Alcançadas",
      proximoDestino: "Próximo Destino",
      destinosVisitados: "Destinos Visitados",
    },
    destinationCard: {
      verMais: "Ver mais",
    },
    destinos: {
      title: "Nossos Destinos",
      subtitle:
        "Descubra lugares incríveis pelo mundo e encontre a viagem perfeita para o seu estilo",
      buscar: "Buscar cidade ou país...",
      tipo: "Tipo:",
      limpar: "Limpar filtros",
      encontrado: "destino encontrado",
      encontrados: "destinos encontrados",
      nenhum: "Nenhum destino encontrado",
      nenhumDesc:
        "Tente ajustar os filtros ou buscar por outro termo. Estamos sempre adicionando novos destinos!",
      continents: [
        { value: "Todos", label: "Todos" },
        { value: "Europa", label: "Europa" },
        { value: "Asia", label: "Ásia" },
        { value: "America do Norte", label: "América do Norte" },
        { value: "Africa", label: "África" },
      ],
      tags: [
        { value: "romantico", label: "Romântico" },
        { value: "aventura", label: "Aventura" },
        { value: "cultura", label: "Cultura" },
        { value: "praia", label: "Praia" },
        { value: "luxo", label: "Luxo" },
        { value: "economico", label: "Econômico" },
        { value: "gastronomia", label: "Gastronomia" },
      ],
    },
    sobre: {
      badge: "Nossa história",
      title: "Somos Rafa & Fe",
      p1: "Tudo começou com dois passaportes, uma curiosidade infinita e o desejo de explorar o mundo juntos. O que era apenas uma paixão por viajar rapidamente se transformou em um propósito: inspirar e ajudar outras pessoas a viverem experiências tão marcantes quanto as nossas.",
      p2: "Depois de explorar dezenas de países e compartilhar centenas de dicas ao longo do caminho, criamos o PassaporteRF — um espaço onde reunimos tudo o que aprendemos em roteiros personalizados, conteúdos autênticos e recomendações cuidadosamente selecionadas.",
      p3: "Hoje, vivemos de viajar — e de transformar cada detalhe da sua próxima viagem em uma experiência inesquecível.",
      valoresTitle: "Nossos valores",
      valoresSubtitle: "O que guia cada roteiro e cada recomendação",
      valores: [
        {
          titulo: "Autenticidade",
          descricao:
            "Só recomendamos o que já testamos e vivemos pessoalmente. Nada de dica genérica.",
        },
        {
          titulo: "Qualidade",
          descricao:
            "Cada detalhe importa. Do hotel ao restaurante, tudo é pensado com carinho.",
        },
        {
          titulo: "Experiência",
          descricao:
            "Viagens que criam memórias. O nosso foco é transformar cada trip em algo inesquecível.",
        },
      ],
      trajetoriaTitle: "Nossa trajetória",
      trajetoriaSubtitle:
        "Marcos que fizeram do PassaporteRF o que somos hoje",
      timeline: [
        { ano: "2023", evento: "Primeira viagem juntos" },
        { ano: "2024", evento: "13 países visitados no ano" },
        { ano: "2025", evento: "Criação do PassaporteRF" },
        { ano: "2026", evento: "+100 Roteiros Entregues" },
      ],
      ctaTitle: "Quer viajar com a gente?",
      ctaSubtitle:
        "Montamos o roteiro perfeito para você. Conte-nos a sua viagem dos sonhos!",
      ctaButton: "Criar meu roteiro",
    },
    roteiros: {
      badge: "+500 roteiros entregues",
      title: "Nosso roteiro, do seu jeito",
      subtitle:
        "Cada viagem é única e o seu roteiro também deve ser. Montamos um plano completo, personalizado e cheio de dicas para você aproveitar ao máximo cada momento.",
      servicosTitle: "Escolha o serviço ideal",
      servicosSubtitle: "Opções para cada momento da sua viagem",
      inclusosTitle: "O que está incluso",
      naoInclusosTitle: "O que não está incluso",
      formTitle: "Monte seu roteiro",
      formSubtitle:
        "Preencha o formulário e receba uma proposta personalizada",
      stats: ["+30 destinos", "Entrega em até 7 dias", "Suporte por WhatsApp"],
      servicos: [
        {
          titulo: "Roteiro Personalizado",
          descricao: "Roteiro completo e exclusivo para sua viagem",
          preco: "A partir de R$ 297",
          badge: "Mais vendido",
        },
        {
          titulo: "Consultoria Express",
          descricao: "30 minutos de call com dicas personalizadas",
          preco: "R$ 147",
          badge: null,
        },
        {
          titulo: "Revisão de Roteiro",
          descricao: "Já tem roteiro? A gente melhora pra você",
          preco: "R$ 97",
          badge: null,
        },
      ],
      incluso: [
        "Roteiro dia a dia",
        "Indicações de hotéis e restaurantes",
        "Dicas de transporte",
        "Mapa interativo",
        "2 rodadas de ajustes",
        "Suporte por WhatsApp",
      ],
      naoIncluso: [
        "Reservas de hotel ou voo",
        "Seguro viagem",
        "Transfers e transporte local",
        "Ingressos para atrações",
      ],
    },
    contato: {
      title: "Fale com a gente",
      subtitle:
        "Dúvidas, sugestões ou quer falar sobre parcerias? Estamos aqui para ajudar.",
      canaisTitle: "Nossos canais",
      resposta: "Resposta em até",
      respostaStrong: "48h",
      faqTitle: "Perguntas frequentes",
      faqs: [
        {
          question: "Como funciona o roteiro personalizado?",
          answer:
            "Você preenche um formulário com suas preferências (destino, datas, orçamento, estilo de viagem) e nós montamos um roteiro completo e exclusivo para você. Cada roteiro é único e leva em conta o que você mais gosta de fazer.",
        },
        {
          question: "Quanto tempo demora para receber o roteiro?",
          answer:
            "Após o pagamento, preenchimento do formulário e todas as informações necessárias recebidas, o roteiro fica pronto em até 5 dias úteis. Para pedidos urgentes, temos a opção de Consultoria Express.",
        },
        {
          question: "Posso pedir alterações no roteiro?",
          answer:
            "Sim! Após a entrega, você tem direito a 2 rodadas de ajustes sem custo adicional. Queremos que o roteiro fique perfeito para você.",
        },
        {
          question: "Vocês reservam hotéis e passeios?",
          answer:
            "Nós indicamos os melhores hotéis, restaurantes e experiências com links diretos para reserva, mas a reserva em si é feita por você. Assim você tem total controle.",
        },
        {
          question: "A consultoria express funciona como?",
          answer:
            "É uma chamada de vídeo de 30 minutos onde tiramos todas as suas dúvidas sobre o destino, damos dicas personalizadas e ajudamos a montar a estrutura básica do roteiro.",
        },
        {
          question: "Quais formas de pagamento são aceitas?",
          answer:
            "Aceitamos PIX, cartão de crédito, transferência bancária e Revolut.",
        },
      ],
    },
    parcerias: {
      badge: "Colabore conosco",
      title: "Vamos trabalhar juntos?",
      subtitle:
        "Conectamos marcas incríveis com uma audiência apaixonada por viagens. Se você quer alcance real e conteúdo autêntico, vamos conversar.",
      formatosTitle: "Formatos de parceria",
      formatosSubtitle: "Diferentes formas de trabalhar juntos",
      metricsTitle: "Números e público",
      metricsSubtitle: "Dados reais de alcance e engajamento",
      parceirosTitle: "Parceiros",
      parceirosSubtitle: "Marcas que confiam no nosso trabalho",
      ctaTitle: "Quer saber mais?",
      ctaSubtitle:
        "Solicite nosso mídia kit e receba todos os dados, cases e formatos de parceria disponíveis.",
      formatos: [
        {
          titulo: "Hotéis e Hospedagens",
          descricao: "Estadias, reviews e conteúdo exclusivo",
        },
        {
          titulo: "Restaurantes e Experiências",
          descricao: "Degustações, passeios e cobertura completa",
        },
        {
          titulo: "Marcas e Produtos",
          descricao: "Publi, unboxing e campanhas criativas",
        },
      ],
      metricas: [
        { valor: "+3M", label: "Visualizações Mensais" },
        { valor: "+100mil", label: "Interações Mensais" },
        { valor: "+1.2M", label: "Contas Alcançadas" },
        { valor: "Alcance", label: "Brasil, EUA, Europa" },
      ],
    },
    roteiroForm: {
      title: "Preencha seus dados",
      destino: "Destino",
      destinoPlaceholder: "Ex: Paris, Toscana, Japão...",
      datas: "Datas / Duração",
      datasPlaceholder: "Ex: 15 a 25 de julho ou 10 dias",
      orcamento: "Orçamento",
      estilo: "Estilo de viagem",
      selecione: "Selecione",
      pessoas: "Número de pessoas",
      pessoasPlaceholder: "Ex: 2",
      preferencias: "Preferências (opcional)",
      preferenciasPlaceholder:
        "Conte o que você mais gosta de fazer em viagem...",
      email: "Email",
      emailPlaceholder: "seu@email.com",
      whatsapp: "WhatsApp",
      whatsappPlaceholder: "(11) 99999-9999",
      submit: "Solicitar roteiro",
      previewTitle: "Pré-visualização",
      summaryTitle: "Resumo do pedido",
      previewEmpty:
        "Preencha o formulário para ver a pré-visualização do seu pedido aqui.",
      pedidoEnviado: "Pedido enviado! Entraremos em contato em breve.",
      dica: "Dica",
      dicaText:
        "Quanto mais detalhes você preencher, mais personalizado será o seu roteiro. Não economize nas preferências!",
      toast: "Pedido enviado com sucesso! Entraremos em contato em breve.",
      orcamentoLabels: {
        economico: "Econômico",
        moderado: "Moderado",
        confortavel: "Confortável",
        luxo: "Luxo",
      },
      estiloLabels: {
        romantico: "Romântico",
        aventura: "Aventura",
        cultural: "Cultural",
        relaxante: "Relaxante",
        gastronomico: "Gastronômico",
        familia: "Família",
        misto: "Misto",
      },
    },
    contatoForm: {
      title: "Envie sua mensagem",
      nome: "Nome",
      nomePlaceholder: "Seu nome",
      email: "Email",
      assunto: "Assunto",
      assuntoPlaceholder: "Selecione o assunto",
      mensagem: "Mensagem",
      mensagemPlaceholder: "Como podemos ajudar?",
      submit: "Enviar mensagem",
      toast: "Mensagem enviada com sucesso! Responderemos em até 48h.",
      assuntos: [
        { value: "roteiro", label: "Dúvida sobre roteiro" },
        { value: "parceria", label: "Parceria" },
        { value: "sugestao", label: "Sugestão" },
        { value: "outro", label: "Outro" },
      ],
    },
    parceriaDialog: {
      button: "Solicitar mídia kit",
      title: "Solicitar mídia kit",
      desc: "Preencha seus dados e entraremos em contato.",
      nome: "Nome",
      nomePlaceholder: "Seu nome",
      email: "Email",
      empresa: "Empresa (opcional)",
      empresaPlaceholder: "Nome da empresa",
      mensagem: "Mensagem",
      mensagemPlaceholder: "Conte sobre a parceria que tem em mente...",
      submit: "Enviar",
      toast: "Solicitação enviada com sucesso! Entraremos em contato em breve.",
    },
  } as const;

  type TranslationShape = DeepStringShape<typeof pt>;

  const en = {
    nav: {
      destinos: "Destinations",
      roteiros: "Itineraries",
      sobre: "About",
      parcerias: "Partnerships",
      contato: "Contact",
      criarRoteiro: "Create my itinerary",
    },
    hero: {
      badge: "Personalized itineraries by PassaporteRF",
      title: "Turn dreams into",
      titleHighlight: "unforgettable itineraries",
      subtitle:
        "We are Rafa & Fe and we help you experience unique trips, with 100% personalized itineraries.",
      explorar: "Explore destinations",
      criar: "Create my itinerary",
    },
    howItWorks: {
      title: "How it works",
      steps: [
        {
          title: "Fill out the form",
          description: "Tell us your destination, dates and travel style.",
        },
        {
          title: "We build your itinerary",
          description:
            "We create an exclusive plan with tips, hotels and experiences.",
        },
        {
          title: "We adjust together",
          description: "You review and we adjust until it's perfect.",
        },
        {
          title: "Board stress-free",
          description:
            "Travel with everything planned and enjoy every moment.",
        },
      ],
    },
    highlights: {
      items: [
        {
          title: "Premium hotels",
          description:
            "We select the best accommodations with the best value for money.",
        },
        {
          title: "Cultural experiences",
          description:
            "Itineraries that go beyond the obvious, with authentic experiences.",
        },
        {
          title: "Practical tips",
          description:
            "Everything you need to know before and during the trip.",
        },
      ],
    },
    socialProof: {
      title: "What our travelers say",
      subtitle: "Real experiences from those who traveled with us",
    },
    trendingDestinations: {
      title: "Trending destinations",
      subtitle: "The places on travelers' radar",
      verTodos: "See all destinations",
    },
    consultoria: {
      title: "Itinerary consulting",
      subtitle:
        "Tell us about your dream destination and we'll plan everything for you",
      formTitle: "Request a personalized itinerary",
      formEmail: "Sends directly to passaporterf@gmail.com",
      destino: "Destination",
      destinoPlaceholder: "E.g.: Paris, Japan...",
      datas: "Dates / Duration",
      datasPlaceholder: "E.g.: 10 days in July",
      pessoas: "People",
      estilo: "Travel style",
      selecione: "Select",
      estilos: {
        romantico: "Romantic",
        aventura: "Adventure",
        cultural: "Cultural",
        relaxante: "Relaxing",
        gastronomico: "Gastronomic",
        misto: "Mixed",
      },
      observacoes: "Anything else we should know? (optional)",
      observacoesPlaceholder:
        "Preferences, allergies, budget, special occasion...",
      email: "Your email",
      whatsapp: "WhatsApp",
      submit: "Request my itinerary",
      toast: "Opening your email to send the request!",
    },
    ebooks: {
      title: "Our e-books",
      subtitle: "Complete guides for you to plan your trip with confidence",
      baixar: "Download e-book",
      dialogDesc: "Enter your email and we'll send the e-book for free.",
      emailLabel: "Your email",
      newsletter:
        "I want to receive exclusive news and promotions from PassaporteRF by email",
      quero: "I want my e-book",
      toast: "Opening your email to request the e-book!",
      items: [
        {
          title: "Europe Guide for Couples",
          description:
            "The best romantic itineraries through Europe, with tips on hotels, restaurants and experiences to enjoy as a couple.",
          pages: "48 pages",
          badge: "Most downloaded",
        },
        {
          title: "Japan Without Hassle",
          description:
            "Everything you need to know to plan your trip to Japan: transportation, food, culture and practical tips.",
          pages: "36 pages",
          badge: "New",
        },
        {
          title: "Travel on a Budget",
          description:
            "How to travel on a limited budget without giving up great experiences. Real tips tested by us.",
          pages: "28 pages",
          badge: "Free",
        },
      ],
    },
    footer: {
      desc: "Your travel guide to explore the world with personalized itineraries and tips from passionate travelers.",
      links: "Site links",
      redes: "Social Media",
      contato: "Contact",
      direitos: "All rights reserved.",
      seguirNo: "Follow on",
    },
    metrics: {
      visualizacoes: "Monthly Views",
      interacoes: "Monthly Interactions",
      alcancadas: "Accounts Reached",
      proximoDestino: "Next Destination",
      destinosVisitados: "Destinations Visited",
    },
    destinationCard: {
      verMais: "See more",
    },
    destinos: {
      title: "Our Destinations",
      subtitle:
        "Discover incredible places around the world and find the perfect trip for your style",
      buscar: "Search city or country...",
      tipo: "Type:",
      limpar: "Clear filters",
      encontrado: "destination found",
      encontrados: "destinations found",
      nenhum: "No destinations found",
      nenhumDesc:
        "Try adjusting the filters or searching for another term. We're always adding new destinations!",
      continents: [
        { value: "Todos", label: "All" },
        { value: "Europa", label: "Europe" },
        { value: "Asia", label: "Asia" },
        { value: "America do Norte", label: "North America" },
        { value: "Africa", label: "Africa" },
      ],
      tags: [
        { value: "romantico", label: "Romantic" },
        { value: "aventura", label: "Adventure" },
        { value: "cultura", label: "Culture" },
        { value: "praia", label: "Beach" },
        { value: "luxo", label: "Luxury" },
        { value: "economico", label: "Budget" },
        { value: "gastronomia", label: "Gastronomy" },
      ],
    },
    sobre: {
      badge: "Our story",
      title: "We are Rafa & Fe",
      p1: "It all started with two passports, infinite curiosity and the desire to explore the world together. What was just a passion for traveling quickly became a purpose: to inspire and help other people live experiences as remarkable as ours.",
      p2: "After exploring dozens of countries and sharing hundreds of tips along the way, we created PassaporteRF — a space where we bring together everything we've learned in personalized itineraries, authentic content and carefully selected recommendations.",
      p3: "Today, we live to travel — and to transform every detail of your next trip into an unforgettable experience.",
      valoresTitle: "Our values",
      valoresSubtitle: "What guides every itinerary and every recommendation",
      valores: [
        {
          titulo: "Authenticity",
          descricao:
            "We only recommend what we've personally tested and experienced. No generic tips.",
        },
        {
          titulo: "Quality",
          descricao:
            "Every detail matters. From the hotel to the restaurant, everything is thoughtfully chosen.",
        },
        {
          titulo: "Experience",
          descricao:
            "Trips that create memories. Our focus is to make every trip something unforgettable.",
        },
      ],
      trajetoriaTitle: "Our journey",
      trajetoriaSubtitle: "Milestones that made PassaporteRF what we are today",
      timeline: [
        { ano: "2023", evento: "First trip together" },
        { ano: "2024", evento: "13 countries visited in the year" },
        { ano: "2025", evento: "Creation of PassaporteRF" },
        { ano: "2026", evento: "+100 Itineraries Delivered" },
      ],
      ctaTitle: "Want to travel with us?",
      ctaSubtitle:
        "We'll build the perfect itinerary for you. Tell us about your dream trip!",
      ctaButton: "Create my itinerary",
    },
    roteiros: {
      badge: "+500 itineraries delivered",
      title: "Our itinerary, your way",
      subtitle:
        "Every trip is unique and your itinerary should be too. We build a complete, personalized plan full of tips so you can make the most of every moment.",
      servicosTitle: "Choose the ideal service",
      servicosSubtitle: "Options for every moment of your trip",
      inclusosTitle: "What's included",
      naoInclusosTitle: "What's not included",
      formTitle: "Build your itinerary",
      formSubtitle: "Fill out the form and receive a personalized proposal",
      stats: ["+30 destinations", "Delivery within 7 days", "WhatsApp support"],
      servicos: [
        {
          titulo: "Personalized Itinerary",
          descricao: "Complete and exclusive itinerary for your trip",
          preco: "Starting at R$ 297",
          badge: "Best seller",
        },
        {
          titulo: "Express Consulting",
          descricao: "30-minute call with personalized tips",
          preco: "R$ 147",
          badge: null,
        },
        {
          titulo: "Itinerary Review",
          descricao: "Already have an itinerary? We'll improve it for you",
          preco: "R$ 97",
          badge: null,
        },
      ],
      incluso: [
        "Day-by-day itinerary",
        "Hotel and restaurant recommendations",
        "Transportation tips",
        "Interactive map",
        "2 rounds of revisions",
        "WhatsApp support",
      ],
      naoIncluso: [
        "Hotel or flight bookings",
        "Travel insurance",
        "Transfers and local transport",
        "Entrance tickets",
      ],
    },
    contato: {
      title: "Contact us",
      subtitle:
        "Questions, suggestions or want to talk about partnerships? We're here to help.",
      canaisTitle: "Our channels",
      resposta: "Response within",
      respostaStrong: "48h",
      faqTitle: "Frequently asked questions",
      faqs: [
        {
          question: "How does the personalized itinerary work?",
          answer:
            "You fill out a form with your preferences (destination, dates, budget, travel style) and we build a complete and exclusive itinerary for you. Each itinerary is unique and takes into account what you love to do.",
        },
        {
          question: "How long does it take to receive the itinerary?",
          answer:
            "After payment, form completion and all necessary information received, the itinerary is ready within 5 business days. For urgent orders, we have the Express Consulting option.",
        },
        {
          question: "Can I request changes to the itinerary?",
          answer:
            "Yes! After delivery, you are entitled to 2 rounds of revisions at no extra cost. We want the itinerary to be perfect for you.",
        },
        {
          question: "Do you book hotels and tours?",
          answer:
            "We recommend the best hotels, restaurants and experiences with direct booking links, but the booking itself is done by you. This way you have full control.",
        },
        {
          question: "How does express consulting work?",
          answer:
            "It's a 30-minute video call where we answer all your questions about the destination, give personalized tips and help you build the basic structure of the itinerary.",
        },
        {
          question: "What payment methods are accepted?",
          answer:
            "We accept PIX, credit card, bank transfer and Revolut.",
        },
      ],
    },
    parcerias: {
      badge: "Partner with us",
      title: "Let's work together?",
      subtitle:
        "We connect amazing brands with an audience passionate about travel. If you want real reach and authentic content, let's talk.",
      formatosTitle: "Partnership formats",
      formatosSubtitle: "Different ways to work together",
      metricsTitle: "Numbers and audience",
      metricsSubtitle: "Real reach and engagement data",
      parceirosTitle: "Partners",
      parceirosSubtitle: "Brands that trust our work",
      ctaTitle: "Want to know more?",
      ctaSubtitle:
        "Request our media kit and receive all data, case studies and available partnership formats.",
      formatos: [
        {
          titulo: "Hotels & Accommodations",
          descricao: "Stays, reviews and exclusive content",
        },
        {
          titulo: "Restaurants & Experiences",
          descricao: "Tastings, tours and full coverage",
        },
        {
          titulo: "Brands & Products",
          descricao: "Sponsored posts, unboxing and creative campaigns",
        },
      ],
      metricas: [
        { valor: "+3M", label: "Monthly Views" },
        { valor: "+100k", label: "Monthly Interactions" },
        { valor: "+1.2M", label: "Accounts Reached" },
        { valor: "Reach", label: "Brazil, USA, Europe" },
      ],
    },
    roteiroForm: {
      title: "Fill in your details",
      destino: "Destination",
      destinoPlaceholder: "E.g.: Paris, Tuscany, Japan...",
      datas: "Dates / Duration",
      datasPlaceholder: "E.g.: July 15-25 or 10 days",
      orcamento: "Budget",
      estilo: "Travel style",
      selecione: "Select",
      pessoas: "Number of people",
      pessoasPlaceholder: "E.g.: 2",
      preferencias: "Preferences (optional)",
      preferenciasPlaceholder: "Tell us what you love doing when you travel...",
      email: "Email",
      emailPlaceholder: "your@email.com",
      whatsapp: "WhatsApp",
      whatsappPlaceholder: "(11) 99999-9999",
      submit: "Request itinerary",
      previewTitle: "Preview",
      summaryTitle: "Order summary",
      previewEmpty: "Fill out the form to see a preview of your order here.",
      pedidoEnviado: "Order sent! We'll be in touch soon.",
      dica: "Tip",
      dicaText:
        "The more details you fill in, the more personalized your itinerary will be. Don't hold back on preferences!",
      toast: "Order sent successfully! We'll be in touch soon.",
      orcamentoLabels: {
        economico: "Budget",
        moderado: "Moderate",
        confortavel: "Comfortable",
        luxo: "Luxury",
      },
      estiloLabels: {
        romantico: "Romantic",
        aventura: "Adventure",
        cultural: "Cultural",
        relaxante: "Relaxing",
        gastronomico: "Gastronomic",
        familia: "Family",
        misto: "Mixed",
      },
    },
    contatoForm: {
      title: "Send your message",
      nome: "Name",
      nomePlaceholder: "Your name",
      email: "Email",
      assunto: "Subject",
      assuntoPlaceholder: "Select the subject",
      mensagem: "Message",
      mensagemPlaceholder: "How can we help?",
      submit: "Send message",
      toast: "Message sent successfully! We'll respond within 48h.",
      assuntos: [
        { value: "roteiro", label: "Itinerary question" },
        { value: "parceria", label: "Partnership" },
        { value: "sugestao", label: "Suggestion" },
        { value: "outro", label: "Other" },
      ],
    },
    parceriaDialog: {
      button: "Request media kit",
      title: "Request media kit",
      desc: "Fill in your details and we'll get in touch.",
      nome: "Name",
      nomePlaceholder: "Your name",
      email: "Email",
      empresa: "Company (optional)",
      empresaPlaceholder: "Company name",
      mensagem: "Message",
      mensagemPlaceholder: "Tell us about the partnership you have in mind...",
      submit: "Send",
      toast: "Request sent successfully! We'll be in touch soon.",
    },
  } as const satisfies TranslationShape;

  const es = {
    nav: {
      destinos: "Destinos",
      roteiros: "Itinerarios",
      sobre: "Sobre nosotros",
      parcerias: "Asociaciones",
      contato: "Contacto",
      criarRoteiro: "Crear mi itinerario",
    },
    hero: {
      badge: "Itinerarios personalizados por PassaporteRF",
      title: "Convierte sueños en",
      titleHighlight: "itinerarios inolvidables",
      subtitle:
        "Somos Rafa & Fe y te ayudamos a vivir viajes únicos, con itinerarios 100% personalizados.",
      explorar: "Explorar destinos",
      criar: "Crear mi itinerario",
    },
    howItWorks: {
      title: "Cómo funciona",
      steps: [
        {
          title: "Completa el formulario",
          description: "Cuéntanos tu destino, fechas y estilo de viaje.",
        },
        {
          title: "Creamos tu itinerario",
          description:
            "Diseñamos un plan exclusivo con consejos, hoteles y experiencias.",
        },
        {
          title: "Ajustamos juntos",
          description:
            "Tú revisas y nosotros ajustamos hasta que quede perfecto.",
        },
        {
          title: "Embarca tranquilo",
          description: "Viaja con todo planeado y disfruta cada momento.",
        },
      ],
    },
    highlights: {
      items: [
        {
          title: "Hoteles premium",
          description:
            "Seleccionamos los mejores alojamientos con la mejor relación calidad-precio.",
        },
        {
          title: "Experiencias culturales",
          description:
            "Itinerarios que van más allá de lo obvio, con experiencias auténticas.",
        },
        {
          title: "Consejos prácticos",
          description:
            "Todo lo que necesitas saber antes y durante el viaje.",
        },
      ],
    },
    socialProof: {
      title: "Lo que dicen nuestros viajeros",
      subtitle: "Experiencias reales de quienes viajaron con nosotros",
    },
    trendingDestinations: {
      title: "Destinos de moda",
      subtitle: "Los lugares que están en el radar de los viajeros",
      verTodos: "Ver todos los destinos",
    },
    consultoria: {
      title: "Consultoría de itinerarios",
      subtitle:
        "Cuéntanos tu destino soñado y lo planificamos todo para ti",
      formTitle: "Solicitar itinerario personalizado",
      formEmail: "Envía directo a passaporterf@gmail.com",
      destino: "Destino",
      destinoPlaceholder: "Ej: París, Japón...",
      datas: "Fechas / Duración",
      datasPlaceholder: "Ej: 10 días en julio",
      pessoas: "Personas",
      estilo: "Estilo de viaje",
      selecione: "Seleccionar",
      estilos: {
        romantico: "Romántico",
        aventura: "Aventura",
        cultural: "Cultural",
        relaxante: "Relajante",
        gastronomico: "Gastronómico",
        misto: "Mixto",
      },
      observacoes: "¿Algo más que debamos saber? (opcional)",
      observacoesPlaceholder:
        "Preferencias, alergias, presupuesto, ocasión especial...",
      email: "Tu email",
      whatsapp: "WhatsApp",
      submit: "Solicitar mi itinerario",
      toast: "¡Abriendo tu email para enviar la solicitud!",
    },
    ebooks: {
      title: "Nuestros e-books",
      subtitle: "Guías completas para planear tu viaje con confianza",
      baixar: "Descargar e-book",
      dialogDesc: "Ingresa tu email y te enviaremos el e-book gratis.",
      emailLabel: "Tu email",
      newsletter:
        "Quiero recibir novedades y promociones exclusivas de PassaporteRF por email",
      quero: "Quiero mi e-book",
      toast: "¡Abriendo tu email para solicitar el e-book!",
      items: [
        {
          title: "Guía Europa para Parejas",
          description:
            "Los mejores itinerarios románticos por Europa, con consejos de hoteles, restaurantes y experiencias para disfrutar en pareja.",
          pages: "48 páginas",
          badge: "Más descargado",
        },
        {
          title: "Japón Sin Complicaciones",
          description:
            "Todo lo que necesitas saber para planear tu viaje a Japón: transporte, comida, cultura y consejos prácticos.",
          pages: "36 páginas",
          badge: "Nuevo",
        },
        {
          title: "Viaja Gastando Poco",
          description:
            "Cómo viajar con presupuesto limitado sin renunciar a buenas experiencias. Consejos reales probados por nosotros.",
          pages: "28 páginas",
          badge: "Gratis",
        },
      ],
    },
    footer: {
      desc: "Tu guía de viajes para explorar el mundo con itinerarios personalizados y consejos de apasionados viajeros.",
      links: "Links del sitio",
      redes: "Redes Sociales",
      contato: "Contacto",
      direitos: "Todos los derechos reservados.",
      seguirNo: "Seguir en",
    },
    metrics: {
      visualizacoes: "Visualizaciones Mensuales",
      interacoes: "Interacciones Mensuales",
      alcancadas: "Cuentas Alcanzadas",
      proximoDestino: "Próximo Destino",
      destinosVisitados: "Destinos Visitados",
    },
    destinationCard: {
      verMais: "Ver más",
    },
    destinos: {
      title: "Nuestros Destinos",
      subtitle:
        "Descubre lugares increíbles por el mundo y encuentra el viaje perfecto para tu estilo",
      buscar: "Buscar ciudad o país...",
      tipo: "Tipo:",
      limpar: "Limpiar filtros",
      encontrado: "destino encontrado",
      encontrados: "destinos encontrados",
      nenhum: "Ningún destino encontrado",
      nenhumDesc:
        "Intenta ajustar los filtros o buscar otro término. ¡Siempre estamos añadiendo nuevos destinos!",
      continents: [
        { value: "Todos", label: "Todos" },
        { value: "Europa", label: "Europa" },
        { value: "Asia", label: "Asia" },
        { value: "America do Norte", label: "América del Norte" },
        { value: "Africa", label: "África" },
      ],
      tags: [
        { value: "romantico", label: "Romántico" },
        { value: "aventura", label: "Aventura" },
        { value: "cultura", label: "Cultura" },
        { value: "praia", label: "Playa" },
        { value: "luxo", label: "Lujo" },
        { value: "economico", label: "Económico" },
        { value: "gastronomia", label: "Gastronomía" },
      ],
    },
    sobre: {
      badge: "Nuestra historia",
      title: "Somos Rafa & Fe",
      p1: "Todo comenzó con dos pasaportes, una curiosidad infinita y el deseo de explorar el mundo juntos. Lo que era solo una pasión por viajar rápidamente se transformó en un propósito: inspirar y ayudar a otras personas a vivir experiencias tan memorables como las nuestras.",
      p2: "Después de explorar decenas de países y compartir cientos de consejos a lo largo del camino, creamos PassaporteRF — un espacio donde reunimos todo lo que aprendimos en itinerarios personalizados, contenido auténtico y recomendaciones cuidadosamente seleccionadas.",
      p3: "Hoy vivimos de viajar — y de transformar cada detalle de tu próximo viaje en una experiencia inolvidable.",
      valoresTitle: "Nuestros valores",
      valoresSubtitle: "Lo que guía cada itinerario y cada recomendación",
      valores: [
        {
          titulo: "Autenticidad",
          descricao:
            "Solo recomendamos lo que hemos probado y vivido personalmente. Nada de consejos genéricos.",
        },
        {
          titulo: "Calidad",
          descricao:
            "Cada detalle importa. Desde el hotel hasta el restaurante, todo se elige con cuidado.",
        },
        {
          titulo: "Experiencia",
          descricao:
            "Viajes que crean recuerdos. Nuestro enfoque es hacer cada viaje algo inolvidable.",
        },
      ],
      trajetoriaTitle: "Nuestra trayectoria",
      trajetoriaSubtitle:
        "Hitos que hicieron de PassaporteRF lo que somos hoy",
      timeline: [
        { ano: "2023", evento: "Primer viaje juntos" },
        { ano: "2024", evento: "13 países visitados en el año" },
        { ano: "2025", evento: "Creación de PassaporteRF" },
        { ano: "2026", evento: "+100 Itinerarios Entregados" },
      ],
      ctaTitle: "¿Quieres viajar con nosotros?",
      ctaSubtitle: "Creamos el itinerario perfecto para ti. ¡Cuéntanos tu viaje soñado!",
      ctaButton: "Crear mi itinerario",
    },
    roteiros: {
      badge: "+500 itinerarios entregados",
      title: "Nuestro itinerario, a tu manera",
      subtitle:
        "Cada viaje es único y tu itinerario también debe serlo. Creamos un plan completo, personalizado y lleno de consejos para que aproveches al máximo cada momento.",
      servicosTitle: "Elige el servicio ideal",
      servicosSubtitle: "Opciones para cada momento de tu viaje",
      inclusosTitle: "Qué está incluido",
      naoInclusosTitle: "Qué no está incluido",
      formTitle: "Arma tu itinerario",
      formSubtitle: "Llena el formulario y recibe una propuesta personalizada",
      stats: ["+30 destinos", "Entrega en hasta 7 días", "Soporte por WhatsApp"],
      servicos: [
        {
          titulo: "Itinerario Personalizado",
          descricao: "Itinerario completo y exclusivo para tu viaje",
          preco: "Desde R$ 297",
          badge: "Más vendido",
        },
        {
          titulo: "Consultoría Express",
          descricao: "30 minutos de llamada con consejos personalizados",
          preco: "R$ 147",
          badge: null,
        },
        {
          titulo: "Revisión de Itinerario",
          descricao: "¿Ya tienes itinerario? Lo mejoramos para ti",
          preco: "R$ 97",
          badge: null,
        },
      ],
      incluso: [
        "Itinerario día a día",
        "Recomendaciones de hoteles y restaurantes",
        "Consejos de transporte",
        "Mapa interactivo",
        "2 rondas de ajustes",
        "Soporte por WhatsApp",
      ],
      naoIncluso: [
        "Reservas de hotel o vuelo",
        "Seguro de viaje",
        "Transfers y transporte local",
        "Entradas a atracciones",
      ],
    },
    contato: {
      title: "Contáctanos",
      subtitle:
        "¿Preguntas, sugerencias o quieres hablar sobre asociaciones? Estamos aquí para ayudar.",
      canaisTitle: "Nuestros canales",
      resposta: "Respuesta en hasta",
      respostaStrong: "48h",
      faqTitle: "Preguntas frecuentes",
      faqs: [
        {
          question: "¿Cómo funciona el itinerario personalizado?",
          answer:
            "Completas un formulario con tus preferencias (destino, fechas, presupuesto, estilo de viaje) y nosotros creamos un itinerario completo y exclusivo para ti. Cada itinerario es único y tiene en cuenta lo que más te gusta hacer.",
        },
        {
          question: "¿Cuánto tiempo tarda en recibir el itinerario?",
          answer:
            "Después del pago, el formulario completado y toda la información necesaria recibida, el itinerario está listo en hasta 5 días hábiles. Para pedidos urgentes, tenemos la opción de Consultoría Express.",
        },
        {
          question: "¿Puedo pedir cambios en el itinerario?",
          answer:
            "¡Sí! Después de la entrega, tienes derecho a 2 rondas de ajustes sin costo adicional. Queremos que el itinerario sea perfecto para ti.",
        },
        {
          question: "¿Reservan hoteles y tours?",
          answer:
            "Recomendamos los mejores hoteles, restaurantes y experiencias con enlaces directos para reservar, pero la reserva la haces tú. Así tienes control total.",
        },
        {
          question: "¿Cómo funciona la consultoría express?",
          answer:
            "Es una videollamada de 30 minutos donde respondemos todas tus dudas sobre el destino, damos consejos personalizados y ayudamos a armar la estructura básica del itinerario.",
        },
        {
          question: "¿Qué métodos de pago se aceptan?",
          answer:
            "Aceptamos PIX, tarjeta de crédito, transferencia bancaria y Revolut.",
        },
      ],
    },
    parcerias: {
      badge: "Colabora con nosotros",
      title: "¿Trabajemos juntos?",
      subtitle:
        "Conectamos marcas increíbles con una audiencia apasionada por los viajes. Si quieres alcance real y contenido auténtico, hablemos.",
      formatosTitle: "Formatos de asociación",
      formatosSubtitle: "Diferentes formas de trabajar juntos",
      metricsTitle: "Números y audiencia",
      metricsSubtitle: "Datos reales de alcance y engagement",
      parceirosTitle: "Socios",
      parceirosSubtitle: "Marcas que confían en nuestro trabajo",
      ctaTitle: "¿Quieres saber más?",
      ctaSubtitle:
        "Solicita nuestro kit de medios y recibe todos los datos, casos y formatos de asociación disponibles.",
      formatos: [
        {
          titulo: "Hoteles y Alojamientos",
          descricao: "Estadías, reseñas y contenido exclusivo",
        },
        {
          titulo: "Restaurantes y Experiencias",
          descricao: "Degustaciones, tours y cobertura completa",
        },
        {
          titulo: "Marcas y Productos",
          descricao: "Publicidad, unboxing y campañas creativas",
        },
      ],
      metricas: [
        { valor: "+3M", label: "Visualizaciones Mensuales" },
        { valor: "+100mil", label: "Interacciones Mensuales" },
        { valor: "+1.2M", label: "Cuentas Alcanzadas" },
        { valor: "Alcance", label: "Brasil, EE.UU., Europa" },
      ],
    },
    roteiroForm: {
      title: "Completa tus datos",
      destino: "Destino",
      destinoPlaceholder: "Ej: París, Toscana, Japón...",
      datas: "Fechas / Duración",
      datasPlaceholder: "Ej: 15 al 25 de julio o 10 días",
      orcamento: "Presupuesto",
      estilo: "Estilo de viaje",
      selecione: "Seleccionar",
      pessoas: "Número de personas",
      pessoasPlaceholder: "Ej: 2",
      preferencias: "Preferencias (opcional)",
      preferenciasPlaceholder:
        "Cuéntanos qué te gusta hacer cuando viajas...",
      email: "Email",
      emailPlaceholder: "tu@email.com",
      whatsapp: "WhatsApp",
      whatsappPlaceholder: "(11) 99999-9999",
      submit: "Solicitar itinerario",
      previewTitle: "Vista previa",
      summaryTitle: "Resumen del pedido",
      previewEmpty:
        "Llena el formulario para ver una vista previa de tu pedido aquí.",
      pedidoEnviado: "¡Pedido enviado! Nos pondremos en contacto pronto.",
      dica: "Consejo",
      dicaText:
        "Cuantos más detalles llenes, más personalizado será tu itinerario. ¡No escatimes en preferencias!",
      toast: "¡Pedido enviado con éxito! Nos pondremos en contacto pronto.",
      orcamentoLabels: {
        economico: "Económico",
        moderado: "Moderado",
        confortavel: "Confortable",
        luxo: "Lujo",
      },
      estiloLabels: {
        romantico: "Romántico",
        aventura: "Aventura",
        cultural: "Cultural",
        relaxante: "Relajante",
        gastronomico: "Gastronómico",
        familia: "Familia",
        misto: "Mixto",
      },
    },
    contatoForm: {
      title: "Envía tu mensaje",
      nome: "Nombre",
      nomePlaceholder: "Tu nombre",
      email: "Email",
      assunto: "Asunto",
      assuntoPlaceholder: "Seleccionar el asunto",
      mensagem: "Mensaje",
      mensagemPlaceholder: "¿Cómo podemos ayudarte?",
      submit: "Enviar mensaje",
      toast: "¡Mensaje enviado con éxito! Responderemos en hasta 48h.",
      assuntos: [
        { value: "roteiro", label: "Pregunta sobre itinerario" },
        { value: "parceria", label: "Asociación" },
        { value: "sugestao", label: "Sugerencia" },
        { value: "outro", label: "Otro" },
      ],
    },
    parceriaDialog: {
      button: "Solicitar kit de medios",
      title: "Solicitar kit de medios",
      desc: "Llena tus datos y nos pondremos en contacto.",
      nome: "Nombre",
      nomePlaceholder: "Tu nombre",
      email: "Email",
      empresa: "Empresa (opcional)",
      empresaPlaceholder: "Nombre de la empresa",
      mensagem: "Mensaje",
      mensagemPlaceholder:
        "Cuéntanos sobre la colaboración que tienes en mente...",
      submit: "Enviar",
      toast:
        "¡Solicitud enviada con éxito! Nos pondremos en contacto pronto.",
    },
  } as const satisfies TranslationShape;

  const fr = {
    nav: {
      destinos: "Destinations",
      roteiros: "Itinéraires",
      sobre: "À propos",
      parcerias: "Partenariats",
      contato: "Contact",
      criarRoteiro: "Créer mon itinéraire",
    },
    hero: {
      badge: "Itinéraires personnalisés par PassaporteRF",
      title: "Transformez les rêves en",
      titleHighlight: "itinéraires inoubliables",
      subtitle:
        "Nous sommes Rafa & Fe et nous vous aidons à vivre des voyages uniques, avec des itinéraires 100% personnalisés.",
      explorar: "Explorer les destinations",
      criar: "Créer mon itinéraire",
    },
    howItWorks: {
      title: "Comment ça marche",
      steps: [
        {
          title: "Remplissez le formulaire",
          description: "Parlez-nous de votre destination, dates et style de voyage.",
        },
        {
          title: "Nous créons votre itinéraire",
          description: "Nous concevons un plan exclusif avec conseils, hôtels et expériences.",
        },
        {
          title: "Nous ajustons ensemble",
          description: "Vous relisez et nous ajustons jusqu'à la perfection.",
        },
        {
          title: "Embarquez sereinement",
          description: "Voyagez avec tout planifié et profitez de chaque moment.",
        },
      ],
    },
    highlights: {
      items: [
        {
          title: "Hôtels premium",
          description: "Nous sélectionnons les meilleurs hébergements avec le meilleur rapport qualité-prix.",
        },
        {
          title: "Expériences culturelles",
          description: "Des itinéraires qui vont au-delà de l'évident, avec des expériences authentiques.",
        },
        {
          title: "Conseils pratiques",
          description: "Tout ce que vous devez savoir avant et pendant le voyage.",
        },
      ],
    },
    socialProof: {
      title: "Ce que disent nos voyageurs",
      subtitle: "Expériences réelles de ceux qui ont voyagé avec nous",
    },
    trendingDestinations: {
      title: "Destinations tendance",
      subtitle: "Les endroits sur le radar des voyageurs",
      verTodos: "Voir toutes les destinations",
    },
    consultoria: {
      title: "Consultation d'itinéraires",
      subtitle: "Parlez-nous de votre destination de rêve et nous planifions tout pour vous",
      formTitle: "Demander un itinéraire personnalisé",
      formEmail: "Envoyé directement à passaporterf@gmail.com",
      destino: "Destination",
      destinoPlaceholder: "Ex : Paris, Japon...",
      datas: "Dates / Durée",
      datasPlaceholder: "Ex : 10 jours en juillet",
      pessoas: "Personnes",
      estilo: "Style de voyage",
      selecione: "Sélectionner",
      estilos: {
        romantico: "Romantique",
        aventura: "Aventure",
        cultural: "Culturel",
        relaxante: "Détente",
        gastronomico: "Gastronomique",
        misto: "Mixte",
      },
      observacoes: "Autre chose que nous devrions savoir ? (optionnel)",
      observacoesPlaceholder: "Préférences, allergies, budget, occasion spéciale...",
      email: "Votre email",
      whatsapp: "WhatsApp",
      submit: "Demander mon itinéraire",
      toast: "Ouverture de votre email pour envoyer la demande !",
    },
    ebooks: {
      title: "Nos e-books",
      subtitle: "Des guides complets pour planifier votre voyage en toute confiance",
      baixar: "Télécharger l'e-book",
      dialogDesc: "Entrez votre email et nous vous enverrons l'e-book gratuitement.",
      emailLabel: "Votre email",
      newsletter: "Je veux recevoir les nouveautés et promotions exclusives de PassaporteRF par email",
      quero: "Je veux mon e-book",
      toast: "Ouverture de votre email pour demander l'e-book !",
      items: [
        {
          title: "Guide Europe pour Couples",
          description: "Les meilleurs itinéraires romantiques en Europe, avec des conseils d'hôtels, restaurants et expériences pour profiter en couple.",
          pages: "48 pages",
          badge: "Plus téléchargé",
        },
        {
          title: "Japon Sans Tracas",
          description: "Tout ce que vous devez savoir pour planifier votre voyage au Japon : transport, nourriture, culture et conseils pratiques.",
          pages: "36 pages",
          badge: "Nouveau",
        },
        {
          title: "Voyager Petit Budget",
          description: "Comment voyager avec un budget limité sans renoncer aux bonnes expériences. Vrais conseils testés par nous.",
          pages: "28 pages",
          badge: "Gratuit",
        },
      ],
    },
    footer: {
      desc: "Votre guide de voyage pour explorer le monde avec des itinéraires personnalisés et des conseils de passionnés de voyage.",
      links: "Liens du site",
      redes: "Réseaux Sociaux",
      contato: "Contact",
      direitos: "Tous droits réservés.",
      seguirNo: "Suivre sur",
    },
    metrics: {
      visualizacoes: "Vues Mensuelles",
      interacoes: "Interactions Mensuelles",
      alcancadas: "Comptes Atteints",
      proximoDestino: "Prochaine Destination",
      destinosVisitados: "Destinations Visitées",
    },
    destinationCard: {
      verMais: "Voir plus",
    },
    destinos: {
      title: "Nos Destinations",
      subtitle: "Découvrez des endroits incroyables dans le monde et trouvez le voyage parfait pour votre style",
      buscar: "Rechercher une ville ou un pays...",
      tipo: "Type :",
      limpar: "Effacer les filtres",
      encontrado: "destination trouvée",
      encontrados: "destinations trouvées",
      nenhum: "Aucune destination trouvée",
      nenhumDesc: "Essayez d'ajuster les filtres ou de chercher un autre terme. Nous ajoutons toujours de nouvelles destinations !",
      continents: [
        { value: "Todos", label: "Tous" },
        { value: "Europa", label: "Europe" },
        { value: "Asia", label: "Asie" },
        { value: "America do Norte", label: "Amérique du Nord" },
        { value: "Africa", label: "Afrique" },
      ],
      tags: [
        { value: "romantico", label: "Romantique" },
        { value: "aventura", label: "Aventure" },
        { value: "cultura", label: "Culture" },
        { value: "praia", label: "Plage" },
        { value: "luxo", label: "Luxe" },
        { value: "economico", label: "Budget" },
        { value: "gastronomia", label: "Gastronomie" },
      ],
    },
    sobre: {
      badge: "Notre histoire",
      title: "Nous sommes Rafa & Fe",
      p1: "Tout a commencé avec deux passeports, une curiosité infinie et le désir d'explorer le monde ensemble. Ce qui n'était qu'une passion pour le voyage est rapidement devenu un but : inspirer et aider d'autres personnes à vivre des expériences aussi mémorables que les nôtres.",
      p2: "Après avoir exploré des dizaines de pays et partagé des centaines de conseils en chemin, nous avons créé PassaporteRF — un espace où nous réunissons tout ce que nous avons appris en itinéraires personnalisés, contenus authentiques et recommandations soigneusement sélectionnées.",
      p3: "Aujourd'hui, nous vivons de voyager — et de transformer chaque détail de votre prochain voyage en une expérience inoubliable.",
      valoresTitle: "Nos valeurs",
      valoresSubtitle: "Ce qui guide chaque itinéraire et chaque recommandation",
      valores: [
        {
          titulo: "Authenticité",
          descricao: "Nous recommandons uniquement ce que nous avons personnellement testé et vécu. Pas de conseils génériques.",
        },
        {
          titulo: "Qualité",
          descricao: "Chaque détail compte. De l'hôtel au restaurant, tout est pensé avec soin.",
        },
        {
          titulo: "Expérience",
          descricao: "Des voyages qui créent des souvenirs. Notre objectif est de rendre chaque trip inoubliable.",
        },
      ],
      trajetoriaTitle: "Notre parcours",
      trajetoriaSubtitle: "Les jalons qui ont fait de PassaporteRF ce que nous sommes aujourd'hui",
      timeline: [
        { ano: "2023", evento: "Premier voyage ensemble" },
        { ano: "2024", evento: "13 pays visités dans l'année" },
        { ano: "2025", evento: "Création de PassaporteRF" },
        { ano: "2026", evento: "+100 Itinéraires Livrés" },
      ],
      ctaTitle: "Vous voulez voyager avec nous ?",
      ctaSubtitle: "Nous créons l'itinéraire parfait pour vous. Parlez-nous de votre voyage de rêve !",
      ctaButton: "Créer mon itinéraire",
    },
    roteiros: {
      badge: "+500 itinéraires livrés",
      title: "Notre itinéraire, à votre façon",
      subtitle: "Chaque voyage est unique et votre itinéraire doit l'être aussi. Nous créons un plan complet, personnalisé et plein de conseils pour profiter au maximum de chaque moment.",
      servicosTitle: "Choisissez le service idéal",
      servicosSubtitle: "Options pour chaque moment de votre voyage",
      inclusosTitle: "Ce qui est inclus",
      naoInclusosTitle: "Ce qui n'est pas inclus",
      formTitle: "Construisez votre itinéraire",
      formSubtitle: "Remplissez le formulaire et recevez une proposition personnalisée",
      stats: ["+30 destinations", "Livraison sous 7 jours", "Support via WhatsApp"],
      servicos: [
        {
          titulo: "Itinéraire Personnalisé",
          descricao: "Itinéraire complet et exclusif pour votre voyage",
          preco: "À partir de R$ 297",
          badge: "Best-seller",
        },
        {
          titulo: "Consultation Express",
          descricao: "Appel de 30 minutes avec conseils personnalisés",
          preco: "R$ 147",
          badge: null,
        },
        {
          titulo: "Révision d'Itinéraire",
          descricao: "Vous avez déjà un itinéraire ? Nous l'améliorons pour vous",
          preco: "R$ 97",
          badge: null,
        },
      ],
      incluso: [
        "Itinéraire jour par jour",
        "Recommandations d'hôtels et restaurants",
        "Conseils de transport",
        "Carte interactive",
        "2 tours de révisions",
        "Support via WhatsApp",
      ],
      naoIncluso: [
        "Réservations d'hôtel ou de vol",
        "Assurance voyage",
        "Transferts et transport local",
        "Billets d'entrée",
      ],
    },
    contato: {
      title: "Contactez-nous",
      subtitle: "Questions, suggestions ou vous voulez parler de partenariats ? Nous sommes là pour vous aider.",
      canaisTitle: "Nos canaux",
      resposta: "Réponse sous",
      respostaStrong: "48h",
      faqTitle: "Questions fréquentes",
      faqs: [
        {
          question: "Comment fonctionne l'itinéraire personnalisé ?",
          answer: "Vous remplissez un formulaire avec vos préférences (destination, dates, budget, style de voyage) et nous créons un itinéraire complet et exclusif pour vous. Chaque itinéraire est unique et tient compte de ce que vous aimez faire.",
        },
        {
          question: "Combien de temps faut-il pour recevoir l'itinéraire ?",
          answer: "Après le paiement, le formulaire rempli et toutes les informations nécessaires reçues, l'itinéraire est prêt sous 5 jours ouvrables. Pour les commandes urgentes, nous avons l'option Consultation Express.",
        },
        {
          question: "Puis-je demander des modifications à l'itinéraire ?",
          answer: "Oui ! Après la livraison, vous avez droit à 2 tours de révisions sans frais supplémentaires. Nous voulons que l'itinéraire soit parfait pour vous.",
        },
        {
          question: "Réservez-vous les hôtels et les visites ?",
          answer: "Nous recommandons les meilleurs hôtels, restaurants et expériences avec des liens directs pour réserver, mais la réservation est faite par vous. Ainsi vous avez un contrôle total.",
        },
        {
          question: "Comment fonctionne la consultation express ?",
          answer: "C'est un appel vidéo de 30 minutes où nous répondons à toutes vos questions sur la destination, donnons des conseils personnalisés et aidons à construire la structure de base de l'itinéraire.",
        },
        {
          question: "Quels modes de paiement sont acceptés ?",
          answer: "Nous acceptons PIX, carte de crédit, virement bancaire et Revolut.",
        },
      ],
    },
    parcerias: {
      badge: "Partenariat avec nous",
      title: "Travaillons ensemble ?",
      subtitle: "Nous connectons des marques incroyables avec un public passionné de voyage. Si vous voulez une portée réelle et un contenu authentique, parlons-en.",
      formatosTitle: "Formats de partenariat",
      formatosSubtitle: "Différentes façons de travailler ensemble",
      metricsTitle: "Chiffres et audience",
      metricsSubtitle: "Données réelles de portée et d'engagement",
      parceirosTitle: "Partenaires",
      parceirosSubtitle: "Marques qui font confiance à notre travail",
      ctaTitle: "Vous voulez en savoir plus ?",
      ctaSubtitle: "Demandez notre kit média et recevez toutes les données, études de cas et formats de partenariat disponibles.",
      formatos: [
        {
          titulo: "Hôtels & Hébergements",
          descricao: "Séjours, avis et contenu exclusif",
        },
        {
          titulo: "Restaurants & Expériences",
          descricao: "Dégustations, visites et couverture complète",
        },
        {
          titulo: "Marques & Produits",
          descricao: "Posts sponsorisés, unboxing et campagnes créatives",
        },
      ],
      metricas: [
        { valor: "+3M", label: "Vues Mensuelles" },
        { valor: "+100k", label: "Interactions Mensuelles" },
        { valor: "+1.2M", label: "Comptes Atteints" },
        { valor: "Portée", label: "Brésil, USA, Europe" },
      ],
    },
    roteiroForm: {
      title: "Remplissez vos coordonnées",
      destino: "Destination",
      destinoPlaceholder: "Ex : Paris, Toscane, Japon...",
      datas: "Dates / Durée",
      datasPlaceholder: "Ex : 15-25 juillet ou 10 jours",
      orcamento: "Budget",
      estilo: "Style de voyage",
      selecione: "Sélectionner",
      pessoas: "Nombre de personnes",
      pessoasPlaceholder: "Ex : 2",
      preferencias: "Préférences (optionnel)",
      preferenciasPlaceholder: "Dites-nous ce que vous aimez faire en voyage...",
      email: "Email",
      emailPlaceholder: "votre@email.com",
      whatsapp: "WhatsApp",
      whatsappPlaceholder: "(11) 99999-9999",
      submit: "Demander un itinéraire",
      previewTitle: "Aperçu",
      summaryTitle: "Récapitulatif",
      previewEmpty: "Remplissez le formulaire pour voir un aperçu de votre commande ici.",
      pedidoEnviado: "Commande envoyée ! Nous vous contacterons bientôt.",
      dica: "Conseil",
      dicaText: "Plus vous remplissez de détails, plus votre itinéraire sera personnalisé. N'hésitez pas sur les préférences !",
      toast: "Commande envoyée avec succès ! Nous vous contacterons bientôt.",
      orcamentoLabels: {
        economico: "Économique",
        moderado: "Modéré",
        confortavel: "Confortable",
        luxo: "Luxe",
      },
      estiloLabels: {
        romantico: "Romantique",
        aventura: "Aventure",
        cultural: "Culturel",
        relaxante: "Détente",
        gastronomico: "Gastronomique",
        familia: "Famille",
        misto: "Mixte",
      },
    },
    contatoForm: {
      title: "Envoyez votre message",
      nome: "Nom",
      nomePlaceholder: "Votre nom",
      email: "Email",
      assunto: "Sujet",
      assuntoPlaceholder: "Sélectionner le sujet",
      mensagem: "Message",
      mensagemPlaceholder: "Comment pouvons-nous vous aider ?",
      submit: "Envoyer le message",
      toast: "Message envoyé avec succès ! Nous répondrons sous 48h.",
      assuntos: [
        { value: "roteiro", label: "Question sur l'itinéraire" },
        { value: "parceria", label: "Partenariat" },
        { value: "sugestao", label: "Suggestion" },
        { value: "outro", label: "Autre" },
      ],
    },
    parceriaDialog: {
      button: "Demander le kit média",
      title: "Demander le kit média",
      desc: "Remplissez vos coordonnées et nous vous contacterons.",
      nome: "Nom",
      nomePlaceholder: "Votre nom",
      email: "Email",
      empresa: "Entreprise (optionnel)",
      empresaPlaceholder: "Nom de l'entreprise",
      mensagem: "Message",
      mensagemPlaceholder: "Parlez-nous du partenariat que vous envisagez...",
      submit: "Envoyer",
      toast: "Demande envoyée avec succès ! Nous vous contacterons bientôt.",
    },
  } as const satisfies TranslationShape;

  const de = {
    nav: {
      destinos: "Reiseziele",
      roteiros: "Reisepläne",
      sobre: "Über uns",
      parcerias: "Partnerschaften",
      contato: "Kontakt",
      criarRoteiro: "Meinen Reiseplan erstellen",
    },
    hero: {
      badge: "Personalisierte Reisepläne von PassaporteRF",
      title: "Verwandle Träume in",
      titleHighlight: "unvergessliche Reisepläne",
      subtitle: "Wir sind Rafa & Fe und helfen Ihnen, einzigartige Reisen zu erleben, mit 100% personalisierten Reiseplänen.",
      explorar: "Reiseziele erkunden",
      criar: "Meinen Reiseplan erstellen",
    },
    howItWorks: {
      title: "So funktioniert es",
      steps: [
        {
          title: "Formular ausfüllen",
          description: "Erzählen Sie uns von Ihrem Ziel, Ihren Daten und Ihrem Reisestil.",
        },
        {
          title: "Wir erstellen Ihren Reiseplan",
          description: "Wir entwickeln einen exklusiven Plan mit Tipps, Hotels und Erlebnissen.",
        },
        {
          title: "Wir passen gemeinsam an",
          description: "Sie überprüfen und wir passen an, bis es perfekt ist.",
        },
        {
          title: "Entspannt einsteigen",
          description: "Reisen Sie mit allem geplant und genießen Sie jeden Moment.",
        },
      ],
    },
    highlights: {
      items: [
        {
          title: "Premium-Hotels",
          description: "Wir wählen die besten Unterkünfte mit dem besten Preis-Leistungs-Verhältnis.",
        },
        {
          title: "Kulturelle Erlebnisse",
          description: "Reisepläne, die über das Offensichtliche hinausgehen, mit authentischen Erlebnissen.",
        },
        {
          title: "Praktische Tipps",
          description: "Alles, was Sie vor und während der Reise wissen müssen.",
        },
      ],
    },
    socialProof: {
      title: "Was unsere Reisenden sagen",
      subtitle: "Echte Erfahrungen von denen, die mit uns gereist sind",
    },
    trendingDestinations: {
      title: "Trendige Reiseziele",
      subtitle: "Die Orte, die auf dem Radar der Reisenden sind",
      verTodos: "Alle Reiseziele ansehen",
    },
    consultoria: {
      title: "Reiseplan-Beratung",
      subtitle: "Erzählen Sie uns von Ihrem Traumziel und wir planen alles für Sie",
      formTitle: "Personalisierten Reiseplan anfordern",
      formEmail: "Direkt an passaporterf@gmail.com senden",
      destino: "Reiseziel",
      destinoPlaceholder: "Z.B.: Paris, Japan...",
      datas: "Daten / Dauer",
      datasPlaceholder: "Z.B.: 10 Tage im Juli",
      pessoas: "Personen",
      estilo: "Reisestil",
      selecione: "Auswählen",
      estilos: {
        romantico: "Romantisch",
        aventura: "Abenteuer",
        cultural: "Kulturell",
        relaxante: "Entspannend",
        gastronomico: "Gastronomisch",
        misto: "Gemischt",
      },
      observacoes: "Noch etwas, das wir wissen sollten? (optional)",
      observacoesPlaceholder: "Präferenzen, Allergien, Budget, besonderer Anlass...",
      email: "Ihre E-Mail",
      whatsapp: "WhatsApp",
      submit: "Meinen Reiseplan anfordern",
      toast: "Ihre E-Mail wird geöffnet, um die Anfrage zu senden!",
    },
    ebooks: {
      title: "Unsere E-Books",
      subtitle: "Vollständige Reiseführer, damit Sie Ihre Reise sicher planen können",
      baixar: "E-Book herunterladen",
      dialogDesc: "Geben Sie Ihre E-Mail ein und wir senden Ihnen das E-Book kostenlos.",
      emailLabel: "Ihre E-Mail",
      newsletter: "Ich möchte exklusive Neuigkeiten und Angebote von PassaporteRF per E-Mail erhalten",
      quero: "Ich möchte mein E-Book",
      toast: "Ihre E-Mail wird geöffnet, um das E-Book anzufordern!",
      items: [
        {
          title: "Europa-Reiseführer für Paare",
          description: "Die besten romantischen Reisepläne durch Europa, mit Tipps zu Hotels, Restaurants und Erlebnissen für zwei.",
          pages: "48 Seiten",
          badge: "Meistgeladen",
        },
        {
          title: "Japan ohne Stress",
          description: "Alles, was Sie für Ihre Japan-Reise wissen müssen: Transport, Essen, Kultur und praktische Tipps.",
          pages: "36 Seiten",
          badge: "Neu",
        },
        {
          title: "Günstig Reisen",
          description: "Wie man mit einem begrenzten Budget reist, ohne auf gute Erlebnisse zu verzichten. Echte Tipps, von uns getestet.",
          pages: "28 Seiten",
          badge: "Kostenlos",
        },
      ],
    },
    footer: {
      desc: "Ihr Reiseführer, um die Welt mit personalisierten Reiseplänen und Tipps von leidenschaftlichen Reisenden zu erkunden.",
      links: "Website-Links",
      redes: "Soziale Medien",
      contato: "Kontakt",
      direitos: "Alle Rechte vorbehalten.",
      seguirNo: "Folgen auf",
    },
    metrics: {
      visualizacoes: "Monatliche Aufrufe",
      interacoes: "Monatliche Interaktionen",
      alcancadas: "Erreichte Konten",
      proximoDestino: "Nächstes Reiseziel",
      destinosVisitados: "Besuchte Reiseziele",
    },
    destinationCard: {
      verMais: "Mehr sehen",
    },
    destinos: {
      title: "Unsere Reiseziele",
      subtitle: "Entdecken Sie unglaubliche Orte auf der Welt und finden Sie die perfekte Reise für Ihren Stil",
      buscar: "Stadt oder Land suchen...",
      tipo: "Typ:",
      limpar: "Filter löschen",
      encontrado: "Reiseziel gefunden",
      encontrados: "Reiseziele gefunden",
      nenhum: "Keine Reiseziele gefunden",
      nenhumDesc: "Versuchen Sie, die Filter anzupassen oder nach einem anderen Begriff zu suchen. Wir fügen ständig neue Reiseziele hinzu!",
      continents: [
        { value: "Todos", label: "Alle" },
        { value: "Europa", label: "Europa" },
        { value: "Asia", label: "Asien" },
        { value: "America do Norte", label: "Nordamerika" },
        { value: "Africa", label: "Afrika" },
      ],
      tags: [
        { value: "romantico", label: "Romantisch" },
        { value: "aventura", label: "Abenteuer" },
        { value: "cultura", label: "Kultur" },
        { value: "praia", label: "Strand" },
        { value: "luxo", label: "Luxus" },
        { value: "economico", label: "Budget" },
        { value: "gastronomia", label: "Gastronomie" },
      ],
    },
    sobre: {
      badge: "Unsere Geschichte",
      title: "Wir sind Rafa & Fe",
      p1: "Alles begann mit zwei Reisepässen, unendlicher Neugier und dem Wunsch, die Welt gemeinsam zu erkunden. Was nur eine Leidenschaft fürs Reisen war, wurde schnell zu einem Zweck: andere Menschen zu inspirieren und ihnen zu helfen, genauso unvergessliche Erlebnisse zu machen wie wir.",
      p2: "Nachdem wir Dutzende von Ländern erkundet und Hunderte von Tipps unterwegs geteilt haben, haben wir PassaporteRF gegründet — einen Ort, wo wir alles zusammenbringen, was wir in personalisierten Reiseplänen, authentischen Inhalten und sorgfältig ausgewählten Empfehlungen gelernt haben.",
      p3: "Heute leben wir vom Reisen — und davon, jedes Detail Ihrer nächsten Reise in ein unvergessliches Erlebnis zu verwandeln.",
      valoresTitle: "Unsere Werte",
      valoresSubtitle: "Was jeden Reiseplan und jede Empfehlung leitet",
      valores: [
        {
          titulo: "Authentizität",
          descricao: "Wir empfehlen nur, was wir persönlich getestet und erlebt haben. Keine generischen Tipps.",
        },
        {
          titulo: "Qualität",
          descricao: "Jedes Detail zählt. Vom Hotel bis zum Restaurant wird alles mit Sorgfalt ausgewählt.",
        },
        {
          titulo: "Erlebnis",
          descricao: "Reisen, die Erinnerungen schaffen. Unser Fokus ist es, jede Reise unvergesslich zu machen.",
        },
      ],
      trajetoriaTitle: "Unser Weg",
      trajetoriaSubtitle: "Meilensteine, die PassaporteRF zu dem gemacht haben, was wir heute sind",
      timeline: [
        { ano: "2023", evento: "Erste gemeinsame Reise" },
        { ano: "2024", evento: "13 Länder im Jahr besucht" },
        { ano: "2025", evento: "Gründung von PassaporteRF" },
        { ano: "2026", evento: "+100 Reisepläne geliefert" },
      ],
      ctaTitle: "Möchten Sie mit uns reisen?",
      ctaSubtitle: "Wir erstellen den perfekten Reiseplan für Sie. Erzählen Sie uns von Ihrer Traumreise!",
      ctaButton: "Meinen Reiseplan erstellen",
    },
    roteiros: {
      badge: "+500 Reisepläne geliefert",
      title: "Unser Reiseplan, auf Ihre Weise",
      subtitle: "Jede Reise ist einzigartig und Ihr Reiseplan sollte es auch sein. Wir erstellen einen vollständigen, personalisierten Plan voller Tipps, damit Sie jeden Moment in vollen Zügen genießen können.",
      servicosTitle: "Wählen Sie den idealen Service",
      servicosSubtitle: "Optionen für jeden Moment Ihrer Reise",
      inclusosTitle: "Was enthalten ist",
      naoInclusosTitle: "Was nicht enthalten ist",
      formTitle: "Ihren Reiseplan erstellen",
      formSubtitle: "Füllen Sie das Formular aus und erhalten Sie ein personalisiertes Angebot",
      stats: ["+30 Reiseziele", "Lieferung innerhalb von 7 Tagen", "WhatsApp-Support"],
      servicos: [
        {
          titulo: "Personalisierter Reiseplan",
          descricao: "Vollständiger und exklusiver Reiseplan für Ihre Reise",
          preco: "Ab R$ 297",
          badge: "Bestseller",
        },
        {
          titulo: "Express-Beratung",
          descricao: "30-minütiges Gespräch mit personalisierten Tipps",
          preco: "R$ 147",
          badge: null,
        },
        {
          titulo: "Reiseplan-Überarbeitung",
          descricao: "Haben Sie bereits einen Reiseplan? Wir verbessern ihn für Sie",
          preco: "R$ 97",
          badge: null,
        },
      ],
      incluso: [
        "Tagesgenauer Reiseplan",
        "Hotel- und Restaurantempfehlungen",
        "Transport-Tipps",
        "Interaktive Karte",
        "2 Überarbeitungsrunden",
        "WhatsApp-Support",
      ],
      naoIncluso: [
        "Hotel- oder Flugbuchungen",
        "Reiseversicherung",
        "Transfers und lokaler Transport",
        "Eintrittskarten",
      ],
    },
    contato: {
      title: "Kontaktieren Sie uns",
      subtitle: "Fragen, Vorschläge oder möchten Sie über Partnerschaften sprechen? Wir sind hier, um zu helfen.",
      canaisTitle: "Unsere Kanäle",
      resposta: "Antwort innerhalb von",
      respostaStrong: "48 Std.",
      faqTitle: "Häufig gestellte Fragen",
      faqs: [
        {
          question: "Wie funktioniert der personalisierte Reiseplan?",
          answer: "Sie füllen ein Formular mit Ihren Präferenzen aus (Ziel, Daten, Budget, Reisestil) und wir erstellen einen vollständigen und exklusiven Reiseplan für Sie. Jeder Reiseplan ist einzigartig und berücksichtigt, was Sie am liebsten machen.",
        },
        {
          question: "Wie lange dauert es, den Reiseplan zu erhalten?",
          answer: "Nach der Zahlung, dem ausgefüllten Formular und allen erhaltenen Informationen ist der Reiseplan innerhalb von 5 Werktagen fertig. Für dringende Bestellungen haben wir die Express-Beratungsoption.",
        },
        {
          question: "Kann ich Änderungen am Reiseplan beantragen?",
          answer: "Ja! Nach der Lieferung haben Sie Anspruch auf 2 Überarbeitungsrunden ohne zusätzliche Kosten. Wir möchten, dass der Reiseplan perfekt für Sie ist.",
        },
        {
          question: "Buchen Sie Hotels und Touren?",
          answer: "Wir empfehlen die besten Hotels, Restaurants und Erlebnisse mit direkten Buchungslinks, aber die Buchung selbst wird von Ihnen durchgeführt. So haben Sie die volle Kontrolle.",
        },
        {
          question: "Wie funktioniert die Express-Beratung?",
          answer: "Es ist ein 30-minütiges Videogespräch, bei dem wir alle Ihre Fragen zum Reiseziel beantworten, personalisierte Tipps geben und helfen, die Grundstruktur des Reiseplans aufzubauen.",
        },
        {
          question: "Welche Zahlungsmethoden werden akzeptiert?",
          answer: "Wir akzeptieren PIX, Kreditkarte, Banküberweisung und Revolut.",
        },
      ],
    },
    parcerias: {
      badge: "Partnerschaft mit uns",
      title: "Arbeiten wir zusammen?",
      subtitle: "Wir verbinden großartige Marken mit einem reisebegeisterten Publikum. Wenn Sie echte Reichweite und authentischen Inhalt wollen, sprechen wir.",
      formatosTitle: "Partnerschaftsformate",
      formatosSubtitle: "Verschiedene Wege zur Zusammenarbeit",
      metricsTitle: "Zahlen und Publikum",
      metricsSubtitle: "Echte Daten zu Reichweite und Engagement",
      parceirosTitle: "Partner",
      parceirosSubtitle: "Marken, die unserer Arbeit vertrauen",
      ctaTitle: "Möchten Sie mehr erfahren?",
      ctaSubtitle: "Fordern Sie unser Medienkit an und erhalten Sie alle Daten, Fallstudien und verfügbaren Partnerschaftsformate.",
      formatos: [
        {
          titulo: "Hotels & Unterkünfte",
          descricao: "Aufenthalte, Bewertungen und exklusiver Inhalt",
        },
        {
          titulo: "Restaurants & Erlebnisse",
          descricao: "Verkostungen, Touren und vollständige Berichterstattung",
        },
        {
          titulo: "Marken & Produkte",
          descricao: "Gesponserte Posts, Unboxing und kreative Kampagnen",
        },
      ],
      metricas: [
        { valor: "+3M", label: "Monatliche Aufrufe" },
        { valor: "+100k", label: "Monatliche Interaktionen" },
        { valor: "+1,2M", label: "Erreichte Konten" },
        { valor: "Reichweite", label: "Brasilien, USA, Europa" },
      ],
    },
    roteiroForm: {
      title: "Ihre Daten eingeben",
      destino: "Reiseziel",
      destinoPlaceholder: "Z.B.: Paris, Toskana, Japan...",
      datas: "Daten / Dauer",
      datasPlaceholder: "Z.B.: 15.-25. Juli oder 10 Tage",
      orcamento: "Budget",
      estilo: "Reisestil",
      selecione: "Auswählen",
      pessoas: "Personenanzahl",
      pessoasPlaceholder: "Z.B.: 2",
      preferencias: "Präferenzen (optional)",
      preferenciasPlaceholder: "Erzählen Sie uns, was Sie beim Reisen am liebsten tun...",
      email: "E-Mail",
      emailPlaceholder: "ihre@email.com",
      whatsapp: "WhatsApp",
      whatsappPlaceholder: "(11) 99999-9999",
      submit: "Reiseplan anfordern",
      previewTitle: "Vorschau",
      summaryTitle: "Bestellübersicht",
      previewEmpty: "Füllen Sie das Formular aus, um eine Vorschau Ihrer Bestellung hier zu sehen.",
      pedidoEnviado: "Bestellung gesendet! Wir werden uns bald bei Ihnen melden.",
      dica: "Tipp",
      dicaText: "Je mehr Details Sie ausfüllen, desto personalisierter wird Ihr Reiseplan. Sparen Sie nicht an Präferenzen!",
      toast: "Bestellung erfolgreich gesendet! Wir werden uns bald bei Ihnen melden.",
      orcamentoLabels: {
        economico: "Günstig",
        moderado: "Moderat",
        confortavel: "Komfortabel",
        luxo: "Luxus",
      },
      estiloLabels: {
        romantico: "Romantisch",
        aventura: "Abenteuer",
        cultural: "Kulturell",
        relaxante: "Entspannend",
        gastronomico: "Gastronomisch",
        familia: "Familie",
        misto: "Gemischt",
      },
    },
    contatoForm: {
      title: "Ihre Nachricht senden",
      nome: "Name",
      nomePlaceholder: "Ihr Name",
      email: "E-Mail",
      assunto: "Betreff",
      assuntoPlaceholder: "Betreff auswählen",
      mensagem: "Nachricht",
      mensagemPlaceholder: "Wie können wir Ihnen helfen?",
      submit: "Nachricht senden",
      toast: "Nachricht erfolgreich gesendet! Wir antworten innerhalb von 48 Stunden.",
      assuntos: [
        { value: "roteiro", label: "Frage zum Reiseplan" },
        { value: "parceria", label: "Partnerschaft" },
        { value: "sugestao", label: "Vorschlag" },
        { value: "outro", label: "Sonstiges" },
      ],
    },
    parceriaDialog: {
      button: "Medienkit anfordern",
      title: "Medienkit anfordern",
      desc: "Füllen Sie Ihre Daten aus und wir werden uns bei Ihnen melden.",
      nome: "Name",
      nomePlaceholder: "Ihr Name",
      email: "E-Mail",
      empresa: "Unternehmen (optional)",
      empresaPlaceholder: "Unternehmensname",
      mensagem: "Nachricht",
      mensagemPlaceholder: "Erzählen Sie uns von der Partnerschaft, die Sie im Sinn haben...",
      submit: "Senden",
      toast: "Anfrage erfolgreich gesendet! Wir werden uns bald bei Ihnen melden.",
    },
  } as const satisfies TranslationShape;

export const translations = { pt, en, es, fr, de } as const;

export type Translations = typeof pt;

export function getT(locale: Locale): Translations {
  return translations[locale] as Translations;
}

