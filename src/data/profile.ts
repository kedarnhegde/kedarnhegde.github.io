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
      "https://drive.google.com/file/d/1ZCRdRWkF8GzGStVfZ_bckkefifZIirfK/view?usp=drive_link",
  },
  summary:
    "Computer Science graduate student at SDSU (Fall 2025) with 3 years of software development experience across India and Japan. Skilled in designing scalable web applications, system internationalization, and cross-cultural collaboration. Fluent in English and Japanese, with expertise spanning frontend frameworks, backend systems, and cloud databases.",

  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "C++", "Ruby", "Go"],
    frameworksTools: [
      "Vue.js/Nuxt",
      "React/Next",
      "GraphQL",
      "Apollo Client",
      "Node.js",
      "Rails",
    ],
    databases: ["MySQL", "PostgreSQL", "Firestore", "Amazon DynamoDB"],
    soft: ["Communication", "Teamwork", "Leadership", "Adaptability"],
    humanLanguages: ["English", "Japanese", "Kannada"],
  },

  experience: <ExperienceGroup[]>[
    {
      company: "ANDPAD Inc.",
      location: "Tokyo, Japan",
      roles: [
        {
          title: "Software Engineer II – i18n Team",
          dates: "Jul 2024 – May 2025",
          bullets: [
            "Developed multilingual support features, ensuring seamless internationalization across platforms.",
            "Implemented multilingual switch in Ruby on Rails with phased rollout using darklaunch.",
            "Integrated Nuxt-i18n for dynamic language switching, improving global user accessibility.",
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
          title: "Software Engineer I – ANDPAD CHAT Team",
          dates: "Oct 2022 – Jun 2024",
          bullets: [
            "Designed and launched a reaction feature in Vue/Nuxt TS, boosting user engagement by nearly 50%.",
            "Implemented blue-green deployment strategy, reducing downtime and risk in releases.",
            "Integrated GraphQL with Apollo Client, improving data fetching and frontend responsiveness.",
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
          title: "Full Stack Intern – Kanban Team",
          dates: "Feb 2022 – Apr 2022",
          bullets: [
            "Contributed to designing a Kanban board using React.js.",
            "Built micro-frontends for multiple components, improving task management efficiency.",
            "Collaborated in Agile sprints, delivering features on schedule using in-house Agile tools and Git.",
          ],
          tech: [
            "React.js",
            "Micro-frontends",
            "MUI (Material UI)",
            "Git",
            "Agile",
          ],
        },
      ],
    },
    {
      company: "Excel Energies",
      location: "Bangalore, India",
      roles: [
        {
          title: "Web Development Intern",
          dates: "Aug 2020 – Sep 2020",
          bullets: [
            "Developed and deployed the company website using React.js and Firestore (NoSQL) on Netlify.",
            "Enhanced the “Contact Us” form with Firebase, improving lead generation and raising company productivity by 25%.",
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
  ],

  projects: <ProjectItem[]>[
    {
      name: "Tweeter",
      date: "January 2024",
      tech: ["Ruby on Rails", "SQL"],
      bullets: [
        "Developed a social media platform using Ruby on Rails with real-time interactions.",
        "Implemented secure user authentication and data management.",
      ],
      repo: "https://github.com/kedarnhegde/tweeter",
    },
    {
      name: "Weather Forecast",
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
