'use client'

import Link from "next/link"
import Input from "../General/Input"
import { useState } from "react"
import { error, register } from "./data"
import { useRouter } from "next/navigation"

export default function Register() {

    const [data, setData] = useState(register)
    const [errors, setErrors] = useState(error)
    const [backendError, setBackendError] = useState('')
    const [loading, setLoading] = useState(false)
    const [redirecting, setRedirecting] = useState(false)
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
            setRedirecting(true)
            router.push('/')
        } catch (error) {
            setBackendError(error.message)
        }
        finally {
            setLoading(false)
        }

    }

    return (
        <div className="h-screen w-full place-content-center">
            {!redirecting ?
                <div className="w-[425px] mx-auto">
                    <div className="grid mb-4 mt-4 place-content-center">
                        <img src="logo.png" className="h-10" alt="" />
                    </div>
                    <p className="text-xl text-center font-semibold mb-0.5">Join the Chain – Sign Up</p>
                    <p className="text-13 text-center mb-6">Step into the future of secure transactions</p>
                    <div className="space-y-3 mb-5">
                        <Input label="Firstname" value={data.firstname} error={errors.firstname} onChange={onChange} name="firstname" placeholder="Enter your firstname" background="" labelStyle="font-semibold mb-1 text-13" />
                        <Input label="Lastname" value={data.lastname} error={errors.lastname} onChange={onChange} name="lastname" placeholder="Enter your lastname" background="" labelStyle="font-semibold mb-1 text-13" />
                        <Input label="Username" value={data.username} error={errors.username} onChange={onChange} name="username" placeholder="Enter your username" background="" labelStyle="font-semibold mb-1 text-13" />
                        <Input label="Wallet Address" name="wallet_address" value={data.wallet_address} error={errors.wallet_address} onChange={onChange} placeholder="Enter your wallet address" background="" labelStyle="font-semibold mb-1 text-13" />
                    </div>
                    <p className="font-semibold text-blue-500">Forgot your password?</p>
                    <button disabled={loading} onClick={submit} className="h-[50px] duration-300 active:scale-95 grid place-content-center mt-6 w-full bg-prim font-semibold text-black rounded-md shadow-md hover:bg-[rgb(120,247,244)] ">
                        {loading ? <span className="loader2"></span> : "Signup"}
                    </button>
                    <p className={`text-red-500 ${backendError ? "h-5" : "h-0"} overflow-hidden duration-500`}>{backendError}</p>
                    <p className="mt-8 text-center">Already have an account? <Link className="font-bold text-blue-500" href={'/login'}>Sign in</Link></p>
                </div>
                :
                <div className="bg-mainDark h-screen w-full grid place-content-center">
                    <span className="loader"></span>
                </div>
            }
        </div>
    )
}
