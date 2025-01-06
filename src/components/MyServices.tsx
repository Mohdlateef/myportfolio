import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaHive } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { My_services } from "../constants"

export default function MyServices() {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <h2 className="my-20 text-center text-4xl">My Serivices </h2>
            <div>
                <div className="flex justify-between items-center flex-wrap">
                    <div className="flex flex-col justify-center tracking-tight items-center p-2  rounded-lg lg:w-1/4 gap-1 shadow-md shadow-gray-700 p-3 hover:bg-slate-500  hover:scale-105">
                        <HiOutlineDesktopComputer className="text-white text-7xl my-5" />


                        <h3 className="text-white text-xl font-bold">Frontend Development</h3>
                        <p className="text-white">{My_services}</p>

                    </div>
                    <div className="flex flex-col justify-center tracking-tight items-center rounded-lg lg:w-1/4 gap-1 shadow-md shadow-gray-700 p-3  hover:bg-slate-500  hover:scale-105">
                        <FaHive className="text-white text-7xl my-5" />


                        <h3 className="text-white text-xl font-bold">Backend Development</h3>
                        <p className="text-white">{My_services}</p>

                    </div><div className="flex flex-col justify-center tracking-tight items-center p-2  rounded-lg lg:w-1/4 gap-1 shadow-md shadow-gray-700 p-3 hover:bg-slate-500  hover:scale-105">
                        <MdComputer className="text-white text-7xl my-5" />


                        <h3 className="text-white text-xl font-bold">Responsive Web Desing</h3>
                        <p className="text-white">{My_services}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
