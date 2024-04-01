import { Button, Card, Avatar, Badge, Dropdown } from "flowbite-react";
import { FaRegEdit } from "react-icons/fa";
import { getInitials } from "../../utils/utils";
import { GlobalState } from "../../contexts/context";
import {
  COMPLETED,
  DEFERRED,
  DELETE_TASK,
  DEPLOYED,
  IN_PROGRESS,
  PENDING,
} from "../../constants/taskConstants";
import { toast } from "react-toastify";
import { formatDate } from "../../utils/formatDate";
import PopUP from "../Popup";
import { useState } from "react";

function TaskCard({ taskDets }) {
  const { title, description, assignee, priority, status, _id } = taskDets;

  const { setOpenModal, setActionType, setSelectedTask, dispatch } =
    GlobalState();

  const [showPopup, setShowPopup] = useState(false);

  const showModal = () => {
    setOpenModal(true);
    setActionType("edit");
    setSelectedTask({ _id, status });
  };

  const RenderStatusTags = ({ status }) => {
    switch (status) {
      case PENDING:
        return (
          <span className="bg-gray-100 text-gray-800 text-sm w-fit font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            PENDING
          </span>
        );
      case IN_PROGRESS:
        return (
          <span className="bg-yellow-100 text-yellow-800 text-sm w-fit font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            IN PROGRESS
          </span>
        );
      case COMPLETED:
        return (
          <span className="bg-green-100 text-green-800 text-sm w-fit font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            COMPLETED
          </span>
        );
      case DEPLOYED:
        return (
          <span className="bg-purple-100 text-purple-800 text-sm w-fit font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            DEPLOYED
          </span>
        );
      case DEFERRED:
        return (
          <span className="bg-red-100 text-red-800 text-sm w-fit font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            DEFERRED
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Card className="max-w-lg mt-5">
        <div className="flex items-center justify-between">
          <h6 className="text-lg font-bold dark:text-white">{title}</h6>
          <Badge color="info" className="w-fit">
            {priority}
          </Badge>
        </div>

        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2 items-center mt-2">
            <Avatar
              placeholderInitials={getInitials(assignee)}
              size="sm"
              rounded
              stacked
            />
            <h6 className="text-sm font-semibold">{assignee}</h6>
          </div>

          <span className="px-1 rounded bg-orange-100 text-orange-800 font-semibold">
            {status == COMPLETED
              ? formatDate(taskDets.endDate)
              : formatDate(taskDets.startDate)}
          </span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <RenderStatusTags status={status} />
          <Dropdown size="sm" className="p-0">
            <Dropdown.Item className="font-semibold" onClick={showModal}>
              Edit
            </Dropdown.Item>
            <Dropdown.Item
              className="text-red-800 font-semibold"
              onClick={() => setShowPopup(true)}
            >
              Delete
            </Dropdown.Item>
          </Dropdown>
        </div>
      </Card>
      <PopUP
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        taskDets={taskDets}
      />
    </>
  );
}

export default TaskCard;
