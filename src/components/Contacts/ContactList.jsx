import { useDispatch, useSelector } from "react-redux";

import { ContactElement } from "./contacts.styled";
import { selectContacts, selectFilter, selectIsLoading } from "redux/selectors";
import { deleteContact } from "redux/operation";

import HashLoader from "react-spinners/HashLoader";
import { useState } from "react";

export function ContactList() {

  const dispath = useDispatch();
  
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const isLoading = useSelector(selectIsLoading);
  const [btnLoad, setBtnLoad] = useState("");

  const getFilteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContact = (id, e) => {
    setBtnLoad(e.target.name);
    dispath(deleteContact(id));
  };

  return (
    <>
      <ul>
        {getFilteredContacts.map((contact) => (
          <ContactElement key={contact.id}>
            <span>{contact.name}: </span>
            <span>{contact.phone} </span>
            <button
              style={{
                width: 55,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              type="button"
              name={contact.id}
              onClick={(e) => onDeleteContact(contact.id, e)}
            >
              {isLoading && btnLoad === contact.id ? (
                <HashLoader
                  color="green"
                  loading="true"
                  size={25}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                "Delete"
              )}
            </button>
          </ContactElement>
        ))}
      </ul>
    </>
  );
}
