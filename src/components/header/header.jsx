import React from "react";
import { MenuIcon } from "../../assets/icons/menu-icon";
import { LocationIcon } from "../../assets/icons/location-icon";
import { TelIcon } from "../../assets/icons/tel-icon";

export const Header = () => {
    return (
        <header>
            <div className="hidden md:block py-[9px]">
                <div className="container">
                    <div className="flex gap-[100px] items-center justify-end">
                        <div className="flex gap-[10px] items-center">
                            <a href="#"><LocationIcon /></a>
                            <a className="font-normal text-[10px] text-[#1a1a1a]" href="#">Company Address type here</a>
                        </div>
                        <div className="flex gap-[6px] items-center">
                            <a href="#"><TelIcon /></a>
                            <a className="font-normal text-[10px] text-[#1a1a1a]" href="#">+94 000 00000</a>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ background: "linear-gradient(111deg, #e47500 0%, #df7c14 100%)" }} className=" py-[20px]">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <a className="font-bold text-[20px] md:text-[25px] leading-[155%] text-[#fff]" href="#">LOGO</a>
                        <button className="md:hidden"><MenuIcon /></button>
                        <div className="hidden md:flex gap-[40px] lg:gap-[70px] items-center">
                            <a className="font-normal text-[16px] text-[#fff]" href="#">Home</a>
                            <a className="font-normal text-[16px] text-[#fff]" href="#">About us</a>
                            <a className="font-normal text-[16px] text-[#fff]" href="#">Services</a>
                            <a className="font-normal text-[16px] text-[#fff]" href="#">News</a>
                            <a className="font-normal text-[13px] text-[#dc7000] rounded-[6px] bg-[#fff] py-[11px] px-[28px]" href="#">Contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}