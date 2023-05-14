import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/auth-operations';

const initialState = {
  name: '',
  email: '',
  password: '',
};

function RegistrationPage() {
  const [formData, setFormData] = useState(initialState);
  const dispath = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value.trim(),
    }));
  };

  const handleRegistrationSubmit = () => {
    dispath(registration(formData));
  };
  return (
    <Flex bg="gray.100" align="center" justify="center" h={'100vh'}>
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={initialState}
          onSubmit={handleRegistrationSubmit}
        >
          {({ handleSubmit, errors }) => {
            return (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl
                    isInvalid={!!errors.name && formData.name === ''}
                  >
                    <FormLabel htmlFor="password">Name</FormLabel>
                    <Field
                      as={Input}
                      id="name"
                      name="name"
                      type="text"
                      variant="filled"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={!!errors.password && formData.email === ''}
                  >
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      variant="filled"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </FormControl>

                  <FormControl
                    isInvalid={!!errors.password && formData.password === ''}
                  >
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      variant="filled"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>

                  <Button type="submit" colorScheme="purple" width="full">
                    Registration
                  </Button>
                </VStack>
              </form>
            );
          }}
        </Formik>
      </Box>
    </Flex>
  );
}
export default RegistrationPage;
