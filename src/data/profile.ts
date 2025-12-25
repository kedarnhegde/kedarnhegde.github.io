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
      "https://drive.google.com/file/d/14wUqP6AZsUoIdenhRCFSeudcInKVMuKU/view?usp=sharing",
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
          dates: "Sep 2025 - Present",
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
            "Delivered multilingual switching (Rails + Nuxt-i18n) with English & Vietnamese support for 1500+ users, increasing company revenue by approx. 8%, leveraging modularized microservices for scalability and localized content delivery.",
            "Built an asynchronous download pipeline (Rails, SQS, AWS Lambda) handling 10K+ requests/day with auto-scaling, load balancing, and Datadog-based monitoring for performance and error tracking, reducing operational costs by 15%.",
            "Automated i18n validation in CI/CD pipeline to detect translation drift pre-release, reducing localization bugs by 30% and improving deployment reliability.",
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
            "Integrated GraphQL with Apollo Client to cut over-fetching by 40% and boost frontend load speed by 25%.",
            "Launched reactions feature in Vue/Nuxt, boosting user engagement by 50% and instrumenting error tracking with Sentry.",
            "Migrated Vue 2/Nuxt 2 to Vue 3/Nuxt 3 and Vuex to Pinia, raising TypeScript coverage by 35% and enhancing code maintainability and runtime stability.",
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
            "Integrated Redux state management and REST APIs for efficient data flow and improved API response latency.",
            "Built micro-frontends enabling modular feature deployment and reducing integration time by 25% improving scalability.",
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
      tech: ["Ruby on Rails", "MySQL"],
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
      extra: "June 2022 · Bangalore, India · GPA: 3.59",
    },
  ],

  achievements: [
    "Head, Public Relations & Operations, Centre for Performing Arts, DSI (2019-2022): grew @cultdsi from 1K to 8K+; increased event footfall ~40%; built and managed official website.",
    "Japanese Language Proficiency Test — N2 (Dec 2024).",
  ],
} as const;
