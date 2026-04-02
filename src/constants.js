// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import redisLogo from './assets/tech_logo/redis.png'

// Experience Section Logo's
import aptlyWebservices from './assets/company_logo/aptly_web_services_logo.jpeg';
import microsoft from './assets/company_logo/Microsoft-logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import kvsLogo from './assets/education_logo/KVS.svg.png';

// Project Section Logo's
import interWork from './assets/work_logo/internWork.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import movieSystem from './assets/work_logo/Movie Recommender System.png'
import smartTrafficSystem from './assets/work_logo/smartTrafficSystem.png'



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Redis', logo: redisLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: aptlyWebservices,
      role: "Backend Intern",
      company: "Aptly Web Services",
      date: "Sep 2025 - Oct 2025",
      desc: "Optimized backend performance by reducing API response time by 30% through efficient middleware and query tuning. Developed 10+ RESTful APIs for authentication, user workflows, and data operations, with secure JWT-based access control. Enhanced database efficiency by 25% using indexing and improved MongoDB schema design. Streamlined deployments with CI/CD automation, cutting failures by 40%, while boosting system reliability through unit testing and structured logging.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Meta Cloud API",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
      ],
    },
    {
      id: 1,
      img: microsoft,
      role: "AI Development Intern",
      company: "Microsoft AINSI (AICTE)",
      date: "April 2025 - May 2025",
      desc: "Developed Flask-based machine learning APIs for real-time predictions with optimized request handling, reducing inference latency by 20% through caching and efficient data pipelines. Automated testing workflows to cut manual validation effort by 50%, while continuously evaluating model performance to enhance prediction consistency and reliability.",
      skills: [
        "AI-driven Automation Tools Evaluation",
        "Data-driven Decision Making",
        "Flask",
        "Machine Learning Integration, Model Evaluation & Optimization",
        "Automated Testing",
        "Performance Tuning",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Guru Tegh Bahadur 4th Centenary Engineering College",
      date: "Nov 2022 - Aug 2026",
      grade: "8.5 CGPA",
      desc: "I am pursuing a Bachelor of Technology in Computer Science and Engineering, where I have maintained a strong academic record with a CGPA of 8.6. My coursework and projects have helped me build a solid foundation in programming, problem-solving, and emerging technologies, preparing me to contribute effectively to real-world challenges.",
      degree: "Btech Computer Science",
    },
   /* {
      id: 1,
      img: bsaLogo,
      school: "BSA College, Mathura",
      date: "Sept 2018 - Aug 2021",
      grade: "73.2%",
      desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },*/
    {
      id: 2,
      img: kvsLogo,
      school: "Kendriya Vidyalaya",
      date: "Apr 2021 - Jun 2022",
      grade: "87%",
      desc: "I completed my Class 12 education from Kendriya Vidyalaya Sangathan, New Delhi, under the CBSE board, with a focus on Physics, Chemistry, Mathematics (PCM), and Computer Science, securing an impressive 87%.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: kvsLogo,
      school: "Kendriya Vidyalaya",
      date: "Apr 2019 - March 2020",
      grade: "92%",
      desc: "I completed my Class 10 education in 2020 from Kendriya Vidyalaya under the CBSE board, securing 92%.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Aplty Web Services E-commerce website",
      description:
        "Optimized backend performance by reducing API response time by 30% through efficient middleware and query tuning. Developed 10+ RESTful APIs for authentication, user workflows, and data operations, with secure JWT-based access control. Enhanced database efficiency by 25% using indexing and improved MongoDB schema design. Streamlined deployments with CI/CD automation, cutting failures by 40%, while boosting system reliability through unit testing and structured logging.",
      image: interWork,
      tags: ["API deployments", "JavaScript", "React JS", "Node.js"],
      github: "https://github.com/HArshiT8214/e-comm",
      webapp: "",
    },
    {
      id: 1,
      title: "InterviewHub — Real-Time Interview Platform",
      description:
        "Built a real-time communication platform enabling video calls and chat for 100+ concurrent users, with secure JWT-based authentication and role-based access control. Integrated WebRTC to achieve sub-300ms latency, and designed a scalable backend using Node.js and MongoDB for efficient session and data management.",
      image: csprepLogo,
      tags: ["React.js", "Node.js","Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/HArshiT8214/InterviewHub",
      webapp: "https://interview-hub-lime.vercel.app/",
    },
    {
      id: 2,
      title: "Expense Tracker",
      description:
        "I built an Expense Tracker application using Next.js, TypeScript, Prisma, and Tailwind CSS, designed to help users efficiently manage and analyze their personal finances. The platform enables users to log, categorize, and visualize income and expenses through an intuitive and responsive interface. With Prisma as the ORM, it ensures reliable data management, while TypeScript provides type safety and scalability. This project highlights my ability to develop full-stack, data-driven applications with clean UI, robust backend integration, and real-world usability.",
      image: npmLogo,
      tags: ["Next.js", "Node.js", "NPM","TypeScript","Prisma","Shadcn UI"],
      github: "https://github.com/HArshiT8214/ExpenseTracker",
      webapp: "",
    },
    {
      id: 3,
      title: "Movie Recommender System",
      description:
        "Moosic – Emotion-based Music Recommendation Platform – Developed a Streamlit web app that uses OpenCV, MediaPipe, and a CNN (Keras/TensorFlow) to detect user emotions from facial expressions and recommend personalized songs via YouTube integration.",
      image: movieSystem,
      tags: ["Pyhton", "Collaborative Filtering", "Cosine Similarity", "Data Preprocessing", "Feature Engineering", "NumPy", "Pandas"],
      github: "https://github.com/HArshiT8214/movieRecommender",
      webapp: "",
    },
    {
      id: 4,
      title: "Smart Traffic System",
      description:"Developed a Smart Traffic Management System integrating AI and full-stack technologies, using YOLO for real-time vehicle detection and analysis. Designed an adaptive signal control algorithm that reduced simulated congestion by 30%, and built a real-time dashboard with sub-300ms updates using WebSockets. Architected the system for scalability across multiple intersections.",
      image: smartTrafficSystem,
      tags: ["Computer Vision (YOLO)", "Python", "Flask/FastAPI", "Real-time Systems", "WebSockets","React/Next.js","Algorithm Design"],
      github: "https://github.com/HArshiT8214/-SmartTrafficSystem",
      webapp: "",
    },
    /*{
      id: 6,
      title: "Coding Master",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: cmLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "https://codingmasterweb.in/",
      webapp: "https://codingmasterweb.in/",
    },
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Background-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    },*/
  ];  