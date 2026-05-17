import SectionReveal from './SectionReveal'
import LighthouseBadge from './LighthouseBadge'

export default function LighthouseStrip() {
    return (
        <section className="section-padding !py-8 border-y border-border/40 bg-accent/20 dark:bg-secondary/15">
            <div className="container mx-auto">
                <SectionReveal>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
                        <div className="text-center sm:text-left">
                            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-1">
                                Lighthouse Audit
                            </p>
                            <p className="text-sm text-muted-foreground">
                                This portfolio scores near-perfect on all four metrics
                            </p>
                        </div>
                        <LighthouseBadge />
                    </div>
                </SectionReveal>
            </div>
        </section>
    )
}
