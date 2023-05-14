import { Formik, Field } from 'formik';
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
import { postContact } from 'redux/operation';

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

const initialValues = {
  name: '',
  number: '',
};

export function ContactForm({ onClose }) {
  const contacts = useSelector(selectContacts);

  const dispath = useDispatch();

  const addContact = contact => {
    !checkOfValidContact(contact)
      ? dispath(postContact(contact))
      : alert(`${contact.name} is olready in contacts.`);
  };

  const handleSubmit = (value, { resetForm }) => {
    addContact({ ...value });
    onClose();
    resetForm();
  };

  const checkOfValidContact = value =>
    contacts.find(
      contact => contact.name.toLowerCase() === value.name.toLowerCase()
    );

  return (
    <>
      <ModalHeader>Add New Contact</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, errors, touched }) => {
            return (
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

                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
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
                    Add contact
                  </Button>
                </VStack>
              </form>
            );
          }}
        </Formik>
      </ModalBody>
    </>
  );
}

/* <FormControl
    isInvalid={!!errors.password && touched.password}
  >
    <FormLabel htmlFor="number">Phone Number</FormLabel>
    <InputMask
      mask="+380-99-999-99-99"
      onChange={e => setNumber(e.target.value)}
    >
      {inputProps => (
        <Input
          id="number"
          placeholder="+380-__-___-__-__"
          type="tel"
          name="number"
          value={number}
          {...inputProps}
        />
      )}
    </InputMask>
  </FormControl> */
