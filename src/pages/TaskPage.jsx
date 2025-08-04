import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";
import Div from "../components/Div";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-sky-700 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate("/")}
            className="absolute left-0 top-0 bottom-0 text-white"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>
        <Div>
          <h2 className="text-xl font-bold text-sky-900">{title}</h2>
          <p className=" text-sky-900">{description}</p>
        </Div>
      </div>
    </div>
  );
}

export default TaskPage;
