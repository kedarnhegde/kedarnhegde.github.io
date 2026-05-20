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
      "https://drive.google.com/file/d/1LDJBriWgx8_XnMcNAf6NVFCYicJCEtw9/view?usp=sharing",
  },
  summary:
    "CS graduate student at SDSU (Spring 2027) with 3 years of software engineering experience across India and Japan, building scalable full-stack applications, developer tooling, and distributed systems. Experienced in frontend architecture, backend services, cloud infrastructure, and observability, with a strong focus on performance, reliability, and system scalability. Fluent in English and Japanese, currently seeking Software Engineering opportunities starting May 2027.",
  skills: {
    languages: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "SCSS",
      "Python",
      "SQL",
      "C++",
      "Ruby",
      "Java",
      "Go",
      "C",
      "Dart",
      "Shell Scripting",
    ],
    frameworksTools: [
      "Vue.js/Nuxt",
      "React/Next",
      "GraphQL",
      "Apollo Client",
      "FastAPI",
      "Node.js",
      "Express.js",
      "Rails",
      "Flutter",
      "Redux",
      "Pinia",
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
      "AWS S3",
      "Terraform",
      "Git",
      "GitHub Actions / CI/CD",
      "REST APIs",
      "Postman",
      "Swagger",
    ],
    infra: [
      "Kubernetes",
      "Docker",
      "Apache Kafka",
      "gRPC",
      "Make",
      "Jenkins",
      "CircleCI",
      "Sentry",
      "Datadog",
      "Helm",
    ],
    mldata: [
      "NumPy",
      "Pandas",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Matplotlib",
      "RealTabFormer",
    ],
  },

  experience: <ExperienceGroup[]>[
    {
      company: "SDSU Privacy-Preserving Generative AI Lab",
      location: "San Diego, CA",
      roles: [
        {
          title: "Research Assistant",
          dates: "Apr 2026 - Present",
          bullets: [
            "Engineered the PSyGen framework for privacy-preserving tabular data generation using an Augmented Lagrangian–based optimization algorithm, improving the privacy–utility trade-off from 31% to 51% privacy with only a marginal drop in data quality (98% to 95%), enabling scalable, containerized model evaluation.",
          ],
          tech: [
            "Python",
            "NumPy",
            "Pandas",
            "RealTabFormer",
            "Augmented Lagrangian Method (ALM)",
            "Matplotlib",
            "Jupyter Notebook",
          ],
        },
      ],
    },
    {
      company: "ANDPAD Inc.",
      location: "Tokyo, Japan",
      roles: [
        {
          title: "Software Engineer II - i18n Team",
          dates: "Jul 2024 - May 2025",
          bullets: [
            "Delivered multilingual switching (Rails + Nuxt-i18n) with Japanese, English and Vietnamese support for 1500+ users, increasing company revenue by approx. 8%, leveraging modularized microservices for scalability and localized content delivery.",
            "Built an asynchronous download pipeline (Rails, SQS, AWS Lambda) handling 10K+ requests/day with auto-scaling, load balancing, and Datadog-based monitoring for performance and error tracking, reducing operational costs by 15%.",
            "Automated i18n validation in CI/CD to catch pre-release translation drift, cutting localization bugs by 30% before production releases.",
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
            "Integrated GraphQL with Apollo Client to cut over-fetching by 40% and boost frontend load speed by 25% across core user flows.",
            "Launched reactions feature in Vue/Nuxt, boosting user engagement by 50% and instrumenting error tracking with Sentry in production.",
            "Migrated Vue 2/Nuxt 2 to Vue 3/Nuxt 3 and Vuex to Pinia, increasing TypeScript coverage by 35% across the frontend codebase.",
            "Improved reliability by implementing blue-green deployment, expanding unit testing and AAA-structured test coverage (55% to 95%), and leveraging Sentry/Datadog for incident monitoring and RCA; cut MTTR by 40% and improved deployment stability.",
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
            "Delivered React Kanban board for 500+ users, boosting productivity by 40% with task views and interactions.",
            "Integrated Redux-based state management with REST APIs to streamline client-server data flow, reduce API response latency, and improve frontend performance under concurrent usage.",
            "Built a micro-frontend architecture enabling modular deployments, reducing integration time by 25% across modules.",
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
            "Developed and deployed React + Firestore website on Netlify with secure serverless API submissions and CI/CD automation.",
            "Enhanced “Contact Us” workflow using Firebase Auth and validation rules, increasing lead conversion by 25%.",
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
            "Developed responsive React.js + Material UI websites for restaurant and jewelry clients, delivering modern UI/UX experiences aligned with business branding and customer engagement goals.",
            "Integrated React frontend with Node.js REST APIs, enabling seamless client-server communication and reliable data exchange across application workflows.",
            "Collaborated directly with clients in requirements meetings to translate business needs into scalable technical solutions, shaping feature design and improving long-term client satisfaction.",
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
      name: "PRISM",
      date: "May 2026",
      tech: ["TypeScript", "VS Code API", "Ollama"],
      bullets: [
        "Built and open-sourced PRISM, a local-first VS Code extension with 100+ installs that analyzes pull requests for secrets/API keys, missing test coverage, risky config changes, branch safety issues, and oversized PRs using git-diff analysis and static checks.",
        "Implemented AI-assisted PR summaries, risk analysis, and smart pre-push checklists using Ollama, TypeScript, and the VS Code Extension API; published publicly on the VS Code Marketplace with active developer feedback.",
      ],
      repo: "https://github.com/kedarnhegde/prism",
    },
    {
      name: "MQSim",
      date: "December 2025",
      tech: ["Python", "FastAPI", "ReactJS", "Vite", "Canvas", "AsyncIO"],
      bullets: [
        "Built an end-to-end IoT/MQTT network simulator with WiFi/BLE PHY models, CSMA/CA MAC, distance-vector routing, and MQTT pub/sub supporting QoS0/1, DUP detection, retries, keep-alive, mobility-based disconnect/reconnect, and broker failover, powered by an asynchronous FastAPI simulation engine.",
        "Developed an interactive React + TypeScript (Vite) interface with Canvas-based packet animations, real-time metrics (latency, PDR, energy), topic heatmaps, and automated experiments (duty-cycle and BLE vs WiFi), and deployed the full system using Vercel + Render with secure CORS and environment-configurable REST APIs.",
      ],
      repo: "https://github.com/kedarnhegde/network-simulator",
    },
    {
      name: "Lexi AI",
      date: "December 2025",
      tech: [
        "Python",
        "Jupyter Notebook",
        "Hugging Face",
        "T5",
        "BART",
        "Logistic Regression",
      ],
      bullets: [
        "Built an AI prototype for NDA analysis with summarization, risk detection, jargon explanation, and clause comparison using Hugging Face models including T5/BART and a trained Logistic Regression classifier.",
      ],
      repo: "https://github.com/kedarnhegde/CS549-lab",
    },
    {
      name: "reLink",
      date: "November 2025",
      tech: [
        "NextJS",
        "FastAPI",
        "MySQL",
        "JWT+bcrypt",
        "ZXing",
        "OpenCV DeepFace",
      ],
      bullets: [
        "Engineered a digital identity system during the 2025 Big Data Hackathon, empowering unsheltered individuals to access housing, healthcare, and jobs through verified credentials, featuring ZXing-based QR verification and DeepFace-powered face detection.",
      ],
      repo: "https://github.com/kedarnhegde/reLink",
    },
    {
      name: "myNexus",
      date: "November 2025",
      tech: ["NextJS", "FastAPI", "MySQL", "JWT+bcrypt"],
      bullets: [
        "Developed during the Innovate4SDSU Hackathon, myNexus connects SDSU students through Course Compass for professor and course insights, and Peer Connect for intelligent study-partner matching using tagged interests and secure, scalable full-stack integration with optimized API architecture.",
      ],
      repo: "https://github.com/kedarnhegde/myNexus",
    },
    {
      name: "Tweeter",
      date: "January 2024",
      tech: ["Ruby on Rails", "MySQL", "ActionMailer", "jQuery-Rails"],
      bullets: [
        "Built a social media platform using Ruby on Rails with real-time interactions.",
        "Implemented secure user authentication and data management.",
      ],
      repo: "https://github.com/kedarnhegde/tweeter",
    },
    {
      name: "Basic Blockchain",
      date: "August 2021",
      tech: ["JavaScript", "Node.js", "crypto-js", "Elliptic"],
      bullets: [
        "Implemented a basic blockchain in JavaScript with SHA-256 hashing, proof-of-work mining, signed transactions, wallet balances, mining rewards, and chain validation.",
      ],
      repo: "https://github.com/kedarnhegde/basic-blockchain",
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

    {
      name: "Vehicle Counting and Classification",
      date: "August 2021",
      tech: ["Python", "OpenCV", "NumPy", "Computer Vision"],
      bullets: [
        "Developed a computer vision system to detect, track, count, and classify vehicles from video streams using OpenCV background subtraction, contour detection, object tracking, and direction-based counting.",
      ],
      repo: "https://github.com/kedarnhegde/vehicle-project",
    },
    {
      name: "Movie Recommender",
      date: "August 2021",
      tech: ["Python", "APIs", "JSON", "Requests"],
      bullets: [
        "Built a movie recommendation script that fetches related titles from TasteDive, enriches results with OMDb ratings, and ranks recommendations by Rotten Tomatoes score.",
      ],
      repo: "https://github.com/kedarnhegde/movie-recommender",
    },
    {
      name: "URL Shortener",
      date: "August 2021",
      tech: ["Python", "Tkinter", "pyshorteners", "pyperclip"],
      bullets: [
        "Built a desktop URL shortener with a Tkinter GUI, TinyURL generation, and one-click clipboard copy functionality.",
      ],
      repo: "https://github.com/kedarnhegde/url-shortener",
    },
  ],

  education: [
    {
      school: "San Diego State University",
      detail: "Master of Science in Computer Science",
      extra: "May 2027 · San Diego, CA · GPA: 3.88",
    },
    {
      school: "Dayananda Sagar College of Engineering",
      detail: "Bachelor of Engineering in Information Science & Engineering",
      extra: "June 2022 · Bangalore, India · GPA: 3.59",
    },
  ],

  achievements: [
    "Head, Public Relations & Operations, Centre for Performing Arts, DSI (2019-2022): grew @cultdsi from 1K to 8K+; increased event footfall ~40%; built and managed official website.",
    "Japanese Language Proficiency Test — N2 (Dec 2024).",
  ],
} as const;
