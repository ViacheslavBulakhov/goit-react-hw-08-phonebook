import { logIn, registration, logOut } from './auth-operations';

export const extraActions = [logIn, registration, logOut];

export const getActions = type => extraActions.map(action => action[type]);

export const handlePending = state => {
  state.isLoader = true;
};

export const handlefulfilled = state => {
  state.isLoader = false;
};

export const handleRejected = (state, { payload }) => {
  state.isLoader = false;
};
