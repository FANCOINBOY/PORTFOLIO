export type Publication = {
  title: string;
  venue: string;
  year: number;
  type: "Journal" | "Conference";
  domain: string;
  indexing: string[];
  status: "Published" | "Under Review";
  doi?: string;
  coAuthors: string;
  keywords: string[];
  abstract: string;
  links: { label: string; url: string }[];
};

export const profile = {
  name: "Simar Singh Rayat",
  role: "B.Tech Computer Science and Engineering Student, Graphic Era Hill University",
  summary:
    "Research-oriented software developer focused on machine learning, artificial intelligence, cybersecurity, software engineering, intelligent systems, cloud technologies, embedded systems, and emerging technologies.",
  descriptors: [
    "Computer Science Engineering Student",
    "Researcher",
    "AI Enthusiast",
    "Cybersecurity Researcher",
    "Software Developer",
    "Technology Innovator",
  ],
};

export const publications: Publication[] = [
  {
    title:
      "A Physics-Informed Deep Learning and Probabilistic Inference Framework for Real-Time Single-Station Earthquake Detection and Magnitude Estimation",
    venue: "Bulletin of Earthquake Engineering",
    year: 2026,
    type: "Journal",
    domain: "Artificial Intelligence",
    indexing: ["Google Scholar", "Springer", "Scopus (indexed venue)"],
    status: "Published",
    doi: "https://doi.org/10.1007/s10518-026-02403-1",
    coAuthors: "Sujal Thapa, Susheela Dahiya, Raj Basnet, Anshul Panwar, Akshat Verma",
    keywords: ["Earthquake early warning", "U-Net++", "Probabilistic inference", "IoT sensing"],
    abstract:
      "Proposes a hybrid single-station framework that combines physics-informed signal preprocessing, deep learning, and probabilistic inference to improve real-time earthquake detection and magnitude estimation.",
    links: [
      { label: "DOI", url: "https://doi.org/10.1007/s10518-026-02403-1" },
      {
        label: "Google Scholar",
        url: "https://scholar.google.com/citations?user=X6loXjAAAAAJ&hl=en",
      },
    ],
  },
  {
    title: "Essence of Unsupervised Learning in Early Cybersecurity Attacks Detection",
    venue: "2025 14th International Conference on System Modeling & Advancement in Research Trends",
    year: 2025,
    type: "Conference",
    domain: "Cybersecurity",
    indexing: ["Google Scholar", "IEEE Xplore (conference listing)"],
    status: "Published",
    coAuthors: "Sujal Thapa, Raj Basnet, V. Sharma, Susheela Dahiya, A.P.S. Rathod",
    keywords: ["Unsupervised learning", "Intrusion detection", "Threat intelligence"],
    abstract:
      "Explores unsupervised learning strategies for early-stage cybersecurity attack detection, emphasizing anomaly discovery in evolving threat environments.",
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=X6loXjAAAAAJ&hl=en" },
      { label: "IEEE Author", url: "https://ieeexplore.ieee.org/author/714243000636525" },
    ],
  },
  {
    title: "Essence of Deep Learning Techniques in Evolving Agriculture Technology Society",
    venue: "International Conference on Sustainable Computing and Smart Systems",
    year: 2026,
    type: "Conference",
    domain: "Machine Learning",
    indexing: ["Google Scholar"],
    status: "Published",
    coAuthors: "Sujal Thapa, C. Bhatt, N. Mohd",
    keywords: ["Deep learning", "Agritech", "Sustainable systems"],
    abstract:
      "Discusses deep learning methods in agriculture technology workflows, with focus on practical deployment and efficiency improvements.",
    links: [{ label: "Google Scholar", url: "https://scholar.google.com/citations?user=X6loXjAAAAAJ&hl=en" }],
  },
  {
    title: "Prinzo: An Automated Printing Infrastructure Built on QR Code Technology and Real-Time Privacy",
    venue: "2026 IEEE 4th International Conference on Device Intelligence, Computing and Communication Technologies",
    year: 2026,
    type: "Conference",
    domain: "Software Engineering",
    indexing: ["Google Scholar", "IEEE Xplore (conference listing)"],
    status: "Published",
    coAuthors: "R. Soma, Susheela Dahiya, P. Tiwari",
    keywords: ["QR code", "Print automation", "Privacy engineering"],
    abstract:
      "Presents an automated printing infrastructure using QR workflows and privacy-preserving controls for institutional and enterprise environments.",
    links: [{ label: "Google Scholar", url: "https://scholar.google.com/citations?user=X6loXjAAAAAJ&hl=en" }],
  },
  {
    title: "An IoT-Enabled Framework with Real-Time Logic Gate Validation and Equipped Large Language Model",
    venue: "2026 World Conference on Computational Science and Technology (WcCST)",
    year: 2026,
    type: "Conference",
    domain: "Embedded Systems",
    indexing: ["Google Scholar"],
    status: "Published",
    coAuthors: "Sujal Thapa, C. Bhatt, V. Sharma, Susheela Dahiya, R. Verma",
    keywords: ["IoT", "Logic validation", "LLM integration"],
    abstract:
      "Introduces an IoT-enabled architecture for real-time logic gate validation augmented by language-model-assisted interpretation and diagnostics.",
    links: [{ label: "Google Scholar", url: "https://scholar.google.com/citations?user=X6loXjAAAAAJ&hl=en" }],
  },
  {
    title:
      "A Holistic AI-Driven Predictive Maintenance Framework for Power Converters Equipped with Fault Diagnosis and System Reliability",
    venue: "2025 IEEE 7th International Conference on Computing, Communication and Intelligent Systems",
    year: 2025,
    type: "Conference",
    domain: "Intelligent Systems",
    indexing: ["Google Scholar", "IEEE Xplore (conference listing)"],
    status: "Published",
    coAuthors: "Sujal Thapa, Raj Basnet, C. Bhatt, Susheela Dahiya, A.P.S. Rathod",
    keywords: ["Predictive maintenance", "Fault diagnosis", "Power converters"],
    abstract:
      "Describes an AI-driven predictive maintenance framework for converter reliability with integrated fault diagnosis techniques.",
    links: [{ label: "Google Scholar", url: "https://scholar.google.com/citations?user=X6loXjAAAAAJ&hl=en" }],
  },
  {
    title:
      "A Novel Approach for Adaptive Spatial Suitability Index with Hybrid ML-DL for Renewable Energy Site Selection",
    venue: "2025 IEEE 7th International Conference on Computing, Communication and Intelligent Systems",
    year: 2025,
    type: "Conference",
    domain: "Machine Learning",
    indexing: ["Google Scholar", "IEEE Xplore (conference listing)"],
    status: "Published",
    coAuthors: "Sujal Thapa, Raj Basnet, V. Sharma, A.P.S. Rathod, K. Kukreti",
    keywords: ["Spatial suitability", "Renewable energy", "Hybrid ML-DL"],
    abstract:
      "Proposes a hybrid ML-DL framework for adaptive spatial suitability analysis to support renewable energy site selection.",
    links: [{ label: "Google Scholar", url: "https://scholar.google.com/citations?user=X6loXjAAAAAJ&hl=en" }],
  },
  {
    title:
      "A Novel Multi-Layer Framework for Human and AI-Voice Detection Using Machine Learning and Network Architecture",
    venue: "2025 14th International Conference on System Modeling & Advancement in Research Trends",
    year: 2025,
    type: "Conference",
    domain: "Artificial Intelligence",
    indexing: ["Google Scholar", "IEEE Xplore (conference listing)"],
    status: "Published",
    coAuthors: "Sujal Thapa, Raj Basnet, V. Sharma, Susheela Dahiya, A.P.S. Rathod",
    keywords: ["AI speech detection", "Audio ML", "Network architectures"],
    abstract:
      "Presents a multi-layer ML framework for distinguishing human and AI-generated voices in practical communication settings.",
    links: [{ label: "Google Scholar", url: "https://scholar.google.com/citations?user=X6loXjAAAAAJ&hl=en" }],
  },
];

