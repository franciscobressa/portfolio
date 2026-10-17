import { useEffect, useState } from "react";

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  homepage: string | null;
  updated_at: string;
  fork: boolean;
  archived: boolean;
};

const repoSummaries: Record<string, [string, string]> = {
  "amortizacao-financiamento": [
    "An interactive Price amortization simulator that makes it easier to see the remaining balance, interest, and savings from paying off the final installments early.",
    "Simulador interativo de amortização pelo sistema Price para visualizar o saldo devedor, os juros e a economia ao antecipar parcelas do fim do contrato.",
  ],
  cinelist: [
    "A movie discovery app powered by TMDB, with popular titles, detailed movie pages, searchable results, and a favorites list saved for later.",
    "Aplicação para descobrir filmes com dados do TMDB, reunindo títulos populares, páginas de detalhes, busca e uma lista de favoritos para consultar depois.",
  ],
  portfolio: [
    "A bilingual portfolio showcasing my experience, selected GitHub projects, technical skills, and ways to get in touch, with repository details loaded automatically from GitHub.",
    "Portfólio bilíngue com minha experiência, projetos do GitHub, competências técnicas e formas de contato, com informações dos repositórios carregadas automaticamente.",
  ],
  "eslint-plugin-avoid-comments": [
    "An ESLint plugin that keeps code comments intentional by disallowing comments that do not start with one of the configured keyword prefixes. Available on npm.",
    "Plugin para ESLint que mantém os comentários intencionais ao proibir comentários que não começam com uma das palavras-chave configuradas. Disponível no npm.",
  ],
  "scheduling-module": [
    "A lightweight Node.js and TypeScript scheduler for recurring or fixed-time tasks, with configurable retries, failure fallbacks, structured logs, and JSON execution reports.",
    "Módulo leve de agendamento com Node.js e TypeScript para tarefas recorrentes ou em horários fixos, com novas tentativas configuráveis, fallback em caso de falha, logs e relatórios JSON.",
  ],
};

