import React, { useState, useEffect } from 'react';
import {
  Heart,
  Sparkles,
  BookOpen,
  ShieldCheck,
  Award,
  Users,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
  MessageCircle,
  X,
  ChevronDown,
  Smile,
  HandHeart,
  Gift,
  Building2,
  Target,
  ExternalLink,
  ChevronRight,
  Menu
} from 'lucide-react';

const ORG_INFO = {
  name: "Instituto Reviva Floripa",
  shortName: "Reviva Floripa",
  tagline: "Servindo com propósito e excelência!",
  subheadline: "Promovendo crescimento, esperança e transformação social através de cursos 100% gratuitos e acolhimento comunitário na Grande Florianópolis desde 2018.",
  pixKey: "47.674.002/0001-20",
  pixBank: "Banco Bradesco - Instituto Reviva Floripa",
  whatsappMain: "5548991391767",
  whatsappEnrollment: "5548991391767", // Isabella - Inscrições
  instagram: "https://instagram.com/revivafloripa",
  recognition: [
    "Medalha Herbert de Souza (Betinho) - Prefeitura de Florianópolis",
    "Selo Oficial ONG Amiga da Criança",
    "Reconhecida de Utilidade Pública Estadual (Lei ALESC)"
  ]
};

const COURSES = [
  {
    id: "robotica",
    title: "Lego & Robótica Educativa",
    category: "Crianças & Jovens",
    badge: "Mais Popular",
    age: "5 a 10 anos",
    schedule: "Sábados, das 09:30 às 11:30",
    unit: "Unidade Capoeiras",
    description: "Metodologia STEAM que desenvolve raciocínio lógico, criatividade, introdução à programação e trabalho em equipe com blocos tecnológicos.",
    color: "from-amber-500 to-orange-600",
    lightBg: "bg-orange-50 text-orange-700 border-orange-200",
    tags: ["Tecnologia", "STEAM", "Criatividade"]
  },
  {
    id: "kravmaga",
    title: "Krav Magá Feminino (Defesa Pessoal)",
    category: "Mulheres",
    badge: "Exclusivo Mulheres",
    age: "8 a 60 anos",
    schedule: "Quartas-feiras às 20:00",
    unit: "Capoeiras & Costeira",
    description: "Treinamento especializado em autodefesa, autoconfiança, reflexos e segurança postural em um ambiente seguro, acolhedor e inclusivo.",
    color: "from-rose-500 to-pink-600",
    lightBg: "bg-pink-50 text-pink-700 border-pink-200",
    tags: ["Segurança", "Empoderamento", "Saúde"]
  },
  {
    id: "muaythai",
    title: "Muay Thai (Kids & Adultos)",
    category: "Esporte & Saúde",
    badge: "Duas Turmas",
    age: "6 a 60 anos",
    schedule: "Kids às 14:00 | Adultos às 16:00",
    unit: "Unidade Capoeiras",
    description: "Arte marcial que trabalha disciplina, condicionamento cardiovascular, autocontrole, alívio do estresse e integração comunitária.",
    color: "from-red-500 to-rose-700",
    lightBg: "bg-red-50 text-red-700 border-red-200",
    tags: ["Disciplina", "Condicionamento", "Artes Marciais"]
  },
  {
    id: "naildesigner",
    title: "Manicure & Nail Designer",
    category: "Geração de Renda",
    badge: "Empreendedorismo",
    age: "Jovens e Adultos",
    schedule: "Sábados às 15:00",
    unit: "Capoeiras & Bela Vista",
    description: "Capacitação profissional com módulos práticos de cutilagem, esmaltação e nail art, capacitando participantes para entrada imediata no mercado.",
    color: "from-purple-500 to-indigo-600",
    lightBg: "bg-purple-50 text-purple-700 border-purple-200",
    tags: ["Renda Rápida", "Beleza", "Autonomia"]
  },
  {
    id: "artesanato",
    title: "Tricô, Crochê & Conversa",
    category: "Geração de Renda",
    badge: "Arte & Acolhimento",
    age: "Todas as idades",
    schedule: "Terças-feiras das 14:00 às 17:00",
    unit: "Unidade Capoeiras",
    description: "Espaço de aprendizado artesanal por módulos de produtos, associado a momentos de convívio social, arteterapia e suporte mútuo.",
    color: "from-emerald-500 to-teal-700",
    lightBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    tags: ["Arteterapia", "Geração de Renda", "Comunidade"]
  },
  {
    id: "terapeutico",
    title: "Grupo Terapêutico & Apoio Emocional",
    category: "Apoio Emocional",
    badge: "Saúde Mental",
    age: "Adultos",
    schedule: "Segundas-feiras (Quinzenal) às 20:00",
    unit: "Capoeiras & Online",
    description: "Rodas de escuta ativa e acolhimento psicoemocional mediadas por voluntários e profissionais para auxílio com ansiedade e fortalecimento pessoal.",
    color: "from-cyan-500 to-blue-600",
    lightBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
    tags: ["Escuta Ativa", "Saúde Mental", "Acolhimento"]
  }
];

