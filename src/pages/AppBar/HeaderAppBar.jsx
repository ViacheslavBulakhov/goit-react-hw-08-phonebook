import { NavLink } from 'react-router-dom';

import LoggedNav from './LoggedNav';

export default function HeaderAppBar() {
  return (
    <div>
      <NavLink
        to={`/`}
        style={{
          textDecoration: 'none',
        }}
      >
        PhoneBook
      </NavLink>
      <LoggedNav />
    </div>
  );
}
