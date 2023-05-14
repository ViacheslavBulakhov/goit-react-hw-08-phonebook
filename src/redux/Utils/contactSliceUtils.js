import { fetchContacts, deleteContact, postContact } from 'redux/operation';
const extraActions = [fetchContacts, deleteContact, postContact];

export const getActions = type => extraActions.map(action => action[type]);

export const handlePending = state => {
  state.isLoading = true;
};

export const handlefulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  console.log(payload);
  state.error = payload;
};
