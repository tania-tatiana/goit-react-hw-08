import css from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div>
      <h1 className={css.title}>Hello, User!</h1>
      <p className={css.text}>This is text</p>
    </div>
  );
}
