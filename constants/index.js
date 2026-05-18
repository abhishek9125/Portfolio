import { RiCodeBoxFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiMediumFill } from 'react-icons/ri';

export const icons = [
    {
        path: 'https://www.linkedin.com/in/abhishek9125',
        name: <RiLinkedinFill />
    },
    {
        path: 'https://github.com/abhishek9125',
        name: <RiGithubFill />
    },
    {
        path: 'https://www.instagram.com/__abhishek25/',
        name: <RiInstagramFill />
    },
    {
        path: 'https://medium.com/@abhishek4075',
        name: <RiMediumFill />
    },
    {
        path: 'https://leetcode.com/aagarwal_be17/',
        name: <RiCodeBoxFill />
    },
];

export const reviewsData = [
    {
        avatar: 'https://media.licdn.com/dms/image/v2/D5603AQHtKR0dvQLOEQ/profile-displayphoto-shrink_100_100/B56ZSJ2FtdGsAY-/0/1737479446537?e=1744848000&v=beta&t=VQ5K-UlFh5kzFwNCbv_XIATYY3teX932qKZVS_4vhtE',
        name: 'Snehil Verma',
        job: 'Lead Backend Engineer',
        review: 'Abhishek is a tremendous performer. He is hardworking and committed to the cause and has never shied away from going the extra distance for the benefit of the larger project. He has worked on multiple projects with me. His knowledge about front-end is fantastic. He is a dependable person if you have him in your team.'
    },
    {
        avatar: 'https://media.licdn.com/dms/image/v2/C4E03AQH_4f2aztqaLQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516684098327?e=1744848000&v=beta&t=JYGelejmybmk2ZcH6s_hxBKD1HSD-DXO6XqZyLpGfEw',
        name: 'Shreyansh Jain',
        job: 'Lead Frontend Engineer',
        review: 'It was quite nice to having worked with him closely, really intimidated by the way he approaches a problem statement. Has a knack for attention to detail and diving deep into something to know, the HOW and WHAT of a problem. Saw him come-in as a fresher and become a good Software Engineer.'
    },
    {
        avatar: 'https://media.licdn.com/dms/image/v2/C5103AQGlgyZXeWWzMw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1578777726455?e=1744848000&v=beta&t=AJXoEN7A4FxXUIKpnbH4Zf8W_oY5ipWLav4cIA7Jb4E',
        name: 'Naman Vyas',
        job: 'Lead DevOps Engineer',
        review: 'One of the best dev I\'ve worked with. His great attention to detail and expertise in skills make him a true rockstar of any team he is a part of. Would really recommend him to anyone looking to multiply their team\'s potential.'
    },
    {
        avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQHuPtTzMOeGCQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1688842559228?e=1744848000&v=beta&t=e9RNUXbKz9j2Vx1xVL4tBCua5E95RNMKfedTj8RQXE0',
        name: 'Harshit Garg',
        job: 'Senior Software Engineer',
        review: 'It was great working with Abhishek. Though we worked together for 2 years I would recommend Abhishek for his dedication towards work. His understanding towards the problem statement and finding a good solution with his skills on ReactJS, NodeJS, Optimisation stuff. Also a good team player, quick learner, always been a person to learn and implement new code base.'
    },
]

export const RESUME_LINK = "https://drive.google.com/file/d/1X-_LezNv8XqK_1O3bhPSX0QfNVAmX4K6/view"

export const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://abhishekagarwal.info'

export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || ''

export const lighthouseScores = {
    performance: 96,
    accessibility: 98,
    bestPractices: 100,
    seo: 100,
    auditedAt: '2026-05',
}

export const projectData = [
    {
        image: null,
        usePlaceholder: true,
        placeholderLabel: 'Flipkart',
        category: 'Professional',
        name: 'Flipkart — OTA & E-commerce',
        description: 'CodePush migration to GCP, post-purchase commerce journeys, and internal design system work at scale.',
        link: '/case-study/flipkart-ota-migration',
        github: null,
        badge: 'Full-Stack',
        isCaseStudy: true,
    },
    {
        image: '/work/cars24.jpg',
        category: 'Professional',
        name: 'CARS24 Website',
        description: 'Built Multiple Modules and Optimised Performance across the system for all the Seller Flows.',
        link: 'https://www.cars24.com/',
        github: null,
        badge: 'Frontend',
        isMobile: true
    },
    {
        image: '/work/mamaearth.jpg',
        category: 'Professional',
        name: 'MamaEarth Website',
        description: 'Built Home, Cart, Checkout, Authentication, Account, Sale Page, Subscription Module, Payment Gateway Modules.',
        link: 'https://mamaearth.in/',
        github: null,
        badge: 'FullStack',
        isMobile: true
    },
    {
        image: '/work/traffic-challan.jpg',
        category: 'Professional',
        name: 'Traffic Challan',
        description: 'Built Complete Module Journey which includes Walkthroughs, Complex Logics, Feedback Modules, Cart systems, Payments etc.',
        link: 'https://www.cars24.com/traffic-challan/',
        github: null,
        badge: 'Frontend',
        isMobile: true
    },
    {
        image: '/work/pre-delivery-inspection.jpg',
        category: 'Professional',
        name: 'Pre-Delivery Inspection',
        description: 'Built Car Inspection Consumer Journey with optimised structure and web vitals',
        link: 'https://www.cars24.com/pre-delivery-inspection/',
        github: null,
        badge: 'Frontend',
        isMobile: true
    },
    {
        image: '/work/partner-portal.jpg',
        category: 'Professional',
        name: 'SaaS Panels',
        description: 'Built Multiple Modular Dashboard Panels with a wide array of features.',
        link: '/',
        github: null,
        badge: 'Frontend'
    },
    {
        image: '/work/pdf-generation-service.jpg',
        category: 'Professional',
        name: 'PDF Generation Service',
        description: 'Built PDF Generator where we can use advanced react to create complex PDFs with great UX',
        link: '/',
        github: null,
        badge: 'Frontend'
    },
    {
        image: '/work/portfolio.png',
        category: 'Personal',
        name: 'Porfolio Website',
        description: 'Built a Personal Portfolio Website with all Skills, Qualifications, Reviews, Projects, Contact Me Modules.',
        link: 'https://portfolio-6wdf.vercel.app',
        github: 'https://github.com/abhishek9125/Portfolio',
        badge: 'Next Js'
    },
    {
        image: '/work/ayuga.png',
        category: 'Professional',
        name: 'Ayuga Website',
        description: 'Built Intuitive UI Modules for Product Cards, Banners, Cart, My Account, Track Order, Contentful Pages, Sale Pages etc.',
        link: 'https://ayuga.in/',
        github: null,
        badge: 'FullStack'
    },
    {
        image: '/work/cyberkart.gif',
        category: 'Personal',
        name: 'CyberKart - eCommerce Platform',
        description: 'Built Online eCommerce Platform with Admin Dashboard to Manage Orders, Inventory, Advanced Search Filtering.',
        link: null,
        github: 'https://github.com/abhishek9125/mern-ecommerce',
        badge: 'MERN'
    },
    {
        image: '/work/bblunt.png',
        category: 'Professional',
        name: 'Bblunt Website',
        description: 'Developed UI Pages for Home, Product Description, Shop, Contact Us, Integrated Tracking, Limechat Bot etc.',
        link: 'https://bblunt.com/',
        github: null,
        badge: 'FullStack'
    },
    {
        image: '/work/covid-tracker.png',
        category: 'Personal',
        name: 'Covid 19 Tracker - Dashboard',
        description: 'Created a Dashboard that tracks Covid Cases across the Globe in Table, Graph, Region Separations etc.',
        link: 'https://covid-19-tracker-e6c06.web.app/',
        github: 'https://github.com/abhishek9125/COVID-19-TRACKER',
        badge: 'React Js'
    },
    {
        image: '/work/yotobox.png',
        category: 'Professional',
        name: 'Yotobox Website',
        description: 'Created a promotional multi-brand checkout experience for Mamaearth — bundled offers across brands.',
        link: 'https://yotobox.in/',
        github: null,
        badge: 'FullStack'
    },
    {
        image: '/work/sketchbook.png',
        category: 'Personal',
        name: 'Sketchbook - Online Drawing Tool',
        description: 'A Whiteboard to draw with the cursor with different sizes, colors and erase, undo, redo and download features.',
        link: 'https://sketchbook-one.vercel.app/',
        github: 'https://github.com/abhishek9125/Sketchbook',
        badge: 'Next Js'
    },
    {
        image: '/work/thedermaco.png',
        category: 'Professional',
        name: 'The Derma Co Website',
        description: 'Engineered QA Based Skin Assessment System, Personalisation Modules, Revamped Coupon Flow and more.',
        link: 'https://thedermaco.com/',
        github: null,
        badge: 'FullStack'
    },
    {
        image: '/work/theme.png',
        category: 'Personal',
        name: 'The Color Palette',
        description: 'Built a Colour Palette with different Colors Combination Packages, Create Custom Palettes, Drag & Drop Color Sequencing.',
        link: null,
        github: 'https://github.com/abhishek9125/theme-manager',
        badge: 'React Js'
    },
    {
        image: '/work/aqualogica.png',
        category: 'Professional',
        name: 'Aqualogica Website',
        description: 'Built Various Aesthetic UI Components, Product Cards, Water For All Contribution Page, My Orders Module etc.',
        link: 'https://aqualogica.in/',
        github: null,
        badge: 'FullStack'
    },
    {
        image: '/work/talky.png',
        category: 'Personal',
        name: 'Talky - Online Video Calling Platform',
        description: 'Created Online Video Conferencing Platform with Chat System, Friends Modules in Realtime and Screen Share',
        link: null,
        github: 'https://github.com/abhishek9125/VideoChatApp',
        badge: 'MERN'
    },
];

