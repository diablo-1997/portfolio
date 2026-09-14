import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Download,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Server,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
  Code,
  AppWindow,
  Trophy,
  Loader2,
} from 'lucide-react';
import resumePDF from './assets/Resume.pdf';


type Project = {
  title: string;
  label: string;
  description?: string;
  bullets?: string[];
  tags?: string[];
  href?: string;
  urlLabel?: string;
  featured?: boolean;
};

// const coreSkills = [
//   {
//     icon: Server,
//     title: 'Backend & APIs',
//     items: ['Python', 'Django & DRF', 'REST API design', 'Service-layer architecture'],
//   },
//   {
//     icon: Database,
//     title: 'Data & Systems',
//     items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Schema design'],
//   },
//   {
//     icon: Layers3,
//     title: 'Architecture',
//     items: ['Modular monoliths', 'Domain separation', 'Multi-module platforms', 'Reusable components'],
//   },
//   {
//     icon: ShieldCheck,
//     title: 'Delivery & Ops',
//     items: ['AWS EC2', 'Docker', 'DNS & domains', 'Environment configuration'],
//   },
// ];

const coreSkills = [
  {
    icon: Code,
    title: 'Languages & Core',
    items: ['Python', 'JavaScript', 'TypeScript', 'OOP', 'Data Structures'],
  },
  {
    icon: Server,
    title: 'Backend & Frameworks',
    items: ['Django', 'Django REST Framework', 'REST API design', 'Validation', 'Pagination', 'Versioning', 'API-Driven UI Integration'],
  },
  {
    icon: Layers3,
    title: 'Architecture',
    items: ['Service-Layer Architecture', 'RBAC', 'Modular Monolith', 'Business Logic Abstraction', 'Multi-Module Platforms', 'Reusable components'],
  },
  {
    icon: Database,
    title: 'Data & Systems',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Schema Design'],
  },
  {
    icon: AppWindow,
    title: 'Frontend & Integration',
    items: ['React.js', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    icon: ShieldCheck,
    title: 'Delivery & Ops',
    items: ['AWS EC2', 'Vercel', 'Docker', 'DNS & domains', 'Environment Configuration'],
  },
  {
    icon: Trophy,
    title: 'Leadership & process',
    items: ['Team Leadership', 'Agile', 'Product Development', 'Production Deployment', 'Technical Documentation'],
  },
];

const experience = [
  {
    period: 'FEB 2021 — APR 2026',
    role: 'Full Stack Engineer / Tech Lead',
    company: 'Telth Healthcare Private Limited',
    location: 'Hybrid · Salem, TN, India',
    summary: '',
    points: [
      'Designed and built scalable backend systems for real-world healthcare operations, balancing delivery speed with long-term maintainability.',
      'Architected modular systems with clean service-layer patterns and reusable domain components.',
      'Designed REST APIs, role-based access, and authentication systems for production applications.',
      'Deployed and managed production applications on AWS & Vercel, handling end-to-end infrastructure, domain configuration, and multi-stage server environments.',
      'Implemented authentication systems with role-based access control (RBAC) and secure API practices.',
      'Reduced operational overhead by digitizing workflows such as onboarding, scheduling, and reporting.',
      'Led a cross-functional team across development, operations, and delivery timelines.',
    ],
  },
];

const featuredProjects: Project[] = [
  {
    title: 'Natlife Platform',
    label: 'scalable Django backend system',
    bullets: [
      'Built a modular multi-app backend system using Django and DRF',
      'Implemented service-layer architecture for clean separation of business logic',
      'Designed REST APIs with validation, serializers, and reusable components',
      'Developed a custom authentication system with role-based permissions',
      'Engineered a scalable database schema for handling multi-module workflows',
    ],
    featured: false,
  },
  {
    title: 'Healthcare Worker Onboarding Platform',
    label: 'HealthTech',
    // urlLabel: 'app.telth.care',
    bullets: [
      'Developed backend system for onboarding and managing healthcare professionals',
      'Designed scalable architecture for handling workflow-based processes',
      'Improved onboarding efficiency through automation',
    ],
    href: 'https://app.telth.care/',
    featured: false,
  },
  {
    title: 'Online University Admin Platform',
    label: 'EdTech',
    // urlLabel: 'cucom.campushubedu.com/institute',
    bullets: [
      'Built an end-to-end admin system managing student lifecycle and academic workflows',
      'Automated admissions, onboarding, scheduling, and exam result processing',
      'Enabled centralized control for faculty, students, and operations',
    ],
    href: 'https://cucom.campushubedu.com/institute/',
    featured: false,
  },
];

const personalProjects: Project[] = [
  {
    title: 'Baby Gender Finder',
    label: 'Personal project',
    description:
      'A modern web application built with React and Django REST Framework (DRF) that predicts baby genders using the traditional Chinese lunar calendar chart.',
    tags: ['Completed'],
    href: 'https://bgf.campushubedu.com/',
  },
  {
    title: 'Binary Magic',
    label: 'Personal project',
    description:
      'An interactive web application built with React and Django REST Framework (DRF) that digitizes and automates the classic binary number-guessing card trick.',
    tags: ['Completed'],
    href: 'https://binary-magic.campushubedu.com/',
  },
  {
    title: 'R360 API',
    label: 'Personal project',
    description:
      'This Python package provides an interface to interact with the Research 360 API, allowing users to fetch and process market data from various indices over different periods.',
    tags: ['In progress'],
    href: '',
  },
];

function App() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') setIsDark(false);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    window.localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark((current) => !current);

  return (
    <div className="site-shell">
      <div className="bg-pattern" aria-hidden="true">
        <div className="bg-grid" />
        <div className="bg-blob bg-blob-1" />
        <div className="bg-blob bg-blob-2" />
        <div className="bg-noise" />
      </div>

      <header className="site-header glass">
        <a className="brand" href="#top" aria-label="Sri Balaji home">
          <span className="brand-mark">SB</span>
          <span className="brand-name">
            Portfolio
          </span>
        </a>
        <nav
          className={menuOpen ? 'main-nav is-open' : 'main-nav'}
          aria-label="Main navigation"
        >
          <a href="#summary" onClick={() => setMenuOpen(false)}>
            Summary
          </a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
        <div className="header-actions">
          <button
            className="icon-button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <ResumeDownloadButton className="header-cta">
            Resume <Download size={14} />
          </ResumeDownloadButton>
          <button
            className="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" /> Available for select opportunities
            </div>
            <h1>
              Sri Balaji <em>S.</em>
            </h1>
            <p className="hero-intro">
              Full Stack Engineer building scalable backend systems and
              production-grade web applications with Django and Python
              — across EdTech and HealthTech.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <ResumeDownloadButton className="text-link">
                Download resume <span>↓</span>
              </ResumeDownloadButton>
            </div>
            <div className="hero-meta">
              <span>
                <MapPin size={15} /> Chennai, TN, India (Hybrid)
              </span>
              <span className="meta-divider" />
              <span><em>5+ years</em> experience</span>
            </div>
          </div>
          <div className="hero-aside">
            <div className="orbit-card glass-card">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit-core">
                <Code2 size={30} />
              </div>
              <span className="orbit-tag tag-top glass-tag">Django + DRF</span>
              <span className="orbit-tag tag-right glass-tag">System design</span>
              <span className="orbit-tag tag-bottom glass-tag">Product thinking</span>
            </div>
            <div className="aside-note">
              <Sparkles size={15} />
              <span>
                From architecture
                <br />
                to deployment
              </span>
            </div>
          </div>
        </section>

        <section className="proof-strip">
          <span className="proof-label">Core strengths</span>
          <div className="proof-items">
            <span>Backend systems</span>
            <span>API architecture</span>
            <span>Team leadership</span>
            <span>Product delivery</span>
          </div>
        </section>

        <section className="section-pad section-block" id="summary">
          <div className="section-heading side-heading" style={{ textAlign: "center" }}>
            <p className="kicker">Summary</p>
            <h2>The signal, not <em>the noise.</em></h2>
            <p className="section-description" style={{ maxWidth: "none", padding: "3rem" }}>
              Full Stack Engineer with 5+ years of experience building
              scalable backend systems and production-grade web applications
              using Django and Python. Specialized in designing modular
              architectures, optimizing backend performance, and delivering
              end-to-end systems in EdTech and HealthTech domains. Proven
              ability to lead teams, own product development, and deploy
              reliable applications in production environments.
            </p>
          </div>
        </section>

        <section className="section-pad split-section" id="experience">
          <div className="section-heading side-heading">
            <p className="kicker">Experience</p>
            <h2>
              Making the complex
              <br />
              feel <em>clear.</em>
            </h2>
            <p className="section-description">
              I care about the invisible details: the boundaries between
              services, the naming of a data model, and the calm a well-built
              system creates.
            </p>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={item.company}>
                <div className="experience-period">{item.period}</div>
                <div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p className="experience-location">{item.location}</p>
                  <p className="experience-summary">{item.summary}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>
                        <Check size={15} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad section-block" id="work">
          <div className="section-heading compact">
            <div>
              <p className="kicker">Key Projects</p>
              <h2>Projects with <em>a purpose.</em></h2>
            </div>
            <p className="section-description">
              A few systems and platforms I've helped shape across
              healthcare, education, and independent exploration.
            </p>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                spanFull={index === 0}
              />
            ))}
          </div>
        </section>

        <section className="section-pad personal-section">
          <div className="section-heading compact">
            <div>
              <p className="kicker">Personal projects</p>
              <h2>Beyond <em>the brief.</em></h2>
            </div>
            <p className="section-description">
              A growing collection of experiments, ideas, and things I&apos;ve
              built outside of client work.
            </p>
          </div>
          <div className="personal-grid">
            {personalProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                personal
              />
            ))}
          </div>
        </section>

        <section className="section-pad skills-section" id="about">
          <div className="section-heading">
            <div>
              <p className="kicker">Toolkit</p>
              <h2>Built for the whole <em>picture.</em></h2>
            </div>
            <p className="section-description">
              From the first data model to the last deployment, these are the
              tools and practices I reach for most.
            </p>
          </div>
          <div className="skills-grid">
            {coreSkills.map(({ icon: Icon, title, items }) => (
              <div className="skill-card glass-card" key={title}>
                <Icon size={22} strokeWidth={1.6} />
                <h3>{title}</h3>
                <div className="skill-list">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner section-pad">
            <div className="contact-content">
              <p className="kicker">Have a good one in mind?</p>
              <h2>
                Let&apos;s build something
                <br />
                <em>worth remembering.</em>
              </h2>
              <div className="contact-actions">
                <a
                  className="button button-light"
                  href="mailto:sribalaji791990@gmail.com"
                >
                  Start a conversation <Mail size={17} />
                </a>
                <ResumeDownloadButton className="button button-outline-light">
                  Download resume <Download size={14} />
                </ResumeDownloadButton>
              </div>
            </div>
            <div className="contact-mark">
              SB<span>.</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {currentYear} <em>Sri Balaji S.</em></span>
        <span>Full stack engineer · system designer</span>
        <div className="footer-links">
          <a href="mailto:sribalaji791990@gmail.com" aria-label="Email">
            <Mail size={17} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a href="#top" aria-label="Back to top">
            <Globe2 size={17} />
          </a>
        </div>
      </footer>
    </div>
  );
}


function ResumeDownloadButton({ className, children } : 
  { className: string, children: React.ReactNode }
) {
  const [loading, setLoading] = useState(false);

  const handleResumeDownload = () => {
    setLoading(true);

    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  return (
    <button className={className} onClick={handleResumeDownload} disabled={loading}>
      {loading ? (
        <>
          <Loader2 className="spinner" size={18} />
          Starting download...
        </>
      ) : children}
    </button>
  );
};

function ProjectCard({
  project,
  index,
  personal = false,
  spanFull = false,
}: {
  project: Project;
  index: number;
  personal?: boolean;
  spanFull?: boolean;
}) {
  return (
    <article
      className={
        project.featured
          ? `project-card featured glass-card${spanFull ? ' span-full' : ''}`
          : `project-card glass-card${spanFull ? ' span-full' : ''}`
      }
    >
      <div className="project-number">0{index + 1}</div>
      <div className="project-card-body">
        <div className="project-label">{project.label}</div>
        <h3>{project.title}</h3>
        {project.urlLabel && (
          <a className="project-url" href={project.href} target="_blank" rel="noreferrer">
            {project.urlLabel}
          </a>
        )}
        {project.bullets ? (
          <ul className="project-bullets">
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : (
          <>
            <p>{project.description}</p>
            {project.tags && (
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            )}
          </>
        )}
      </div>
      {project.href ? (
        <a
          className="project-link"
          href={project.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${project.title}`}
        >
          <ArrowUpRight size={19} />
        </a>
      ) : (
        <span className="project-link muted">
          <Code2 size={18} />
        </span>
      )}
      {personal && <span className="personal-badge">Personal</span>}
    </article>
  );
}


export default App;
