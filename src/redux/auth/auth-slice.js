import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { logIn, registration } from './auth-operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoader: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    // REGISTRATION
    builder.addCase(registration.pending, state => {
      state.isLoader = true;
    });

    builder.addCase(registration.fulfilled, state => {
      state.isLoader = false;
    });

    builder.addCase(registration.rejected, state => {
      state.isLoader = false;
    });

    // LOGIN
    builder.addCase(logIn.pending, state => {
      state.isLoggedIn = true;
    });

    builder.addCase(logIn.fulfilled, (state, { payload: { token, user } }) => {
      state.isLoggedIn = true;
      state.token = token;
      state.user.name = user.name;
      state.user.email = user.email;
    });

    builder.addCase(logIn.rejected, state => {
      state.isLoggedIn = true;
    });

    // LOGOUT
    // builder.addCase(registration.pending, state => {
    //   state.isLoggedIn = true;
    // });

    // builder.addCase(registration.fulfilled, state => {
    //   state.isLoggedIn = true;
    // });

    // builder.addCase(registration.rejected, state => {
    //   state.isLoggedIn = true;
    // });
  },
});
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
export default authReducer;
