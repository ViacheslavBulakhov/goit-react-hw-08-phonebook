import axios from 'axios';
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

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const logIn = createAsyncThunk('auth/logIn', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);

    return data;
  } catch (error) {
    console.log(error);
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
// aDmisn2762
// slassssd8@gddmail.com
// 12345678
