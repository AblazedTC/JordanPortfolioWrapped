/**
 * Jordan Wrapped - all portfolio content lives here.
 * Edit this file to update the site; components only map over this data.
 */

export const personal = {
  name: "Jordan Jerkins",
  role: "Software Engineer",
  year: "2026",
  tagline:
    "Building AI-powered systems for audio, automation, and real-time applications.",
  subheading:
    "A Wrapped-style look at my projects, internships, technical stack, and growth as a builder.",
  links: {
    github: "https://github.com/AblazedTC",
    linkedin: "https://www.linkedin.com/in/jordanjerkins/",
    email: "mailto:jordan879upbeat@gmail.com",
    resume: "/Resume/ResumeJordanJerkins.pdf",
  },
};

export const topTech = {
  kicker: "Your Top Technologies",
  headline: "The stack on heavy rotation",
  items: [
    { name: "Java / Spring Boot", detail: "service APIs and auth", plays: 95 },
    { name: "Python / FastAPI", detail: "ML + backend pipelines", plays: 92 },
    { name: "TypeScript / Next.js", detail: "dashboards and product UI", plays: 88 },
    { name: "PostgreSQL + Redis", detail: "durable data + fast state", plays: 84 },
    { name: "Docker + Azure", detail: "containerized deployment", plays: 79 },
    { name: "MongoDB", detail: "document-heavy analytics features", plays: 73 },
    { name: "C++ / JUCE", detail: "real-time audio tooling", plays: 66 },
  ],
};

export const mostPlayed = {
  kicker: "#1 Most Played Project",
  name: "MusicDecoded",
  artist: "Jordan Jerkins - AI Music Analysis",
  image: "/pfp/pianoplaying.PNG",
  imageNote: "No logo yet, so enjoy a picture of me and a piano :)",
  description:
    "A full-stack AI music analysis system: Android app -> Spring Boot API -> async Python worker. Users submit a YouTube link and get beats, downbeats, chords, and synced analysis artifacts without permanently storing source audio/video.",
  stats: [
    { label: "Architecture", value: "Spring API + Python worker" },
    { label: "Flow", value: "YouTube -> queue -> async analysis" },
    { label: "Storage", value: "Postgres + Redis + object storage" },
    { label: "Security rule", value: "No permanent media storage" },
  ],
  githubUrl: "https://github.com/AblazedTC/musicDecoded",
  caseStudyUrl: "",
};

export const catalog = {
  kicker: "The Catalog",
  headline: "More from the discography",
  projects: [
    {
      name: "NiCE AI Dashboard",
      genre: "Full-Stack",
      description:
        "Analytics and QA dashboard for emergency-call workflows with sentiment, evaluation, and coaching views.",
      stack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
      link: "https://github.com/dreuxhebert/NiCE_AI_Dashboar_Demo",
    },
    {
      name: "Inform AI Backend",
      genre: "Backend",
      description:
        "FastAPI backend powering transcription, QA scoring, protocols, JWT auth, and role-based routes.",
      stack: ["FastAPI", "MongoDB", "Python", "JWT"],
      link: "",
    },
    {
      name: "CareRouter",
      genre: "Hackathon",
      description:
        "Shipped a full-stack healthcare routing app in a sprint with a live deployment.",
      stack: ["React", "TypeScript", "Python", "Vercel"],
      link: "https://github.com/AblazedTC/care-router",
    },
    {
      name: "Spectrum Analyser",
      genre: "C++/Audio",
      description:
        "Real-time FFT audio spectrum visualizer built with JUCE and native C++.",
      stack: ["C++", "JUCE", "DSP"],
      link: "https://github.com/AblazedTC/SpectrumAnalyser",
    },
    {
      name: "GitProfile",
      genre: "Portfolio",
      description:
        "Developer-facing profile and portfolio hub focused on backend, AI, and project delivery.",
      stack: ["Markdown", "GitHub", "Portfolio"],
      link: "https://github.com/AblazedTC",
    },
    {
      name: "NetworkingBot",
      genre: "Automation",
      description:
        "Personal job-search automation tool that reads a Google Sheets company tracker, scrapes LinkedIn message threads via Playwright, and sends a daily digest email surfacing who to follow up with.",
      stack: ["Python", "Playwright", "Google Sheets API", "GitHub Actions"],
      link: "https://github.com/AblazedTC/NetworkingBot",
    },
    {
      name: "Jordan Wrapped",
      genre: "Creative Dev",
      description:
        "Spotify Wrapped-style interactive portfolio with scroll-linked motion and live now-playing data.",
      stack: ["Next.js", "GSAP", "TypeScript", "Spotify API"],
      link: "https://github.com/AblazedTC/JordanPortfolioWrapped",
    },
  ],
};

