function ArchitectureDiagram({ title, layers }) {
    return (
        <div className="rounded-2xl border border-border/60 bg-accent/20 dark:bg-secondary/30 p-6 overflow-x-auto">
            {title && (
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-6 font-semibold">
                    {title}
                </p>
            )}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-2 min-w-[280px]">
                {layers.map((layer, index) => (
                    <div key={layer} className="flex items-center gap-2 sm:flex-col sm:gap-3 flex-1">
                        <div className="flex-1 rounded-xl border border-primary/25 bg-background px-4 py-3 text-center text-sm font-medium shadow-sm">
                            {layer}
                        </div>
                        {index < layers.length - 1 && (
                            <span className="text-primary text-lg sm:rotate-0 rotate-90 shrink-0" aria-hidden>
                                →
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ArchitectureDiagram;
