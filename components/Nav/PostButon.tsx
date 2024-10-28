import { RiUploadCloudFill } from "react-icons/ri";

export default function PostButon() {
    return (
        <div className="flex h-12 cursor-pointer duration-300 hover:scale-105 active:scale-100 shadow-md shadow-black justify-center text-white bg-blue-500 w-64 rounded-full mt-4  gap-3 items-center">
            <RiUploadCloudFill className="text-xl" />
            <p className="font-semibold text-base">Post</p>
        </div>
    )
}