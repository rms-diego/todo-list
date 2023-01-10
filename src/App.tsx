import styles from "./styles/app.module.scss";

import { Header } from "./components/Header/Header";
import { InputContainer } from "./components/InputContainer/InputContainer";
import { TaskContainer } from "./components/TaskContainer/TaskContainer";

export function App() {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <InputContainer />
        <TaskContainer />
      </main>
    </>
  );
}
