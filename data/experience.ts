// Experience data for Hardik Patel
export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  type: string;
  technologies: string[];
  achievements: string[];
  highlights?: string[];
}

export const experiences: Experience[] = [
  {
    id: "grey-cell-2024",
    company: "Grey Cell Labs Pvt. Ltd.",
    position: "Fullstack Developer",
    duration: "January 2024 - Present",
    location: "Remote",
    type: "Full-time",
    technologies: ["Python", ".NET", "React", "Node.js", "TypeScript", "MongoDB", "JavaScript"],
    achievements: [
      "Developed custom solutions using Python and .NET stack for diverse clients",
      "Built responsive frontends with React and TypeScript",
      "Implemented Node.js microservices for scalable backend solutions",
      "Collaborated with cross-functional teams on enterprise projects",
    ],
    highlights: ["US Based Software Development Company", "Mobile/Web Apps & Cloud Computing"],
  },
  {
    id: "freelance-2021-2023",
    company: "Freelance Consultant",
    position: "Fullstack Developer & Consultant",
    duration: "January 2021 - December 2023",
    location: "Remote",
    type: "Freelance",
    technologies: ["ASP.NET Core", "Web API", "MS SQL Server", "Blazor", "Azure", "Entity Framework"],
    achievements: [
      "Delivered 15+ projects for diverse clients across various domains",
      "Specialized in SaaS multi-tenant architecture design and implementation",
      "Architected and implemented scalable cloud solutions using Azure",
      "Led requirement gathering, design, and full implementation phases",
      "Managed project timelines and client communications independently",
    ],
    highlights: ["15+ Projects Delivered", "SaaS & Cloud Solutions Expert"],
  },
  {
    id: "maxelit-2020",
    company: "Maxelit LLP",
    position: "Team Lead",
    duration: "March 2020 - December 2020",
    location: "Remote",
    type: "Full-time",
    technologies: ["ASP.NET MVC", "ASP.NET Core", "Web API", "MS SQL Server", "Angular", "Azure", "JavaScript"],
    achievements: [
      "Led team of 5 developers in agile/scrum environment",
      "Conducted daily scrum meetings and provided technical mentorship",
      "Developed enterprise applications using Microsoft technologies",
      "Oversaw project delivery schedules and code quality standards",
      "Guided team through complex technical challenges and solutions",
    ],
    highlights: ["Team Leadership", "US Based Software Company"],
  },
  {
    id: "grey-cell-2019-2020",
    company: "Grey Cell Labs Pvt. Ltd.",
    position: "Senior Software Developer",
    duration: "March 2019 - March 2020",
    location: "India",
    type: "Full-time",
    technologies: [".NET", "React", "Node.js", "TypeScript", "JavaScript", "MongoDB", "Express.js"],
    achievements: [
      "Developed fullstack applications using modern .NET and JavaScript technologies",
      "Built RESTful APIs and real-time features using WebSockets",
      "Implemented responsive UI components with React",
      "Worked on MongoDB database design and optimization",
      "Collaborated with team on system architecture and design decisions",
    ],
    highlights: ["Fullstack Development", "Modern JavaScript Stack"],
  },
  {
    id: "dhyey-2017-2019",
    company: "Dhyey Technology",
    position: "Senior Software Developer / Team Lead",
    duration: "January 2017 - March 2019",
    location: "India",
    type: "Full-time",
    technologies: ["ASP.NET", "MVC", "ASP.NET Core", "Web API", "MS SQL Server", "JavaScript", "Azure", "jQuery"],
    achievements: [
      "Promoted from Software Developer to Team Lead based on performance",
      "Led team of 6 developers across multiple projects",
      "Trained junior developers on .NET technologies and best practices",
      "Designed project architecture and conducted requirement gathering sessions",
      "Managed code reviews, testing, and deployment processes",
    ],
    highlights: ["Promoted to Team Lead", "Microsoft Gold Partner"],
  },
  {
    id: "hrsd-2015-2017",
    company: "HRSD Informatics",
    position: "R&D Engineer",
    duration: "August 2015 - March 2017",
    location: "India",
    type: "Full-time",
    technologies: ["C#", "C", "C++", "Python", "IoT", "RFID", "Bluetooth", "WiFi"],
    achievements: [
      "Designed IoT-based temperature and humidity data loggers for industrial use",
      "Managed multiple projects including multi-channel data logger and RF-based data logger",
      "Worked on hardware and software integration for industrial solutions",
      "Developed firmware for data logging devices",
      "Implemented communication protocols (RFID, Bluetooth, WiFi)",
    ],
    highlights: ["IoT & Hardware Integration", "Industrial Solutions"],
  },
];

export const techEvolution = [
  {
    period: "2015-2018",
    focus: ".NET Framework, ASP.NET MVC, SQL Server, C#",
    projects: ["HRMS", "CloudLog", "JRS"],
  },
  {
    period: "2018-2020",
    focus: ".NET Core, Angular, Azure, React",
    projects: ["Tank Management", "ERDA Portal", "Mobicare"],
  },
  {
    period: "2020-2022",
    focus: ".NET 5/6, React, TypeScript, Microservices",
    projects: ["LATLONG Tours", "The Charter Store", "Cluster Docs"],
  },
  {
    period: "2023-Present",
    focus: ".NET 8, Python, Node.js, Cloud-Native Architecture",
    projects: ["SaaS Platform", "IoT Pipeline", "Enterprise Solutions"],
  },
];
