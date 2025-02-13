import { RiCodeBoxFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiMediumFill } from 'react-icons/ri';

export const icons = [
    {
        path: 'https://www.linkedin.com/in/abhishek-agarwal-2192ba190/',
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

export const RESUME_LINK = "https://drive.google.com/file/d/1jyLwkhjILZ_D8z5wfjegzhk5NIrJ21yl/view"

export const projectData = [
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

export const skillData = [
    {
        title: 'Frameworks / Libraries',
        data: [
            {
                name: 'React'
            },
            {
                name: 'Next'
            },
            {
                name: 'Redux'
            },
            {
                name: 'Saga'
            },
            {
                name: 'Node'
            },
            {
                name: 'Express'
            },
            {
                name: 'Sockets'
            },
            {
                name: 'WebRTC'
            },
            {
                name: 'Styled Components'
            },
        ]
    },
    {
        title: 'Languages',
        data: [
            {
                name: 'JavaScript'
            },
            {
                name: 'C++'
            },
            {
                name: 'HTML5'
            },
            {
                name: 'CSS'
            },
        ]
    },
    {
        title: 'Database',
        data: [
            {
                name: 'SQL'
            },
            {
                name: 'MongoDB'
            }
        ]
    },
    {
        title: 'Tools',
        data: [
            {
                name: 'Git'
            },
            {
                name: 'VSCode'
            },
            {
                name: 'Postman'
            },
            {
                name: 'Lighthouse'
            },
            {
                name: 'Jira'
            },
            {
                name: 'GTMetrix'
            },
            {
                name: 'Chrome Dev Tools'
            },
            {
                name: 'MongoDb Compass'
            },
            {
                name: 'NewRelic'
            },
        ]
    }
];
