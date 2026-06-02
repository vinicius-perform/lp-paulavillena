import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  MessageCircle,
  Play,
  Plus,
  Minus,
  MapPin,
  Sparkles,
  ShieldCheck,
  Heart,
  Gem,
  Stethoscope,
  Award,
} from "lucide-react";
import heroDoctor from "@/assets/hero-doctor.jpg";
import mirrorConcept from "@/assets/mirror-concept.jpg";
import doctorClinic from "@/assets/doctor-clinic.jpg";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import result1 from "@/assets/result-1.jpg";
import result2 from "@/assets/result-2.jpg";
import result3 from "@/assets/result-3.jpg";
import skinDetail from "@/assets/skin-detail.jpg";
import bgpc from "@/assets/bgpc.webp";
import bgphone from "@/assets/bgphone.webp";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Paula Villena — Harmonização de Glúteos | Estética Médica Premium" },
      {
        name: "description",
        content:
          "Protocolo exclusivo da Dra. Paula Villena para harmonização glútea com naturalidade, segurança e sofisticação. Atendimento em São Paulo e Fortaleza.",
      },
      { property: "og:title", content: "Dra. Paula Villena — Harmonização de Glúteos" },
      {
        property: "og:description",
        content:
          "Aumente o volume, firmeza e harmonia dos seus glúteos — sem cirurgia. Protocolo personalizado e exclusivo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroDoctor },
    ],
  }),
  component: LandingPage,
});

const WHATSAPP_URL = "https://wa.me/5511999999999";

function WAButton({ children, label }: { children?: React.ReactNode; label: string }) {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="cta-primary">
      <MessageCircle className="h-5 w-5" />
      {children ?? label}
    </a>
  );
}

function LandingPage() {
  useScrollReveal();
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Results />
      <VideoStories />
      <Solution />
      <GoldIncision />
      <Planning />
      <About />
      <FAQ />
      <Mentorship />
      <Footer />
    </main>
  );
}

/* -------------------------- NAV -------------------------- */
function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/55 border-b border-border/40">
      <div className="container-premium flex items-center justify-between py-4">
        <a href="#top" className="title-serif text-xl tracking-wide text-cream">
          Dra. Paula <span className="text-copper">Villena</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-warm">
          <a href="#resultados" className="hover:text-gold transition-colors">Resultados</a>
          <a href="#protocolo" className="hover:text-gold transition-colors">Protocolo</a>
          <a href="#goldincision" className="hover:text-gold transition-colors">GoldIncision®</a>
          <a href="#sobre" className="hover:text-gold transition-colors">Sobre</a>
          <a href="#faq" className="hover:text-gold transition-colors">FAQ</a>
        </nav>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hidden md:inline-flex cta-secondary !min-h-0 !py-2.5 !px-5 !text-[0.7rem]">
          Agendar
        </a>
      </div>
    </header>
  );
}

/* -------------------------- HERO -------------------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end md:items-center pt-28 pb-12 md:pb-20 overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none hidden md:block" 
        style={{ backgroundImage: `url(${bgpc})`, backgroundSize: "cover", backgroundPosition: "center" }} 
      />
      <div 
        className="absolute inset-0 pointer-events-none md:hidden" 
        style={{ backgroundImage: `url(${bgphone})`, backgroundSize: "cover", backgroundPosition: "top" }} 
      />
      
      <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-background via-background/90 to-transparent pointer-events-none hidden md:block" />
      <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none md:hidden" />
      
      <div className="bg-orb -top-32 -right-20 hidden md:block" />
      <div className="bg-orb -bottom-40 -left-20" style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--brown) 60%, transparent), transparent 65%)" }} />
      <div className="floating-light" style={{ top: "20%", left: "12%" }} />
      <div className="floating-light" style={{ top: "70%", left: "55%", animationDelay: "2s" }} />
      <div className="floating-light" style={{ top: "35%", right: "18%", animationDelay: "4s" }} />

      <div className="container-premium relative z-10 w-full">
        <div className="reveal-left max-w-3xl mx-auto md:mx-0 text-center md:text-left flex flex-col items-center md:items-start">
          <span className="eyebrow">Estética Médica · Harmonização Glútea</span>
          <h1 className="title-serif mt-6 text-[2.6rem] sm:text-6xl lg:text-[4.4rem] text-cream">
            Aumente o volume,
            <br />
            firmeza e harmonia
            <br />
            dos seus glúteos
            <span className="italic text-copper"> — sem cirurgia.</span>
          </h1>
          <p className="mt-7 text-base sm:text-lg text-muted-warm max-w-xl leading-relaxed">
            Um protocolo exclusivo, personalizado para cada paciente, que devolve sua
            autoestima e transforma a forma como você se vê no espelho.
          </p>

          <div className="mt-9 flex flex-col items-center md:items-start gap-4">
            <WAButton label="Quero agendar minha consulta" />
            <div className="flex items-center gap-3 text-sm text-muted-warm">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
                ].map((s, i) => (
                  <img key={i} src={s} alt="" className="h-9 w-9 rounded-full object-cover border-2 border-background" />
                ))}
              </div>
              <span>
                <strong className="text-cream">+ 300 mulheres</strong> já aprovaram
              </span>
            </div>
          </div>

          <div className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-full border gold-border text-xs tracking-[0.25em] uppercase text-muted-warm">
            <MapPin className="h-3.5 w-3.5 text-copper" />
            São Paulo <span className="text-copper/60">·</span> Ceará
          </div>
        </div>


      </div>
    </section>
  );
}

/* -------------------------- RESULTS -------------------------- */
function Results() {
  const items = [
    { img: "/contorno e projecao.webp", tag: "Contorno & projeção" },
    { img: "/firmeza e naturalidade.webp", tag: "Firmeza & naturalidade" },
    { img: "/volume harmonico.webp", tag: "Volume harmônico" },
  ];
  return (
    <section id="resultados" className="section-premium">
      <div className="bg-orb top-20 left-1/2 -translate-x-1/2 opacity-60" />
      <div className="container-premium relative z-10">
        <div className="max-w-2xl reveal-up">
          <span className="eyebrow">Resultados reais</span>
          <h2 className="title-serif mt-5 text-4xl sm:text-5xl lg:text-6xl text-cream">
            Veja os antes e depois <span className="italic text-copper">reais</span> de pacientes
          </h2>
          <p className="mt-5 text-muted-warm leading-relaxed">
            Imagens autorizadas de pacientes que viveram o protocolo da Dra. Paula Villena.
            Resultados individuais, sempre planejados com naturalidade.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="stagger-card group relative overflow-hidden rounded-[28px] gold-border bg-card">
              <img
                src={it.img}
                alt={it.tag}
                loading="lazy"
                className="w-full aspect-[640/497] object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-background/70 backdrop-blur border gold-border text-[0.62rem] tracking-[0.28em] uppercase text-gold">
                Resultado real
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <div className="title-serif text-2xl text-cream">{it.tag}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center reveal">
          <WAButton label="Quero minha transformação agora" />
        </div>
      </div>
    </section>
  );
}

