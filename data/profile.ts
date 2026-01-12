// Profile data for Hardik Patel
export interface Profile {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  social: {
    github: string;
    linkedin: string;
    email: string;
    portfolio: string;
  };
  stats: {
    years: string;
    projects: string;
    clients: string;
    teamSize: string;
  };
}

export const profile: Profile = {
  name: "Hardik Patel",
  title: "Fullstack .NET Developer | System Design Architect",
  tagline: "Building scalable enterprise solutions with 10+ years of experience",
  email: "hardikp2010@gmail.com",
  phone: "+91-7878120246",
  location: "India (Remote)",
  availability: "Open to opportunities",
  social: {
    github: "https://github.com/hardikgreylabs",
    linkedin: "https://linkedin.com/in/hardikpatel",
    email: "mailto:hardikp2010@gmail.com",
    portfolio: "https://hardikgreylabs.github.io/hardikgreylabs/",
  },
  stats: {
    years: "10+",
    projects: "20+",
    clients: "15+",
    teamSize: "6",
  },
};

export const summary = `Fullstack .NET Developer with 10+ years of experience building scalable enterprise applications,
SaaS platforms, and IoT solutions. Expert in .NET ecosystem (ASP.NET, .NET Core, C#), modern JavaScript frameworks
(React, TypeScript), and cloud platforms (Azure, AWS). Proven track record of leading teams, delivering 20+ projects,
and architecting multi-tenant SaaS solutions serving 5000+ users.`;
