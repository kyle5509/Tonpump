import Button from "../General/Button";
import Title from "./Title";

export default function Screen2B() {
    return (
        <div className="flex h-full flex-col">
            <Title title="Token Details" />
            <div className="p-10 flex flex-col gap-5 justify-center items-center text-center text-[#ECEDEE] flex-1">
                <img src="check-circle.png" alt="" />
                <p className="font-semibold mb-4 mt-3 text-base text-prim">Transaction Successful</p>
                <p className="w-60 text-[#ECEDEE] text-xs">0.2 TON has been deducted from your TON wallet balance</p>
                <div className="flex flex-col mt-12 gap-5">
                    <Button title="Go Back" />
                </div>
            </div>
        </div>
    )
}
