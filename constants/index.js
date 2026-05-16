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
    process.env.NEXT_PUBLIC_SITE_URL || 'https://abhishekagarwal.me'

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
        description: 'Created a Promotional Website for Honasa where you can buy 4 Products from different brands for minimal charges.',
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
                years: 'May 2025 - Present',
                highlights: [
                    'Architected OTA CodePush migration from Azure to GCP with Redis — ~38% faster bundle delivery P95',
                    'Built post-purchase commerce journeys in React Native & Next.js for millions of monthly active users',
                    'Core contributor to internal design system — reusable TypeScript components across business units',
                    'Owned SDLC quality: PR reviews, Jest/RTL coverage, on-call rotations, and stable release trains',
                ],
            },
            {
                company: 'CARS24',
                role: 'Software Development Engineer III',
                years: 'March 2024 - April 2025',
                highlights: [
                    'Scaled VAS pod frontend — ~280% order growth across Challan, Vehicle History, and payment flows',
                    'Improved domain INP from ~494ms to ~268ms, lifting SEO visibility and interaction responsiveness',
                    'Introduced micro-frontend architecture with Git submodules and RBAC across SaaS operator panels',
                    'Published npm UI library with Storybook — consistent design language across the ecosystem',
                ],
            },
            {
                company: 'Mamaearth',
                role: 'Senior Software Engineer',
                years: 'July 2021 - March 2024',
                highlights: [
                    'Reduced Total Blocking Time from ~8.2s to ~1.3s via Webpack tuning, chunking, and leak remediation',
                    'Drove ~42% organic traffic growth with conditional ISR/SSR strategies optimized for crawlers',
                    'Delivered AI recommendation & coupon journeys contributing to ~17% conversion uplift',
                    'Resolved VAPT findings — XSS, clickjacking, and MIME-sniffing hardening across storefront',
                ],
            },
        ],
    },
];