export const experiences = [
  {
    period: "2025 - Present",
    role: "Associate Member and Core Contributor",
    org: "Sigma Xi, The Scientific Research Honor Society",
    highlights: [
      "Contributed to retrieval-augmented generation workflows for prior-art and citation analysis.",
      "Collaborated on AI-generated speech detection research and validation datasets.",
      "Supported cross-domain research discussions connecting cybersecurity and machine learning.",
    ],
  },
  {
    period: "2024 - Present",
    role: "Research Head Advisor and Lead Innovator",
    org: "IEEE Technical Activities and Research Initiatives",
    highlights: [
      "Led extension-based file transfer system prototypes with secure exchange logic.",
      "Worked on malicious QR code detection pipelines for browser and endpoint safety.",
      "Improved Redis usage patterns and Docker deployment reliability for research tools.",
      "Developed citation intelligence assistants to support academic literature synthesis.",
    ],
  },
];

export const projects = [
  {
    name: "AI-Powered GitHub Project Summarizer",
    featured: true,
    objective: "Automate deep codebase understanding for repositories and technical documentation generation.",
    stack: ["FastAPI", "Python", "RAG", "LLMs", "AST Parsing", "PostgreSQL"],
    methodology: [
      "AST-level parsing to extract semantic structure from source files.",
      "Context-aware chunking and retrieval to improve answer quality.",
      "Prompt orchestration for architecture summaries, API notes, and onboarding guides.",
    ],
    outcomes: [
      "Reduced manual project handover effort for new contributors.",
      "Enabled faster repository auditing for research and engineering teams.",
    ],
    challenges: [
      "Handling heterogeneous repository structures.",
      "Balancing retrieval depth with latency for interactive usage.",
    ],
    repo: "https://github.com/SIMARSINGHRAYAT",
  },
  {
    name: "AI-Powered Patent Parser",
    featured: true,
    objective: "Accelerate prior-art discovery and novelty assessment in early patent analysis.",
    stack: ["FastAPI", "Python", "Machine Learning", "NLI", "PostgreSQL"],
    methodology: [
      "Automated patent text ingestion and structured metadata extraction.",
      "Similarity search for prior-art matching with novelty scoring.",
      "NLI-based evidence checks to support claim-level comparison.",
    ],
    outcomes: [
      "Improved consistency of technical screening workflows.",
      "Created reusable data pipelines for patent intelligence tasks.",
    ],
    challenges: ["Domain-specific legal language handling.", "Reducing false positives in novelty assessment."],
    repo: "https://github.com/SIMARSINGHRAYAT",
  },
];

