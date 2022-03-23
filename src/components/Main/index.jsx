import CreateNewFeed from "./CreateNewFeed";
import NewFeed from "./NewFeed";
import Story from "./Story";

export default function Main() {
  return (
    <div className="container mx-auto flex justify-center">
      <div className="flex flex-col">
        <Story />
        <CreateNewFeed />
        <NewFeed />
      </div>
    </div>
  );
}
