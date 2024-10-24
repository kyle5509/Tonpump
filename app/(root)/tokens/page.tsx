import Market from "@/components/Layout/Market";
import Main from "@/components/Tokens/Main";

export default function page() {
  return (
    <div className="gap-3 grid lg:grid-cols-[1fr_auto]">
      <div className="order-1 lg:order-2">
        <Market />
      </div>
      <Main />
    </div>
  )
}
