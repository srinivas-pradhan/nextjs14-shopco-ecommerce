'use client';
import { useRouter } from "next/navigation";
import Image from "next/image";


const NavBar = () => {
    const router = useRouter();
    return ( 
        <div className="h-24 w-full bg-slate-400">
            <div onClick={() => { router.push('/')}} 
            className="font-integral-cf-bold text-4xl cursor-default">
                SHOP.CO
            </div>
            <div>
                <ul className="font-satoshi text-xl">
                    <li className="flex justify-normal gap-1">
                        Shop
                        <Image className="py-3"
                            height={17}
                            width={17}
                            src="/elements/DownChevron.svg"
                            alt=""
                        />
                    </li>
                    <li>On Sale</li>
                    <li>New Arrivals</li>
                    <li>Brands</li>
                </ul>
            </div>
            <div>
                SEARCH BOX
            </div>
            <div>
                <ul>
                    <li>
                        <Image
                            height={24}
                            width={24}
                            quality={100}
                            src="/elements/ShoppingCart.svg"
                            alt=""
                        />
                    </li>
                    <li>
                        <Image
                            height={24}
                            width={24}
                            src="/elements/LoginButton.svg"
                            alt=""
                        />
                    </li>
                </ul>
            </div>

        </div>
     );
}
 
export default NavBar;

<div className="h-20 bg-slate-400">

</div>
