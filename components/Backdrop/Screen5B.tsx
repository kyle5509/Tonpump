import Button from "../General/Button";
import Input from "../General/Input";
import Textarea from "../General/Textarea";
import Title from "./Title";

export default function Screen5B() {
    return (
        <div>
            <div className="flex h-full flex-col">
                <Title title="Token Details" />
                <div className="p-5 flex flex-col gap-5 justify-center items-center text-center text-[#ECEDEE] flex-1">
                    <div className="grid w-full grid-cols-2 gap-5">
                        <Input label="Token Name" placeholder="Enter token name" />
                        <Input label="Symbol" placeholder="Enter token symbol" />
                    </div>
                    <Textarea label="Description" />
                    <div className="grid w-full grid-cols-2 gap-5">
                        <Input label="Initial Supply" placeholder="Enter initial supply" />
                        <Input label="Total Supply" placeholder="Enter total supply" />
                    </div>
                    <div className="grid w-full grid-cols-2 gap-5">
                        <div className="flex gap-3 items-end justify-between">
                            <Input label="Token Icon" placeholder="Upload from file" />
                            <div className="h-11 w-11 shrink-0 bg-[#292F32] rounded-full grid place-content-center">
                                <img src="download.png" alt="" />
                            </div>
                        </div>
                        <div className="">
                            <p className="text-sm mb-[6px] text-start text-[#bdc2c7]">Attach Social Links</p>

                            <div className="flex gap-5">
                                <div className="h-11 w-14 bg-[#292F32] rounded-xl grid place-content-center">
                                    <img src="te.png" alt="" />
                                </div>
                                <div className="h-11 w-14 bg-[#292F32] rounded-xl grid place-content-center">
                                    <img src="x.png" alt="" />

                                </div>
                                <div className="h-11 w-14 bg-[#292F32] rounded-xl grid place-content-center">
                                    <img src="globe.png" alt="" />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-5 mt-5">
                        <Button title="Continue" />
                        <p className="text-prim text-sm font-bold">0.2 TON is charged for deployment</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
