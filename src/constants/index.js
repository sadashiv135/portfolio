import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - July 2024",
    role: "Associate Consultant",
    company: "Capgemini",
    description: `Improved Salesforce functionality across 15+ global regions to streamline L’Oréal’s supply chain and marketing operations. Built Apex triggers, flows, and validations that cut manual work by 40% and sped up approval cycles by 25%. Developed secure RESTful APIs with Spring Boot on Heroku and worked with global teams to ensure GDPR-compliant data handling.`,
    technologies: ["Salesforce", "Apex", "Spring Boot", "Heroku"],
  },
  {
    year: "Jan 2023 - Dec 2023",
    role: "Sr. Software & Data Associate",
    company: "Capgemini",
    description: `Scaled and enhanced the MBSync Salesforce Community Portal used by 1,000+ internal stakeholders for inventory and logistics. Built performant LWCs and Apex classes, boosting portal speed by 30%, and developed microservices with Spring Boot deployed on Heroku. Streamlined CI/CD pipelines with Jenkins, cutting deployment times by 35% while collaborating with DevOps and QA in Agile sprints.`,
    technologies: ["LWC", "Apex", "Spring Boot", "Heroku", "PostgreSQL", "Jenkins"],
  },
  {
    year: "Apr 2021 - Dec 2022",
    role: "Software & Data Associate",
    company: "Capgemini",
    description: `Built internal applications and reusable components using Salesforce Apex, LWC, and Java-based APIs. Collaborated across the full development lifecycle to support internal operations, and created dashboards that improved visibility into KPIs by 35%. Gained hands-on experience with Heroku, Jenkins, and Agile practices while supporting client ramp-up and shadowing projects.`,
    technologies: ["Java", "Heroku", "Jenkins"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "7575 Frankford Rd, Dallas, TX",
  phoneNo: "+1 (469) 777-2858 ",
  email: "sadashivmhaskar29@gmail.com",
};
