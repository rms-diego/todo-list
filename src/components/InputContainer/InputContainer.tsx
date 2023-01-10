import styles from "./InputContainer.module.scss";
import plusIcon from "../../assets/plus-icon.svg";

export function InputContainer() {
  return (
    <section className={styles.inputContainer}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        <img src={plusIcon} />
      </button>
    </section>
  );
}
