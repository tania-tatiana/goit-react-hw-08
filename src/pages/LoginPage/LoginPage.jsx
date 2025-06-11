import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div>
      <h1 className={css.title}>Login your account</h1>
      <LoginForm />
    </div>
  );
}
