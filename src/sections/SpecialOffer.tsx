"use client";

const SpecialOffer = () => {
    return (
        <section className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white">
            <div className="container mx-auto px-4 py-8 flex items-center justify-center">
                <div className="text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4 leading-tight">
                        Special Offer on Gutter Cleaning Services
                    </h2>

                    <p className="text-xl md:text-2xl mb-2 font-semibold">
                        Only until December 15th
                    </p>

                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-300 mb-4">
                        20% OFF
                    </p>

                    <div className="mt-6">
                        <a
                            href="#contact"
                            className="inline-block bg-white text-green-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
                        >
                            Get Your Discount Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffer;
