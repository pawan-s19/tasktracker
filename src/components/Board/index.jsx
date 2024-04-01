import { Button, Label, Select } from "flowbite-react";
import {
  COMPLETED,
  DEFERRED,
  DEPLOYED,
  IN_PROGRESS,
  PENDING,
  SORT_TASKS,
} from "../../constants/taskConstants";
import ModalComponent from "../Modal";
import TaskGrid from "../Taskgrid";
import { useState } from "react";
import { GlobalState } from "../../contexts/context";

function Board() {
  const { dispatch } = GlobalState();
  const [sortPreference, setSortPreference] = useState("Priority");
  const [order, setOrder] = useState("Increasing");

  const sortList = () => {
    let payload = {
      sortPreference,
      order,
    };

    dispatch({
      type: SORT_TASKS,
      payload,
    });
  };

  return (
    <>
      <div className="flex items-center gap-4 mb-10">
        <div className="mb-2 block">
          <Label htmlFor="filterPreference" value="Sort" />
        </div>
        <Select
          onChange={({ target }) => setSortPreference(target.value)}
          id="filterPreference"
          value={sortPreference}
        >
          {["Priority", "StartDate", "EndDate"].map((e) => (
            <option key={e}>{e}</option>
          ))}
        </Select>
        <Select
          onChange={({ target }) => setOrder(target.value)}
          id="filterPreference"
          value={order}
        >
          {["Increasing", "Decreasing"].map((e) => (
            <option key={e}>{e}</option>
          ))}
        </Select>
        <Button onClick={sortList}>Apply</Button>
      </div>
      <div
        id="content-div"
        className="grid grid-cols-2 md:grid-cols-5 gap-3 overflow-x-auto overflow-y-auto"
        style={{ width: "100vw" }}
      >
        <TaskGrid type={PENDING} name={"Pending"} />
        <TaskGrid type={IN_PROGRESS} name={"In Progress"} />
        <TaskGrid type={COMPLETED} name={"Completed"} />
        <TaskGrid type={DEPLOYED} name={"Deployed"} />
        <TaskGrid type={DEFERRED} name={"Deferred"} />
      </div>
      <ModalComponent />
    </>
  );
}

export default Board;
