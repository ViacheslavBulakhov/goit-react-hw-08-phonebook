import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';



const initialState = {
  email: '',
  password: '',
};

function LoginForm() {
  const [formData, setFormData] = useState(initialState);

  const dispath = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setFormData(prevFormData => ({ ...prevFormData, [name]: value.trim() }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    dispath(logIn(formData));
  };

  return (
    <>
      <form  onSubmit={handleSubmit}>
        <h2>Log in</h2>

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
        
        <button
          
          variant="contained"
          color="primary"
          type="submit"
        >
          Log in
        </button>
      </form>
    </>
  );
}

export default LoginForm;
