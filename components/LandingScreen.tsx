'use client';

export const LandingScreen = () => {
    return ( 
        <div className="flex">
            <div className="
                w-full
                md:h-[663px]
                h-[853px]
                md:resize-x
                md:bg-main-screen
                md:bg-contain
                md:bg-no-repeat
                bg-mobile-background
                "
            >
                <div className="
                    lg:w-[625px] 
                    w-[400px]
                    text-wrap 
                    lg:pl-24 
                    p-6
                    font-integral-cf-bold 
                    lg:text-5xl
                    md:text-4xl
                    text-4xl
                    "
                >
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </div>
                <div className="
                    font-satoshi 
                    text-wrap 
                    lg:w-[625px]
                    w-[390px]
                    lg:pl-24 
                    pl-6
                    text-gray-400
                    "
                >
                    Browse through our diverse range of meticulously crafted garments, designed to bring your individuality and cater to your sense of style.
                </div>
                <div className="
                    flex 
                    flex-col 
                    items-center 
                    justify-center 
                    lg:ml-24 
                    md:ml-12
                    m-6
                    lg:mt-10 
                    md:mt-2
                    sm:mt-4
                    lg:w-[210px]
                    md:w-[320px]
                    h-[52px] 
                    bg-black 
                    rounded-full 
                    transition 
                    ease-in-out 
                    duration-700 
                    delay-15
                    hover:-translate-y-1 
                    lg:hover:scale-110
                    md:hover:scale-105
                    sm:hover:scale-110
                    "
                    onClick={() =>{}}
                >
                    <div className="
                        text-white 
                        font-satoshi-medium 
                        cursor-default
                        "
                    >
                        Shop Now
                    </div>
                </div>
                <div className="
                    md:hidden 
                    w-full 
                    h-[448px] 
                    inline-block 
                    align-baseline 
                    bg-contain 
                    bg-no-repeat 
                    bg-main-screen-mobile
                    "
                >
                </div>
            </div> 
        </div>
    );
}
 
