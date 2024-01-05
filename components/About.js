import { Calendar, GraduationCap, HomeIcon, MailIcon, PhoneCall, User2 } from 'lucide-react'
import React from 'react'
import DevImg from './DevImg';
import { TabsTrigger } from './ui/tabs';
import { TabsContent } from './ui/tabs';
import { TabsList } from './ui/tabs';
import { Tabs } from './ui/tabs';

function About() {

    const qualificationData = [
        {
            title: 'experience',
            data: [
                {
                    company: 'Honasa Consumer Ltd. (MamaEarth)',
                    qualification: 'Software Developer Intern',
                    years: '2017 - 2021'
                },
                {
                    company: 'Honasa Consumer Ltd. (MamaEarth)',
                    qualification: 'Software Engineer',
                    years: '2017 - 2021'
                },
                {
                    company: 'Honasa Consumer Ltd. (MamaEarth)',
                    qualification: 'Senior Software Engineer',
                    years: '2017 - 2021'
                }
            ]
        },
        {
            title: 'education',
            data: [
                {
                    university: 'Thapar Institute of Engineering & Technology',
                    qualification: 'Bachelor of Computer Science',
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

    const skillData = [
        {
            title: 'skills',
            data: [
                {
                    name: 'HTML, CSS'
                },
                {
                    name: 'Frontend Development'
                },
                {
                    name: 'Javascript, PHP'
                },
                {
                    name: 'Backend Development'
                },
            ]
        },
        {
            title: 'tools',
            data: [
                {
                    imgPath: '/about/vscode.svg'
                },
                {
                    imgPath: '/about/figma.svg'
                },
                {
                    imgPath: '/about/notion.svg'
                },
                {
                    imgPath: '/about/wordpress.svg'
                },
            ]
        }
    ];

    return (
        <section className="xl:h-[860px] pb-12 py-24">
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
                        <Tabs defaultValue="personal">
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
                                        <div className="grid xl:grid-cols-2 gap-4">
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
                                    </div>
                                </TabsContent>
                                <TabsContent value="qualifications">
                                    Qualifications Info
                                </TabsContent>
                                <TabsContent value="skills">
                                    Skills Info
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