const experiences = [
  {
    dates: ["DEC 2025 — PRESENT", "DEZ 2025 — ATUAL"],
    company: "NTT DATA · Anheuser-Busch InBev",
    role: ["Senior Frontend Developer", "Senior Frontend Developer"],
    description: [
      "Evolving a global InBev enterprise platform used by 1,000+ employees across 20+ countries. Reduced load time on critical screens from 30 seconds to 5 seconds (−83%) and raised automated test coverage from 40% to 97%.",
      "Evolução de uma plataforma corporativa global da InBev, usada por mais de 1.000 colaboradores em mais de 20 países. Reduzi o carregamento de telas críticas de 30 para 5 segundos (−83%) e elevei a cobertura de testes automatizados de 40% para 97%.",
    ],
    tags: ["React", "TypeScript", "Jest", "Vitest", "Cypress", "Material UI", "Storybook", "CI/CD"],
  },
  {
    dates: ["DEC 2024 — NOV 2025", "DEZ 2024 — NOV 2025"],
    company: "Ticto",
    role: ["Full Stack Developer", "Desenvolvedor Full Stack"],
    description: [
      "Built and maintained mobile-first SPAs and PWAs for an operation with hundreds of thousands of visits. Optimized critical database queries from 2–3 minutes to milliseconds and integrated REST, GraphQL, messaging, and payment services.",
      "Desenvolvi e mantive SPAs e PWAs mobile-first para uma operação com centenas de milhares de acessos. Otimizei consultas críticas de 2–3 minutos para milissegundos e integrei APIs REST, GraphQL, mensageria e pagamentos.",
    ],
    tags: ["React", "Next.js", "TypeScript", "PHP", "Laravel", "Node.js", "PostgreSQL", "Redis", "RabbitMQ", "Kafka"],
  },
  {
    dates: ["SEP 2022 — DEC 2024", "SET 2022 — DEZ 2024"],
    company: "Centro Universitário da Grande Dourados",
    role: ["Full Stack Developer", "Desenvolvedor Full Stack"],
    description: [
      "Led the modernization of all legacy systems and developed distance-learning platforms used by 6,000+ students in Brazil, the US, Europe, and Japan. Built secure REST APIs and introduced consistent testing and code standards.",
      "Liderei a modernização de todos os sistemas legados e desenvolvi plataformas EAD usadas por mais de 6.000 estudantes no Brasil, Estados Unidos, Europa e Japão. Criei APIs REST seguras e implementei padrões de testes e qualidade de código.",
    ],
    tags: ["React", "Next.js", "Vue", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Jest", "DDD"],
  },
  {
    dates: ["OCT 2021 — SEP 2022", "OUT 2021 — SET 2022"],
    company: "Incorporadora São Bento",
    role: ["Junior Systems Development Analyst", "Analista de Desenvolvimento de Sistemas Júnior"],
    description: [
      "Created a customer self-service PWA that reached 10,000+ active users and a sales portal used by around 300 brokers. Automated all five main internal workflows, eliminating manual tasks.",
      "Criei uma PWA de autoatendimento que alcançou mais de 10.000 usuários ativos e um portal de vendas usado por cerca de 300 corretores. Automatizei os cinco principais fluxos operacionais, eliminando tarefas manuais.",
    ],
    tags: ["JavaScript", "Vue", "Vuex", "GraphQL", "C#", ".NET", "BPM", "Docker"],
  },
  {
    dates: ["FEB 2019 — DEC 2019", "FEV 2019 — DEZ 2019"],
    company: ["Municipal Government of Naviraí", "Prefeitura Municipal de Naviraí"],
    role: ["Web Developer Intern", "Estagiário de Desenvolvimento Web"],
    description: [
      "Redesigned the municipal website with a mobile-first approach, improving accessibility and citizen engagement. Also documented technical requirements for IT projects.",
      "Reformulei o portal institucional com abordagem mobile-first, melhorando a acessibilidade e o engajamento dos cidadãos. Também documentei requisitos técnicos para projetos de TI.",
    ],
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Accessibility"],
  },
];

const skillGroups = [
  {
    number: "01",
    title: ["Frontend & interfaces", "Frontend e interfaces"],
    skills: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS", "Material UI", "Storybook", "Design Systems", "Web accessibility"],
  },
  {
    number: "02",
    title: ["Backend & architecture", "Backend e arquitetura"],
    skills: ["Node.js", "NestJS", "Express", "PHP", "Laravel", "C# / .NET", "Microservices", "Clean Architecture", "DDD", "REST", "GraphQL"],
  },
  {
    number: "03",
    title: ["Data, quality & cloud", "Dados, qualidade e cloud"],
    skills: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "RabbitMQ", "Jest", "Vitest", "Cypress", "Docker", "AWS", "GCP", "CI/CD"],
  },
];

