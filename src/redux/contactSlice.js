import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, deleteContact, postContact } from "./operation";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    //fetch all
    builder.addCase(fetchContacts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchContacts.fulfilled, (state, { payload }) => {
      state.items = [...payload];
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(fetchContacts.rejected, (state, { payload }) => {
      state.error = payload;
    });

    //remove contact
    builder.addCase(deleteContact.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(deleteContact.fulfilled, (state, { payload }) => {
      state.items = state.items.filter((contact) => contact.id !== payload);
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(deleteContact.rejected, (state, { payload }) => {
      state.error = payload;
    });

    //add contact
    builder.addCase(postContact.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(postContact.fulfilled, (state, { payload }) => {
      state.items.push(payload);
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(postContact.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addNewContact, removeContact } = contactsSlice.actions;
