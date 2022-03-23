import CameraIcon from "../../assets/icons/main/camera.png";
import ImageIcon from "../../assets/icons/main/image.png";
import SmilingIcon from "../../assets/icons/main/smiling.png";
export default function CreateNewFeed() {
  return (
    <div className="mb-4 w-full rounded-xl bg-white p-4">
      <div className="mb-2 flex w-full">
        <div className="mr-2">
          <img
            className="rounded-full"
            src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-1/89287989_1328553270675967_8482091936042188800_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=1QgmhCBVcskAX_UtqZD&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT_VwsZyHprBO0dUhCY8vhqgSavMR7VJmKGyjjnK2pnzlQ&oe=62615640"
            width="40px"
            height="40px"
            alt="avatar"
          />
        </div>
        <div className="w-full">
          <input
            className="h-10 w-full rounded-2xl bg-[#F0F2F5] p-4 leading-10 outline-none"
            type="text"
            placeholder="Trưởng ơi, bạn đang nghĩ gì thế?"
          />
        </div>
      </div>
      <div className="border-b-2"></div>
      <div className="mt-3 flex">
        <div className="flex w-1/3 cursor-pointer items-center justify-center rounded-xl p-1 hover:bg-[#F0F2F5]">
          <img
            className="mr-2"
            src={CameraIcon}
            alt="camera"
            width="30px"
            height="30px"
          />
          <span className="text-[16px] font-semibold text-[#65676b]">
            Video trực tiếp
          </span>
        </div>
        <div className="flex w-1/3 cursor-pointer items-center justify-center rounded-xl p-1 hover:bg-[#F0F2F5]">
          <img
            className="mr-2"
            src={ImageIcon}
            alt="camera"
            width="30px"
            height="30px"
          />
          <span className="text-[16px] font-semibold text-[#65676b]">
            Ảnh/Video
          </span>
        </div>
        <div className="flex w-1/3 cursor-pointer items-center justify-center rounded-xl p-1 hover:bg-[#F0F2F5]">
          <img
            className="mr-2"
            src={SmilingIcon}
            alt="camera"
            width="30px"
            height="30px"
          />
          <span className="text-[16px] font-semibold text-[#65676b]">
            Cảm xúc/hoạt động
          </span>
        </div>
      </div>
    </div>
  );
}
