import { Briefcase, Calendar, GraduationCap, HomeIcon, MailIcon, PhoneCall, User2 } from 'lucide-react'
import Image from 'next/image';
import React from 'react'
import DevImg from './DevImg';
import Skills from './Skills';
import { TabsTrigger } from './ui/tabs';
import { TabsContent } from './ui/tabs';
import { TabsList } from './ui/tabs';
import { Tabs } from './ui/tabs';

const qualificationData = [
    {
        title: 'experience',
        data: [
            {
                company: 'CARS24 Pvt. Ltd.',
                role: 'Software Development Engineer III',
                years: 'March 2024 - April 2025'
            },
            {
                company: 'Honasa Consumer Ltd. (MamaEarth)',
                role: 'Senior Software Engineer',
                years: 'October 2022 - March 2024'
            },
            {
                company: 'Honasa Consumer Ltd. (MamaEarth)',
                role: 'Software Engineer',
                years: 'July 2021 - September 2022'
            },
            {
                company: 'Honasa Consumer Ltd. (MamaEarth)',
                role: 'Software Development Intern',
                years: 'January 2021 - June 2021'
            }
        ]
    },
    {
        title: 'education',
        data: [
            {
                university: 'Thapar Institute of Engineering & Technology',
                qualification: 'Bachelor\'s in Computer Science',
                years: '2017 - 2021'
            }
        ]
    }
]

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Abhishek Agarwal'
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+91-7017841375'
    },
    {
        icon: <MailIcon size={20} />,
        text: 'abhishek4075@gmail.com'
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 25 May, 1998'
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Bachelor\'s in Computer Science'
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Gurgaon'
    }
]

function About() {

    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    }

    return (
        <section className="xl:h-[920px] pb-8 xl:py-24 py-0">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    About Me
                </h2>
                <div className="flex flex-col xl:flex-row">
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg
                            containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
                            imgSrc="/hero/developer2.png"
                            imgStyle="top-[30px] left-[140px]"
                        />
                    </div>
                    <div className="flex-1">
                        <Tabs defaultValue="qualifications">
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                                    Personal Info
                                </TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">
                                    Qualifications
                                </TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                                    Skills
                                </TabsTrigger>
                            </TabsList>
                            <div className="text-lg mt-12 xl:mt-8 ">
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">
                                            Unmatched Service Quality for Over 10 Years
                                        </h3>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                            I Specialise in Crafting Intuitive Websites with Cutting Edge Technology, delivering Dynamic and Engaging User Experience
                                        </p>
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {
                                                infoData.map((item, index) => {
                                                    return (
                                                        <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                            <div className="text-primary">{item.icon}</div>
                                                            <div>{item.text}</div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="flex flex-col gap-y-2">
                                            <div className="text-primary">Language Skills</div>
                                            <div className="border-b border-border" />
                                            <div>English, Hindi</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="qualifications">
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                                        <div className="grid md:grid-cols-2 gap-y-8">
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase />
                                                    <h4 className="capitalize font-medium">
                                                        {
                                                            getData(qualificationData, 'experience').title
                                                        }
                                                    </h4>
                                                </div>
                                                <div className="flex flex-col gap-y-8">
                                                    {
                                                        getData(qualificationData, 'experience').data.map((item, index) => {
                                                            const { company, role, years } = item;
                                                            return (
                                                                <div className="flex gap-x-8 group" key={index}>
                                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="font-semibold text-xl leading-none mb-2">
                                                                            {company}
                                                                        </div>
                                                                        <div className="text-lg leading-none text-muted-foreground  mb-4">
                                                                            {role}
                                                                        </div>
                                                                        <div className="text-base font-medium">{years}</div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <GraduationCap size={28} />
                                                    <h4 className="capitalize font-medium">
                                                        {
                                                            getData(qualificationData, 'education').title
                                                        }
                                                    </h4>
                                                </div>
                                                <div className="flex flex-col gap-y-8">
                                                    {
                                                        getData(qualificationData, 'education').data.map((item, index) => {
                                                            const { university, qualification, years } = item;
                                                            return (
                                                                <div className="flex gap-x-8 group" key={index}>
                                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="font-semibold text-xl leading-none mb-2">
                                                                            {university}
                                                                        </div>
                                                                        <div className="text-lg leading-none text-muted-foreground  mb-4">
                                                                            {qualification}
                                                                        </div>
                                                                        <div className="text-base font-medium">{years}</div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="skills">
                                    <div className="text-center xl:text-left">
                                        <Skills />
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
