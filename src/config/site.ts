export const siteConfig = {
  name: "Euclides Style",
  titleSuffix: "| Barbearia Premium",
  description: "Barbearia premium com mais de 10 anos de experiência em Alhos Vedros e Barreiro. Cortes que elevam o seu padrão.",
  whatsapp: "351932655181",
  whatsappMessage: "Olá, vim do site e gostaria de fazer uma marcação na Euclides Style!",
  agendaLink: "https://online.maapp.com.br/euclidestyle",
  services: [
    { id: 1, category: "Cabelo & Barba", title: "Corte Normal", description: "Corte de cabelo com finalização profissional e atenção aos detalhes.", price: "14,00 €" },
    { id: 2, category: "Cabelo & Barba", title: "Barba", description: "Design e cuidado com a barba, usando toalha quente e finalização premium.", price: "10,00 €" },
    { id: 3, category: "Cabelo & Barba", title: "Corte e Barba", description: "O combo clássico para renovar o visual completo com estilo.", price: "19,00 €" },
    { id: 4, category: "Cabelo & Barba", title: "Combo Premium", description: "Corte, barba e design de sobrancelha para uma transformação total.", price: "24,00 €" },
    { id: 5, category: "Cabelo & Barba", title: "Platinado", description: "Transformação radical com descoloração e matização de alta performance.", price: "35,00 €" },
    { id: 6, category: "Cabelo & Barba", title: "Sobrancelhas", description: "Limpeza e design de sobrancelhas para um acabamento perfeito.", price: "5,00 €" },
    { id: "unhas-gel", category: "Unhas", title: "Gel 1ª Aplicação", price: "28,00 €", description: "Aplicação inicial de unhas de gel com extensão personalizada." },
    { id: "unhas-gelinho-maos", category: "Unhas", title: "Gelinho Mãos", price: "17,00 €", description: "Aplicação de verniz de gel nas mãos para maior durabilidade." },
    { id: "unhas-gelinho-pes", category: "Unhas", title: "Gelinho Pés", price: "17,50 €", description: "Aplicação de verniz de gel nos pés, perfeita para maior resistência." },
    { id: "unhas-manutencao", category: "Unhas", title: "Manutenção Gel", price: "22,00 €", description: "Manutenção para preservar o formato, resistência e beleza da aplicação." },
    { id: "unhas-polygel", category: "Unhas", title: "Polygel", price: "23,00 €", description: "Construção de unhas conjugando durabilidade do acrílico com a flexibilidade do gel." },
    { id: "unhas-softgel", category: "Unhas", title: "Softgel", price: "23,00 €", description: "Alongamento prático, leve e natural de alta fixação com cápsulas em gel." }
  ],
  aboutFull: {
    story: "Com mais de 10 anos de experiência na arte da barbearia, a Euclides Style consolidou-se como uma referência em Portugal. Movida pela paixão pelos detalhes, a nossa barbearia transformou-se num espaço onde a tradição se encontra com as tendências mais modernas do mundo masculino.",
    mission: "A nossa missão é elevar o padrão de cada homem que entra na nossa barbearia, proporcionando não apenas um corte, mas uma experiência de renovação de imagem e confiança.",
    experience: "Especialista certificado em técnicas avançadas de fade, cortes clássicos europeus e barboterapia tradicional."
  },
  address: {
    alhosVedros: {
      title: "Euclides Style - Alhos Vedros",
      street: "Rua Caldas Xavier N° 75A",
      postal: "2860-058 Alhos Vedros",
      maps: "https://www.google.pt/maps/place/Rua+Caldas+Xavier+75A,+2860-058+Alhos+Vedros"
    },
    barreiro: {
      title: "Euclides Style - Barreiro",
      street: "Praceta Gomes Teixeira N° 2A",
      postal: "2830-145 Barreiro",
      maps: "https://www.google.pt/maps/place/Praceta+Gomes+Teixeira+2A,+2830-145+Barreiro"
    }
  },
  hours: [
    { day: "Segunda a Quinta", time: "09:00 - 20:00" },
    { day: "Sexta", time: "09:00 - 17:00" },
    { day: "Sábado", time: "Encerrado" },
    { day: "Domingo", time: "8:00 - 13:00" }
  ],
  socials: {
    instagram: "@euclidestyle",
    instagramUrl: "https://www.instagram.com/euclidestyle/",
    facebookUrl: "https://www.facebook.com/profile.php?id=100065320636763&ref=PRODASH_UPSELL_xav_ig_profile_page_web#"
  },
  images: {
    background: "/images/background.png",
    hero: "/images/hero.png",
    aboutBefore: "/images/euclides/euclides-working.png",
    aboutAfter: "/images/euclides/euclides-client.png",
    servicesNails: "/images/euclides/euclides-working-1.png",
    gallery: [
      { id: 1, url: '/images/resultados/resultado.png', alt: 'Resultado de corte Euclides Style' },
      { id: 2, url: '/images/resultados/resultado2.png', alt: 'Corte fade moderno' },
      { id: 3, url: '/images/resultados/resultado3.png', alt: 'Design de barba e corte' },
      { id: 4, url: '/images/resultados/resultado4.png', alt: 'Estilo clássico premium' },
      { id: 5, url: '/images/resultados/resultado5.png', alt: 'Finalização de alta performance' },
      { id: 6, url: '/images/resultados/resultado6.png', alt: 'Transformação Euclides Style' }
    ]
  }
}
