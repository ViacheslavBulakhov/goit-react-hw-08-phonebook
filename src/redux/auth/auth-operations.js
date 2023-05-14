import axios from 'axios';
import {
  notifyErrorLogin,
  notifyErrorRegistration,
  notifyFulfilledLogin,
} from 'components/Toasters/Toasters';
const { createAsyncThunk } = require('@reduxjs/toolkit');

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registration = createAsyncThunk(
  'auth/registration',
  async credentials => {
    try {
      const { data } = await axios.post('/users/signup', credentials);

      token.set(data.token);
      return data;
    } catch (error) {
      notifyErrorRegistration();
      console.log(error);
    }
  }
);

export const logIn = createAsyncThunk('auth/logIn', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    notifyFulfilledLogin();
    return data;
  } catch (error) {
    notifyErrorLogin();
    return;
  }
});

export const logOut = createAsyncThunk('auth/logOut', async credentials => {
  try {
    const { data } = await axios.post('/users/logout');
    token.unset();

    return data;
  } catch (error) {
    console.log(error);
  }
});

//зареєстрований акк
// aDmisn2762
// slassssd8@gddmail.com
// 12345678
