'use client'

import { motion } from 'framer-motion'
import { Cloud, Database, Layout, Server } from 'lucide-react'
import HeroTerminal from './HeroTerminal'

const capabilities = [
    {
        icon: Layout,
        title: 'Frontend',
        items: ['React', 'Next.js', 'React Native'],
    },
    {
        icon: Server,
        title: 'Backend',
        items: ['Node.js', 'REST APIs', 'Microservices'],
    },
    {
        icon: Database,
        title: 'Data',
        items: ['Redis', 'SQL', 'Caching'],
    },
    {
        icon: Cloud,
        title: 'Cloud',
        items: ['GCP', 'AWS', 'Azure'],
    },
]

function HeroVisual() {
    return (
        <div className="relative w-full max-w-[540px] mx-auto xl:mx-0 xl:ml-auto">
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-primary/20 blur-3xl" />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <HeroTerminal />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-2 gap-3 mt-4"
            >
                {capabilities.map(({ icon: Icon, title, items }) => (
                    <div
                        key={title}
                        className="rounded-2xl border border-border/60 bg-white/80 dark:bg-secondary/60 backdrop-blur-sm p-4 transition-colors hover:border-primary/30"
                    >
                        <Icon className="text-primary mb-2" size={18} />
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                            {title}
                        </p>
                        <p className="text-sm font-medium leading-snug">{items.join(' · ')}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default HeroVisual