export const qualificationData = [
    {
        title: 'experience',
        data: [
            {
                company: 'Flipkart',
                role: 'Software Development Engineer II',
                years: 'May 2025 — Present',
                highlights: [
                    'Architected the migration of OTA CodePush Service from Azure to GCP Cloud Functions, leveraging Redis for high-speed caching and reducing bundle delivery latency',
                    'Engineered Post-Purchase FinTech journeys using React Native and Next.js, managing secure payment dashboards and order fulfillment flows for millions of active users',
                    'Owned the full SDLC for core features: PR reviews, unit testing (Jest/RTL), stable production releases, and on-call rotations',
                    'Core contributor to the internal design system — reusable TypeScript components for UI consistency and accessibility across business units',
                ],
            },
            {
                company: 'CARS24',
                role: 'Software Development Engineer III',
                years: 'March 2024 — April 2025',
                highlights: [
                    'Scaled the VAS business pod frontend architecture — 300% increase in orders and complex FinTech flows such as Challan Payments and Vehicle History',
                    'Optimized Core Web Vitals with a focus on INP, reducing latency from 494ms to 262ms at the domain level and boosting SEO',
                    'Implemented micro-frontend architecture and Git submodules for modular development and RBAC across SaaS panels',
                    'Published a centralized UI library on npm with Storybook for visual consistency across the ecosystem',
                ],
            },
            {
                company: 'Mamaearth',
                role: 'Senior Software Engineer',
                years: 'Oct 2023 — Mar 2024',
                highlights: [
                    'Cut Total Blocking Time from 8s to 1.2s via Webpack tuning, dynamic chunking, and critical memory leak fixes',
                    'Lifted organic traffic 40% with conditional ISR and SSR strategies tuned for Google crawlers',
                    'Shipped an AI-driven product recommendation system and custom coupon journeys — 17% lift in conversion rate',
                    'Hardened security by resolving VAPT issues: XSS, clickjacking, and MIME sniffing',
                ],
            },
            {
                company: 'Mamaearth',
                role: 'Software Engineer',
                years: 'July 2021 — Sep 2022',
                highlights: [
                    'Designed a subscription-based architecture using React and Redux — 21% improvement in long-term conversion',
                    'Improved Lighthouse scores ~30% via image optimization, on-demand loading, and CLS fixes',
                    'Built a scalable multi-tenant platform for rapid brand launches using Next.js and automated cron synchronization',
                ],
            },
        ],
    },
];

/** Shorter work history for the homepage About → Experience tab (combined Mamaearth; not the full résumé). */
export const homeExperienceData = [
    {
        company: 'Flipkart',
        role: 'Software Development Engineer II',
        years: 'May 2025 — Present',
        highlights: [
            'OTA CodePush Azure → GCP with Redis; faster & cheaper bundle delivery at scale',
            'Post-purchase Tech in React Native & React for millions of users',
            'Design system: reusable TypeScript components across business units',
        ],
    },
    {
        company: 'CARS24',
        role: 'Software Development Engineer III',
        years: 'Mar 2024 — Apr 2025',
        highlights: [
            'VAS frontend scale-up — 300% orders; Challan, Vehicle History, payments',
            'INP 494ms → 262ms domain-wide; SEO and interaction wins',
            'Micro-frontends, Storybook UI library across SaaS panels',
        ],
    },
    {
        company: 'Mamaearth',
        role: 'Software Engineer → Senior Software Engineer',
        years: '2021 — 2024',
        highlights: [
            'TBT ~8s → ~1.2s — Webpack tuning, chunking, critical leak fixes',
            '~40% organic traffic (ISR/SSR); AI recommendations & coupons — ~17% conversion',
            'VAPT hardening; multi-tenant Next.js for rapid brand launches',
        ],
    },
];

export const careerTimeline = [
    {
        company: 'Flipkart',
        role: 'Software Development Engineer II',
        period: '2025 — Present',
        summary: 'OTA migration to GCP, post-purchase FinTech journeys, design system.',
    },
    {
        company: 'CARS24',
        role: 'Software Development Engineer III',
        period: '2024 — 2025',
        summary: 'VAS scale-up, INP and SEO, micro-frontends, npm UI library.',
    },
    {
        company: 'Mamaearth',
        role: 'Software Engineer → Senior SWE',
        period: '2021 — 2024',
        summary: 'TBT & Core Web Vitals, organic/ISR, AI recommendations, security, multi-tenant Next.js.',
    },
];

export const expertiseAreas = [
    {
        title: 'Architecture',
        description: 'Micro frontends, design systems, and modular platform design.',
    },
    {
        title: 'Performance',
        description: 'Core Web Vitals, caching strategies, and production-grade optimization.',
    },
    {
        title: 'Cloud & Platform',
        description: 'GCP, Azure, Docker, Redis, and reliable CI/CD delivery pipelines.',
    },
    {
        title: 'Product Delivery',
        description: 'End-to-end SDLC — testing, code review, on-call, and stable releases.',
    },
];

export const contactPrimary = [
    {
        label: 'Email',
        text: 'abhishek4075@gmail.com',
        href: 'mailto:abhishek4075@gmail.com',
    },
    {
        label: 'Location',
        text: 'Bengaluru, India',
    },
];

/** Sidebar + ATS — matches résumé PDF content */
export const resumeContactItems = [
    {
        kind: 'email',
        label: 'Email',
        text: 'abhishek4075@gmail.com',
        href: 'mailto:abhishek4075@gmail.com',
    },
    {
        kind: 'location',
        label: 'Location',
        text: 'Bengaluru, India',
    },
    {
        kind: 'website',
        label: 'Website',
        text: 'abhishekagarwal.info',
        href: 'https://abhishekagarwal.info/',
    },
    {
        kind: 'linkedin',
        label: 'LinkedIn',
        text: 'abhishek9125',
        href: 'https://www.linkedin.com/in/abhishek9125',
    },
    {
        kind: 'github',
        label: 'GitHub',
        text: 'abhishek9125',
        href: 'https://github.com/abhishek9125',
    },
];

export const contactSecondary = [
    {
        label: 'Website',
        text: 'abhishekagarwal.info',
        href: 'https://abhishekagarwal.info/',
    },
    {
        label: 'Languages',
        text: 'English, Hindi',
    },
];

export const engineeringToolchain = [
    'Typescript',
    'React',
    'Webpack',
    'Node',
    'Express',
    'Redis',
    'SQL',
    'Git',
    'CI/CD',
    'Docker',
    'GCP',
];

/** Résumé skills only — keep in sync with your master CV (no extra buzzwords). */
export const skillData = [
    {
        title: 'Languages',
        subtitle: 'Languages, markup, and styling',
        tier: 'core',
        data: [
            { name: 'TypeScript' },
            { name: 'JavaScript' },
            { name: 'HTML' },
            { name: 'CSS3' },
        ],
    },
    {
        title: 'Frameworks & State',
        subtitle: 'Application stack and UI architecture',
        tier: 'core',
        data: [
            { name: 'React.js' },
            { name: 'Next.js' },
            { name: 'React Native' },
            { name: 'Redux' },
            { name: 'Node.js' },
            { name: 'Express' },
            { name: 'SQL'},
            { name: 'MongoDB' },
            { name: 'Framer Motion'},
            { name: 'Styled Components' },
            { name: 'Tailwind CSS' },
        ],
    },
    {
        title: 'Tools & DevOps',
        subtitle: 'Build, test, cloud, and delivery',
        tier: 'proficient',
        data: [
            { name: 'Webpack' },
            { name: 'Lighthouse' },
            { name: 'Vite' },
            { name: 'React Testing Library' },
            { name: 'Git' },
            { name: 'Docker' },
            { name: 'GCP' },
            { name: 'Redis' },
            { name: 'CI/CD Pipelines' },
        ],
    },
];

/** Honors & awards — surfaced on visual résumé + ATS text */
export const resumeAchievements = [
    'Scholarship from college for 4 years consecutively',
    'Hackathon winner — Mamaearth performance optimisation',
    'Star Award — Flipkart',
];

export const caseStudies = [
    {
        slug: 'flipkart-ota-migration',
        title: 'OTA CodePush Platform Migration',
        company: 'Flipkart',
        role: 'Software Development Engineer II',
        timeframe: '2025',
        excerpt: 'Azure → GCP migration with Redis caching, cutting bundle delivery latency and cloud spend.',
        tagline: 'Re-architecting a high-traffic OTA delivery pipeline from Azure to GCP with Redis-backed caching and phased zero-downtime cutover.',
        problem: [
            'Legacy Azure CodePush paths showed rising P95 bundle latency as release cadence and cohort size grew quarter over quarter.',
            'Operational cost on Azure compute + egress climbed with traffic spikes during festival sale events.',
            'Mobile clients needed predictable sub-second metadata resolution — cache misses directly impacted update adoption.',
        ],
        solution: [
            'Designed GCP Cloud Functions + Redis architecture with metadata hot paths served from memory.',
            'Ran shadow traffic and canary cohorts before full cutover — no critical downtime during migration window.',
            'Built observability dashboards for cache hit ratio, function cold starts, and rollback triggers.',
        ],
        architecture: [
            { step: '01', title: 'Assess & map', detail: 'Traffic profiling, Azure cost baseline, failure-mode analysis.' },
            { step: '02', title: 'GCP + Redis', detail: 'Functions, cache layer, CI/CD parity across staging/prod.' },
            { step: '03', title: 'Phased cutover', detail: 'Shadow → 5% → 25% → 100% cohort migration.' },
            { step: '04', title: 'Tune & operate', detail: 'Cache warming, on-call runbooks, cost reviews.' },
        ],
        diagramLayers: ['React Native Clients', 'CDN Edge', 'GCP Functions', 'Redis Cache', 'Bundle Storage'],
        stack: ['React Native', 'Next.js', 'TypeScript', 'GCP Cloud Functions', 'Redis', 'Azure (legacy)', 'CI/CD', 'Jest'],
        performanceMetrics: [
            { label: 'Bundle delivery P95', before: '820ms', after: '510ms', change: '-38%' },
            { label: 'Cache hit ratio', before: '61%', after: '89%', change: '+28 pts' },
            { label: 'Failed release rate', before: '2.1%', after: '0.4%', change: '-81%' },
        ],
        costMetrics: [
            { label: 'Monthly infra (OTA path)', before: '₹4.8L', after: '₹3.1L', detail: '~35% reduction post-rightsizing' },
            { label: 'Egress per 1M bundles', before: '₹12.4K', after: '₹7.9K', detail: 'CDN + regional caching strategy' },
            { label: 'Incident MTTR', before: '47 min', after: '18 min', detail: 'Improved observability & runbooks' },
        ],
        businessMetrics: [
            { value: 99, suffix: '.2%', label: 'Release success rate', display: null },
            { value: 0, suffix: '', label: 'Critical downtime events', display: 'Zero' },
            { value: 12, suffix: 'M+', label: 'Monthly bundle fetches', display: null },
        ],
        codeSnippet: {
            title: 'cache-first bundle resolution',
            lines: [
                { tokens: [{ type: 'keyword', value: 'async ' }, { type: 'fn', value: 'resolveBundle' }, { type: 'plain', value: '(appId, platform, version) {' }] },
                { tokens: [{ type: 'plain', value: '  const cacheKey = ' }, { type: 'string', value: '`ota:${appId}:${platform}:${version}`' }, { type: 'plain', value: ';' }] },
                { tokens: [{ type: 'plain', value: '  const cached = ' }, { type: 'keyword', value: 'await ' }, { type: 'fn', value: 'redis.get' }, { type: 'plain', value: '(cacheKey);' }] },
                { tokens: [{ type: 'keyword', value: '  if ' }, { type: 'plain', value: '(cached) ' }, { type: 'keyword', value: 'return ' }, { type: 'fn', value: 'JSON.parse' }, { type: 'plain', value: '(cached);' }] },
                { tokens: [{ type: 'plain', value: '  const manifest = ' }, { type: 'keyword', value: 'await ' }, { type: 'fn', value: 'fetchFromStorage' }, { type: 'plain', value: '(appId, version);' }] },
                { tokens: [{ type: 'keyword', value: '  await ' }, { type: 'fn', value: 'redis.setex' }, { type: 'plain', value: '(cacheKey, 3600, JSON.stringify(manifest));' }] },
                { tokens: [{ type: 'keyword', value: '  return ' }, { type: 'plain', value: 'manifest;' }] },
                { tokens: [{ type: 'plain', value: '}' }] },
            ],
        },
    },
    // {
    //     slug: 'cars24-vas-scale',
    //     title: 'VAS Pod Scale & Core Web Vitals',
    //     company: 'CARS24',
    //     role: 'Software Development Engineer III',
    //     timeframe: '2024 — 2025',
    //     excerpt: 'E-commerce VAS flows, micro-frontends, and INP optimization driving ~280% order growth.',
    //     tagline: 'Scaling value-added services frontend — Challan payments, vehicle history, and operator panels with measurable performance and revenue impact.',
    //     problem: [
    //         'VAS order volume was outpacing frontend capacity — legacy monolith panels slowed feature shipping.',
    //         'Interaction to Next Paint at domain level hovered near 500ms, hurting SEO and mobile conversion.',
    //         'Multiple SaaS operator tools needed RBAC-aware modular delivery without shared deploy risk.',
    //     ],
    //     solution: [
    //         'Shipped micro-frontend architecture with Git submodules and isolated release pipelines per panel.',
    //         'Optimized critical paths — code splitting, image pipelines, and main-thread budgeting for INP.',
    //         'Published shared npm UI library documented in Storybook for cross-team consistency.',
    //     ],
    //     architecture: [
    //         { step: '01', title: 'Modularize', detail: 'Split monolith panels into independently deployable MFEs.' },
    //         { step: '02', title: 'Measure', detail: 'RUM + Lighthouse budgets on seller & consumer journeys.' },
    //         { step: '03', title: 'Optimize', detail: 'Chunk strategy, lazy routes, payment flow hardening.' },
    //         { step: '04', title: 'Scale', detail: 'RBAC, Storybook library, cross-pod adoption.' },
    //     ],
    //     diagramLayers: ['Consumer Web', 'MFE Shell', 'VAS Modules', 'Payment APIs', 'Ops Panels'],
    //     stack: ['React', 'Next.js', 'TypeScript', 'Webpack', 'Git Submodules', 'Storybook', 'Node.js'],
    //     performanceMetrics: [
    //         { label: 'INP (domain P75)', before: '494ms', after: '268ms', change: '-46%' },
    //         { label: 'LCP (critical routes)', before: '3.8s', after: '2.4s', change: '-37%' },
    //         { label: 'JS main-thread (checkout)', before: '1.9s', after: '1.1s', change: '-42%' },
    //     ],
    //     costMetrics: [
    //         { label: 'Deploy frequency / pod', before: '2 / week', after: '5 / week', detail: 'Independent MFE releases' },
    //         { label: 'Duplicate UI build cost', before: 'High', after: 'Low', detail: 'Shared npm design package' },
    //     ],
    //     businessMetrics: [
    //         { value: 280, suffix: '%', label: 'VAS order growth', display: null },
    //         { value: 4, suffix: '+', label: 'Major modules shipped', display: null },
    //         { value: 17, suffix: '+', label: 'Panels on MFE platform', display: null },
    //     ],
    //     codeSnippet: null,
    // },
    // {
    //     slug: 'mamaearth-performance',
    //     title: 'Storefront Performance & SEO',
    //     company: 'Mamaearth',
    //     role: 'Senior Software Engineer',
    //     timeframe: '2021 — 2024',
    //     excerpt: 'TBT reduction, ISR/SSR SEO strategy, and conversion-focused product systems.',
    //     tagline: 'Making a high-traffic D2C storefront faster, more discoverable, and more conversion-efficient across brands.',
    //     problem: [
    //         'Total Blocking Time exceeded 8s on key pages — mobile users hit jank during checkout and PLP interactions.',
    //         'Organic discovery plateaued; crawler efficiency and render strategy needed rethinking.',
    //         'Subscription and recommendation flows were under-leveraged conversion opportunities.',
    //     ],
    //     solution: [
    //         'Rebuilt Webpack strategy — dynamic chunks, dependency pruning, and memory leak fixes.',
    //         'Implemented conditional ISR/SSR paths tuned for Google crawl patterns on high-intent pages.',
    //         'Shipped subscription architecture and AI-assisted recommendation + coupon journeys.',
    //     ],
    //     architecture: [
    //         { step: '01', title: 'Profile', detail: 'Chrome traces, bundle analyzer, field data.' },
    //         { step: '02', title: 'Fix TBT', detail: 'Chunking, deferral, image & font strategy.' },
    //         { step: '03', title: 'SEO layer', detail: 'ISR rules per template + crawl validation.' },
    //         { step: '04', title: 'Convert', detail: 'Subscriptions, recommendations, coupons.' },
    //     ],
    //     diagramLayers: ['Next.js Storefront', 'ISR/SSR Layer', 'API / CMS', 'CDN', 'Analytics'],
    //     stack: ['React', 'Next.js', 'Redux', 'Webpack', 'Node.js', 'Styled Components'],
    //     performanceMetrics: [
    //         { label: 'Total Blocking Time', before: '8.2s', after: '1.3s', change: '-84%' },
    //         { label: 'Organic sessions', before: 'baseline', after: '+42%', change: 'YoY peak' },
    //         { label: 'Lighthouse Performance', before: '48', after: '78', change: '+30 pts' },
    //     ],
    //     costMetrics: [
    //         { label: 'CDN waste (oversized assets)', before: '₹2.1L/mo', after: '₹1.4L/mo', detail: 'Image pipeline + format strategy' },
    //     ],
    //     businessMetrics: [
    //         { value: 17, suffix: '%', label: 'Conversion uplift', display: null },
    //         { value: 21, suffix: '%', label: 'Subscription conversion lift', display: null },
    //         { value: 5, suffix: '+', label: 'Brands on shared platform', display: null },
    //     ],
    //     codeSnippet: null,
    // },
    // {
    //     slug: 'cars24-micro-frontends',
    //     title: 'Micro-Frontend Architecture with Git Submodules & NX',
    //     company: 'CARS24',
    //     role: 'Software Development Engineer III',
    //     timeframe: '2024 — 2025',
    //     excerpt: 'Replacing monolith builds with per-app independent pipelines using NX, Git submodules, and RBAC-aware operator panels.',
    //     tagline: 'Breaking a shared monorepo build into individually deployable micro-frontends — each app ships its own bundle to preset CDN URLs, cutting CI time and blast radius.',
    //     problem: [
    //         'A single CI pipeline built 17+ operator panels together — one broken import blocked every deploy for hours.',
    //         'Average build time was 22 minutes; hot-fix deploys during incidents required the full monolith pipeline to pass.',
    //         'Operators in different business units shared a single RBAC-unaware codebase, leaking UI that shouldn\'t be visible.',
    //     ],
    //     solution: [
    //         'Introduced NX workspace orchestration — each panel declared its own build target and only rebuilt on affected-file changes.',
    //         'Used Git submodules for shared utilities and design tokens so teams pulled a pinned, tested version instead of living on trunk.',
    //         'Replaced monolith chunk output with per-app bundles deployed to preset CDN URLs — chunk replacement happened atomically.',
    //         'Added role-scoped route guards and build-time feature flags per operator persona via RBAC config.',
    //     ],
    //     architecture: [
    //         { step: '01', title: 'Dependency graph', detail: 'NX project graph to map inter-panel deps and shared libs.' },
    //         { step: '02', title: 'Submodule layer', detail: 'Git submodules for design tokens, utils, and auth SDK.' },
    //         { step: '03', title: 'Per-app builds', detail: 'Independent Webpack configs, CDN path mapping, chunk isolation.' },
    //         { step: '04', title: 'RBAC + deploy', detail: 'Role-based route guards, feature flags, and automated canary deploys.' },
    //     ],
    //     diagramLayers: ['Operator Browser', 'CDN (per-app chunks)', 'MFE Shell', 'NX Build Graph', 'Git Submodules'],
    //     stack: ['React', 'TypeScript', 'NX', 'Webpack 5', 'Git Submodules', 'Node.js', 'GitHub Actions', 'AWS S3 + CloudFront'],
    //     performanceMetrics: [
    //         { label: 'Avg CI build time', before: '22 min', after: '4.3 min', change: '-80%' },
    //         { label: 'Deploy frequency / panel', before: '2 / week', after: '8 / week', change: '+300%' },
    //         { label: 'Incident rollback time', before: '18 min', after: '2.5 min', change: '-86%' },
    //     ],
    //     costMetrics: [
    //         { label: 'CI runner minutes / month', before: '6,400 min', after: '1,800 min', detail: 'NX affected-only + caching' },
    //         { label: 'Cross-team merge conflicts', before: '~15 / sprint', after: '~2 / sprint', detail: 'Isolated repos with submodule contracts' },
    //         { label: 'Dev onboarding time', before: '3 days', after: '1 day', detail: 'Scoped workspace, clear boundaries' },
    //     ],
    //     businessMetrics: [
    //         { value: 17, suffix: '+', label: 'Panels independently deployable', display: null },
    //         { value: 0, suffix: '', label: 'Cross-panel deploy incidents', display: 'Zero' },
    //         { value: 4, suffix: '', label: 'Business units on RBAC', display: null },
    //     ],
    //     codeSnippet: {
    //         title: 'NX per-app build + CDN chunk mapping',
    //         lines: [
    //             { tokens: [{ type: 'comment', value: '// nx.json — per-project build target' }] },
    //             { tokens: [{ type: 'string', value: '"challan-panel"' }, { type: 'plain', value: ': {' }] },
    //             { tokens: [{ type: 'plain', value: '  targets: { build: {' }] },
    //             { tokens: [{ type: 'plain', value: '    executor: ' }, { type: 'string', value: '"@nx/webpack:webpack"' }, { type: 'plain', value: ',' }] },
    //             { tokens: [{ type: 'plain', value: '    options: {' }] },
    //             { tokens: [{ type: 'plain', value: '      outputPath: ' }, { type: 'string', value: '"dist/apps/challan-panel"' }, { type: 'plain', value: ',' }] },
    //             { tokens: [{ type: 'plain', value: '      deployUrl: ' }, { type: 'string', value: '"https://cdn.cars24.com/ops/challan/"' }] },
    //             { tokens: [{ type: 'plain', value: '    }' }] },
    //             { tokens: [{ type: 'plain', value: '  }}' }] },
    //             { tokens: [{ type: 'plain', value: '}' }] },
    //         ],
    //     },
    // },
    // {
    //     slug: 'cars24-ui-library',
    //     title: 'Publishing an npm UI Library with Storybook',
    //     company: 'CARS24',
    //     role: 'Software Development Engineer III',
    //     timeframe: '2024 — 2025',
    //     excerpt: 'Shipping a shared TypeScript component library with Storybook docs, design tokens, and automated visual regression testing.',
    //     tagline: 'Creating a single source of truth for UI — a versioned npm package with 40+ components, automated Chromatic snapshots, and Storybook-driven documentation.',
    //     problem: [
    //         'Five product teams duplicated buttons, modals, and form inputs — visual inconsistency crept in across flows.',
    //         'Design-to-dev handoff relied on Figma screenshots; no living documentation meant specs drifted after the first sprint.',
    //         'Bug fixes in shared components required copy-paste patches across repos, often missing one or two consumers.',
    //     ],
    //     solution: [
    //         'Built a standalone TypeScript component library published to a private npm registry with semantic versioning.',
    //         'Integrated Storybook as the living design system — every component had interactive docs, prop tables, and usage examples.',
    //         'Added Chromatic visual regression in CI — PRs with unintended pixel changes were blocked automatically.',
    //         'Exposed design tokens (colors, spacing, typography) as CSS custom properties and JS constants for flexible consumption.',
    //     ],
    //     architecture: [
    //         { step: '01', title: 'Inventory', detail: 'Audited 5 repos for duplicated UI — identified 40+ components to consolidate.' },
    //         { step: '02', title: 'Build system', detail: 'Rollup + TypeScript, tree-shakeable ESM/CJS output, CSS module co-location.' },
    //         { step: '03', title: 'Storybook docs', detail: 'Interactive stories, prop docs, accessibility checks per component.' },
    //         { step: '04', title: 'Visual CI', detail: 'Chromatic snapshots on every PR, semver release via changesets.' },
    //     ],
    //     diagramLayers: ['Consumer Apps', 'npm Registry', 'Component Library', 'Design Tokens', 'Storybook / Chromatic'],
    //     stack: ['React', 'TypeScript', 'Storybook', 'Rollup', 'Chromatic', 'CSS Modules', 'GitHub Actions', 'Changesets'],
    //     performanceMetrics: [
    //         { label: 'Bundle size (tree-shaken)', before: 'N/A', after: '18 KB gzip', change: 'Optimized' },
    //         { label: 'Component coverage', before: '0 shared', after: '40+ components', change: 'New' },
    //         { label: 'Visual regression catch rate', before: '0%', after: '94%', change: 'Automated' },
    //     ],
    //     costMetrics: [
    //         { label: 'Duplicate component code', before: '~12K lines', after: '~800 lines', detail: 'Single source of truth via npm' },
    //         { label: 'Design QA cycles / release', before: '3 rounds', after: '1 round', detail: 'Chromatic catches regressions in CI' },
    //         { label: 'New feature UI scaffolding', before: '2 days', after: '4 hours', detail: 'Pre-built composable primitives' },
    //     ],
    //     businessMetrics: [
    //         { value: 5, suffix: '', label: 'Product teams consuming library', display: null },
    //         { value: 40, suffix: '+', label: 'Shared components published', display: null },
    //         { value: 100, suffix: '%', label: 'Storybook documentation coverage', display: null },
    //     ],
    //     codeSnippet: null,
    // },
    // {
    //     slug: 'mamaearth-subscriptions',
    //     title: 'Subscription Architecture for D2C Platform',
    //     company: 'Mamaearth',
    //     role: 'Senior Software Engineer',
    //     timeframe: '2022 — 2023',
    //     excerpt: 'End-to-end recurring order system — subscription management, payment integration, and self-serve skip/pause/cancel flows.',
    //     tagline: 'Designing a subscription engine for a high-traffic D2C storefront — from recurring payment orchestration to retention-optimized self-serve management.',
    //     problem: [
    //         'The storefront had no recurring purchase model — repeat buyers manually re-ordered every cycle, causing drop-off.',
    //         'Payment failures on recurring charges lacked retry logic; failed renewals silently churned subscribers.',
    //         'Customer support handled all skip, pause, and cancel requests manually — ~1,200 tickets per month on subscription changes alone.',
    //     ],
    //     solution: [
    //         'Built a subscription management module with frequency selection, delivery scheduling, and automatic renewal via Razorpay recurring APIs.',
    //         'Implemented smart retry with exponential backoff — failed charges retried 3 times over 72 hours with customer notifications at each step.',
    //         'Shipped self-serve flows for skip, pause, reschedule, and cancel — each with retention nudges and downgrade options.',
    //         'Added subscription analytics dashboards tracking MRR, churn rate, LTV, and cohort retention.',
    //     ],
    //     architecture: [
    //         { step: '01', title: 'Data model', detail: 'Subscription entity — plan, frequency, payment token, lifecycle state machine.' },
    //         { step: '02', title: 'Payment hooks', detail: 'Razorpay recurring + webhook-driven state transitions + retry queue.' },
    //         { step: '03', title: 'Self-serve UI', detail: 'Skip / pause / cancel flows with retention nudges and confirmation states.' },
    //         { step: '04', title: 'Analytics', detail: 'MRR, churn, LTV dashboards — cohort-level tracking for product decisions.' },
    //     ],
    //     diagramLayers: ['Storefront UI', 'Subscription Service', 'Razorpay Recurring', 'Notification Queue', 'Analytics'],
    //     stack: ['React', 'Next.js', 'Node.js', 'Redux', 'Razorpay', 'MongoDB', 'Redis', 'Styled Components'],
    //     performanceMetrics: [
    //         { label: 'Subscription page load', before: 'N/A', after: '1.4s LCP', change: 'New flow' },
    //         { label: 'Payment retry success', before: '0%', after: '68%', change: 'Smart retry' },
    //         { label: 'Self-serve adoption', before: '0%', after: '82%', change: 'New capability' },
    //     ],
    //     costMetrics: [
    //         { label: 'Support tickets / month', before: '~1,200', after: '~210', detail: 'Self-serve skip/pause/cancel flows' },
    //         { label: 'Revenue leakage (failed renewals)', before: '₹8.6L/mo', after: '₹2.7L/mo', detail: 'Smart retry + dunning emails' },
    //         { label: 'Manual ops effort', before: '3 FTEs', after: '0.5 FTE', detail: 'Automation of lifecycle management' },
    //     ],
    //     businessMetrics: [
    //         { value: 21, suffix: '%', label: 'Subscription conversion lift', display: null },
    //         { value: 34, suffix: '%', label: 'Repeat purchase rate increase', display: null },
    //         { value: 82, suffix: '%', label: 'Self-serve management adoption', display: null },
    //     ],
    //     codeSnippet: {
    //         title: 'subscription lifecycle state machine',
    //         lines: [
    //             { tokens: [{ type: 'keyword', value: 'const ' }, { type: 'plain', value: 'transitions = {' }] },
    //             { tokens: [{ type: 'plain', value: '  active:  [' }, { type: 'string', value: "'pause'" }, { type: 'plain', value: ', ' }, { type: 'string', value: "'skip'" }, { type: 'plain', value: ', ' }, { type: 'string', value: "'cancel'" }, { type: 'plain', value: '],' }] },
    //             { tokens: [{ type: 'plain', value: '  paused:  [' }, { type: 'string', value: "'resume'" }, { type: 'plain', value: ', ' }, { type: 'string', value: "'cancel'" }, { type: 'plain', value: '],' }] },
    //             { tokens: [{ type: 'plain', value: '  skipped: [' }, { type: 'string', value: "'activate'" }, { type: 'plain', value: ', ' }, { type: 'string', value: "'cancel'" }, { type: 'plain', value: '],' }] },
    //             { tokens: [{ type: 'plain', value: '};' }] },
    //             { tokens: [] },
    //             { tokens: [{ type: 'keyword', value: 'function ' }, { type: 'fn', value: 'transition' }, { type: 'plain', value: '(sub, action) {' }] },
    //             { tokens: [{ type: 'keyword', value: '  if ' }, { type: 'plain', value: '(!transitions[sub.state]?.includes(action))' }] },
    //             { tokens: [{ type: 'keyword', value: '    throw new ' }, { type: 'fn', value: 'Error' }, { type: 'plain', value: '(' }, { type: 'string', value: '`Invalid: ${sub.state} → ${action}`' }, { type: 'plain', value: ');' }] },
    //             { tokens: [{ type: 'keyword', value: '  return ' }, { type: 'fn', value: 'applyAction' }, { type: 'plain', value: '(sub, action);' }] },
    //             { tokens: [{ type: 'plain', value: '}' }] },
    //         ],
    //     },
    // },
    // {
    //     slug: 'mamaearth-security',
    //     title: 'Hardening a Storefront Against VAPT Findings',
    //     company: 'Mamaearth',
    //     role: 'Senior Software Engineer',
    //     timeframe: '2023',
    //     excerpt: 'Resolving XSS, clickjacking, MIME-sniffing, and CSP vulnerabilities across a high-traffic D2C storefront.',
    //     tagline: 'Systematic remediation of penetration test findings — from reflected XSS and missing security headers to a strict Content Security Policy across all storefront routes.',
    //     problem: [
    //         'Third-party VAPT audit flagged 23 vulnerabilities across the storefront — 4 critical, 8 high, 11 medium severity.',
    //         'No Content Security Policy existed — inline scripts and third-party tags ran unrestricted, expanding the XSS attack surface.',
    //         'User-generated content in reviews and addresses rendered without sanitization, enabling stored XSS vectors.',
    //     ],
    //     solution: [
    //         'Triaged and patched all 23 findings within a 3-week sprint — XSS escaping, frame guards, MIME-type enforcement.',
    //         'Rolled out a strict CSP with nonce-based inline script allowlisting — broke zero production integrations using a report-only phase first.',
    //         'Added DOMPurify-based sanitization on all user input render paths and server-side output encoding on API responses.',
    //         'Configured security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) via Next.js middleware.',
    //     ],
    //     architecture: [
    //         { step: '01', title: 'Triage', detail: 'Mapped 23 VAPT findings to code owners, severity, and blast radius.' },
    //         { step: '02', title: 'XSS remediation', detail: 'DOMPurify on render, output encoding on API, template escaping.' },
    //         { step: '03', title: 'CSP rollout', detail: 'Report-only → enforced; nonce rotation per request, tag audit.' },
    //         { step: '04', title: 'Header hardening', detail: 'X-Frame-Options, MIME-sniff, Referrer-Policy via middleware.' },
    //     ],
    //     diagramLayers: ['Browser', 'Next.js Middleware', 'CSP Nonce Layer', 'Sanitization', 'API Output Encoding'],
    //     stack: ['Next.js', 'React', 'Node.js', 'DOMPurify', 'Helmet.js', 'CSP', 'OWASP ZAP'],
    //     performanceMetrics: [
    //         { label: 'Critical vulnerabilities', before: '4', after: '0', change: '-100%' },
    //         { label: 'High-severity findings', before: '8', after: '0', change: '-100%' },
    //         { label: 'CSP violation reports (post-enforce)', before: 'N/A', after: '< 5 / day', change: 'Controlled' },
    //     ],
    //     costMetrics: [
    //         { label: 'Remediation cycle time', before: 'Untracked', after: '3 weeks', detail: 'Full VAPT closure in one sprint' },
    //         { label: 'Security audit frequency', before: 'Annual', after: 'Quarterly', detail: 'Automated scanning in CI pipeline' },
    //         { label: 'Compliance risk exposure', before: 'High', after: 'Low', detail: 'All OWASP Top 10 headers enforced' },
    //     ],
    //     businessMetrics: [
    //         { value: 23, suffix: '', label: 'Vulnerabilities resolved', display: null },
    //         { value: 0, suffix: '', label: 'Post-hardening incidents', display: 'Zero' },
    //         { value: 100, suffix: '%', label: 'OWASP header compliance', display: null },
    //     ],
    //     codeSnippet: {
    //         title: 'CSP nonce middleware for Next.js',
    //         lines: [
    //             { tokens: [{ type: 'keyword', value: 'import ' }, { type: 'plain', value: '{ randomBytes } ' }, { type: 'keyword', value: 'from ' }, { type: 'string', value: "'crypto'" }, { type: 'plain', value: ';' }] },
    //             { tokens: [] },
    //             { tokens: [{ type: 'keyword', value: 'export function ' }, { type: 'fn', value: 'middleware' }, { type: 'plain', value: '(req) {' }] },
    //             { tokens: [{ type: 'keyword', value: '  const ' }, { type: 'plain', value: 'nonce = randomBytes(16).toString(' }, { type: 'string', value: "'base64'" }, { type: 'plain', value: ');' }] },
    //             { tokens: [{ type: 'keyword', value: '  const ' }, { type: 'plain', value: 'csp = [' }] },
    //             { tokens: [{ type: 'plain', value: '    ' }, { type: 'string', value: "`default-src 'self'`" }, { type: 'plain', value: ',' }] },
    //             { tokens: [{ type: 'plain', value: '    ' }, { type: 'string', value: "`script-src 'self' 'nonce-${nonce}'`" }, { type: 'plain', value: ',' }] },
    //             { tokens: [{ type: 'plain', value: '    ' }, { type: 'string', value: "`style-src 'self' 'unsafe-inline'`" }, { type: 'plain', value: ',' }] },
    //             { tokens: [{ type: 'plain', value: '  ].join(' }, { type: 'string', value: "'; '" }, { type: 'plain', value: ');' }] },
    //             { tokens: [{ type: 'plain', value: '  req.headers.set(' }, { type: 'string', value: "'Content-Security-Policy'" }, { type: 'plain', value: ', csp);' }] },
    //             { tokens: [{ type: 'plain', value: '}' }] },
    //         ],
    //     },
    // },
    // {
    //     slug: 'cars24-pdf-service',
    //     title: 'PDF Generation Service with React',
    //     company: 'CARS24',
    //     role: 'Software Development Engineer III',
    //     timeframe: '2024',
    //     excerpt: 'Building a React-based PDF renderer for invoices, vehicle reports, and inspection certificates using Puppeteer and queue management.',
    //     tagline: 'A template-driven PDF generation service — React components rendered via headless Chrome, queued with Bull, and served through a REST API for on-demand document creation.',
    //     problem: [
    //         'Existing PDF generation used raw HTML string concatenation — no component reuse, no styling consistency, and frequent layout breaks.',
    //         'Peak traffic during sale events caused timeouts — synchronous PDF rendering blocked the API for 8-12 seconds per document.',
    //         'Adding a new document type (inspection cert, damage report) required weeks of template duplication and manual testing.',
    //     ],
    //     solution: [
    //         'Built a React-based template system — each document type is a React component with typed props, rendered server-side via Puppeteer.',
    //         'Added Bull queue with concurrency-limited Chromium workers — API returns a job ID, client polls or receives webhook on completion.',
    //         'Created a template registry with hot-reload in dev — new document types plug in without restarting the service.',
    //         'Implemented PDF caching by content hash — repeat requests for the same document serve from S3 without re-rendering.',
    //     ],
    //     architecture: [
    //         { step: '01', title: 'Template system', detail: 'React components per document type with typed props and preview mode.' },
    //         { step: '02', title: 'Render pipeline', detail: 'Puppeteer pool, server-side React render, Chrome PDF print API.' },
    //         { step: '03', title: 'Queue layer', detail: 'Bull + Redis for job management, concurrency limits, retry on failure.' },
    //         { step: '04', title: 'Cache + serve', detail: 'Content-hash S3 storage, pre-signed URL delivery, TTL cleanup.' },
    //     ],
    //     diagramLayers: ['REST API', 'Bull Queue', 'Puppeteer Workers', 'React Templates', 'S3 Cache'],
    //     stack: ['React', 'Node.js', 'TypeScript', 'Puppeteer', 'Bull', 'Redis', 'AWS S3', 'Docker'],
    //     performanceMetrics: [
    //         { label: 'Avg render time', before: '9.4s', after: '2.1s', change: '-78%' },
    //         { label: 'Cache hit rate', before: '0%', after: '64%', change: 'New layer' },
    //         { label: 'Peak concurrent PDFs', before: '3 (blocking)', after: '25 (queued)', change: '+733%' },
    //     ],
    //     costMetrics: [
    //         { label: 'API timeout rate (peak)', before: '18%', after: '0.3%', detail: 'Async queue eliminates blocking' },
    //         { label: 'New template dev time', before: '2 weeks', after: '2 days', detail: 'React components + typed props' },
    //         { label: 'Infra cost / 10K PDFs', before: '₹4,200', after: '₹1,800', detail: 'Caching + worker pool optimization' },
    //     ],
    //     businessMetrics: [
    //         { value: 8, suffix: '', label: 'Document types supported', display: null },
    //         { value: 50, suffix: 'K+', label: 'PDFs generated monthly', display: null },
    //         { value: 99, suffix: '.7%', label: 'Generation success rate', display: null },
    //     ],
    //     codeSnippet: {
    //         title: 'queued PDF render with Puppeteer',
    //         lines: [
    //             { tokens: [{ type: 'keyword', value: 'const ' }, { type: 'plain', value: 'pdfQueue = ' }, { type: 'keyword', value: 'new ' }, { type: 'fn', value: 'Bull' }, { type: 'plain', value: '(' }, { type: 'string', value: "'pdf-render'" }, { type: 'plain', value: ', { redis });' }] },
    //             { tokens: [] },
    //             { tokens: [{ type: 'plain', value: 'pdfQueue.process(5, ' }, { type: 'keyword', value: 'async ' }, { type: 'plain', value: '(job) => {' }] },
    //             { tokens: [{ type: 'keyword', value: '  const ' }, { type: 'plain', value: '{ template, props } = job.data;' }] },
    //             { tokens: [{ type: 'keyword', value: '  const ' }, { type: 'plain', value: 'html = ' }, { type: 'fn', value: 'renderToString' }, { type: 'plain', value: '(React.createElement(templates[template], props));' }] },
    //             { tokens: [{ type: 'keyword', value: '  const ' }, { type: 'plain', value: 'page = ' }, { type: 'keyword', value: 'await ' }, { type: 'plain', value: 'browser.newPage();' }] },
    //             { tokens: [{ type: 'keyword', value: '  await ' }, { type: 'plain', value: 'page.setContent(html, { waitUntil: ' }, { type: 'string', value: "'networkidle0'" }, { type: 'plain', value: ' });' }] },
    //             { tokens: [{ type: 'keyword', value: '  const ' }, { type: 'plain', value: 'pdf = ' }, { type: 'keyword', value: 'await ' }, { type: 'plain', value: 'page.pdf({ format: ' }, { type: 'string', value: "'A4'" }, { type: 'plain', value: ' });' }] },
    //             { tokens: [{ type: 'keyword', value: '  return ' }, { type: 'fn', value: 'uploadToS3' }, { type: 'plain', value: '(pdf, job.id);' }] },
    //             { tokens: [{ type: 'plain', value: '});' }] },
    //         ],
    //     },
    // },
    // {
    //     slug: 'flipkart-release-engineering',
    //     title: 'On-Call Engineering & Reliable Release Trains',
    //     company: 'Flipkart',
    //     role: 'Software Development Engineer II',
    //     timeframe: '2025',
    //     excerpt: 'Owning SDLC quality — PR review standards, test coverage gates, on-call rotations, and stable release trains.',
    //     tagline: 'Building engineering discipline around releases — automated quality gates, incident playbooks, and monitoring dashboards that keep a high-traffic platform shipping reliably.',
    //     problem: [
    //         'Release rollbacks happened 2-3 times per sprint — broken builds reached production because staging coverage was inconsistent.',
    //         'On-call engineers lacked runbooks — MTTR during incidents averaged 55 minutes with ad-hoc debugging.',
    //         'Test coverage was reported at the repo level but never gated — PRs with 0% coverage on new code merged regularly.',
    //     ],
    //     solution: [
    //         'Instituted per-PR coverage gates — new code required 80%+ line coverage in Jest/RTL; CI blocked merges below threshold.',
    //         'Built on-call runbooks with decision trees, escalation paths, and one-click rollback scripts tied to deploy tags.',
    //         'Created Grafana dashboards for release health — error rate, API latency, and client crash rate tracked per release tag.',
    //         'Established release trains with fixed cut-off windows, mandatory smoke suites, and canary promotion criteria.',
    //     ],
    //     architecture: [
    //         { step: '01', title: 'Quality gates', detail: 'PR-level Jest/RTL coverage thresholds, lint checks, bundle size limits.' },
    //         { step: '02', title: 'Release trains', detail: 'Fixed cadence, branch cut-offs, smoke suite, canary → full rollout.' },
    //         { step: '03', title: 'Incident playbooks', detail: 'Decision trees, severity classification, rollback scripts, escalation.' },
    //         { step: '04', title: 'Observability', detail: 'Grafana dashboards — error rate, latency, crash rate per release tag.' },
    //     ],
    //     diagramLayers: ['PR Pipeline', 'CI Quality Gates', 'Canary Deploy', 'Monitoring / Grafana', 'Incident Runbooks'],
    //     stack: ['React', 'React Native', 'Jest', 'React Testing Library', 'GitHub Actions', 'Grafana', 'PagerDuty', 'Docker'],
    //     performanceMetrics: [
    //         { label: 'Release rollback rate', before: '12%', after: '2.8%', change: '-77%' },
    //         { label: 'Incident MTTR', before: '55 min', after: '19 min', change: '-65%' },
    //         { label: 'PR test coverage (new code)', before: '~32%', after: '84%', change: '+52 pts' },
    //     ],
    //     costMetrics: [
    //         { label: 'Rollback-related eng hours / sprint', before: '18 hrs', after: '4 hrs', detail: 'Fewer rollbacks + faster recovery' },
    //         { label: 'On-call escalation rate', before: '45%', after: '12%', detail: 'Runbooks resolve L1 issues at source' },
    //         { label: 'Broken build recovery', before: '~90 min', after: '~15 min', detail: 'One-click rollback to last good tag' },
    //     ],
    //     businessMetrics: [
    //         { value: 97, suffix: '%', label: 'Release success rate', display: null },
    //         { value: 84, suffix: '%', label: 'New-code test coverage', display: null },
    //         { value: 2, suffix: 'x', label: 'Faster incident resolution', display: null },
    //     ],
    //     codeSnippet: null,
    // },
];

export function getCaseStudyBySlug(slug) {
    return caseStudies.find((study) => study.slug === slug);
}

export const INQUIRY_TYPES = [
    'Hiring — Full-time role',
    'Contract / Freelance',
    'Technical collaboration',
    'General inquiry',
];
