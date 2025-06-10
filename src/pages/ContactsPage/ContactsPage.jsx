import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskList from "../../components/TaskList/TaskList";
import ContactEditor from "../../components/ContactEditor/ContactEditor";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Your tasks</h1>
      <ContactEditor />
      <div>{isLoading && "Request in progress..."}</div>
      <TaskList />
    </>
  );
}
