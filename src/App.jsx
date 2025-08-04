import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Task from "./components/Tasks";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title, description) {
    console.log("addTask chamada com:", title, description);
    if (title.trim() === "") {
      return alert("Digite o título");
    }

    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-sky-700 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask addTask={addTask} />
        <Task onTaskClick={onTaskClick} deleteTask={deleteTask} tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
