import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="relative h-[25rem] rounded-lg w-full">
            <Image
                className="absolute top-0 left-0 h-full w-full object-cover -z-50"
                src="/images/hero.webp"
                width={1000}
                height={1000}
                alt="Hero background image"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-40"></div>
            <div className="flex items-center justify-center flex-col w-full h-full px-28">
                <p className="text-white text-xl md:text-2xl lg:text-5xl font-semibold  text-center" style={{lineHeight: "4rem"}}>Stay Ahead Of The Curve: Stay Informed With Our Blog For The Latest Industry Insights</p>
                <p className="text-white text-center mt-4">Insights that inspire success: uncover a wealth of knowledge by staying updated</p>
            </div>
        </div>
    )
}

export default Hero;