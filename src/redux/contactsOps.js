import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://66d460735b34bcb9ab3e6df3.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/");
      return response.data;
    } catch (e) {
      toast.error('Contacts could not received from remote server.');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/", newContact);
      toast.success('Contact created succesfully.')
      return response.data;
    } catch (e) {
      toast.error('Contact could not created.');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/${contactId}`);
      toast.success('Contact deleted succesfully.')
      return response.data;
    } catch (e) {
      toast.error('Contact could not deleted.');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
