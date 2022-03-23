import AvatarIcon from "assets/icons/header/avatar.png";

export default function Header() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-start">
        <div className="cursor-pointer">
          <img src={AvatarIcon} width="40px" height="40px" alt="avatar" />
        </div>
        <div className="p-1">
          <a href="#" className="font-semibold hover:underline">
            GEARVN - Chợ PC & Gaming Gear
          </a>
          <div className="text-sm text-[#65676b]">
            Long Hoang · 21 tháng 3 lúc 11:55 ·
          </div>
        </div>
      </div>
      <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full hover:bg-gray-300">
        <span className="leading-none">...</span>
      </div>
    </div>
  );
}
