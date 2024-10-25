import Title from "../General/Title";
import RightSidebarA from "../General/Updates";
import FollowCard from "./FollowCard";

export default function Main() {
    return (
        <div className="overflow-y-auto h-full w-full">
            <div className="p-3">
                <div className="mb-4"><Title title="Token" /></div>
                <FollowCard />
                <div className="mt-4"><Title title="Details" /></div>
            </div>
        </div>
    )
}