const LOCATIONS = [
  {
    id: "capoeiras",
    name: "Sede Capoeiras (Principal)",
    city: "Florianópolis / SC",
    address: "Rua Waldemar Ouriques, 114 - Capoeiras",
    cep: "88090-050",
    note: "Anexo à Igreja Reviva Floripa",
    mapsUrl: "https://maps.google.com/?q=Rua+Waldemar+Ouriques+114+Capoeiras+Florianopolis",
    highlights: ["Salas de Robótica", "Tatame para Artes Marciais", "Espaço de Convivência & Cursos"]
  },
  {
    id: "costeira",
    name: "Núcleo Costeira do Pirajubaé",
    city: "Florianópolis / SC",
    address: "Rua João Câncio Jacques - Costeira",
    cep: "88047-155",
    note: "Ponto de atendimento comunitário e esportivo",
    mapsUrl: "https://maps.google.com/?q=Rua+Joao+Cancio+Jacques+Costeira+Florianopolis",
    highlights: ["Atividades Esportivas", "Apoio às Famílias Locais", "Ações Sociais"]
  },
  {
    id: "belavista",
    name: "Núcleo Bela Vista",
    city: "São José / SC",
    address: "Rua Santa Catarina, 630 - Bela Vista",
    cep: "88110-300",
    note: "Polos de capacitação e reforço social",
    mapsUrl: "https://maps.google.com/?q=Rua+Santa+Catarina+630+Bela+Vista+Sao+Jose",
    highlights: ["Capacitação Profissional", "Distribuição de Alimentos", "Oficinas Comunitárias"]
  }
];

const STORIES = [
  {
    quote: "Meu filho de 7 anos não tinha acesso a tecnologia ou computadores. No curso de Lego e Robótica ele aprendeu a pensar como pequeno inventor e melhorou muito na escola regular!",
    author: "Juliana Santos",
    role: "Mãe do Pietro, aluna de Robótica em Capoeiras",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "O curso de Manicure abriu as portas para eu começar a atender clientes na minha própria casa. Hoje consigo complementar a renda dos meus filhos com dignidade e independência.",
    author: "Marcilene Silva",
    role: "Formada na turma de Nail Design",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "O Reviva não entrega apenas cestas ou cursos. Eles entregam respeito, escuta e calor humano. As aulas de Krav Magá restauraram minha sensação de segurança e amor-próprio.",
    author: "Camila Duarte",
    role: "Aluna da turma de Defesa Pessoal Feminina",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  }
];

