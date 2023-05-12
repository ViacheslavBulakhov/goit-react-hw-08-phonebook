import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/auth-operations';

const initialState = {
  name: '',
  email: '',
  password: '',
};

function RegistrationForm() {
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
      <form onSubmit={handleSubmit}>
        <h2>Registration</h2>

        <input
          label="Username"
          name="name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
        ></input>
        <input
          label="Email"
          name="email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
        ></input>
        <input
          label="Password"
          name="password"
          variant="outlined"
          type="password"
          value={formData.password}
          onChange={handleChange}
        ></input>
        <button variant="contained" color="primary" type="submit">
          Register
        </button>
      </form>
    </>
  );
}

export default RegistrationForm;
