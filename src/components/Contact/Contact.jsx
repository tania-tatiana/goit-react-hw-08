import styles from "./Contact.module.css";
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.contactContainer}>
      <div className={styles.textBlock}>
        <div className={styles.info}>
          <IoMdPerson color="#363535" size={22} />
          <p className={styles.text}>{name}</p>
        </div>
        <div className={styles.info}>
          <FaPhoneAlt color="#363535" size={20} />
          <p className={styles.text}>{number}</p>
        </div>
      </div>
      <button
        className={styles.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};
