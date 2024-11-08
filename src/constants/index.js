import {
  giphy,
  kbhIdrætKlub,
  portfolio,
  movieCatalog,
  andel,
  MQS,
  mqsB,
  HYF,
  Unifounder,
  hh,
  aiou,
  smartdevelopers,
  mealsharing,
  seasony,
  mobilTilbud,
  weatherAppLogo,
  Github,
} from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiDjango,
  SiTypescript,
  SiNodedotjs,
  SiCsharp, 
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiAngularjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiPython,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiPostgresql,
  SiFalcon,
  SiSqlalchemy,
  SiThreedotjs,
  SiNetlify,
  SiHeroku,
  SiStorybook,
  SiSwagger,
  SiDocker,
  SiJira,
  SiZoho,
  SiChartdotjs,
  SiDotnet,
  SiFigma,
  SiMicrosoftazure,
  SiGithub,
  SiRedux
} from "react-icons/si";

import { DiCss3 } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1VXiTVqqkNA3oj8Qzt37Os_3PIKPEKM86/view?usp=sharing";
export const repoLink = "https://github.com/amjadiftikhar/personal-portfolio";

export const callToLinkedin = "https://www.linkedin.com/in/amjadiftikhar/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: HYF,
    title: "Hack Your Future",
    degree: "Full Stack Web Development",
    duration: "Aug 2019 - April 2020",
    content1: "Javascript, React, Nodejs, HTML, CSS, mySql",
    content2: "",
  },
  {
    id: "education-2",
    icon: hh,
    title: "Högskolan i Halmstad",
    degree: "Masters in Computer Systems Engineering",
    duration: "Jan 2008 - March 2010",
    content1: "Advanced Routing, Multilayer Switching",
  },
  {
    id: "education-3",
    icon: aiou,
    title: "AIOU University Islamabad",
    degree: "Bachelor in Computer Science",
    duration: "Sep 2000 - March 2005",
    content1: "C++, Java, Visual C++, Oracle SQL, VBasic",
  },
];

// Software development skills, for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "pl-2",
        icon: SiJavascript,
        name: "JavaScript",
      },,
      {
        id: "pl-3",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-4",
        icon: DiCss3,
        name: "CSS", 
      },
      {
        id: "pl-5",
        icon: SiNodedotjs,
        name: "NodeJS",
      },
      {
        id: "pl-6",
        icon: SiCsharp,
        name: "C#",
      }
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [      
      {
        id: "f-1",
        icon: SiReact,
        name: "ReactJS", 
      },
      {
        id: "f-2",
        icon: SiAngularjs,
        name: "AngularJS",
      },
      {
        id: "f-3",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-4",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-5",
        icon: SiDotnet,
        name: ".NET",
      },
      {
        id: "f-6",
        icon: SiChartdotjs,
        name: "Chart.js",
      },
      {
        id: "f-7",
        icon: SiThreedotjs,
        name: "Three.js",
      },
      {
        id: "f-8",
        icon: SiFalcon,
        name: "Falcon",
      },
      {
        id: "f-9",
        icon: SiSqlalchemy,
        name: "SQLalchemy",
      },
      {
        id: "f-10",
        icon: SiSwagger,
        name: "Swagger",
      }
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-2",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-3",
        icon: SiGithub,
        name: "GitHub",
      },
      {
        id: "t-4",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-5",
        icon: SiPostgresql,
        name: "PostgreSQL",
      },
      {
        id: "t-6",
        icon: SiMicrosoftazure,
        name: "Azure",
      },
      {
        id: "t-7",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-8",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "t-9",
        icon: SiJira,
        name: "Jira",
      },
      {
        id: "t-10",
        icon: SiZoho,
        name: "ZohoCRM",
      },
      {
        id: "t-11",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-12",
        icon: SiHeroku,
        name: "Heroku",
      },
      {
        id: "t-13",
        icon: SiStorybook,
        name: "Storybook",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Andel Holding (Watts)",
    logo: andel,
    link: "https://www.watts.dk",
    positions: [
      {
        title: "Digital Developer",
        duration: "Jan 2023 - May 2024",
        content: [
          {
            text: "Developed a tool to automate the solar panel installation process, integrating Angular, C#, and Zoho CRM for streamlined operations.",
            link: "",
          },
        ],
      }    
    ],
  },
  {
    organisation: "Molecular Quantum Solutions",
    logo: MQS,
    link: "https://www.mqs.dk",
    positions: [
      {
        title: "Frontend Developer",
        duration: "Jan 2021 - June 2022",
        content: [
          {
            text: "Developed a platform for R&D tools to accelerate pharma, biotech, and chemical research, collaborating with the design team to create cohesive user experiences.",
            link: ""
          },
          {
            text: "Provided backend support, including web scraping and REST API development, to enhance platform functionality.",
            link: ""
          }
        ],
      },
    ],
  },
  {
    organisation: "Hack Your Future",
    logo: HYF,
    link: "https://www.hackyourfuture.dk/",
    positions: [
      {
        title: "Student Volunteer",
        duration: "Aug 2019 - Oct 2022",
        content: [
          {
            text: "Helping students with their weekly assignments, problem solving and Reviewning PRs",
            link: "",
          }
        ],
      }
    ],
  },
  {
    organisation: "UniFounder",
    logo: Unifounder,
    link: "https://www.unifounder.dk",
    positions: [
      {
        title: "Frontend Developer",
        duration: "Nov 2020 - Jan 2021",
        content: [
          {
            text: "Developed a responsive platform connecting companies and startups, enhancing scalability and user experience through code refactoring and close collaboration with the design team.",
            link: ""
          }
        ],
      },
    ],
  }
];

