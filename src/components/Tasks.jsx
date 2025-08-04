import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import Div from "./Div";
import Button from "./Button";

function Tasks({ tasks, deleteTask, onTaskClick }) {
  return (
    <Div>
      <ul className="space-y-4 ">
        {tasks.map((task) => (
          <li className="flex gap-2" key={task.id}>
            <button
              onClick={() => onTaskClick(task.id)}
              className="w-full text-left flex items-center gap-2 p-2 bg-sky-800 px-4 py-2 text-white font-medium rounded-md hover:bg-sky-900"
            >
              {task.isCompleted && <CheckIcon />}
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
