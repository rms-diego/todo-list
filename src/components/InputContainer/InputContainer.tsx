import styles from "./InputContainer.module.scss";
import { Plus } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

interface PropsInputContainer {
  createNewTask(content: string): void;
}

export function InputContainer({ createNewTask }: PropsInputContainer) {
  const [content, setContent] = useState("");

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setContent(target.value);
  };

  const handleCreateNewTask = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    createNewTask(content);
    setContent("");
  };

  return (
    <form className={styles.inputContainer}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={content}
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleCreateNewTask}>
        Criar
        <Plus />
      </button>
    </form>
  );
}
