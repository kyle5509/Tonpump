import { HiOutlineStar } from "react-icons/hi";
import Creator from "./Creator";

export default function TrendingCard() {
    return (
        <div className="flex gap-3 bg-[#D8FDFD0F] border border-[#8996A9] p-2 lg:p-4 pb-6 rounded-xl lg:rounded-[20px]">
            <div className="flex flex-col">
                <div className="h-10 md:h-12 lg:h-14 w-10 md:w-12 lg:w-14 shrink-0 rounded-full border-2"></div>
                <div className="flex-1 items-center flex justify-center">
                    <HiOutlineStar size={20} className="text-prim sm:block md:hidden hidden cursor-pointer" />
                </div>
            </div>
            <div className="w-full">
                <div className="flex justify-between sm:flex-row flex-col">
                    <div className="flex justify-between relative flex-col ">
                        <p><strong>Spaceman (#Space)</strong> <span className="text-prim block mt-1 sm:mt-0 sm:inline-block text-xs sm:ml-4"> Market Cap - 11.5k</span></p>
                        {/* <span className="text-prim 3xl:hidden">Market Cap - 11.5k</span> */}
                        <HiOutlineStar size={20} className="text-prim absolute top-1 sm:hidden right-1 cursor-pointer" />
                    </div>
                    <Creator />
                </div>
                <p className="text-13 mt-2"><b>Space Man (#Space)</b> is a cryptocurrency project based on inspirations from a man who visited the moon...</p>
            </div>
        </div>
    )
}
