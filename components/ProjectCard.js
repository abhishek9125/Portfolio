'use client'

import { useRef, useCallback } from 'react'
import { Github, Link2Icon, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Badge } from './ui/badge'
import { CardHeader } from './ui/card'
import { Card } from './ui/card'

function ProjectPlaceholder({ label }) {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#2874f0]/15 via-primary/10 to-[#ffe500]/10 dark:from-[#2874f0]/25 dark:to-primary/20">
            <div className="w-24 h-24 rounded-2xl bg-white/90 dark:bg-secondary/80 shadow-xl flex items-center justify-center border border-border/40">
                <span className="text-3xl font-bold text-[#2874f0] dark:text-primary">{label?.slice(0, 2) ?? 'FK'}</span>
            </div>
            <p className="mt-4 text-sm font-semibold text-foreground/80">{label}</p>
        </div>
    )
}

function ProjectCard({ project }) {
    const visitHref = project.isCaseStudy ? project.link : project.link
    const isInternal = project.link?.startsWith('/')
    const cardRef = useRef(null)

    const handleMouseMove = useCallback((e) => {
        const el = cardRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        el.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`
    }, [])

    const handleMouseLeave = useCallback(() => {
        const el = cardRef.current
        if (el) el.style.transform = ''
    }, [])

    return (
        <Card
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group overflow-hidden relative h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 border-border/60"
            style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
        >
            <CardHeader className="p-0">
                <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden max-sm:h-[220px]">
                    {project.usePlaceholder || !project.image ? (
                        <ProjectPlaceholder label={project.placeholderLabel || project.name} />
                    ) : (
                        <Image
                            className={`absolute bottom-0 shadow-2xl h-[220px] ${project.isMobile ? 'w-[130px]' : 'w-[260px]'} transition-transform duration-500 group-hover:scale-[1.02]`}
                            src={project.image}
                            width={project.isMobile ? 120 : 247}
                            height={250}
                            alt={project.name}
                            priority
                        />
                    )}
                    <div className="flex gap-x-4 z-10">
                        {project.link && (
                            isInternal ? (
                                <Link
                                    href={project.link}
                                    aria-label={`View ${project.name}`}
                                    className="bg-secondary w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-full flex justify-center items-center scale-100 opacity-100 sm:scale-0 sm:opacity-0 sm:group-hover:scale-100 sm:group-hover:opacity-100 transition-all duration-300 hover:bg-primary"
                                >
                                    {project.isCaseStudy ? (
                                        <ArrowRight className="text-white" />
                                    ) : (
                                        <Link2Icon className="text-white" />
                                    )}
                                </Link>
                            ) : (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit ${project.name}`}
                                    className="bg-secondary w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-full flex justify-center items-center scale-100 opacity-100 sm:scale-0 sm:opacity-0 sm:group-hover:scale-100 sm:group-hover:opacity-100 transition-all duration-300 hover:bg-primary"
                                >
                                    <Link2Icon className="text-white" />
                                </a>
                            )
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.name} on GitHub`}
                                className="bg-secondary w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-full flex justify-center items-center scale-100 opacity-100 sm:scale-0 sm:opacity-0 sm:group-hover:scale-100 sm:group-hover:opacity-100 transition-all duration-300 delay-75 hover:bg-primary"
                            >
                                <Github className="text-white" />
                            </a>
                        )}
                    </div>
                </div>
            </CardHeader>
            <div className="h-full px-8 py-6 max-sm:px-4 max-sm:py-4 flex flex-col">
                <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5 max-sm:text-[10px] max-sm:top-3 max-sm:left-3">
                    {project.badge}
                </Badge>
                <h4 className="h4 mb-1">{project.name}</h4>
                <p className="text-muted-foreground text-lg leading-relaxed max-sm:text-sm flex-1">{project.description}</p>
                {project.isCaseStudy && project.link && (
                    <Link
                        href={project.link}
                        className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors"
                    >
                        Read case study
                        <ArrowRight size={14} />
                    </Link>
                )}
            </div>
        </Card>
    )
}

export default ProjectCard
