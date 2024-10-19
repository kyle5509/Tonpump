import Chart from "./Chart";
import Info from "./Info";

export default function Details() {
    // paris king promise 
    return (
        <div className="p-3 bg-[#323434] border rounded-tl-none text-white">
            <p className="text-xs text-[#ECEDEE]">Space Man (#Space) is a forward-thinking cryptocurrency project inspired by the pioneering spirit of space exploration and the legacy of human ingenuity in the cosmos. The project draws its core inspiration from the real-life achievements of astronauts and space pioneers who have ventured beyond Earth’s atmosphere to explore the unknown. By embodying the ethos of these explorers, Space Man seeks to push the boundaries of traditional finance and bring the vast potential of blockchain technology to new frontiers.             </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-3 gap-5">
                <Info img="curve.png" title="Bonding Curve"/>
                <Info img="medal.png" title="King of Coin"/>
            </div>
        </div>
    )
}
