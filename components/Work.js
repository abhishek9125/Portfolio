'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from './ProjectCard';
import { projectData } from '@/constants';

function Work() {
    return (
        <section id="work" className="relative scroll-mt-28 section-padding mb-4 xl:mb-16">
            <div className="container mx-auto xl:relative">
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-10 xl:mb-0 xl:h-[520px] flex flex-col justify-center items-center xl:items-start relative z-10">
                    <h2 className="section-title mb-4 mx-auto xl:mx-0">Latest Projects</h2>
                    <p className="subtitle mb-8 w-[95%] max-w-sm mx-auto xl:mx-0 xl:max-w-none">
                        Production systems and personal builds — from e-commerce at scale to full-stack experiments.
                    </p>
                    <Link href="/projects">
                        <Button className="shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/20 transition-shadow max-sm:w-full max-sm:max-w-xs">
                            All Projects
                        </Button>
                    </Link>
                </div>
                <div className="w-full xl:max-w-[860px] xl:absolute xl:right-0 xl:top-0">
                    <Swiper
                        className="!pb-12 max-xl:!h-auto xl:!h-[520px]"
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                        }}
                        spaceBetween={16}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                        {projectData.slice(0, 4).map((project, index) => (
                            <SwiperSlide key={index}>
                                <ProjectCard project={project} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Work
