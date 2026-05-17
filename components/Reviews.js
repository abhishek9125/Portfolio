'use client'

import React from 'react'
import SectionReveal from './SectionReveal'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card } from './ui/card'
import { reviewsData } from '@/constants'
import { Quote } from 'lucide-react'

function Reviews() {
    return (
        <section id="reviews" className="scroll-mt-32 section-padding">
            <div className="container mx-auto">
                <SectionReveal>
                    <div className="text-center mb-8">
                        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                            Testimonials
                        </p>
                        <h2 className="section-title mb-3 text-center mx-auto">
                            What Colleagues Say
                        </h2>
                        <p className="text-muted-foreground text-sm max-w-md mx-auto">
                            Recommendations from engineers and leads I&apos;ve worked with across teams
                        </p>
                    </div>
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
                                    <div className="flex items-start gap-3 mb-5">
                                        <div className="min-w-0 flex-1">
                                            <p className="font-semibold text-[15px]">{person.name}</p>
                                            <p className="text-xs text-muted-foreground">{person.job}</p>
                                        </div>
                                        <Quote size={20} className="text-primary/20 ml-auto shrink-0" />
                                    </div>
                                    <p className="text-[15px] leading-relaxed text-muted-foreground flex-1 max-sm:text-sm">
                                        &ldquo;{person.review}&rdquo;
                                    </p>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SectionReveal>
            </div>
        </section>
    )
}

export default Reviews
