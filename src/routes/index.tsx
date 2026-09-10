import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  ChevronDown,
  Star,
  ArrowRight,
  Menu,
  X,
  FileText,
  Send,
  Check,
  Building,
  Eye,
  Wind,
  Volume2,
  Smile,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: DrDiegoPage,
});

export default function DrDiegoPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  // Simulator Form State
  const [name, setName] = useState("");
  const [selectedSymptom, setSelectedSymptom] = useState("Nariz Trancado / Rinite / Sinusite");
  const [hasExams, setHasExams] = useState("Sim, já possuo exames em mãos");
  const [preferredShift, setPreferredShift] = useState("Manhã (08h às 12h)");
  const [notes, setNotes] = useState("");

  const phone = "5521981154788";
  const phoneDisplay = "(21) 98115-4788";
  const address = "Edifício Torre Sulamel — R. Francisco Sá, 343 - Sala 106 - Várzea, Teresópolis - RJ";
  const hours = "Segunda a Sexta das 08:00 às 19:00";

  const defaultWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Vim pelo site oficial do Dr. Diego Cardoso e gostaria de agendar uma consulta."
  )}`;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Vim pelo site oficial do Dr. Diego Cardoso e gostaria de atendimento otorrinolaringológico.

*Nome do Paciente:* ${name || "Não informado"}
*Queixa Principal:* ${selectedSymptom}
*Exames em mãos:* ${hasExams}
*Turno de preferência:* ${preferredShift}
${notes ? `*Observações / Sintomas:* ${notes}` : ""}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const specialties = [
    {
      title: "Nariz & Respiração Livre",
      desc: "Tratamento clínico e cirúrgico de desvio de septo (Septoplastia), hipertrofia de cornetos (Turbinoplastia), rinite alérgica crônica e sinusite de repetição.",
      tag: "Rinologia",
      iconName: "Wind",
    },
    {
      title: "Ouvido, Audição & Equilíbrio",
      desc: "Investigação e alívio de labirintite, tonturas e vertigens (VPPB), zumbido no ouvido (tinnitus), otites e remoção de cerume indolor com microscópio.",
      tag: "Otologia",
      iconName: "Volume2",
    },
    {
      title: "Garganta, Voz & Sono",
      desc: "Avaliação diagnóstica de rouquidão persistente, refluxo faringolaríngeo, amigdalites/adenoides de repetição e tratamento cirúrgico do ronco e apneia.",
      tag: "Laringologia",
      iconName: "Activity",
    },
    {
      title: "Nasofibrolaringoscopia Flexível",
      desc: "Exame visual das vias aéreas superiores com microcâmera de alta definição. Procedimento rápido, realizado no próprio consultório com anestésico spray suave.",
      tag: "Exame no Consultório",
      iconName: "Eye",
    },
    {
      title: "Videolaringoscopia de Precisão",
      desc: "Inspeção detalhada da laringe e cordas vocais para investigação de nódulos, pólipos, fendas vocais e lesões inflamatórias em profissionais da voz.",
      tag: "Diagnóstico Avançado",
      iconName: "Eye",
    },
    {
      title: "Tratamento Cirúrgico do Ronco",
      desc: "Manejo multidisciplinar e cirurgias desobstrutivas para quem sofre com noites mal dormidas, ronco alto e apneia obstrutiva do sono.",
      tag: "Medicina do Sono",
      iconName: "ShieldCheck",
    },
  ];

  const methodology = [
    {
      step: "01",
      title: "Consulta Humanizada e Sem Pressa",
      desc: "Tempo dedicado para ouvir cada sintoma, histórico de crises respiratórias e explicar com calma o funcionamento da sua via aérea.",
    },
    {
      step: "02",
      title: "Exames Imediatos no Consultório",
      desc: "Possibilidade de realizar nasofibroscopia ou videolaringoscopia durante a consulta para diagnóstico preciso na mesma hora.",
    },
    {
      step: "03",
      title: "Conduta Esclarecida Passo a Passo",
      desc: "Você sai com todas as dúvidas sanadas, sabendo exatamente como tratar o quadro em casa e quando esperar a melhora.",
    },
    {
      step: "04",
      title: "Espaço Seguro e Inclusivo",
      desc: "Ambiente livre de preconceitos, com selo de acolhimento à comunidade LGBTQ+ e respeito absoluto a cada paciente na Torre Sulamel.",
    },
  ];

  const testimonials = [
    {
      name: "Bruna Hadassa",
      badge: "Avaliação Google Maps",
      text: "Atendimento super humano, sem correria, perguntou se tinha ficado alguma dúvida ao fim e esclareceu todo meu quadro com bastante atenção. Eu estava com sintomas piorando há 10 dias e recebi todo direcionamento para tratar em casa.",
      rating: 5,
    },
    {
      name: "Kevin Munoz",
      badge: "Avaliação Google Maps",
      text: "Excelente atendimento! O Dr. foi muito profissional, atencioso e resolveu minhas preocupações de forma eficaz. Recomendo seus serviços.",
      rating: 5,
    },
    {
      name: "Paciente Verificado",
      badge: "Consulta na Torre Sulamel",
      text: "Me senti extremamente confortável durante a consulta. O consultório é impecável, o Dr. Diego explica tudo no exame e passa muita segurança.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: "O exame de nasofibrolaringoscopia é doloroso?",
      a: "Não. O exame é realizado com uma fibra óptica ultrafina e flexível, introduzida delicadamente pelo nariz após a aplicação de um spray anestésico e descongestionante tópico. O procedimento leva poucos minutos e permite visualizar com clareza todo o nariz, faringe e cordas vocais sem dor.",
    },
    {
      q: "Quando é indicada a cirurgia de desvio de septo (Septoplastia)?",
      a: "A cirurgia é recomendada quando o desvio da cartilagem ou osso nasal obstrui a passagem de ar de forma contínua, causando respiração bucal, cansaço ao acordar, ronco noturno ou sinusites frequentes que não melhoram apenas com medicamentos.",
    },
    {
      q: "Como é o tratamento para labirintite e tontura?",
      a: "O primeiro passo é diferenciar a labirintite verdadeira da vertigem posicional (VPPB) e de outras causas neurológicas ou metabólicas. Muitas vertigens são tratadas com manobras posturais rápidas realizadas no próprio consultório, associadas a medicações específicas.",
    },
    {
      q: "O Dr. Diego atende crianças para avaliação de amígdalas e adenoides?",
      a: "Sim. O atendimento pediátrico é conduzido com enorme paciência, carinho e linguagem acessível para que a criança não sinta medo e os pais compreendam com segurança se o caso é de acompanhamento clínico ou indicação cirúrgica.",
    },
    {
      q: "Onde fica o consultório na Várzea e como posso agendar?",
      a: "O consultório fica na Torre Sulamel, Rua Francisco Sá, 343, Sala 106, em localização central de fácil acesso em Teresópolis. O agendamento é feito de forma ágil e direta pelo WhatsApp da nossa recepção.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-cyan-100 selection:text-cyan-950 pb-24 lg:pb-0">
      {/* Top Announcement Bar */}
      <div className="bg-[#091528] text-cyan-100 border-b border-cyan-900/40 text-[11px] sm:text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 animate-pulse" />
            <span>Edifício Torre Sulamel (Sala 106) · R. Francisco Sá, 343 - Várzea, Teresópolis - RJ</span>
          </div>
          <div className="flex items-center gap-4 text-cyan-300">
            <span>Segunda a Sexta: 08h às 19h</span>
            <a href={`tel:${phone}`} className="hover:text-white transition-colors font-semibold text-cyan-200">
              WhatsApp: {phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* NAVBAR - ZERO ICON IN HEADER (ONLY NAME) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand: ONLY NAME, ZERO ICONS */}
          <a href="/" className="flex flex-col justify-center group">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-950 group-hover:text-cyan-700 transition-colors">
              Dr. Diego Cardoso
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.18em] text-cyan-800 uppercase">
              Otorrinolaringologia Clínica & Cirúrgica
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#atuacao" className="hover:text-cyan-700 transition-colors">Áreas de Atuação</a>
            <a href="#exames" className="hover:text-cyan-700 transition-colors">Exames no Consultório</a>
            <a href="#metodo" className="hover:text-cyan-700 transition-colors">Atendimento Humanizado</a>
            <a href="#consultorio" className="hover:text-cyan-700 transition-colors">Torre Sulamel</a>
            <a href="#depoimentos" className="hover:text-cyan-700 transition-colors">Depoimentos</a>
            <a href="#faq" className="hover:text-cyan-700 transition-colors">Dúvidas Frequentes</a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#agendamento"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white hover:bg-cyan-700 text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-cyan-300" />
              <span>Agendar Consulta</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl border border-slate-200 text-slate-700 lg:hidden hover:bg-slate-50 transition-colors"
            aria-label="Abrir Menu de Navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 bg-white px-6 py-5 space-y-4 animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-3 text-base font-medium text-slate-700">
              <a href="#atuacao" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-cyan-700">
                Áreas de Atuação (Ouvido, Nariz, Garganta)
              </a>
              <a href="#exames" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-cyan-700">
                Exames (Nasofibroscopia & Vídeo)
              </a>
              <a href="#metodo" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-cyan-700">
                Atendimento Humanizado & Inclusivo
              </a>
              <a href="#consultorio" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-cyan-700">
                O Consultório na Torre Sulamel
              </a>
              <a href="#depoimentos" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-cyan-700">
                Depoimentos Reais de Pacientes
              </a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-cyan-700">
                Dúvidas Frequentes
              </a>
            </nav>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={defaultWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-4 h-4 text-cyan-300" />
                <span>Falar no WhatsApp ({phoneDisplay})</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 breath-glow border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-900 text-xs font-semibold tracking-wide">
                <Activity className="w-3.5 h-3.5 text-cyan-600" />
                <span>Ouvido, Nariz e Garganta com Cuidado Humanizado · Torre Sulamel</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.18]">
                Respire com Liberdade, Recupere Seus Sentidos e Viva Sem Limites.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                Diagnóstico minucioso e conduta médica humanizada para desvio de septo, rinite, sinusite crônica, tonturas, zumbido e ronco. Consultas atenciosas e sem pressa no centro da Várzea, Teresópolis.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#agendamento"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900 hover:bg-cyan-700 text-white font-bold text-sm tracking-wider uppercase transition-all shadow-lg shadow-slate-950/15 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-cyan-300" />
                  <span>Agendar Consulta no WhatsApp</span>
                </a>

                <a
                  href="#exames"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white border border-slate-300 text-slate-800 font-semibold text-sm tracking-wide hover:bg-slate-50 transition-all"
                >
                  <Eye className="w-4 h-4 text-cyan-600" />
                  <span>Exames no Consultório</span>
                </a>
              </div>

              {/* Trust Badges Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/80">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-900 font-bold text-sm">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span>4.7 Estrelas</span>
                  </div>
                  <p className="text-xs text-slate-500">Avaliações no Google Maps</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-900 font-bold text-sm">
                    <Building className="w-4 h-4 text-cyan-600" />
                    <span>Sala 106</span>
                  </div>
                  <p className="text-xs text-slate-500">Edifício Torre Sulamel</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-900 font-bold text-sm">
                    <HeartHandshake className="w-4 h-4 text-cyan-600" />
                    <span>Sem Correria</span>
                  </div>
                  <p className="text-xs text-slate-500">Escuta Atenta e Empatia</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-900 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Espaço Seguro</span>
                  </div>
                  <p className="text-xs text-slate-500">Acolhe a Diversidade</p>
                </div>
              </div>
            </div>

            {/* Right Column: High-Trust Clinical Card */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-600/15 rounded-3xl blur-xl" />

                <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-800 block">
                        Corpo Clínico Dedicado
                      </span>
                      <h3 className="text-xl font-bold text-slate-900">
                        Dr. Diego Cardoso
                      </h3>
                      <p className="text-xs text-slate-500">
                        Otorrinolaringologia Geral & Cirúrgica
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-900 text-xs font-bold">
                      Torre Sulamel
                    </span>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-3.5">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700">
                        <strong className="text-slate-900">Avaliação em Alta Definição:</strong> Exames de nasofibroscopia e laringe realizados com tecnologia suave e indolor.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700">
                        <strong className="text-slate-900">Explicações Claras:</strong> Você entende a causa exata dos seus sintomas e sai com orientações práticas para casa.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700">
                        <strong className="text-slate-900">Ambiente Inclusivo:</strong> Respeito, empatia e acolhimento em um consultório seguro para todos os pacientes.
                      </p>
                    </div>
                  </div>

                  {/* Location & Direct Phone Box */}
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                    <div className="flex items-center gap-2.5 text-xs text-slate-700">
                      <MapPin className="w-4 h-4 text-cyan-600 shrink-0" />
                      <span>Rua Francisco Sá, 343 - Sala 106 (Torre Sulamel), Várzea</span>
                    </div>
                    <div className="flex items-center justify-between pt-1 text-xs">
                      <span className="text-slate-500">Central de Agendamento:</span>
                      <a href={`tel:${phone}`} className="font-bold text-slate-900 hover:text-cyan-700">
                        {phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* Primary CTA */}
                  <a
                    href="#agendamento"
                    className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-cyan-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors text-center"
                  >
                    <MessageCircle className="w-4 h-4 text-cyan-300" />
                    <span>Falar com a Recepção no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-slate-950">4.7 ⭐</span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium">Avaliação Google Maps</span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-slate-950">Sala 106</span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium">Edifício Torre Sulamel</span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-slate-950">3 Sentidos</span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium">Ouvido, Nariz e Garganta</span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-slate-950">100%</span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium">Acolhimento & Respeito</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Specialties Catalog */}
      <section id="atuacao" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700 block">
                Especialidades Médicas
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-1">
                Áreas de Atuação Otorrinolaringológica
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Abordagem completa e especializada para adultos, crianças e idosos em Teresópolis.
              </p>
            </div>

            <a
              href="#agendamento"
              className="inline-flex items-center gap-2 text-xs font-bold text-cyan-700 hover:text-cyan-900 uppercase tracking-wider"
            >
              <span>Consultar outro sintoma</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {specialties.map((spec, index) => (
              <div
                key={index}
                className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200 flex flex-col justify-between hover:bg-white hover:border-cyan-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-cyan-900 text-[11px] font-bold">
                    {spec.tag}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                    {spec.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {spec.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                  <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent(
                      `Olá! Gostaria de agendar uma avaliação para: ${spec.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-slate-900 group-hover:text-cyan-700 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Tirar dúvidas no WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Office Diagnostic Exams Spotlight */}
      <section id="exames" className="py-20 bg-[#ECFEFF]/40 border-y border-cyan-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700 block">
                Diagnóstico Preciso na Mesma Consulta
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
                Exames com Câmera em Alta Definição no Próprio Consultório
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Esqueça a necessidade de marcar exames em laboratórios distantes e aguardar semanas pelo laudo. No consultório do Dr. Diego Cardoso, os principais exames são realizados durante a consulta médica com máxima suavidade.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-cyan-900/10 space-y-1 shadow-xs">
                  <h4 className="text-sm font-bold text-slate-950">Nasofibrolaringoscopia Flexível</h4>
                  <p className="text-xs text-slate-600">Visualização completa do septo, cornetos, adenoides e cordas vocais com fibra óptica flexível e anestésico spray.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-cyan-900/10 space-y-1 shadow-xs">
                  <h4 className="text-sm font-bold text-slate-950">Videolaringoscopia Rígida</h4>
                  <p className="text-xs text-slate-600">Inspeção óptica de alta resolução para avaliar rouquidão, nódulos vocais e refluxo faringolaríngeo.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-cyan-900/10 space-y-1 shadow-xs">
                  <h4 className="text-sm font-bold text-slate-950">Lavagem & Aspiração de Cerume com Microscopia</h4>
                  <p className="text-xs text-slate-600">Limpeza suave e segura do conduto auditivo sem pressão hídrica desconfortável.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl p-8 bg-[#091528] text-white border border-cyan-900 space-y-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                    Tecnologia & Conforto
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    "O procedimento foi rápido, sem dor e me explicou tudo na tela."
                  </h3>
                  <p className="text-sm text-cyan-100/80 leading-relaxed">
                    Você acompanha as imagens da sua via aérea diretamente na tela do computador. O Dr. Diego mostra exatamente onde está o desvio, a inflamação ou a queixa, explicando as opções de tratamento com transparência.
                  </p>
                  <div className="pt-2">
                    <a
                      href="#agendamento"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Agendar Exame no WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Humanized Care & Methodology Section */}
      <section id="metodo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700 block">
              A Diferença de Ser Bem Cuidado
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              Uma Medicina Humana, Acessível e sem Pressa
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Acreditamos que o tratamento correto nasce do diálogo atencioso e da empatia em ouvir o que o paciente está sentindo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((m, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-4 hover:border-cyan-300 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-800 font-bold text-sm flex items-center justify-center border border-cyan-100">
                  {m.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{m.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Office Section (Torre Sulamel) */}
      <section id="consultorio" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 block">
                Localização & Acessibilidade
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Consultório no Edifício Torre Sulamel
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Situado na tradicional Rua Francisco Sá, 343, na Sala 106. Um espaço silencioso, acolhedor e climatizado no coração da Várzea, com facilidade de locomoção para pacientes de todos os bairros de Teresópolis.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Sala 106 — Torre Sulamel</h4>
                    <p className="text-xs text-slate-400">
                      Rua Francisco Sá, 343 - Várzea, Teresópolis - RJ
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Acessibilidade & Elevadores</h4>
                    <p className="text-xs text-slate-400">
                      Acesso facilitado para cadeirantes, idosos e carrinhos de bebê.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Horários Amplos</h4>
                    <p className="text-xs text-slate-400">
                      Segunda a Sexta-feira das 08:00 às 19:00 com agendamento prévio.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Ligar para o Consultório</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Rua+Francisco+Sa+343+Teresopolis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs tracking-wider transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Abrir no Google Maps</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl p-3 bg-slate-800/80 border border-slate-700 shadow-2xl">
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center relative">
                  <iframe
                    title="Mapa Torre Sulamel - Dr Diego Cardoso"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.189528981244!2d-42.969987!3d-22.418256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99b1bfb8b40423%3A0x7d6a5ff50b86a8a2!2sR.%20Francisco%20S%C3%A1%2C%20343%20-%20V%C3%A1rzea%2C%20Teres%C3%B3polis%20-%20RJ%2C%2025953-011!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Reviews Showcase (Google 4.7 Stars) */}
      <section id="depoimentos" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>4.7 ESTRELAS NO GOOGLE MAPS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              A Palavra dos Nossos Pacientes
            </h2>
            <p className="text-sm text-slate-600">
              Depoimentos reais e públicos deixados por pacientes atendidos na Torre Sulamel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{test.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-950">{test.name}</h4>
                    <span className="text-[10px] text-cyan-800 font-medium">{test.badge}</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment & Triage Simulator Form */}
      <section id="agendamento" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cyan-50/40 rounded-3xl p-8 sm:p-12 border border-cyan-900/10 shadow-sm space-y-8">
            <div className="text-center space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-bold uppercase tracking-wider">
                Triagem Ágil de Agendamento
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
                Agende Sua Consulta com o Dr. Diego Cardoso
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
                Preencha suas informações para que nossa recepção na Torre Sulamel reserve seu atendimento com conforto e pontualidade.
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Nome Completo do Paciente *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Amanda Oliveira Ramos"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Queixa Principal
                  </label>
                  <select
                    value={selectedSymptom}
                    onChange={(e) => setSelectedSymptom(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10 transition-all"
                  >
                    <option value="Nariz Trancado / Rinite / Sinusite">Nariz Trancado / Rinite / Sinusite</option>
                    <option value="Desvio de Septo & Respiração Bucal">Desvio de Septo & Respiração Bucal</option>
                    <option value="Zumbido no Ouvido / Perda Auditiva">Zumbido no Ouvido / Perda Auditiva</option>
                    <option value="Tontura, Vertigem ou Labirintite">Tontura, Vertigem ou Labirintite</option>
                    <option value="Rouquidão Persistente / Dor de Garganta">Rouquidão Persistente / Dor de Garganta</option>
                    <option value="Ronco Noturno & Apneia do Sono">Ronco Noturno & Apneia do Sono</option>
                    <option value="Exame de Nasofibrolaringoscopia">Exame de Nasofibrolaringoscopia</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Possui Exames Anteriores?
                  </label>
                  <select
                    value={hasExams}
                    onChange={(e) => setHasExams(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10 transition-all"
                  >
                    <option value="Sim, já possuo exames em mãos">Sim, já possuo exames em mãos</option>
                    <option value="Não, farei a primeira avaliação">Não, farei a primeira avaliação</option>
                    <option value="Apenas exames antigos">Apenas exames antigos</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Turno de Preferência
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["Manhã (08h às 12h)", "Tarde (13h às 19h)"].map((shift) => (
                    <button
                      key={shift}
                      type="button"
                      onClick={() => setPreferredShift(shift)}
                      className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition-all ${
                        preferredShift === shift
                          ? "bg-slate-900 text-white border-slate-900"
                          : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
                      }`}
                    >
                      {shift}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Observações ou Detalhes dos Sintomas (Opcional)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: Sinto dor de ouvido há 5 dias; sinto tontura ao virar a cabeça na cama..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-700 focus:ring-2 focus:ring-cyan-700/10 transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-slate-900 hover:bg-cyan-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-cyan-300" />
                <span>Enviar Triagem & Falar com a Recepção no WhatsApp</span>
              </button>

              <p className="text-center text-[11px] text-slate-500">
                Atendimento humanizado na Torre Sulamel pelo WhatsApp oficial {phoneDisplay}
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700 block">
              Tire Suas Dúvidas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              Perguntas Frequentes dos Pacientes
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((item, idx) => {
              const isOpen = faqOpen === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setFaqOpen(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-cyan-700 transition-colors"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-cyan-600 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer - ZERO ICON, CLEAN TYPOGRAPHY */}
      <footer className="bg-[#091528] text-slate-400 py-14 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800 pb-8 text-center md:text-left">
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white block">
                Dr. Diego Cardoso
              </span>
              <span className="text-[11px] font-semibold text-cyan-400 tracking-wider uppercase block mt-0.5">
                Otorrinolaringologia Clínica & Cirúrgica · CRM-RJ
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
              <a href="#atuacao" className="hover:text-white transition-colors">Áreas de Atuação</a>
              <a href="#exames" className="hover:text-white transition-colors">Exames</a>
              <a href="#metodo" className="hover:text-white transition-colors">Humanizado</a>
              <a href="#consultorio" className="hover:text-white transition-colors">Torre Sulamel</a>
              <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
              <a href="#agendamento" className="hover:text-white transition-colors">Agendamento</a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-400">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Consultório</h4>
              <p>{address}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Horários de Atendimento</h4>
              <p>{hours}</p>
              <p className="text-slate-500 mt-1">Consultas com agendamento prévio</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">WhatsApp Direto</h4>
              <p className="text-white font-bold">{phoneDisplay}</p>
              <p className="text-slate-500 mt-1">Triagem e agendamento de consultas</p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>© {new Date().getFullYear()} Dr. Diego Cardoso. Todos os direitos reservados.</p>
            <p>
              Desenvolvido com excelência por <span className="text-cyan-400 font-semibold">Cronos Agency</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Bottom Bar (Mobile Only - 1 Single Clean Touchpoint) */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-xl">
        <a
          href={defaultWhatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 px-4 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
        >
          <MessageCircle className="w-4 h-4 text-cyan-300" />
          <span>Agendar Consulta no WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
