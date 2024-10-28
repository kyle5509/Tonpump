"use client";
import Links from "./Links";
import LoggedUser from "./LoggedUser";

export default function Sidebar() {

  return (
    <div className="p-2 pr-0 overflow-y-auto h-full">
      <div className="w-full rounded-2xl hidden border-2 border-purplee bg-[#0E0A0C]  flex-col justify-between h-full lg:flex">
        <Links />
        <div className="flex px-5 flex-col gap-5 items-center">
          <div className="flex justify-center">
            <img src="cuate.png" className="h-56" alt="" />
          </div>
          <LoggedUser />
        </div>
      </div>
    </div>
  );
}
