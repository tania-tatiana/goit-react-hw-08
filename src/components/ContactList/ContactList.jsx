import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import styles from "./ContactList.module.css";
import {
  selectContacts,
  selectFilteredContacts,
} from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <h1 className={styles.title}>Phonebook</h1>
      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.item}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
    </div>
  );
};
