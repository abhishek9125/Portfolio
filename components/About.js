'use client'

import { MailIcon, MapPin, Phone, Globe, ExternalLink, Languages } from 'lucide-react'
import Link from 'next/link'
import AboutVisual from './AboutVisual'
import Skills from './Skills'
import SectionReveal from './SectionReveal'
import { TabsTrigger } from './ui/tabs'
import { TabsContent } from './ui/tabs'
import { TabsList } from './ui/tabs'
import { Tabs } from './ui/tabs'
import {
    expertiseAreas,
    contactPrimary,
    contactSecondary,
    homeExperienceData,
} from '@/constants'

function About() {
    return (
        <section id="about" className="scroll-mt-32 section-padding max-sm:pt-10">
            <div className="container mx-auto">
                <SectionReveal>
                    <h2 className="section-title mb-3 text-center mx-auto">About Me</h2>
                    <p className="text-center text-muted-foreground max-w-lg mx-auto mb-8">
                        What I specialize in, how I work, and the experience behind it.
                    </p>
                </SectionReveal>

                <div className="flex flex-col xl:flex-row xl:items-start gap-12 xl:gap-10 max-lg:gap-8">
                    <SectionReveal className="hidden xl:flex flex-1 items-start justify-center" delay={0.1}>
                        <AboutVisual />
                    </SectionReveal>

                    <SectionReveal className="flex-1" delay={0.15}>
                        <Tabs defaultValue="about">
                            <TabsList className="w-full grid grid-cols-3 h-auto p-1 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger className="text-xs sm:text-sm px-2 py-2.5" value="about">Overview</TabsTrigger>
                                <TabsTrigger className="text-xs sm:text-sm px-2 py-2.5" value="experience">Experience</TabsTrigger>
                                <TabsTrigger className="text-xs sm:text-sm px-2 py-2.5" value="skills">Skills</TabsTrigger>
                            </TabsList>

                            <div className="mt-12 xl:mt-8 max-sm:mt-6">
                                <TabsContent value="about" className="focus-visible:outline-none">
                                    <div className="text-center xl:text-left space-y-10 max-sm:space-y-8">
                                        {/* Primary — value proposition */}
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                                                Summary
                                            </p>
                                            <h3 className="h3 mb-4">Full-stack engineering at product scale</h3>
                                            <p className="subtitle max-w-xl mx-auto xl:mx-0 mb-0">
                                                Senior Software Engineer with 5+ years owning features from UI to API —
                                                high-traffic React &amp; React Native apps, Node.js services, and cloud-backed
                                                systems across e-commerce at Flipkart, CARS24, and Mamaearth.
                                            </p>
                                        </div>

                                        {/* Primary — expertise pillars */}
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
                                                Core expertise
                                            </p>
                                            <div className="grid sm:grid-cols-2 gap-3">
                                                {expertiseAreas.map((area) => (
                                                    <div
                                                        key={area.title}
                                                        className="p-4 rounded-2xl border border-primary/15 bg-primary/5 text-left transition-colors hover:border-primary/30"
                                                    >
                                                        <p className="font-semibold mb-1.5">{area.title}</p>
                                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                                            {area.description}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Primary — contact essentials */}
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
                                                Get in touch
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto xl:mx-0">
                                                {contactPrimary
                                                    .filter((item) => item.label !== 'Phone')
                                                    .map((item) => (
                                                    <div
                                                        key={item.label}
                                                        className="flex-1 flex items-center gap-3 p-4 rounded-2xl border border-border/70 bg-white/60 dark:bg-secondary/40"
                                                    >
                                                        {item.label === 'Email' ? (
                                                            <MailIcon className="text-primary shrink-0" size={20} />
                                                        ) : (
                                                            <MapPin className="text-primary shrink-0" size={20} />
                                                        )}
                                                        <div className="text-left min-w-0">
                                                            <p className="text-xs text-muted-foreground">{item.label}</p>
                                                            {item.href ? (
                                                                <a
                                                                    href={item.href}
                                                                    className="font-medium text-sm hover:text-primary transition-colors truncate block"
                                                                >
                                                                    {item.text}
                                                                </a>
                                                            ) : (
                                                                <p className="font-medium text-sm">{item.text}</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <Link
                                                href="/contact"
                                                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary mt-4 hover:underline"
                                            >
                                                Send a message <ExternalLink size={14} />
                                            </Link>
                                        </div>

                                        {/* Secondary — supporting details */}
                                        <div className="pt-6 border-t border-border/60">
                                            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                                                Additional details
                                            </p>
                                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground justify-center xl:justify-start">
                                                {contactSecondary.map((item) => (
                                                    <span key={item.label} className="inline-flex items-center gap-1.5">
                                                        {item.label === 'Phone' && <Phone size={14} className="text-primary/70" />}
                                                        {item.label === 'Website' && <Globe size={14} className="text-primary/70" />}
                                                        {item.label === 'Languages' && (
                                                            <Languages size={14} className="text-primary/70" />
                                                        )}
                                                        {item.href ? (
                                                            <a href={item.href} className="hover:text-primary transition-colors">
                                                                {item.text}
                                                            </a>
                                                        ) : (
                                                            <span>{item.text}</span>
                                                        )}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="experience" className="focus-visible:outline-none">
                                    <div className="text-center xl:text-left">
                                        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                                            Career
                                        </p>
                                        <h3 className="h3 mb-5 max-xl:mb-4">Work Experience</h3>
                                        <div className="flex flex-col gap-y-4 max-w-xl mx-auto xl:mx-0">
                                            {homeExperienceData.map((item, index) => (
                                                <article
                                                    className="relative text-left pl-6 border-l-2 border-primary/20 py-1"
                                                    key={`${item.company}-${item.years}`}
                                                >
                                                    {/* Timeline dot */}
                                                    <span className={`absolute left-[-5px] top-2 w-2 h-2 rounded-full ${index === 0 ? 'bg-primary ring-4 ring-primary/15' : 'bg-primary/50'}`} />
                                                    {index === 0 && (
                                                        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-2">
                                                            Current
                                                        </span>
                                                    )}
                                                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-0.5">
                                                        <h4 className="font-semibold text-lg">{item.company}</h4>
                                                        <span className="text-xs text-muted-foreground">{item.years}</span>
                                                    </div>
                                                    <p className="text-primary text-sm font-medium mb-2">{item.role}</p>
                                                    <ul className="space-y-1">
                                                        {item.highlights?.map((h) => (
                                                            <li key={h} className="text-sm text-muted-foreground flex gap-2 leading-snug">
                                                                <span className="text-primary/80 shrink-0 mt-0.5">·</span>
                                                                {h}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </article>
                                            ))}
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="skills" className="focus-visible:outline-none">
                                    <div className="text-center xl:text-left">
                                        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                                            Technical depth
                                        </p>
                                        <h3 className="h3 mb-2">Skills &amp; Stack</h3>
                                        <p className="text-sm text-muted-foreground mb-8 max-w-md">
                                            Highlighted skills reflect production use at scale — not a laundry list.
                                        </p>
                                        <Skills />
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </SectionReveal>
                </div>
            </div>
        </section>
    )
}

export default About
