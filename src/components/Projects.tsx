import youtube from "../assets/projects/youtube.png"
export default function Projects() {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <h2 className="my-20 text-center text-4xl">My Projects </h2>
            < div className="flex justify-between items-center flex-wrap gap-4">
                <div className="flex flex-col justify-center tracking-tight items-center  rounded-lg lg:w-1/4 lg:h-[350px] gap-1 shadow-md shadow-gray-700  hover:bg-slate-500  hover:scale-105 mb-6">
                    <img className="h-full inline-block " src={youtube} />
                </div>
                <div className="flex flex-col justify-center tracking-tight items-center  rounded-lg lg:w-1/4 lg:h-[350px] gap-1 shadow-md shadow-gray-700  hover:bg-slate-500  hover:scale-105 mb-6">
                    <img className="h-full inline-block " src={youtube} />
                </div>
                <div className="flex flex-col justify-center tracking-tight items-center  rounded-lg lg:w-1/4 lg:h-[350px] gap-1 shadow-md shadow-gray-700  hover:bg-slate-500  hover:scale-105 mb-6">
                    <img className="h-full inline-block " src={youtube} />
                </div>
                <div className="flex flex-col justify-center tracking-tight items-center  rounded-lg lg:w-1/4 lg:h-[350px] gap-1 shadow-md shadow-gray-700  hover:bg-slate-500  hover:scale-105 mb-6">
                    <img className="h-full inline-block " src={youtube} />

                </div>
                <div className="flex flex-col justify-center tracking-tight items-center  rounded-lg lg:w-1/4 lg:h-[350px] gap-1 shadow-md shadow-gray-700  hover:bg-slate-500  hover:scale-105 mb-6 ">
                    <img className="h-full inline-block " src={youtube} />

                </div>
                <div className="flex flex-col justify-center tracking-tight items-center  rounded-lg lg:w-1/4 lg:h-[350px] gap-1 shadow-md shadow-gray-700  hover:bg-slate-500  hover:scale-105  mb-6">
                    <img className="h-full inline-block " src={youtube} />
                </div>

            </div>
        </div>

    )
}
