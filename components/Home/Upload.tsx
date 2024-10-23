import { BsStar } from "react-icons/bs";

export default function Upload() {
    return (
        <div className="flex p-4 border-[#8996A9] rounded-lg border gap-5">
            <div className="h-14 w-14 border-2 rounded-full shrink-0"></div>
            <div className="flex-1">
                <div className="w-full h-12">
                    <input type="text" className="h-full w-full bg-transparent outline-none border-none " placeholder="What's happening"/>
                </div>
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <BsStar />
                        <BsStar />
                        <BsStar />
                        <BsStar />
                        <BsStar />
                    </div>
                    <p className="px-7 py-3 rounded-full bg-prim text-gray-800 text-sm font-semibold">Post</p>
                </div>
            </div>
        </div>
    )
}
