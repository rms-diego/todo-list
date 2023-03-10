import styles from "./styles/app.module.scss";

import { Header } from "./components/Header/Header";
import { InputContainer } from "./components/InputContainer/InputContainer";
import { TaskContainer } from "./components/TaskContainer/TaskContainer";
import { useEffect, useState } from "react";

export interface ITasks {
  conclud: boolean;
  content: string;
}

export function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  useEffect(() => {
    const allTasksString = localStorage.getItem("tasks");

    if (allTasksString) setTasks(JSON.parse(allTasksString));
  }, []);

  const createNewTask = (content: string) => {
    const task = { conclud: false, content };

    setTasks([...tasks, task]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
  };

  const toggleTask = (content: string) => {
    const toggleConcludTask = tasks.map((task) => {
      if (task.content === content) {
        task.conclud = !task.conclud;
        return task;
      }

      return task;
    });

    setTasks(toggleConcludTask);
    localStorage.setItem("tasks", JSON.stringify(toggleConcludTask));
  };

  const deleteTask = (content: string) => {
    const filteredTasks = tasks.filter((task) => task.content !== content);

    setTasks(filteredTasks);
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  };

  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <InputContainer createNewTask={createNewTask} />
        <TaskContainer
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      </main>
    </>
  );
}
