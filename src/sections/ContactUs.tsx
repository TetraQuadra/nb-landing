"use client";

import Image from "next/image";
import { useState } from "react";

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
    email: string;
    phone: string;
    message: string;
}

interface FormErrors {
    email: string | null;
    phone: string | null;
}

const ContactUs = () => {
    const [formStatus, setFormStatus] = useState<FormStatus>({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    });

    const [inputs, setInputs] = useState<FormInputs>({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [errors, setErrors] = useState<FormErrors>({
        email: null,
        phone: null
    });

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone: string): boolean => {
        // Проверяем, что телефон содержит только цифры, плюс, пробелы, скобки и дефисы
        const phoneRegex = /^[0-9\+\(\)\s\-]+$/;
        return phoneRegex.test(phone);
    };

    const handleServerResponse = (ok: boolean, msg: string) => {
        if (ok) {
            setFormStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg }
            });
            setInputs({
                name: "",
                email: "",
                phone: "",
                message: ""
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

        // Если это поле телефона, проверяем, что вводятся только разрешенные символы
        if (name === 'phone') {
            // Если ввод не проходит валидацию и значение не пустое, не обновляем состояние
            if (value !== '' && !validatePhone(value)) {
                return;
            }
        }

        setInputs((prev) => ({
            ...prev,
            [name]: value
        }));

        // Очищаем ошибки при изменении значения
        if (name === 'email' || name === 'phone') {
            setErrors(prev => ({
                ...prev,
                [name]: null
            }));
        }

        setFormStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
        });
    };

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let hasErrors = false;
        const newErrors: FormErrors = { email: null, phone: null };

        if (!validateEmail(inputs.email)) {
            newErrors.email = "Please enter a valid email address";
            hasErrors = true;
        }

        if (inputs.phone.trim() === '') {
            newErrors.phone = "Please enter a valid phone number";
            hasErrors = true;
        }

        setErrors(newErrors);

        if (hasErrors) {
            return;
        }

        setFormStatus({
            submitted: false,
            submitting: true,
            info: { error: false, msg: null }
        });

        const formData = new FormData();
        Object.entries(inputs).forEach(([key, value]) => {
            formData.append(key, value);
        });

        fetch("https://formspree.io/f/xvgkzjrd", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    handleServerResponse(true, "Thank you for your request!");
                } else {
                    response.json().then((json: { error?: string }) => {
                        handleServerResponse(false, json.error || "An error occurred. Please try again.");
                    });
                }
            })
            .catch(() => {
                handleServerResponse(false, "Произошла ошибка. Пожалуйста, попробуйте еще раз.");
            });
    };

    return (
        <section className="container mx-auto py-16 px-2 w-full">

            <div className="flex gap-16">
                <div className="max-w-[600px] w-full mx-auto">
                    <h2 className="text-[40px] font-[500] text-center mb-8">Requaste the quote</h2>
                    {formStatus.submitted ? (
                        <div className="text-center p-6 bg-green-50 rounded-[12px] border-2 border-green-600">
                            <h3 className="text-[24px] font-medium text-green-600 mb-2">Thank you!</h3>
                            <p className="text-[16px]">Your request has been sent successfully. We will contact you soon.</p>
                        </div>
                    ) : (
                        <form className="flex flex-col gap-6 px-4" onSubmit={handleOnSubmit}>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-[16px] font-medium">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={inputs.name}
                                    onChange={handleOnChange}
                                    className="border-[2px] border-[#ADADAD] rounded-[12px] p-3 focus:outline-none focus:border-green-600"
                                    placeholder="Name"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="phone" className="text-[16px] font-medium">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={inputs.phone}
                                    onChange={handleOnChange}
                                    className={`border-[2px] ${errors.phone ? 'border-red-500' : 'border-[#ADADAD]'} rounded-[12px] p-3 focus:outline-none focus:border-green-600`}
                                    placeholder="+44 7___ ______"
                                    required
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-[12px] mt-1">{errors.phone}</p>
                                )}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-[16px] font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={inputs.email}
                                    onChange={handleOnChange}
                                    className={`border-[2px] ${errors.email ? 'border-red-500' : 'border-[#ADADAD]'} rounded-[12px] p-3 focus:outline-none focus:border-green-600`}
                                    placeholder="example@mail.com"
                                    required
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>
                                )}
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
                                    placeholder="Enter your message..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-green-600 text-white font-medium py-3 px-[50px] rounded-[12px] hover:bg-green-700 transition-colors self-center mt-2 flex items-center gap-2 max-md:w-full justify-center"
                                disabled={formStatus.submitting}
                            >
                                {formStatus.submitting ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Contact us
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
                <Image className="hidden lg:block" src="/contact-us/imagepc.png" alt="contact-us-image" width={590} height={670} />
            </div>
            <div className="w-full flex justify-center lg:hidden mt-[24px]">
                <Image className="w-full" src="/contact-us/imagemb.png" alt="contact-us-image" width={590} height={670} />
            </div>
        </section>
    );
};

export default ContactUs;
