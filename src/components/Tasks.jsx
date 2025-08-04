import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Div from "./Div";
import Button from "./Button";

function Tasks({ tasks, deleteTask, onTaskClick }) {
  const navigate = useNavigate();

  function seeDatailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?title=${task.title}&description=${task.description}`);
  }

  return (
    <Div>
      <ul className="space-y-4 ">
        {tasks.map((task) => (
          <li className="flex gap-2" key={task.id}>
            <button
              onClick={() => onTaskClick(task.id)}
              className={`w-full text-left flex items-center gap-2 p-2 bg-sky-800 px-4 py-2 text-white font-medium rounded-md hover:bg-sky-900 ${
                task.isCompleted && `line-through`
              }`}
            >
              {task.isCompleted && <CheckIcon />}
              {task.title}
            </button>
            <Button onClick={() => seeDatailsClick(task)}>
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