export const products = [
  {
    name: "Microsoft Store Publisher Portfolio",
    platform: "Microsoft Store",
    release: "Active Publisher Profile",
    compatibility: "Windows ecosystem",
    notes: "Public software products published under KILZSNIPPET.",
    link: "https://apps.microsoft.com/search/publisher?name=KILZSNIPPET",
  },
  {
    name: "Browser Extensions by KILZSNIPPET",
    platform: "Microsoft Edge Add-ons",
    release: "Public Developer Profile",
    compatibility: "Microsoft Edge",
    notes: "Published extensions with practical productivity and utility focus.",
    link: "https://microsoftedge.microsoft.com/addons/search?developer=KILZSNIPPET",
  },
  {
    name: "Chrome Web Store Expansion",
    platform: "Chrome Web Store",
    release: "Planned",
    compatibility: "Chromium browsers",
    notes: "Reserved placeholders for upcoming extension releases.",
    link: "https://chromewebstore.google.com",
  },
];

export const patents = [
  {
    title: "Certificate of Registration of Design: Processor Magnifier Module",
    status: "Granted",
    filing: "06 January 2026",
    id: "Design No. 486360-001",
    summary:
      "Design registration certificate issued by The Patent Office, Government of India for PROCESSOR MAGNIFIER MODULE in class 16-99.",
    application: "Hardware innovation and assistive processor visualization tooling.",
    source: "Patent Office certificate provided by profile owner.",
    issuedOn: "09 April 2026",
    image: "/images/patents/patent-granted-1.jpg",
    imageAlt: "Patent certificate for Processor Magnifier Module, Design No. 486360-001",
  },
  {
    title: "Certificate of Registration of Design: Multifunctional Wireless-Enabled Hairband System",
    status: "Granted",
    filing: "11 August 2025",
    id: "Design No. 469300-001",
    summary:
      "Design registration certificate issued by The Patent Office, Government of India for MULTIFUNCTIONAL WIRELESS-ENABLED HAIRBAND SYSTEM in class 14-03.",
    application: "Wearable embedded technology and wireless intelligent accessories.",
    source: "Patent Office certificate provided by profile owner.",
    issuedOn: "24 December 2025",
    image: "/images/patents/patent-granted-2.jpg",
    imageAlt:
      "Patent certificate for Multifunctional Wireless-Enabled Hairband System, Design No. 469300-001",
  },
];

