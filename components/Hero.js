import { RESUME_LINK } from '@/constants'
import { Download, Send } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { RiArrowDownSLine, RiBriefcase4Fill, RiTeamFill, RiTodoFill } from 'react-icons/ri'
import Badge from './Badge'
import DevImg from './DevImg'
import Socials from './Socials'
import { Button } from './ui/button'

function Hero() {
    return (
        <section className="py-0 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    <div className="flex max-w-[650px] flex-col justify-center mx:auto xl:mx-0 text-center xl:text-left">
                        <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web Developer</div>
                        <h1 className="h1 mb-4">Hello, my name is Abhishek Agarwal</h1>
                        <p className="subtitle max-w-[490px] mx-auto xl:mx-0">Brief description with insights into myself, my Vocational Journey and what I engage in Professionally</p>
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                            <Link href="/contact">
                                <Button className="gap-x-2">
                                    Contact Me <Send size={18} />
                                </Button>
                            </Link>
                            <a href={RESUME_LINK} target="_blank">
                                <Button variant="secondary" className="gap-x-2">
                                    Download CV <Download size={18} />
                                </Button>
                            </a>
                        </div>
                        <Socials
                            containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                            iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
                        />
                    </div>
                    <div className="hidden xl:flex relative">
                        <Badge
                            containerStyles="absolute top-[24%] -left-[5rem]"
                            icon={<RiBriefcase4Fill />}
                            endCountNum={4}
                            badgeText="Years of Experience"
                        />

                        <Badge
                            containerStyles="absolute top-[80%] -left-[1rem]"
                            icon={<RiTodoFill />}
                            endCountNum={17}
                            badgeText="Finished Projects"
                        />

                        <Badge
                            containerStyles="absolute top-[55%] -right-8"
                            icon={<RiTeamFill />}
                            endCountNum={3}
                            // endCountText="k"
                            badgeText="Blogs Written"
                        />

                        <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2" />
                        <DevImg
                            containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                            imgSrc="/hero/developer2.png"
                            imgStyle="top-[19px] left-[80px]"
                        />
                    </div>
                </div>
                <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-0 animate-bounce">
                    <RiArrowDownSLine className="text-3xl text-primary" />
                </div>
            </div>
        </section>
    )
}

export default Hero
