import { logOut } from 'redux/auth/auth-operations';
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
        <button color="inherit">Contacts</button>
      </NavLink>

      <span>{name}</span>

      <NavLink
        to={`/`}
        style={{
          color: 'white',
        }}
      >
        <button onClick={() => dispath(logOut())} color="inherit">
          {' '}
          LogOut{' '}
        </button>
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
        <button color="inherit">Registration</button>
      </NavLink>

      <NavLink
        to={`login`}
        style={{
          color: 'white',
        }}
      >
        <button color="inherit">Login</button>
      </NavLink>
    </>
  );
}
