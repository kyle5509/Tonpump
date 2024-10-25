'use client'

import Link from "next/link"
import Input from "../General/Input"
import { useState } from "react"
import { error, register } from "./data"
import { useRouter } from "next/navigation"
import Register from "./Auth"

export default function Base() {

    const [data, setData] = useState(register)
    const [errors, setErrors] = useState(error)
    const [backendError, setBackendError] = useState('')
    const [loading, setLoading] = useState(false)
    const [opened, setOpened] = useState(0)
    const router = useRouter()

    const onChange = (e: any) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
        setErrors({ ...errors, [name]: "" })
        setBackendError("")
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
            if (!response.ok) {
                if (result.error == "username already exist") {
                    return setErrors({ ...errors, username: "Username already exists" })
                }
                else if (result.error == "wallet address already belongs to a user") {
                    return setErrors({ ...errors, wallet_address: "Wallet address already belongs to a user" })
                }
                else {
                    return setBackendError(result.error)
                }
            }
            router.push('/')
        } catch (error: any) {
            setBackendError(error?.message)
        }
        finally {
            setLoading(false)
        }

    }

    return (
        <div className="h-screen px-5 z-20 relative bg-black grid grid-cols-1 lg:grid-cols-2">
            <Register opened={opened} setOpened={setOpened} />
            <div className="hidden lg:grid place-content-center">
                <img src="signupLogo.svg" className="h-48 xl:h-52" alt="" />
            </div>
            <div className="flex justify-center lg:items-start flex-col items-center text-white">
                <Link className="lg:hidden" href={'/'}>
                    <img src="tonLogo.svg" className="w-56 lg:w-60 mb-10" alt="" />
                </Link>
                <div className="flex justify-center lg:justify-start items-center text-white">
                    <div className="">
                        <p className="text-3xl lg:text-5xl xl:text-6xl mb-5 lg:mb-10 text-center lg:text-start font-semibold">Create a Hype<span className="text-prim">!</span></p>
                        <div className="text-xl lg:text-2xl font-semibold text-center lg:justify-start justify-center lg:text-start mb-8 mt-4 flex items-center gap-2"> <div className="h-0.5 w-8 lg:hidden bg-prim  rounded-full "></div> Join today <div className="h-0.5 w-8 lg:h-2 lg:w-2 bg-prim  lg:rounded-full "></div></div>
                        <p onClick={() => setOpened(1)} className="w-full md:w-80 cursor-pointer duration-300 hover:scale-105 active:scale-100 mb-2 grid place-content-center py-3.5 rounded-full bg-prim text-black font-semibold shadow-md ">Create an Account</p>
                        <p className="w-full md:w-[40ch] text-13 text-center lg:text-start">By signing up, you agree to the <span className="text-prim">Terms of Service</span> and <span className="text-prim">Privacy Policy</span>, including <span className="text-prim"> Cookie Use</span>.</p>
                        <div className="w-full lg:w-80  font-semibold text-base lg:text-lg my-8 flex gap-2 items-center">
                            <div className="h-[1.5px] flex-1 bg-prim"></div>
                            <p>Or</p>
                            <div className="h-[1.5px] flex-1 bg-prim"></div>
                        </div>
                        <p className="mb-2 text-15 text-center lg:text-start">Already have an Account?</p>
                        <p onClick={() => setOpened(3)} className="w-full lg:w-80 cursor-pointer duration-300 hover:scale-105 active:scale-100 py-3.5 rounded-full text-prim border-2 border-prim font-semibold shadow-md grid place-content-center">Sign in</p>
                    </div>
                </div>
            </div>
        </div>)
}
