import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    add(state, action) {
    state.items.push(action.payload)
    },
    remove(state, action) {
    const idxContact = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(idxContact, 1); // видалення контакту по id
    },
  },
});

export const { add, remove } = contactsSlice.actions; 


export const getContacts = state => state.contacts.items;
