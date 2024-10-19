type Props = {
    label?: string
    placeholder?: string
    height?: string
    background?: string
    text?: string
    marginBottom?: string
    marginTop?: string
    error?: string
    labelStyle?: string
    onChange?: (e: any) => void
    value: string
    name?: string
}

export default function Input({ label,labelStyle,error, name, onChange, value, placeholder,height, background, text, marginBottom, marginTop }: Props) {
    return (
        <div style={{ marginBottom: `${marginBottom}`, marginTop: `${marginTop}` }} className="w-full">
            <p className={`${labelStyle}`}>{label}</p>
            <div style={{ height: `${height}`, backgroundColor: `${background}` }} className={`h-12 w-full overflow-hidden rounded-md duration-500 border-2 relative shadow-md ${error ? "border-red-500": `${value.trim().length > 0 ? "border-prim" : "border-gray-300"}`}`}>
                <input type="text" name={name} value={value} onChange={onChange} placeholder={placeholder} className="h-full text-black placeholder:text-[#9EA3A9] bg-transparent pl-3 outline-none w-full" />
                <p className="text-[#bdc2c7] absolute text-13 pointer-events-none top-1/2 -translate-y-1/2 right-3">{text}</p>
            </div>
            <p className={`text-red-500 ${error ? "h-5": "h-0"} overflow-hidden duration-500`}>{error}</p>
        </div>
    )
}
