export const articles = [
    {
        slug: 'full-stack-engineers-guide-to-core-web-vitals',
        title: "The Full-Stack Engineer's Guide to Core Web Vitals",
        excerpt:
            'Practical tips from production — not theory, not docs rewrites, just what actually moved the needle.',
        publishedAt: '2026-01-08',
        readTime: '10 min read',
        tags: ['Performance', 'Web Vitals'],
        sections: [
            {
                heading: 'Why Most Web Vitals Advice Falls Short',
                paragraphs: [
                    "I've read every Google blog post on Core Web Vitals. Most of them tell you what the metrics are and why they matter. Very few tell you how to actually fix them in a real codebase with a dozen third-party scripts, a legacy CSS pipeline, and a product team that ships twice a week.",
                    "Over the past five years I've optimized Web Vitals at three different companies — Mamaearth, CARS24, and Flipkart. Each time the bottlenecks were wildly different, but the debugging approach was the same. This article is the playbook I wish I'd had on day one.",
                    'If you walk away with one thing, let it be this: measuring in the lab is necessary but insufficient. Real-user monitoring is where you find the truth, and the truth is usually uglier than Lighthouse suggests.',
                ],
            },
            {
                heading: 'INP: The Metric Nobody Talks About Enough',
                paragraphs: [
                    "At CARS24 we had an INP problem that didn't show up in any lab test. Our car listing page looked fast — Lighthouse was green across the board. But field data told a different story. Users on mid-range Android phones were experiencing 400ms+ delays on filter interactions.",
                    "The root cause was a cascade of React re-renders triggered by our filter state management. Every filter change recalculated a derived price range, which triggered a context update, which re-rendered 200+ car cards. We fixed it by memoizing the derived computation and breaking the context into two separate providers — one for filter state, one for display state.",
                    'INP dropped from 380ms to 90ms. The lesson: INP is almost never about one slow event handler. It is about the downstream work that event handler triggers. Profile the entire chain, not just the click.',
                ],
            },
            {
                heading: 'TBT and the Third-Party Script Problem',
                paragraphs: [
                    "At Mamaearth, our Total Blocking Time was north of 1200ms on mobile. Half of that was our own JavaScript. The other half was analytics, marketing pixels, chatbots, and A/B testing libraries — tools the business considered non-negotiable.",
                    "We couldn't remove them, so we deferred them. I wrote a script loader that used requestIdleCallback to load third-party scripts only after the main thread was idle. For scripts that needed to run on page load, we used web workers where possible and facade patterns for things like the chat widget.",
                    "TBT dropped to 400ms. It's not perfect, but it was the difference between a failing and passing Core Web Vitals assessment. The key insight is that you don't need to eliminate third-party scripts — you need to make them yield to your critical path.",
                ],
            },
            {
                heading: 'LCP: It Is Almost Always an Image',
                paragraphs: [
                    "In my experience, LCP issues are the most straightforward to fix. Nine times out of ten, your LCP element is a hero image or a banner, and the fix is some combination of proper sizing, format optimization, and preloading.",
                    "At Flipkart, we shaved 800ms off LCP by switching hero images to AVIF with WebP fallback and adding a preload link in the document head. We also moved from client-side image rendering to server-rendering the img tag with explicit width and height to eliminate layout shifts.",
                    'The one non-obvious trick: if your LCP element is text rendered with a custom font, the fix is font-display: optional combined with a preloaded font file. We used this at CARS24 for the car detail page headline and it eliminated the flash of invisible text entirely.',
                ],
            },
            {
                heading: 'CLS: Death by a Thousand Shifts',
                paragraphs: [
                    "CLS is the metric where I see teams make the most mistakes. They fix one layout shift, declare victory, and then a product change introduces three more. The fix isn't one-time — it's systemic.",
                    "What works: enforce explicit dimensions on all media elements via an ESLint rule, use CSS aspect-ratio for responsive containers, and reserve space for dynamic content like ads or lazy-loaded modules with min-height placeholders. At CARS24 we added a CLS budget to our CI pipeline that failed the build if any page exceeded 0.1. It was annoying at first, but it forced the team to think about layout stability during development, not after.",
                ],
            },
            {
                heading: 'Building a Web Vitals Culture',
                paragraphs: [
                    "The hardest part of Web Vitals work isn't the technical fixes. It's convincing your team that performance is a feature, not a chore. I've found that the best way to do this is to connect metrics to business outcomes.",
                    "At Mamaearth, we correlated our LCP improvements with a measurable increase in add-to-cart rate on collection pages. That single data point got performance onto the product roadmap permanently. At CARS24, we showed that pages with good INP had 15% higher lead conversion than pages with poor INP.",
                    "My advice: instrument everything, build dashboards that product managers can read, and present performance work in business language. Nobody cares that you reduced TBT by 600ms. Everyone cares that you improved conversion by 8%.",
                ],
            },
        ],
    },
    {
        slug: 'why-i-chose-gcp-over-aws-for-our-ota-pipeline',
        title: 'Why I Chose GCP Over AWS for Our OTA Pipeline',
        excerpt:
            'Real trade-offs, real costs, and why the "just use AWS" default isn\'t always right.',
        publishedAt: '2026-01-22',
        readTime: '8 min read',
        tags: ['Cloud', 'GCP'],
        sections: [
            {
                heading: 'The Problem We Were Solving',
                paragraphs: [
                    "At Flipkart, I was involved in building the OTA (over-the-air) update pipeline for our internal devices. The system needed to handle firmware packaging, delta generation, staged rollouts, and telemetry — all at a scale that demanded serious infrastructure decisions.",
                    "The default assumption was AWS. Most of Flipkart's infrastructure runs on it, and there's organizational muscle memory around their services. But when I actually mapped our requirements to offerings from both providers, GCP came out ahead in several areas that mattered for this specific use case.",
                ],
            },
            {
                heading: 'Where GCP Won: Data Pipeline and Storage',
                paragraphs: [
                    "Our OTA pipeline generates a lot of telemetry — device health, update success rates, rollback events, version distribution across the fleet. We needed a way to ingest, process, and query this data without building a custom ETL pipeline.",
                    "GCP's BigQuery was the decisive factor. The ability to run SQL queries over terabytes of telemetry data without provisioning clusters, managing partitions, or worrying about scaling is genuinely game-changing compared to Redshift. Our analytics team could self-serve queries from day one.",
                    "Cloud Storage with its strong consistency model and straightforward lifecycle policies was also simpler to configure than S3 for our firmware artifact storage. The pricing was comparable, but the developer experience was noticeably smoother.",
                ],
            },
            {
                heading: 'Where AWS Still Wins',
                paragraphs: [
                    "I want to be fair — AWS has a broader ecosystem and more mature offerings in several areas. Their IoT Core service is more feature-rich than GCP's IoT offering. If we were building a traditional IoT fleet management system, AWS would have been the better choice.",
                    "AWS Lambda is also more mature than Cloud Functions for complex event-driven workflows, and Step Functions is a better orchestration tool than anything GCP offers natively. For our OTA pipeline, we used Cloud Run instead, which fit our containerized workload model better than Lambda would have.",
                    "The IAM model in AWS is more granular, which is both a strength and a weakness. It gives you more control but also more rope to hang yourself with. GCP's IAM felt more intuitive for our team size.",
                ],
            },
            {
                heading: 'The Cost Surprise',
                paragraphs: [
                    "Everyone talks about cloud costs, but the real cost isn't compute or storage — it's developer time. Our team of four engineers had the GCP pipeline running in production in six weeks. Based on conversations with teams that built similar systems on AWS, the AWS path would have taken closer to ten weeks due to the additional configuration surface area.",
                    "On raw infrastructure costs, GCP was about 12% cheaper for our workload profile. The sustained use discounts applied automatically, unlike AWS where you need to commit to reserved instances upfront. For a new project with uncertain scaling patterns, this flexibility was valuable.",
                ],
            },
            {
                heading: 'What I Would Do Differently',
                paragraphs: [
                    "In hindsight, I would have invested more time in Terraform from the start. We initially used the GCP console and gcloud CLI, which worked fine for the first few weeks but became a maintenance headache as the infrastructure grew. Infrastructure as code is not optional for any serious cloud project.",
                    "I also underestimated the importance of multi-cloud readiness. While GCP was the right choice for this project, tightly coupling to any single provider's proprietary services makes future migration painful. If I were starting today, I'd abstract the storage and compute layers behind interfaces that could be swapped.",
                    "The takeaway isn't that GCP is better than AWS. It's that the right choice depends on your specific workload, team expertise, and timeline. The worst thing you can do is default to a provider without evaluating the alternatives for your use case.",
                ],
            },
        ],
    },
    {
        slug: 'redis-patterns-every-full-stack-dev-should-know',
        title: 'Redis Patterns Every Full-Stack Dev Should Know',
        excerpt:
            'Caching, pub/sub, rate limiting, and session management — from someone who uses Redis daily.',
        publishedAt: '2026-02-03',
        readTime: '9 min read',
        tags: ['Redis', 'Caching'],
        sections: [
            {
                heading: 'Redis Is Not Just a Cache',
                paragraphs: [
                    "Most developers first encounter Redis as a caching layer — stick it in front of your database, reduce load, move on. That's a valid use case, but it barely scratches the surface. At Flipkart, Redis is the backbone of several real-time systems that have nothing to do with caching.",
                    "I think of Redis as a Swiss Army knife for ephemeral data. If your data is temporary, time-sensitive, or needs sub-millisecond access, Redis probably has a data structure that fits. The trick is knowing which structure to reach for.",
                ],
            },
            {
                heading: 'Cache-Aside with TTL Jitter',
                paragraphs: [
                    "The basic cache-aside pattern is simple: check Redis first, fall back to the database, write the result back to Redis. But the naive implementation has a thundering herd problem — when a popular key expires, hundreds of requests simultaneously hit your database.",
                    "At Flipkart, we solve this with TTL jitter. Instead of setting every cache entry to expire in exactly 300 seconds, we add a random offset of plus or minus 30 seconds. This spreads cache expiration across time and prevents stampedes. We also use a mutex pattern where the first request to find an expired key acquires a lock and refreshes the cache while others serve stale data.",
                    "The combination of jitter and mutex reduced our database load by roughly 40% during peak traffic compared to basic cache-aside. It's a small implementation detail with an outsized impact.",
                ],
            },
            {
                heading: 'Rate Limiting with Sliding Windows',
                paragraphs: [
                    "Fixed-window rate limiting is easy to implement but has a well-known edge case: a burst of requests at the boundary between two windows can exceed your intended limit. Sliding window rate limiting solves this, and Redis sorted sets make it elegant.",
                    "The pattern is straightforward. Use ZADD to add each request timestamp to a sorted set keyed by the client identifier. Use ZREMRANGEBYSCORE to remove entries older than your window. Use ZCARD to count remaining entries. If the count exceeds your limit, reject the request. Set an expiry on the key equal to your window size so abandoned keys don't leak memory.",
                    "We use this at Flipkart for API rate limiting on internal services. The beauty is that it works across distributed instances because Redis is the single source of truth. No need for local counters or sticky sessions.",
                ],
            },
            {
                heading: 'Pub/Sub for Real-Time Updates',
                paragraphs: [
                    "Redis pub/sub is underrated for small to medium scale real-time features. If you need WebSocket-like push updates but don't want to operate a dedicated message broker, Redis pub/sub gets you 80% of the way there.",
                    "The caveat is that Redis pub/sub is fire-and-forget. If a subscriber is disconnected when a message is published, that message is lost. For use cases where message durability matters, use Redis Streams instead. Streams give you consumer groups, acknowledgment, and replay — essentially a lightweight Kafka for teams that don't need Kafka's complexity.",
                ],
            },
            {
                heading: 'Sorted Sets for Leaderboards and Feeds',
                paragraphs: [
                    "Sorted sets are my favorite Redis data structure. They maintain elements in order by score, and operations like ZRANGEBYSCORE and ZREVRANGE are O(log N). This makes them perfect for leaderboards, activity feeds, and priority queues.",
                    "At CARS24, we used sorted sets to power a recently-viewed cars feature. Each user had a sorted set keyed by their user ID, with car IDs as members and view timestamps as scores. Fetching the 10 most recently viewed cars was a single ZREVRANGE call. Adding a new view was ZADD with the current timestamp. We capped the set at 50 entries using ZREMRANGEBYRANK to prevent unbounded growth.",
                    "The whole feature — API, caching, and cleanup — took less than a day to implement. Try doing that with a relational database and you'll spend more time writing the query than building the feature.",
                ],
            },
            {
                heading: 'Mistakes I Have Made with Redis',
                paragraphs: [
                    "The biggest mistake I made early on was treating Redis as a primary data store. Redis is persistent if you configure it that way, but it's not designed to be your source of truth. Use it for data you can afford to lose or rebuild. If your application breaks when Redis goes down, you have an architecture problem.",
                    "The second mistake was not monitoring memory usage closely enough. Redis stores everything in memory, and a runaway key pattern can eat your entire allocation in minutes. Set maxmemory and a sensible eviction policy from day one. At Flipkart we use allkeys-lfu as the default eviction policy, which works well for most workloads.",
                    "The third mistake was using KEYS in production. Never do this. It scans the entire keyspace and blocks the server. Use SCAN instead. I learned this the hard way at Mamaearth when a debugging session with KEYS caused a 2-second latency spike across the platform.",
                ],
            },
        ],
    },
    {
        slug: 'isr-vs-ssr-vs-ssg-when-to-use-what',
        title: 'ISR vs SSR vs SSG: When to Use What',
        excerpt:
            'Lessons from three production apps on choosing the right Next.js rendering strategy.',
        publishedAt: '2026-02-14',
        readTime: '8 min read',
        tags: ['Next.js', 'SEO'],
        sections: [
            {
                heading: 'The Rendering Strategy Spectrum',
                paragraphs: [
                    "Next.js gives you SSG, SSR, ISR, and now the app router with server components. Having options is great, but I've seen teams pick a strategy based on blog posts rather than their actual data and traffic patterns. The result is either stale content or unnecessary server load.",
                    "After shipping production apps using all three strategies at Mamaearth, CARS24, and Flipkart, I've developed a simple decision framework. It comes down to two questions: how frequently does the content change, and how important is freshness to the user?",
                ],
            },
            {
                heading: 'SSG: When Your Content Rarely Changes',
                paragraphs: [
                    "Static Site Generation is the fastest option and the simplest to operate. If your content changes less than once a day and you can tolerate a deploy cycle for updates, SSG is the right choice.",
                    "I use SSG for marketing pages, documentation, and blog content. At Mamaearth, our landing pages were fully static — they changed maybe twice a month, and a five-minute build cycle was perfectly acceptable. The pages loaded in under 1 second on 3G, and our hosting costs were negligible.",
                    "The trap with SSG is trying to use it for content that changes more frequently than your build pipeline can handle. If you're running builds every 10 minutes to keep content fresh, you've outgrown SSG.",
                ],
            },
            {
                heading: 'ISR: The Sweet Spot for E-Commerce',
                paragraphs: [
                    "Incremental Static Regeneration was a revelation for our product pages at Mamaearth. We had thousands of product pages that changed multiple times a day — prices, stock status, reviews — but didn't need to be real-time accurate.",
                    "We set a revalidation interval of 60 seconds. This meant that at most, a user would see data that was one minute old. For an e-commerce catalog, this was perfectly acceptable. The first request after revalidation served stale content while regenerating in the background, so there was no latency penalty for the user.",
                    "The key insight with ISR is choosing the right revalidation interval. Too short and you're basically doing SSR with extra steps. Too long and your content is stale. We found that 60 seconds was the sweet spot for product pages, and 300 seconds was fine for category pages.",
                ],
            },
            {
                heading: 'SSR: When Freshness Is Non-Negotiable',
                paragraphs: [
                    "Server-Side Rendering makes sense when every request needs up-to-the-second data. At CARS24, our car detail pages had to show real-time availability — a car could be sold at any moment, and showing a sold car as available was a terrible user experience.",
                    "SSR comes with operational costs. Every page view is a server request, which means you need to provision for peak traffic, handle server failures gracefully, and optimize your data-fetching layer. At CARS24 we added a Redis cache with a 10-second TTL in front of our SSR pages as a compromise between freshness and server load.",
                    "My rule of thumb: if you're using SSR, you should be able to articulate why ISR with a short revalidation window isn't sufficient. If you can't, you probably don't need SSR.",
                ],
            },
            {
                heading: 'Server Components Change the Calculus',
                paragraphs: [
                    "With Next.js app router, server components introduce a new dimension. Components that fetch data on the server and send rendered HTML to the client can coexist with client components that handle interactivity. This lets you mix rendering strategies at the component level rather than the page level.",
                    "At Flipkart, we're using this hybrid approach for pages that have both static and dynamic sections. The product description is a server component that can be cached aggressively. The price, availability, and user-specific recommendations are client components that fetch fresh data. This gives us the performance of SSG for the bulk of the page with the freshness of client-side rendering where it matters.",
                    "The mental model shift is important: stop thinking about rendering strategy per page and start thinking about it per component. This is where the app router genuinely shines.",
                ],
            },
        ],
    },
    {
        slug: 'micro-frontends-are-not-always-the-answer',
        title: 'Micro-Frontends Are Not Always the Answer',
        excerpt:
            'After migrating to micro-frontends at CARS24, here is what worked, what failed, and when you should avoid them entirely.',
        publishedAt: '2026-02-28',
        readTime: '11 min read',
        tags: ['Micro-Frontends', 'Architecture'],
        sections: [
            {
                heading: 'The Allure of Micro-Frontends',
                paragraphs: [
                    "The pitch is compelling: independent teams, independent deployments, technology flexibility, and no more monolith coordination. When CARS24 decided to adopt micro-frontends, I was genuinely excited. We had six frontend teams stepping on each other's toes in a massive Next.js monolith, and the deploy queue was a constant source of friction.",
                    "What I didn't appreciate at the time was the sheer volume of new complexity micro-frontends introduce. We traded coordination problems for infrastructure problems, and infrastructure problems are harder to debug at 2 AM.",
                ],
            },
            {
                heading: 'What Worked: Team Autonomy',
                paragraphs: [
                    "The biggest win was deployment independence. Once the infrastructure was in place, each team could deploy their micro-frontend without coordinating with anyone else. Our deploy frequency went from 2-3 times per day for the whole app to 5-10 times per day per team. Feature velocity increased noticeably.",
                    "Team ownership improved dramatically. When a team owns a micro-frontend end-to-end — routing, state, API calls, UI — they move faster and take more pride in quality. The car listing team shipped a complete redesign in two weeks because they didn't have to worry about breaking the checkout flow.",
                    "Technology migration also became feasible. One team upgraded to React 18 a full month before the others, without any risk to the rest of the platform. This kind of incremental modernization is nearly impossible in a monolith.",
                ],
            },
            {
                heading: 'What Failed: Shared State and Consistency',
                paragraphs: [
                    "The first major pain point was shared state. User authentication, shopping cart state, and navigation were used by every micro-frontend. We tried a shared state library published as an npm package, but version drift between micro-frontends caused subtle bugs that were nightmarish to debug.",
                    "Visual consistency was another casualty. Despite having a shared design system, each team made slightly different choices about spacing, animation timing, and interaction patterns. The app started to feel like six different products stitched together. Users noticed. Our NPS score for 'app feels cohesive' dropped by 12 points.",
                    "We eventually solved the state problem with a custom event bus using the BroadcastChannel API, but it took three iterations and six weeks of engineering time. If I'd known the cost upfront, I would have pushed for a different architecture.",
                ],
            },
            {
                heading: 'The Performance Tax',
                paragraphs: [
                    "Each micro-frontend brought its own copy of React, its own CSS-in-JS runtime, and its own utility libraries. Despite our best efforts with module federation and shared dependencies, the total JavaScript payload increased by 35% after the migration.",
                    "Page transitions between micro-frontends were noticeably slower than in-app navigations within a single micro-frontend. The shell application had to unmount one micro-frontend and mount another, which introduced a visible loading state that didn't exist in the monolith.",
                    "We mitigated this with aggressive prefetching and by sharing React as a singleton through module federation. But it took months of optimization work to get back to the performance baseline we had with the monolith. That's months of engineering effort spent running in place.",
                ],
            },
            {
                heading: 'When You Should Use Micro-Frontends',
                paragraphs: [
                    "After living with this architecture for over a year, I believe micro-frontends make sense only when you have more than four independent teams working on the same product, a monolith deployment pipeline that is a proven bottleneck, and the engineering bandwidth to build and maintain the infrastructure layer.",
                    "If you have fewer than four teams, a well-organized monolith with clear module boundaries and a good CI/CD pipeline will serve you better. The coordination cost is lower than the infrastructure cost of micro-frontends.",
                    "If you're a startup or a small team considering micro-frontends, I would strongly advise against it. You're optimizing for a scaling problem you don't have yet, and you're paying the complexity cost today.",
                ],
            },
            {
                heading: 'What I Would Do Instead',
                paragraphs: [
                    "If I were starting over at CARS24, I'd keep the Next.js monolith but invest heavily in module boundaries, code ownership via CODEOWNERS, and a fast CI pipeline with parallelized builds. I'd use a monorepo tool like Turborepo to give teams fast feedback loops without the operational overhead of separate deployments.",
                    "The problem we were trying to solve — team autonomy and fast deployments — has simpler solutions than micro-frontends. We reached for the most complex tool in the toolbox when a wrench would have sufficed.",
                ],
            },
        ],
    },
    {
        slug: 'how-i-structure-react-projects-in-2026',
        title: 'How I Structure My React Projects in 2026',
        excerpt:
            'A pragmatic folder structure and set of patterns that have survived three companies and dozens of engineers.',
        publishedAt: '2026-03-05',
        readTime: '7 min read',
        tags: ['React', 'Architecture'],
        sections: [
            {
                heading: 'Why Structure Matters More Than You Think',
                paragraphs: [
                    "I've joined three codebases in five years. The single best predictor of how quickly I became productive was the project structure. A well-organized codebase communicates intent. A messy one requires tribal knowledge that lives in Slack threads and people's heads.",
                    "The structure I'm about to describe isn't revolutionary. It's boring, and that's the point. I want new engineers to open the project and immediately know where to find things and where to put new code.",
                ],
            },
            {
                heading: 'The Folder Layout',
                paragraphs: [
                    "I use a feature-based structure with a few shared top-level directories. The top-level folders are: app (routes and pages), components (shared UI components), features (feature-specific modules), hooks (shared custom hooks), lib (utilities and configurations), constants (static data and enums), and services (API client functions).",
                    "Inside each feature folder, I mirror the top-level structure: components, hooks, utils, and an index file that serves as the public API. Anything inside a feature folder is private to that feature unless explicitly exported through the index file.",
                    "This structure scales well from a solo project to a team of 15 engineers. At CARS24, we had 12 feature folders with clear ownership, and engineers rarely needed to touch code outside their feature boundary.",
                ],
            },
            {
                heading: 'Component Organization',
                paragraphs: [
                    "Shared components live in the top-level components directory and are organized by category: layout, forms, feedback, navigation, and data-display. Each component gets its own folder with the component file, a styles file if needed, and a test file.",
                    "I avoid creating deeply nested component hierarchies. If a component folder has more than three levels of nesting, it's a sign that the component is doing too much and should be split into separate components or extracted into a feature.",
                    "One pattern I've found invaluable is the compound component pattern for complex UI elements. Instead of a single Button component with 20 props, I create Button, ButtonGroup, ButtonIcon, and ButtonLabel components that compose together. It's more files but dramatically better DX.",
                ],
            },
            {
                heading: 'The Barrel Export Debate',
                paragraphs: [
                    "I used to love barrel exports — index.js files that re-export everything from a directory. Then I watched them cause webpack to bundle entire feature directories when only one component was imported. Tree-shaking is not as reliable as we'd like it to be.",
                    "My current approach: barrel exports for feature public APIs only. The feature's index.js explicitly exports the components, hooks, and utilities that other features are allowed to use. Imports within a feature use direct paths. This gives you a clean public API without the bundle size penalty.",
                ],
            },
            {
                heading: 'Naming Conventions That Reduce Cognitive Load',
                paragraphs: [
                    "Files are PascalCase for components and camelCase for everything else. Hooks always start with use. Utility functions are pure and named as verbs: formatPrice, parseDate, validateEmail. Constants are UPPER_SNAKE_CASE for primitive values and camelCase for objects and arrays.",
                    "I prefix test files with the same name as the file they test: CarCard.js and CarCard.test.js. Colocating tests with source files makes it obvious when a test is missing and makes refactoring easier because the test moves with the code.",
                    "These conventions sound trivial, but they eliminate an entire category of PR review comments and onboarding questions. When everyone names things the same way, the codebase reads like it was written by one person.",
                ],
            },
        ],
    },
    {
        slug: 'the-art-of-code-review',
        title: 'The Art of Code Review: What I Look For',
        excerpt:
            'My PR review philosophy after reviewing thousands of pull requests across three companies.',
        publishedAt: '2026-03-12',
        readTime: '7 min read',
        tags: ['Code Review', 'Engineering Culture'],
        sections: [
            {
                heading: 'Code Review Is Not Bug Hunting',
                paragraphs: [
                    "The most common misconception about code review is that its primary purpose is to catch bugs. Automated tests catch bugs. Linters catch style issues. Code review exists to ensure maintainability, share knowledge, and enforce architectural decisions.",
                    "When I review a PR, I'm asking myself: will a new engineer understand this code six months from now? Does this change fit the patterns established in the codebase? Are there edge cases the author might not have considered? These questions matter more than whether the code 'works.'",
                ],
            },
            {
                heading: 'The First Pass: Intent and Architecture',
                paragraphs: [
                    "I always start with the PR description. A good description tells me what problem is being solved, why this approach was chosen, and what alternatives were considered. If the PR description is empty or says 'fixes bug,' I ask the author to add context before I review the code.",
                    "On the first pass I look at the file-level diff to understand the shape of the change. How many files are touched? Are changes concentrated in one area or scattered across the codebase? A change that touches 15 files across 5 directories is a red flag — it either needs to be split into smaller PRs or there's an abstraction missing.",
                    "I also check if the change is consistent with existing patterns. If the codebase uses custom hooks for data fetching, and this PR introduces a useEffect with a manual fetch call, that's a conversation we need to have regardless of whether the code works.",
                ],
            },
            {
                heading: 'The Second Pass: Implementation Details',
                paragraphs: [
                    "On the second pass I read the code line by line. I'm looking for unnecessary complexity, missing error handling, potential performance issues, and naming that doesn't communicate intent.",
                    "The most valuable review comments I leave are questions, not directives. Instead of saying 'rename this variable,' I ask 'what does processedData contain? A more specific name would help readers understand this function.' Questions invite discussion. Directives invite defensiveness.",
                    "I pay special attention to data flow. Where does the data come from? How is it transformed? Where does it end up? If I can't trace the data flow by reading the code linearly, the code needs restructuring.",
                ],
            },
            {
                heading: 'What I Never Comment On',
                paragraphs: [
                    "I don't comment on formatting, import order, or any issue that a linter or formatter should catch. If your team is arguing about semicolons in PR reviews, you need Prettier, not better reviewers.",
                    "I also avoid nitpicking on purely stylistic preferences when the existing code has no established convention. If both approaches are equally readable and maintainable, I approve and move on. Your opinion about ternaries vs if-else is not worth blocking a deploy.",
                    "The goal is to be the reviewer you wish you had. Thorough but not pedantic. Opinionated but not dogmatic. Focused on the codebase's long-term health, not on proving how smart you are.",
                ],
            },
            {
                heading: 'Reviewing Your Own Code',
                paragraphs: [
                    "Before I submit any PR, I review my own diff in the GitHub UI as if I were reviewing someone else's code. I catch at least one issue every single time — a leftover console.log, a TODO I forgot to address, or a variable name that made sense at 2 AM but doesn't in the morning.",
                    "Self-review is the single highest-leverage habit I've developed as an engineer. It reduces review cycles, catches embarrassing mistakes, and demonstrates professionalism. It takes five minutes and saves hours of back-and-forth.",
                ],
            },
        ],
    },
    {
        slug: 'performance-budgets-that-actually-work',
        title: 'Performance Budgets That Actually Work',
        excerpt:
            'How we enforced performance budgets in CI at CARS24 and Mamaearth — and what happened when we didn\'t.',
        publishedAt: '2026-03-20',
        readTime: '8 min read',
        tags: ['Performance', 'CI/CD'],
        sections: [
            {
                heading: 'Why Performance Budgets Fail',
                paragraphs: [
                    "Every team I've worked with has at some point said 'we should set performance budgets.' Most of them set the budgets, put them in a wiki page, and never looked at them again. The budgets were aspirational, not enforced, and without enforcement they're just documentation.",
                    "Performance budgets fail for three reasons: they're too abstract (nobody knows what '200KB JavaScript budget' means in terms of their daily work), they're not automated (checking requires manual effort), and there are no consequences for exceeding them (the PR merges anyway).",
                ],
            },
            {
                heading: 'Making Budgets Concrete',
                paragraphs: [
                    "At CARS24, we translated abstract budgets into rules engineers could internalize. Instead of 'JavaScript bundle under 200KB,' we said 'no single route should add more than 15KB of new JavaScript.' Instead of 'LCP under 2.5 seconds,' we said 'hero images must be under 100KB and use the AVIF format.'",
                    "We also created a performance budget dashboard that showed each route's current metrics against its budget. Engineers could see at a glance where they stood. When a route was at 90% of its budget, it showed yellow. At 100%, red. This visibility alone changed behavior.",
                    "The most effective budget we set was on third-party scripts. We capped the total number of third-party scripts per page at five and required VP approval to add a new one. This forced product managers to prioritize which analytics and marketing tools actually mattered.",
                ],
            },
            {
                heading: 'Automating Enforcement in CI',
                paragraphs: [
                    "At Mamaearth, we integrated Lighthouse CI into our GitHub Actions pipeline. Every PR ran Lighthouse against the affected pages and compared the results against our budgets. If any metric exceeded the budget, the check failed and the PR couldn't merge.",
                    "We also added a custom webpack plugin that tracked bundle sizes per route. If a PR increased any route's bundle by more than 5KB, it added a comment to the PR with a breakdown of what changed and why. This wasn't a blocking check, but the visibility was enough to make engineers think twice before adding a dependency.",
                    "The key insight is that non-blocking checks are nearly useless. If the PR can still merge, the budget is a suggestion. If you're serious about performance, make the checks blocking and give engineers clear guidance on how to fix failures.",
                ],
            },
            {
                heading: 'Dealing with Budget Overruns',
                paragraphs: [
                    "Budgets will be exceeded. The question is how you handle it. We created an override process: if a PR exceeds the budget, the engineer adds a performance-override label and includes a justification comment explaining why the increase is necessary and what the plan is to bring it back under budget.",
                    "We reviewed overrides in our weekly engineering sync. Most were legitimate — a new feature that genuinely required more JavaScript, or a library upgrade with a temporary size increase. A few were not, and the review process caught them.",
                    "Over six months at CARS24, our JavaScript bundle size decreased by 18% despite shipping new features every week. The budgets didn't prevent growth; they made growth intentional rather than accidental.",
                ],
            },
            {
                heading: 'The Business Case for Performance Budgets',
                paragraphs: [
                    "The hardest part is getting organizational buy-in. Engineering leadership understands why performance matters, but product leadership needs business metrics. At Mamaearth, we ran an A/B test comparing our optimized pages against the pre-budget baseline. The optimized pages had a 6% higher conversion rate and 11% lower bounce rate.",
                    "That data point secured dedicated engineering time for performance work every sprint. Performance budgets went from a nice-to-have to a product requirement. If you're struggling to get buy-in, stop talking about milliseconds and start talking about revenue.",
                ],
            },
        ],
    },
    {
        slug: 'react-native-vs-flutter-production-perspective',
        title: 'React Native vs Flutter: A Production Perspective',
        excerpt:
            'After shipping React Native at Flipkart, here is my honest comparison of both frameworks.',
        publishedAt: '2026-03-28',
        readTime: '9 min read',
        tags: ['React Native', 'Mobile'],
        sections: [
            {
                heading: 'The Context of My Opinion',
                paragraphs: [
                    "I've shipped production React Native apps at Flipkart and built prototypes in Flutter. My experience with RN is significantly deeper, and I want to be upfront about that bias. What follows is an honest comparison based on real production experience with RN and genuine exploration of Flutter, not a fanboy post for either side.",
                    "The question isn't which framework is 'better.' It's which framework is better for your team, your product, and your constraints. Those factors matter more than any benchmark or feature comparison.",
                ],
            },
            {
                heading: 'Developer Experience: RN Wins for Web Teams',
                paragraphs: [
                    "If your team is primarily JavaScript and React developers, React Native is the obvious choice. The mental model transfers directly — components, props, state, hooks, context. Our web engineers at Flipkart were productive in React Native within a week because they already knew 80% of the paradigm.",
                    "Flutter's developer experience is excellent on its own terms. Dart is a pleasant language, the widget system is well-designed, and hot reload is faster than RN's fast refresh. But if your team doesn't know Dart, the ramp-up cost is real. It's not just learning a new language — it's learning a new ecosystem of packages, patterns, and debugging tools.",
                    "For Flipkart, where we have a large pool of React engineers and a small pool of Flutter engineers, the staffing argument alone made RN the pragmatic choice.",
                ],
            },
            {
                heading: 'Performance: Flutter Has the Edge',
                paragraphs: [
                    "Flutter renders to its own canvas using Skia (now Impeller), bypassing the native UI layer entirely. This means consistent 60fps animations and no bridge bottleneck. In my testing, Flutter's animation performance is measurably smoother than RN, especially for complex scroll-heavy UIs.",
                    "React Native's new architecture with the JSI bridge has closed the gap significantly. The old async bridge was a genuine performance problem; the new synchronous interface is much better. But Flutter still has a structural advantage for GPU-intensive UIs because it doesn't go through native views at all.",
                    "For most business apps — forms, lists, navigation, maps — the performance difference is imperceptible. If you're building a graphics-heavy app or a game, Flutter's rendering engine is a real advantage. For a shopping app or a fintech app, it doesn't matter.",
                ],
            },
            {
                heading: 'Native Integration: RN Wins',
                paragraphs: [
                    "At Flipkart, we needed deep integration with native Android and iOS APIs for things like camera, payments, and device management. React Native's bridge to native code is straightforward — you write a native module in Java/Kotlin or Swift/ObjC, expose it to JavaScript, and you're done.",
                    "Flutter's platform channels achieve the same thing but with more boilerplate. The method channel pattern requires you to define a protocol, serialize arguments, and handle errors on both sides. It works, but it's more ceremony for the same result.",
                    "Where RN really shines is the ability to embed RN views inside an existing native app. We have screens in the Flipkart app that are React Native embedded in a native Android shell. Flutter supports this too with FlutterFragment, but in my experience the integration is less seamless.",
                ],
            },
            {
                heading: 'Ecosystem and Long-Term Viability',
                paragraphs: [
                    "React Native is backed by Meta and used in production at thousands of companies. The ecosystem of third-party libraries is vast, if uneven in quality. Flutter is backed by Google, which is both a strength and a concern — Google has a track record of abandoning projects.",
                    "Both frameworks are mature enough for production use. The question is which ecosystem aligns with your team's skills. If you're hiring React developers anyway, RN lets you share talent across web and mobile. If you're building a mobile-first company with a dedicated mobile team, Flutter might give you a more polished mobile experience.",
                    "My advice: pick the framework that matches your team and commit to it. The worst outcome is switching halfway through and paying the migration cost. Both RN and Flutter are good enough — the real risk is indecision.",
                ],
            },
        ],
    },
    {
        slug: 'building-design-systems-teams-actually-adopt',
        title: 'Building Design Systems That Teams Actually Adopt',
        excerpt:
            'Lessons from building component libraries at CARS24 and Flipkart — and why most design systems fail.',
        publishedAt: '2026-04-02',
        readTime: '10 min read',
        tags: ['Design Systems', 'Storybook'],
        sections: [
            {
                heading: 'Why Most Design Systems Fail',
                paragraphs: [
                    "I've built two design systems and used three others. The failure mode is almost always the same: a small team builds a beautiful component library, publishes it to npm, announces it in a company all-hands, and then watches adoption plateau at 30%.",
                    "The problem is never the components. The components are usually well-built and well-documented. The problem is that the design system team optimized for completeness instead of adoption. They built 50 components when the consuming teams needed 12 really good ones.",
                ],
            },
            {
                heading: 'Start with the Components People Actually Need',
                paragraphs: [
                    "At CARS24, I audited our codebase before building a single component. I ran a script that counted how many times each UI pattern appeared across our product. Buttons appeared 847 times. Cards appeared 312 times. Modals appeared 156 times. Custom date pickers appeared 3 times.",
                    "We built the top 15 components first and shipped them as an npm package. Within two weeks, adoption hit 70% because we'd built exactly what teams needed. The remaining 50 components we'd originally planned? Most of them never got built because they weren't needed.",
                    "The lesson: a design system is a product, and like any product, you should start with the highest-impact features. Don't build a date picker until someone asks for one.",
                ],
            },
            {
                heading: 'Developer Experience Is the Product',
                paragraphs: [
                    "At Flipkart, the design system's success was directly proportional to how easy it was to use. We obsessed over the API surface. Every component had sensible defaults, clear prop names, and TypeScript definitions. You could render a functional button with a single prop: label.",
                    "We maintained a Storybook instance with interactive examples for every component and variant. But more importantly, we added a 'Copy Code' button to every story that gave you a ready-to-paste snippet. This reduced the friction from seeing an example to using it in your code to approximately five seconds.",
                    "Documentation is necessary but not sufficient. What matters is the time from 'I need a component' to 'it's working in my code.' Every minute of that journey that you can eliminate is a minute where an engineer isn't tempted to build their own version.",
                ],
            },
            {
                heading: 'Versioning and Breaking Changes',
                paragraphs: [
                    "The CARS24 design system used semantic versioning with a strict policy: no breaking changes in minor or patch releases. Every breaking change required a major version bump, a migration guide, and a two-sprint deprecation window.",
                    "We also maintained two major versions simultaneously — the current version and the previous one. This gave teams time to migrate without being blocked. The cost was maintaining two versions, but the alternative — forcing immediate migration — would have killed adoption.",
                    "One thing I'd do differently: codemods. At Flipkart, we ship automated codemods for every breaking change. You run a script, it updates your imports and prop names, and you're done. This reduced the migration cost from hours to minutes and made teams far more willing to stay on the latest version.",
                ],
            },
            {
                heading: 'Measuring Adoption',
                paragraphs: [
                    "You can't improve what you don't measure. We tracked three metrics for the CARS24 design system: adoption rate (percentage of UI elements using design system components), consistency score (how many custom one-off components exist that duplicate design system functionality), and developer satisfaction (quarterly survey).",
                    "The consistency score was the most actionable metric. When it started creeping up, it meant teams were building custom components instead of using the design system. That was our signal to investigate — sometimes the design system was missing a variant, sometimes the documentation was unclear, and sometimes a team just didn't know the component existed.",
                    "We published these metrics monthly in an internal newsletter. Visibility created accountability, and teams started taking pride in high adoption scores. Gamification works, even for engineers.",
                ],
            },
            {
                heading: 'The Staffing Model That Works',
                paragraphs: [
                    "The biggest mistake companies make with design systems is treating them as a side project. You need dedicated engineers — at least two full-time — to maintain a design system. At CARS24, we started with one engineer dedicating 20% of their time, and the result was predictable: slow progress, outdated docs, and declining trust from consuming teams.",
                    "At Flipkart, we have a dedicated design systems team of four engineers and two designers. They treat the design system like a product with a roadmap, sprint planning, and stakeholder reviews. The difference in quality and adoption is night and day.",
                    "If you can't dedicate full-time engineers to a design system, you're not ready for one. Use a third-party library like Radix or Shadcn and customize it. A well-configured third-party library is better than a half-maintained internal one.",
                ],
            },
        ],
    },
    {
        slug: 'webpack-to-vite-migration-was-it-worth-it',
        title: 'Webpack to Vite Migration: Was It Worth It?',
        excerpt:
            'Real benchmarks from migrating a production app from Webpack 5 to Vite — including the parts that sucked.',
        publishedAt: '2026-04-10',
        readTime: '8 min read',
        tags: ['Webpack', 'Vite'],
        sections: [
            {
                heading: 'Why We Considered Migrating',
                paragraphs: [
                    "At Mamaearth, our Webpack 5 build took 4 minutes and 20 seconds for a production build, and dev server cold start was 45 seconds. Hot module replacement was unpredictable — sometimes instant, sometimes 8 seconds. For a team of 10 engineers, these delays added up to hours of lost productivity per week.",
                    "Vite promised sub-second dev server starts and near-instant HMR. Those promises were enough to justify an investigation, but I was skeptical. Build tool migrations have a way of surfacing every undocumented configuration hack in your codebase.",
                ],
            },
            {
                heading: 'The Migration Process',
                paragraphs: [
                    "The migration took three weeks, which was longer than I expected. The first week was straightforward — replacing webpack.config.js with vite.config.js, updating import syntax, and swapping loaders for Vite plugins. About 70% of the codebase worked out of the box.",
                    "The remaining 30% was painful. We had custom Webpack loaders for SVG sprite generation, environment-specific configuration, and a legacy CSS module setup that used a non-standard naming convention. Each of these required finding or writing a Vite-compatible alternative.",
                    "The hardest part was dealing with CommonJS dependencies. Vite uses native ES modules during development, and several of our older dependencies only shipped CommonJS builds. Vite's pre-bundling with esbuild handled most cases, but a few required manual configuration with optimizeDeps.",
                ],
            },
            {
                heading: 'The Benchmarks',
                paragraphs: [
                    "Dev server cold start dropped from 45 seconds to 1.2 seconds. This alone made the migration worthwhile. Opening the project in the morning went from a coffee-break ritual to an instant start.",
                    "HMR went from an unpredictable 1-8 seconds to a consistent 50-150 milliseconds. The feedback loop for UI development became genuinely instant. Engineers reported feeling more productive within the first day.",
                    "Production build time dropped from 4 minutes 20 seconds to 2 minutes 10 seconds. This was a smaller improvement than I expected, because Vite uses Rollup for production builds, which is fast but not dramatically faster than Webpack 5 for large projects. The real wins were in development, not production.",
                ],
            },
            {
                heading: 'What Surprised Me',
                paragraphs: [
                    "The biggest positive surprise was the reduction in configuration complexity. Our webpack.config.js was 380 lines of carefully curated loaders, plugins, and optimization rules. The equivalent vite.config.js is 65 lines. Less configuration means less surface area for bugs and easier onboarding for new engineers.",
                    "The biggest negative surprise was the difference between development and production behavior. Vite uses esbuild for development and Rollup for production, which means the code paths are different. We found two bugs that only manifested in production builds — a CSS ordering issue and a dynamic import that worked in dev but failed in prod. This gap in behavior is Vite's biggest weakness.",
                ],
            },
            {
                heading: 'Was It Worth It?',
                paragraphs: [
                    "Yes, with caveats. The developer experience improvement was substantial and immediate. The team was happier, more productive, and spent less time waiting for builds. Those are real, measurable benefits.",
                    "But the migration cost was not trivial. Three weeks of engineering time, a handful of production bugs, and a week of post-migration stabilization. If your Webpack setup is working fine and your team isn't complaining about build times, the migration might not be worth the disruption.",
                    "My recommendation: if you're starting a new project, use Vite. If you're maintaining an existing Webpack project, migrate only if build times are a demonstrated productivity bottleneck. Don't migrate for the sake of using new tools.",
                ],
            },
        ],
    },
    {
        slug: 'five-debugging-techniques-that-save-me-hours',
        title: 'The 5 Debugging Techniques That Save Me Hours',
        excerpt:
            'Chrome DevTools, profiling, strategic logging, and other tools I reach for before touching the code.',
        publishedAt: '2026-04-15',
        readTime: '7 min read',
        tags: ['Debugging', 'Performance'],
        sections: [
            {
                heading: 'Debugging Is a Skill, Not a Talent',
                paragraphs: [
                    "Early in my career, I thought good debuggers had some innate ability to see bugs. After five years, I realize they just have better systems. They know where to look first, what tools to use, and how to narrow the search space quickly.",
                    "These five techniques aren't clever tricks. They're systematic approaches that I use almost every day. The goal isn't to find bugs faster — it's to avoid wasting time on dead ends.",
                ],
            },
            {
                heading: 'Technique 1: Binary Search with Git Bisect',
                paragraphs: [
                    "When a bug is reported and I don't know which commit introduced it, git bisect is the fastest path to an answer. It performs a binary search across your commit history, asking you at each step whether the bug is present. For a history of 1000 commits, it finds the culprit in about 10 steps.",
                    "I use this at least twice a month at Flipkart. Last month, a subtle CSS regression appeared in production that nobody could trace to a specific change. Git bisect identified the offending commit in under five minutes — it was an unrelated dependency update that changed a PostCSS plugin version.",
                    "The prerequisite for git bisect is small, atomic commits. If your commits are 500-line monsters that change everything, bisect will identify the commit but you'll still spend an hour finding the bug within it.",
                ],
            },
            {
                heading: 'Technique 2: Performance Profiling Before Guessing',
                paragraphs: [
                    "When something is slow, the temptation is to guess where the bottleneck is and start optimizing. Resist this. Open Chrome DevTools, record a performance profile, and let the data tell you where the time is going.",
                    "I've seen engineers spend days optimizing a React component's render logic only to discover that the actual bottleneck was a synchronous layout calculation in CSS. The profiler would have shown this in 30 seconds.",
                    "The Performance tab in Chrome DevTools shows you a flame chart of everything that happened during the recording. Look for long tasks (yellow blocks over 50ms), forced reflows (purple 'Layout' events), and unnecessary re-renders. The data doesn't lie.",
                ],
            },
            {
                heading: 'Technique 3: Strategic Console Logging',
                paragraphs: [
                    "I know, I know — console.log debugging feels primitive. But used strategically, it's one of the most efficient tools available. The key word is strategic. Don't scatter console.logs randomly. Place them at the boundaries of your system: where data enters, where it's transformed, and where it exits.",
                    "I use a pattern I call 'breadcrumb logging.' At each major decision point in the code, I log the input and the decision. This creates a trail that shows me exactly where the data diverged from my expectations. It's faster than stepping through a debugger for complex async flows.",
                ],
            },
            {
                heading: 'Technique 4: Reproducing in Isolation',
                paragraphs: [
                    "If I can't reproduce a bug in isolation, I don't understand it well enough to fix it. My first step for any non-trivial bug is to create a minimal reproduction — the smallest possible code that exhibits the behavior.",
                    "For UI bugs, I use a blank Next.js project and copy in only the relevant components. For API bugs, I use a REST client with the exact request parameters. The act of isolating often reveals the root cause before I even start debugging, because I discover which dependencies and context are actually necessary for the bug to occur.",
                    "At CARS24, we made 'minimal reproduction' a required field in our bug ticket template. It added 15 minutes to the filing process but saved hours of debugging time because the reproducer eliminated ambiguity about what 'the bug' actually was.",
                ],
            },
            {
                heading: 'Technique 5: Reading the Error, Actually Reading It',
                paragraphs: [
                    "This sounds patronizing, but I mean it sincerely. I regularly see engineers glance at an error message, make an assumption about what's wrong, and start fixing the wrong thing. Read the entire error message. Read the stack trace. Click through to the source line.",
                    "Modern frameworks like Next.js and React have invested heavily in error messages. They tell you what went wrong, why, and often link to documentation with the fix. The answer is frequently in the error message itself, if you take 30 seconds to actually read it.",
                    "The corollary: when you write code that throws errors, write good error messages. Include the expected value, the actual value, and what the developer should check. Your future self will thank you.",
                ],
            },
        ],
    },
    {
        slug: 'writing-tests-that-matter-jest-rtl',
        title: 'Writing Tests That Matter: My Jest + RTL Approach',
        excerpt:
            'A testing philosophy that balances coverage with velocity — no 100% coverage dogma here.',
        publishedAt: '2026-04-20',
        readTime: '8 min read',
        tags: ['Jest', 'React Testing Library'],
        sections: [
            {
                heading: 'The Testing Pyramid Is Wrong for Frontend',
                paragraphs: [
                    "The traditional testing pyramid says you should have lots of unit tests, some integration tests, and a few end-to-end tests. For backend services, this makes sense. For frontend applications, I've found the inverse is more useful: a few unit tests for complex logic, lots of integration tests for user flows, and targeted E2E tests for critical paths.",
                    "The reason is that most frontend bugs aren't logic errors — they're integration errors. A component works perfectly in isolation but breaks when composed with other components, or when the API returns slightly different data than expected. Unit tests for individual components don't catch these issues. Tests that render multiple components together and simulate user interactions do.",
                ],
            },
            {
                heading: 'Test User Behavior, Not Implementation',
                paragraphs: [
                    "React Testing Library enforces this by design, and I love it for that. When I write a test, I write it from the user's perspective. I don't test that a state variable changed — I test that a button appears or disappears. I don't test that a function was called — I test that the UI reflects the result of that function call.",
                    "This approach makes tests resilient to refactoring. I've rewritten component internals from class components to hooks to server components, and the tests passed without modification because they tested what the user sees, not how the component works internally.",
                    "The one exception: custom hooks that contain complex business logic. For these, I use renderHook from RTL to test the hook in isolation. But even then, I test inputs and outputs, not intermediate state.",
                ],
            },
            {
                heading: 'My Testing Strategy by Component Type',
                paragraphs: [
                    "Pure presentational components get snapshot tests and visual regression tests. They have no logic to test — I just need to know if they look wrong.",
                    "Interactive components get integration tests that simulate user interactions: clicks, typing, form submissions. I test the happy path, one error path, and any edge case that's bitten me before. I don't test every possible error — that's diminishing returns.",
                    "Data-fetching components get tests with mocked API responses using MSW (Mock Service Worker). I test loading states, success states, error states, and empty states. MSW intercepts at the network level, so the component code doesn't know it's being tested.",
                    "Complex business logic gets unit tests with Jest. Price calculations, date formatting, validation rules — these are pure functions that deserve thorough test coverage because they're easy to test and expensive to get wrong.",
                ],
            },
            {
                heading: 'The 80% Coverage Sweet Spot',
                paragraphs: [
                    "I've worked in codebases with 95% test coverage and codebases with 40% coverage. The 95% codebase wasn't twice as reliable — it was just harder to modify because every change required updating a dozen tests.",
                    "I aim for 80% line coverage with a focus on covering critical paths. The last 20% of coverage is usually error boundaries, edge cases in UI states, and platform-specific branches that are expensive to test and unlikely to break.",
                    "The metric I actually care about is 'did the tests catch a real bug this month.' If the answer is consistently no, either your tests are testing the wrong things or your code quality is already very high. In my experience, it's usually the former.",
                ],
            },
            {
                heading: 'Making Tests Fast',
                paragraphs: [
                    "Slow tests don't get run. At CARS24, our test suite took 8 minutes, and engineers started skipping it locally and relying on CI. We got it down to 90 seconds by switching from jsdom to @testing-library/react's built-in rendering, parallelizing test files with Jest workers, and replacing heavyweight mocks with lightweight stubs.",
                    "The biggest speed win was eliminating unnecessary rerenders in tests. Many tests triggered component re-renders by updating state unnecessarily. Wrapping state updates in act() and batching related operations cut our test execution time by 40%.",
                    "Fast tests create a virtuous cycle: engineers run them more often, catch bugs earlier, and trust the test suite. Slow tests create a vicious cycle: engineers skip them, bugs reach production, and nobody trusts the tests.",
                ],
            },
        ],
    },
    {
        slug: 'docker-for-frontend-devs-everything-you-need',
        title: 'Docker for Frontend Devs: Everything You Need',
        excerpt:
            'A practical guide to Docker for engineers who mostly write React — no unnecessary DevOps jargon.',
        publishedAt: '2026-04-25',
        readTime: '9 min read',
        tags: ['Docker', 'DevOps'],
        sections: [
            {
                heading: 'Why Frontend Engineers Should Care About Docker',
                paragraphs: [
                    "For the first three years of my career, Docker was something the backend team dealt with. I wrote React, the DevOps team containerized it, and I never thought about it. Then I joined CARS24 where there was no DevOps team, and suddenly I needed to understand containers to ship my code.",
                    "Here's the reality: in 2026, frontend deployment is containerized at most companies. Even if you're deploying to Vercel or Netlify, understanding Docker makes you more versatile and helps you debug deployment issues that would otherwise be opaque.",
                ],
            },
            {
                heading: 'The Only Dockerfile You Need for Next.js',
                paragraphs: [
                    "I've seen Next.js Dockerfiles that are 50 lines long with multiple stages, custom entrypoints, and environment variable gymnastics. For most projects, you need three stages: install dependencies, build the application, and run it.",
                    "The key optimizations: use a node:alpine base image to keep the image small, copy package.json and lockfile before the source code to leverage Docker's layer caching for dependencies, and use Next.js standalone output mode to create a minimal production bundle without node_modules.",
                    "With standalone output, our production image at CARS24 was 120MB compared to 800MB with the standard node_modules approach. The smaller image means faster deployments and lower container registry costs.",
                ],
            },
            {
                heading: 'Docker Compose for Local Development',
                paragraphs: [
                    "Docker Compose is where Docker becomes genuinely useful for frontend development. Instead of asking new engineers to install Node, Redis, PostgreSQL, and Elasticsearch locally, we hand them a docker-compose.yml that spins up the entire stack with a single command.",
                    "At Flipkart, our docker-compose file defines four services: the Next.js dev server with hot reloading (volume-mounted to the host), a Redis instance, a mock API server, and a local S3-compatible storage using MinIO. New engineers go from git clone to a running application in under three minutes.",
                    "The trick for good developer experience is volume mounting your source code into the container so that file changes on your host machine trigger hot reloading inside the container. Without this, you'd need to rebuild the container after every code change, which defeats the purpose.",
                ],
            },
            {
                heading: 'Multi-Stage Builds for Production',
                paragraphs: [
                    "Multi-stage builds are the single most important Docker pattern for frontend applications. The idea is to use one stage for building (which needs dev dependencies, build tools, etc.) and a separate stage for running (which only needs the production output).",
                    "Your build stage installs all dependencies including devDependencies, runs your build command, and produces static assets or a server bundle. Your production stage copies only the build output into a clean image. This means your production image doesn't contain TypeScript, webpack, testing libraries, or anything else that's only needed during build.",
                    "At Mamaearth, switching to multi-stage builds reduced our production image size from 1.2GB to 180MB. The security surface area shrank proportionally because there were fewer packages to have vulnerabilities.",
                ],
            },
            {
                heading: 'Common Pitfalls and How to Avoid Them',
                paragraphs: [
                    "The number one mistake I see frontend engineers make with Docker is running the development server in production. If your Dockerfile ends with npm run dev, your container is running a development server with debugging enabled, source maps included, and no optimization. Use npm run start with a production build.",
                    "The second mistake is not using .dockerignore. Without it, Docker copies your node_modules, .git directory, and every other file into the build context. This slows down builds and can leak secrets into the image. Your .dockerignore should at minimum include node_modules, .git, .env, and any test or documentation directories.",
                    "The third mistake is hardcoding environment variables in the Dockerfile. Use ARG for build-time variables and ENV for runtime variables, and pass values through docker-compose or your deployment platform. Never commit secrets to a Dockerfile.",
                ],
            },
        ],
    },
    {
        slug: 'how-i-prepare-for-system-design-interviews',
        title: 'How I Prepare for System Design Interviews',
        excerpt:
            'As someone who has been on both sides of the table — my honest prep framework.',
        publishedAt: '2026-04-30',
        readTime: '10 min read',
        tags: ['System Design', 'Interviews'],
        sections: [
            {
                heading: 'System Design Interviews Are Conversations',
                paragraphs: [
                    "The biggest misconception about system design interviews is that you need to produce a perfect architecture. You don't. The interviewer wants to see how you think, how you handle ambiguity, and how you make trade-offs. I've passed interviews where my final design had obvious gaps, and I've failed interviews where my design was technically sound but I didn't communicate my reasoning.",
                    "I've conducted over 30 system design interviews at CARS24 and Flipkart. The candidates who stand out are the ones who ask clarifying questions, state their assumptions explicitly, and explain why they're choosing one approach over another. The candidates who struggle are the ones who silently draw boxes on a whiteboard for 20 minutes.",
                ],
            },
            {
                heading: 'My Preparation Framework',
                paragraphs: [
                    "I prepare in three layers. The first layer is foundational knowledge: how does DNS work, what happens when you type a URL, how do databases index, what's the difference between TCP and UDP. If you can't explain these fundamentals, no amount of system design practice will help.",
                    "The second layer is design patterns: load balancing strategies, caching layers, message queues, database sharding, CDN configuration, rate limiting. These are the building blocks you'll assemble during the interview. I maintain a personal document with one-paragraph summaries of each pattern and when to use it.",
                    "The third layer is practice designs. I work through 10-15 classic problems (URL shortener, chat system, news feed, etc.) and 5-10 problems relevant to the company I'm interviewing at. For Flipkart, I practiced e-commerce search, inventory management, and recommendation systems.",
                ],
            },
            {
                heading: 'The Structure That Works',
                paragraphs: [
                    "When I'm in the interview, I follow a consistent structure. First, I clarify requirements and constraints: how many users, what latency is acceptable, is consistency or availability more important, what are the core features vs nice-to-haves. This takes 3-5 minutes and sets the foundation for everything else.",
                    "Next, I sketch the high-level architecture with the major components: clients, load balancer, application servers, database, cache, CDN. I explain each component's role and how they interact. This takes 5-10 minutes.",
                    "Then I deep-dive into two or three areas that are most interesting for the problem — usually the data model, the API design, and one specific technical challenge like real-time updates or search ranking. This is where I demonstrate depth. The remaining time I spend on scaling, monitoring, and addressing trade-offs.",
                ],
            },
            {
                heading: 'Resources I Actually Used',
                paragraphs: [
                    "I'll be honest — I tried reading 'Designing Data-Intensive Applications' cover to cover and gave up at chapter 7. It's an incredible book, but it's dense. Instead, I read the chapters relevant to each practice problem I worked on. Need to design a distributed database? Read the replication and partitioning chapters.",
                    "For pattern recognition, I found the System Design Primer on GitHub and ByteByteGo's resources most helpful. They give you templated approaches that you can internalize and adapt. The key is adapting — don't memorize solutions, understand the reasoning behind them.",
                    "The most underrated preparation is reading engineering blogs from companies you admire. Uber's engineering blog, Netflix's tech blog, and Stripe's engineering articles taught me more about real-world system design than any course. Real systems are messier and more interesting than textbook examples.",
                ],
            },
            {
                heading: 'Common Mistakes From the Interviewer Side',
                paragraphs: [
                    "As an interviewer, the most common mistake I see is jumping into the solution without understanding the problem. If you start designing before you know the scale, the access patterns, and the consistency requirements, you'll make assumptions that lead you down the wrong path.",
                    "The second most common mistake is ignoring failure modes. Every system fails. Your design should address what happens when the database goes down, when the cache is cold, when a service is overloaded. Interviewers notice when you proactively address failure scenarios without being prompted.",
                    "The third mistake is over-engineering. Not every system needs Kafka, Kubernetes, and a microservices architecture. If the problem can be solved with a single server and a PostgreSQL database, say that. The best engineers reach for the simplest solution that meets the requirements.",
                ],
            },
        ],
    },
    {
        slug: 'the-cost-of-javascript-a-deep-dive',
        title: 'The Cost of JavaScript: A Deep Dive',
        excerpt:
            'Bundle analysis, tree-shaking, and how we cut Total Blocking Time by 60% at Mamaearth.',
        publishedAt: '2026-05-02',
        readTime: '9 min read',
        tags: ['Performance', 'Bundle Size'],
        sections: [
            {
                heading: 'JavaScript Is the Most Expensive Resource on the Web',
                paragraphs: [
                    "A 200KB image and 200KB of JavaScript are not equivalent. The image needs to be downloaded and decoded. The JavaScript needs to be downloaded, parsed, compiled, and executed — and during execution, it blocks the main thread, making the page unresponsive.",
                    "At Mamaearth, we had a Total Blocking Time of 1400ms on mobile. Our total JavaScript payload was 680KB compressed. By the time we were done optimizing, we'd cut the payload to 280KB and TBT to 520ms. This is the story of how we got there.",
                ],
            },
            {
                heading: 'Step 1: Understanding What You Ship',
                paragraphs: [
                    "The first step in reducing JavaScript cost is understanding what you're actually shipping. We used webpack-bundle-analyzer to generate a visual treemap of our bundles. The results were eye-opening.",
                    "Lodash accounted for 72KB despite us using only 4 functions. Moment.js with all locales was 67KB — we only needed English. A charting library that rendered one dashboard chart was 95KB. And our own application code? Only 180KB of the 680KB total.",
                    "The lesson: most JavaScript bloat comes from dependencies, not your code. Before optimizing your components, audit your node_modules.",
                ],
            },
            {
                heading: 'Step 2: Tree-Shaking and Dead Code Elimination',
                paragraphs: [
                    "Tree-shaking sounds magical — your bundler automatically removes unused code. In practice, it only works when dependencies use ES module exports and don't have side effects. Many popular libraries fail one or both of these conditions.",
                    "We replaced Lodash with lodash-es and switched our imports from import _ from 'lodash' to import { debounce } from 'lodash-es'. This single change saved 65KB. We replaced Moment.js with date-fns, which is tree-shakeable by design, saving another 50KB.",
                    "For libraries that couldn't be tree-shaken, we used dynamic imports to load them only when needed. The charting library that rendered one dashboard chart was moved behind a dynamic import that loaded only when the user navigated to the dashboard. This removed 95KB from the initial bundle.",
                ],
            },
            {
                heading: 'Step 3: Code Splitting by Route',
                paragraphs: [
                    "Next.js gives you automatic code splitting by page, but shared modules can negate this. If three pages import a component that imports a heavy library, that library ends up in the shared chunk and loads on every page.",
                    "We audited our shared chunks and found that several large components were shared across only two or three pages but were loaded on all pages because they were imported through a barrel export. Moving these imports to direct paths reduced the shared chunk by 40%.",
                    "We also implemented component-level code splitting for heavy interactive elements like image carousels, rich text editors, and map embeds. These components are loaded when they scroll into view using Intersection Observer combined with React.lazy. The user never downloads code for components they don't interact with.",
                ],
            },
            {
                heading: 'Step 4: Compression and Delivery',
                paragraphs: [
                    "After reducing the raw JavaScript size, we optimized how it was delivered. We switched from gzip to Brotli compression, which achieved 15-20% better compression ratios for JavaScript. We served Brotli-compressed static assets from a CDN with long cache headers.",
                    "We also implemented resource hints — preloading critical chunks and prefetching likely next-page chunks. When a user is on the product listing page, we prefetch the product detail page bundle. By the time they click, the JavaScript is already in the browser cache.",
                    "The combined effect of all four steps: JavaScript payload dropped from 680KB to 280KB, TBT dropped from 1400ms to 520ms, and Time to Interactive improved by 2.1 seconds on 4G mobile. The conversion rate on mobile increased by 7% in the month following the optimization.",
                ],
            },
            {
                heading: 'Maintaining the Gains',
                paragraphs: [
                    "Optimization without maintenance is temporary. New features add new JavaScript, and without guardrails the bundle will grow back to its original size within a few months. We implemented the performance budgets I described in my earlier article — CI checks that fail if any route exceeds its JavaScript budget.",
                    "We also added a quarterly bundle audit to our team rituals. Once a quarter, we regenerate the bundle analysis, compare it against the previous quarter, and identify any new bloat. This ritual takes an hour and consistently finds 20-30KB of unnecessary JavaScript that crept in during feature development.",
                ],
            },
        ],
    },
    {
        slug: 'building-accessible-uis-without-slowing-down',
        title: 'Building Accessible UIs Without Slowing Down',
        excerpt:
            'How to ship accessible interfaces in fast-paced teams without treating a11y as an afterthought.',
        publishedAt: '2026-05-05',
        readTime: '7 min read',
        tags: ['Accessibility', 'Frontend'],
        sections: [
            {
                heading: 'The False Trade-Off Between Speed and Accessibility',
                paragraphs: [
                    "I've heard the argument too many times: 'We don't have time for accessibility right now, we'll add it later.' Here's the thing — accessibility added later is three times more expensive than accessibility built in. Retrofitting ARIA labels, keyboard navigation, and screen reader support into an existing component is far harder than building it correctly from the start.",
                    "The good news is that most accessibility work isn't extra work — it's correct work. Using semantic HTML elements, providing alt text, ensuring sufficient color contrast, and supporting keyboard navigation are things you should be doing anyway. The overhead is minimal if you know the patterns.",
                ],
            },
            {
                heading: 'The 80/20 of Web Accessibility',
                paragraphs: [
                    "You don't need to memorize the entire WCAG specification to build accessible UIs. In my experience, fixing five categories of issues addresses 80% of accessibility problems: semantic HTML instead of div soup, keyboard navigation for all interactive elements, sufficient color contrast (4.5:1 for normal text), meaningful alt text for images, and proper form labeling.",
                    "At Flipkart, we ran an automated accessibility audit using axe-core and found 147 issues across our product. 120 of them were color contrast violations and missing alt text. These were fixed in two days by two engineers. The remaining 27 were more complex — focus management in modals, live region announcements, and custom widget ARIA patterns — but even these were achievable within a sprint.",
                ],
            },
            {
                heading: 'Automating Accessibility Checks',
                paragraphs: [
                    "We integrated axe-core into our testing pipeline using jest-axe. Every component test includes an accessibility check that fails if the component violates any WCAG AA rules. This catches issues at the PR level before they reach production.",
                    "We also added the axe browser extension as a recommended tool for all frontend engineers and included an accessibility checklist in our PR template. The checklist has four items: keyboard navigable, screen reader tested, color contrast verified, and focus states visible. It takes 30 seconds to check and catches most issues.",
                    "The key insight is making accessibility checks automatic and cheap. If an engineer has to do extra manual work for accessibility, they'll skip it when they're under pressure. If the test suite catches it, they can't.",
                ],
            },
            {
                heading: 'Patterns That Make Accessibility Easy',
                paragraphs: [
                    "Use native HTML elements whenever possible. A button element gives you keyboard support, focus management, and screen reader announcements for free. A div with an onClick handler gives you none of these, and you'll spend 20 lines of code reimplementing what the browser provides natively.",
                    "For custom components like dropdowns, tabs, and modals, use a headless UI library like Radix UI or React Aria. These libraries handle all the ARIA patterns, keyboard navigation, and focus management for you. Your job is to style them, not to implement the accessibility layer.",
                    "For dynamic content changes, use ARIA live regions to announce updates to screen readers. If a form submission shows a success message, wrap it in an aria-live='polite' container so screen reader users know the submission succeeded. This is a one-line change that makes a huge difference for non-visual users.",
                ],
            },
            {
                heading: 'Making the Business Case',
                paragraphs: [
                    "Accessibility isn't charity — it's good business. In many jurisdictions, web accessibility is a legal requirement. More importantly, accessible interfaces are better interfaces for everyone. Keyboard navigation helps power users. High contrast helps users in bright sunlight. Clear labels help users in a hurry.",
                    "At CARS24, we found that our accessibility improvements correlated with a 4% increase in form completion rates across all users. Clear labels, logical tab order, and visible focus states helped everyone, not just users with disabilities. Accessibility is a proxy for quality. If your UI is accessible, it's probably well-built.",
                ],
            },
        ],
    },
    {
        slug: 'ci-cd-pipelines-that-dont-suck',
        title: "CI/CD Pipelines That Don't Suck",
        excerpt:
            'GitHub Actions patterns, caching strategies, and how we got our pipeline under 5 minutes.',
        publishedAt: '2026-05-08',
        readTime: '8 min read',
        tags: ['CI/CD', 'GitHub Actions'],
        sections: [
            {
                heading: 'The CI Pipeline Nobody Wants to Own',
                paragraphs: [
                    "At every company I've worked at, the CI/CD pipeline is simultaneously the most critical piece of infrastructure and the least loved. It was set up by someone who left two years ago, it's held together by YAML that nobody fully understands, and when it breaks, everyone looks around the room hoping someone else will fix it.",
                    "Over three companies, I've rebuilt CI pipelines from scratch twice and incrementally improved one. Here's what I've learned about building pipelines that are fast, reliable, and maintainable.",
                ],
            },
            {
                heading: 'Speed Is a Feature',
                paragraphs: [
                    "A CI pipeline that takes 20 minutes is a CI pipeline that engineers avoid. They'll batch changes into larger PRs to reduce the number of CI runs, which defeats the purpose of continuous integration. Your pipeline should complete in under 10 minutes, ideally under 5.",
                    "At CARS24, our pipeline was 18 minutes. We got it to 4.5 minutes with three changes: parallelizing lint, type-check, and test jobs instead of running them sequentially; caching node_modules between runs using actions/cache with a hash of the lockfile; and running only the tests affected by changed files using Jest's --changedSince flag.",
                    "The caching alone saved 3 minutes per run by avoiding a clean npm install every time. The parallel jobs saved another 5 minutes by utilizing GitHub Actions' concurrent job execution. And the targeted testing saved 4 minutes by skipping tests for unmodified modules.",
                ],
            },
            {
                heading: 'The Pipeline Structure That Works',
                paragraphs: [
                    "I use a three-stage pipeline: validate, build, and deploy. The validate stage runs in parallel jobs — linting, type checking, unit tests, and accessibility checks. If any job fails, the pipeline stops. No point building if the code doesn't pass basic checks.",
                    "The build stage creates the production bundle and runs integration tests against it. This catches issues that only manifest in the production build — missing environment variables, broken dynamic imports, CSS ordering differences. At Mamaearth, we caught two production bugs per month in this stage that would have otherwise reached users.",
                    "The deploy stage is conditional. For PRs, it deploys to a preview environment. For merges to main, it deploys to staging. For tagged releases, it deploys to production. Each environment has its own configuration, and the pipeline handles the routing automatically.",
                ],
            },
            {
                heading: 'GitHub Actions Patterns I Use Everywhere',
                paragraphs: [
                    "Reusable workflows are the single best feature of GitHub Actions for maintainability. We define our lint, test, and build steps as reusable workflows that every repository calls. When we update the test configuration, we update it once and it propagates to all repos.",
                    "Path-based triggers save CI minutes by only running jobs when relevant files change. Our documentation workflow only runs when .md files change. Our frontend workflow only runs when files in app/ or components/ change. This reduces unnecessary CI runs by about 30%.",
                    "Concurrency groups prevent wasted resources on superseded pushes. If I push three commits in quick succession, only the latest one needs a full CI run. We set concurrency groups per PR so that a new push cancels the in-progress run for the same PR.",
                ],
            },
            {
                heading: 'Monitoring Your Pipeline',
                paragraphs: [
                    "Your CI pipeline needs monitoring just like your production services. We track four metrics: average pipeline duration, failure rate, flaky test rate, and queue wait time. If any of these degrades, we treat it as a bug.",
                    "Flaky tests are the most insidious problem. A test that fails 5% of the time doesn't seem like a big deal until you have 200 tests and your pipeline fails randomly 10% of the time. We quarantine flaky tests into a separate non-blocking job and fix them within the sprint. If they're not fixed within two sprints, we delete them.",
                    "At Flipkart, we built a simple dashboard that shows CI metrics over time. When pipeline duration started creeping up from 4.5 minutes to 7 minutes over a quarter, the dashboard made it visible and we addressed it before it became a problem. Without the dashboard, nobody would have noticed until it hit 15 minutes.",
                ],
            },
        ],
    },
    {
        slug: 'from-sde-i-to-sde-iii-in-four-years',
        title: 'From SDE I to SDE III in 4 Years: What I Learned',
        excerpt:
            'A personal reflection on career growth, from joining Mamaearth as a junior to leading projects at Flipkart.',
        publishedAt: '2026-05-10',
        readTime: '11 min read',
        tags: ['Career', 'Engineering'],
        sections: [
            {
                heading: 'Where I Started',
                paragraphs: [
                    "In 2021, I joined Mamaearth as a frontend engineer right out of college. I knew React at a tutorial level — I could build a todo app but had never seen a production codebase. My first week, I opened the repository and felt genuinely overwhelmed. There were 400 components, a custom build pipeline I didn't understand, and patterns I'd never seen in any course.",
                    "Looking back, that feeling of overwhelm was the most productive state I've ever been in. It forced me to learn quickly, ask questions without ego, and develop systems for managing complexity that I still use today.",
                ],
            },
            {
                heading: 'Year 1: Learning to Ship',
                paragraphs: [
                    "The most important skill I developed in my first year was learning to ship. Not writing perfect code — shipping working features that solve user problems. There's a gap between knowing a framework and building products with it, and the only way to bridge that gap is to build, ship, get feedback, and iterate.",
                    "At Mamaearth, I worked on the product listing pages, collection pages, and eventually led the performance optimization effort that reduced TBT by 60%. That performance work was my breakout project — it was technically challenging, had measurable impact, and gave me visibility across the engineering organization.",
                    "The lesson from year one: find a project that's important but unglamorous — something that senior engineers are too busy for but that has real impact. Performance optimization, test coverage, build tooling. These projects teach you the codebase deeply and demonstrate initiative.",
                ],
            },
            {
                heading: 'Year 2-3: Going Deep at CARS24',
                paragraphs: [
                    "I joined CARS24 as an SDE II and was promoted to SDE III within 18 months. The transition from IC to tech lead was the hardest part of my career. Suddenly, I was responsible not just for my code but for the team's technical decisions, architecture, and mentoring junior engineers.",
                    "The skill that mattered most at this stage was communication. Being able to explain technical trade-offs to product managers, write clear technical specs, and give actionable code review feedback. I spent as much time writing documents and having conversations as I did writing code.",
                    "At CARS24, I led the micro-frontends migration, built the design system, and established our performance budgets. Each project taught me something different: the migration taught me about architecture trade-offs, the design system taught me about developer experience as a product, and the performance work taught me about data-driven engineering.",
                ],
            },
            {
                heading: 'Year 4-5: Scaling Impact at Flipkart',
                paragraphs: [
                    "Joining Flipkart was a step change in scale. The challenges aren't fundamentally different, but the blast radius of every decision is larger. A performance regression doesn't affect thousands of users — it affects millions. A bad architectural decision doesn't slow down one team — it slows down twenty.",
                    "The skill I'm developing now is systems thinking. Understanding how my team's work connects to the broader platform, identifying leverage points where a small effort creates disproportionate impact, and building tools and patterns that other teams can adopt.",
                    "At Flipkart, I work on the React Native applications for internal tools and the OTA update pipeline. The most rewarding work has been mentoring — helping junior engineers develop the same skills that accelerated my career. Teaching forces you to articulate things you've internalized, which deepens your own understanding.",
                ],
            },
            {
                heading: 'What I Wish I Knew Earlier',
                paragraphs: [
                    "First, your technical skills plateau faster than you think. After two years, the marginal return on learning another framework or library is much lower than the return on improving your communication, leadership, and system design skills. Technical depth is necessary but not sufficient for career growth.",
                    "Second, the job market rewards demonstrable impact more than technical sophistication. Nobody cares that you know five state management libraries. They care that you reduced page load time by 40% or improved team velocity by 30%. Quantify your impact and tell that story clearly.",
                    "Third, mentorship matters more than credentials. The senior engineers who invested time in reviewing my code, challenging my assumptions, and pushing me toward harder problems accelerated my growth more than any course or certification. Find those mentors and be that mentor for others.",
                ],
            },
            {
                heading: 'Advice for Engineers Starting Out',
                paragraphs: [
                    "Ship things. It doesn't matter if they're imperfect. The gap between knowing and doing is bridged only by doing. Build side projects, contribute to open source, volunteer for the project nobody wants. Every shipped project teaches you something a tutorial cannot.",
                    "Write about what you learn. Not for an audience — for yourself. Writing crystallizes your understanding and creates a body of work that compounds over time. These articles you're reading? They started as notes I wrote to myself after solving hard problems.",
                    "Be patient but not passive. Career growth isn't linear, and comparing your trajectory to others on Twitter is a recipe for misery. Focus on getting 1% better every day, and trust that the compound effect will be significant over time. Four years ago, I couldn't read a production codebase. Today I design systems that serve millions of users. The gap was bridged one commit at a time.",
                ],
            },
        ],
    },
    {
        slug: 'state-management-in-2026-redux-vs-zustand-vs-signals',
        title: 'State Management in 2026: Redux vs Zustand vs Signals',
        excerpt:
            'A practical comparison from someone who has used all three in production — no hype, just trade-offs.',
        publishedAt: '2026-05-14',
        readTime: '9 min read',
        tags: ['React', 'State Management'],
        sections: [
            {
                heading: 'The State Management Landscape Has Changed',
                paragraphs: [
                    "Five years ago, the answer to 'what should I use for state management' was Redux, and there was no real debate. Today the landscape is genuinely fragmented. Redux Toolkit has dramatically reduced Redux's boilerplate, Zustand has emerged as a lightweight alternative, and Signals (via Preact Signals, Solid, or the TC39 proposal) offer a fundamentally different reactive model.",
                    "I've used Redux at Mamaearth and CARS24, Zustand at Flipkart, and experimented with Signals in side projects. Here's my honest take on when each one makes sense.",
                ],
            },
            {
                heading: 'Redux Toolkit: Still the Enterprise Standard',
                paragraphs: [
                    "Redux gets a bad reputation that's mostly earned by pre-RTK Redux. Old Redux was verbose, required boilerplate action types and reducers, and made simple things complicated. Redux Toolkit fixed most of this. CreateSlice, createAsyncThunk, and the RTK Query data fetching layer make Redux genuinely pleasant to use.",
                    "Where Redux still shines is in large, complex applications with many developers. The enforced patterns — actions, reducers, selectors — create a consistent architecture that scales. At CARS24, our Redux store had 15 slices managed by 4 different teams, and the predictable structure meant any engineer could understand any team's state management without explanation.",
                    "The downside: Redux is still heavy. RTK adds about 11KB to your bundle, and the conceptual overhead of actions, dispatch, selectors, and middleware is real. For a small app or a team of 1-3 engineers, Redux is overkill.",
                ],
            },
            {
                heading: 'Zustand: The Right Tool for Most Projects',
                paragraphs: [
                    "Zustand is what I reach for in new projects at Flipkart. The API is a single create function that returns a hook. There's no provider, no context, no boilerplate. You define a store, export the hook, and use it in your components. The entire API takes 10 minutes to learn.",
                    "At Flipkart, we use Zustand for our React Native app's state management. The store has about 8 slices for things like user preferences, navigation state, and cached API responses. The total Zustand-related code is about 200 lines. The equivalent in Redux would be at least 500.",
                    "Zustand's killer feature is that it doesn't cause unnecessary re-renders. Components only re-render when the specific state they subscribe to changes, not when any part of the store changes. In Redux, you need to write memoized selectors to achieve this. In Zustand, it's the default behavior.",
                    "The downside: Zustand gives you freedom, which means inconsistency across a large team. There's no enforced pattern for async operations, no standard middleware approach, and no built-in dev tools as mature as Redux DevTools. For small to medium teams, this freedom is fine. For large organizations, it can lead to divergent patterns.",
                ],
            },
            {
                heading: 'Signals: The Future, Eventually',
                paragraphs: [
                    "Signals represent a fundamentally different approach to reactivity. Instead of a centralized store that components subscribe to, signals are reactive primitives that automatically track their dependencies and update only the parts of the UI that depend on them.",
                    "In my experiments with Preact Signals for React, the performance characteristics are impressive. Fine-grained reactivity means that a state change in a signal updates only the DOM nodes that reference that signal, bypassing React's reconciliation entirely. For highly interactive UIs, this can be significantly faster than any store-based approach.",
                    "The downside: signals in React are still experimental and somewhat at odds with React's rendering model. React is built around component-level re-rendering; signals operate at a sub-component level. This impedance mismatch creates edge cases around concurrent features and Suspense. I wouldn't use signals in a production React app today, but I'm watching the TC39 proposal closely.",
                ],
            },
            {
                heading: 'My Decision Framework',
                paragraphs: [
                    "For new projects with a small team, I use Zustand. It's fast to set up, easy to learn, and performs well. If the project grows and needs more structure, migrating from Zustand to Redux is straightforward because the concepts are similar.",
                    "For large projects with multiple teams, I use Redux Toolkit. The structure and tooling are worth the overhead when you have 10+ engineers working on the same state layer. RTK Query also eliminates the need for a separate data fetching library, which simplifies the stack.",
                    "For experimental or performance-critical projects, I experiment with Signals. They're not production-ready in the React ecosystem, but they represent the direction the web platform is moving. Understanding them now will pay dividends when they mature.",
                    "The worst choice is no choice — using a mix of useState, useContext, Redux, and ad-hoc solutions in the same project. Pick one approach for global state, one for server state (React Query or RTK Query), and use local component state for everything else. Consistency matters more than picking the theoretically optimal tool.",
                ],
            },
        ],
    },
];

export function getArticleBySlug(slug) {
    return articles.find((a) => a.slug === slug);
}
