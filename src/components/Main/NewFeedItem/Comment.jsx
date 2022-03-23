import AvatarIcon from "assets/icons/header/avatar.png";

export default function Comment() {
  return (
    <div className="mt-1">
      <div className="mb-1 flex justify-end text-[#65676b]">
        Bình luận liên quan nhất &#x25BC;
      </div>
      <div className="mb-4 flex h-9 w-full">
        <div className="cursor-pointer">
          <img src={AvatarIcon} width="36px" height="36px" alt="avatar" />
        </div>
        <div className="flex-1">
          <input
            className="h-full w-full rounded-xl bg-[#F0F2F5] px-3 py-2 leading-3 outline-none"
            type="text"
          />
        </div>
      </div>

      <ul>
        <li className="flex">
          <div className="mr-3 basis-10 cursor-pointer">
            <img src={AvatarIcon} width="24px" height="24px" alt="like" />
          </div>
          <div className="flex flex-col">
            <div className="rounded-2xl bg-[#F0F2F5]  px-2 py-1">
              <div className="cursor-pointer font-semibold hover:underline">
                Trần Thành Trung
              </div>
              <div>
                Mua riêng lẻ mà có giá 11tr thì ông lại ngây thơ và hồn nhiên
                quá :))
              </div>
            </div>
            <div className="flex px-2 text-sm text-[#65676b]">
              <span className="mr-2 cursor-pointer hover:underline">Thích</span>
              <span className="mr-2 cursor-pointer hover:underline">
                Phản hồi
              </span>
              <span className="cursor-pointer hover:underline">5 giờ</span>
            </div>
          </div>
        </li>
        <li className="flex">
          <div className="mr-3 basis-10 cursor-pointer">
            <img src={AvatarIcon} width="24px" height="24px" alt="like" />
          </div>
          <div className="flex flex-col">
            <div className="rounded-2xl bg-[#F0F2F5]  px-2 py-1">
              <div className="cursor-pointer font-semibold hover:underline">
                Trần Thành Trung
              </div>
              <div>
                Mua riêng lẻ mà có giá 11tr thì ông lại ngây thơ và hồn nhiên
                quá :))
              </div>
            </div>
            <div className="flex px-2 text-sm text-[#65676b]">
              <span className="mr-2 cursor-pointer hover:underline">Thích</span>
              <span className="mr-2 cursor-pointer hover:underline">
                Phản hồi
              </span>
              <span className="cursor-pointer hover:underline">5 giờ</span>
            </div>
          </div>
        </li>
        <li className="flex">
          <div className="mr-3 basis-10 cursor-pointer">
            <img src={AvatarIcon} width="24px" height="24px" alt="like" />
          </div>
          <div className="flex flex-col">
            <div className="rounded-2xl bg-[#F0F2F5]  px-2 py-1">
              <div className="cursor-pointer font-semibold hover:underline">
                Trần Thành Trung
              </div>
              <div>
                Mua riêng lẻ mà có giá 11tr thì ông lại ngây thơ và hồn nhiên
                quá :)) Mua riêng lẻ mà có giá 11tr thì ông lại ngây thơ và hồn
                nhiên quá :)) Mua riêng lẻ mà có giá 11tr thì ông lại ngây thơ
                và hồn nhiên quá :))
              </div>
            </div>
            <div className="flex px-2 text-sm text-[#65676b]">
              <span className="mr-2 cursor-pointer hover:underline">Thích</span>
              <span className="mr-2 cursor-pointer hover:underline">
                Phản hồi
              </span>
              <span className="cursor-pointer hover:underline">5 giờ</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
