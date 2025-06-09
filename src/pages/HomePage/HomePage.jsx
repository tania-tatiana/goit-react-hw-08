import styles from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div>
      <h1 className={styles.title}>Hello, User!</h1>
      <p className={styles.text}>This is text</p>
    </div>
  );
}
