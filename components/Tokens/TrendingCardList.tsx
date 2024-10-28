import TrendingCard from "./TrendingCard";

export default function TrendingCardList() {
  return (
    <div className="flex text-white bg-[#1B1B1B] p-2 rounded-2xl flex-col gap-2 lg:gap-4">
        {[1,2,3,4,5,33,3,3,3,3,33,3,3,3,3,3].map(() => (
            <TrendingCard />
        ))}
    </div>
  )
}
