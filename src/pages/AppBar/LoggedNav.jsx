import { logOut } from 'redux/auth/auth-operations';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import authSelectors from 'redux/auth/auth-selectors';
export default function LoggedNav() {
  const isLoggedIn = useSelector(authSelectors.selectToken);
  const name = useSelector(state => state.auth.user.name);
  const dispath = useDispatch();

  return isLoggedIn ? (
    <>
      <NavLink
        to={`contacts`}
        style={{
          color: 'white',
        }}
      >
        <Button color="inherit">Contacts</Button>
      </NavLink>

      <span>{name}</span>

      <NavLink
        to={`/`}
        style={{
          color: 'white',
        }}
      >
        <Button onClick={() => dispath(logOut())} color="inherit">
          {' '}
          LogOut{' '}
        </Button>
      </NavLink>
    </>
  ) : (
    <>
      <NavLink
        to={`registration`}
        style={{
          color: 'white',
        }}
      >
        <Button color="inherit">Registration</Button>
      </NavLink>

      <NavLink
        to={`login`}
        style={{
          color: 'white',
        }}
      >
        <Button color="inherit">Login</Button>
      </NavLink>
    </>
  );
}
