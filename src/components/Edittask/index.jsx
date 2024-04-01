import { Button, Select, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  ADD_TASK,
  COMPLETED,
  DELETE_TASK,
  PENDING,
  UPDATE_TASK,
  taskPriorities,
  taskStatusList,
} from "../../constants/taskConstants";
import { GlobalState } from "../../contexts/context";
import { toast } from "react-toastify";
import { findTask } from "../../utils/findTask";
import { chooseTaskList } from "../../utils/utils";

function EditTask() {
  const { state, dispatch, setOpenModal, selectedTask, setSelectedTask } =
    GlobalState();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [team, setTeam] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [isStatusChange, setIsStatusChange] = useState(false);
  const [task, setTask] = useState(null);

  useEffect(() => {
    //Find the task to be edited and populate the values in local state on first render.
    const task = findTask(
      selectedTask._id,
      state[chooseTaskList(selectedTask.status)]
    );
    setTask(task);
    if (!task) {
      toast.error("Sorry!, Task not found");
      return;
    }

    setTitle(task.title);
    setDescription(task.description);
    setTeam(task.team);
    setAssignee(task.assignee);
    setPriority(task.priority);
    setTaskStatus(task.status);
  }, [selectedTask._id, selectedTask.status, state]);

  const editTask = (e) => {
    e.preventDefault();

    let payload = {
      title,
      description,
      team,
      assignee,
      priority,
      status: taskStatus,
      _id: selectedTask._id,
      isStatusChange,
      prevStatus: task.status,
    };

    if (taskStatus == COMPLETED) payload.endDate = new Date();

    dispatch({
      type: UPDATE_TASK,
      payload,
    });

    setIsStatusChange(false); //to reupdate status for next edit operations

    setOpenModal(false);
    toast.success("Edited successfully");
  };

  return (
    <form onSubmit={editTask}>
      <div className="space-y-6">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          Edit Task
        </h3>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="title" value="Task title" />
          </div>
          <TextInput
            id="title"
            placeholder="name@company.com"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Task description" />
          </div>
          <TextInput
            id="description"
            placeholder="name@company.com"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="team" value="Team" />
          </div>
          <TextInput
            id="team"
            placeholder="name@company.com"
            value={team}
            onChange={(event) => setTeam(event.target.value)}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="assignee" value="Assignee" />
          </div>
          <TextInput
            id="assignee"
            placeholder="name@company.com"
            value={assignee}
            onChange={(event) => setAssignee(event.target.value)}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="status" value="Status" />
          </div>
          <Select
            onChange={(e) => {
              setTaskStatus(e.target.value);
              setIsStatusChange(true);
            }}
            id="priority"
            required
            value={taskStatus}
          >
            {taskStatusList.map((e) => (
              <option key={e}>{e}</option>
            ))}
          </Select>
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="priority" value="Select task priority" />
          </div>
          <Select
            onChange={(e) => setPriority(e.target.value)}
            id="priority"
            required
          >
            {taskPriorities.map((e) => (
              <option key={e}>{e}</option>
            ))}
          </Select>
        </div>

        <div className="w-full">
          <Button type="submit">Edit</Button>
        </div>
      </div>
    </form>
  );
}

export default EditTask;
