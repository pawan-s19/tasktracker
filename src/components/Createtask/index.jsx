import { Button, Select, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import {
  ADD_TASK,
  PENDING,
  taskPriorities,
} from "../../constants/taskConstants";
import { GlobalState } from "../../contexts/context";
import { toast } from "react-toastify";
import { generateUUID } from "../../utils/generateId";

function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [team, setTeam] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("P0");

  const { dispatch, setOpenModal } = GlobalState();

  const createTask = (e) => {
    e.preventDefault();

    const payload = {
      title,
      description,
      team,
      assignee,
      priority,
      startDate: new Date(),
      endDate: null,
      _id: generateUUID(),
    };

    //When creating task, status will be pending by default
    payload.status = PENDING;

    dispatch({
      type: ADD_TASK,
      payload,
    });

    setOpenModal(false);
    toast.success("Created successfully");
  };

  return (
    <form onSubmit={createTask}>
      <div className="space-y-6">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          Create Task
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
          <Button type="submit">Create</Button>
        </div>
      </div>
    </form>
  );
}

export default CreateTask;
