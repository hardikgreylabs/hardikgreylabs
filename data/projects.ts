// Projects data for Hardik Patel
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    cloud?: string[];
    integration?: string[];
    protocols?: string[];
    firmware?: string[];
    hardware?: string[];
  };
  features: string[];
  highlights?: string[];
  metrics?: {
    users?: string;
    uptime?: string;
    responseTime?: string;
    companies?: string;
    devices?: string;
  };
  images?: string[];
  liveUrl?: string | null;
  githubUrl?: string | null;
  caseStudy?: string;
  duration: string;
  involvement: string;
}

export const projects: Project[] = [
  {
    id: "hrms-saas",
    title: "HRMS SaaS Platform",
    category: "Enterprise Application",
    description: "Multi-tenant HR management system with biometric integration",
    longDescription: `Complete HR management solution featuring employee records, attendance tracking, leave management,
    and biometric device integration. Designed as a multi-tenant SaaS platform serving 50+ companies with 5000+ users.`,
    technologies: {
      frontend: ["ASP.NET MVC", "JavaScript", "jQuery", "Bootstrap"],
      backend: ["C#", "ASP.NET Web API", "Entity Framework"],
      database: ["SQL Server"],
      integration: ["Matrix Bio-Metric API", "REST APIs"],
    },
    features: [
      "Multi-tenant SaaS architecture with Row-Level Security",
      "Bio-metric attendance device integration",
      "Role-based access control (RBAC)",
      "Advanced reporting with SSRS",
      "Leave management and approval workflows",
      "Employee self-service portal",
      "Payroll integration",
    ],
    highlights: [
      "Led team of 5 developers",
      "Served 50+ companies",
      "5000+ active users",
      "99.9% uptime",
    ],
    metrics: {
      companies: "50+",
      users: "5000+",
      uptime: "99.9%",
    },
    duration: "1 Year",
    involvement: "Software Developer / Team Leader",
    caseStudy: "/system-design/saas-multi-tenant",
  },
  {
    id: "cloudlog-iot",
    title: "CloudLog IoT Platform",
    category: "IoT & Cloud",
    description: "Real-time temperature & humidity monitoring system with IoT devices",
    longDescription: `Complete IoT data logging solution featuring real-time monitoring, alerts, analytics, and remote
    device management for temperature and humidity monitoring in pharmaceutical and food industries.`,
    technologies: {
      frontend: ["ASP.NET MVC", "JavaScript", "Chart.js", "SignalR"],
      backend: ["C#", "ASP.NET Web API", "SignalR"],
      database: ["SQL Server", "Redis"],
      cloud: ["Azure", "Azure IoT Hub"],
      protocols: ["MQTT", "HTTP", "WebSocket"],
    },
    features: [
      "Real-time data streaming with SignalR",
      "IoT device management and monitoring",
      "Alert and notification system",
      "Analytics dashboard with charts",
      "Data export to PDF and Excel",
      "Remote device configuration",
      "Multi-channel data logging",
    ],
    highlights: [
      "10,000+ IoT devices connected",
      "Sub-2 second latency",
      "Real-time dashboard updates",
    ],
    metrics: {
      devices: "10,000+",
      responseTime: "<2s",
    },
    duration: "1.6 Years",
    involvement: "Senior Software Developer",
    caseStudy: "/system-design/iot-data-pipeline",
  },
  {
    id: "jrs-waste",
    title: "JRS - Chemical Waste Management",
    category: "Enterprise SaaS",
    description: "SaaS-based chemical disposal and waste tracking system",
    longDescription: `Chemical disposal waste management and tracking system with SaaS architecture. Features dynamic
    form builder, PDF export, and comprehensive tracking for regulatory compliance.`,
    technologies: {
      frontend: ["ASP.NET MVC", "C#", "JavaScript"],
      backend: ["C#", "ASP.NET Web API", "Entity Framework"],
      database: ["SQL Server"],
    },
    features: [
      "Dynamic form builder with custom fields",
      "PDF export functionality",
      "Waste tracking and lifecycle management",
      "Regulatory compliance reporting",
      "Multi-tenant SaaS architecture",
    ],
    highlights: ["SaaS Architecture", "Dynamic Form Generation"],
    duration: "10 Months",
    involvement: "Software Developer",
  },
  {
    id: "tank-management",
    title: "Tank Management & Tracking System (FMS)",
    category: "Logistics",
    description: "Real-time tanker tracking and status monitoring system",
    longDescription: `Real-time tracking system for tanker location and status monitoring. Worked on-site at Gulbrandsen
    Technology to implement fleet management solution.`,
    technologies: {
      frontend: ["ASP.NET MVC", "JavaScript", "Google Maps API"],
      backend: ["C#", "ASP.NET Web API"],
      database: ["PostgreSQL"],
      protocols: ["GPS", "REST API"],
    },
    features: [
      "Real-time tanker tracking",
      "Route optimization",
      "Status monitoring",
      "Alert system for delays",
      "Fleet management dashboard",
    ],
    highlights: ["On-site Implementation", "Real-time GPS Tracking"],
    duration: "3 Months",
    involvement: "Software Developer",
  },
  {
    id: "erda-portal",
    title: "ERDA Web Service Portal",
    category: "Enterprise Integration",
    description: "Web portal integrating with Microsoft Dynamics NAV",
    longDescription: `Project consumes web service references of NAV (2009) R2. Purpose is to reduce desktop work and
    migrate users to web-based interface for improved accessibility.`,
    technologies: {
      frontend: ["ASP.NET", "Web Forms", "JavaScript"],
      backend: ["C#", "ASP.NET Web API", "Dynamics NAV Integration"],
      integration: ["Dynamics NAV Web Services"],
    },
    features: [
      "Dynamics NAV web service integration",
      "Web-based replacement for desktop client",
      "Data synchronization",
      "User authentication and authorization",
    ],
    highlights: ["NAV Integration", "Desktop to Web Migration"],
    duration: "9 Months",
    involvement: "Senior Software Developer",
  },
  {
    id: "sync-nm",
    title: "Sync NM - NAV-Magento Integration",
    category: "Enterprise Integration",
    description: "Server-side integration between Dynamics NAV and Magento E-commerce",
    longDescription: `Server-side application integrating NAV and Magento E-commerce using NAV web references and
    Magento API. Solves synchronization problems for 9 overseas companies.`,
    technologies: {
      backend: ["C#", "ASP.NET", "Windows Service", "Magento API", "Dynamics NAV"],
      integration: ["Magento API", "NAV Web Services"],
    },
    features: [
      "Real-time sync between NAV and Magento",
      "Product synchronization",
      "Order management integration",
      "Inventory synchronization",
      "Multi-company support",
    ],
    highlights: ["9 Overseas Companies", "B2B E-commerce Integration"],
    duration: "5 Months",
    involvement: "Senior Software Developer",
  },
  {
    id: "xml-editor",
    title: "XML Editor for Dynamics NAV",
    category: "Enterprise Tool",
    description: "Web-based XML editor for Dynamics NAV integration",
    longDescription: `Web application consuming NAV web references. Users can generate XML files with multiple nodes
    using WYSIWYG editor for data integration purposes.`,
    technologies: {
      frontend: ["ASP.NET", "Web Forms", "WYSIWYG Editor", "JavaScript"],
      backend: ["C#", "ASP.NET", "NAV Web Services"],
    },
    features: [
      "WYSIWYG XML editor",
      "Multi-node XML generation",
      "NAV web service integration",
      "Template management",
    ],
    highlights: ["XML Generation", "NAV Integration"],
    duration: "4 Months",
    involvement: "Senior Software Developer",
  },
  {
    id: "customer-tracking",
    title: "Customer Tracking Portal",
    category: "Enterprise Portal",
    description: "Customer portal for tracking orders, invoices, and payments",
    longDescription: `Portal connected to Microsoft Dynamics NAV allowing customers to track orders, invoices,
    credit memos, and payments. Upgraded from MSCRM 2015 to Microsoft D365.`,
    technologies: {
      frontend: ["ASP.NET", "Dynamics CRM", "JavaScript"],
      backend: ["C#", "ASP.NET", "Dynamics CRM", "Dynamics NAV"],
      integration: ["Dynamics CRM", "Dynamics NAV"],
    },
    features: [
      "Order tracking",
      "Invoice management",
      "Payment status",
      "Credit memo tracking",
      "D365 integration",
    ],
    highlights: ["MSCRM to D365 Upgrade", "Customer Self-Service"],
    duration: "6 Months",
    involvement: "Senior Software Developer",
  },
  {
    id: "mobicare",
    title: "Mobicare - Mobile Skin Generator",
    category: "Desktop Application",
    description: "Desktop application for generating mobile skins",
    longDescription: `Desktop application allowing production of mobile skins according to defined templates.
    Includes MVC-based admin panel for customer management and licensing.`,
    technologies: {
      frontend: ["ASP.NET MVC", "JavaScript", "jQuery"],
      backend: ["C#", "ASP.NET MVC"],
      database: ["SQL Server"],
    },
    features: [
      "Mobile skin generation",
      "Template management",
      "License management",
      "Admin panel",
      "Customer management",
    ],
    highlights: ["Desktop + Web Application"],
    duration: "7 Months",
    involvement: "Senior Software Developer / Team Leader",
  },
  {
    id: "adcs",
    title: "Automated Data Capturing System",
    category: "Industrial Automation",
    description: "MVC-based testing certificate generation system",
    longDescription: `MVC application for generating testing certificates per Indian Standards. All calculations
    managed per standards. Web services (ASMX) developed for machine integration.`,
    technologies: {
      frontend: ["ASP.NET MVC", "JavaScript", "jQuery"],
      backend: ["C#", "ASP.NET Web Services (ASMX)"],
      database: ["SQL Server"],
      integration: ["Machine Integration APIs"],
    },
    features: [
      "Testing certificate generation",
      "Indian Standards calculations",
      "Machine integration via web services",
      "Automated data capture",
      "Report generation",
    ],
    highlights: ["Machine Integration", "Automated Testing"],
    duration: "8 Months",
    involvement: "Senior Software Developer",
  },
  {
    id: "latlong-tours",
    title: "LATLONG Tours - Travel Booking Platform",
    category: "Travel & Hospitality",
    description: "ASP.NET Core travel booking platform for flights and hotels",
    longDescription: `ASP.NET Core-based web application allowing customers to book flight tickets, hotels, and
    vacation packages. Integrated with Amadeus API for bookings.`,
    technologies: {
      frontend: ["ASP.NET Core", "JavaScript", "Bootstrap"],
      backend: ["C#", "ASP.NET Core", "Entity Framework"],
      database: ["SQL Server"],
      integration: ["Amadeus API", "Hotel APIs"],
    },
    features: [
      "Flight booking",
      "Hotel booking",
      "Package deals",
      "Payment gateway integration",
      "Booking management",
      "Amadeus API integration",
    ],
    highlights: ["Amadeus Integration", "End-to-End Booking"],
    duration: "8 Months",
    involvement: "Senior Software Developer / Team Lead",
  },
  {
    id: "charter-store",
    title: "The Charter Store",
    category: "Logistics",
    description: "ASP.NET MVC bidding and shipment tracking platform",
    longDescription: `ASP.NET MVC-based web application allowing users to bid on shipping packages and track
    shipments through delivery.`,
    technologies: {
      frontend: ["ASP.NET MVC", "JavaScript", "jQuery"],
      backend: ["C#", "ASP.NET MVC"],
      database: ["SQL Server"],
    },
    features: [
      "Package bidding system",
      "Shipment tracking",
      "User dashboard",
      "Bid management",
      "Real-time notifications",
    ],
    highlights: ["Bidding Platform", "Shipment Tracking"],
    duration: "6 Months",
    involvement: "Senior Software Developer / Team Lead",
  },
  {
    id: "cluster-docs",
    title: "Cluster Docs - Document Management",
    category: "SaaS Application",
    description: "Multi-document management system with Azure integration",
    longDescription: `System allowing management of multiple documents simultaneously. Uses Syncfusion for file
    explorer functionality and Azure Blob Storage for data storage.`,
    technologies: {
      frontend: ["ASP.NET MVC", "Syncfusion", "JavaScript"],
      backend: ["C#", "ASP.NET MVC"],
      cloud: ["Azure Blob Storage"],
      database: ["SQL Server"],
    },
    features: [
      "Multiple document management",
      "File explorer interface",
      "Azure Blob Storage integration",
      "Document sharing",
      "Version control",
    ],
    highlights: ["Azure Integration", "Syncfusion UI"],
    duration: "3 Months",
    involvement: "Senior Software Developer / Team Lead",
  },
  {
    id: "mars-analytics",
    title: "MARS - Business Analytics Tool",
    category: "Analytics",
    description: "Business analytics tool with Salesforce integration",
    longDescription: `Business analytics tool providing insights and dashboards. Integrated with Salesforce for
    CRM data analysis and reporting.`,
    technologies: {
      frontend: ["React", "JavaScript", "Chart.js"],
      backend: ["Node.js", "Express"],
      integration: ["Salesforce API"],
    },
    features: [
      "Business analytics dashboard",
      "Salesforce integration",
      "Data visualization",
      "Custom reporting",
    ],
    highlights: ["Salesforce Integration", "Analytics Dashboard"],
    duration: "1 Year",
    involvement: "Senior Software Developer",
  },
  {
    id: "temp-datalogger",
    title: "Temperature & Humidity Datalogger",
    category: "IoT & Hardware",
    description: "Custom IoT-based temperature data logging device",
    longDescription: `Custom temperature data logger with IoT capabilities. Supports multiple communication protocols
    including RFID, Bluetooth, and WiFi for industrial applications.`,
    technologies: {
      firmware: ["C", "C++", "Python"],
      hardware: ["Arduino", "ESP32", "Sensors"],
      protocols: ["RFID", "Bluetooth", "WiFi", "MQTT"],
    },
    features: [
      "IoT-based data logging",
      "Multiple communication protocols",
      "Remote configuration",
      "Data export capabilities",
      "Industrial-grade sensors",
    ],
    highlights: ["Hardware + Software", "IoT Device Development"],
    duration: "1 Year",
    involvement: "R&D Engineer",
  },
];

export const featuredProjects = [
  "hrms-saas",
  "cloudlog-iot",
  "jrs-waste",
  "latlong-tours",
  "cluster-docs",
];
