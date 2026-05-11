import {
  FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaJava
} from "react-icons/fa";
import {
  SiNextdotjs, SiMongodb, SiTailwindcss, SiJavascript,
  SiFlask, SiPython, SiC, SiCplusplus, SiTypescript,
  SiHtml5, SiCss3, SiExpress, SiFastapi, SiPostgresql,
  SiPrisma, SiGooglecloud, SiDocker, SiAmazonwebservices, SiTensorflow, SiOpenai
} from "react-icons/si";

const navLinks = [
  {
    name: "About",
    link: "#about"
  },
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skill",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Coding Experience" },
  { value: 20, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Technologies Mastered" },
  { value: 1200, suffix: "+", label: "GitHub Contributions" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

export const works = [

  {
    id: 5,
    title: "MITS PRINT",
    category: "Full Stack System",
    desc: "Automated campus printing platform eliminating queues and manual handling.",
    problemStatement: "Students face long queues and inefficiencies during lab submissions and semester deadlines in campus printing stores.",
    detailedSolution: "Developed a full-stack automated printing system where users upload documents, pay online, and receive printed output without manual interaction. Built using Next.js API routes with PostgreSQL (Prisma), integrated Google Cloud Storage for file handling, and a Python-based print agent running on a dedicated printer PC to process queued jobs.",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Prisma", icon: SiPrisma, color: "#2d3748" },
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285f4" }
    ],
    imagePath: "/images/mitsprint.png",
    githubUrl: "https://github.com/athulcoder/mits-print",
    previewUrl: "https://mitsprint.vercel.app",
    featured: true,
  },
  {
    id: 6,
    title: "CampusForge Engine",
    category: "AI / Backend System",
    desc: "Resume analyzer that matches candidates to job roles based on skills.",
    problemStatement: "Shortlisting candidates manually during campus placements is time-consuming and often inconsistent.",
    detailedSolution: "Built an intelligent backend engine that analyzes resumes, extracts skills, and matches candidates to suitable job roles. Designed to automate shortlisting in campus placement drives, improving efficiency and accuracy in candidate selection.",
    techStack: [
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "Machine Learning", icon: SiTensorflow, color: "#ff6f00" },
      { name: "NLP", icon: SiOpenai, color: "#10a37f" }
    ],
    imagePath: "/images/campusforge-engine.png",
    githubUrl: "https://github.com/athulcoder/campusforge-engine",
    previewUrl: "",
    featured: true,
  },
  {
    id: 1,
    title: "Hostel Room Allotment System",
    category: "Desktop Application",
    desc: "A smart room allotment system for institutional hostels.",
    problemStatement: "Manual room allotment is prone to errors, bias, and inefficiency, especially in institutions with hundreds of students.",
    detailedSolution: "Built a Swing-based admin dashboard that auto-assigns rooms based on student criteria, managing a secure SQLite database for persistence.",
    techStack: [
      { name: "Java", icon: FaJava, color: "#f8981d" },
      { name: "SQLite", icon: SiJavascript, color: "#003b57" },
    ],
    imagePath: "/images/project1.png",
    githubUrl: "https://github.com/athulcoder/hostel-room-allotment-system",
    previewUrl: "",
    featured: true,
  },
  {
    id: 2,
    title: "DailyDone",
    category: "Full Stack",
    desc: "Personalized task management with secure, encrypted tracking.",
    problemStatement: "Most task managers are either overly complex or compromise on security for personal data tracking.",
    detailedSolution: "Developed a focused Next.js app with MongoDB, implementing JWT and encrypted sessions to provide a secure 'Daily Focus' experience.",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06b6d4" },
    ],
    imagePath: "/images/project2.png",
    githubUrl: "https://github.com/athulcoder/dailydone",
    previewUrl: "https://dailydone-alpha.vercel.app",
    featured: false,
  },
  {
    id: 3,
    title: "CineQuest",
    category: "Frontend",
    desc: "A cinematic movie discovery platform powered by TMDB API.",
    problemStatement: "Finding movie trailers and statistics across different platforms is fragmented and slow for casual viewers.",
    detailedSolution: "Crafted a high-performance Vanilla JS application using the TMDB API to fetch instant trailers, ratings, and stats with a clean UX.",
    techStack: [
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS3", icon: SiCss3, color: "#1572b6" },
    ],
    imagePath: "/images/project3.png",
    githubUrl: "https://github.com/athulcoder/cinequest",
    previewUrl: "https://athulcoder.github.io/cinequest",
    featured: true,
  },
  {
    id: 4,
    title: "C to PDF Converter",
    category: "Web Utility",
    desc: "Automated lab record generator used university-wide.",
    problemStatement: "Students struggle to format raw C code correctly for printable lab records on short deadlines.",
    detailedSolution: "Created a Flask utility that parses .c files and generates professional PDFs, using WebSockets for real-time status updates.",
    techStack: [
      { name: "Flask", icon: SiFlask, color: "#ffffff" },
      { name: "Python", icon: SiPython, color: "#3776ab" },
    ],
    imagePath: "/images/project5.png",
    githubUrl: "https://github.com/athulcoder/c_to_pdf",
    previewUrl: "https://c-to-pdf.onrender.com",
    featured: false,
  },


];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    icon: FaGithub,
    url: "https://github.com/athulcoder",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/athul-sabu-84360a261/",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/_i_athul",
  },
  {
    label: "Discord",
    icon: FaDiscord,
    url: "https://discord.com/users/_i_athul",
  },
];
const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  socialLinks,
};
