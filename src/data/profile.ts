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
      "https://drive.google.com/file/d/1UYrD33KmvZAD3AxiqLCkrVwPFSWZjwBn/view?usp=sharing",
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
    databases: [
      "MySQL",
      "PostgreSQL",
      "Firestore",
      "MongoDB",
      "Amazon DynamoDB",
    ],
    cloud: [
      "AWS Lambda",
      "Amazon SQS",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Sentry",
      "Datadog",
      "Git",
    ],
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
            "As the company expanded into new markets, I implemented a multilingual switch in Ruby on Rails with a phased rollout using darklaunch, and integrated Nuxt-i18n to enable dynamic language switching, which significantly improved accessibility for a growing global user base.",
            "I solved an issue where all downloaded files defaulted to Japanese by architecting an event-driven download pipeline using Rails, Amazon SQS, and AWS Lambda, ensuring that users consistently received files in their selected language.",
            "I collaborated with product managers to review and align terminology across more than 200 screens, which reduced cross-market inconsistencies and improved translation quality.",
            "I enhanced CI/CD pipelines to run i18n-specific test suites and coverage checks, preventing regressions whenever new languages were introduced.",
            "To scale team knowledge, I authored i18n onboarding guides and best-practice documentation that enabled new engineers to ramp up more quickly and follow consistent localization standards.",
            "Monitored the multilingual pipeline with Datadog, tracking performance metrics and ensuring reliable localized file delivery.",
          ],
          tech: [
            "Ruby on Rails",
            "TypeScript",
            "Nuxt.js",
            "Next.js",
            "AWS Lambda",
            "Amazon SQS",
            "Tailwind CSS",
            "Datadog",
          ],
        },
        {
          title: "Software Engineer I - ANDPAD CHAT Team",
          dates: "Oct 2022 - Jun 2024",
          bullets: [
            "I designed and shipped a reactions feature in Vue/Nuxt with GraphQL + Apollo Client, which was quickly adopted by over 70% of active users and boosted overall engagement by nearly 50%.",
            "To reduce release risk, I introduced a blue-green deployment strategy that minimized downtime during rollouts which gave us the confidence to deploy more frequently.",
            "I integrated GraphQL with Apollo Client to replace inefficient REST calls, which reduced over-fetching, lowered API payloads by around 40%, and improved frontend responsiveness by ~25%.",
            "To improve product reliability, I increased unit test coverage from ~55% to over 95% using Vitest and TypeScript, which reduced hotfixes by more than half and significantly strengthened release confidence.",
            "I modernized the codebase by migrating from Vue 2/Nuxt 2 to Vue 3/Nuxt 3, which streamlined the developer workflow, shortened build times, and improved overall productivity across the team.",
            "Instrumented new chat features with Sentry, enabling proactive error tracking and faster issue resolution in production.",
          ],
          tech: [
            "Vue.js",
            "Nuxt.js",
            "TypeScript",
            "GraphQL",
            "Apollo Client",
            "Pinia (migrated from Vuex)",
            "Sentry",
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
            "I built a Kanban board in React.js that delivered the core task views and interactions needed for enterprise clients, and ensured the features were delivered on schedule to meet customer deadlines.",
            "To improve consistency and reduce bugs, I introduced Redux for state management and integrated REST APIs that kept task data synchronized in real time across multiple views.",
            "I developed micro-frontends for modular features, which allowed separate teams to build and deploy independently and accelerated overall delivery by reducing integration bottlenecks.",
            "I styled the application with responsive Bootstrap layouts, ensuring that the task board worked seamlessly across desktops, tablets, and mobile devices.",
            "I participated actively in Agile ceremonies including daily stand-ups, sprint planning, and retrospectives, aligning closely with cross-functional teams to deliver features predictably each sprint.",
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
            "I built and deployed the company's website using React.js and Firestore on Netlify, creating a professional online presence that became the primary customer touchpoint.",
            "I re-engineered the “Contact Us” form with Firebase to capture leads more effectively, which increased lead submissions by around 25% and improved team productivity.",
            "I added Firestore security rules to safeguard customer data, preventing unauthorized access and improving overall trust with clients.",
            "I also optimized the deployment pipeline with Netlify, reducing update turnaround time from days to hours and enabling faster marketing and product page iterations.",
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
            "I developed websites for restaurant and jewelry clients, building responsive layouts with React.js and Material UI that delivered a clean and modern customer experience.",
            "I integrated the frontend with REST APIs in Node.js, ensuring seamless communication between the UI and backend services.",
            "I worked directly with clients in requirements meetings to translate their business needs into technical solutions, which helped shape features and fostered long-term client satisfaction.",
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
    "Head, Public Relations & Operations, Centre for Performing Arts, DSI (2019-2022): grew @cultdsi from 1K to 8K+; increased event footfall ~40%; built and managed official website.",
    "Japanese Language Proficiency Test — N2 (Dec 2024).",
  ],
} as const;
