import TabBar from "../Tabbar";

function Container() {
  return (
    <div className="p-10 w-full overflow-x-auto">
      <h1 className="flex items-center text-4xl font-extrabold dark:text-white mt-8">
        Weekly Sprint
        <span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
          Backlog
        </span>
      </h1>
      <TabBar />
    </div>
  );
}

export default Container;
