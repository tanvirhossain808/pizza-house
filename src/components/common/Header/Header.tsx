"use client";
import Image from "next/image";
import Link from "next/link";
import { FaCartShopping, FaRegMoon } from "react-icons/fa6";
import { GrUserAdmin } from "react-icons/gr";
import { MdLogout, MdOutlineWbSunny } from "react-icons/md";


const Header = () => {
    const accessKey = '9BJDMw1oGS6IpMlfQmbQx-3891_MYxaz0LLBDxI50uo';
    const fs = async () => {
        fetch('https://api.pexels.com/v1/search?query=pizza&per_page=10', {
            headers: {
                'Authorization': "s8JxV3UVPVx3YH77EP49LX4SfxAfTwgyicYo38UPF0q4ABMsijoUoS8F"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            }
            )

    }
    fs()
    console.log("object");
    return (
        <div className="p-3 container flex items-center">
            <Link href={"/"} className="flex title-font font-extrabold items-center uppercase text-gray-100">
                <Image src="/Pizza.svg" width={60} height={60} alt="logo" />
                <p className="text-xl">Pizza House</p>
            </Link>
            <nav className="flex items-center gap-5 ml-auto mr-5">
                <Link href={"/cart"} className="flex items-center text-gray-200">
                    Cart
                    <FaCartShopping className="mx-1" />
                    <span className="py-1 px-2 text-red-500 font-medium bg-red-50 text-xs rounded-full">
                        0
                    </span>
                </Link>
                <Link href={"/cart"} className="flex items-center text-gray-200">
                    My Orders
                    <FaCartShopping className="mx-1" />
                </Link>
                <Link href={"/cart"} className="flex items-center text-gray-200">
                    Admin
                    <GrUserAdmin className="ms-1" />
                </Link>
                <Link href={"/cart"} className="flex items-center text-gray-200">
                    Log Out
                    <MdLogout className="mx-1" />
                </Link>
                <Link href={"/cart"} className="flex items-center text-gray-200">
                    Sign in
                    <MdLogout className="mx-1" />
                </Link>
            </nav>
            <button className="flex items-center text-black p-1 rounded-full bg-white">
                <FaRegMoon />
                /
                <MdOutlineWbSunny />
            </button>
        </div>

    );
};

export default Header;