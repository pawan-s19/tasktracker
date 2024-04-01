import { Sidebar } from "flowbite-react";
import { Button } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { IoIosAddCircleOutline } from "react-icons/io";

import reactLogo from "../../assets/react.svg";
import { GlobalState } from "../../contexts/context";

function SideBarTab() {
  const { setOpenModal, setActionType } = GlobalState();

  const showModal = () => {
    setOpenModal(true);
    setActionType("create");
  };

  return (
    <Sidebar
      aria-label="Sidebar with content separator example"
      className="h-screen"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Logo
            href="#"
            img={reactLogo}
            imgAlt="React logo"
            className="mt-5"
          >
            Task Tracker
            <p className="text-sm text-gray-700">Software Project</p>
          </Sidebar.Logo>
        </Sidebar.ItemGroup>

        <Sidebar.ItemGroup>
          <Button className="w-full mb-5 flex items-center" onClick={showModal}>
            New Task <IoIosAddCircleOutline className="text-lg ms-1" />
          </Button>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Kanban
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SideBarTab;
