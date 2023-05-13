import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  fetchContacts,
  deleteContact,
  postContact,
  updateContact,
} from './operation';
import {
  handlePending,
  handleRejected,
  handlefulfilled,
  getActions,
} from './Utils/contactSliceUtils';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    //fetchAll
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = [...payload];
      })
      //postContact
      .addCase(postContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      //upadteContact
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(item => item.id === payload.id);
        state.items[index] = { ...payload };
      })

      //deleteContact
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(contact => contact.id !== payload);
      })

      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handlefulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addNewContact, removeContact } = contactsSlice.actions;
