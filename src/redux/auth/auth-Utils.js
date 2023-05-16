import { logIn, registration, logOut } from './auth-operations';

export const extraActions = [logIn, registration, logOut];

export const getActions = type => extraActions.map(action => action[type]);

export const handlePending = state => {
  state.isLoader = true;
};

export const handlefulfilled = state => {
  state.isLoader = false;
};

export const handleRejected = state => {
  state.isLoader = false;
};

export const userFulfilled = (state, { payload: { token, user } }) => {
  state.isLoggedIn = true;
  state.token = token;
  state.user.name = user.name;
  state.user.email = user.email;
};

export const getInitialState = state => {
  state.isLoggedIn = false;
  state.token = '';
  state.user = { name: null, email: null };
};