/* -------------------------- VIDEO STORIES -------------------------- */
function VideoStories() {
  const videos = [
    { url: "/depoimento1.webm", poster: "/thumb depoimento1.webp" },
    { url: "/depoimento2.webm", poster: "/thumb depoimento2.webp" },
    { url: "/depoimento3.webm", poster: "/thumb depoimento3.webp" },
  ];
  return (
    <section className="section-premium border-t border-border/40 bg-[color:var(--bg-dark)]">
      <div className="container-premium">
        <div className="text-center max-w-2xl mx-auto reveal-up">
          <span className="eyebrow">Depoimentos</span>
          <h2 className="title-serif mt-5 text-4xl sm:text-5xl text-cream">
            Histórias reais de <span className="italic text-copper">transformação</span>
          </h2>
          <p className="mt-5 text-muted-warm">
            Pacientes que viveram a experiência do protocolo da Dra. Paula Villena.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {videos.map((item, i) => (
            <div key={i} className="stagger-card relative rounded-[28px] overflow-hidden gold-border aspect-[9/16] bg-background">
              <video 
                src={item.url} 
                className="absolute inset-0 w-full h-full object-cover" 
                controls
                playsInline
                preload="none"
                poster={item.poster}
              >
                Seu navegador não suporta a reprodução deste vídeo.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



/* -------------------------- SOLUTION / PROTOCOL -------------------------- */
function Solution() {
  const cards = [
    { n: "01", t: "Personalização Total", d: "Tratamento feito sob medida para o seu corpo e seus objetivos." },
    { n: "02", t: "Sessão Única", d: "Procedimento rápido, com resultados visíveis no mesmo dia." },
    { n: "03", t: "Produtos Premium", d: "Somente bioestimuladores e preenchedores aprovados e seguros." },
    { n: "04", t: "Naturalidade Garantida", d: "Resultados harmônicos, elegantes e sem exageros." },
    { n: "05", t: "Confiança Renovada", d: "Mais autoestima, segurança e orgulho ao se olhar no espelho." },
  ];
  return (
    <section id="protocolo" className="section-premium">
      <div className="bg-orb -top-20 -left-20" />
      <div className="container-premium relative z-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <div className="reveal-left">
          <span className="eyebrow">A solução</span>
          <h2 className="title-serif mt-5 text-4xl sm:text-5xl lg:text-6xl text-cream">
            O Protocolo <span className="italic text-copper">Exclusivo</span> da Dra. Paula Villena
          </h2>
          <p className="mt-6 text-muted-warm leading-relaxed">
            Harmonização de Glúteos — o tratamento que redefine curvas com naturalidade e
            segurança. Mais do que um procedimento estético, é uma experiência médica de transformação.
          </p>
          <div className="mt-7 p-5 rounded-2xl premium-card">
            <div className="flex items-center gap-3 text-copper">
              <Stethoscope className="h-4 w-4" />
              <span className="text-[0.7rem] tracking-[0.25em] uppercase">Autoridade médica</span>
            </div>
            <p className="mt-3 text-sm text-cream/90 leading-relaxed">
              A Dra. Paula Villena (CRMSP 275104 | CRMCE 28379) é médica formada pela Unichristus,
              com pós-graduação em Dermatologia Estética e especialização em Remodelação Glútea.
            </p>
          </div>
          <div className="mt-8">
            <WAButton label="Quero minha transformação agora" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`stagger-card premium-card p-7 ${i === 1 ? "sm:translate-y-8" : ""} ${i === 3 ? "sm:translate-y-8" : ""}`}
            >
              <div className="title-serif text-5xl text-copper">{c.n}</div>
              <div className="mt-4 gold-divider w-12" />
              <h3 className="mt-5 title-serif text-2xl text-cream">{c.t}</h3>
              <p className="mt-3 text-sm text-muted-warm leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------- GOLDINCISION -------------------------- */
function GoldIncision() {
  const cards = [
    { n: "01", t: "Atuação na causa da celulite", d: "Auxilia no tratamento das traves fibrosas que puxam a pele e formam depressões." },
    { n: "02", t: "Melhora da qualidade da pele", d: "Pode ser associada a estímulos de colágeno para favorecer firmeza e textura." },
    { n: "03", t: "Planejamento individualizado", d: "A indicação depende do grau de celulite, flacidez, biotipo e objetivos da paciente." },
    { n: "04", t: "Associação com harmonização glútea", d: "Quando indicado, pode complementar o protocolo de contorno, volume e projeção." },
  ];
  return (
    <section
      id="goldincision"
      className="section-premium relative border-y border-border/40"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, color-mix(in oklab, var(--brown) 70%, transparent), var(--bg-black) 70%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{ backgroundImage: `url(${skinDetail})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <svg className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-40 opacity-30 pointer-events-none" viewBox="0 0 1200 200" fill="none">
        <path d="M0 100 C 200 20, 400 180, 600 100 S 1000 20, 1200 100" stroke="url(#gg)" strokeWidth="1" />
        <path d="M0 130 C 200 60, 400 200, 600 130 S 1000 60, 1200 130" stroke="url(#gg)" strokeWidth="0.5" />
        <defs>
          <linearGradient id="gg" x1="0" x2="1">
            <stop offset="0" stopColor="transparent" />
            <stop offset="0.5" stopColor="oklch(0.84 0.09 75)" />
            <stop offset="1" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container-premium relative z-10">
        <div className="text-center max-w-3xl mx-auto reveal-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border gold-border text-[0.65rem] tracking-[0.3em] uppercase text-gold">
            <Gem className="h-3.5 w-3.5" />
            GoldIncision®
          </div>
          <h2 className="title-serif mt-7 text-4xl sm:text-5xl lg:text-[3.6rem] text-cream">
            Uma abordagem avançada para <span className="italic text-copper">celulites</span> e qualidade da pele
          </h2>
          <p className="mt-6 text-muted-warm leading-relaxed">
            Uma técnica voltada ao tratamento das depressões da celulite, associando
            planejamento médico, estímulo de colágeno e liberação das traves fibrosas
            responsáveis pelo aspecto irregular da pele.
          </p>
          <p className="mt-5 text-cream/80 leading-relaxed max-w-2xl mx-auto">
            A GoldIncision® é uma abordagem utilizada para tratar celulites e irregularidades
            de pele a partir de uma análise individualizada. O protocolo pode envolver a liberação
            dos septos fibrosos que tracionam a pele e a associação com recursos voltados à melhora
            da firmeza, textura e qualidade da região tratada.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <div key={i} className="stagger-card premium-card p-7">
              <div className="title-serif text-4xl text-gold">{c.n}</div>
              <div className="mt-4 gold-divider w-10" />
              <h3 className="mt-5 title-serif text-xl text-cream">{c.t}</h3>
              <p className="mt-3 text-sm text-muted-warm leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center reveal">
          <WAButton label="Quero saber se esse protocolo é indicado para mim" />
        </div>
      </div>
    </section>
  );
}

/* -------------------------- PLANNING TIMELINE -------------------------- */
function Planning() {
  const steps = [
    { n: "01", t: "Avaliação da pele e do contorno", d: "Análise da celulite, flacidez, assimetrias, depressões e proporção glútea." },
    { n: "02", t: "Definição do protocolo", d: "Escolha da melhor abordagem para volume, firmeza, textura e naturalidade." },
    { n: "03", t: "Execução médica personalizada", d: "Procedimento conduzido de acordo com a indicação individual e critérios de segurança." },
    { n: "04", t: "Acompanhamento e orientação", d: "Direcionamento pós-procedimento para evolução e manutenção dos resultados." },
  ];
  return (
    <section className="section-premium">
      <div className="container-premium">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center reveal-up">
          <div>
            <span className="eyebrow">Planejamento</span>
            <h2 className="title-serif mt-5 text-4xl sm:text-5xl lg:text-6xl text-cream">
              Quando a GoldIncision® pode <span className="italic text-copper">fazer parte</span> do seu plano?
            </h2>
            <p className="mt-6 text-muted-warm leading-relaxed">
              Cada paciente possui um tipo de pele, grau de celulite, flacidez, volume e expectativa
              estética. Por isso, a Dra. Paula avalia individualmente se a GoldIncision® faz sentido
              dentro do plano de harmonização glútea ou se outra estratégia é mais adequada para o seu caso.
            </p>
          </div>
          <div className="relative rounded-[32px] overflow-hidden gold-border h-[300px] lg:h-[350px]">
            <img 
              src="/dra e chacur.webp" 
              alt="Dra. Paula Villena e Dr. Chacur" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="grid lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="stagger-card premium-card p-6 flex flex-col justify-between">
                <div>
                  <div className="text-[0.65rem] tracking-[0.3em] uppercase text-copper font-semibold">Etapa {s.n}</div>
                  <h3 className="title-serif text-2xl text-cream mt-3 leading-snug">{s.t}</h3>
                  <p className="mt-4 text-sm text-muted-warm leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- ABOUT -------------------------- */
function About() {
  return (
    <section id="sobre" className="section-premium bg-[color:var(--bg-dark)] border-y border-border/40">
      <div className="bg-orb top-32 left-1/4" />
      <div className="container-premium relative z-10 grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
        <div className="reveal-left grid grid-cols-5 gap-4">
          <div className="col-span-3 rounded-[28px] overflow-hidden gold-border gold-glow">
            <img 
              src="/dra paula.webp" 
              onError={(e) => { e.currentTarget.src = doctorPortrait; }} 
              alt="Dra. Paula Villena" 
              loading="lazy" 
              className="w-full h-[520px] object-cover object-[75%_top]" 
            />
          </div>
          <div className="col-span-2 flex flex-col gap-4">
            <div className="rounded-[24px] overflow-hidden gold-border h-[250px]">
              <img 
                src="/sobre2.webp" 
                onError={(e) => { e.currentTarget.src = doctorClinic; }} 
                alt="" 
                loading="lazy" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="rounded-[24px] overflow-hidden gold-border h-[250px]">
              <img 
                src="/sobre3.webp" 
                onError={(e) => { e.currentTarget.src = heroDoctor; }} 
                alt="" 
                loading="lazy" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>

        <div className="reveal-right">
          <span className="eyebrow">Quem sou eu</span>
          <h2 className="title-serif mt-5 text-4xl sm:text-5xl lg:text-[3.6rem] text-cream">
            <span className="italic text-copper">Dra. Paula</span> Villena
          </h2>
          <div className="mt-2 text-xs tracking-[0.25em] uppercase text-copper font-medium">
            CRMSP 275104 · CRMCE 28379
          </div>
          <div className="mt-7 space-y-5 text-muted-warm leading-relaxed">
            <p>
              A Dra. Paula Villena é médica formada pela Unichristus, com pós-graduação em
              Dermatologia Estética e especialização em Remodelação Glútea.
            </p>
            <p>
              Sua formação é marcada por uma busca constante por excelência e atualização,
              com estudos avançados na Human Clinic e participação em congressos médicos de
              referência, como o AMWC — um dos maiores eventos de medicina estética do mundo.
            </p>
            <p>
              Atualmente, atua em clínicas de referência em <span className="text-cream">Alphaville (SP)</span>,
              {" "}<span className="text-cream">Jardins (SP)</span> e <span className="text-cream">Fortaleza (CE)</span>,
              oferecendo um atendimento médico diferenciado, baseado em naturalidade,
              segurança e personalização.
            </p>
            <p className="text-cream">
              <em className="title-serif text-xl text-gold">
                Cada paciente é única, e o verdadeiro propósito da estética é transformar
                autoestima, confiança e bem-estar — não apenas o corpo.
              </em>
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: MapPin, text: "São Paulo & Fortaleza" },
              { icon: Sparkles, text: "Estética personalizada" },
              { icon: ShieldCheck, text: "Naturalidade & segurança" },
            ].map((b, i) => (
              <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border gold-border text-xs text-cream/80">
                <b.icon className="h-3.5 w-3.5 text-copper" />
                {b.text}
              </div>
            ))}
          </div>

          <div className="mt-9">
            <WAButton label="Quero minha transformação agora" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- FAQ -------------------------- */
function FAQ() {
  const faqs = [
    { q: "O que é exatamente a Harmonização de Glúteos?", a: "É um protocolo médico que combina técnicas de bioestímulo e preenchimento para devolver volume, projeção e firmeza aos glúteos com naturalidade, sem cirurgia." },
    { q: "Os resultados aparecem na hora?", a: "Sim, há melhora visível já na primeira sessão. A evolução completa ocorre ao longo das semanas seguintes." },
    { q: "O procedimento dói?", a: "Utilizamos protocolos de anestesia local e cuidados que tornam o procedimento confortável." },
    { q: "Quanto tempo dura o resultado?", a: "A durabilidade varia conforme produto, biotipo e estilo de vida, geralmente entre 18 e 24 meses." },
    { q: "Preciso fazer várias sessões?", a: "Em muitos casos, uma única sessão é suficiente. O plano é definido na avaliação individual." },
    { q: "Fica artificial ou exagerado?", a: "Não. O protocolo é desenhado para naturalidade e harmonia com o seu corpo." },
    { q: "É seguro?", a: "Sim. Trabalhamos com produtos aprovados e técnica médica rigorosa." },
    { q: "Há risco de o produto migrar ou causar deformidade?", a: "Quando indicado e aplicado corretamente, com produtos adequados, o risco é minimizado e o resultado se mantém estável." },
    { q: "Posso voltar à rotina logo após o procedimento?", a: "A maioria das pacientes retoma atividades leves no mesmo dia, seguindo as orientações pós-procedimento." },
    { q: "Quem pode fazer o procedimento?", a: "Mulheres adultas, saudáveis, após avaliação médica individualizada." },
    { q: "Quanto custa a Harmonização de Glúteos?", a: "O valor é definido após avaliação, conforme indicação personalizada. Fale com o time pelo WhatsApp." },
    { q: "Onde a Dra. Paula atende?", a: "Em Alphaville (SP), Jardins (SP) e Fortaleza (CE)." },
    { q: "Como agendar minha consulta?", a: "Pelo botão de WhatsApp nesta página — nossa equipe responde rapidamente." },
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-premium">
      <div className="bg-orb -top-20 right-0 opacity-50" />
      <div className="container-premium relative z-10 grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
        <div className="reveal-left">
          <span className="eyebrow">Tire suas dúvidas</span>
          <h2 className="title-serif mt-5 text-4xl sm:text-5xl lg:text-6xl text-cream">
            Perguntas <span className="italic text-copper">Frequentes</span>
          </h2>
          <p className="mt-6 text-muted-warm leading-relaxed">
            As respostas para o que mais nos perguntam sobre o protocolo, segurança,
            resultados e agendamento.
          </p>
          <div className="mt-8 hidden lg:block">
            <WAButton label="Quero agendar minha consulta" />
          </div>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`stagger-card w-full text-left premium-card overflow-hidden transition-all ${isOpen ? "border-gold/60" : ""}`}
              >
                <div className="flex items-center justify-between gap-5 p-6">
                  <span className="title-serif text-lg sm:text-xl text-cream pr-4">{f.q}</span>
                  <span className={`shrink-0 h-9 w-9 rounded-full border gold-border flex items-center justify-center transition-all ${isOpen ? "bg-gold/15 border-gold" : ""}`}>
                    {isOpen ? <Minus className="h-4 w-4 text-gold" /> : <Plus className="h-4 w-4 text-copper" />}
                  </span>
                </div>
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm text-muted-warm leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------- MENTORSHIP -------------------------- */
function Mentorship() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-premium">
        <div
          className="reveal relative overflow-hidden rounded-[36px] p-10 sm:p-14 gold-border"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--brown) 80%, black), color-mix(in oklab, var(--copper) 18%, var(--bg-black)))",
          }}
        >
          <div className="absolute -top-20 -right-10 bg-orb opacity-60" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-gold">
                <Gem className="h-4 w-4" />
                <span className="text-[0.65rem] tracking-[0.32em] uppercase">Mentoria</span>
              </div>
              <h3 className="title-serif text-3xl sm:text-4xl text-cream mt-5">
                Gostaria de informações sobre <span className="italic text-copper">mentoria</span>?
              </h3>
              <p className="mt-4 text-cream/75">
                Fale com a nossa equipe diretamente no WhatsApp e tire suas dúvidas.
              </p>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="cta-secondary">
              <MessageCircle className="h-4 w-4 text-copper" />
              Falar com time de atendimento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- FOOTER -------------------------- */
function Footer() {
  return (
    <footer className="relative pt-16 pb-10 border-t border-border/50">
      <div className="absolute top-0 inset-x-0 gold-divider" />
      <div className="container-premium">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="title-serif text-2xl text-cream">
              Dra. Paula <span className="text-copper italic">Villena</span>
            </div>
            <div className="mt-2 text-[0.7rem] tracking-[0.3em] uppercase text-copper">
              CRMSP 275104 · CRMCE 28379
            </div>
          </div>
          <ul className="space-y-2 text-sm text-muted-warm">
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-copper" /> Médica formada e especialista em estética</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-copper" /> Consultório em São Paulo e Fortaleza</li>
            <li className="flex items-center gap-2"><Heart className="h-4 w-4 text-copper" /> Atendimento personalizado e humanizado</li>
          </ul>
          <div className="md:text-right">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="cta-secondary">
              <MessageCircle className="h-4 w-4 text-copper" />
              Agendar consulta
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.7rem] text-muted-warm/70">
          <span>© {new Date().getFullYear()} Dra. Paula Villena. Todos os direitos reservados.</span>
          <span className="tracking-[0.2em] uppercase">Site feito com carinho</span>
        </div>
      </div>
    </footer>
  );
}
