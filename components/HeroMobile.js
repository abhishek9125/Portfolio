'use client'

import { useState, useEffect } from 'react'
import { RESUME_LINK } from '@/constants'
import { ArrowRight, Download, Sparkles, TrendingUp, Zap, Clock, MessageCircle, Share2 } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { RiArrowDownSLine } from 'react-icons/ri'
import Socials from './Socials'
import StatCounter from './StatCounter'
import { Button } from './ui/button'

const headlineVerbs = ['end to end.', ' at big scale.', 'that perform.', 'users love.']

const career = [
    { company: 'Mamaearth', period: "'21–'24" },
    { company: 'CARS24', period: "'24–'25" },
    { company: 'Flipkart', period: "'25–now", active: true },
]

const stats = [
    { end: 5, suffix: '+', label: 'Years building' },
    { end: 17, suffix: '+', label: 'Projects shipped' },
    { end: 4, suffix: '', label: 'Companies' },
]

const highlights = [
    { icon: TrendingUp, metric: '82%', desc: 'Cost Reduction for Codepush @ Flipkart' },
    { icon: Zap, metric: '74%', desc: 'Performance Boost @ MamaEarth' },
]

const funFacts = [
    'I once shipped a hotfix from an airport at 3 AM',
    'My first website was an HTML page about cricket',
    'I think in components, not pages',
    'Weekend hobby: exploring coffee shops in Bengaluru',
]

const currentlyBuilding = 'OTA delivery pipeline on GCP with Redis caching'

const fade = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    }),
}

const SCROLL_OFFSET = 112

