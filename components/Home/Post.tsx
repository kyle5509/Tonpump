import { BsChat, BsDot, BsHeart, BsMessenger, BsStar } from "react-icons/bs";
export default function Post({post}: {post: any}) {
  return (
    <div className="flex bg-[#272727] shadow-md border-[#8996A9] border-2  p-3 rounded-lg gap-4">
      <img src="Medium.png" className="h-[42px] w-[42px]" alt="" />
      <div className="flex text-white flex-col gap-1">
        <div className="flex justify-between items-center">
          <p className="flex gap-1 text-13 items-center">
            <b>$Space</b>
            <span className="text-[#ECEDEE] ml-1">created by</span>
            <BsDot />
            <b>{post.author_username}</b>
          </p>
          <img src="/star.svg" className="" alt="" />
        </div>
        <p className="text-[#ECEDEE] text-xs">Market Cap - 11.5k</p>
        <p className="text-xs mb-2">
          <b> Space Man (#Space)</b> is a cryptocurrency project
          based on inspirations from a man who visited.....
        </p>
        <img
          src="https://www.spot.uz/media/img/2024/09/qjqtJ117273625253838_l.jpg"
          className="w-[280px] object-cover rounded-xl h-[240px]"
          alt=""
        />
        <div className="mt-2 text-xs flex gap-4 items-center">
          <div className="flex cursor-pointer items-center gap-2">
            <img src="comment.png" alt="" />
            <p>61</p>
          </div>
          <div className="flex text-[#F4245E] cursor-pointer items-center gap-2">
            <img src="like.png" alt="" />
            <p>6.2k</p>
          </div>
        </div>
        <p className="text-xs mt-1 text-[#9DFBFA]">Show more</p>
      </div>
    </div>
  );
}