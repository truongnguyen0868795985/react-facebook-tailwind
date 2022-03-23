import AlarmIcon from "../assets/icons/header/alarm.png";
import AvatarIcon from "../assets/icons/header/avatar.png";
import ChevronDown from "../assets/icons/header/chevron-down.png";
import FaceBookIcon from "../assets/icons/header/facebook.png";
import GameIcon from "../assets/icons/header/game.png";
import HomeIcon from "../assets/icons/header/home.png";
import Left from "./Left";
import ListIcon from "../assets/icons/header/list.png";
import MessengerIcon from "../assets/icons/header/messenger.png";
import PeopleIcon from "../assets/icons/header/people.png";
import Right from "./Right";
import SearchIcon from "../assets/icons/header/search.svg";
import StoreIcon from "../assets/icons/header/store.png";
import VideoIcon from "../assets/icons/header/video.png";

export default function Header() {
  return (
    <>
      <div className="sticky top-0 z-10 box-border flex h-14 w-full items-center justify-between bg-white p-2">
        <Left />

        <div className="flex items-center">
          <img
            className="mr-2 leading-4"
            src={FaceBookIcon}
            alt="facebook"
            width="40px"
            height="40px"
          />
          <div className="flex items-center rounded-[50px] bg-[#EFF1F4]">
            <img
              className="ml-2 leading-4"
              src={SearchIcon}
              alt="search"
              width="16px"
              height="16px"
            />
            <input
              className="h-10 rounded-[50px] bg-[#EFF1F4]  py-2 pl-[7px] pr-[9px] outline-none"
              type="text"
              placeholder="Tìm kiếm trên facebook"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-1">
          <div className="flex h-[52px] w-[112px] cursor-pointer items-center justify-center rounded-lg p-1 hover:bg-[#F0F2F5]">
            <img className="" src={HomeIcon} alt="home" width="28px" />
          </div>
          <div className="flex h-[52px] w-[112px] cursor-pointer items-center justify-center rounded-lg p-1 hover:bg-[#F0F2F5]">
            <img className="" src={VideoIcon} alt="home" width="28px" />
          </div>
          <div className="flex h-[52px] w-[112px] cursor-pointer items-center justify-center rounded-lg p-1 hover:bg-[#F0F2F5]">
            <img className="" src={StoreIcon} alt="home" width="28px" />
          </div>
          <div className="flex h-[52px] w-[112px] cursor-pointer items-center justify-center rounded-lg p-1 hover:bg-[#F0F2F5]">
            <img className="" src={PeopleIcon} alt="home" width="28px" />
          </div>
          <div className="flex h-[52px] w-[112px] cursor-pointer items-center justify-center rounded-lg p-1 hover:bg-[#F0F2F5]">
            <img className="" src={GameIcon} alt="home" width="28px" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-2 flex cursor-pointer items-center rounded-2xl p-1 hover:bg-[#EFF1F4]">
            <img
              className="rounded-full"
              src={AvatarIcon}
              alt="avatar"
              width="36px"
              height="36px"
            />
            <span>Trưởng</span>
          </div>
          <div className="mr-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F0F2F5]">
            <img
              className="rounded-full"
              src={ListIcon}
              alt="avatar"
              width="28px"
              height="28px"
            />
          </div>
          <div className="mr-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F0F2F5]">
            <img
              className="rounded-full"
              src={MessengerIcon}
              alt="avatar"
              width="28px"
              height="28px"
            />
          </div>
          <div className="mr-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F0F2F5]">
            <img
              className="rounded-full"
              src={AlarmIcon}
              alt="avatar"
              width="28px"
              height="28px"
            />
          </div>
          <div className="mr-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F0F2F5]">
            <img
              className="rounded-full"
              src={ChevronDown}
              alt="avatar"
              width="28px"
              height="28px"
            />
          </div>
        </div>

        <Right />
      </div>
    </>
  );
}
