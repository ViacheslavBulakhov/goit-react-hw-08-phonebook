import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL =
  "https://64511247e1f6f1bb22a72c81.mockapi.io/api/v1/contacts";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  try {
    const response = await axios.get("");
    return response.data;
  } catch (error) {
    return error;
  }
});

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    try {
      await axios.delete(`${id}`);
      return id;
    } catch (error) {
      return error;
    }
  }
);

export const postContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    try {
      const { data } = await axios.post("", contact);
      return data;
    } catch (error) {
      return error;
    }
  }
);
