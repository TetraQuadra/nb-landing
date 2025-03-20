"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Review {
    id: number;
    name: string;
    rating: number;
    date: string;
    text: string;
    avatar?: string;
}

const Reviews = () => {
    const [isHovering, setIsHovering] = useState(false);
    const rowOneRef = useRef<HTMLDivElement>(null);
    const rowTwoRef = useRef<HTMLDivElement>(null);

    const reviews: Review[] = [
        {
            id: 1,
            name: "John Smith",
            rating: 5,
            date: "12/03/2023",
            text: "Had my windows cleaned by this company and they did an amazing job! Very thorough and professional. Will definitely use again.",
        },
        {
            id: 2,
            name: "Sarah Johnson",
            rating: 5,
            date: "05/02/2023",
            text: "Excellent service! My windows have never looked so clean. The team was punctual and very careful with my property.",
        },
        {
            id: 3,
            name: "Michael Brown",
            rating: 4,
            date: "28/01/2023",
            text: "Very good service at a reasonable price. The cleaners were professional and did a great job, though they missed one spot initially but fixed it when I pointed it out.",
        },
        {
            id: 4,
            name: "Emily Wilson",
            rating: 5,
            date: "14/12/2022",
            text: "I've been using this service for over a year now and have always been impressed. Consistently great results and friendly staff.",
        },
        {
            id: 5,
            name: "David Taylor",
            rating: 5,
            date: "30/11/2022",
            text: "Best window cleaning service I've used. They're thorough, efficient, and leave no streaks. Highly recommended!",
        },
        {
            id: 6,
            name: "Jennifer Anderson",
            rating: 4,
            date: "15/10/2022",
            text: "Very happy with the service provided. The team was professional and my windows look great!",
        },
        {
            id: 7,
            name: "Robert Martinez",
            rating: 5,
            date: "02/10/2022",
            text: "Fantastic service from start to finish. They showed up on time and did an excellent job. My windows have never looked better!",
        },
        {
            id: 8,
            name: "Lisa Thompson",
            rating: 5,
            date: "18/09/2022",
            text: "Great work! The team was efficient and thorough. Will definitely be using their services again in the future.",
        },
        {
            id: 9,
            name: "James Wilson",
            rating: 4,
            date: "05/09/2022",
            text: "Good service at a fair price. The cleaners were friendly and did a thorough job. Would recommend.",
        },
        {
            id: 10,
            name: "Amanda Clark",
            rating: 5,
            date: "22/08/2022",
            text: "Absolutely fantastic service! My windows are sparkling clean. The team was professional, quick, and very friendly.",
        },
    ];

    useEffect(() => {
        const animate = () => {
            if (isHovering) return;

            if (rowOneRef.current) {
                rowOneRef.current.scrollLeft += 1;
                if (rowOneRef.current.scrollLeft >= rowOneRef.current.scrollWidth / 2) {
                    rowOneRef.current.scrollLeft = 0;
                }
            }

            if (rowTwoRef.current) {
                rowTwoRef.current.scrollLeft -= 1;
                if (rowTwoRef.current.scrollLeft <= 0) {
                    rowTwoRef.current.scrollLeft = rowTwoRef.current.scrollWidth / 2;
                }
            }
        };

        const animationInterval = setInterval(animate, 30);

        return () => clearInterval(animationInterval);
    }, [isHovering]);

    const firstRow = [...reviews.slice(0, 5), ...reviews.slice(0, 5)];
    const secondRow = [...reviews.slice(5, 10), ...reviews.slice(5, 10)];

    const renderStars = () => {
        return Array(5).fill(0).map((_, index) => (
            <Image
                key={index}
                src="/star.svg"
                alt="star"
                width={16}
                height={16}
            />
        ));
    };

    return (
        <section className="py-16 w-full overflow-hidden bg-[#F9F5EC]">
            <div className="container mx-auto">
                <h1 className="text-[40px] font-[500] text-center mb-12"><span className="text-green-600">Our</span> Reviews</h1>
                <div
                    className="w-full relative"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <div className="absolute left-0 top-0 bottom-0 w-[100px] z-10 pointer-events-none"
                        style={{ background: 'linear-gradient(to right, #F9F5EC 0%, transparent 100%)' }}></div>

                    <div className="absolute right-0 top-0 bottom-0 w-[100px] z-10 pointer-events-none"
                        style={{ background: 'linear-gradient(to left, #F9F5EC 0%, transparent 100%)' }}></div>
                    <div
                        ref={rowOneRef}
                        className="flex gap-6 mb-8 overflow-x-hidden whitespace-nowrap"
                    >
                        {firstRow.map((review, index) => (
                            <div
                                key={`row1-${review.id}-${index}`}
                                className="inline-block min-w-[350px] max-w-[350px] p-6 bg-white border-2 border-[#EFEFEF] rounded-[24px] shadow-sm whitespace-normal"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                                        {review.avatar ? (
                                            <Image src={review.avatar} alt={review.name} width={48} height={48} />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gray-300">
                                                {review.name.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-[18px]">{review.name}</h3>
                                        <div className="flex">
                                            {renderStars()}
                                        </div>
                                    </div>
                                    <div className="ml-auto text-[14px] text-gray-500">
                                        {review.date}
                                    </div>
                                </div>
                                <p className="text-[14px]">{review.text}</p>
                            </div>
                        ))}
                    </div>
                    <div
                        ref={rowTwoRef}
                        className="flex gap-6 pl-[175px] overflow-x-hidden whitespace-nowrap"
                    >
                        {secondRow.map((review, index) => (
                            <div
                                key={`row2-${review.id}-${index}`}
                                className="inline-block min-w-[350px] max-w-[350px] p-6 bg-white border-2 border-[#EFEFEF] rounded-[24px] shadow-sm whitespace-normal"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                                        {review.avatar ? (
                                            <Image src={review.avatar} alt={review.name} width={48} height={48} />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gray-300">
                                                {review.name.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-[18px]">{review.name}</h3>
                                        <div className="flex">
                                            {renderStars()}
                                        </div>
                                    </div>
                                    <div className="ml-auto text-[14px] text-gray-500">
                                        {review.date}
                                    </div>
                                </div>
                                <p className="text-[14px]">{review.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
