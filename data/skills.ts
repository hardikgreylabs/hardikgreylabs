// Skills data for Hardik Patel
export interface Skill {
  name: string;
  level: number; // 0-100
  projects?: number;
  years?: number;
}

export interface SkillCategory {
  name: string;
  icon: string;
  level: string;
  years: number;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    name: ".NET Technologies",
    icon: "dotnet",
    level: "Expert",
    years: 10,
    skills: [
      { name: "ASP.NET Core", level: 95, projects: 20 },
      { name: "C#", level: 95, projects: 25 },
      { name: "Entity Framework", level: 90, projects: 18 },
      { name: "Blazor", level: 85, projects: 5 },
      { name: "Web API", level: 95, projects: 22 },
      { name: ".NET 8/7/6", level: 90, projects: 15 },
      { name: "ASP.NET MVC", level: 92, projects: 20 },
      { name: "WCF", level: 80, projects: 8 },
    ],
  },
  {
    name: "Frontend Development",
    icon: "code",
    level: "Advanced",
    years: 10,
    skills: [
      { name: "React", level: 80, projects: 8 },
      { name: "JavaScript", level: 90, projects: 25 },
      { name: "TypeScript", level: 75, projects: 5 },
      { name: "HTML/CSS", level: 90, projects: 25 },
      { name: "jQuery", level: 85, projects: 15 },
      { name: "Angular JS", level: 75, projects: 8 },
      { name: "Bootstrap", level: 85, projects: 20 },
      { name: "AJAX", level: 85, projects: 18 },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: "cloud",
    level: "Advanced",
    years: 6,
    skills: [
      { name: "Azure", level: 88, projects: 12 },
      { name: "AWS", level: 72, projects: 5 },
      { name: "GCP", level: 65, projects: 3 },
      { name: "Azure DevOps", level: 85, projects: 15 },
      { name: "Docker", level: 75, projects: 6 },
      { name: "GitHub Actions", level: 70, projects: 8 },
      { name: "Azure IoT Hub", level: 80, projects: 4 },
      { name: "Azure Data Factory", level: 70, projects: 3 },
    ],
  },
  {
    name: "Databases",
    icon: "database",
    level: "Expert",
    years: 10,
    skills: [
      { name: "SQL Server", level: 95, projects: 25 },
      { name: "PostgreSQL", level: 80, projects: 5 },
      { name: "MySQL", level: 80, projects: 8 },
      { name: "MongoDB", level: 75, projects: 5 },
      { name: "Redis", level: 80, projects: 6 },
      { name: "Oracle", level: 70, projects: 3 },
      { name: "LINQ", level: 90, projects: 20 },
    ],
  },
  {
    name: "System Design & Architecture",
    icon: "architecture",
    level: "Advanced",
    years: 6,
    skills: [
      { name: "Microservices Architecture", level: 85, projects: 5 },
      { name: "Event-Driven Architecture", level: 82, projects: 6 },
      { name: "Multi-tenant SaaS", level: 90, projects: 8 },
      { name: "API Design (REST)", level: 90, projects: 20 },
      { name: "Database Design", level: 90, projects: 25 },
      { name: "Caching Strategies", level: 85, projects: 10 },
      { name: "System Scalability", level: 82, projects: 8 },
      { name: "Design Patterns", level: 85, projects: 15 },
    ],
  },
  {
    name: "Python & Other Technologies",
    icon: "layers",
    level: "Intermediate",
    years: 4,
    skills: [
      { name: "Python", level: 72, projects: 5 },
      { name: "Django", level: 62, projects: 2 },
      { name: "Node.js", level: 72, projects: 4 },
      { name: "Express.js", level: 68, projects: 3 },
      { name: "Git", level: 90, projects: 25 },
      { name: "C/C++", level: 75, projects: 5 },
      { name: "VB.NET", level: 80, projects: 10 },
    ],
  },
  {
    name: "Integration & Middleware",
    icon: "integration",
    level: "Advanced",
    years: 8,
    skills: [
      { name: "REST APIs", level: 92, projects: 20 },
      { name: "Web Services (ASMX)", level: 85, projects: 10 },
      { name: "SignalR/WebSockets", level: 80, projects: 6 },
      { name: "Dynamics NAV Integration", level: 82, projects: 5 },
      { name: "Magento API", level: 75, projects: 2 },
      { name: "Third-party Integrations", level: 85, projects: 12 },
    ],
  },
  {
    name: "Tools & Methodologies",
    icon: "tools",
    level: "Advanced",
    years: 10,
    skills: [
      { name: "Visual Studio", level: 95, projects: 25 },
      { name: "VS Code", level: 85, projects: 15 },
      { name: "Azure DevOps", level: 85, projects: 15 },
      { name: "Jira", level: 80, projects: 20 },
      { name: "Agile/Scrum", level: 85, projects: 18 },
      { name: "Telerik", level: 80, projects: 8 },
      { name: "Syncfusion", level: 78, projects: 4 },
    ],
  },
];

export const skillsByCategory = {
  backend: ["ASP.NET Core", "C#", "Node.js", "Python", "Web API", "Entity Framework"],
  frontend: ["React", "JavaScript", "TypeScript", "HTML/CSS", "jQuery", "Angular JS", "Blazor"],
  database: ["SQL Server", "PostgreSQL", "MongoDB", "Redis", "MySQL", "Oracle"],
  cloud: ["Azure", "AWS", "GCP", "Azure DevOps", "Docker"],
  architecture: ["Microservices", "Multi-tenant SaaS", "API Design", "System Design"],
};

export const certifications = [
  { name: "Cloud Computing Fundamentals", issuer: "Udemy", year: "2020" },
  { name: "Blazor (WASM & Server) and ASP.NET API", issuer: "Udemy", year: "2021" },
  { name: "Database Design", issuer: "Udemy", year: "2019" },
  { name: "Angular5", issuer: "Udemy", year: "2018" },
  { name: "Project Management PM101", issuer: "Udemy", year: "2019" },
];
