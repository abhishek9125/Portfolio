import { Cloud, Cpu, Layout, Server } from 'lucide-react'
import { engineeringToolchain } from '@/constants'

const highlights = [
    { icon: Layout, label: 'Frontend', value: 'React · React Native · Next' },
    { icon: Server, label: 'Backend', value: 'Node.js · APIs · Databases' },
    { icon: Cpu, label: 'Systems', value: 'Micro FE · Design Systems' },
    { icon: Cloud, label: 'Cloud', value: 'GCP · AWS' },
]

function AboutVisual() {
    return (
        <div className="relative w-full max-w-[505px] h-[500px] mx-auto">
            <div className="absolute inset-0 bg-about_shape_light dark:bg-about_shape_dark bg-no-repeat bg-center scale-105" />
            <div className="absolute top-8 right-6 w-28 h-28 rounded-full bg-primary/15 blur-2xl" />
            <div className="absolute bottom-12 left-4 w-36 h-36 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10 h-full flex flex-col justify-center p-8 gap-4">
                <div className="rounded-2xl border border-primary/20 bg-white/85 dark:bg-secondary/60 backdrop-blur-sm p-5 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2">
                        Engineering focus
                    </p>
                    <p className="text-2xl font-bold leading-tight tracking-tight">
                        Building Scalable Tech & Product
                    </p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        E-commerce at scale · Millions of Users
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {highlights.map(({ icon: Icon, label, value }) => (
                        <div
                            key={label}
                            className="rounded-2xl border border-border/60 bg-white/70 dark:bg-secondary/50 backdrop-blur-sm p-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
                        >
                            <Icon className="text-primary mb-2" size={20} />
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                                {label}
                            </p>
                            <p className="text-sm font-semibold leading-snug">{value}</p>
                        </div>
                    ))}
                </div>

                <div className="rounded-2xl border border-border/60 bg-white/70 dark:bg-secondary/50 backdrop-blur-sm p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Engineering toolchain
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {engineeringToolchain.map((tool) => (
                            <span
                                key={tool}
                                className="px-2.5 py-1 text-xs font-medium rounded-md bg-accent/80 border border-border/50 text-foreground/90"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutVisual
