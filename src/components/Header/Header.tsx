import logo from "../../assets/logo.svg";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={logo} />
    </header>
  );
}
