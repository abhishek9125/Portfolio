'use client'

import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardTitle } from './ui/card';
import { CardDescription } from './ui/card';
import { CardHeader } from './ui/card';
import { Card } from './ui/card';
import { reviewsData } from '@/constants';

function Reviews() {
    return (
        <section className="mb-12 xl:mb-6">
            <div className="container mx-auto">
                <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1400: { slidesPerView: 3 },
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true
                    }}
                    className="h-[350px]"
                >
                    {
                        reviewsData.map((person, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Card className="bg-tertiary/60 dark:bg-secondary/40 p-8 min-h-[290px]">
                                        <CardHeader className="p-0 mb-10">
                                            <div className="flex items-center gap-x-4">
                                                <img src={person.avatar} width={50} height={50} alt="" priority className="rounded-full" />
                                                <div className="flex flex-col">
                                                    <CardTitle>
                                                        {person.name}
                                                    </CardTitle>
                                                    <p>
                                                        {person.job}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardDescription className="tetx-lg text-muted-foreground">
                                            {person.review}
                                        </CardDescription>
                                    </Card>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Reviews;
