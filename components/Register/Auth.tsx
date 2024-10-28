import { FaTimes } from "react-icons/fa";
import Input from "../General/Input";
import { Dispatch, SetStateAction, useState } from "react";
import About from "./About";
import Register from "./Register";
import Login from "./Login";

type Props = {
    opened: number
    setOpened: Dispatch<SetStateAction<number>>
}

export default function Auth({ opened, setOpened }: Props) {
    const [name, setName] = useState('')
    const updateName = (name: string) => {
        setName(name)
    }

    return (
        <div className={`h-screen bg-black/20 rounded-3xl duration-300 ${opened !== 0 ? "opacity-100 visible scale-100" : "opacity-0 scale-50 invisible blur-2xl"} backdrop-blur-sm fixed w-full z-[5000] top-0 left-0`}>
            <div className="h-full w-full relative">
                <About name={name} opened={opened} setOpened={setOpened} />
                <Register updateName={updateName} opened={opened} setOpened={setOpened} />
                <Login opened={opened} setOpened={setOpened} />
            </div>
        </div>
    )
}