export const topSongs = {
  kicker: "Top Songs 2026",
  headline: "Most played on repeat",
  blurb:
    "Straight from my Spotify, the tracks that scored this year's builds, debugging sessions, and late-night commits.",
};

export const listening = {
  kicker: "Now Playing",
  headline: "Yes, the music thing is real",
  blurb:
    "I build music tech because I live in it. This is what is coming through my speakers, live from Spotify.",
};

export const skillJump = {
  kicker: "Biggest Skill Jump",
  headline: "Major skill growth",
  skills: [
    { name: "LeetCode / DSA", from: "Inconsistent", to: "Daily practice" },
    { name: "System Design", from: "Surface-level", to: "Can design & defend" },
    { name: "Backend Architecture", from: "Framework user", to: "System thinker" },
    { name: "C++ / Audio DSP", from: "Zero", to: "Functional DSP tools" },
  ],
  footnote: "160+ LeetCode problems this year. System design reps: client-server, caching, rate limiting, DB sharding, and URL shortener.",
};

export const internships = {
  kicker: "Career Recap",
  headline: "Career highlights",
  gigs: [
    {
      company: "NICE",
      role: "AI Solutions Engineer Intern",
      period: "Sep 2025 - Dec 2025",
      points: [
        "Built an MVP AI platform for real-time 911 transcription, sentiment analysis, and QA scoring with FastAPI, MongoDB, and OpenAI",
        "Developed modular REST APIs with JWT auth and role-based access control",
        "Implemented protocol CRUD, evaluation workflows, and analytics views",
      ],
    },
    {
      company: "NICE",
      role: "Associate Software Engineer",
      period: "Jan 2026 - May 2026",
      points: [
        "Architected and deployed 4+ AI microservices on Azure for transcript generation and automated QA analysis",
        "Built secure pipelines on Azure Data Lake for CJIS-regulated records",
        "Helped modernize PSAP dashboard reporting for faster, near real-time metrics",
      ],
    },
    {
      company: "ADP",
      role: "Application Developer Intern",
      period: "May 2026 - Aug 2026",
      points: [
        "Automated 50 REST API endpoints with Java/Spring Boot + Cucumber/TestNG, lifting coverage from 63% to 93% and saving 25 hrs/week of manual testing",
        "Refactored MPV2 delete service with SOR-aware routing, better HTTP error handling, and expanded Groovy unit tests for failure and regression paths",
      ],
    },
  ],
  lessons: [
    "Read the logs before you blame the framework",
    "Production is the only environment that tells the truth",
    "Automation pays rent every single day",
  ],
};

export const debugStats = {
  kicker: "Debugging Hours",
  headline: "Time well spent*",
  bigNumber: 847,
  bigLabel: "hours in the debugger",
  footnote: "*generous estimate. the logs know the real number.",
  stats: [
    { value: 63, suffix: "%", label: "fixed by reading the stack trace properly" },
    { value: 3, suffix: " days", label: "longest single bug hunt" },
    { value: 1, suffix: "", label: "missing await that caused all of it" },
    { value: 100, suffix: "%", label: "of bugs eventually lost" },
  ],
};

export const finalRecap = {
  headline: "Want the rest of the set?",
  message: "Let's build something worth replaying.",
  ticker: "JORDAN WRAPPED | SOFTWARE ENGINEER | BACKEND | AI | MUSIC TECH | ",
};
