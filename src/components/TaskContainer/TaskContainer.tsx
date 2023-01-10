import styles from "./TaskContainer.module.scss";

import cliboard from "../../assets/Clipboard.svg";

export function TaskContainer() {
  return (
    <section className={styles.taskContainer}>
      <header>
        <p className={styles.createdTask}>
          Tarefas criadas <span>0</span>
        </p>
        <p className={styles.concludeTask}>
          Tarefas concluidas <span>0</span>
        </p>
      </header>

      <div className={styles.taskContentContainer}>
        <>
          <img src={cliboard} />
          <p>Você ainda não tem tarefas cadastradas</p>
          <span> Crie tarefas e organize seus itens a fazer</span>
        </>
      </div>
    </section>
  );
}
