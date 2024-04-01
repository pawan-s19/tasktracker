import { useReducer } from "react";
import TaskCard from "../Taskcard";
import { initialState, taskReducer } from "../../reducers/taskReducer";
import { chooseTaskList } from "../../utils/utils";
import { GlobalState } from "../../contexts/context";

function TaskGrid({ type, name }) {
  const { state } = GlobalState();

  return (
    <div className="p-2 bg-gray-100">
      <h6 className="text-lg font-gray dark:text-white ms-1 mb-3 mt-1">
        {name}
      </h6>
      {state[chooseTaskList(type)].map((dets, i) => (
        <TaskCard key={i} taskDets={dets} />
      ))}
    </div>
  );
}

export default TaskGrid;
