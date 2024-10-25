type Props = {
    label?: string;
    subLabel?: string;
    placeholder?: string
  };
  
  export default function Input2({ label, subLabel, placeholder }: Props) {
    return (
      <div>
        <p className="mb-2 text-white">{label ?? "Qty"}</p>
        <div className="h-12 bg-white relative border-2 rounded-md w-full">
          <input type="text" className="bg-transparent pl-3 w-full h-full outline-none" placeholder={placeholder}/>
          <p className="absolute right-2 -translate-y-1/2 top-1/2">{subLabel ?? "USDT"}</p>
        </div>
      </div>
    );
  }