'use client';
import { Details } from '@/utils/platformdata';

export const LandingScreen = () => {
    return ( 
        <div className="flex">
            <div className="
                w-full
                md:h-[675px]
                h-[853px]
                md:resize-x
                md:bg-main-screen
                md:bg-contain
                md:bg-no-repeat
                bg-mobile-background
                "
            >
                <div className="float-none">
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
                        flex
                        lg:ml-20
                        md:ml-2
                        xs:ml-6
                        md:mt-0
                        mt-10
                        lg:mt-12
                        divide-x 
                        divide-dotted
                        divide-stone-400 
                        "
                    >
                        {Details.map((detail) =>(
                            <div className="
                                xl:text-3xl 
                                lg:text-2xl 
                                xs:text-lg 
                                md:-mt-4 
                                xl:px-8 
                                lg:px-4 
                                px-4
                                justify-center
                                font-satoshi-bold
                                " 
                                key={detail.count}
                            >
                                {detail.count}
                                <div className="
                                    text-xs 
                                    font-satoshi
                                    flex-wrap
                                    " 
                                    key={detail.name}
                                >
                                    {detail.name}
                                </div>
                            </div> 
                        ))}
                    </div>
                </div>
                {/* <div className="hidden md:float-right">
                <div className="
                        md:flex-auto
                        lg:-ml-[250%]
                        md:-mt-[120%]
                        md:-ml-[100%]
                        md:bg-diamond-sm 
                        md:w-44 
                        md:h-44 
                        md:bg-no-repeat
                        "
                    >
                </div>
                <div className="
                        md:flex-auto
                        md:-mt-[130%]
                        md:bg-diamond-lg
                        md:w-44 
                        md:h-44 
                        md:bg-no-repeat
                        "
                    >
                </div>
                </div> */}
                <div className="
                    md:hidden 
                    w-full
                    mt-12
                    h-[448px] 
                    inline-block 
                    align-baseline 
                    bg-contain 
                    bg-no-repeat 
                    bg-main-screen-mobile
                    "
                >
                    <div className="grid grid-cols-2 space-x-24 mt-12 flex-auto">
                        <div className="
                            mt-24
                            ml-6
                            bg-diamond-sm 
                            w-44 
                            h-44 
                            bg-no-repeat
                            "
                        >
                        </div>
                        <div className="
                            flex-auto
                            bg-diamond-lg
                            w-44 
                            h-44 
                            bg-no-repeat
                            "
                        >
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}
 
