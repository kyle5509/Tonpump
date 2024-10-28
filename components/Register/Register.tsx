import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Input from "../General/Input";
import { FaTimes } from "react-icons/fa";
import Button from "./Button";
import { BiArrowBack } from "react-icons/bi";
import { error, register } from "./data";
import { useRouter } from "next/navigation";


type Props = {
    opened: number
    updateName: (name: string) => void
    setOpened: Dispatch<SetStateAction<number>>
}

export default function Register({ opened, setOpened, updateName }: Props) {

    const [data, setData] = useState(register)
    const [errors, setErrors] = useState(error)
    const [loading, setLoading] = useState(false)
    const [valid, setValid] = useState(false)

    const onChange = (e: any) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
        setErrors({ ...errors, [name]: "" })
    }

    const submit = async () => {
        if (!data.firstname.trim() || !data.lastname.trim() || !data.username.trim() || !data.wallet_address.trim()) {
            setErrors({
                firstname: data.firstname.trim() ? "" : "Please input your Firstname",
                lastname: data.lastname.trim() ? "" : "Please input your Lastname",
                username: data.username.trim() ? "" : "Please input your Username ",
                wallet_address: data.wallet_address.trim() ? "" : "Please input your Wallet address",
            })
            return
        }
        try {
            setLoading(true)
            const response = await fetch('https://backend-server-tvb6.onrender.com/api/users/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: data.firstname,
                    surname: data.lastname,
                    username: data.username,
                    wallet_address: data.wallet_address,
                    photo: 'new'
                }),
            });

            const result = await response.json();
            console.log(result)
            if (!response.ok) {
                if (result.error == "username already exist") {
                    return setErrors({ ...errors, username: "Username already exists" })
                }
                else if (result.error == "wallet address already belongs to a user") {
                    return setErrors({ ...errors, wallet_address: "Wallet address already belongs to a user" })
                }
                else {
                    return setErrors({ ...errors, backend: result.error })
                }
            }

            updateName(data.firstname)
            setData(register)
            setOpened(2)
        } catch (error: any) {
            return setErrors({ ...errors, backend: error?.message })
        }
        finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        if(data.firstname && data.lastname && data.username && data.wallet_address){
            setValid(true)
        }else{
            setValid(false)
        }

    }, [data])
    


    return (
        <div className={`w-full md:w-[600px]  absolute overflow-y-auto top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  flex flex-col justify-between gap-7 delay-100 duration-300 ${opened === 1 ? "opacity-100 visible scale-100  " : "opacity-0 invisible blur-2xl scale-50"} min-h-screen md:min-h-96 text-white rounded-2xl bg-black p-5`}>
            <div className="flex overflow-y-auto min-h-96 flex-col gap-6">
                <div className="flex px-0 justify-between items-center">
                    <FaTimes onClick={() => {
                        setErrors(error)
                        setData(register)
                        setLoading(false)
                        setOpened(0)
                    }} className="duration-300 cursor-pointer active:scale-95 text-2xl" />
                    <img src="tonLogo.svg" className="h-7" alt="" />
                    <p></p>
                </div>
                <div className="px-0 md:px-16 flex flex-col gap-5">
                    <p className="text-xl md:text-2xl lg:text-3xl font ">Create your account</p>
                    <Input value={data.firstname} error={errors.firstname} name="firstname" onChange={onChange} label="Firstname" />
                    <Input value={data.lastname} error={errors.lastname} name="lastname" onChange={onChange} label="Lastname" />
                    <Input value={data.username} error={errors.username} name="username" onChange={onChange} label="Username" />
                    <Input value={data.wallet_address} error={errors.wallet_address} name="wallet_address" onChange={onChange} label="Wallet address" />
                </div>
            </div>
            <div className="px-0 md:px-16">
                <div onClick={submit} className="">
                    <Button loading={loading} valid={valid}/>
                </div>
            </div>
        </div>
    )
}
