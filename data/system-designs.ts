// System Design Cases for Hardik Patel
export interface SystemDesign {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  duration: string;
  description: string;
  problem: string;
  requirements: {
    functional: string[];
    nonFunctional: string[];
    constraints: string[];
  };
  solution: {
    architecture: string;
    database: string;
    caching: string;
    security: string;
    scaling: string;
  };
  techStack: {
    backend?: string[];
    frontend?: string[];
    database?: string[];
    cache?: string[];
    queue?: string[];
    storage?: string[];
    protocols?: string[];
    gateway?: string[];
    messaging?: string[];
    search?: string[];
  };
  keyDecisions: Array<{
    decision: string;
    reasoning: string;
    tradeoffs: string;
  }>;
  metrics: {
    scale?: string;
    users?: string;
    throughput?: string;
    latency?: string;
    availability?: string;
  };
  diagrams: Array<{
    title: string;
    description: string;
    content: string;
  }>;
  challenges: Array<{
    challenge: string;
    solution: string;
  }>;
  learnings: string[];
}

export const systemDesigns: SystemDesign[] = [
  {
    id: "saas-multi-tenant-architecture",
    title: "SaaS Multi-Tenant Architecture",
    category: "Enterprise Architecture",
    difficulty: "Advanced",
    duration: "2 years development",
    description: "Design and implementation of scalable multi-tenant SaaS architecture for HR management system",
    problem: `Design a SaaS platform that can serve 100+ customers with complete data isolation, customizability,
    and cost-effectiveness while maintaining high performance and security.`,
    requirements: {
      functional: [
        "Complete data isolation between tenants",
        "Custom feature sets per tenant",
        "Tenant-specific branding and configuration",
        "Role-based access control within each tenant",
        "Shared application with tenant-aware routing",
      ],
      nonFunctional: [
        "99.9% availability",
        "<200ms p95 response time",
        "Support 5000+ concurrent users",
        "Cost-efficient resource utilization",
        "Easy onboarding of new tenants",
      ],
      constraints: [
        "Budget constraints for startup",
        "Need for quick feature deployment",
        "Legacy client integration requirements",
        "Compliance with data protection regulations",
      ],
    },
    solution: {
      architecture: "Shared Database, Shared Schema approach with Row-Level Security",
      database: "SQL Server with TenantId discriminator and Row-Level Security",
      caching: "Redis for tenant-specific caching with namespace isolation",
      security: "Row-Level Security + Data Encryption at Rest + JWT with tenant claims",
      scaling: "Horizontal scaling with stateless services, connection pooling",
    },
    techStack: {
      backend: ["ASP.NET Core 8.0", "C#", "Entity Framework Core"],
      frontend: ["ASP.NET MVC", "JavaScript", "jQuery"],
      database: ["SQL Server 2022"],
      cache: ["Redis"],
      queue: ["Azure Service Bus"],
      storage: ["Azure Blob Storage"],
    },
    keyDecisions: [
      {
        decision: "Shared Database vs Separate Database",
        reasoning: `Chose shared database for cost efficiency and easier maintenance. Implemented Row-Level Security
        (RLS) for automatic data isolation at database level, reducing application complexity.`,
        tradeoffs: `Lower cost vs. Noisy neighbor problem (mitigated with resource quotas and monitoring)`,
      },
      {
        decision: "Caching Strategy",
        reasoning: `Redis for session and frequently accessed data with tenant-specific keys using namespace
        prefix pattern (tenant:id:key) for automatic cache isolation.`,
        tradeoffs: `Improved performance (10x faster reads) vs. Cache invalidation complexity (solved with
        cache-aside pattern)`,
      },
      {
        decision: "Tenant Identification",
        reasoning: `Subdomain-based routing (tenant.app.com) for clear separation, with fallback to header-based
        detection for API clients.`,
        tradeoffs: `Clean URLs vs. SSL certificate complexity (solved with wildcard certificates)`,
      },
    ],
    metrics: {
      scale: "50+ tenants",
      users: "5000+",
      throughput: "1000 req/sec peak",
      latency: "<200ms p95",
      availability: "99.9%",
    },
    diagrams: [
      {
        title: "High-Level Architecture",
        description: "Overall system architecture showing components and data flow",
        content: `
[Client Browser]
       |
       v
[Load Balancer]
       |
       v
[API Gateway / WAF]
       |
   +---+-------------------+
   |                       |
[Web App]              [API Services]
   |                       |
   v                       v
[Cache - Redis]      [Business Logic]
   |                       |
   +-------+-------+       |
           |       |       v
           |       |   [SQL Server - RLS]
           |       |
           +-------+-------+
                   |
                   v
          [Azure Blob Storage]
        `,
      },
      {
        title: "Database Schema Pattern",
        description: "Multi-tenant database design with TenantId pattern",
        content: `
-- All tables include TenantId
CREATE TABLE Employees (
  Id INT PRIMARY KEY,
  TenantId INT NOT NULL,
  Name NVARCHAR(100),
  -- Row-Level Security Policy
  INDEX IX_TenantId (TenantId)
);

-- RLS Policy automatically filters by TenantId
CREATE SECURITY POLICY TenantIsolation
ON Employees
FOR SELECT
ADD FILTER_PREDICATE = (TenantId = SESSION_CONTEXT(N'TenantId'));
        `,
      },
      {
        title: "Request Flow",
        description: "Request processing flow with tenant context",
        content: `
1. Request arrives with subdomain (tenant1.app.com)
2. Middleware extracts tenant identifier
3. Validates tenant exists and is active
4. Adds tenant context to:
   - SESSION_CONTEXT (for SQL Server RLS)
   - HttpContext (for application logic)
   - Cache keys (for Redis isolation)
5. Business logic executes with automatic tenant filtering
6. Response returned with tenant-specific data
        `,
      },
    ],
    challenges: [
      {
        challenge: "Data Migration Between Tenants",
        solution: `Created bulk export/import tools with data validation. Implemented background job processing
        for large migrations with progress tracking and rollback capabilities.`,
      },
      {
        challenge: "Custom Feature Requests",
        solution: `Plugin architecture with tenant-specific feature flags. Used strategy pattern for
        tenant-specific business logic while maintaining shared codebase.`,
      },
      {
        challenge: "Performance Degradation as Tenants Grow",
        solution: `Implemented database partitioning by tenant, query optimization with proper indexing,
        and read replicas for reporting workloads.`,
      },
    ],
    learnings: [
      "Importance of proper tenant isolation from the start - retrofitting is expensive",
      "Monitoring and observability are critical in multi-tenant systems for identifying noisy neighbors",
      "Clear SLAs and resource quotas prevent tenant performance issues",
      "Row-Level Security simplifies application code and prevents data leak bugs",
      "Tenant onboarding automation is key for scaling SaaS operations",
    ],
  },
  {
    id: "iot-data-pipeline",
    title: "IoT Data Pipeline Architecture",
    category: "IoT & Real-Time Systems",
    difficulty: "Intermediate",
    duration: "1.5 years development",
    description: "Real-time data ingestion and processing for IoT temperature sensors in industrial applications",
    problem: `Design a system that can ingest data from 10,000+ IoT devices sending temperature readings
    every 10 seconds, provide real-time monitoring, and store historical data for analytics.`,
    requirements: {
      functional: [
        "Handle 10,000+ concurrent device connections",
        "Real-time data ingestion and processing",
        "Live dashboard with <2 second latency",
        "Alert system for threshold violations",
        "Historical data retention and analytics",
        "Remote device configuration and management",
      ],
      nonFunctional: [
        "Handle 1,000+ messages/second throughput",
        "Sub-2 second end-to-end latency",
        "99.95% availability",
        "Support for intermittent connectivity",
        "Efficient data compression and storage",
      ],
      constraints: [
        "Device resource constraints (memory, CPU)",
        "Unreliable network conditions",
        "Limited bandwidth in some locations",
        "Need for offline data buffering",
      ],
    },
    solution: {
      architecture: "Event-driven architecture with Azure IoT Hub",
      database: "SQL Server for hot data, Blob storage for cold data",
      caching: "Redis for real-time dashboard data",
      security: "Device certificates, per-device authentication",
      scaling: "Horizontal scaling of processing functions, partitioned storage",
    },
    techStack: {
      backend: ["C#", "ASP.NET Core", "Azure Functions"],
      frontend: ["ASP.NET MVC", "SignalR", "Chart.js"],
      protocols: ["MQTT", "HTTP", "WebSocket"],
      database: ["SQL Server", "Azure Blob Storage"],
      cache: ["Redis"],
      queue: ["Azure IoT Hub", "Azure Service Bus"],
    },
    keyDecisions: [
      {
        decision: "MQTT vs HTTP for Device Communication",
        reasoning: `Chose MQTT for its lightweight protocol, low bandwidth usage, and built-in support for
        unreliable networks with QoS levels. Critical for devices with limited connectivity.`,
        tradeoffs: `MQTT efficiency vs. HTTP simplicity (MQTT requires message broker infrastructure)`,
      },
      {
        decision: "Real-time Dashboard Technology",
        reasoning: `SignalR for bi-directional communication allowing server to push updates to connected
        clients without polling. Redis as backplane for multi-server scaling.`,
        tradeoffs: `Real-time updates vs. Server resource usage (mitigated with connection throttling)`,
      },
      {
        decision: "Data Storage Strategy",
        reasoning: `Hot data (last 30 days) in SQL Server for quick queries and reporting. Cold data archived
        to Azure Blob Storage in compressed format for cost efficiency.`,
        tradeoffs: `Complex data retrieval vs. Storage cost savings (90% cost reduction for old data)`,
      },
    ],
    metrics: {
      scale: "10,000+ devices",
      throughput: "1,000+ msg/sec",
      latency: "<2 seconds",
      availability: "99.95%",
    },
    diagrams: [
      {
        title: "IoT Pipeline Architecture",
        description: "End-to-end data flow from devices to dashboard",
        content: `
[IoT Devices]
     |
     | MQTT
     v
[Azure IoT Hub]
     |
     | Event Hub
     v
[Azure Functions / Web Jobs]
     |
   +-+-------------+
   |               |
[Hot Path]    [Cold Path]
   |               |
   v               v
[SQL Server] [Blob Storage]
   |               |
[SignalR]      [Analytics]
   |
   v
[Dashboard - Real-time]
        `,
      },
      {
        title: "Device Communication Flow",
        description: "MQTT connection and message flow",
        content: `
1. Device connects to IoT Hub with MQTT
2. Authenticates with device certificate
3. Subscribes to command topics
4. Publishes telemetry data
5. IoT Hub routes messages to endpoints
6. Cloud services process data
7. Commands sent back to device via topics
8. Device acknowledges commands
        `,
      },
    ],
    challenges: [
      {
        challenge: "Handling Device Offline Scenarios",
        solution: `Implemented device-side buffering (store 1000 messages locally) with MQTT persistent
        sessions. Azure IoT Hub stores messages for offline devices until reconnection.`,
      },
      {
        challenge: "High-Frequency Data Ingestion",
        solution: `Batch processing with Azure Functions, partitioned Event Hubs for parallel processing,
        and bulk insert operations to database.`,
      },
      {
        challenge: "Real-time Alert Processing",
        solution: `Stream Analytics for real-time rule evaluation, Azure Service Bus for alert notifications,
        and duplicate detection to prevent alert storms.`,
      },
    ],
    learnings: [
      "Protocol selection (MQTT) critical for IoT scale and reliability",
      "Device offline handling must be designed from the start",
      "Real-time systems need comprehensive monitoring for latency tracking",
      "Data lifecycle management essential for cost control at scale",
      "Edge computing can reduce cloud costs for simple processing",
    ],
  },
  {
    id: "microservices-ecommerce",
    title: "E-commerce Microservices Architecture",
    category: "Microservices",
    difficulty: "Advanced",
    duration: "8 months development",
    description: "Scalable e-commerce platform using microservices pattern for seasonal traffic spikes",
    problem: `Design an e-commerce platform that can handle seasonal traffic spikes (10x normal load),
    provide 99.99% availability, and support rapid feature development with independent deployments.`,
    requirements: {
      functional: [
        "Product catalog with search and filtering",
        "Shopping cart and checkout",
        "Payment processing",
        "Order management and tracking",
        "User authentication and profiles",
        "Inventory management",
      ],
      nonFunctional: [
        "Handle 10x traffic spikes during sales",
        "99.99% availability",
        "<100ms API response time",
        "Independent service deployment",
        "Fault tolerance and graceful degradation",
      ],
      constraints: [
        "Limited team size for service maintenance",
        "Need for rapid feature iteration",
        "Third-party service integrations (payments, shipping)",
        "Legacy systems integration required",
      ],
    },
    solution: {
      architecture: "Microservices with API Gateway pattern",
      database: "Polyglot persistence (SQL for ACID, MongoDB for catalog, Redis for cache)",
      caching: "Multi-level caching (CDN, Redis, application cache)",
      security: "OAuth 2.0, JWT, API Gateway authentication",
      scaling: "Horizontal scaling per service, autoscaling policies",
    },
    techStack: {
      backend: ["ASP.NET Core 8.0", "C#"],
      gateway: ["Ocelot API Gateway"],
      messaging: ["Azure Service Bus", "RabbitMQ"],
      database: ["SQL Server", "MongoDB", "Redis"],
      search: ["Elasticsearch"],
    },
    keyDecisions: [
      {
        decision: "Microservices vs Monolith",
        reasoning: `Chose microservices for independent scaling and deployment. Critical during seasonal
        spikes where checkout needs 10x resources but catalog needs 2x.`,
        tradeoffs: `Operational complexity vs. Scaling flexibility (mitigated with Docker and good monitoring)`,
      },
      {
        decision: "Service Communication",
        reasoning: `Event-driven with Azure Service Bus for async operations (order placed -> inventory reserved
        -> payment processed). HTTP for synchronous queries.`,
        tradeoffs: `Eventual consistency vs. Service decoupling (acceptable for most operations)`,
      },
      {
        decision: "Data Management",
        reasoning: `Polyglot persistence: SQL Server for orders (ACID required), MongoDB for catalog
        (flexible schema), Redis for cart/session data.`,
        tradeoffs: `Technology diversity vs. Right tool for each job (requires team to learn multiple DBs)`,
      },
    ],
    metrics: {
      scale: "10x traffic spikes",
      throughput: "10,000 req/sec peak",
      latency: "<100ms p95",
      availability: "99.99%",
    },
    diagrams: [
      {
        title: "Microservices Architecture",
        description: "Service decomposition and communication",
        content: `
[Client]
   |
   v
[API Gateway - Ocelot]
   |
   +---+----+----+----+----+
   |    |    |    |    |
[Auth] [Cat] [Cart] [Ord] [Pay]
   |    |    |    |    |
   v    v    v    v    v
[DBs][Mongo][Redis][SQL][PayAPI]
   |    |    |    |    |
   +----+----+----+----+
        |
     [Service Bus]
        |
     [Analytics]
        `,
      },
    ],
    challenges: [
      {
        challenge: "Distributed Transactions",
        solution: `Saga pattern for order processing. Compensating transactions for rollback.
        Event sourcing for order state reconstruction.`,
      },
      {
        challenge: "Service Discovery",
        solution: `Consul for service registration and discovery. Health checks with automatic
        service removal for failed instances.`,
      },
      {
        challenge: "API Versioning",
        solution: `URL-based versioning (/v1/products, /v2/products). Shared contracts using
        OpenAPI/Swagger for client code generation.`,
      },
    ],
    learnings: [
      "Start with bounded contexts, split into services as needed",
      "Distributed tracing essential for debugging cross-service issues",
      "Circuit breakers prevent cascade failures",
      "API Gateway is single point of failure - need HA setup",
      "Event-driven communication improves resilience but adds complexity",
    ],
  },
  {
    id: "realtime-collaboration",
    title: "Real-Time Collaboration System",
    category: "Real-Time Systems",
    difficulty: "Intermediate",
    duration: "6 months development",
    description: "Design for real-time collaborative document editing and communication",
    problem: `Design a system that allows multiple users to edit documents simultaneously with real-time
    updates and conflict resolution while maintaining data consistency.`,
    requirements: {
      functional: [
        "Simultaneous multi-user editing",
        "Real-time updates to all clients",
        "Conflict resolution",
        "Document version history",
        "User presence indicators",
        "Undo/redo support",
      ],
      nonFunctional: [
        "<100ms latency for updates",
        "Support 100+ concurrent users per document",
        "99.9% availability",
        "Offline editing support",
      ],
      constraints: [
        "Mobile devices with unstable connections",
        "Limited bandwidth scenarios",
        "Cross-platform compatibility required",
      ],
    },
    solution: {
      architecture: "WebSocket-based with SignalR for real-time communication",
      database: "Document store with version history",
      caching: "Redis for connection management and pub/sub",
      security: "Document-level permissions, encrypted transport",
      scaling: "Connection pooling with Redis backplane for multi-server",
    },
    techStack: {
      backend: ["ASP.NET Core", "SignalR", "C#"],
      frontend: ["React", "SignalR Client"],
      database: ["MongoDB", "SQL Server"],
      cache: ["Redis"],
    },
    keyDecisions: [
      {
        decision: "Operational Transformation vs CRDT",
        reasoning: `Chose OT for simpler implementation and good enough for our use case. CRDTs
        more complex but provide better guarantees for offline editing.`,
        tradeoffs: `Implementation simplicity vs. Strong consistency guarantees`,
      },
      {
        decision: "Transport Protocol",
        reasoning: `WebSocket with SignalR fallback to long-polling. SignalR handles reconnection
        and connection state management automatically.`,
        tradeoffs: "WebSocket efficiency vs. Fallback compatibility needed",
      },
    ],
    metrics: {
      scale: "100+ users/document",
      latency: "<100ms",
      availability: "99.9%",
    },
    diagrams: [
      {
        title: "Real-Time Collaboration Flow",
        description: "Message flow for collaborative editing",
        content: `
[User A]           [User B]           [User C]
   |                  |                  |
   | Edit op          |                  |
   +----------------->|                  |
   |                  |                  |
[SignalR Hub] <------+                  |
   |                  |                  |
   | Broadcast op     |                  |
   +---------------------------------->|
   |                  |                  |
   | Apply OT         | Apply OT         | Apply OT
   |                  v                  v
        `,
      },
    ],
    challenges: [
      {
        challenge: "Conflict Resolution",
        solution: `Operational Transformation (OT) algorithm. Server acts as authority for
        conflict resolution when concurrent edits detected.`,
      },
      {
        challenge: "Connection State Management",
        solution: `Redis backplane for SignalR across multiple servers. Connection ID mapping
        to user and document context.`,
      },
    ],
    learnings: [
      "Real-time systems need excellent connection failure handling",
      "Operational Transformation complex but necessary for good UX",
      "Presence indicators surprisingly important for collaboration",
      "Offline support adds significant complexity",
    ],
  },
];

export const systemDesignCategories = [
  { id: "all", name: "All Designs", count: systemDesigns.length },
  { id: "enterprise", name: "Enterprise Architecture", count: 1 },
  { id: "iot", name: "IoT & Real-Time", count: 1 },
  { id: "microservices", name: "Microservices", count: 1 },
  { id: "collaboration", name: "Real-Time Systems", count: 1 },
];
