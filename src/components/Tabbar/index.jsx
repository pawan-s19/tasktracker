import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import Board from "../Board";
import Filters from "../Filters";

function TabBar() {
  return (
    <div>
      <Tabs
        aria-label="Tabs with underline"
        style="underline"
        className="mt-2 w-fit"
      >
        <Tabs.Item active title="Board" icon={FaClipboardList}>
          <Board />
        </Tabs.Item>
        <Tabs.Item title="Dashboard" icon={MdDashboard}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Dashboard tab's associated content
          </span>
        </Tabs.Item>
        <Tabs.Item title="Contacts" icon={HiClipboardList}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Contacts tab's associated content
          </span>
        </Tabs.Item>
        <Tabs.Item title="Filters" icon={HiAdjustments}>
          <Filters />
        </Tabs.Item>
      </Tabs>
    </div>
  );
}

export default TabBar;
