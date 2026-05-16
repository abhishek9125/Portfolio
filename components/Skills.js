import React from 'react'
import { skillData } from '@/constants';
import { cn } from '@/lib/utils';

function Skills() {
    return (
        <div className="space-y-10">
            {skillData.map((category) => (
                <div key={category.title}>
                    <div className="mb-4">
                        <h4 className="text-base font-semibold tracking-tight">{category.title}</h4>
                        <p className="text-sm text-muted-foreground mt-0.5">{category.subtitle}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {category.data.map((skill) => (
                            <span
                                key={skill.name}
                                className={cn(
                                    'px-3.5 py-1.5 text-sm rounded-full border transition-colors',
                                    category.tier === 'core'
                                        ? 'border-primary/35 bg-primary/8 text-foreground font-medium hover:bg-primary/12'
                                        : 'border-border bg-background/80 text-foreground/90 hover:border-primary/30 hover:bg-primary/5'
                                )}
                            >
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Skills
