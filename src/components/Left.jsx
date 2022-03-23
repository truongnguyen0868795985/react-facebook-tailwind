import AvatarIcon from "../assets/icons/header/avatar.png";
import ChevronDown from "../assets/icons/header/chevron-down.png";
import FriendIcon from "../assets/icons/left/friend.png";
import GroupIcon from "../assets/icons/left/group.png";
import MarketplaceIcon from "../assets/icons/left/marketplace.png";
import TimeIcon from "../assets/icons/left/time.png";
import VideoIcon from "../assets/icons/left/video.png";

export default function Left() {
  return (
    <div className="absolute top-14 w-[344px] px-1 py-2">
      <ul className="">
        <li className="flex items-center justify-start hover:bg-gray-300 cursor-pointer h-[52px] rounded-xl py-0 px-2">
          <div className="w-9 h-9 rounded-full bg-[#E4E6EB] flex justify-center items-center mr-2">
            <img src={AvatarIcon} alt="" width="25px" height="25px" />
          </div>
          <span>Trưởng Nguyễn</span>
        </li>
        <li className="flex items-center justify-start hover:bg-gray-300 cursor-pointer h-[52px] rounded-xl py-0 px-2">
          <div className="mr-2">
            <img src={FriendIcon} alt="" width="36px" height="36px" />
          </div>
          <span>Bạn bè</span>
        </li>
        <li className="flex items-center justify-start hover:bg-gray-300 cursor-pointer h-[52px] rounded-xl py-0 px-2">
          <div className="mr-2">
            <img src={GroupIcon} alt="" width="36px" height="36px" />
          </div>
          <span>Nhóm</span>
        </li>
        <li className="flex items-center justify-start hover:bg-gray-300 cursor-pointer h-[52px] rounded-xl py-0 px-2">
          <div className="mr-2">
            <img src={MarketplaceIcon} alt="" width="36px" height="36px" />
          </div>
          <span>Marketplace</span>
        </li>
        <li className="flex items-center justify-start hover:bg-gray-300 cursor-pointer h-[52px] rounded-xl py-0 px-2">
          <div className="mr-2">
            <img src={VideoIcon} alt="" width="36px" height="36px" />
          </div>
          <span>Watch</span>
        </li>
        <li className="flex items-center justify-start hover:bg-gray-300 cursor-pointer h-[52px] rounded-xl py-0 px-2">
          <div className="mr-2">
            <img src={TimeIcon} alt="" width="36px" height="36px" />
          </div>
          <span>Kỷ niệm</span>
        </li>

        <li className="flex items-center justify-start hover:bg-gray-300 cursor-pointer h-[52px] rounded-xl py-0 px-2">
          <div className="w-9 h-9 rounded-full bg-[#E4E6EB] flex justify-center items-center mr-2">
            <img src={ChevronDown} alt="" width="16px" height="16px" />
          </div>

          <span>Xem thêm</span>
        </li>
      </ul>
      <div className="border-b-2 m-2"></div>
      <div>
        <h1 className="text-[#65676b] text-[17px] font-semibold m-2">
          Lối tắt của bạn
        </h1>
        <ul className="">
          <li className="flex items-center justify-start hover:bg-gray-300 cursor-pointer h-[52px] rounded-xl py-0 px-2">
            <div className="w-9 h-9 rounded-full bg-[#E4E6EB] flex justify-center items-center mr-2">
              <img src={AvatarIcon} alt="" width="25px" height="25px" />
            </div>
            <span>Trưởng Nguyễn</span>
          </li>
          <li className="flex items-center justify-start hover:bg-gray-300 cursor-pointer h-[52px] rounded-xl py-0 px-2">
            <div className="mr-2">
              <img src={FriendIcon} alt="" width="36px" height="36px" />
            </div>
            <span>Bạn bè</span>
          </li>
          <li className="flex items-center justify-start hover:bg-gray-300 cursor-pointer h-[52px] rounded-xl py-0 px-2">
            <div className="mr-2">
              <img src={GroupIcon} alt="" width="36px" height="36px" />
            </div>
            <span>Nhóm</span>
          </li>
          <li className="flex items-center justify-start hover:bg-gray-300 cursor-pointer h-[52px] rounded-xl py-0 px-2">
            <div className="mr-2">
              <img src={MarketplaceIcon} alt="" width="36px" height="36px" />
            </div>
            <span>Marketplace</span>
          </li>

          <li className="flex items-center justify-start hover:bg-gray-300 cursor-pointer h-[52px] rounded-xl py-0 px-2">
            <div className="w-9 h-9 rounded-full bg-[#E4E6EB] flex justify-center items-center mr-2">
              <img src={ChevronDown} alt="" width="16px" height="16px" />
            </div>

            <span>Xem thêm</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
