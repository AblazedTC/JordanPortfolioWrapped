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
      name: "Jordan Wrapped",
      genre: "Creative Dev",
      description:
        "Spotify Wrapped-style interactive portfolio with scroll-linked motion and live now-playing data.",
      stack: ["Next.js", "GSAP", "TypeScript", "Spotify API"],
      link: "",
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
    { name: "LeetCode / DSA consistency", before: 30, after: 82 },
    { name: "System Design (URL Shortener, CAP tradeoffs)", before: 35, after: 78 },
    { name: "Backend Architecture", before: 45, after: 88 },
    { name: "C++ / low-level audio foundations", before: 18, after: 64 },
  ],
  footnote: "160+ LeetCode problems this year plus repeated URL-shortener design reps.",
};

export const internships = {
  kicker: "Career Recap",
  headline: "Career highlights",
  gigs: [
    {
      company: "NICE",
      role: "AI Solutions Engineer Intern",
      period: "Sep - Dec 2025",
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
      period: "Summer 2026",
      points: [
        "Shipped features on production backend services and APIs",
        "Worked inside enterprise release cycles and review gates",
        "Strengthened habits around code review and delivery discipline",
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
  headline: "Want the full tracklist?",
  message: "Let's build something worth replaying.",
  ticker: "JORDAN WRAPPED | SOFTWARE ENGINEER | BACKEND | AI | MUSIC TECH | ",
};
