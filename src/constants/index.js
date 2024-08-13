import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    idhafa,
    expertTic,
    crrhab,
    fnarc,
    ness,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Fronend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "MERN Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Expert Tic",
      icon: expertTic,
      iconBg: "#383E56",
      date: "Mai 2020 - Aug 2022",
      points: [
        "As a remote and freelance web developer, I have successfully completed multiple projects involving both custom development and WordPress solutions. My work includes database conception and realization, as well as front-end development for a variety of websites. Notable projects include www.ellouhoum.tn and sodek-sicar.com.tn, where I utilized HTML5, CSS3, JavaScript, and PHP. Additionally, I have worked on WordPress sites like www.commune-foussana.gov.tn and www.france-pac-chaudiere.fr, where I was responsible for both the database and front-end aspects.",
      ],
    },
    {
      title: "MERN Stack Developer",
      company_name: "Al Idhafa",
      icon: idhafa,
      iconBg: "#E6DEDD",
      date: "Sept 2022 - Present",
      points: [
        "In my role as a freelance web developer, I have completed a diverse range of projects that showcase my proficiency in both front-end and back-end development. For instance, I worked on www.fnarc.tn, where I utilized React JS, SASS, and Node JS to connect to a distant SQL Server database, employing the full MERN stack. I also developed www.ness.com.tn, managing the entire development process, including database conception, back-end, and front-end development using HTML5, CSS3, JavaScript, and PHP.",
        "Additionally, I created and taught a MERN course, focusing on preparing comprehensive content for students. Furthermore, I was responsible for the full development lifecycle of www.crrhab.agrinet.tn, from conception to testing and hosting, using technologies such as React JS, Redux, Express JS, MongoDB, and more. This project also involved integrating Firebase Storage, Node Mailer, and real-time communication with Socket.io.",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Fridhi Kossay's skill and dedication turned our ideas into exceptional websites, like www.fnarc.tn and www.crrhab.agrinet.tn. Highly recommended for top-notch web development.",
      name: "Faouzi Gassoumi",
      designation: "CEO",
      company: "Al Idhafa",
      image: idhafa,
    },
    {
      testimonial:
        "I had the pleasure of working with Fridhi Koussay on several projects, including www.commune-thala.gov.tn and www.ellouhoum.tn. His attention to detail, creativity, and expertise produced stunning, user-friendly results. I look forward to working with him again.",
      name: "Anwer Borgi",
      designation: "Tech Lead",
      company: "Expert Tic",
      image: expertTic,
    },
    {
      testimonial:
        "After Koussay optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "CRRHAB",
      description:
        "During the development of the CRRHAB platform, I utilized the MERN stack along with Framer Motion for animations, Redux for state management, and Firebase Storage for file management. I also integrated Node Mailer for email functionalities and implemented real-time communication features using Socket.io. Additionally, I ensured a multilingual experience, making the platform accessible and tailored to a diverse user base by supporting multiple languages.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "chakra ui",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "orange-text-gradient",
        },
      ],
      image: crrhab,
      source_code_link: "https://crrhab.agrinet.tn/",
    },
    {
      name: "FNARC",
      description:
        "During the development of the FNARC platform, I used React, Redux, Express, and Node.js to connect to a distant SQL Server database. The project involved creating a five-generation family tree for each Tunisian horse and managing files and images with Firebase Storage. Additionally, I implemented a multilingual experience, ensuring the platform is accessible to a diverse user base and tailored to meet the needs of various language speakers.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Rest API",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "SQL Server",
          color: "blue-text-gradient",
        },
      ],
      image: fnarc,
      source_code_link: "https://fnarc.tn/",
    },
    {
      name: "Ness",
      description:
        "Ness is a versatile platform crafted to assist farmers and Agricultural Development Groups (GDAs). It provides essential tools for managing water resources, handling product sales, and efficiently overseeing GDAs. The platform also features a comprehensive ERP system designed to address the specific needs of these agricultural entities, optimizing their operations and boosting productivity.",
      tags: [
        {
          name: "html5",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "php",
          color: "blue-text-gradient",
        },
      ],
      image: ness,
      source_code_link: "https://ness.com.tn/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };