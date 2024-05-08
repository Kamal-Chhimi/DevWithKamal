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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
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
    title: "Custom Web Development",
    icon: web, // Ensure this icon visually represents web development
    description: "Expertise in crafting responsive and aesthetically pleasing web interfaces using advanced technologies like React, CSS, and HTML, ensuring a seamless user experience across all devices.",
  },
  {
    title: "Dynamic Backend Solutions",
    icon: backend, // Ensure this icon visually represents backend development
    description: "Proficient in developing robust backend systems with Node.js and Express.js, integrating with databases such as MySQL and Firebase to create scalable, secure, and efficient applications.",
  },
  {
    title: "Full Stack Development",
    icon: web, // Make sure to include an icon that represents Full Stack Development
    description: "Offering comprehensive full-stack development services, combining front-end and back-end expertise to deliver end-to-end solutions that meet complex business requirements.",
  },
  {
    title: "System Optimization & Integration",
    icon: backend, // Add an icon that signifies optimization and integration
    description: "Specialized in optimizing application performance and integrating various APIs and technologies to enhance functionality and user engagement.",
  },
  {
    title: "Project Management & Collaboration",
    icon: web, // Choose an icon that depicts project management
    description: "Adept at leading development projects from conception to deployment, emphasizing agile methodologies, team collaboration, and timely delivery of high-quality software solutions.",
  }
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
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
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
  {
    title: "Freelance Full Stack Developer",
    company_name: "Self-employed",
    icon: reactjs, // Assuming there's a 'freelance' icon variable, add it to the import list if exists
    iconBg: "#E6DEDD", // Choose an appropriate background color
    date: "February 2023 – Present",
    points: [
      "Worked closely with various teams throughout web development projects to ensure the delivery of custom front-end solutions that meet customer specifications.",
      "Contributed to the development, testing, and full-cycle support of web-based applications using technologies such as HTML/CSS, JavaScript (React, Next.js), and backend technologies (Node.js, Express.js).",
      "Designed responsive user interfaces and integrated them with a wide range of APIs and databases (SQL/MySQL, Firebase).",
      "Successfully outlined project requirements, timelines, and deliverables effectively ensuring projects were completed on time and within budget through effective collaboration with clients and team members.",
    ],
  },
];

  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
  {
    name: "Wine shop",
    description: "Explore a diverse selection of wines, complete with tasting tips and a welcoming community for wine lovers. Built a platform enhancing user experience and increasing order efficiency by 15%.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "Nodejs", color: "green-text-gradient" },
      { name: "MySQL", color: "blue-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: "path_to_wine_shop_image",
    source_code_link: "",
  },
  {
    name: "Watch shop",
    description: "Discover a curated collection of exquisite watches, blending classic and modern styles for all preferences. Designed a site that attracted 300+ weekly visitors improving sales conversion by 5%.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: "path_to_watch_shop_image",
    source_code_link: "",
  },
  {
    name: "Library Management System",
    description: "Developed a system improving reservation efficiency by 20% and enhancing user interaction through a chatbot increasing engagement by 10%.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
      { name: "APIs", color: "orange-text-gradient" },
    ],
    image: "path_to_library_management_system_image",
    source_code_link: "",
  },
  {
    name: "Inventory Management System",
    description: "Implemented a system that reduced stock discrepancies by 10% and boosted sales by 5%.",
    tags: [
      { name: "Java", color: "red-text-gradient" },
      { name: "mySql", color: "blue-text-gradient" },
    ],
    image: "path_to_inventory_management_image",
    source_code_link: "",
  },
  // {
  //   name: "Notes App",
  //   description: "Created an app that helped users manage tasks 30% more efficiently.",
  //   tags: [
  //     { name: "React", color: "blue-text-gradient" },
  //     { name: "Firebase", color: "green-text-gradient" },
  //   ],
  //   image: "path_to_notes_app_image",
  //   source_code_link: "",
  // },
  {
    name: "Weather App",
    description: "Launched a user-friendly weather forecasting website achieving 50+ daily visits by providing accurate real-time weather updates and alerts enhancing user preparedness by 25%.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "APIs", color: "orange-text-gradient" },
    ],
    image: "path_to_weather_app_image",
    source_code_link: "",
  },
  {
    name: "Small Meditation App",
    description: "Developed an app with guided sessions reaching 70+ users in its first month promoting well-being.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
    ],
    image: "path_to_meditation_app_image",
    source_code_link: "",
  },
];

  
  export { services, technologies, experiences, testimonials, projects };