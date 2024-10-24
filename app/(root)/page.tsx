import Main from "@/components/Home/Main";
import Framer from "@/components/Layout/Framer";
import Updates from "@/components/General/Updates";
import Cards from "@/components/Home/New";

export default function Base() {
 
  return (
    <Framer>
      <div
        className="w-full grid h-full overflow-y-auto xl:grid-cols-[1fr_auto]"
      >
        <Updates />
        <Main />
      </div>
    </Framer>
  );
}

