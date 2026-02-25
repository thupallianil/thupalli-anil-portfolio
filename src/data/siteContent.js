// ✅ Import ONLY existing project images (SAFE)
import productImg from "../assets/product.png";
import f1Img from "../assets/f1.png";
import figma from "../assets/figma.png";
import hackthon from "../assets/hackthon.jpg";
import resumefile from "../assets/resum.pdf";

// ✅ SITE META
export const siteMeta = {
  name: "THUPALLI ANILKUMAR",
  tagline: "Full Stack Developer | React, Django & REST APIs",
  roleTypes: [
    "Full Stack Developer",
    "React Developer",
    "Django REST API Developer"
  ],
  phone: "+91-6303068697",
  email: "thupallianil@gmail.com",
  linkedin: "https://linkedin.com/in/thupalli-anilkumar",
  github: "https://github.com/thupallianil",
  resumeUrl: resumefile
};

// ✅ ABOUT
export const about = {
  photo: "/profile.jpg",
  summary:
    "Entry-level Software Developer with hands-on experience in Full Stack Development using React and Django REST Framework. Skilled in Python, REST APIs, SQL, and debugging. Passionate about building scalable web applications and backend APIs.",
  location: "Kadiri, Andhra Pradesh, India"
};

// ✅ SKILLS (Resume Based)
export const skills = [
  { name: "React", icon: "/icons/react.png" },
  { name: "JavaScript", icon: "/icons/js.jpeg" },
  { name: "Python", icon: "/icons/python.png" },
  { name: "Django", icon: "/icons/django.png" },
  { name: "REST APIs", icon: "/icons/api.png" },
  { name: "SQL", icon: "/icons/sql.png" },
  { name: "MySQL", icon: "/icons/mysql.png" },
  { name: "HTML", icon: "/icons/html.jpeg" },
  { name: "CSS", icon: "/icons/css.png" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.jpeg" },
  { name: "Git", icon: "/icons/git.png" },
  { name: "GitHub", icon: "/icons/github.png" },
  { name: "Postman", icon: "/icons/postman.png" },
  { name: "VS Code", icon: "/icons/vscode.png" }
];

// ✅ PROJECTS (4 Projects + Correct GitHub + Live Links + NO figma image)
export const projects = [
  {
    id: "frontend-backend-api",
    title: "Full Stack Application (React + Django REST API)",
    desc: "Built a full stack web app with React frontend and Django REST API backend including CRUD operations and API integration.",
    github: "https://github.com/thupallianil/frontend-backend",
    live: "#",
    tags: ["React", "Django", "REST API", "Full Stack"],
    img: productImg
  },
  {
    id: "flipkart-clone",
    title: "Flipkart Clone (E-commerce)",
    desc: "Developed a responsive e-commerce website with product listing, cart, and filtering using React.",
    github: "https://github.com/thupallianil/flipcart2",
    live: "https://thupalliecommerce.netlify.app/",
    tags: ["React", "E-commerce", "Frontend"],
    img: productImg
  },
  {
    id: "hackathon-platform",
    title: "Hackathon Innovation Platform",
    desc: "Created a responsive hackathon platform with event pages and modern UI using React.",
    github: "https://github.com/thupallianil/hackthon",
    live: "https://hackthonn.netlify.app/",
    tags: ["React", "Web App", "UI"],
    img: hackthon
  },
  {
    id: "robothon-dashboard",
    title: "Robothon Dashboard",
    desc: "Built a real-time dashboard interface for robot monitoring with interactive UI components.",
    github: "https://github.com/thupallianil/robothon-dashboard",
    live: "https://robothon.netlify.app/",
    tags: ["React", "Dashboard", "Real-time"],
    img: figma
  }
];

// ✅ TIMELINE
export const timeline = [
  {
    id: "education",
    title: "B.Tech (ECE)",
    timeframe: "2022 – 2025",
    desc: "KSRM College of Engineering, Kadapa – CGPA: 8.01/10"
  },
  {
    id: "intern-dmx",
    title: "Full Stack Development Intern",
    company: "DMX Technologies and Services Pvt. Ltd.",
    timeframe: "Sep 2025 – Jan 2026",
    desc: "Worked on React frontend and Django REST APIs with authentication and Postman testing."
  },
  {
    id: "intern-virtual",
    title: "Python Full Stack Virtual Internship",
    timeframe: "2024",
    desc: "Built web applications using Python, HTML, CSS, and JavaScript with REST API basics."
  }
];