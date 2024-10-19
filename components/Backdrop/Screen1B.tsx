import Button from "../General/Button";
import Title from "./Title";

export default function Screen1B() {
    return (
        <div className="flex h-full flex-col">
            <Title title="Token Details" />
            <div className="p-10 flex flex-col gap-5 justify-center items-center text-center text-[#ECEDEE] flex-1">
                <img src="ton1.png" width={160} height={33} alt="" />
                <div className="flex flex-col justify-center items-center mt-10">
                    <p className="w-80"><b className="text-prim">TonPump</b> wants to perform
                        on wallet UGnxfddd847..Uv-ld</p>
                    <p className="text-xs w-60 mt-4">2 TON(without fees) will be deducted from your TON wallet balance</p>
                </div>
                <div className="flex flex-col mt-10 gap-5">
                    <Button title="Allow transaction" />
                    <p className="font-bold text-prim">0.2 TON is charged for deployment</p>
                </div>
            </div>
        </div>
    )
}
