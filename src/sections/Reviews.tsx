"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Review {
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
    const allRowRef = useRef<HTMLDivElement>(null);

    const reviews: Review[] = [
        {
            name: "Ioanna",
            rating: 5,
            date: "28/03/2025",
            text: "A very efficient service would recommend",
        },
        {
            name: "Nicky",
            rating: 5,
            date: "28/03/2025",
            text: "Thanks for a great job cleaning my windows . The best we have had. Very professional  and friendly, will definitely recommend and use again.",
        },
        {
            name: "Joseph Bassey",
            rating: 5,
            date: "27/03/2025",
            text: "Great guy. Great job. Reliable. Give it a try...",
        },
        {
            name: "Linda Hales",
            rating: 5,
            date: "26/03/2025",
            text: "Thank you for your help, good job.",
        },
        {
            name: "Debbie",
            rating: 5,
            date: "26/03/2025",
            text: "I didn't fancy being up a ladder at roof height. N&B cleaning did a very thorough job cleaning my fascias and leaving them sparkling. Very friendly, reliable, team and I'm very happy with their work.",
        },
        {
            name: "D Smith",
            rating: 5,
            date: "11/04/2025",
            text: "I’m happy with his work and highly recommend him",
        },
        {
            name: "Hannah McKinney",
            rating: 5,
            date: "09/04/2025",
            text: "Good, reliable and friendly window cleaner. Would recommend.",
        },
        {
            name: "Alex McKinney",
            rating: 5,
            date: "04/04/2025",
            text: "Friendly, reliable and does a great job on windows and gutters. Highly recommended.",
        },
        {
            name: "Ruari Haines",
            rating: 5,
            date: "09/04/2025",
            text: "5 stars!",
        },
        {
            name: "Mykola Bondariev",
            rating: 5,
            date: "08/04/2025",
            text: "Very nice service, would recommend",
        },
    ];

    useEffect(() => {
        const animate = () => {
            if (isHovering) return;

            if (window.innerWidth >= 768) {
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
            }
            else {
                if (allRowRef.current) {
                    allRowRef.current.scrollLeft += 1;
                    if (allRowRef.current.scrollLeft >= allRowRef.current.scrollWidth / 2) {
                        allRowRef.current.scrollLeft = 0;
                    }
                }
            }
        };

        const animationInterval = setInterval(animate, 30);

        return () => clearInterval(animationInterval);
    }, [isHovering]);

    const firstRow = [...reviews.slice(0, 5), ...reviews.slice(0, 5)];
    const secondRow = [...reviews.slice(5, 10), ...reviews.slice(5, 10)];
    const allReviews = [...reviews, ...reviews];

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

    const renderReviewCard = (review: Review, index: number, rowKey: string) => (
        <div
            key={`${rowKey}-${index}`}
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
    );

    return (
        <section className="py-16 w-full overflow-hidden bg-[#F9F5EC]" id="reviews">
            <div className="container mx-auto">
                <h1 className="text-[40px] font-[500] text-center mb-12"><span className="text-green-600">Our</span> Reviews</h1>

                <div
                    className="md:hidden w-full relative"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <div
                        ref={allRowRef}
                        className="flex gap-6 overflow-x-hidden whitespace-nowrap"
                    >
                        {allReviews.map((review, index) => renderReviewCard(review, index, 'mobile'))}
                    </div>
                </div>

                <div
                    className="max-md:hidden w-full relative"
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
                        {firstRow.map((review, index) => renderReviewCard(review, index, 'row1'))}
                    </div>

                    {secondRow.length > 0 && (
                        <div
                            ref={rowTwoRef}
                            className="flex gap-6 pl-[175px] overflow-x-hidden whitespace-nowrap"
                        >
                            {secondRow.map((review, index) => renderReviewCard(review, index, 'row2'))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
