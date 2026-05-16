'use client'

import React from 'react';
import SectionReveal from './SectionReveal';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardTitle } from './ui/card';
import { CardDescription } from './ui/card';
import { CardHeader } from './ui/card';
import { Card } from './ui/card';
import { reviewsData } from '@/constants';

function Reviews() {
    return (
        <section id="reviews" className="scroll-mt-32 section-padding">
            <div className="container mx-auto">
                <SectionReveal>
                    <h2 className="section-title mb-8 text-center mx-auto">
                        What Colleagues Say
                    </h2>
                </SectionReveal>
                <SectionReveal delay={0.1}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={16}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 30 },
                            1400: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 5500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        className="!pb-10"
                    >
                        {reviewsData.map((person, index) => (
                            <SwiperSlide key={index} className="!h-auto">
                                <Card className="h-full bg-tertiary/60 dark:bg-secondary/40 p-8 min-h-[240px] border-border/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 flex flex-col max-sm:p-5 max-sm:min-h-0">
                                    <CardHeader className="p-0 mb-6">
                                        <CardTitle>{person.name}</CardTitle>
                                        <p className="text-sm text-muted-foreground mt-1">{person.job}</p>
                                    </CardHeader>
                                    <CardDescription className="text-base leading-relaxed text-muted-foreground flex-1 max-sm:text-sm">
                                        &ldquo;{person.review}&rdquo;
                                    </CardDescription>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SectionReveal>
            </div>
        </section>
    )
}

export default Reviews;
