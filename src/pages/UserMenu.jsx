import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PhoneBook
          </Typography>

          <NavLink
            to={`contacts`}
            style={{
              color: 'white',
            }}
          >
            <Button color="inherit">Contacts</Button>
          </NavLink>

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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
