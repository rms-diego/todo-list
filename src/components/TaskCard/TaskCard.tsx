import styles from "./TaskCard.module.scss";

import { Trash } from "phosphor-react";
import { ITasks } from "../../App";

interface PropsTaskCard extends ITasks {
  toggleTask(taskId: string): void;
  deleteTask(content: string): void;
}

export function TaskCard({
  content,
  conclud,
  toggleTask,
  deleteTask,
}: PropsTaskCard) {
  const taskIsConclud = conclud ? "concludTask" : "";

  return (
    <div className={styles.taskCard}>
      <input type="checkbox" onClick={() => toggleTask(content)} />
      <p className={styles[taskIsConclud]}>{content}</p>
      <div onClick={() => deleteTask(content)}>
        <Trash />
      </div>
    </div>
  );
}
