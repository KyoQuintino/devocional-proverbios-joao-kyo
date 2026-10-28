import "./home.css";
import { useEffect } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Check, ChevronDown, FileText, Heart, Leaf, ShieldCheck, Sparkles } from "lucide-react";

const CHECKOUT_URL = "https://pay.hotmart.com/V107767990Y";
const coverImage = "/manus-storage/devocional-proverbios-capa-optimized_e770f064.jpg";
const promoImage = "/manus-storage/devocional-proverbios-hotmart-promo-optimized_9ff41b84.jpg";
const heroImage = "/manus-storage/devocional-proverbios-hero-optimized_18bf3c92.jpg";

const chapters = [
  { title: "Confiança e escolhas", detail: "Busque direção e reflita sobre decisões com mais intenção." },
  { title: "Palavras e emoções", detail: "Explore o valor da prudência, da paciência e do cuidado ao falar." },
  { title: "Integridade e justiça", detail: "Pense em como viver seus valores nas relações e no cotidiano." },
  { title: "Disciplina e trabalho", detail: "Reflita sobre hábitos, prioridades e responsabilidade." },
  { title: "Amizade e relacionamentos", detail: "Encontre princípios para cultivar vínculos com sabedoria." },
  { title: "A mulher virtuosa", detail: "Encerre a jornada com o retrato de Provérbios 31." },
];

const questions = [
  {
    q: "O e-book é impresso ou digital?",
    a: "É um material digital em PDF, com 97 páginas, para leitura no seu próprio ritmo.",
  },
  {
    q: "Como o conteúdo está organizado?",
    a: "O material reúne 31 capítulos temáticos inspirados em Provérbios. Ao longo da leitura, você encontra versículos-chave, explicações, aplicações práticas e orações.",
  },
  {
    q: "Preciso ler um capítulo por dia?",
    a: "Não. Você pode avançar no seu ritmo, revisitar os temas e escolher a frequência de leitura que funciona para você.",
  },
  {
    q: "O e-book substitui a leitura da Bíblia?",
    a: "Não. O material é um apoio devocional e não substitui a leitura bíblica, o acompanhamento pastoral ou aconselhamento profissional quando necessário.",
  },
];

function ActionLink({ children, secondary = false }: { children: React.ReactNode; secondary?: boolean }) {
  return (
    <button
      className={secondary ? "button button--light" : "button button--gold"}
      type="button"
      data-checkout-url={CHECKOUT_URL}
      onClick={() => window.location.assign(CHECKOUT_URL)}
    >
      {children}
      <ArrowRight aria-hidden="true" size={17} />
    </button>
  );
}