// Projects Section
export const projects = [
  ,
  {
    id: "project-1",
    title: "Automation Tool (Quote Caculator)",
    link: "https://watts.dk",
    image: andel,
    content: "Developed a quote calculator tool to streamline solar panel installation, automating quote generation for improved efficiency and accuracy.",
    stack: [
      {
        id: "icon-1",
        icon: SiAngularjs,
        name: "AngularJS"
      },
      {
        id: "icon-2",
        icon: SiTypescript,
        name: "TypeScript"
      },
      {
        id: "icon-3",
        icon: SiCsharp,
        name: "C#"
      },
      {
        id: "icon-4",
        icon: SiHtml5,
        name: "HTML"
      },
      {
        id: "icon-5",
        icon: SiCss3,
        name: "CSS"
      },
      {
        id: "icon-6",
        icon: SiZoho,
        name: "Zoho CRM"
      }
    ],
  },
  {
    id: "project-2",
    title: "MQS Dashboard",
    link: "https://mqs.dk",
    image: mqsB,
    content: "Built a platform hosting R&D tools to accelerate research in the pharma, biotech, and chemical industries, enhancing access to advanced research resources.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTypescript,
        name: "JavaScript"
      },
      {
        id: "icon-3",
        icon: SiPostgresql,
        name: "PostgreSQL"
      },
      {
        id: "icon-4",
        icon: SiHtml5,
        name: "HTML"
      },
      {
        id: "icon-4",
        icon: SiCss3,
        name: "CSS"
      },
      {
        id: "icon-5",
        icon: SiRedux,
        name: "Redux"
      },
    ],
  },
  {
    id: "project-3",
    title: "Seasony Dashboard",
    github: "https://github.com/HackYourFuture-CPH/FP-class11",
    link: "https://www.seasony.io/",
    image: seasony,
    content:
      "Collaborated on building and deploying a dashboard for Seasony, gaining hands-on experience in real-time project development alongside skilled mentors.",
    stack: [
      {
        id: "icon-1",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-3",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-4",
        icon: SiMysql,
        name: "MySQL"
      },
      {
        id: "icon-5",
        icon: SiFigma,
        name: "Figma"
      },
      {
        id: "icon-6",
        icon: SiStorybook,
        name: "Storybook"
      },
      {
        id: "icon-7",
        icon: SiNodedotjs,
        name: "NodeJS"
      },
      {
        id: "icon-8",
        icon: SiGithub,
        name: "Github"
      },
    ],
  },
  {
    id: "project-4",
    title: "MobilTilbud",
    github: "https://github.com/amjadiftikhar-zz/mobiletilbud",
    link: "https://github.com/amjadiftikhar-zz/mobiletilbud",
    image: mobilTilbud,
    content:
      "Front-end developer for MobilTilbud, a Python/Django application focused on delivering a seamless user experience and supporting real-time project capabilities.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiDjango,
        name: "Django"
      },
      {
        id: "icon-3",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-4",
        icon: SiHtml5,
        name: "HTML"
      },
      {
        id: "icon-5",
        icon: SiCss3,
        name: "CSS"
      },
    ],
  },
  {
    id: "project-5",
    title: "Smart Developers",
    github: "https://github.com/amjadiftikhar/smart-developers",
    link: "https://www.smartdeveloper.dk/",
    image: smartdevelopers,
    content:
      "Developed a React application for Smart Developers, a company dedicated to delivering exceptional software solutions and user experiences.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiHtml5,
        name: "HTML5"
      },
      {
        id: "icon-3",
        icon: SiCss3,
        name: "CSS3"
      },
      {
        id: "icon-4",
        icon: SiGithub,
        name: "Github"
      },
      {
        id: "icon-5",
        icon: SiGit,
        name: "Git"
      },
      {
        id: "icon-6",
        icon: SiBootstrap,
        name: "BootStrap"
      },
    ],
  },
  {
    id: "project-6",
    title: "Meal Sharing Application",
    github: "https://github.com/amjadiftikhar-zz/myProjects",
    link: "https://github.com/amjadiftikhar-zz/myProjects",
    image: mealsharing,
    content:
      "Built a meal-sharing app with MySQL, enabling users to reserve meals, submit reviews, and explore available dining options.",
    stack: [
      {
        id: "icon-1",
        icon: SiJavascript,
        name: "JavaScript" 
      },
      {
        id: "icon-2",
        icon: SiHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: SiCss3,
        name: "CSS" 
      },
      {
        id: "icon-4",
        icon: SiNodedotjs,
        name: "NodeJS"
      },
      {
        id: "icon-5",
        icon: SiExpress,
        name: "Express"
      },
      {
        id: "icon-6",
        icon: SiMysql,
        name: "MySQL"
      },
      {
        id: "icon-7",
        icon: SiGithub,
        name: "Github"
      },
      {
        id: "icon-8",
        icon: SiHeroku,
        name: "Heroku"
      },
    ],
  },
  // {
  //   id: "project-7",
  //   title: "Weather Application",
  //   github: "https://github.com/amjadiftikhar-zz/my_SPAs/tree/master/weather-App",
  //   link: "https://github.com/amjadiftikhar-zz/my_SPAs/tree/master/weather-App",
  //   image: weatherAppLogo,
  //   content:
  //     "Developed a weather app using the OpenWeather API for daily updates, built with JavaScript, HTML, and CSS.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiJavascript,
  //       name: "JavaScript"
  //     },
  //     {
  //       id: "icon-2",
  //       icon: SiHtml5,
  //       name: "HTML"
  //     },
  //     {
  //       id: "icon-3",
  //       icon: SiCss3,
  //       name: "CSS"
  //     },
  //   ],
  // },
  {
    id: "project-8",
    title: "Github Lookup",
    github: "https://github.com/amjadiftikhar/github_users",
    link: "https://github.com/amjadiftikhar/github_users",
    image: Github,
    content:
      "Created a React application for searching GitHub user information, utilizing React, TypeScript, and API integration.",
    stack: [
      {   
        id: "icon-1",
        icon: SiTypescript,
        name: "TypeScript"
      },
      {
        id: "icon-2",
        icon: SiReact,
        name: "React"
      },
    ],
  },
  {
    id: "project-9",
    title: "Movie Catalogue",
    github: "https://github.com/amjadiftikhar-zz/movie-app",
    link: "https://github.com/amjadiftikhar-zz/movie-app",
    image: movieCatalog,
    content:
      "Developed a movie catalog app using the Star Wars API, showcasing movie and character data with JavaScript and React.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-3",
        icon: SiHtml5,
        name: "HTML"
      },
      {
        id: "icon-4",
        icon: SiCss3,
        name: "CSS"
      }
    ],
  }
];

