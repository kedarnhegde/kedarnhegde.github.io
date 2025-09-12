export type ExperienceRole = {
  title: string;
  dates: string;
  bullets: string[];
  tech?: string[];
};

export type ExperienceGroup = {
  company: string;
  location: string;
  roles: ExperienceRole[];
};

export type ProjectItem = {
  name: string;
  date: string;
  tech: string[];
  bullets: string[];
  repo?: string;
};

export const profile = {
  name: "Kedar Hegde",
  role: "Software Engineer",
  email: "kedarnhegde@gmail.com",
  phone: "+1 (619) 560-1247",
  links: {
    linkedin: "https://linkedin.com/in/kedar-hegde/",
    github: "https://github.com/kedarnhegde",
    resume:
      "https://drive.google.com/file/d/1Om5d9D2w2s_kibPo0AnIUlgYEwBUpJY5/view?usp=sharing",
  },
  summary:
    "CS graduate student at SDSU (Fall 2025) with 3 years of development experience across India and Japan. Skilled in scalable web apps, system internationalization, and cross-cultural collaboration. Fluent in English and Japanese, with expertise in frontend frameworks, backend systems, and cloud databases. Currently seeking software engineering internships starting Summer 2026.",

  skills: {
    languages: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "SCSS",
      "Python",
      "C++",
      "Ruby",
      "Java",
      "Go",
    ],
    frameworksTools: [
      "Vue.js/Nuxt",
      "React/Next",
      "GraphQL",
      "Apollo Client",
      "Node.js",
      "Rails",
    ],
    databases: ["MySQL", "PostgreSQL", "Firestore", "Amazon DynamoDB"],
    cloud: ["AWS Lambda", "Amazon SQS", "Docker", "GitHub Actions", "CI/CD"],
  },

  experience: <ExperienceGroup[]>[
    {
      company: "ANDPAD Inc.",
      location: "Tokyo, Japan",
      roles: [
        {
          title: "Software Engineer II - i18n Team",
          dates: "Jul 2024 - May 2025",
          bullets: [
            "Implemented a multilingual switch in Ruby on Rails with phased rollout using darklaunch.",
            "Leveraged Nuxt-i18n to enable dynamic language switching, improving accessibility for global users.",
            "Architected an event-driven file download system using Rails, Amazon SQS, and AWS Lambda, adding language context for localized files.",
            "Collaborated with product managers and Japanese/English design teams to ensure terminology consistency across markets.",
            "Enhanced CI/CD pipelines to run i18n-specific test suites, preventing regressions when adding new languages.",
            "Documented i18n practices and onboarded new engineers to follow localization guidelines.",
          ],
          tech: [
            "Ruby on Rails",
            "TypeScript",
            "Nuxt.js",
            "Next.js",
            "AWS Lambda",
            "Amazon SQS",
            "Tailwind CSS",
          ],
        },
        {
          title: "Software Engineer I - ANDPAD CHAT Team",
          dates: "Oct 2022 - Jun 2024",
          bullets: [
            "Designed and launched a reaction feature in Vue/Nuxt TS, boosting user engagement by nearly 50%.",
            "Devised blue-green deployment strategy, reducing downtime and risk in releases.",
            "Integrated GraphQL with Apollo Client, improving data fetching and frontend responsiveness.",
            "Migrated state management from Vuex to Pinia, enabling stronger TypeScript support and maintainability.",
            "Increased unit test coverage from ~55% to 95% using Vitest and TypeScript, strengthening release confidence.",
            "Migrated legacy codebase from Vue 2/Nuxt 2 to Vue 3/Nuxt 3, modernizing architecture and improving developer productivity.",
          ],
          tech: [
            "Vue.js",
            "Nuxt.js",
            "TypeScript",
            "GraphQL",
            "Apollo Client",
            "Pinia (migrated from Vuex)",
          ],
        },
      ],
    },
    {
      company: "NimbleWork (formerly Digite Infotech) Inc.",
      location: "Bangalore, India",
      roles: [
        {
          title: "Full Stack Intern - Kanban Team",
          dates: "Feb 2022 - Apr 2022",
          bullets: [
            "Built a Kanban board in React.js, delivering core task views and interactions.",
            "Applied Redux for state management, streamlining data flow and reducing update complexity.",
            "Integrated REST APIs to fetch/update task data in real time.",
            "Developed micro-frontends for modular features, enabling independent iteration and deployment.",
            "Styled responsive UI with Bootstrap for consistent layouts across devices.",
            "Collaborated in Agile sprints, delivering features on schedule using in-house tools and Git.",
            "Participated in stand-ups, sprint planning, and retrospectives to align with team goals.",
          ],
          tech: ["React.js", "Micro-frontends", "Bootstrap", "Git", "Agile"],
        },
      ],
    },
    {
      company: "Excel Energies",
      location: "Bangalore, India",
      roles: [
        {
          title: "Web Development Intern",
          dates: "Aug 2020 - Sep 2020",
          bullets: [
            "Developed and deployed the company website using React.js and Firestore (NoSQL) on Netlify.",
            "Enhanced the “Contact Us” form with Firebase, improving lead generation and raising company productivity by 25%.",
            "Worked directly with the operations team to gather requirements for product pages and customer contact flows.",
            "Integrated Firestore rules to protect data and ensure form submissions were secure.",
            "Optimized deployment pipeline with Netlify for faster iterations on content updates.",
          ],
          tech: [
            "React.js",
            "Firebase",
            "Firestore",
            "Netlify",
            "MUI (Material UI)",
          ],
        },
      ],
    },
    {
      company: "Naaniz Seller Services Pvt. Ltd.",
      location: "Bangalore, India",
      roles: [
        {
          title: "Front End Web Development Intern",
          dates: "Jun 2020 - Jul 2020",
          bullets: [
            "Built websites for restaurant and jewelry clients, tailoring responsive layouts with React.js and MUI.",
            "Integrated front-end components with back-end REST APIs in Node.js, ensuring smooth data flow and consistent user experience.",
            "Collaborated with clients in requirements meetings to translate business needs into technical solutions.",
          ],
          tech: [
            "React.js",
            "MUI (Material UI)",
            "Redux",
            "Node.js",
            "REST API",
          ],
        },
      ],
    },
  ],

  projects: <ProjectItem[]>[
    {
      name: "Tweeter",
      date: "January 2024",
      tech: ["Ruby on Rails", "SQL"],
      bullets: [
        "Built a social media platform using Ruby on Rails with real-time interactions.",
        "Implemented secure user authentication and data management.",
      ],
      repo: "https://github.com/kedarnhegde/tweeter",
    },
    {
      name: "Havamana",
      date: "August 2021",
      tech: ["React.js", "OpenWeather API", "Netlify"],
      bullets: [
        "Developed a React.js weather app using OpenWeather API and deployed it on Netlify for seamless hosting.",
      ],
      repo: "https://github.com/kedarnhegde/weather-app",
    },
  ],

  education: [
    {
      school: "San Diego State University",
      detail: "Master of Science in Computer Science",
      extra: "Expected May 2027 · San Diego, CA · GPA: To be earned",
    },
    {
      school: "Dayananda Sagar College of Engineering",
      detail: "Bachelor of Engineering in Information Science & Engineering",
      extra: "June 2022 · Bangalore, India · CGPA: 8.99/10",
    },
  ],

  achievements: [
    "Head, Public Relations & Operations, Centre for Performing Arts, DSI (2019-2022): grew @cultdsi from 1K to 8K+; increased event footfall ~40%; managed official website.",
    "Japanese Language Proficiency Test — N2 (Dec 2024).",
  ],
} as const;
