import styles from "./InputContainer.module.scss";
import { Plus } from "phosphor-react";

export function InputContainer() {
  return (
    <section className={styles.inputContainer}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        <Plus />
      </button>
    </section>
  );
}
