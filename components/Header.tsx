import Image from "next/image";
import {BellIcon, SearchIcon} from "@heroicons/react/solid";
import Link from "next/link";
import {useEffect, useState} from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={`${isScrolled && "bg-[#141414]"}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <Image
                    src={require('/public/static/images/netflix-logo.svg')}
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain"
                />
                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink">Home</li>
                    <li className="headerLink">TV Shows</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">New & Popular</li>
                    <li className="headerLink">My List</li>
                </ul>
            </div>
            <div className="flex items-center space-x-4 text-sm font-light">
                <SearchIcon className="h-6 w-6 hidden sm:inline"/>
                <p className="hidden lg:inline">Kids</p>
                <BellIcon className="h-6 w-6"/>
                <div>
                    <Link href='/account'>
                        <Image src={require('/public/static/images/account-icon.png')}
                               alt=""
                               className="cursor-pointer rounded"/>
                    </Link>
                </div>

            </div>
        </header>
    );
};

export default Header;