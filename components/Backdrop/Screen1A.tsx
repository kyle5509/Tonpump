import Button from "../General/Button";
import Title from "./Title";

export default function Screen1A() {
  return (
    <div className="flex h-full flex-col">
      <Title title="What is a Wallet" />
      <div className="p-10 flex flex-col flex-1">
        <div className="flex gap-3 items-center text-white">
          <img src="icon.png" alt="" />
          <div className="flex flex-col">
            <p className="font-semibold text-13">A Home for your Digital Assets</p>
            <p className="text-xs text-[#FFFFFF]">Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs.</p>
          </div>
        </div>
        <div className="flex gap-3 mt-10 items-center text-white">
          <img src="1con1.png" alt="" />
          <div className="flex flex-col">
            <p className="font-semibold text-13">A New Way to Log In</p>
            <p className="text-xs text-[#FFFFFF]">Instead of creating new accounts and passwords on every website, just connect your wallet instead.</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 flex-1 justify-end items-center">
          <Button title="Get a Wallet" />
          <p className="text-sm font-semibold text-prim">Learn More</p>
        </div>
      </div>
    </div>
  )
}
