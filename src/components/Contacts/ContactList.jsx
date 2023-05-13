import { useDispatch, useSelector } from 'react-redux';
import { ContactElement } from './contacts.styled';
import { selectContacts, selectFilter, selectIsLoading } from 'redux/selectors';
import { deleteContact } from 'redux/operation';
import HashLoader from 'react-spinners/HashLoader';
import { useEffect, useState } from 'react';
import { UpdateContactForm } from 'components/ContactForm/updateContactForm';
import {
  Modal,
  ModalContent,
  ModalOverlay,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';

export function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const isLoading = useSelector(selectIsLoading);
  const [btnLoad, setBtnLoad] = useState('');

  const [currentContact, setCurrentContact] = useState({
    name: '',
    number: '',
    id: '',
  });

  const dispath = useDispatch();
  const getFilteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContact = (id, e) => {
    setBtnLoad(e.target.name);
    dispath(deleteContact(id));
  };

  const onUpdate = contact => {
    onOpen();

    setCurrentContact(state => (state = { ...contact }));
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <ul>
        {getFilteredContacts.map(contact => (
          <ContactElement key={contact.id}>
            <span>{contact.name}: </span>
            <span>{contact.number} </span>
            <Spacer />
            <button onClick={() => onUpdate({ ...contact })}>Update</button>
            <button
              style={{
                width: 55,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              type="button"
              name={contact.id}
              onClick={e => onDeleteContact(contact.id, e)}
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
                'Delete'
              )}
            </button>
          </ContactElement>
        ))}
      </ul>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <UpdateContactForm
            currentContact={currentContact}
            onClose={onClose}
          />
        </ModalContent>
      </Modal>
    </div>
  );
}
