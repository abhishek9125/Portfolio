'use client'

import { useState, useEffect } from 'react'
import { RESUME_LINK, CALENDLY_URL, reviewsData } from '@/constants'
import {
    ArrowRight, Download, Sparkles, TrendingUp, Zap,
    Clock, Users, Code2, Rocket, Award, Share2,
    MessageCircle, Globe, Flame,
} from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { RiArrowDownSLine } from 'react-icons/ri'
import HeroMobile from './HeroMobile'
import HeroVisual from './HeroVisual'
import MagneticButton from './MagneticButton'
import ScrollHighlight from './ScrollHighlight'
import Socials from './Socials'
import StatCounter from './StatCounter'
import { Button } from './ui/button'

const headlineVerbs = ['end to end.', 'at scale.', 'that perform.', 'users love.']

const techStack = ['TypeScript', 'React', 'Next.js', 'Node.js', 'React Native', 'AWS', 'GCP', 'Docker']

const companies = ['Flipkart', 'CARS24', 'Mamaearth', 'Honasa', 'BBlunt', 'Aqualogica', 'The Derma Co']

const stats = [
    { end: 5, suffix: '+', label: 'Years building' },
    { end: 17, suffix: '+', label: 'Projects shipped' },
    { end: 4, suffix: '', label: 'Companies' },
]

const highlights = [
    { icon: TrendingUp, metric: '82%', desc: 'infra cost reduction at Flipkart' },
    { icon: Zap, metric: '280%', desc: 'VAS order growth at CARS24' },
]

const achievements = [
    { icon: Globe, value: '100M+', label: 'Users served', desc: 'Across Flipkart & CARS24' },
    { icon: Code2, value: '200K+', label: 'Lines shipped', desc: 'Production code' },
    { icon: Rocket, value: '2 weeks', label: 'Fastest ship', desc: 'Full checkout flow' },
    { icon: Users, value: '4+', label: 'Engineers mentored', desc: 'Junior to mid-level' },
    { icon: Flame, value: '6.9s', label: 'TBT reduced', desc: '8.2s → 1.3s at Mamaearth' },
    { icon: Award, value: '8+', label: 'Products live', desc: 'In production today' },
]

const funFacts = [
    'I once shipped a hotfix from an airport at 3 AM',
    'My first website was an HTML page about cricket',
    'I think in components, not pages',
    'Weekend hobby: exploring coffee shops in Bengaluru',
]

const currentlyBuilding = 'OTA delivery pipeline on GCP with Redis caching'

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    }),
}

const SCROLL_OFFSET = 132

