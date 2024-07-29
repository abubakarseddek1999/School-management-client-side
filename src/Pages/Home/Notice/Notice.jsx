import Marquee from "react-fast-marquee";
import { MdArrowOutward } from "react-icons/md";

const Notice = () => {
    return (
        <div>
            <div className=" bg-white flex max-w-[1400px] mx-auto ">
                <div className=" bg-[#4F46E5] p-2 flex justify-center items-center gap-1 text-white font-bold text-xl cursor-pointer">
                    <p className="text-white font-bold text-xl whitespace-nowrap">NOTICE </p>
                    <MdArrowOutward />
                </div>
                <div className="w-full flex justify-center items-center">
                    <Marquee>
                        <p className="text-xl p-2 font-bold text-black border">Notices play a vital role in maintaining order and discipline by disseminating crucial information promptly and comprehensively. In educational settings, they keep students and staff informed about academic schedules, events, and administrative updates.</p>
                    </Marquee>

                </div>

            </div>
        </div>
    );
};

export default Notice;