function HeroMobile() {
    const reduceMotion = useReducedMotion()
    const [headlineIdx, setHeadlineIdx] = useState(0)
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
        const id = setInterval(() => setFactIdx((i) => (i + 1) % funFacts.length), 4000)
        return () => clearInterval(id)
    }, [])

    const handleShare = async () => {
        const data = { title: 'Abhishek Agarwal — Full-Stack Engineer', url: 'https://abhishekagarwal.info' }
        try {
            if (navigator.share) await navigator.share(data)
            else await navigator.clipboard.writeText(data.url)
        } catch {}
    }

    const scrollToAbout = () => {
        const el = document.getElementById('about')
        if (!el) return
        const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET
        window.scrollTo({ top, behavior: 'smooth' })
    }

    return (
        <section className="sm:hidden relative overflow-hidden" aria-label="Introduction">
            <div className="absolute inset-0 bg-[#fef9f5] dark:bg-background" />
            <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,hsl(var(--primary)/0.14),transparent)]"
                aria-hidden
            />
            <motion.div
                className="absolute top-16 left-1/2 -translate-x-1/2 w-[70%] h-40 rounded-full bg-primary/10 blur-3xl pointer-events-none"
                aria-hidden
                animate={reduceMotion ? undefined : { opacity: [0.3, 0.5, 0.3], scale: [1, 1.06, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative z-10 px-5 pt-5 pb-3">
                {/* Status badges */}
                <motion.div
                    custom={0} variants={fade} initial="hidden" animate="visible"
                    className="flex flex-wrap justify-center gap-2 mb-4"
                >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium">
                        <Sparkles size={12} className="shrink-0" />
                        SDE II @ Flipkart
                    </span>
                    {/* <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary/10 dark:bg-white/10 text-muted-foreground text-[11px] border border-border/50">
                        Building OTA &amp; e-commerce platforms
                    </span> */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] border border-emerald-500/20">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                        </span>
                        Open to opportunities
                    </span>
                </motion.div>

                {/* Typing headline */}
                <motion.h1
                    custom={1} variants={fade} initial="hidden" animate="visible"
                    className="text-[2rem] leading-[1.1] font-bold tracking-[-0.03em] text-center mb-3"
                >
                    I build products{' '}
                    <span className="text-primary">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={headlineIdx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="inline-block"
                            >
                                {headlineVerbs[headlineIdx]}
                            </motion.span>
                        </AnimatePresence>
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    custom={2} variants={fade} initial="hidden" animate="visible"
                    className="text-[14px] leading-relaxed text-muted-foreground text-center max-w-[320px] mx-auto mb-4"
                >
                    Full-stack engineer with 5+ years turning complex ideas into fast, reliable software — from React interfaces to Node.js APIs and cloud infra.
                </motion.p>

                {/* Career progression */}
                <motion.div
                    custom={3} variants={fade} initial="hidden" animate="visible"
                    className="flex items-center justify-center gap-0 mb-5"
                >
                    {career.map((c, i) => (
                        <div key={c.company} className="flex items-center">
                            <div className={`text-center px-3 py-1.5 rounded-full border ${
                                c.active
                                    ? 'border-primary/30 bg-primary/8 text-primary'
                                    : 'border-border/60 bg-white/50 dark:bg-secondary/30 text-foreground/70'
                            }`}>
                                <p className="text-[12px] font-semibold leading-none">{c.company}</p>
                                <p className="text-[10px] text-muted-foreground leading-none mt-0.5">{c.period}</p>
                            </div>
                            {i < career.length - 1 && (
                                <div className="w-5 h-px bg-border dark:bg-white/15 mx-0.5" />
                            )}
                        </div>
                    ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                    custom={4} variants={fade} initial="hidden" animate="visible"
                    className="flex gap-2.5 mb-5"
                >
                    <Link href="/contact" className="flex-1 min-w-0">
                        <Button className="btn-glow w-full h-12 gap-1.5 text-[15px] font-medium">
                            Let&apos;s talk
                            <ArrowRight className="w-4 h-4 shrink-0" />
                        </Button>
                    </Link>
                    <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-0">
                        <Button variant="outline" className="w-full h-12 gap-1.5 text-[15px] font-medium bg-white/50 dark:bg-secondary/30">
                            Resume
                            <Download className="w-4 h-4 shrink-0" />
                        </Button>
                    </a>
                </motion.div>

                {/* Socials + clock */}
                {/* <motion.div
                    custom={5} variants={fade} initial="hidden" animate="visible"
                    className="flex items-center justify-between mb-5 px-2"
                >
                    <Socials
                        containerStyles="flex gap-x-4"
                        iconStyles="text-foreground/60 text-lg hover:text-primary transition-colors duration-200"
                    />
                    {currentTime && (
                        <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                            <Clock size={11} />
                            {currentTime} IST
                        </span>
                    )}
                </motion.div> */}

                {/* Stats */}
                <motion.div
                    custom={6} variants={fade} initial="hidden" animate="visible"
                    className="grid grid-cols-3 gap-2 mb-4"
                >
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-2xl border border-border/50 bg-white/50 dark:bg-secondary/30 backdrop-blur-sm px-3 py-3 text-center"
                        >
                            <StatCounter end={stat.end} suffix={stat.suffix} label={stat.label} />
                        </div>
                    ))}
                </motion.div>

                {/* Impact highlights */}
                <motion.div
                    custom={7} variants={fade} initial="hidden" animate="visible"
                    className="space-y-2 mb-4"
                >
                    {highlights.map(({ icon: Icon, metric, desc }) => (
                        <div
                            key={metric}
                            className="flex items-center gap-3 rounded-xl border border-border/50 bg-white/60 dark:bg-secondary/30 backdrop-blur-sm px-3.5 py-3"
                        >
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                <Icon size={16} className="text-primary" />
                            </div>
                            <p className="text-[13px] leading-snug">
                                <span className="font-bold text-primary">{metric}</span>{' '}
                                <span className="text-foreground/80">{desc}</span>
                            </p>
                        </div>
                    ))}
                </motion.div>

                {/* Currently building + fun fact */}
                <motion.div
                    custom={8} variants={fade} initial="hidden" animate="visible"
                    className="grid grid-cols-2 gap-2 mb-4"
                >
                    <div className="rounded-xl border border-border/50 bg-white/50 dark:bg-secondary/30 px-3 py-2.5">
                        <p className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground font-medium mb-1">
                            Currently building
                        </p>
                        <p className="text-[11px] text-foreground/80 leading-snug">{currentlyBuilding}</p>
                    </div>
                    <div className="rounded-xl border border-border/50 bg-white/50 dark:bg-secondary/30 px-3 py-2.5 overflow-hidden">
                        <p className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground font-medium mb-1">
                            Fun fact
                        </p>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={factIdx}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-[11px] text-foreground/80 leading-snug"
                            >
                                {funFacts[factIdx]}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Ask + share */}
                <motion.div
                    custom={9} variants={fade} initial="hidden" animate="visible"
                    className="flex gap-2 mb-4"
                >
                    <a
                        href="mailto:abhishek4075@gmail.com?subject=Quick%20question%20from%20your%20portfolio"
                        className="flex-1"
                    >
                        <Button
                            variant="ghost"
                            className="w-full h-10 text-xs border border-border/50 bg-white/40 dark:bg-secondary/20 gap-1.5"
                        >
                            <MessageCircle size={14} />
                            Ask me anything
                        </Button>
                    </a>
                    <Button
                        variant="ghost"
                        onClick={handleShare}
                        className="flex-1 h-10 text-xs border border-border/50 bg-white/40 dark:bg-secondary/20 gap-1.5"
                    >
                        <Share2 size={14} />
                        Share my profile
                    </Button>
                </motion.div>

                {/* Scroll CTA */}
                <button
                    type="button"
                    onClick={scrollToAbout}
                    className="flex flex-col items-center pt-1 pb-1 mx-auto group bg-transparent border-0"
                    aria-label="Scroll to about section"
                >
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors mb-0.5">
                        Explore
                    </span>
                    <RiArrowDownSLine className={`text-xl text-primary ${reduceMotion ? '' : 'animate-bounce'}`} />
                </button>
            </div>
        </section>
    )
}

export default HeroMobile
