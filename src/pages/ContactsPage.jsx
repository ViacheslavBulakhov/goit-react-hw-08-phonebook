import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operation';
import { ContactForm } from 'components/ContactForm/contactForm';
import { ContactList } from 'components/Contacts/ContactList';
import { Filter } from 'components/Filter/filter';
import authSelectors from 'redux/auth/auth-selectors';
import { token } from 'redux/auth/auth-operations';

const mainWrapStyles = {
  display: ' flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoggedIn = useSelector(authSelectors.selectToken);
  const dispath = useDispatch();

  const isHaveToken = useSelector(authSelectors.selectToken);
  isHaveToken && token.set(isHaveToken);

  useEffect(() => {
    isLoggedIn && dispath(fetchContacts());
  }, [dispath, isLoggedIn]);

  return (
    <div style={mainWrapStyles}>
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
};
