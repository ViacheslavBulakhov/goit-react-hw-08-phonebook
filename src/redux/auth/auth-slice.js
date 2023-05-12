import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { logIn, registration, logOut } from './auth-operations';
import {
  handlePending,
  handleRejected,
  handlefulfilled,
  getActions,
} from 'redux/auth/auth-Utils';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

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

    // LOGIN
    builder
      .addCase(logIn.fulfilled, (state, { payload: { token, user } }) => {
        state.isLoggedIn = true;
        state.token = token;
        state.user.name = user.name;
        state.user.email = user.email;
      })
      .addCase(logIn.rejected, state => {
        state.isLoggedIn = false;
      })
      // LOGOUT
      .addCase(logOut.fulfilled, state => {
        state.token = '';
        state.user = { name: null, email: null };
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handlefulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'user'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
export default authReducer;
