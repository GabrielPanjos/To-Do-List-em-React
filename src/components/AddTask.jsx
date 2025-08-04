import Button from "./Button";
import Input from "./Input";
import Div from "./Div";
import { useState } from "react";

function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Div>
      <Input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Digite o título da tarefa"
      />
      <Input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder="Digite a descrição da tarefa"
      />
      <Button
        onClick={() => {
          addTask(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </Button>
    </Div>
  );
}

export default AddTask;
