import { useEffect, useState } from "react";
import * as Style from "./style";
import { api } from "@/lib/axios";

import TaskCard from "../TasksCard";
import { NewTasks } from "../NewTasks";
import Header from "../Header";

import { Task } from "@/Types/Task";



export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get("/talks");
      setTasks(data);
    };

    fetchData();
  }, []);



  function setTasksAndSave(newTasks: Task[]) {
    setTasks(newTasks);
    
  }

  function addTask(taskTitle: string) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  return (
    <Style.Conteiner>
      <Header onAddTask={addTask} />
      <NewTasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </Style.Conteiner>
  );
}