// Extra curricular activities
export const extraCurricular = [
  {
    id: 1,
    organisation: "Hack Your Future",
    title: "Full Stack Developer (Volunteer)",
    duration: "Aug 2019 - Oct 2022",
    content: [
      {
        text: "Helped students with their weekly assignments",
        link: "",
      },
      {
        text: "Reviewning PRs",
        link: "",
      },
    ],
    logo: HYF,
  },
  {
    id: 2,
    organisation: "København Idrætsklub (Volleyball)",
    title: "Team player",
    duration: "June 2021 - Present",
    content: [
      {
        text: "Actively participating in playing volleyball.",
        link: "",
      },
      {
        text: "Coaching youngsters",
        link: "",
      }
    ],
    logo: kbhIdrætKlub,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/amjadiftikhar/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/amjadiftikhar",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:amjadiftikhar_99@hotmail.com",
  }
];

// About me section
export const aboutMe = {
    name: "Amjad Iftikhar",
    githubUsername: 'amjadiftikhar',
    tagLine: "ex-Digital Developer @Watts | ex-Frontend Developer @MQS | ex-Intern @Unifounder | ex-Student Volunteer @HackYourFuture",
    intro: "Full Stack Web Developer based in Denmark, dedicated to crafting high-quality web solutions and always exploring innovative ideas."
}