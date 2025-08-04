import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import Div from "./Div";
import Button from "./Button";

function Tasks({ tasks, deleteTask }) {
  return (
    <Div>
      <ul className="space-y-4 ">
        {tasks.map((task) => (
          <li className="flex gap-2" key={task.id}>
            <button className="w-full text-left flex items-center gap-2 p-2 bg-sky-800 px-4 py-2 text-white font-medium rounded-md hover:bg-sky-900">
              {task.title}
            </button>
            <Button>
              <ChevronRightIcon />
            </Button>
            <Button onClick={() => deleteTask(task.id)}>
              <TrashIcon />
            </Button>
          </li>
        ))}
      </ul>
    </Div>
  );
}

export default Tasks;
