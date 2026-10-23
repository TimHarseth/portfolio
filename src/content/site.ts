export const languages = ["en", "no"] as const;
export type Lang = (typeof languages)[number];

export const contact = {
  email: "tim@harseth.com",
  github: "https://github.com/TimHarseth",
  linkedin: "https://www.linkedin.com/in/tim-harseth-1458882a0/",
};

type Project = {
  name: string;
  kind: string;
  year: string;
  summary: string;
  points?: string[];
  stack: string[];
  repo: string;
};

type Course = { name: string; code: string; grade: string };

type Degree = {
  title: string;
  school: string;
  years: string;
  status: string;
};

type SkillGroup = { name: string; items: string[] };

export type Dictionary = {
  nav: { projects: string; education: string; skills: string; contact: string };
  langLabel: string;
  hero: { location: string; tagline: string; ctaProjects: string; ctaContact: string };
  about: { heading: string; body: string[] };
  projects: {
    heading: string;
    stackLabel: string;
    repoLabel: string;
    items: Project[];
  };
  education: {
    heading: string;
    master: Degree;
    bachelor: Degree & { thesis: string };
    coursesIntro: string;
    columns: { course: string; code: string; grade: string };
    courses: Course[];
    gradeNote: string;
  };
  skills: { heading: string; groups: SkillGroup[] };
  contactSection: {
    heading: string;
    body: string;
    copy: string;
    copied: string;
    copyFailed: string;
  };
  footer: string;
};

const stacks = {
  hdo: ["C#", ".NET 10", "ASP.NET Core", "Keycloak", "Docker", "Prometheus", "Grafana", "Swagger"],
  tetris: ["C++17", "OpenGL", "GLSL", "GLFW", "GLAD", "GLM", "CMake"],
  electromart: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Docker Compose"],
  cloud: ["Go", "Firebase", "Docker", "OpenStack", "REST", "Webhooks"],
};

const repos = {
  hdo: "https://github.com/Gruppe-213/HDO-VideoAPI",
  tetris: "https://github.com/TimHarseth/3DTetris",
  electromart: "https://github.com/Nahom101-1/ElectroMart",
  cloud: "https://github.com/Nahom101-1/Prog2005-Cloud-Technologies",
};

const skillItems = {
  languages: ["C", "C++", "C#", "Go", "Kotlin", "Python", "JavaScript", "HTML & CSS", "SQL", "Haskell", "Rust", "GLSL", "Bash", "Solidity", "Dart"],
  frameworks: [".NET / ASP.NET Core", "React", "Node.js & Express", "Android SDK", "OpenGL", "GLFW & GLM", "REST APIs"],
  infra: ["Docker & Docker Compose", "OpenStack", "Terraform", "Firebase", "GitHub Actions", "Linux", "Keycloak", "Prometheus", "Grafana"],
  databases: ["PostgreSQL", "MySQL / MariaDB"],
  tools: ["Git", "GitHub", "GitLab", "CMake", "Gradle", "Visual Studio", "VS Code", "Android Studio", "Figma", "Postman", "Swagger"],
};

