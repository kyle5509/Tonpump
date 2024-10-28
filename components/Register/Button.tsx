
type Props = {
    loading?: boolean
    valid: boolean
}

export default function Button({ loading, valid }: Props) {
    return (
        <button disabled={!valid} className={`w-full duration-300 h-14 mt-12  font-semibold text-black rounded-full text-base grid place-content-center ${valid ? "bg-white cursor-pointer  hover:scale-105 active:scale-100" : "bg-gray-500 cursor-auto"}`}>
            {loading ? <span className="loader2"></span>
                : <span>Next</span>}
        </button>)
}