const copy = {
  en: {
    nav: ["Experience", "Work", "Skills", "Contact", "Let's talk"],
    eyebrow: "FULL STACK DEVELOPER · BRAZIL",
    headline: <>I build digital<br />experiences <span>that make sense.</span></>,
    intro: "I'm Francisco, a full stack developer. I turn ideas into clear, useful digital products built to grow.",
    download: "Download CV", viewProjects: "View projects", codeWith: <>CODE WITH<br />PURPOSE</>,
    available: "AVAILABLE FOR NEW PROJECTS", scroll: "SCROLL TO EXPLORE ↓",
    workLabel: "PUBLIC GITHUB REPOSITORIES", workTitle: "Featured work",
    workIntro: "A selection of my public GitHub repositories, sorted by recent activity.",
    metrics: ["active users on a customer self-service PWA", "employees using a global platform across 20+ countries", "reduction in critical-screen load time"],
    experienceLabel: "01 / EXPERIENCE", experienceTitle: <>Professional<br /><em>experience</em></>,
    experienceIntro: "Building, modernizing, and scaling digital products across teams and industries.",
    reposView: "View all repositories", reposLoading: "Loading repositories…", reposError: "Repositories could not be loaded right now.",
    reposEmpty: "No public repositories to show.", repoNoDescription: "No description provided.", repoUpdated: "UPDATED",
    openDemo: "Open live demo for", openRepo: "Open GitHub repository",
    skillsLabel: "03 / SKILLS", skillsTitle: <>Technical<br /><em>skills</em></>,
    skillsIntro: "Building scalable, high-performance web products with a focus on quality, from frontend to service integration.",
    education: "EDUCATION", degree: "Software Engineering", degreeSchool: "University Center of Grande Dourados · 2023—2026",
    diploma: "Web Development Technician", diplomaSchool: "Federal Institute of Mato Grosso do Sul · 2017—2019",
    languages: "LANGUAGES", languageTitle: "Portuguese & English", languageInfo: "Fluent Portuguese · Advanced English",
    contactLabel: "04 / CONTACT", contactTitle: "Contact", contactIntro: "Let’s talk about software, digital products, and new opportunities.",
    copyEmail: "Copy e-mail", copiedEmail: "Copied!",
    footerLabel: "HAVE AN IDEA?", footerTitle: "Let's build something good", copyright: "© 2026 FRANCISCO BRESSA · MADE WITH CARE",
    ariaNav: "Main navigation", ariaProjects: "View projects",
  },
  pt: {
    nav: ["Experiência", "Trabalho", "Competências", "Contato", "Vamos conversar"],
    eyebrow: "DESENVOLVEDOR FULL STACK · BRASIL",
    headline: <>Construo experiências<br />digitais <span>que fazem sentido.</span></>,
    intro: "Sou Francisco, desenvolvedor full stack. Transformo ideias em produtos digitais claros, úteis e feitos para crescer.",
    download: "Baixar currículo", viewProjects: "Ver projetos", codeWith: <>CÓDIGO COM<br />INTENÇÃO</>,
    available: "DISPONÍVEL PARA NOVOS PROJETOS", scroll: "ROLAR PARA DESCOBRIR ↓",
    workLabel: "REPOSITÓRIOS PÚBLICOS · GITHUB", workTitle: "Trabalho em destaque",
    workIntro: "Uma seleção dos meus repositórios públicos no GitHub, ordenados pela atividade recente.",
    metrics: ["usuários ativos em uma PWA de autoatendimento", "colaboradores em uma plataforma global em mais de 20 países", "de redução no tempo de carregamento de telas críticas"],
    experienceLabel: "01 / EXPERIÊNCIA", experienceTitle: <>Experiência<br /><em>profissional</em></>,
    experienceIntro: "Desenvolvimento, modernização e evolução de produtos digitais em diferentes equipes e setores.",
    reposView: "Ver todos os repositórios", reposLoading: "Carregando repositórios…", reposError: "Não foi possível carregar os repositórios agora.",
    reposEmpty: "Não há repositórios públicos para exibir.", repoNoDescription: "Sem descrição.", repoUpdated: "ATUALIZADO",
    openDemo: "Abrir demonstração ao vivo de", openRepo: "Abrir repositório no GitHub",
    skillsLabel: "03 / COMPETÊNCIAS", skillsTitle: <>Competências<br /><em>técnicas</em></>,
    skillsIntro: "Desenvolvimento de produtos web escaláveis, de alta performance e com foco em qualidade, do frontend à integração com serviços.",
    education: "FORMAÇÃO", degree: "Engenharia de Software", degreeSchool: "Centro Universitário da Grande Dourados · 2023—2026",
    diploma: "Técnico em Desenvolvimento Web", diplomaSchool: "Instituto Federal de Mato Grosso do Sul · 2017—2019",
    languages: "IDIOMAS", languageTitle: "Português e inglês", languageInfo: "Português fluente · Inglês avançado",
    contactLabel: "04 / CONTATO", contactTitle: "Contato", contactIntro: "Vamos conversar sobre desenvolvimento de software, produtos digitais e novas oportunidades.",
    copyEmail: "Copiar e-mail", copiedEmail: "Copiado!",
    footerLabel: "TEM UMA IDEIA?", footerTitle: "Vamos criar algo bom", copyright: "© 2026 FRANCISCO BRESSA · FEITO COM CUIDADO",
    ariaNav: "Navegação principal", ariaProjects: "Ver projetos",
  },
};

