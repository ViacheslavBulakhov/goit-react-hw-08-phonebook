import { useSelector, useDispatch } from "react-redux";

import { ContactForm } from "./ContactForm/contactForm";
import { ContactList } from "./Contacts/ContactList";
import { Filter } from "./Filter/filter";
import { selectContacts } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operation";

export function App() {
  const contacts = useSelector(selectContacts);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchContacts());
  }, [dispath]);

  return (
    <div>
      <h1>PhoneBook</h1>
      <ContactForm />

      <h2>Contacts</h2>

      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>You have no contacts on phonebook yet</p>
      )}
    </div>
  );
}
