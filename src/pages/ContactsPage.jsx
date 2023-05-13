import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operation';
import { ContactForm } from 'components/ContactForm/contactForm';
import { ContactList } from 'components/Contacts/ContactList';
import { Filter } from 'components/Filter/filter';
import authSelectors from 'redux/auth/auth-selectors';
import { token } from 'redux/auth/auth-operations';
import {
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoggedIn = useSelector(authSelectors.selectToken);
  const dispath = useDispatch();

  const isHaveToken = useSelector(authSelectors.selectToken);
  isHaveToken && token.set(isHaveToken);

  useEffect(() => {
    isLoggedIn && dispath(fetchContacts());
  }, [dispath, isLoggedIn]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div style={{ padding: 10, display: 'flex' }}>
      <div
        style={{
          width: 500,
        }}
      >
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <p>You have no contacts on phonebook yet</p>
        )}
      </div>
      <Button onClick={onOpen}>
        <AddIcon />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ContactForm onClose={onClose} />
        </ModalContent>
      </Modal>
    </div>
  );
};
export default ContactsPage;
