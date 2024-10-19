type Props = {
    label: string
    placeholder?: string
    height?: string
}

export default function Textarea({ label, placeholder, height }: Props) {
    return (
        <div className="w-full">
            <p className="text-13 text-start mb-[6px] text-[#ECEDEE]">{label}</p>
            <div style={{height: `${height}`}} className="h-24 w-full overflow-hidden bg-[#292F32] rounded-md relative">
                <textarea placeholder={placeholder} className="h-full p-4 placeholder:text-[#9EA3A9] bg-transparent outline-none w-full">
                </textarea>
            </div>
        </div>
    )
}
