import { Formik, Field } from "formik";
import * as Yup from "yup";

import { useSelector, useDispatch } from "react-redux";

import { RegisterForm, Label, Error } from "./contactFrom.styled";
import { selectContacts, selectIsLoading } from "redux/selectors";
import { postContact } from "redux/operation";

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),

  phone: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    )
    .required(),
});

const initialValues = {
  name: "",
  phone: "",
};

export function ContactForm() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const dispath = useDispatch();

  const addContact = (contact) => {
    !checkOfValidContact(contact)
      ? dispath(postContact(contact))
      : alert(`${contact.name} is olready in contacts.`);
  };

  const handleSubmit = (value, { resetForm }) => {
    addContact({ ...value });
    resetForm();
  };

  const checkOfValidContact = (value) =>
    contacts.find(
      (contact) => contact.name.toLowerCase() === value.name.toLowerCase()
    );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <RegisterForm>
        <Label htmlFor="name">Name</Label>
        <Field id="name" type="text" name="name" />
        <Error name="name" component="span" />

        <Label htmlFor="name">Number</Label>
        <Field type="tel" name="phone" />
        <Error name="phone" component="span" />

        <button
          type="submit"
          disabled={isLoading}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Add contact
        </button>
      </RegisterForm>
    </Formik>
  );
}
