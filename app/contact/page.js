import Form from '@/components/Form'
import Socials from '@/components/Socials'
import { CALENDLY_URL } from '@/constants'
import { HomeIcon, MailIcon, Calendar, Clock, ArrowRight, Zap, Shield, MessageSquare } from 'lucide-react'
import Link from 'next/link'

const responseInfo = [
    { icon: Clock, text: 'Typical response within 24 hours' },
    { icon: Shield, text: 'Your info stays private — no spam, ever' },
    { icon: Zap, text: 'Open to full-time roles & collaborations' },
]

function Contact() {
    return (
        <section className="section-padding pt-4 sm:pt-6">
            <div className="container mx-auto">
                {/* Header */}
                <div className="grid xl:grid-cols-2 gap-10 xl:gap-12 mb-10">
                    <div className="flex flex-col justify-center text-center xl:text-left">
                        <div className="flex items-center justify-center xl:justify-start gap-x-4 text-primary text-lg mb-4">
                            <span className="w-[30px] h-[2px] bg-primary" />
                            Get in touch
                        </div>
                        <h1 className="h1 max-w-md mb-4 mx-auto xl:mx-0">Let&apos;s work together.</h1>
                        <p className="subtitle max-w-[400px] mx-auto xl:mx-0 mb-6">
                            Hiring, collaboration, or a technical conversation — tell me what you&apos;re building.
                        </p>

                        {/* Response time trust builders */}
                        <div className="space-y-3 mb-6 max-w-sm mx-auto xl:mx-0">
                            {responseInfo.map((item) => {
                                const Icon = item.icon
                                return (
                                    <div key={item.text} className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                            <Icon size={14} className="text-primary" />
                                        </div>
                                        {item.text}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="hidden xl:flex w-full min-h-[260px] bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-center bg-no-repeat" />
                </div>

                {/* Calendly */}
                {CALENDLY_URL && (
                    <div className="mb-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex items-start gap-3">
                                <Calendar className="text-primary shrink-0 mt-0.5" size={22} />
                                <div>
                                    <h2 className="font-semibold text-lg mb-1">Prefer a calendar?</h2>
                                    <p className="text-sm text-muted-foreground">
                                        Book a 30-minute intro call — no back-and-forth required.
                                    </p>
                                </div>
                            </div>
                            <Link
                                href={CALENDLY_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shrink-0"
                            >
                                Schedule on Calendly
                            </Link>
                        </div>
                    </div>
                )}

                {/* Form + contact info */}
                <div className="grid xl:grid-cols-2 gap-10 xl:gap-12 overflow-visible">
                    <div className="flex flex-col gap-y-8">
                        {/* Contact details */}
                        <div className="space-y-4">
                            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">
                                Direct contact
                            </p>
                            <div className="flex items-center gap-x-4 p-4 rounded-xl border border-border/50 bg-white/50 dark:bg-secondary/20">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <MailIcon size={18} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">Email</p>
                                    <a href="mailto:abhishek4075@gmail.com" className="font-medium hover:text-primary transition-colors">
                                        abhishek4075@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-4 p-4 rounded-xl border border-border/50 bg-white/50 dark:bg-secondary/20">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <HomeIcon size={18} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">Location</p>
                                    <p className="font-medium">Bengaluru, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Socials */}
                        <div>
                            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium mb-3">
                                Find me on
                            </p>
                            <Socials
                                containerStyles="flex gap-x-4"
                                iconStyles="text-foreground/70 text-xl hover:text-primary hover:scale-110 transition-all duration-200"
                            />
                        </div>

                        {/* Quick actions */}
                        <div>
                            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium mb-3">
                                Quick links
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Link
                                    href="/case-studies"
                                    className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-full border border-border/60 bg-white/50 dark:bg-secondary/30 hover:border-primary/30 transition-colors"
                                >
                                    <MessageSquare size={13} />
                                    Case studies
                                </Link>
                                <Link
                                    href="/projects"
                                    className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-full border border-border/60 bg-white/50 dark:bg-secondary/30 hover:border-primary/30 transition-colors"
                                >
                                    <ArrowRight size={13} />
                                    Projects
                                </Link>
                                <Link
                                    href="/setup"
                                    className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-full border border-border/60 bg-white/50 dark:bg-secondary/30 hover:border-primary/30 transition-colors"
                                >
                                    <Zap size={13} />
                                    My setup
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Form />
                </div>
            </div>
        </section>
    )
}

export default Contact
