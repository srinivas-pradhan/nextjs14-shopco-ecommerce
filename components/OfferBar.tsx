'use client';
import Image from "next/image";

const OfferBar = () => {
    return ( 
        <div className="bg-black h-10 w-full flex justify-between items-center">
            <div className="w-[85%] flex items-center justify-center mx-auto">
                <ul className="flex items-center justify-center mx-auto">
                    <li className="text-white font-satoshi md:text-base text-xs px-3">
                        Sign up and get 20% off to your first order.
                    </li>
                    <li className="underline cursor-pointer text-white font-satoshi md:text-base text-xs"
                        onClick={() =>{}}
                    >
                    Sign Up Now
                    </li>
                </ul>
                <div className="cursor-pointer text-white font-satoshi md:text-sm text-xs hidden md:block"
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
