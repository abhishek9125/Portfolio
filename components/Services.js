import { Blocks, GanttChartSquare, Gem } from 'lucide-react'
import React from 'react'
import { CardDescription } from './ui/card'
import { CardTitle } from './ui/card'
import { CardContent } from './ui/card'
import { CardHeader } from './ui/card'
import { Card } from './ui/card'

const servicesData = [
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Front End Web Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Back End Web Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'Hosting Websites',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
]

function Services() {
    return (
        <section className="mb-12 xl-mb-36">
            <div className="container mx-auto">
                <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">My Services</h2>
                <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                    {
                        servicesData.map((item, index) => {
                            return (
                                <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative" key={index}>
                                    <CardHeader className="text-primary absolute -top-[60px]">
                                        <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                                            {item.icon}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <CardTitle className="mb-4">{item.title}</CardTitle>
                                        <CardDescription className="mb-4">{item.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services
