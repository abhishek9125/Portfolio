'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Briefcase, FileText, BookOpen, Mail, ArrowRight } from 'lucide-react'

const quickLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/projects', label: 'Projects', icon: Briefcase },
    { href: '/case-studies', label: 'Case Studies', icon: FileText },
    { href: '/articles', label: 'Articles', icon: BookOpen },
    { href: '/contact', label: 'Contact', icon: Mail },
]

export default function NotFound() {
    return (
        <main className="min-h-[80vh] flex items-center justify-center px-4 py-20">
            <div className="max-w-2xl w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <h1 className="text-[8rem] sm:text-[10rem] font-extrabold leading-none tracking-tighter bg-gradient-to-br from-primary via-primary/70 to-primary/40 bg-clip-text text-transparent select-none">
                        404
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <h2 className="text-2xl sm:text-3xl font-semibold mt-2 mb-3">
                        This page doesn&apos;t exist
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto">
                        The page you&apos;re looking for might have been moved or doesn&apos;t exist.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12"
                >
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-5 font-medium">
                        Quick Links
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto">
                        {quickLinks.map((link, i) => {
                            const Icon = link.icon
                            return (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.4 + i * 0.06 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="group flex items-center gap-2.5 px-4 py-3 rounded-xl border border-border/60 bg-background hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                                    >
                                        <Icon className="w-4 h-4 text-primary shrink-0" />
                                        <span className="text-sm font-medium">{link.label}</span>
                                        <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-200" />
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="mt-12"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-colors duration-200"
                    >
                        <Home className="w-4 h-4" />
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        </main>
    )
}
