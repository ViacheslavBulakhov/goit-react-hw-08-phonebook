import { Box, Flex, Spacer } from '@chakra-ui/react';
import LoggedNav from './LoggedNav';
import { NavLink } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export default function HeaderAppBar() {
  return (
    <Box bg="gray.200" p={4}>
      <Toaster />
      <Flex alignItems="center">
        <NavLink to={'/'}>Phonebook</NavLink>

        <Spacer />

        <LoggedNav />
      </Flex>
    </Box>
  );
}
