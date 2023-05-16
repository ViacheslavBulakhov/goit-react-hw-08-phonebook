import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { logIn, logOut, refreshUser, registration } from './auth-operations';
import {
  handlePending,
  handleRejected,
  handlefulfilled,
  getActions,
  userFulfilled,
  getInitialState,
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
    builder
      // REGISTRATION
      .addCase(registration.fulfilled, userFulfilled)

      //LogIn
      .addCase(logIn.fulfilled, userFulfilled)
      .addCase(logIn.rejected, state => {
        state.isLoggedIn = false;
      })

      // LOGOUT
      .addCase(logOut.fulfilled, getInitialState)

      //REFRESH USER
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.user = payload;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      })

      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handlefulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
export default authReducer;