function HeroDesktop() {
    const reduceMotion = useReducedMotion()
    const { scrollY } = useScroll()
    const gridY = useTransform(scrollY, [0, 500], reduceMotion ? [0, 0] : [0, 48])

    const [headlineIdx, setHeadlineIdx] = useState(0)
    const [reviewIdx, setReviewIdx] = useState(0)
    const [factIdx, setFactIdx] = useState(0)
    const [currentTime, setCurrentTime] = useState('')

    useEffect(() => {
        const update = () =>
            setCurrentTime(
                new Date().toLocaleTimeString('en-IN', {
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZone: 'Asia/Kolkata',
                    hour12: true,
                })
            )
        update()
        const id = setInterval(update, 30_000)
        return () => clearInterval(id)
    }, [])

    useEffect(() => {
        if (reduceMotion) return
        const id = setInterval(() => setHeadlineIdx((i) => (i + 1) % headlineVerbs.length), 3000)
        return () => clearInterval(id)
    }, [reduceMotion])

    useEffect(() => {
        const id = setInterval(() => setReviewIdx((i) => (i + 1) % reviewsData.length), 5000)
        return () => clearInterval(id)
    }, [])

    useEffect(() => {
        const id = setInterval(() => setFactIdx((i) => (i + 1) % funFacts.length), 4000)
        return () => clearInterval(id)
    }, [])

    const scrollToAbout = () => {
        const el = document.getElementById('about')
        if (!el) return
        const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET
        window.scrollTo({ top, behavior: 'smooth' })
    }

    const handleShare = async () => {
        const data = { title: 'Abhishek Agarwal — Full-Stack Engineer', url: 'https://abhishekagarwal.me' }
        try {
            if (navigator.share) await navigator.share(data)
            else await navigator.clipboard.writeText(data.url)
        } catch {}
    }

    return (
        <section className="hidden sm:block relative overflow-hidden py-6 xl:pt-6 xl:pb-8">
            <div className="absolute inset-0 bg-[#fef9f5] dark:bg-background" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,hsl(var(--primary)/0.18),transparent)]" />
            <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-primary/8 blur-3xl" />
            <motion.div
                style={{ y: gridY }}
                className="absolute inset-0 opacity-[0.35] dark:opacity-[0.12] pointer-events-none hidden md:block"
                aria-hidden
            >
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
                        backgroundSize: '48px 48px',
                    }}
                />
            </motion.div>

            <div className="container mx-auto relative z-10">
                {/* ── Main two-column hero ── */}
                <div className="grid xl:grid-cols-2 gap-8 xl:gap-10 items-center">
                    <div className="text-center xl:text-left">
                        <motion.div
                            custom={0} variants={fadeUp} initial="hidden" animate="visible"
                            className="inline-flex flex-wrap items-center justify-center xl:justify-start gap-2 mb-4"
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/5 text-primary text-sm font-medium">
                                <Sparkles size={14} className="shrink-0" />
                                SDE II @ Flipkart · Bengaluru
                            </span>
                            <span className="text-xs px-3 py-1 rounded-full bg-secondary/10 dark:bg-white/10 text-muted-foreground border border-border/60">
                                Currently building OTA &amp; e-commerce platforms
                            </span>
                        </motion.div>

                        {/* Typing headline */}
                        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="h1 mb-4">
                            I build products{' '}
                            <span className="text-primary">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={headlineIdx}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -12 }}
                                        transition={{ duration: 0.35 }}
                                        className="inline-block"
                                    >
                                        {headlineVerbs[headlineIdx]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </motion.h1>

                        <motion.div
                            custom={2} variants={fadeUp} initial="hidden" animate="visible"
                            className="mb-6"
                        >
                            <ScrollHighlight
                                text="Full-stack engineer with 5+ years turning complex ideas into fast, reliable software — from React & React Native interfaces to Node.js APIs and cloud infrastructure."
                                className="subtitle max-w-xl mx-auto xl:mx-0"
                            />
                        </motion.div>

                        <motion.div
                            custom={3} variants={fadeUp} initial="hidden" animate="visible"
                            className="flex flex-wrap justify-center xl:justify-start gap-2 mb-6"
                        >
                            {techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 text-sm rounded-full border border-border/80 bg-white/70 dark:bg-secondary/50 text-foreground/80"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>

                        {/* CTAs + Calendly */}
                        <motion.div
                            custom={4} variants={fadeUp} initial="hidden" animate="visible"
                            className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center xl:justify-start mb-6"
                        >
                            <MagneticButton>
                                <Link href="/contact">
                                    <Button className="btn-glow gap-x-2 w-full sm:w-auto h-[52px] px-8">
                                        Let&apos;s work together
                                        <ArrowRight size={18} />
                                    </Button>
                                </Link>
                            </MagneticButton>
                            <MagneticButton>
                                <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" className="gap-x-2 w-full sm:w-auto h-[52px] px-8 bg-white/50 dark:bg-secondary/30">
                                        Download CV <Download size={18} />
                                    </Button>
                                </a>
                            </MagneticButton>
                            {CALENDLY_URL && (
                                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                                    <Button variant="ghost" className="gap-x-2 w-full sm:w-auto h-[52px] px-6 border border-border/50">
                                        <Clock size={16} />
                                        Book a 15-min call
                                    </Button>
                                </a>
                            )}
                        </motion.div>

                        {/* Socials + timezone */}
                        <motion.div
                            custom={5} variants={fadeUp} initial="hidden" animate="visible"
                            className="flex items-center justify-center xl:justify-start gap-6 mb-6"
                        >
                            <Socials
                                containerStyles="flex gap-x-5"
                                iconStyles="text-foreground text-[22px] hover:text-primary hover:scale-110 transition-all duration-200"
                            />
                            {currentTime && (
                                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                    <Clock size={12} />
                                    {currentTime} IST
                                </span>
                            )}
                        </motion.div>

                        <motion.div
                            custom={6} variants={fadeUp} initial="hidden" animate="visible"
                            className="grid grid-cols-3 gap-3 max-w-md mx-auto xl:mx-0"
                        >
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-2xl border border-border/60 bg-white/60 dark:bg-secondary/40 backdrop-blur-sm px-4 py-4 text-center"
                                >
                                    <StatCounter end={stat.end} suffix={stat.suffix} label={stat.label} />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        className="hidden md:block"
                    >
                        <HeroVisual />
                    </motion.div>
                </div>

                {/* ── Built-at company strip ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-8 text-center"
                >
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
                        Built products at
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mb-1">
                        {companies.map((name) => (
                            <span
                                key={name}
                                className="px-3 py-1 text-xs font-medium rounded-md bg-white/70 dark:bg-secondary/40 text-foreground/65 border border-border/50"
                            >
                                {name}
                            </span>
                        ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                        Products serving <span className="font-semibold text-foreground/80">100M+</span> users
                    </p>
                </motion.div>

                {/* ── Impact highlights ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-wrap justify-center gap-4 mt-6"
                >
                    {highlights.map(({ icon: Icon, metric, desc }) => (
                        <div
                            key={metric}
                            className="flex items-center gap-3 rounded-xl border border-border/50 bg-white/60 dark:bg-secondary/30 backdrop-blur-sm px-5 py-3"
                        >
                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                <Icon size={18} className="text-primary" />
                            </div>
                            <p className="text-sm leading-snug">
                                <span className="font-bold text-primary">{metric}</span>{' '}
                                <span className="text-foreground/80">{desc}</span>
                            </p>
                        </div>
                    ))}
                </motion.div>

                {/* ── Achievement grid ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-6 max-w-4xl mx-auto"
                >
                    {achievements.map(({ icon: Icon, value, label, desc }) => (
                        <div
                            key={label}
                            className="rounded-2xl border border-border/50 bg-white/50 dark:bg-secondary/30 backdrop-blur-sm p-4 text-center transition-colors hover:border-primary/25"
                        >
                            <Icon size={18} className="text-primary mx-auto mb-2" />
                            <p className="text-lg font-bold text-foreground leading-none">{value}</p>
                            <p className="text-xs font-semibold text-foreground/70 mt-1">{label}</p>
                            <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">{desc}</p>
                        </div>
                    ))}
                </motion.div>

                {/* ── Testimonial carousel ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-2xl mx-auto mt-6 rounded-2xl border border-border/50 bg-white/50 dark:bg-secondary/30 backdrop-blur-sm px-6 py-5"
                >
                    <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground font-medium mb-3 text-center">
                        What colleagues say
                    </p>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={reviewIdx}
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -12 }}
                            transition={{ duration: 0.35 }}
                            className="text-center"
                        >
                            <p className="text-sm text-foreground/80 leading-relaxed italic max-w-lg mx-auto">
                                &ldquo;{reviewsData[reviewIdx].review}&rdquo;
                            </p>
                            <p className="text-xs font-medium text-foreground/60 mt-3">
                                — {reviewsData[reviewIdx].name}, {reviewsData[reviewIdx].job}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                {/* ── Currently building + fun fact + ask + share ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 max-w-4xl mx-auto"
                >
                    <div className="rounded-xl border border-border/50 bg-white/50 dark:bg-secondary/30 px-4 py-3">
                        <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-medium mb-1">
                            Currently building
                        </p>
                        <p className="text-xs text-foreground/80 leading-snug">{currentlyBuilding}</p>
                    </div>
                    <div className="rounded-xl border border-border/50 bg-white/50 dark:bg-secondary/30 px-4 py-3 overflow-hidden">
                        <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-medium mb-1">
                            Fun fact
                        </p>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={factIdx}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-xs text-foreground/80 leading-snug"
                            >
                                {funFacts[factIdx]}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                    <a
                        href="mailto:abhishek4075@gmail.com?subject=Quick%20question%20from%20your%20portfolio"
                        className="rounded-xl border border-border/50 bg-white/50 dark:bg-secondary/30 px-4 py-3 flex items-center gap-2 hover:border-primary/30 transition-colors cursor-pointer"
                    >
                        <MessageCircle size={16} className="text-primary shrink-0" />
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-medium">Ask</p>
                            <p className="text-xs text-foreground/80">Ask me anything</p>
                        </div>
                    </a>
                    <button
                        type="button"
                        onClick={handleShare}
                        className="rounded-xl border border-border/50 bg-white/50 dark:bg-secondary/30 px-4 py-3 flex items-center gap-2 hover:border-primary/30 transition-colors cursor-pointer text-left"
                    >
                        <Share2 size={16} className="text-primary shrink-0" />
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-medium">Share</p>
                            <p className="text-xs text-foreground/80">Share my profile</p>
                        </div>
                    </button>
                </motion.div>

                {/* ── Scroll CTA ── */}
                <button
                    type="button"
                    onClick={scrollToAbout}
                    className="flex flex-col items-center mt-6 mx-auto group cursor-pointer bg-transparent border-0"
                    aria-label="Scroll to about section"
                >
                    <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1 group-hover:text-primary transition-colors">
                        Explore
                    </span>
                    <RiArrowDownSLine className={`text-2xl text-primary ${reduceMotion ? '' : 'animate-bounce'}`} />
                </button>
            </div>
        </section>
    )
}

function Hero() {
    return (
        <>
            <HeroMobile />
            <HeroDesktop />
        </>
    )
}

export default Hero
