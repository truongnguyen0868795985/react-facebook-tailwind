import ChatIcon from "assets/icons/main/chat.png";
import HeartIcon from "assets/icons/main/heart.png";
import LikeIcon from "assets/icons/main/like.png";
import ShareIcon from "assets/icons/main/share.png";

export default function Bottom() {
  return (
    <div>
      <div className="flex justify-between p-1 text-[#65676b]">
        <div className="mb-1 flex">
          <div className="">
            <img src={LikeIcon} width="24px" height="24px" alt="like" />
          </div>
          <div className="mr-1">
            <img src={HeartIcon} width="24px" height="24px" alt="like" />
          </div>
          <div>176</div>
        </div>
        <div className="text-[#65676b]">
          <span>588 bình luận</span>
          <span>1 chia sẻ</span>
        </div>
      </div>
      <div className="border-b-2"></div>
      <div>
        <div className="flex">
          <div className="flex w-1/3 cursor-pointer items-center justify-center rounded-xl p-1 hover:bg-[#F0F2F5]">
            <img
              className="mr-2"
              src={LikeIcon}
              alt="like"
              width="30px"
              height="30px"
            />
            <span className="text-[16px] font-semibold text-[#65676b]">
              Thích
            </span>
          </div>
          <div className="flex w-1/3 cursor-pointer items-center justify-center rounded-xl p-1 hover:bg-[#F0F2F5]">
            <img
              className="mr-2"
              src={ChatIcon}
              alt="chat"
              width="30px"
              height="30px"
            />
            <span className="text-[16px] font-semibold text-[#65676b]">
              Bình luận
            </span>
          </div>
          <div className="flex w-1/3 cursor-pointer items-center justify-center rounded-xl p-1 hover:bg-[#F0F2F5]">
            <img
              className="mr-2"
              src={ShareIcon}
              alt="share"
              width="30px"
              height="30px"
            />
            <span className="text-[16px] font-semibold text-[#65676b]">
              Chia sẻ
            </span>
          </div>
        </div>
      </div>
      <div className="border-b-2"></div>
    </div>
  );
}
