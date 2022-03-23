import Body from "./Body";
import Bottom from "./Bottom";
import Comment from "./Comment";
import Header from "./Header";

export default function NewFeedItem() {
  return (
    <div className="w-full max-w-[680px] rounded-xl bg-white py-2 px-4">
      <Header />
      <Body />
      <Bottom />
      <Comment />
    </div>
  );
}
