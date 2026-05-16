'use client'

import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { projectData } from '@/constants'
import { TabsContent } from '@radix-ui/react-tabs'
import { motion, AnimatePresence } from 'framer-motion'
import SectionReveal from '@/components/SectionReveal'

const uniqueCategories = ['All Projects', ...new Set(projectData.map((item) => item.category))]

function Projects() {
    const [category, setCategory] = useState('Professional')

    const filteredProjects = projectData.filter((project) =>
        category === 'All Projects' ? true : project.category === category
    )

    return (
        <section className="min-h-screen pt-6 sm:pt-8 pb-16">
            <div className="container mx-auto">
                {/* Header */}
                <SectionReveal>
                    <div className="text-center mb-8 xl:mb-12">
                        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                            Portfolio
                        </p>
                        <h1 className="h1 mb-4">Projects</h1>
                        <p className="subtitle max-w-lg mx-auto mb-2">
                            Production systems and personal builds — from e-commerce at scale to full-stack experiments.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            <span className="font-semibold text-foreground">{projectData.length}</span> projects across{' '}
                            <span className="font-semibold text-foreground">{uniqueCategories.length - 1}</span> categories
                        </p>
                    </div>
                </SectionReveal>

                {/* Filters */}
                <SectionReveal delay={0.1}>
                    <Tabs defaultValue={category} className="mb-10">
                        <TabsList className="w-full grid grid-cols-3 h-auto p-1 lg:max-w-[640px] mb-8 mx-auto md:border dark:border-none">
                            {uniqueCategories.map((cat) => (
                                <TabsTrigger
                                    value={cat}
                                    key={cat}
                                    className="capitalize text-xs sm:text-sm px-2 py-2.5"
                                    onClick={() => setCategory(cat)}
                                >
                                    {cat}
                                    <span className="ml-1.5 text-[10px] text-muted-foreground font-normal hidden sm:inline">
                                        ({cat === 'All Projects'
                                            ? projectData.length
                                            : projectData.filter((p) => p.category === cat).length})
                                    </span>
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {/* Results count */}
                        <p className="text-xs text-muted-foreground text-center mb-6">
                            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                        </p>

                        {/* Grid */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25 }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                            >
                                {filteredProjects.map((project, index) => (
                                    <TabsContent value={category} key={`${project.name}-${index}`} className="mt-0">
                                        <motion.div
                                            initial={{ opacity: 0, y: 16 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                delay: index * 0.04,
                                                duration: 0.4,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                        >
                                            <ProjectCard project={project} />
                                        </motion.div>
                                    </TabsContent>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </Tabs>
                </SectionReveal>
            </div>
        </section>
    )
}

export default Projects