export const dictionaries: Record<Lang, Dictionary> = {
  en: {
    nav: { projects: "Projects", education: "Education", skills: "Skills", contact: "Contact" },
    langLabel: "Language",
    hero: {
      location: "Trondheim, Norway",
      tagline: "Master student in Informatics with a specialization in Software Engineering",
      ctaProjects: "See projects",
      ctaContact: "Contact me",
    },
    about: {
      heading: "About",
      body: [
        "I'm doing a master's in Informatics at NTNU in Trondheim, specializing in software engineering. Before that I finished a bachelor's in programming at NTNU in 2026.",
        "Most of what I've built is backend and cloud work: REST APIs in C# and Go, run in Docker and deployed to OpenStack. I've also written 3D graphics in C++ and OpenGL, and Android apps in Kotlin.",
        "I'm looking for internships and part-time developer work alongside my studies.",
      ],
    },
    projects: {
      heading: "Projects",
      stackLabel: "Built with",
      repoLabel: "Source on GitHub",
      items: [
        {
          name: "HDO VideoAPI",
          kind: "Bachelor thesis",
          year: "2026",
          summary:
            "Middleware for Norwegian emergency medicine that gives video clients one REST API in front of several video engines. The client talks to one API, and the room ID decides whether AntMedia or NHN Video handles the request.",
          points: [
            "Provider pattern, so a new video engine can be added without touching the controllers",
            "Keycloak authentication, rate limiting and consistent RFC 7807 error responses",
            "Health checks, Prometheus metrics and Grafana dashboards for operations",
            "Unit and integration tests, plus end-to-end and chaos scripts against the running stack",
          ],
          stack: stacks.hdo,
          repo: repos.hdo,
        },
        {
          name: "3D Tetris",
          kind: "Solo project",
          year: "2025",
          summary:
            "A Tetris-like game played inside a 3D tunnel. Pieces can be moved and rotated on all three axes, rendered through a small framework layer for buffers, cameras, shaders and textures.",
          stack: stacks.tetris,
          repo: repos.tetris,
        },
        {
          name: "ElectroMart",
          kind: "Group project",
          year: "2025",
          summary:
            "An online store for a fictional electronics retailer, built around a relational database we designed from scratch. Includes a React frontend, an Express backend with login, and the whole stack runs with one Docker Compose command.",
          stack: stacks.electromart,
          repo: repos.electromart,
        },
        {
          name: "Info dashboard API",
          kind: "Group project",
          year: "2025",
          summary:
            "A REST API in Go that builds country dashboards from several external data sources, with caching, webhook notifications and a status endpoint for the services it depends on. Deployed on OpenStack.",
          stack: stacks.cloud,
          repo: repos.cloud,
        },
      ],
    },
    education: {
      heading: "Education",
      master: {
        title: "MSc in Informatics, Software Engineering",
        school: "NTNU, Trondheim",
        years: "2026–2028",
        status: "In progress",
      },
      bachelor: {
        title: "Bachelor in Programming",
        school: "NTNU",
        years: "2023–2026",
        status: "Completed",
        thesis: "Thesis: HDO VideoAPI, a provider-based middleware for unified access to multiple video engines in Norwegian emergency medicine.",
      },
      coursesIntro: "Selected courses",
      columns: { course: "Course", code: "Code", grade: "Grade" },
      courses: [
        { name: "Cloud Technologies", code: "PROG2005", grade: "A" },
        { name: "Graphics Programming", code: "PROG2002", grade: "A" },
        { name: "Software Security", code: "IIKG2001", grade: "A" },
        { name: "Introduction to User-Centered Design", code: "IDG1362", grade: "A" },
        { name: "Innovation and Entrepreneurship", code: "IØ2000", grade: "A" },
        { name: "Bachelor Thesis", code: "PROG2900", grade: "B" },
        { name: "Mobile Programming", code: "PROG2007", grade: "B" },
        { name: "Data Modeling and Database Systems", code: "IDATG2204", grade: "B" },
      ],
      gradeNote: "Grades on the Norwegian A–F scale, where A is the highest.",
    },
    skills: {
      heading: "Skills",
      groups: [
        { name: "Languages", items: skillItems.languages },
        { name: "Frameworks and libraries", items: skillItems.frameworks },
        { name: "Cloud and infrastructure", items: skillItems.infra },
        { name: "Databases", items: [...skillItems.databases, "ER modeling"] },
        { name: "Tools", items: skillItems.tools },
        { name: "Ways of working", items: ["Scrum", "UML", "Threat modeling and OWASP", "User-centered design", "Automated testing"] },
      ],
    },
    contactSection: {
      heading: "Contact",
      body: "The quickest way to reach me is email.",
      copy: "Copy email",
      copied: "Email copied",
      copyFailed: "Couldn't copy. Select the address instead.",
    },
    footer: "Tim Harseth, Trondheim",
  },
  no: {
    nav: { projects: "Prosjekter", education: "Utdanning", skills: "Ferdigheter", contact: "Kontakt" },
    langLabel: "Språk",
    hero: {
      location: "Trondheim, Norge",
      tagline: "Masterstudent i informatikk med spesialisering i programvareutvikling",
      ctaProjects: "Se prosjekter",
      ctaContact: "Kontakt meg",
    },
    about: {
      heading: "Om meg",
      body: [
        "Jeg tar en master i informatikk ved NTNU i Trondheim, med spesialisering i programvareutvikling. Før det fullførte jeg en bachelor i programmering ved NTNU i 2026.",
        "Det meste jeg har laget er backend og sky: REST-API-er i C# og Go, kjørt i Docker og satt i drift på OpenStack. Jeg har også skrevet 3D-grafikk i C++ og OpenGL, og Android-apper i Kotlin.",
        "Jeg ser etter internship og deltidsjobb som utvikler ved siden av studiene.",
      ],
    },
    projects: {
      heading: "Prosjekter",
      stackLabel: "Laget med",
      repoLabel: "Kildekode på GitHub",
      items: [
        {
          name: "HDO VideoAPI",
          kind: "Bacheloroppgave",
          year: "2026",
          summary:
            "Mellomvare for norsk akuttmedisin som gir videoklienter ett REST-API foran flere videomotorer. Klienten snakker med ett API, og rom-ID-en avgjør om AntMedia eller NHN Video håndterer forespørselen.",
          points: [
            "Provider-mønster, slik at en ny videomotor kan legges til uten å endre kontrollerne",
            "Autentisering med Keycloak, rate limiting og konsistente feilsvar etter RFC 7807",
            "Helsesjekker, Prometheus-metrikker og Grafana-dashbord for drift",
            "Enhets- og integrasjonstester, pluss ende-til-ende- og kaosskript mot kjørende system",
          ],
          stack: stacks.hdo,
          repo: repos.hdo,
        },
        {
          name: "3D Tetris",
          kind: "Eget prosjekt",
          year: "2025",
          summary:
            "Et Tetris-lignende spill i en 3D-tunnel. Brikkene kan flyttes og roteres i alle tre akser, og alt tegnes gjennom et lite rammeverklag for buffere, kameraer, shadere og teksturer.",
          stack: stacks.tetris,
          repo: repos.tetris,
        },
        {
          name: "ElectroMart",
          kind: "Gruppeprosjekt",
          year: "2025",
          summary:
            "En nettbutikk for en fiktiv elektronikkforhandler, bygd rundt en relasjonsdatabase vi designet fra bunnen av. Har frontend i React, backend i Express med innlogging, og hele systemet starter med én Docker Compose-kommando.",
          stack: stacks.electromart,
          repo: repos.electromart,
        },
        {
          name: "Info-dashbord-API",
          kind: "Gruppeprosjekt",
          year: "2025",
          summary:
            "Et REST-API i Go som setter sammen landdashbord fra flere eksterne datakilder, med mellomlagring, webhook-varsler og et statusendepunkt for tjenestene det er avhengig av. Satt i drift på OpenStack.",
          stack: stacks.cloud,
          repo: repos.cloud,
        },
      ],
    },
    education: {
      heading: "Utdanning",
      master: {
        title: "Master i informatikk, programvareutvikling",
        school: "NTNU, Trondheim",
        years: "2026–2028",
        status: "Pågår",
      },
      bachelor: {
        title: "Bachelor i programmering",
        school: "NTNU",
        years: "2023–2026",
        status: "Fullført",
        thesis: "Oppgave: HDO VideoAPI, en provider-basert mellomvare for felles tilgang til flere videomotorer i norsk akuttmedisin.",
      },
      coursesIntro: "Utvalgte emner",
      columns: { course: "Emne", code: "Kode", grade: "Karakter" },
      courses: [
        { name: "Skyteknologier", code: "PROG2005", grade: "A" },
        { name: "Grafikkprogrammering", code: "PROG2002", grade: "A" },
        { name: "Programvaresikkerhet", code: "IIKG2001", grade: "A" },
        { name: "Innføring i brukersentrert design", code: "IDG1362", grade: "A" },
        { name: "Innovasjon og entreprenørskap", code: "IØ2000", grade: "A" },
        { name: "Bacheloroppgave", code: "PROG2900", grade: "B" },
        { name: "Mobilprogrammering", code: "PROG2007", grade: "B" },
        { name: "Datamodellering og databasesystemer", code: "IDATG2204", grade: "B" },
      ],
      gradeNote: "Karakterer på den norske skalaen A–F, der A er best.",
    },
    skills: {
      heading: "Ferdigheter",
      groups: [
        { name: "Språk", items: skillItems.languages },
        { name: "Rammeverk og biblioteker", items: skillItems.frameworks },
        { name: "Sky og infrastruktur", items: skillItems.infra },
        { name: "Databaser", items: [...skillItems.databases, "ER-modellering"] },
        { name: "Verktøy", items: skillItems.tools },
        { name: "Arbeidsmåter", items: ["Scrum", "UML", "Trusselmodellering og OWASP", "Brukersentrert design", "Automatisert testing"] },
      ],
    },
    contactSection: {
      heading: "Kontakt",
      body: "Raskeste måte å nå meg på er e-post.",
      copy: "Kopier e-post",
      copied: "E-post kopiert",
      copyFailed: "Fikk ikke kopiert. Marker adressen i stedet.",
    },
    footer: "Tim Harseth, Trondheim",
  },
};
