import { Github, Link2Icon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Badge } from './ui/badge'
import { CardHeader } from './ui/card'
import { Card } from './ui/card'

function ProjectCard({ project }) {
    return (
        <Card className="group overflow-hidden relative">
            <CardHeader className="p-0">
                <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
                    <Image
                        className={`absolute bottom-0 shadow-2xl h-[220px] w-[${project.isMobile ? 130 : 260}px]`}
                        src={project.image}
                        width={project.isMobile ? 120 : 247}
                        height={250}
                        alt=""
                        priority
                    />
                    <div className="flex gap-x-4">
                        {
                            project.link && 
                            <a
                                href={project.link}
                                target="_blank"
                                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200" 
                            >
                                <Link2Icon className="text-white" />
                            </a>
                        }
                        {
                            project.github &&
                            <a
                                href={project.github}
                                target="_blank"
                                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200" 
                            >
                                <Github className="text-white" />
                            </a>
                        }
                    </div>
                </div>
            </CardHeader>
            <div className="h-full px-8 py-6">
                <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
                    {project.badge}
                </Badge>
                <h4 className="h4 mb-1">{project.name}</h4>
                <p className="text-muted-foreground text-lg">{project.description}</p>
            </div>
        </Card>
    )
}

export default ProjectCard
