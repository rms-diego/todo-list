import styles from "./TaskContainer.module.scss";

import cliboard from "../../assets/Clipboard.svg";
import { TaskCard } from "../TaskCard/TaskCard";
import { ITasks } from "../../App";

interface PropsTaskContainer {
  tasks: ITasks[];
  toggleTask(content: string): void;
  deleteTask(content: string): void;
}

export function TaskContainer({
  tasks,
  toggleTask,
  deleteTask,
}: PropsTaskContainer) {
  const numberOfTasks = tasks.length;
  const allConcludsTasks = tasks.filter((task) => task.conclud === true).length;

  const totalCompletedTasksText = `${allConcludsTasks} de ${numberOfTasks} `;

  return (
    <section className={styles.taskContainer}>
      <header>
        <p className={styles.createdTask}>
          Tarefas criadas <span>{numberOfTasks}</span>
        </p>
        <p className={styles.concludeTask}>
          Tarefas concluidas{" "}
          <span>{allConcludsTasks > 0 ? totalCompletedTasksText : "0"}</span>
        </p>
      </header>

      <div className={styles.taskContentContainer}>
        {tasks.length === 0 ? (
          <div className={styles.taskContentContainerWithoutTask}>
            <img src={cliboard} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <span> Crie tarefas e organize seus itens a fazer</span>
          </div>
        ) : (
          <div className={styles.tasksCardsContainer}>
            {tasks.map(({ conclud, content }, index) => (
              <TaskCard
                key={index}
                conclud={conclud}
                content={content}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
