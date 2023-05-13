import { Formik, Field } from 'formik';

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

const initialState = {
  email: '',
  password: '',
};

export default function LoginPage() {
  const [formData, setFormData] = useState(initialState);

  const dispath = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setFormData(prevFormData => ({ ...prevFormData, [name]: value.trim() }));
  };

  const handleSubmit = async () => {
    dispath(logIn(formData));
  };

  return (
    <Flex bg="gray.100" align="center" justify="center" h={'100vh'}>
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik initialValues={initialState} onSubmit={handleSubmit}>
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
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
                <FormControl isInvalid={!!errors.password && touched.password}>
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
                  Login
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
