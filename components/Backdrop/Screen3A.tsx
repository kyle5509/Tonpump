import Link from "next/link";
import Button from "../General/Button";
import Title from "./Title";

export default function Screen3A() {
    return (
        <div className="flex h-full  flex-col">
            <Title title="Scan with Coinbase" />
            <div className="p-10 flex justify-between flex-col flex-1">
                <div className=""></div>
                <div className="flex flex-col justify-center items-center">
                    <img src="coinbasee.png" alt="" />
                    <p className="text-white text-xl text-13 font-bold mt-4 mb-2">Coinbase Wallet</p>
                    <div className="text-prim">
                        <p>Waiting for Connection</p>
                    </div>
                </div>
                <div className="flex text-prim items-center justify-between">
                    <Link href={'/'}>Using the mobile app?</Link>
                    <p className="px-5 py-2 rounded-full bg-[#475861]">Show QR</p>
                </div>
            </div>
        </div>
    )
}
