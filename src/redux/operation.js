import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  notifyCreacteNewContact,
  notifyDeleteContact,
  notifyUpdateContact,
} from 'components/Toasters/Toasters';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const { data } = await axios.get('/contacts');

    return data;
  } catch (error) {
    return error;
  }
});

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, name, number }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      notifyUpdateContact();
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const postContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      const { data } = await axios.post('/contacts', contact);
      notifyCreacteNewContact();
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      await axios.delete(`/contacts/${id}`);
      notifyDeleteContact();
      return id;
    } catch (error) {
      return error;
    }
  }
);
