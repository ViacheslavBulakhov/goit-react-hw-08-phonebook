import { logOut } from 'redux/auth/auth-operations';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Tag } from '@chakra-ui/react';

import authSelectors from 'redux/auth/auth-selectors';

export default function LoggedNav() {
  const isLoggedIn = useSelector(authSelectors.selectToken);
  const name = useSelector(state => state.auth.user.name);
  const dispath = useDispatch();

  return isLoggedIn ? (
    <>
      <Tag size={'lg'} key={'lg'} variant="solid" colorScheme="teal" mr="10px">
        User: {name}
      </Tag>

      <NavLink to={`contacts`}>
        <Button colorScheme="teal" mr={4}>
          Contacts
        </Button>
      </NavLink>

      <NavLink to={`/`}>
        <Button colorScheme="teal" mr={4} onClick={() => dispath(logOut())}>
          LogOut
        </Button>
      </NavLink>
    </>
  ) : (
    <>
      <NavLink to={`registration`}>
        <Button colorScheme="teal" mr={4}>
          Registration
        </Button>
      </NavLink>

      <NavLink to={`login`}>
        <Button colorScheme="teal" mr={4}>
          Login
        </Button>
      </NavLink>
    </>
  );
}
