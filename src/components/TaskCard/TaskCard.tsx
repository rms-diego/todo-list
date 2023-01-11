import styles from "./TaskCard.module.scss";

import { Trash } from "phosphor-react";
import { useState } from "react";

export function TaskCard() {
  const [concludTask, setConcludTask] = useState(false);

  const handleConcludTask = () => setConcludTask(!concludTask);

  const taskIsConclud = concludTask ? "concludTask" : "";

  return (
    <div className={styles.taskCard}>
      <input type="checkbox" onClick={handleConcludTask} />
      <p className={styles[taskIsConclud]}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <div>
        <Trash />
      </div>
    </div>
  );
}
