import { useEffect, useState } from "react";
import "./App.css";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ContactList } from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "./redux/contactsOps";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectLoading } from "./redux/contactsSlice";

// const defaultData = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading contacts...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ContactList />
    </div>
  );
}

export default App;
