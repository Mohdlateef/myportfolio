import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
export default function About() {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            < h2 className="text-center text-3xl my-20" > About <span> Me</span></h2 >
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8 ">
                    <div className="flex items-center justify-center"></div>
                    <img className="rounded-2xl" src={aboutImg} alt="about" />
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
