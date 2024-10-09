import React from "react"

import Avatar from "../assets/image/avatar.svg"
import { BiHome } from "react-icons/bi"
import { IoMdNotificationsOutline } from "react-icons/io"
import { IoStorefrontOutline } from "react-icons/io5"
import { RiSettingsLine } from "react-icons/ri"
import { GiHamburgerMenu } from "react-icons/gi"

const CustomerSidebar = () => {
    return (
        <div className="w-full sm:hidden md:block md:h-[80vh] md:w-fit sticky top-7">
            <div className="h-full flex flex-col item-center justify-between">
                <div className="w-full rounded-full flex flex-col item-center justify-center gap-1 bg-[--light-white] p-1">
                    <div className="bg-[--secondary-color] rounded-full w-full p-3 flex justify-center items-center cursor-pointer">
                        <BiHome className="text-2xl text-white" />
                    </div>
                    <div className="rounded-full w-full p-3 flex justify-center items-center cursor-pointer">
                        <IoStorefrontOutline className="text-2xl" />
                    </div>
                    <div className="rounded-full w-full p-3 flex justify-center items-center cursor-pointer">
                        <IoMdNotificationsOutline className="text-2xl" />
                    </div>
                    <div className="rounded-full w-full p-3 flex justify-center items-center cursor-pointer">
                        <RiSettingsLine className="text-2xl" />
                    </div>
                </div>
                <div className="w-full rounded-full flex flex-col item-center justify-center gap-1 bg-[--light-white] p-1">
                    <div className="rounded-full w-full p-3 flex justify-center items-center cursor-pointer">
                        <GiHamburgerMenu className="text-2xl text-black" />
                    </div>
                    <div className=" rounded-full w-full p-3 flex justify-center items-center cursor-pointer">
                        <img
                            src={Avatar}
                            className="rounded-full object-cover"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerSidebar
