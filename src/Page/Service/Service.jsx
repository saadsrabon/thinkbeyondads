import React from 'react';

const Service = () => {
    return (
        <div>
            <div className="relative w-full bg-[#0F0F0F] overflow-hidden">

                <div className="container mx-auto px-6 py-20 md:py-28 lg:py-32">
                    <div className="max-w-3xl">
                        <h2 className="text-[#4ECDC4] text-xl md:text-2xl font-medium mb-3">
                            Digital Marketing Services
                        </h2>
                        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                            Tailored to Fuel Your <br className="hidden md:block" />
                            Success.
                        </h1>
                        <button className="border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 py-3 px-12 rounded-full text-lg font-medium hover:cursor-pointer">
                            Contact Us
                        </button>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Service;