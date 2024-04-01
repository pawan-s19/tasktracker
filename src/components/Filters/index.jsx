import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Datepicker,
} from "flowbite-react";
import {
  COMPLETED,
  DEFERRED,
  DEPLOYED,
  FILTER_TASKS,
  IN_PROGRESS,
  PENDING,
  taskPriorities,
  taskStatusList,
} from "../../constants/taskConstants";
import { useState } from "react";
import { GlobalState } from "../../contexts/context";
import { toast } from "react-toastify";

function Filters() {
  const { dispatch } = GlobalState();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [assignee, setAssignee] = useState(null);
  const [priority, setPriority] = useState("P0");
  const [filterPreference, setFilterPreference] = useState(PENDING);

  const applyFilters = (e) => {
    e.preventDefault();

    let filters = {};

    if (startDate) filters.startDate = startDate;
    if (endDate) filters.endDate = endDate;
    if (assignee) filters.assignee = assignee;
    if (priority) filters.priority = priority;

    let payload = {
      filters,
      filterPreference,
    };

    dispatch({
      type: FILTER_TASKS,
      payload,
    });

    return toast.success("Filters applied successfully");
  };
  return (
    <form onSubmit={applyFilters} className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Start Date" />
        </div>
        <Datepicker date onSelectedDateChanged={(date) => setStartDate(date)} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="End Date" />
        </div>
        <Datepicker onSelectedDateChanged={(date) => setEndDate(date)} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Assignee" />
        </div>
        <TextInput
          id="email1"
          type="text"
          placeholder="name@flowbite.com"
          onChange={({ target }) => setAssignee(target.value)}
        />
      </div>
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="priority" value="Select task priority" />
        </div>
        <Select
          onChange={({ target }) => setPriority(target.value)}
          id="priority"
          value={priority}
        >
          {taskPriorities.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </Select>
      </div>

      <div className="max-w-md">
        <div className="mb-2 block">
          <Label
            htmlFor="filterPreference"
            value="Apply filters to the following tasks"
          />
        </div>
        <Select
          onChange={({ target }) => setFilterPreference(target.value)}
          id="filterPreference"
          value={filterPreference}
        >
          {[...taskStatusList].map((e) => (
            <option key={e}>{e}</option>
          ))}
        </Select>
      </div>

      <Button type="submit">Apply</Button>
    </form>
  );
}

export default Filters;
