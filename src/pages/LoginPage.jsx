import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const initialState = {
  email: '',
  password: '',
};

function LoginForm() {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);

  const dispath = useDispatch();
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  const handleChange = ({ target: { name, value } }) => {
    setFormData(prevFormData => ({ ...prevFormData, [name]: value.trim() }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    dispath(logIn(formData));
  };

  return (
    <>
      {!isLoggedIn && (
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            // className={classes.input}
            label="Email"
            name="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            // className={classes.input}
            label="Password"
            name="password"
            variant="outlined"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
          >
            Log in
          </Button>
        </form>
      )}
    </>
  );
}

export default LoginForm;
