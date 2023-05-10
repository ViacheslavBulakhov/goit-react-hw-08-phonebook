import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { registration } from 'redux/auth/auth-operations';

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
  name: '',
  email: '',
  password: '',
};

function RegistrationForm() {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const dispath = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setFormData(prevFormData => ({ ...prevFormData, [name]: value.trim() }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispath(registration(formData));
  };

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.input}
          label="Username"
          name="name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          className={classes.input}
          label="Email"
          name="email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          className={classes.input}
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
          Register
        </Button>
      </form>
    </>
  );
}

export default RegistrationForm;
