import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';

import * as Yup from 'yup';

import { useSelector, useDispatch } from 'react-redux';

import { selectContacts } from 'redux/selectors';
import { updateContact } from 'redux/operation';

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),

  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export function UpdateContactForm({ onClose, currentContact }) {
  const contacts = useSelector(selectContacts);

  const dispath = useDispatch();

  const refreshContact = contact => {
    !checkOfValidContact(contact)
      ? dispath(updateContact(contact))
      : alert(`${contact.name} is olready in contacts.`);
  };

  const handleSubmit = (value, { resetForm }) => {
    refreshContact({ ...value });
    onClose();
    resetForm();
  };

  const checkOfValidContact = value => {
    return contacts.find(contact => {
      if (contact.id === currentContact.id) {
        return false;
      } else {
        return contact.name.toLowerCase() === value.name.toLowerCase();
      }
    });
  };

  return (
    <>
      <ModalHeader>Update Contact</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <Formik
          initialValues={currentContact}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="number">Number</FormLabel>
                  <Field
                    as={Input}
                    id="number"
                    name="number"
                    type="tel"
                    placeholder="Number"
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>

                <Button type="submit" colorScheme="teal" width="full">
                  Update contact
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </ModalBody>
    </>
  );
}
UpdateContactForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  currentContact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
