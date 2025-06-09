import styles from "./RegistrationPage .module.css";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default function RegistrationPage() {
  return (
    <div>
      <h1 className={styles.title}>Register your account</h1>
      <RegistrationForm />
    </div>
  );
}