const FAQS = [
  {
    question: "¿Todos os cursos são realmente 100% gratuitos?",
    answer: "Sim! Todos os cursos, oficinas e atividades promovidos pelo Instituto Reviva Floripa são totalmente gratuitos para os alunos e famílias. Somos mantidos por doações da sociedade civil, voluntários dedicados e parceiros empresariais."
  },
  {
    question: "¿Quem pode se inscrever nas turmas?",
    answer: "Crianças, jovens, mulheres e adultos da Grande Florianópolis. Cada oficina tem sua faixa etária indicada (ex: Robótica de 5 a 10 anos, Krav Magá a partir de 8 anos). As vagas são preenchidas por ordem de inscrição e análise socioassistencial."
  },
  {
    question: "¿Como funciona a chave PIX para doações?",
    answer: "Nossa chave PIX oficial é o CNPJ 47.674.002/0001-20 (Banco Bradesco - Reviva Floripa). 100% dos recursos são aplicados diretamente na manutenção dos polos, lanches comunitários, materiais pedagógicos e reformas de espaços."
  },
  {
    question: "¿Como posso atuar como voluntário no Instituto?",
    answer: "Aceitamos profissionais de todas as áreas: professores, instrutores de esportes, artesãos, psicólogos, advogados, contadores, fotógrafos e pessoas de bom coração dispostas a doar horas de serviço ou mentoria. Basta clicar em 'Quero ser Voluntário'."
  },
  {
    question: "¿Qual é a conexão entre o Instituto e a comunidade do Monte Cristo?",
    answer: "Mantemos a campanha contínua 'Reviva em Ação', levando alimentos, brinquedos na festa do Dia das Crianças, agasalhos e ações emergenciais às comunidades de maior vulnerabilidade social da Grande Florianópolis."
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState(null);
  const [activeUnit, setActiveUnit] = useState(LOCATIONS[0].id);
  const [copiedPix, setCopiedPix] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyPix = () => {
    navigator.clipboard.writeText(ORG_INFO.pixKey);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  const categories = ["Todos", "Crianças & Jovens", "Mulheres", "Geração de Renda", "Esporte & Saúde", "Apoio Emocional"];
  const filteredCourses = selectedCategory === "Todos" 
    ? COURSES 
    : COURSES.filter(c => c.category === selectedCategory);

  const activeUnitData = LOCATIONS.find(loc => loc.id === activeUnit) || LOCATIONS[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans selection:bg-rose-500 selection:text-white">
      {}
      <div className="bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white text-xs sm:text-sm py-2 px-4 border-b border-rose-900/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-rose-400 animate-pulse" />
            <span className="font-semibold text-rose-300">Medalha Herbert de Souza (Betinho):</span>
            <span className="text-slate-200">Reconhecimento oficial de impacto social em Florianópolis</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="hidden md:inline text-slate-300">PIX Oficial: <strong>{ORG_INFO.pixKey}</strong></span>
            <button
              onClick={() => setIsDonationModalOpen(true)}
              className="text-rose-300 hover:text-white underline font-medium cursor-pointer"
            >
              Fazer Doação Rápida &rarr;
            </button>
          </div>
        </div>
      </div>

      {}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-4 border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-rose-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform">
              <Heart className="w-6 h-6 fill-white" />
            </div>
            <div>
              <span className="block font-black text-lg sm:text-xl tracking-tight text-slate-900 leading-none">
                REVIVA <span className="text-rose-600">FLORIPA</span>
              </span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-600 block mt-0.5">
                Instituto & Ação Social
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#sobre" className="hover:text-rose-600 transition-colors">Quem Somos</a>
            <a href="#cursos" className="hover:text-rose-600 transition-colors">Cursos Gratuitos</a>
            <a href="#impacto" className="hover:text-rose-600 transition-colors">Ações Sociais</a>
            <a href="#unidades" className="hover:text-rose-600 transition-colors">Unidades</a>
            <a href="#depoimentos" className="hover:text-rose-600 transition-colors">Depoimentos</a>
            <a href="#faq" className="hover:text-rose-600 transition-colors">Dúvidas</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => {
                setSelectedCourseForEnroll(null);
                setIsEnrollModalOpen(true);
              }}
              className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
            >
              Inscrições
            </button>
            <button
              onClick={() => setIsDonationModalOpen(true)}
              className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-750 hover:to-rose-800 rounded-lg shadow-md shadow-rose-600/25 hover:shadow-lg transition-all flex items-center gap-2 transform active:scale-95"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Apoiar com PIX</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-semibold"
            >
              Quem Somos
            </a>
            <a
              href="#cursos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-semibold"
            >
              Cursos Gratuitos
            </a>
            <a
              href="#impacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-semibold"
            >
              Ações Sociais
            </a>
            <a
              href="#unidades"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-semibold"
            >
              Unidades
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-semibold"
            >
              Dúvidas Frequentes
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsEnrollModalOpen(true);
                }}
                className="w-full py-2.5 text-center font-bold text-slate-800 bg-slate-100 rounded-lg"
              >
                Inscrição de Alunos
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsDonationModalOpen(true);
                }}
                className="w-full py-2.5 text-center font-bold text-white bg-rose-600 rounded-lg flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Fazer Doação PIX</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-white via-slate-50 to-slate-100">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-rose-200/50 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -right-32 w-96 h-96 bg-indigo-200/50 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-rose-800 text-xs sm:text-sm font-bold shadow-sm">
                <Sparkles className="w-4 h-4 text-rose-600" />
                <span>Transformando realidades em Florianópolis desde 2018</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
                Tocar nos pilares da sociedade e gerar <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">esperança para o futuro</span>.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Somos um grupo de voluntários e profissionais que decidiram sair do conforto de seus lares para se tornarem a resposta para aqueles que buscam uma oportunidade digna através da <strong>educação gratuita, esportes, geração de renda e saúde mental</strong>.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#cursos"
                  className="w-full sm:w-auto px-6 py-3.5 text-base font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-lg shadow-slate-900/10 hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                  <BookOpen className="w-5 h-5 text-rose-400" />
                  <span>Ver Cursos Gratuitos</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={() => setIsDonationModalOpen(true)}
                  className="w-full sm:w-auto px-6 py-3.5 text-base font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 border-2 border-rose-200 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
                  <span>Doar com PIX</span>
                </button>

                <button
                  onClick={() => setIsVolunteerModalOpen(true)}
                  className="w-full sm:w-auto px-5 py-3.5 text-base font-semibold text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-center gap-1.5"
                >
                  <HandHeart className="w-5 h-5 text-indigo-600" />
                  <span>Ser Voluntário</span>
                </button>
              </div>

              {/* Social Proof Strip */}
              <div className="pt-6 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-slate-900">+2.500</p>
                  <p className="text-xs text-slate-500 font-medium">Vidas alcançadas</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-rose-600">100%</p>
                  <p className="text-xs text-slate-500 font-medium">Gratuito para alunos</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-slate-900">3 Polos</p>
                  <p className="text-xs text-slate-500 font-medium">Capoeiras, Costeira, SJ</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-indigo-600">6+ Anos</p>
                  <p className="text-xs text-slate-500 font-medium">Atuação contínua</p>
                </div>
              </div>
            </div>

            {/* Right Card / Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-rose-500 to-indigo-600 rounded-3xl blur-lg opacity-30 animate-pulse" />
                
                <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                  <div className="relative h-56 sm:h-64 bg-slate-900 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                      alt="Crianças aprendendo robótica e tecnologia"
                      className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="inline-block px-2.5 py-1 bg-rose-600/90 rounded text-xs font-bold uppercase tracking-wider mb-1">
                        Ação Comunitária Ativa
                      </span>
                      <h2 className="font-bold text-base sm:text-lg leading-tight">
                        Doações, Robótica e Inclusão no Monte Cristo & Grande Floripa
                      </h2>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <Award className="w-8 h-8 text-amber-500 shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-slate-900">Reconhecimento Oficial</p>
                        <p className="text-xs text-slate-500">Medalha Herbert de Souza (Betinho) pela Câmara e Prefeitura de Florianópolis.</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-rose-50/70 rounded-xl border border-rose-100">
                      <Gift className="w-8 h-8 text-rose-600 shrink-0" />
                      <div className="flex-1">
                        <p className="text-xs font-bold text-rose-950">Chave PIX Solidária (CNPJ)</p>
                        <p className="text-xs font-mono font-bold text-rose-700">{ORG_INFO.pixKey}</p>
                      </div>
                      <button
                        onClick={handleCopyPix}
                        className="px-2.5 py-1.5 text-xs font-bold bg-white text-rose-600 border border-rose-200 rounded-lg hover:bg-rose-50 transition-colors flex items-center gap-1 shadow-sm"
                        title="Copiar PIX"
                      >
                        {copiedPix ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedPix ? "Copiado!" : "Copiar"}</span>
                      </button>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                      <span>✓ Prestação de contas transparente</span>
                      <span>✓ Voluntários capacitados</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="sobre" className="py-16 sm:py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold tracking-widest text-rose-600 uppercase">
              Nosso Propósito & Valores
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Transformar o meio em que vivemos com o que temos nas mãos
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Inspirados pelo princípio de servir ao próximo com excelência e integridade, não esperamos o cenário ideal: usamos nossos recursos, profissões e tempo voluntário para abrir caminhos reais.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pilar 1 */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Educação & Tecnologia</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Desmistificando o acesso à ciência e robótica para crianças e jovens da periferia, estimulando raciocínio lógico e sonhos profissionais.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Segurança & Esporte</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Krav Magá exclusivo para mulheres e Muay Thai para jovens e adultos, construindo disciplina, autodefesa e resiliência física e mental.
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Geração de Renda</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Oficinas práticas de Nail Design, Manicure e Artesanato para que mães de família conquistem sua renda própria e autonomia financeira.
              </p>
            </div>

            {/* Pilar 4 */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Smile className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Saúde Emocional</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Grupos terapêuticos e suporte humano para combater a depressão e o isolamento, gerando uma rede genuína de amizade e acolhimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="cursos" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-rose-600 uppercase">
                Oportunidades Abertas
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                Conheça nossos Cursos Gratuitos
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                Turmas regulares durante a semana e aos sábados. Aulas práticas ministradas por voluntários qualificados em nossas unidades.
              </p>
            </div>

            <button
              onClick={() => {
                setSelectedCourseForEnroll(null);
                setIsEnrollModalOpen(true);
              }}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-xl flex items-center gap-2 self-start md:self-auto transition-colors"
            >
              <span>Inscrever Aluno Agora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Filter Badges */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${course.lightBg}`}>
                      {course.category}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      {course.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors mb-2">
                    {course.title}
                  </h3>

                  <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Metadata items */}
                  <div className="space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{course.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>Faixa etária: <strong>{course.age}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{course.unit}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    100% Gratuito
                  </span>
                  <button
                    onClick={() => {
                      setSelectedCourseForEnroll(course);
                      setIsEnrollModalOpen(true);
                    }}
                    className="text-xs font-bold text-slate-900 hover:text-rose-600 flex items-center gap-1 group/btn"
                  >
                    <span>Garantir vaga</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="impacto" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest text-rose-400 uppercase">
                Ação Social nas Periferias
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Reviva em Ação: Levando alívio onde a necessidade é urgente
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Além das salas de aula, nossa equipe está presente nas áreas mais vulneráveis da Grande Florianópolis, como a comunidade do <strong>Monte Cristo</strong> e arredores.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white">Festa Anual do Dia das Crianças</h4>
                    <p className="text-xs text-slate-400">Distribuição de brinquedos, guloseimas, recreação infantil e corte de cabelo gratuito para centenas de pequenos.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white">Cestas Básicas & Kits de Higiene</h4>
                    <p className="text-xs text-slate-400">Atendimento a famílias em situação de extrema pobreza cadastradas e acompanhadas pelo serviço social do Instituto.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white">Campanha do Agasalho e Cobertores</h4>
                    <p className="text-xs text-slate-400">Protegendo comunidades e pessoas em situação de rua durante os rigorosos invernos catarinenses.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => setIsDonationModalOpen(true)}
                  className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow-lg shadow-rose-600/30 transition-all flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Apoiar Esta Causa</span>
                </button>
                <a
                  href={`https://wa.me/${ORG_INFO.whatsappMain}?text=Olá! Gostaria de saber como apoiar o Reviva em Ação com doação de alimentos ou agasalhos.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl border border-slate-700 transition-colors flex items-center gap-2 text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Central de Doações (Lilian)</span>
                </a>
              </div>
            </div>

            {/* Impact Gallery Cards */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-800 relative group h-48 sm:h-56">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80"
                    alt="Ação comunitária com crianças"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-xs font-semibold text-white">Festa das Crianças</span>
                  </div>
                </div>
                <div className="bg-slate-800/80 border border-slate-700/60 p-5 rounded-2xl text-center">
                  <p className="text-3xl font-black text-rose-400">+1.200</p>
                  <p className="text-xs text-slate-300 mt-1">Cestas e kits entregues</p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="bg-slate-800/80 border border-slate-700/60 p-5 rounded-2xl text-center">
                  <p className="text-3xl font-black text-indigo-400">80+</p>
                  <p className="text-xs text-slate-300 mt-1">Voluntários mobilizados</p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-800 relative group h-48 sm:h-56">
                  <img
                    src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80"
                    alt="Doação de alimentos e acolhimento"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-xs font-semibold text-white">Monte Cristo & Região</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="unidades" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold tracking-widest text-rose-600 uppercase">
              Onde Estamos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Nossas Unidades na Grande Florianópolis
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Espaços equipados e acolhedores para receber nossos alunos, voluntários e a comunidade com dignidade.
            </p>
          </div>

          {/* Unit switcher tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-100 p-1.5 rounded-2xl inline-flex flex-wrap gap-1 max-w-full">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setActiveUnit(loc.id)}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeUnit === loc.id
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {loc.name.split(' (')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Unit Card */}
          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-100 text-rose-800 text-xs font-bold rounded-md">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeUnitData.city}</span>
                </div>

                <h3 className="text-2xl font-black text-slate-900">
                  {activeUnitData.name}
                </h3>

                <div className="text-sm text-slate-600 space-y-1">
                  <p className="font-semibold text-slate-800">{activeUnitData.address}</p>
                  <p>CEP: {activeUnitData.cep}</p>
                  <p className="text-xs text-rose-600 font-medium italic mt-1">📌 {activeUnitData.note}</p>
                </div>

                <div className="pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Estrutura disponível:</p>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {activeUnitData.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <a
                    href={activeUnitData.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-colors"
                  >
                    <span>Abrir no Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`https://wa.me/${ORG_INFO.whatsappMain}?text=Olá! Gostaria de visitar a ${activeUnitData.name}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Falar no WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Visual Map Representation */}
              <div className="bg-slate-200 rounded-2xl h-64 sm:h-72 overflow-hidden relative border border-slate-300 flex items-center justify-center p-6 text-center">
                <div className="space-y-3">
                  <div className="w-14 h-14 bg-rose-600 text-white rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-rose-600/30">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{activeUnitData.name}</h4>
                    <p className="text-xs text-slate-600 mt-0.5">{activeUnitData.address}</p>
                  </div>
                  <a
                    href={activeUnitData.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-bold text-rose-600 hover:underline pt-1"
                  >
                    Ver rotas e transporte público &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-bold tracking-widest text-rose-600 uppercase">
              Faça a Diferença
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Três maneiras de somar com o Instituto
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Nenhuma ajuda é pequena demais quando o objetivo é restaurar o futuro de quem precisa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Doação Financeira */}
            <div className="bg-white border-2 border-rose-200/80 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center">
                  <Gift className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Doação via PIX</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Qualquer valor ajuda a custear lanches para as crianças, materiais de robótica, tatames e manutenção dos núcleos.
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs font-mono text-slate-700 break-all">
                  Chave: <strong>{ORG_INFO.pixKey}</strong>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => setIsDonationModalOpen(true)}
                  className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-sm transition-colors shadow-md shadow-rose-600/20"
                >
                  Abrir Chave & QR Code
                </button>
              </div>
            </div>

            {/* Card 2: Voluntariado */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center">
                  <HandHeart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Seja um Voluntário</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Doe sua profissão ou habilidade. Buscamos professores, instrutores, psicólogos, designers e apoiadores de eventos.
                </p>
                <ul className="text-xs text-slate-600 space-y-1.5">
                  <li className="flex items-center gap-1.5">✓ 2 a 4 horas por mês ou semana</li>
                  <li className="flex items-center gap-1.5">✓ Certificado de horas sociais</li>
                </ul>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => setIsVolunteerModalOpen(true)}
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-colors"
                >
                  Preencher Formulário
                </button>
              </div>
            </div>

            {/* Card 3: Parceria com Empresas */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Empresas Amigas</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Sua empresa pode adotar uma turma, doar equipamentos usados (notebooks, ferramentas) ou firmar patrocínio institucional.
                </p>
                <p className="text-xs text-slate-500">
                  Transparência total, relatórios de impacto e visibilidade de responsabilidade social corporativa (ESG).
                </p>
              </div>

              <div className="pt-6">
                <a
                  href={`https://wa.me/${ORG_INFO.whatsappMain}?text=Olá! Represento uma empresa e temos interesse em ser parceiros do Instituto Reviva Floripa.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm transition-colors border border-slate-200"
                >
                  Falar com Coordenação
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="depoimentos" className="py-16 sm:py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-bold tracking-widest text-rose-600 uppercase">
              Vozes Reais
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              O que dizem os alunos e famílias
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STORIES.map((story, idx) => (
              <div key={idx} className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 flex flex-col justify-between">
                <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                  "{story.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
                  <img
                    src={story.avatar}
                    alt={story.author}
                    className="w-11 h-11 rounded-full object-cover border-2 border-rose-400"
                  />
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">{story.author}</h3>
                    <p className="text-xs text-slate-500">{story.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="faq" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold tracking-widest text-rose-600 uppercase">
              Tire suas dúvidas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-rose-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-rose-600' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {}
      <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
            {/* Col 1 & 2: About */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-600 flex items-center justify-center text-white">
                  <Heart className="w-5 h-5 fill-white" />
                </div>
                <span className="font-black text-lg text-white tracking-tight">
                  REVIVA <span className="text-rose-500">FLORIPA</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Organização Não Governamental sem fins lucrativos comprometida com a restauração de dignidade e oportunidades em Florianópolis e região metropolitana.
              </p>
              <div className="text-xs space-y-1">
                <p><strong>CNPJ:</strong> 47.674.002/0001-20</p>
                <p><strong>Endereço Sede:</strong> Rua Waldemar Ouriques, 114 - Capoeiras, Florianópolis - SC</p>
              </div>
            </div>

            {/* Col 3: Navegação */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Navegação</h4>
              <ul className="text-xs space-y-2">
                <li><a href="#sobre" className="hover:text-white transition-colors">Quem Somos</a></li>
                <li><a href="#cursos" className="hover:text-white transition-colors">Cursos Gratuitos</a></li>
                <li><a href="#impacto" className="hover:text-white transition-colors">Reviva em Ação</a></li>
                <li><a href="#unidades" className="hover:text-white transition-colors">Unidades & Polos</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a></li>
              </ul>
            </div>

            {/* Col 4: Cursos */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Cursos</h4>
              <ul className="text-xs space-y-2">
                <li><span className="hover:text-white cursor-pointer" onClick={() => { setSelectedCourseForEnroll(COURSES[0]); setIsEnrollModalOpen(true); }}>Robótica & Lego</span></li>
                <li><span className="hover:text-white cursor-pointer" onClick={() => { setSelectedCourseForEnroll(COURSES[1]); setIsEnrollModalOpen(true); }}>Krav Magá Feminino</span></li>
                <li><span className="hover:text-white cursor-pointer" onClick={() => { setSelectedCourseForEnroll(COURSES[2]); setIsEnrollModalOpen(true); }}>Muay Thai</span></li>
                <li><span className="hover:text-white cursor-pointer" onClick={() => { setSelectedCourseForEnroll(COURSES[3]); setIsEnrollModalOpen(true); }}>Manicure & Nail Design</span></li>
                <li><span className="hover:text-white cursor-pointer" onClick={() => { setSelectedCourseForEnroll(COURSES[5]); setIsEnrollModalOpen(true); }}>Grupo Terapêutico</span></li>
              </ul>
            </div>

            {/* Col 5: Contatos & Redes */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Redes & Contato</h4>
              <div className="space-y-2 text-xs">
                <a
                  href={`https://wa.me/${ORG_INFO.whatsappMain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>(48) 99139-1767</span>
                </a>
                <a
                  href={ORG_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-pink-400 hover:text-pink-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>@revivafloripa</span>
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => setIsDonationModalOpen(true)}
                  className="w-full py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold transition-colors"
                >
                  Doar via PIX
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© {new Date().getFullYear()} Instituto Reviva Floripa. Todos os direitos reservados.</p>
            <p>Construído com amor para transformar vidas na Grande Florianópolis.</p>
          </div>
        </div>
      </footer>

      {}
      {isDonationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100">
            <button
              onClick={() => setIsDonationModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2 mb-6">
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6 fill-rose-600" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Faça sua Doação com PIX</h3>
              <p className="text-xs text-slate-500">
                Seu apoio sustenta os cursos gratuitos e lanches para nossas crianças em Floripa.
              </p>
            </div>

            {/* PIX Details */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Chave PIX (CNPJ)</span>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Conta Oficial
                </span>
              </div>
              <div className="font-mono font-bold text-sm text-slate-900 break-all select-all bg-white p-2.5 rounded-xl border border-slate-200">
                {ORG_INFO.pixKey}
              </div>
              <div className="text-xs text-slate-600 space-y-0.5">
                <p><strong>Favorecido:</strong> Reviva Floripa</p>
                <p><strong>Instituição:</strong> Banco Bradesco S.A.</p>
              </div>
            </div>

            <button
              onClick={handleCopyPix}
              className="w-full py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-rose-600/25 active:scale-95"
            >
              {copiedPix ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copiedPix ? "Chave PIX Copiada com Sucesso!" : "Copiar Chave PIX"}</span>
            </button>

            <div className="mt-4 text-center">
              <a
                href={`https://wa.me/${ORG_INFO.whatsappMain}?text=Olá Lilian! Acabei de fazer uma doação via PIX para o Instituto Reviva Floripa e gostaria de enviar o comprovante.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 hover:text-rose-600 font-semibold inline-flex items-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                <span>Enviar comprovante para a Central de Doações</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {}
      {isEnrollModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsEnrollModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 mb-6">
              <span className="text-[11px] font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                100% Gratuito
              </span>
              <h3 className="text-xl font-black text-slate-900">
                {selectedCourseForEnroll ? `Inscrição: ${selectedCourseForEnroll.title}` : "Inscrição em Cursos Gratuitos"}
              </h3>
              <p className="text-xs text-slate-500">
                Preencha os dados abaixo para ser direcionado à nossa coordenadora pedagógica no WhatsApp.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const nome = formData.get('nome');
                const idade = formData.get('idade');
                const curso = selectedCourseForEnroll ? selectedCourseForEnroll.title : formData.get('curso');
                const unidade = formData.get('unidade');

                const textMsg = encodeURIComponent(
                  `Olá Isabella! Gostaria de inscrever um aluno no Instituto Reviva Floripa:\n` +
                  `• Nome: ${nome}\n` +
                  `• Idade: ${idade} anos\n` +
                  `• Curso pretendido: ${curso}\n` +
                  `• Polo de preferência: ${unidade}`
                );

                window.open(`https://wa.me/${ORG_INFO.whatsappEnrollment}?text=${textMsg}`, '_blank');
                setIsEnrollModalOpen(false);
              }}
              className="space-y-4 text-left"
            >
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Nome completo do aluno(a) *</label>
                <input
                  required
                  type="text"
                  name="nome"
                  placeholder="Ex: Gabriel dos Santos"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Idade do aluno *</label>
                  <input
                    required
                    type="number"
                    name="idade"
                    min="4"
                    max="99"
                    placeholder="Ex: 8"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Polo desejado *</label>
                  <select
                    name="unidade"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 bg-white"
                  >
                    <option value="Capoeiras (Florianópolis)">Capoeiras (Sede)</option>
                    <option value="Costeira do Pirajubaé">Costeira</option>
                    <option value="Bela Vista (São José)">Bela Vista (SJ)</option>
                  </select>
                </div>
              </div>

              {!selectedCourseForEnroll && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Selecione o Curso *</label>
                  <select
                    name="curso"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 bg-white"
                  >
                    {COURSES.map(c => (
                      <option key={c.id} value={c.title}>{c.title} ({c.age})</option>
                    ))}
                  </select>
                </div>
              )}

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-800">
                ℹ️ Vagas sujeitas à lotação de turmas e ordem de contato. Nossa equipe entrará em contato para confirmar horários.
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Confirmar e Conversar no WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {}
      {isVolunteerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsVolunteerModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 mb-6">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center">
                <HandHeart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Seja Voluntário no Reviva Floripa</h3>
              <p className="text-xs text-slate-500">
                Compartilhe seus talentos e profissão para tocar a vida de quem mais precisa.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const nome = formData.get('nome');
                const area = formData.get('area');
                const disponibilidade = formData.get('disponibilidade');

                const textMsg = encodeURIComponent(
                  `Olá equipe do Instituto Reviva Floripa! Quero ser um voluntário:\n` +
                  `• Nome: ${nome}\n` +
                  `• Minha área/profissão: ${area}\n` +
                  `• Disponibilidade: ${disponibilidade}`
                );

                window.open(`https://wa.me/${ORG_INFO.whatsappMain}?text=${textMsg}`, '_blank');
                setIsVolunteerModalOpen(false);
              }}
              className="space-y-4 text-left"
            >
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Seu Nome Completo *</label>
                <input
                  required
                  type="text"
                  name="nome"
                  placeholder="Ex: Carlos Oliveira"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Sua profissão ou habilidade *</label>
                <input
                  required
                  type="text"
                  name="area"
                  placeholder="Ex: Professor de Robótica / Psicólogo / Artesão / Geral"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Disponibilidade aproximada</label>
                <select
                  name="disponibilidade"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                >
                  <option value="Sábados de manhã">Sábados de manhã</option>
                  <option value="Sábados à tarde">Sábados à tarde</option>
                  <option value="Dias de semana à noite">Dias de semana à noite</option>
                  <option value="Ações pontuais e eventos">Ações pontuais e eventos</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enviar candidatura via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}