export const achievements = [
  {
    text: "Top Student Research Award — Top Student Research Award for Agriculture, Soil & Natural Resources (Graduate Division)",
    image: "/images/achievements/top-student-research-award.png",
    imageAlt: "Top Student Research Award certificate",
  },
  {
    text: "Best Paper Award — ComSIA 2026 (A Swarm-Aware ESP32-Based Architecture...)",
    image: "/images/achievements/comsia-best-paper.png",
    imageAlt: "ComSIA 2026 Best Paper certificate",
  },
  {
    text: "Achievers' Meet 2026 — Certificate of Outstanding Achievement",
    image: "/images/achievements/achievers-meet-2026.png",
    imageAlt: "Achievers' Meet 2026 certificate",
  },
  { text: "Peer-reviewed research publications across journal and conference venues listed on Google Scholar." },
  { text: "Journal publication in Bulletin of Earthquake Engineering (Springer, 2026)." },
  { text: "Public software and extension deployment through Microsoft Store and Edge Add-ons profiles." },
];

export const awards = [
  {
    title: "Young Scientist Award",
    issuer: "Documented professional achievement",
    year: "2025",
    note: "Recognized for research and innovation contributions in technical domains.",
  },
  {
    title: "Conference and Innovation Recognition",
    issuer: "Technical and research events",
    year: "2025-2026",
    note: "Participation and recognition across conference, publication, and innovation activities.",
  },
];

export const interests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Cybersecurity",
  "Intelligent Systems",
  "Software Engineering",
  "Cloud Computing",
  "Internet of Things",
  "Embedded Systems",
  "Quantum Computing",
  "Intelligent Automation",
  "Emerging Technologies",
];

export const profiles = [
  {
    name: "GitHub",
    description: "Code repositories, engineering artifacts, and open technical work.",
    url: "https://github.com/SIMARSINGHRAYAT",
  },
  {
    name: "Google Scholar",
    description: "Research publication record and citation indexing.",
    url: "https://scholar.google.com/citations?user=X6loXjAAAAAJ&hl=en",
  },
  {
    name: "ORCID",
    description: "Persistent academic identity and publication linkage.",
    url: "https://orcid.org/0009-0006-7187-1198",
  },
  {
    name: "Scopus Author Profile",
    description: "Author index reference (Author ID: 60132297000).",
    url: "https://www.scopus.com/authid/detail.uri?authorId=60132297000",
  },
  {
    name: "IEEE Author Profile",
    description: "Conference and technical publication listings.",
    url: "https://ieeexplore.ieee.org/author/714243000636525",
  },
  {
    name: "ResearchGate",
    description: "Research visibility, project discussions, and publication sharing.",
    url: "https://www.researchgate.net/profile/Simar-Singh-Rayat",
  },
  {
    name: "LinkedIn",
    description: "Professional timeline, roles, and innovation updates.",
    url: "https://www.linkedin.com/in/simarsinghrayat",
  },
  {
    name: "Microsoft Edge Add-ons",
    description: "Developer profile for extension releases.",
    url: "https://microsoftedge.microsoft.com/addons/search?developer=KILZSNIPPET",
  },
  {
    name: "Microsoft Store Publisher",
    description: "Publisher profile and software product releases.",
    url: "https://apps.microsoft.com/search/publisher?name=KILZSNIPPET",
  },
  {
    name: "YouTube Channel",
    description: "Technical walkthroughs, demos, and educational content.",
    url: "https://www.youtube.com/channel/UCSI-xUxzUusv1RpMpfvuSrQ",
  },
  {
    name: "Resume",
    description: "Detailed academic, project, and professional record.",
    url: "https://drive.google.com/file/d/14IF45T0RJ6hEPe-ophgaOqt7NS2XMwTc/view",
  },
];

export const videos = [
  {
    title: "Project Demonstrations and Technical Walkthroughs",
    category: "Engineering Demos",
    link: "https://www.youtube.com/channel/UCSI-xUxzUusv1RpMpfvuSrQ",
  },
  {
    title: "Research Discussions and Applied AI Explorations",
    category: "Research Communication",
    link: "https://www.youtube.com/channel/UCSI-xUxzUusv1RpMpfvuSrQ",
  },
  {
    title: "Software Build Breakdowns and Development Notes",
    category: "Software Education",
    link: "https://www.youtube.com/channel/UCSI-xUxzUusv1RpMpfvuSrQ",
  },
];
