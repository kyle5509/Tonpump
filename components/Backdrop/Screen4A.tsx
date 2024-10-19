import Link from "next/link";
import Button from "../General/Button";
import Title from "./Title";

export default function Screen4A() {
    return (
        <div className="flex h-full  flex-col">
            <Title title="Scan with Coinbase" />
            <div className="p-10 flex justify-between flex-col flex-1">
                <div className=""></div>
                <div className="flex flex-col justify-center items-center">
                    <img src="coinbasee.png" alt="" />
                    <p className="text-white text-xl font-bold mt-4 mb-2">Coinbase Wallet</p>
                    <div className="text-prim flex text-13 items-center gap-2">
                        <img src="check1.png" alt="" />
                        <p>Connection Successful</p>
                    </div>
                </div>
                <Button title="Done"/>
            </div>
        </div>
    )
}
