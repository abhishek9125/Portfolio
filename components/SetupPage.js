'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionReveal from './SectionReveal'
import {
    Monitor, Laptop, Headphones, Mouse, Keyboard, Smartphone,
    Code2, Terminal, GitBranch, Layers, Palette, Globe,
    Database, Cloud, Container, TestTube,
    Figma, Chrome, Music, MessageSquare, Kanban, BookOpen,
} from 'lucide-react'

const categories = [
    {
        id: 'hardware',
        label: 'Hardware',
        icon: Laptop,
        items: [
            {
                name: 'MacBook Pro 14"',
                detail: 'M3 Pro · 18GB RAM · 512GB SSD',
                desc: 'Primary machine. Handles heavy builds, Docker containers, and simulators without breaking a sweat.',
                icon: Laptop,
            },
            {
                name: 'Dell UltraSharp 27" 4K',
                detail: 'U2723QE · USB-C · IPS',
                desc: 'External display for multi-window workflows — code on left, browser on right, terminal at the bottom.',
                icon: Monitor,
            },
            {
                name: 'Keychron K2 V2',
                detail: 'Mechanical · Gateron Brown · Wireless',
                desc: 'The tactile feedback keeps me in flow. Hot-swappable switches are a bonus.',
                icon: Keyboard,
            },
            {
                name: 'Logitech MX Master 3S',
                detail: 'Wireless · USB-C · Multi-device',
                desc: 'Thumb wheel for horizontal scrolling and per-app customization. A must for productivity.',
                icon: Mouse,
            },
            {
                name: 'Sony WH-1000XM5',
                detail: 'ANC · Bluetooth 5.2 · 30hr battery',
                desc: 'Noise cancellation is non-negotiable in open offices. These are my focus mode trigger.',
                icon: Headphones,
            },
            {
                name: 'iPhone 15 Pro',
                detail: 'For React Native testing',
                desc: 'Real device testing for RN apps. Also my daily driver for notifications and quick reviews.',
                icon: Smartphone,
            },
        ],
    },
    {
        id: 'editor',
        label: 'Editor & Terminal',
        icon: Code2,
        items: [
            {
                name: 'Cursor',
                detail: 'Primary editor · AI-powered',
                desc: 'VS Code fork with AI superpowers. Tab completion, inline edits, and agent mode have changed how I code.',
                icon: Code2,
            },
            {
                name: 'iTerm2 + Oh My Zsh',
                detail: 'Terminal · Powerlevel10k theme',
                desc: 'Split panes, hotkey window, and a beautiful prompt. I live in the terminal for git, Docker, and scripts.',
                icon: Terminal,
            },
            {
                name: 'GitHub Copilot',
                detail: 'AI pair programmer',
                desc: 'Great for boilerplate, test generation, and rubber-ducking through complex logic.',
                icon: Code2,
            },
            {
                name: 'JetBrains Mono',
                detail: 'Editor font · Ligatures enabled',
                desc: 'Clean, readable, and the ligatures for =>, !==, and => make code scan faster.',
                icon: Code2,
            },
        ],
    },
    {
        id: 'devtools',
        label: 'Dev Tools',
        icon: GitBranch,
        items: [
            {
                name: 'Git + GitHub',
                detail: 'Version control · PRs · Actions',
                desc: 'Conventional commits, feature branches, and squash merges. GitHub Actions for CI/CD.',
                icon: GitBranch,
            },
            {
                name: 'Docker Desktop',
                detail: 'Containerization',
                desc: 'Local dev environments that mirror production. Redis, Postgres, and services in containers.',
                icon: Container,
            },
            {
                name: 'Postman',
                detail: 'API development · Testing',
                desc: 'Collections for every project. Environment variables, pre-request scripts, and team sharing.',
                icon: Globe,
            },
            {
                name: 'React DevTools',
                detail: 'Component profiling',
                desc: 'Profiler tab is invaluable for finding unnecessary re-renders and optimizing component trees.',
                icon: Layers,
            },
            {
                name: 'Chrome DevTools',
                detail: 'Performance · Network · Lighthouse',
                desc: 'Performance tab recordings, coverage analysis, and Lighthouse audits are part of my daily workflow.',
                icon: Chrome,
            },
            {
                name: 'Jest + React Testing Library',
                detail: 'Testing framework',
                desc: 'Unit and integration tests. I test behavior, not implementation details.',
                icon: TestTube,
            },
        ],
    },
    {
        id: 'cloud',
        label: 'Cloud & Infra',
        icon: Cloud,
        items: [
            {
                name: 'GCP Console',
                detail: 'Cloud Functions · Storage · Monitoring',
                desc: 'Primary cloud at Flipkart. Cloud Functions for serverless, GCS for assets, Cloud Monitoring for alerts.',
                icon: Cloud,
            },
            {
                name: 'AWS Console',
                detail: 'S3 · CloudFront · Lambda',
                desc: 'Used at CARS24 and Mamaearth. S3 + CloudFront for CDN, Lambda for edge functions.',
                icon: Cloud,
            },
            {
                name: 'Redis (Upstash / Elasticache)',
                detail: 'Caching · Session store',
                desc: 'Cache-first patterns for API responses, OTA bundles, and session management.',
                icon: Database,
            },
            {
                name: 'Vercel',
                detail: 'Frontend deployment',
                desc: 'This portfolio runs on Vercel. Preview deployments, edge functions, and analytics built in.',
                icon: Globe,
            },
        ],
    },
    {
        id: 'design',
        label: 'Design & Docs',
        icon: Palette,
        items: [
            {
                name: 'Figma',
                detail: 'UI/UX · Design handoff',
                desc: 'I read Figma fluently. Inspect mode for spacing, colors, and assets. Dev mode for CSS extraction.',
                icon: Figma,
            },
            {
                name: 'Storybook',
                detail: 'Component documentation',
                desc: 'Published a shared UI library at CARS24 with Storybook. Visual testing and interactive docs.',
                icon: BookOpen,
            },
            {
                name: 'Notion',
                detail: 'Notes · Docs · Knowledge base',
                desc: 'Architecture decisions, sprint notes, debugging logs. My second brain for engineering context.',
                icon: BookOpen,
            },
            {
                name: 'Excalidraw',
                detail: 'Whiteboarding · Architecture diagrams',
                desc: 'Quick system design sketches, data flow diagrams, and brainstorming. Feels like a real whiteboard.',
                icon: Palette,
            },
        ],
    },
    {
        id: 'productivity',
        label: 'Productivity',
        icon: Kanban,
        items: [
            {
                name: 'Raycast',
                detail: 'Launcher · Snippets · Clipboard',
                desc: 'Replaced Spotlight entirely. Window management, snippets, and custom scripts on Cmd+Space.',
                icon: Terminal,
            },
            {
                name: 'Arc Browser',
                detail: 'Primary browser',
                desc: 'Spaces for work/personal, split view, and the command bar. Chrome DevTools still accessible.',
                icon: Chrome,
            },
            {
                name: 'Slack',
                detail: 'Team communication',
                desc: 'Threads, huddles, and workflow automations. Custom status for deep work blocks.',
                icon: MessageSquare,
            },
            {
                name: 'Linear',
                detail: 'Project management',
                desc: 'Fast, keyboard-driven, and built for engineers. Cycles, views, and GitHub integration.',
                icon: Kanban,
            },
            {
                name: 'Spotify',
                detail: 'Focus music',
                desc: 'Lo-fi beats, film scores, and ambient playlists. Music is part of my focus ritual.',
                icon: Music,
            },
        ],
    },
]

const fadeItem = {
    hidden: { opacity: 0, y: 12 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    }),
}

export default function SetupPage() {
    const [activeCategory, setActiveCategory] = useState('hardware')
    const active = categories.find((c) => c.id === activeCategory)

    return (
        <section className="section-padding pt-4 sm:pt-6">
            <div className="container mx-auto">
                {/* Header */}
                <SectionReveal>
                    <div className="text-center mb-10 max-sm:mb-8">
                        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                            Tools of the trade
                        </p>
                        <h1 className="h1 mb-4">My Setup</h1>
                        <p className="subtitle max-w-lg mx-auto">
                            The hardware, software, and tools that power my daily workflow as a full-stack engineer.
                        </p>
                    </div>
                </SectionReveal>

                {/* Category tabs */}
                <SectionReveal delay={0.1}>
                    <div className="flex flex-wrap justify-center gap-2 mb-10 max-sm:mb-8">
                        {categories.map((cat) => {
                            const Icon = cat.icon
                            return (
                                <button
                                    key={cat.id}
                                    type="button"
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                        activeCategory === cat.id
                                            ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                                            : 'bg-white/60 dark:bg-secondary/40 text-muted-foreground border border-border/50 hover:border-primary/25 hover:text-foreground'
                                    }`}
                                >
                                    <Icon size={14} />
                                    <span className="max-sm:hidden">{cat.label}</span>
                                    <span className="sm:hidden">{cat.label.split(' ')[0]}</span>
                                </button>
                            )
                        })}
                    </div>
                </SectionReveal>

                {/* Items grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
                    >
                        {active?.items.map((item, i) => {
                            const Icon = item.icon
                            return (
                                <motion.div
                                    key={item.name}
                                    custom={i}
                                    variants={fadeItem}
                                    initial="hidden"
                                    animate="visible"
                                    className="group rounded-2xl border border-border/60 bg-white/60 dark:bg-secondary/30 backdrop-blur-sm p-5 transition-all duration-300 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
                                >
                                    <div className="flex items-start gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                                            <Icon size={20} className="text-primary" />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="font-semibold text-[15px] leading-snug">{item.name}</h3>
                                            <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                                                {item.detail}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </AnimatePresence>

                {/* Footer note */}
                <SectionReveal delay={0.2}>
                    <p className="text-center text-xs text-muted-foreground mt-12 max-w-md mx-auto leading-relaxed">
                        This setup evolves constantly. I optimize for focus, speed, and reliability — anything that removes friction between thinking and shipping.
                    </p>
                </SectionReveal>
            </div>
        </section>
    )
}