function App() {
  const [language, setLanguage] = useState<"en" | "pt">("en");
  const [emailCopied, setEmailCopied] = useState(false);
  const [repositories, setRepositories] = useState<GitHubRepo[]>([]);
  const [repositoriesLoading, setRepositoriesLoading] = useState(true);
  const [repositoriesFailed, setRepositoriesFailed] = useState(false);
  const t = copy[language];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("bressafrancisco@gmail.com");
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      setEmailCopied(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://api.github.com/users/franciscobressa/repos?sort=updated&direction=desc&per_page=100&type=owner", {
      headers: { Accept: "application/vnd.github+json" },
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("GitHub API request failed");
        return response.json() as Promise<GitHubRepo[]>;
      })
      .then((data) => {
        setRepositories(data.filter((repo) => !repo.fork && !repo.archived).slice(0, 6));
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setRepositoriesFailed(true);
      })
      .finally(() => setRepositoriesLoading(false));

    return () => controller.abort();
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "pt-BR";
    const title = language === "en"
      ? "Francisco Bressa | Senior Full Stack Developer"
      : "Francisco Bressa | Desenvolvedor Full Stack Sênior";
    const description = language === "en"
      ? "Francisco Bressa is a Brazilian senior full stack developer specializing in React, TypeScript, frontend engineering, and scalable web applications."
      : "Francisco Bressa é desenvolvedor full stack sênior brasileiro, especialista em React, TypeScript, engenharia frontend e aplicações web escaláveis.";
    document.title = title;
    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (descriptionTag) descriptionTag.content = description;
    const ogTitleTag = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitleTag) ogTitleTag.content = title;
    const ogDescriptionTag = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDescriptionTag) ogDescriptionTag.content = description;
    const twitterTitleTag = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]');
    if (twitterTitleTag) twitterTitleTag.content = title;
    const twitterDescriptionTag = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]');
    if (twitterDescriptionTag) twitterDescriptionTag.content = description;
  }, [language]);

  return (
    <main>
      <nav className="nav shell" aria-label={t.ariaNav}>
        <a className="brand" href="#inicio" aria-label="Francisco, home">FB<span>.</span></a>
        <div className="nav-links">
          <a href="#experiencia">{t.nav[0]}</a>
          <a href="#trabalho">{t.nav[1]}</a>
          <a href="#competencias">{t.nav[2]}</a>
          <a href="#contato">{t.nav[3]}</a>
          <a className="nav-social" href="https://github.com/franciscobressa" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.68-3.75-1.32-3.75-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>
          </a>
          <a className="nav-social" href="https://linkedin.com/in/franciscobressa" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 .01-4.13 2.06 2.06 0 0 1-.01 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0h.01Z"/></svg>
          </a>
          <a className="nav-contact" href="https://wa.me/5567998661758" target="_blank" rel="noreferrer">{t.nav[4]} <span>↗</span></a>
          <div className="language-switch" aria-label="Language">
            <button className={language === "pt" ? "active" : ""} onClick={() => setLanguage("pt")} aria-pressed={language === "pt"}>PT</button>
            <span>/</span>
            <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
          </div>
        </div>
      </nav>

      <section className="hero shell" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> {t.eyebrow}</div>
          <h1>{t.headline}</h1>
          <div className="hero-bottom">
            <p>{t.intro}</p>
          </div>
          <div className="hero-actions">
            <a className="cv-button" href={language === "en" ? "/CV%20-%20Francisco%20Bressa%20-%20General%20English%20Version.pdf" : "/CV%20Base%20Mestre%20-%20Francisco%20Bressa%20(ATS).pdf"} target="_blank" rel="noreferrer" download={language === "en" ? "Francisco-Bressa-CV-English.pdf" : "Francisco-Bressa-CV.pdf"}>{t.download} <span>↓</span></a>
            <a className="projects-button" href="#trabalho">{t.viewProjects}</a>
            <a className="linkedin-button" href="https://linkedin.com/in/franciscobressa" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-grid" />
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <img src="/me.jpg" alt="Francisco" />
          <span className="visual-label">{t.codeWith}<span className="accent"> ✳</span></span>
          <span className="visual-index">01 / 04</span>
        </div>
        <div className="hero-meta"><span>{t.available}</span><span>{t.scroll}</span></div>
      </section>

      <section className="metrics-section" aria-label={language === "en" ? "Career highlights" : "Destaques da carreira"}>
        <div className="shell metrics-grid">
          <article className="metric"><strong>{language === "en" ? "10,000+" : "10.000+"}</strong><p>{t.metrics[0]}</p></article>
          <article className="metric"><strong>{language === "en" ? "1,000+" : "1.000+"}</strong><p>{t.metrics[1]}</p></article>
          <article className="metric"><strong>83<span>%</span></strong><p>{t.metrics[2]}</p></article>
        </div>
      </section>

      <section className="experience-section" id="experiencia">
        <div className="shell">
          <div className="section-heading experience-heading">
            <div><span className="eyebrow">{t.experienceLabel}</span><h2>{t.experienceTitle}</h2></div>
            <p>{t.experienceIntro}</p>
          </div>
          <div className="experience-list">
            {experiences.map((experience) => (
              <article className="experience-row" key={experience.dates[0]}>
                <div className="experience-meta"><span className="eyebrow">{experience.dates[language === "en" ? 0 : 1]}</span><h3>{Array.isArray(experience.company) ? experience.company[language === "en" ? 0 : 1] : experience.company}</h3></div>
                <div className="experience-detail"><h3>{experience.role[language === "en" ? 0 : 1]}</h3><p>{experience.description[language === "en" ? 0 : 1]}</p><div className="experience-tags">{experience.tags.map((tag) => <span key={tag}>{tag === "Accessibility" && language === "pt" ? "Acessibilidade web" : tag === "Accessibility" ? "Web accessibility" : tag}</span>)}</div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section" id="trabalho">
        <div className="shell">
          <div className="section-heading">
            <div><span className="eyebrow">{t.workLabel}</span><h2>{t.workTitle}<span className="accent">.</span></h2></div>
            <div className="work-intro"><p>{t.workIntro}</p><a className="github-all-link" href="https://github.com/franciscobressa?tab=repositories" target="_blank" rel="noreferrer">{t.reposView} <span>↗</span></a></div>
          </div>
          <div className="featured-repositories">
            {repositoriesLoading && <p className="repos-message" aria-live="polite">{t.reposLoading}</p>}
            {repositoriesFailed && <p className="repos-message" role="status">{t.reposError} <a href="https://github.com/franciscobressa?tab=repositories" target="_blank" rel="noreferrer">GitHub ↗</a></p>}
            {!repositoriesLoading && !repositoriesFailed && repositories.length === 0 && <p className="repos-message">{t.reposEmpty}</p>}
            {!repositoriesLoading && !repositoriesFailed && repositories.length > 0 && <div className="project-list">{repositories.map((repo, index) => {
              const updated = new Intl.DateTimeFormat(language === "en" ? "en-US" : "pt-BR", { month: "short", year: "numeric" }).format(new Date(repo.updated_at));
              return <article className="project" key={repo.id}>
                <a className="project-media" href={repo.homepage || repo.html_url} target="_blank" rel="noreferrer" aria-label={`${repo.homepage ? t.openDemo : t.openRepo} ${repo.name}`}>
                  <div className="project-placeholder"><span>{repo.name.slice(0, 2).toUpperCase()}<span className="accent">.</span></span><i>{repo.language || "GitHub"}</i></div>
                  <img className="repo-preview" data-extension="png" src={`/preview/${encodeURIComponent(repo.name)}.png`} alt={`Preview of ${repo.name}`} onError={(event) => {
                    const formats = ["png", "jpg", "jpeg", "webp"];
                    const nextFormat = formats.indexOf(event.currentTarget.dataset.extension || "png") + 1;
                    if (nextFormat < formats.length) {
                      const extension = formats[nextFormat];
                      event.currentTarget.dataset.extension = extension;
                      event.currentTarget.src = `/preview/${encodeURIComponent(repo.name)}.${extension}`;
                    } else {
                      event.currentTarget.style.display = "none";
                    }
                  }} />
                  <span className="media-index">{String(index + 1).padStart(2, "0")} / {String(repositories.length).padStart(2, "0")}</span>
                </a>
                <div className="project-content">
                  <div className="project-kicker"><span>{repo.name}</span><span>{t.repoUpdated} · {updated}</span></div>
                  <h3>{repo.description || repo.name}</h3>
                  {repoSummaries[repo.name] && <p>{repoSummaries[repo.name][language === "en" ? 0 : 1]}</p>}
                  <div className="tags">{repo.language && <span>{repo.language}</span>}<span>☆ {repo.stargazers_count}</span><span>⑂ {repo.forks_count}</span></div>
                  <div className="project-links"><a href={repo.html_url} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>{repo.name === "eslint-plugin-avoid-comments" && <a href="https://www.npmjs.com/package/eslint-plugin-avoid-comments" target="_blank" rel="noreferrer">npm <span>↗</span></a>}{repo.homepage && <a href={repo.homepage} target="_blank" rel="noreferrer">{language === "en" ? "Live demo" : "Ver projeto"} <span>↗</span></a>}</div>
                </div>
              </article>;
            })}</div>}
          </div>
        </div>
      </section>

      <section className="skills-section" id="competencias">
        <div className="shell">
          <div className="section-heading skills-heading">
            <div><span className="eyebrow">{t.skillsLabel}</span><h2>{t.skillsTitle}</h2></div>
            <p>{t.skillsIntro}</p>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => <article className="skill-card" key={group.number}><span className="skill-number">{group.number}</span><h3>{group.title[language === "en" ? 0 : 1]}</h3><div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}
          </div>
          <div className="skills-bottom">
            <div className="education-block"><span className="eyebrow">{t.education}</span><div><h3>{t.degree}</h3><p>{t.degreeSchool}</p></div><div><h3>{t.diploma}</h3><p>{t.diplomaSchool}</p></div></div>
            <div className="languages-block"><span className="eyebrow">{t.languages}</span><div><h3>{t.languageTitle}</h3><p>{t.languageInfo}</p></div></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="shell contact-inner">
          <div className="contact-copy"><span className="eyebrow">{t.contactLabel}</span><h2><em>{t.contactTitle}</em></h2><p>{t.contactIntro}</p></div>
          <div className="contact-details">
            <a className="contact-email" href="mailto:bressafrancisco@gmail.com" target="_blank" rel="noreferrer">bressafrancisco@gmail.com</a>
            <div className="contact-socials"><a href="https://linkedin.com/in/franciscobressa" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/franciscobressa" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://wa.me/5567998661758" target="_blank" rel="noreferrer">WhatsApp ↗</a></div>
            <button className="copy-email" type="button" onClick={handleCopyEmail}>{emailCopied ? t.copiedEmail : t.copyEmail}</button>
          </div>
        </div>
      </section>

      <footer className="footer"><div className="shell footer-inner"><div><span className="eyebrow">{t.footerLabel}</span><a className="footer-cta" href="mailto:bressafrancisco@gmail.com" target="_blank" rel="noreferrer">{t.footerTitle}<span>↗</span></a></div><div className="footer-right"><div className="socials"><a href="https://github.com/franciscobressa" target="_blank" rel="noreferrer">GitHub<span>↗</span></a><a href="https://linkedin.com/in/franciscobressa" target="_blank" rel="noreferrer">LinkedIn<span>↗</span></a><a href="mailto:bressafrancisco@gmail.com" target="_blank" rel="noreferrer">Email<span>↗</span></a></div><span className="copyright">{t.copyright}</span></div></div></footer>
    </main>
  );
}

export default App;
