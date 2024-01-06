'use client'

import Image from 'next/image';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardTitle } from './ui/card';
import { CardDescription } from './ui/card';
import { CardHeader } from './ui/card';
import { Card } from './ui/card';

const reviewsData = [
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Snehil Verma',
        job: 'Lead Developer',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Snehil Verma',
        job: 'Lead Developer',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
    },
    {
        avatar: '/reviews/avatar-3.png',
        name: 'Snehil Verma',
        job: 'Lead Developer',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
    },
    {
        avatar: '/reviews/avatar-3.png',
        name: 'Snehil Verma',
        job: 'Lead Developer',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
    },
]

function Reviews() {
    return (
        <section className="mb-12 xl:mb-32">
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
                                    <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[250px]">
                                        <CardHeader className="p-0 mb-10">
                                            <div className="flex items-center gap-x-4">
                                                <Image src={person.avatar} width={70} height={70} alt="" priority />
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
