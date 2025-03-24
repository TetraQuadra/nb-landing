"use client";

import { useState } from "react";
import Image from "next/image";

interface FormStatus {
    submitted: boolean;
    submitting: boolean;
    info: {
        error: boolean;
        msg: string | null;
    };
}

interface FormInputs {
    name: string;
    rating: number;
    message: string;
    date: string;
}

const Feedback = () => {
    const [formStatus, setFormStatus] = useState<FormStatus>({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    });

    const [inputs, setInputs] = useState<FormInputs>({
        name: "",
        rating: 0,
        message: "",
        date: new Date().toISOString().split('T')[0]
    });

    const handleServerResponse = (ok: boolean, msg: string) => {
        if (ok) {
            setFormStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg }
            });
            setInputs({
                name: "",
                rating: 0,
                message: "",
                date: new Date().toISOString().split('T')[0]
            });
        } else {
            setFormStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg }
            });
        }
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setInputs((prev) => ({
            ...prev,
            [name]: value
        }));

        setFormStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
        });
    };

    const handleRatingChange = (rating: number) => {
        setInputs((prev) => ({
            ...prev,
            rating: rating
        }));
    };

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setFormStatus({
            submitted: false,
            submitting: true,
            info: { error: false, msg: null }
        });

        const formData = new FormData();
        const updatedInputs = {
            ...inputs,
            date: new Date().toISOString().split('T')[0]
        };

        Object.entries(updatedInputs).forEach(([key, value]) => {
            formData.append(key, value.toString());
        });

        fetch("https://formspree.io/f/xpwpdpqn", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    handleServerResponse(true, "Thank you for your feedback!");
                } else {
                    response.json().then((json: { error?: string }) => {
                        handleServerResponse(false, json.error || "An error occurred. Please try again.");
                    });
                }
            })
            .catch(() => {
                handleServerResponse(false, "An error occurred. Please try again.");
            });
    };

    return (
        <section className="w-full py-16 " id="feedback">
            <div className="mx-auto container px-2 max-lg:max-w-[600px]">
                <h1 className="text-[40px] font-[500] text-center mb-8">Leave a <span className="text-green-600">feedback</span></h1>

                {formStatus.submitted ? (
                    <div className="text-center p-6 bg-green-50 rounded-[12px] border-2 border-green-600 max-w-[600px] mx-auto">
                        <h3 className="text-[24px] font-medium text-green-600 mb-2">Thank you!</h3>
                        <p className="text-[16px]">Your feedback has been successfully sent.</p>
                    </div>
                ) : (
                    <form className="flex flex-col gap-6 px-4 max-w-[600px] mx-auto" onSubmit={handleOnSubmit}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-[16px] font-medium">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={inputs.name}
                                onChange={handleOnChange}
                                className="border-[2px] border-[#ADADAD] rounded-[12px] p-3 focus:outline-none focus:border-green-600"
                                placeholder="Your name"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[16px] font-medium">Rating</label>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => handleRatingChange(star)}
                                        className="focus:outline-none"
                                    >
                                        <svg
                                            width="36"
                                            height="36"
                                            viewBox="0 0 24 24"
                                            fill={star <= inputs.rating ? "#16A34A" : "none"}
                                            stroke={star <= inputs.rating ? "#16A34A" : "#ADADAD"}
                                            strokeWidth="2"
                                            className="hover:scale-110 transition-transform"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                            <input type="hidden" name="rating" value={inputs.rating} />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-[16px] font-medium">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={inputs.message}
                                onChange={handleOnChange}
                                rows={5}
                                className="border-[2px] border-[#ADADAD] rounded-[12px] p-3 focus:outline-none focus:border-green-600 resize-none"
                                placeholder="Write your feedback..."
                                required
                            ></textarea>
                        </div>

                        <input type="hidden" name="date" value={inputs.date} />

                        <button
                            type="submit"
                            className="bg-green-600 text-white font-medium py-3 px-[50px] rounded-[12px] hover:bg-green-700 transition-colors self-center mt-2 flex items-center gap-2 max-md:w-full justify-center cursor-pointer"
                            disabled={formStatus.submitting}
                        >
                            {formStatus.submitting ? (
                                "Sending..."
                            ) : (
                                <>
                                    Send feedback
                                    <Image src="/arrow-right.svg" alt="arrow-right" width={20} height={20} />
                                </>
                            )}
                        </button>

                        {formStatus.info.error && (
                            <div className="text-red-500 text-center mt-2">
                                {formStatus.info.msg}
                            </div>
                        )}
                    </form>
                )}
            </div>
        </section>
    )
}

export default Feedback;
