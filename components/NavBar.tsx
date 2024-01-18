'use client';
import { useRouter } from "next/navigation";
import Image from "next/image";

const NavBar = () => {
    const router = useRouter();
    return ( 
        <div className="
            h-24 
            w-full 
            flex
            items-center
            justify-between 
            m-auto
            "
        >
            <div onClick={() => { router.push('/')}} 
            className="font-integral-cf-bold text-4xl cursor-default ml-12">
                SHOP.CO
            </div>
            <div className="flex justify-between items-center mt-2">
                <ul className="font-satoshi text-xl flex justify-center items-center  gap-4">
                    <li className="flex justify-normal cursor-default gap-1
                    "
                    onClick={() => {}}
                    >
                        Shop
                        <Image className="mt-2"
                            height={17}
                            width={17}
                            src="/elements/DownChevron.svg"
                            alt=""
                        />
                    </li>
                    <li className="cursor-default" onClick={() => {}}>On Sale</li>
                    <li className="cursor-default" onClick={() => {}}>New Arrivals</li>
                    <li className="cursor-default" onClick={() => {}}>Brands</li>
                </ul>
            </div>
            <div >
                <div className="relative mt-2"> 
                    <input 
                        type="text" 
                        className="
                            pl-10 
                            pr-4 
                            py-2 
                            border 
                            h-12 
                            md:w-[577px] 
                            bg-spanish-gray
                            opacity-30
                            placeholder-black
                            rounded-3xl
                            shadow-2xl
                            focus:text-black 
                            focus:bg-stone-100 
                            focus:opacity-80 
                            focus:outline-none 
                        " 
                        placeholder="Search for products..." 
                    /> 
                <div className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"> 
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.7959 19.2041L16.3437 14.75C17.6787 13.0104 18.3019 10.8282 18.087 8.64607C17.8722 6.4639 16.8353 4.44516 15.1867 2.99937C13.5382 1.55357 11.4014 0.788988 9.20984 0.860713C7.01829 0.932437 4.93607 1.8351 3.38558 3.38559C1.83509 4.93608 0.932429 7.0183 0.860705 9.20985C0.78898 11.4014 1.55356 13.5382 2.99936 15.1867C4.44515 16.8353 6.46389 17.8722 8.64606 18.087C10.8282 18.3019 13.0104 17.6787 14.75 16.3438L19.2059 20.8006C19.3106 20.9053 19.4348 20.9883 19.5715 21.0449C19.7083 21.1016 19.8548 21.1307 20.0028 21.1307C20.1508 21.1307 20.2973 21.1016 20.4341 21.0449C20.5708 20.9883 20.695 20.9053 20.7997 20.8006C20.9043 20.696 20.9873 20.5717 21.044 20.435C21.1006 20.2983 21.1298 20.1517 21.1298 20.0037C21.1298 19.8558 21.1006 19.7092 21.044 19.5725C20.9873 19.4358 20.9043 19.3115 20.7997 19.2069L20.7959 19.2041ZM3.12499 9.5C3.12499 8.23915 3.49888 7.0066 4.19938 5.95824C4.89987 4.90988 5.89551 4.09278 7.06039 3.61027C8.22527 3.12776 9.50707 3.00151 10.7437 3.2475C11.9803 3.49348 13.1162 4.10064 14.0078 4.9922C14.8994 5.88376 15.5065 7.01967 15.7525 8.2563C15.9985 9.49293 15.8722 10.7747 15.3897 11.9396C14.9072 13.1045 14.0901 14.1001 13.0418 14.8006C11.9934 15.5011 10.7608 15.875 9.49999 15.875C7.80977 15.8733 6.18927 15.2011 4.99411 14.0059C3.79894 12.8107 3.12673 11.1902 3.12499 9.5Z" fill="black" fill-opacity="0.4"/>
                    </svg>
                </div> 
            </div> 
            </div>
            <div className="flex justify-between items-center mr-12 mt-2">
                <ul className="flex justify-center items-center gap-4">
                    <li className="cursor-default" onClick={() => {}}>
                        <Image
                            height={24}
                            width={24}
                            quality={100}
                            src="/elements/ShoppingCart.svg"
                            alt=""
                        />
                    </li>
                    <li className="cursor-default" onClick={() => {}}>
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

