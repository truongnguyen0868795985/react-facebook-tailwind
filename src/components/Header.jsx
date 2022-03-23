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
      <div className="w-full h-14 sticky bg-white flex justify-between items-center box-border top-0 p-2">
        <Left />

        <div className="flex items-center">
          <img
            className="leading-4 mr-2"
            src={FaceBookIcon}
            alt="facebook"
            width="40px"
            height="40px"
          />
          <div className="flex items-center bg-[#EFF1F4] rounded-[50px]">
            <img
              className="leading-4 ml-2"
              src={SearchIcon}
              alt="search"
              width="16px"
              height="16px"
            />
            <input
              className="outline-none bg-[#EFF1F4] rounded-[50px]  h-10 pl-[7px] pr-[9px] py-2"
              type="text"
              placeholder="Tìm kiếm trên facebook"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-[112px] flex justify-center items-center hover:bg-[#F0F2F5] h-[52px] rounded-lg p-1 cursor-pointer">
            <img className="" src={HomeIcon} alt="home" width="28px" />
          </div>
          <div className="w-[112px] flex justify-center items-center hover:bg-[#F0F2F5] h-[52px] rounded-lg p-1 cursor-pointer">
            <img className="" src={VideoIcon} alt="home" width="28px" />
          </div>
          <div className="w-[112px] flex justify-center items-center hover:bg-[#F0F2F5] h-[52px] rounded-lg p-1 cursor-pointer">
            <img className="" src={StoreIcon} alt="home" width="28px" />
          </div>
          <div className="w-[112px] flex justify-center items-center hover:bg-[#F0F2F5] h-[52px] rounded-lg p-1 cursor-pointer">
            <img className="" src={PeopleIcon} alt="home" width="28px" />
          </div>
          <div className="w-[112px] flex justify-center items-center hover:bg-[#F0F2F5] h-[52px] rounded-lg p-1 cursor-pointer">
            <img className="" src={GameIcon} alt="home" width="28px" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="cursor-pointer flex items-center rounded-2xl hover:bg-[#EFF1F4] p-1 mr-2">
            <img
              className="rounded-full"
              src={AvatarIcon}
              alt="avatar"
              width="36px"
              height="36px"
            />
            <span>Trưởng</span>
          </div>
          <div className="cursor-pointer w-10 h-10 rounded-full bg-[#F0F2F5] flex items-center justify-center mr-2">
            <img
              className="rounded-full"
              src={ListIcon}
              alt="avatar"
              width="28px"
              height="28px"
            />
          </div>
          <div className="cursor-pointer w-10 h-10 rounded-full bg-[#F0F2F5] flex items-center justify-center mr-2">
            <img
              className="rounded-full"
              src={MessengerIcon}
              alt="avatar"
              width="28px"
              height="28px"
            />
          </div>
          <div className="cursor-pointer w-10 h-10 rounded-full bg-[#F0F2F5] flex items-center justify-center mr-2">
            <img
              className="rounded-full"
              src={AlarmIcon}
              alt="avatar"
              width="28px"
              height="28px"
            />
          </div>
          <div className="cursor-pointer w-10 h-10 rounded-full bg-[#F0F2F5] flex items-center justify-center mr-2">
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
