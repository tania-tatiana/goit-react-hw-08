import styles from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

const formSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Minimum 3 lettters")
    .max(50, "Maximum 50 lettters")
    .required("Name is required"),
  usernumber: Yup.string()
    .phone("UA", "Невірний номер телефону")
    .required("Number is required"),
});

const fieldId = nanoid();

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, helpers) => {
    const newContact = {
      name: values.username,
      number: values.usernumber,
    };
    dispatch(addContact(newContact));
    helpers.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: "",
        usernumber: "",
      }}
      validationSchema={formSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.formContainer}>
        <label className={styles.formLabel} htmlFor={`${fieldId}-username`}>
          Name
        </label>
        <Field
          className={styles.formInput}
          type="text"
          name="username"
          id={`${fieldId}-username`}
        />
        <ErrorMessage
          component="div"
          className={styles.formError}
          name="username"
        />
        <label className={styles.formLabel} htmlFor={`${fieldId}-usernumber`}>
          Number
        </label>
        <Field
          className={styles.formInput}
          type="text"
          name="usernumber"
          id={`${fieldId}-usernumber`}
        />
        <ErrorMessage
          component="div"
          className={styles.formError}
          name="usernumber"
        />
        <button className={styles.formSubmit} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
