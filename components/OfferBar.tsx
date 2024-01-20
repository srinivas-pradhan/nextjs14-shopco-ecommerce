'use client';
import Image from "next/image";
import { useState } from "react";

const OfferBar = () => {
    const [closeOfferBar, SetcloseOfferBar] = useState(false);

    const CloseBar = () => {
        SetcloseOfferBar(true);
    }
    return ( 
        <div onClick={CloseBar} className={
            closeOfferBar 
                ? "bg-black h-0 ease-out duration-500"
                : "bg-black h-10 w-full flex justify-between items-center"

            }
        >
            <div className="md:w-[85%] w-[92%] flex items-center justify-center mx-auto">
                <ul className="flex items-center justify-center mx-auto">
                    <li className={
                        closeOfferBar
                            ? "text-white invisible ease-out duration-500"
                            : "text-white font-satoshi md:text-base text-xs px-3"
                        }
                    >
                        Sign up and get 20% off to your first order.
                    </li>
                    <li className={
                        closeOfferBar
                            ? "text-white invisible ease-out duration-500"
                            : "underline cursor-pointer text-white font-satoshi md:text-base text-xs"
                        }
                        onClick={() =>{}}
                    >
                    Sign Up Now
                    </li>
                </ul>
                <div className="cursor-pointer text-white font-satoshi md:text-sm text-xs hidden md:block oncl"
                    onClick={() => {}}
                >
                    <Image
                        height={15}
                        width={15}
                        src="/elements/X.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
 
export default OfferBar;
