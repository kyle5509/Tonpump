import Link from "next/link";
import Button from "../General/Button";
import Title from "./Title";

export default function Screen2A() {
    return (
        <div className="flex h-full  flex-col">
            <Title title="Scan with Coinbase" />
            <div className="p-10 flex flex-col flex-1">
                <div className="flex relative flex-1">
                    <img src="qrcode.png" className="w-full object-contain h-full absolute obc" alt="" />
                </div>
                <div className="flex pt-8 text-prim items-center justify-between">
                    <Link href={'/'}>Don’t have the Coinbase app?</Link>
                    <p className="px-5 py-2 rounded-full bg-[#475861]">Get</p>
                </div>
            </div>
        </div>
    )
}
