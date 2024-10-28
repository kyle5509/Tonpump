import { BiChevronDown } from 'react-icons/bi'

export default function LoggedUser() {
    return (
        <div className="flex mb-5 border-prim cursor-pointer bg-[#3C4141] text-white border-2 rounded-xl p-2 gap-3 w-full items-center">
            <div className="h-10 w-10 border-prim rounded-full shrink-0 border-2 grid place-content-center">
                <img src="signupLogo.svg" className='h-4' alt="" />
            </div>
            <div className="">
                <p className="text-sm font-semibold">Sarah Connoh </p>
                <p className="text-xs">Udwuy6716063603</p>
            </div>
            <BiChevronDown className="ml-auto text-2xl" />
        </div>)
}
