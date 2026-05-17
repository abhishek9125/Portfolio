import { careerTimeline } from '@/constants'

function CareerTimeline() {
    return (
        <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden sm:block" />
            <div className="space-y-6">
                {careerTimeline.map((item, index) => (
                    <div key={`${item.company}-${item.period}`} className="relative sm:pl-8">
                        <div
                            className={`hidden sm:block absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-background ${
                                index === 0 ? 'bg-primary ring-4 ring-primary/20' : 'bg-primary/70'
                            }`}
                        />
                        <div className="rounded-2xl border border-border/60 bg-accent/20 dark:bg-secondary/30 p-4">
                            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                                <h4 className="font-semibold">{item.company}</h4>
                                <span className="text-xs font-medium text-muted-foreground">{item.period}</span>
                            </div>
                            <p className="text-sm text-primary font-medium mb-2">{item.role}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.summary}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CareerTimeline;