export const careerTimeline = [
    {
        company: 'Flipkart',
        role: 'SDE II',
        period: '2025 — Present',
        summary: 'OTA platform migration, e-commerce surfaces, design systems.',
    },
    {
        company: 'CARS24',
        role: 'SDE III',
        period: '2024 — 2025',
        summary: 'VAS scale-up, Core Web Vitals, micro-frontends.',
    },
    {
        company: 'Mamaearth',
        role: 'Senior Software Engineer',
        period: '2021 — 2024',
        summary: 'Performance, SEO, subscriptions, multi-brand platform.',
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
        description: 'GCP, AWS, Docker, Redis, and reliable CI/CD delivery pipelines.',
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

export const contactSecondary = [
    {
        label: 'Website',
        text: 'abhishekagarwal.me',
        href: 'https://abhishekagarwal.me/',
    },
    {
        label: 'Languages',
        text: 'English, Hindi',
    },
];

export const engineeringToolchain = [
    'Git',
    'Docker',
    'AWS',
    'GCP',
    'Azure',
    'GitHub Actions',
    'Redis',
    'Storybook',
];

export const skillData = [
    {
        title: 'Core Stack',
        subtitle: 'Primary technologies I ship with daily',
        tier: 'core',
        data: [
            { name: 'TypeScript' },
            { name: 'JavaScript' },
            { name: 'React.js' },
            { name: 'Next.js' },
            { name: 'React Native' },
            { name: 'Node.js' },
        ],
    },
    {
        title: 'Cloud & Infrastructure',
        subtitle: 'Production environments & platform services',
        tier: 'core',
        data: [
            { name: 'GCP' },
            { name: 'AWS' },
            { name: 'Azure' },
            { name: 'Docker' },
            { name: 'Redis' },
            { name: 'Cloud Functions' },
            { name: 'CI/CD' },
        ],
    },
    {
        title: 'Frontend Engineering',
        subtitle: 'UI systems, state, and build pipelines',
        tier: 'proficient',
        data: [
            { name: 'Redux' },
            { name: 'Zustand' },
            { name: 'Micro Frontends' },
            { name: 'Webpack' },
            { name: 'Vite' },
            { name: 'Tailwind CSS' },
            { name: 'Storybook' },
        ],
    },
    {
        title: 'Quality & Reliability',
        subtitle: 'Testing, observability, and engineering discipline',
        tier: 'proficient',
        data: [
            { name: 'Jest' },
            { name: 'React Testing Library' },
            { name: 'Git' },
            { name: 'GitHub Actions' },
            { name: 'Performance Auditing' },
        ],
    },
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
    {
        slug: 'cars24-vas-scale',
        title: 'VAS Pod Scale & Core Web Vitals',
        company: 'CARS24',
        role: 'Software Development Engineer III',
        timeframe: '2024 — 2025',
        excerpt: 'E-commerce VAS flows, micro-frontends, and INP optimization driving ~280% order growth.',
        tagline: 'Scaling value-added services frontend — Challan payments, vehicle history, and operator panels with measurable performance and revenue impact.',
        problem: [
            'VAS order volume was outpacing frontend capacity — legacy monolith panels slowed feature shipping.',
            'Interaction to Next Paint at domain level hovered near 500ms, hurting SEO and mobile conversion.',
            'Multiple SaaS operator tools needed RBAC-aware modular delivery without shared deploy risk.',
        ],
        solution: [
            'Shipped micro-frontend architecture with Git submodules and isolated release pipelines per panel.',
            'Optimized critical paths — code splitting, image pipelines, and main-thread budgeting for INP.',
            'Published shared npm UI library documented in Storybook for cross-team consistency.',
        ],
        architecture: [
            { step: '01', title: 'Modularize', detail: 'Split monolith panels into independently deployable MFEs.' },
            { step: '02', title: 'Measure', detail: 'RUM + Lighthouse budgets on seller & consumer journeys.' },
            { step: '03', title: 'Optimize', detail: 'Chunk strategy, lazy routes, payment flow hardening.' },
            { step: '04', title: 'Scale', detail: 'RBAC, Storybook library, cross-pod adoption.' },
        ],
        diagramLayers: ['Consumer Web', 'MFE Shell', 'VAS Modules', 'Payment APIs', 'Ops Panels'],
        stack: ['React', 'Next.js', 'TypeScript', 'Webpack', 'Git Submodules', 'Storybook', 'Node.js'],
        performanceMetrics: [
            { label: 'INP (domain P75)', before: '494ms', after: '268ms', change: '-46%' },
            { label: 'LCP (critical routes)', before: '3.8s', after: '2.4s', change: '-37%' },
            { label: 'JS main-thread (checkout)', before: '1.9s', after: '1.1s', change: '-42%' },
        ],
        costMetrics: [
            { label: 'Deploy frequency / pod', before: '2 / week', after: '5 / week', detail: 'Independent MFE releases' },
            { label: 'Duplicate UI build cost', before: 'High', after: 'Low', detail: 'Shared npm design package' },
        ],
        businessMetrics: [
            { value: 280, suffix: '%', label: 'VAS order growth', display: null },
            { value: 4, suffix: '+', label: 'Major modules shipped', display: null },
            { value: 17, suffix: '+', label: 'Panels on MFE platform', display: null },
        ],
        codeSnippet: null,
    },
    {
        slug: 'mamaearth-performance',
        title: 'Storefront Performance & SEO',
        company: 'Mamaearth',
        role: 'Senior Software Engineer',
        timeframe: '2021 — 2024',
        excerpt: 'TBT reduction, ISR/SSR SEO strategy, and conversion-focused product systems.',
        tagline: 'Making a high-traffic D2C storefront faster, more discoverable, and more conversion-efficient across brands.',
        problem: [
            'Total Blocking Time exceeded 8s on key pages — mobile users hit jank during checkout and PLP interactions.',
            'Organic discovery plateaued; crawler efficiency and render strategy needed rethinking.',
            'Subscription and recommendation flows were under-leveraged conversion opportunities.',
        ],
        solution: [
            'Rebuilt Webpack strategy — dynamic chunks, dependency pruning, and memory leak fixes.',
            'Implemented conditional ISR/SSR paths tuned for Google crawl patterns on high-intent pages.',
            'Shipped subscription architecture and AI-assisted recommendation + coupon journeys.',
        ],
        architecture: [
            { step: '01', title: 'Profile', detail: 'Chrome traces, bundle analyzer, field data.' },
            { step: '02', title: 'Fix TBT', detail: 'Chunking, deferral, image & font strategy.' },
            { step: '03', title: 'SEO layer', detail: 'ISR rules per template + crawl validation.' },
            { step: '04', title: 'Convert', detail: 'Subscriptions, recommendations, coupons.' },
        ],
        diagramLayers: ['Next.js Storefront', 'ISR/SSR Layer', 'API / CMS', 'CDN', 'Analytics'],
        stack: ['React', 'Next.js', 'Redux', 'Webpack', 'Node.js', 'Styled Components'],
        performanceMetrics: [
            { label: 'Total Blocking Time', before: '8.2s', after: '1.3s', change: '-84%' },
            { label: 'Organic sessions', before: 'baseline', after: '+42%', change: 'YoY peak' },
            { label: 'Lighthouse Performance', before: '48', after: '78', change: '+30 pts' },
        ],
        costMetrics: [
            { label: 'CDN waste (oversized assets)', before: '₹2.1L/mo', after: '₹1.4L/mo', detail: 'Image pipeline + format strategy' },
        ],
        businessMetrics: [
            { value: 17, suffix: '%', label: 'Conversion uplift', display: null },
            { value: 21, suffix: '%', label: 'Subscription conversion lift', display: null },
            { value: 5, suffix: '+', label: 'Brands on shared platform', display: null },
        ],
        codeSnippet: null,
    },
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