export default function Home() {
  useEffect(() => {
    const stylesheetId = "hotmart-checkout-widget-styles";
    if (!document.getElementById(stylesheetId)) {
      const stylesheet = document.createElement("link");
      stylesheet.id = stylesheetId;
      stylesheet.rel = "stylesheet";
      stylesheet.type = "text/css";
      stylesheet.href = "https://static.hotmart.com/css/hotmart-fb.min.css";
      document.head.appendChild(stylesheet);
    }

    const scriptId = "hotmart-checkout-widget-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "text/javascript";
      script.src = "https://static.hotmart.com/checkout/widget.min.js";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Bíblia em Arte — início">
          <span className="brand__mark"><BookOpen size={20} strokeWidth={1.6} aria-hidden="true" /></span>
          <span className="brand__name">Bíblia <i>em</i> Arte</span>
        </a>
        <nav className="top-nav" aria-label="Navegação principal">
          <a href="#jornada">A jornada</a>
          <a href="#conteudo">O que você encontra</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <button
          className="header-cta"
          type="button"
          data-checkout-url={CHECKOUT_URL}
          onClick={() => window.location.assign(CHECKOUT_URL)}
        >
          Comprar agora <ArrowUpRight size={15} aria-hidden="true" />
        </button>
      </header>

      <section className="hero" id="inicio" style={{ backgroundImage: `linear-gradient(90deg, rgba(17, 27, 22, .98) 0%, rgba(17, 27, 22, .91) 39%, rgba(17, 27, 22, .54) 70%, rgba(17, 27, 22, .18) 100%), url(${heroImage})` }}>
        <div className="hero__grain" aria-hidden="true" />
        <div className="hero__content">
          <div className="eyebrow eyebrow--light"><span /> Um convite à sabedoria cotidiana</div>
          <h1>Sabedoria para viver.<br /><em>Uma reflexão de cada vez.</em></h1>
          <p className="hero__lead">Uma jornada devocional por Provérbios, com ensinamentos para levar da leitura à vida real.</p>
          <div className="hero__facts" aria-label="Informações do e-book">
            <span><BookOpen size={17} aria-hidden="true" /> 31 capítulos</span>
            <span><FileText size={17} aria-hidden="true" /> E-book em PDF</span>
            <span><Heart size={17} aria-hidden="true" /> Reflexões e orações</span>
          </div>
          <div className="hero__actions">
            <ActionLink>Comprar agora</ActionLink>
            <a className="text-link text-link--light" href="#conteudo">Veja o que inclui <ArrowDown size={15} aria-hidden="true" /></a>
          </div>
          <p className="hero__byline">Por Henrietta Mitchell <span>·</span> Bíblia em Arte</p>
        </div>
        <div className="hero__book" aria-label="Capa do e-book Devocional Diário em Provérbios">
          <div className="hero__book-glow" aria-hidden="true" />
          <img src={coverImage} alt="Capa do e-book Devocional Diário em Provérbios, de Henrietta Mitchell" fetchPriority="high" />
          <span className="hero__book-caption">Um caminho de reflexão, fé e sabedoria</span>
        </div>
        <div className="hero__scroll" aria-hidden="true"><span /> Role para continuar</div>
      </section>

      <section className="intro section-pad" id="jornada">
        <div className="section-kicker"><span>01</span><i /></div>
        <div className="intro__grid">
          <div>
            <p className="eyebrow">Quando a vida pede direção</p>
            <h2>Há sabedoria que merece<br /><em>um lugar no seu dia.</em></h2>
          </div>
          <div className="intro__copy">
            <p>Decisões, conversas e novos desafios fazem parte da vida. Este devocional convida você a fazer uma pausa, refletir sobre os ensinamentos de Provérbios e considerar como vivê-los no cotidiano.</p>
            <p>Não é uma fórmula pronta. É um percurso de leitura e reflexão cristã — para seguir no seu ritmo, com abertura para aprender e crescer.</p>
            <a className="text-link" href="#conteudo">Conheça os temas <ArrowDown size={15} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="scripture">
          <span className="scripture__ornament" aria-hidden="true">“</span>
          <blockquote>Confia no Senhor de todo o teu coração.</blockquote>
          <cite>Provérbios 3:5</cite>
          <span className="scripture__rule" aria-hidden="true" />
        </div>
      </section>

      <section className="content-section section-pad" id="conteudo">
        <div className="section-heading">
          <div className="section-kicker"><span>02</span><i /></div>
          <div>
            <p className="eyebrow">Uma leitura para acompanhar você</p>
            <h2>Princípios antigos.<br /><em>Reflexões para a vida de hoje.</em></h2>
          </div>
          <p className="section-heading__aside">Ao longo de 31 capítulos, diferentes temas de Provérbios ganham espaço para ser lidos, pensados e aplicados com intenção.</p>
        </div>
        <div className="theme-grid">
          {chapters.map((chapter, index) => (
            <article className="theme-card" key={chapter.title}>
              <div className="theme-card__top"><span>0{index + 1}</span><ArrowUpRight size={16} aria-hidden="true" /></div>
              <h3>{chapter.title}</h3>
              <p>{chapter.detail}</p>
            </article>
          ))}
        </div>
        <div className="content-note"><Sparkles size={17} aria-hidden="true" /><span>Temas apresentados em reflexões com versículo-chave, explicação, aplicação prática e oração.</span></div>
      </section>

      <section className="reading-section section-pad">
        <div className="reading-image">
          <img src={promoImage} alt="E-book Devocional Diário em Provérbios sobre mesa de madeira, com Bíblia aberta e luz de amanhecer" loading="lazy" />
          <span className="reading-image__tag">Bíblia em Arte</span>
        </div>
        <div className="reading-copy">
          <div className="section-kicker"><span>03</span><i /></div>
          <p className="eyebrow">Um momento que cabe na sua rotina</p>
          <h2>Leia. Reflita.<br /><em>Leve consigo.</em></h2>
          <p>Abra o PDF quando for melhor para você: em um momento de quietude, no começo do dia ou sempre que quiser revisitar um tema. Use cada capítulo como ponto de partida para a sua própria reflexão.</p>
          <ul className="check-list">
            <li><Check size={17} aria-hidden="true" /> Leitura digital no seu ritmo</li>
            <li><Check size={17} aria-hidden="true" /> Temas organizados em 31 capítulos</li>
            <li><Check size={17} aria-hidden="true" /> Reflexões, aplicações e orações</li>
          </ul>
          <ActionLink secondary>Comprar agora</ActionLink>
        </div>
      </section>

      <section className="offer-section section-pad" id="oferta">
        <div className="offer-card">
          <div className="offer-card__copy">
            <div className="eyebrow eyebrow--light"><span /> Seu próximo momento de leitura</div>
            <h2>Comece sua jornada<br /><em>pela sabedoria de Provérbios.</em></h2>
            <p>Um material digital para ler com calma, refletir e revisitar sempre que fizer sentido para você.</p>
            <div className="offer-meta"><span><FileText size={16} aria-hidden="true" /> PDF digital</span><span><BookOpen size={16} aria-hidden="true" /> 97 páginas</span><span><ShieldCheck size={16} aria-hidden="true" /> Acesso pela Hotmart</span></div>
            <a
              className="hotmart-fb hotmart__button-checkout hotmart-checkout-cta"
              href={CHECKOUT_URL}
              onClick={(event) => event.preventDefault()}
              aria-label="Comprar o e-book na Hotmart"
            >
              <img src="https://static.hotmart.com/img/btn-buy-green.png" alt="Comprar com segurança pela Hotmart" />
            </a>
          </div>
          <div className="offer-card__visual"><img src={coverImage} alt="Capa do Devocional Diário em Provérbios" loading="lazy" /></div>
          <div className="offer-card__ornament" aria-hidden="true"><Leaf size={125} strokeWidth={0.55} /></div>
        </div>
      </section>

      <section className="faq-section section-pad" id="duvidas">
        <div className="faq-heading">
          <div className="section-kicker"><span>04</span><i /></div>
          <p className="eyebrow">Antes de começar</p>
          <h2>Algumas respostas<br /><em>para seguir com clareza.</em></h2>
        </div>
        <div className="faq-list">
          {questions.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}<ChevronDown size={18} aria-hidden="true" /></summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand brand--footer" href="#inicio"><span className="brand__mark"><BookOpen size={19} strokeWidth={1.6} aria-hidden="true" /></span><span className="brand__name">Bíblia <i>em</i> Arte</span></a>
        <p>Uma caminhada de fé, reflexão e sabedoria.</p>
        <span className="footer-small">Devocional Diário em Provérbios · Henrietta Mitchell</span>
      </footer>
    </main>
  );
}
