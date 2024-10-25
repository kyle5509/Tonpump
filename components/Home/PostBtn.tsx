import { BiEdit } from "react-icons/bi";

export default function PostBtn() {
  return (
    <div>
        <div className="h-14 w-14 rounded-full grid place-content-center border-2 absolute bottom-5 right-5 bg-prim text-black">
            <BiEdit size={25}/>
        </div>
    </div>
  )
}
